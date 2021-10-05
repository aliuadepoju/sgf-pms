import graphql from 'graphql';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import mail from '../../notification.js';

import {
    APP_SECRET,
} from '../../utils';
import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLInputObjectType
} from 'graphql';
import User from './user.model';
import UserType from './user.type';
import {
    UserAuthType,
    UserPasswordType
} from './user.auth';
import Activity from '../activity/activity.model';

const userInputType = new GraphQLInputObjectType({
    name: 'userInputType',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        mdaId: {
            type: GraphQLID
        },
        roleId: {
            type: GraphQLID
        },
        name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        activeYear: {
            type: GraphQLString
        },
        phone: {
            type: GraphQLString
        },
        password: {
            type: GraphQLString
        },

        email: {
            type: new GraphQLNonNull(GraphQLString)
        },


    })
});

const userMutations = {
    createUser: {
        type: UserType,
        args: {
            userInput: {
                type: userInputType
            }
        },
        async resolve(parent, args) {
            let data = args.userInput;

            const password = await bcrypt.hash(data.password, 10);
            // console.log(data);

            let user = await new User({
                name: data.name,
                phone: data.phone,
                password: password,
                email: data.email,
                mda: JSON.parse(data.mdaId),
                role: data.roleId,

            });
            await user.save();
            console.log(user);

            // let activity = new Activity({
            //     // type: data.type,
            //     text: "Registered ",
            //     operation: "Registration",
            //     device: args.device,
            //     userId: user._id,
            // })
            // await activity.save();
            return user;
        }
    },
    editUser: {
        type: UserType,
        args: {
            userInput: {
                type: userInputType
            }
        },
        async resolve(parent, args) {
            let data = await args.userInput;
            let password


            let user = {
                name: data.name,
                role: data.roleId,
                phone: data.phone,
                email: data.email,
                mda: JSON.parse(data.mdaId)

            };
            if (data.password) {
                password = await bcrypt.hash(data.password, 10);
                user.password = await password;
            }
            return User.findByIdAndUpdate(data.id, user, {
                new: true
            });
        }
    },

    deleteUser: {
        type: UserType,
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve(parent, args) {
            return User.findByIdAndRemove(args.id);
        }
    },
    setSpPreferences: {
        type: UserType,
        args: {
            id: {
                type: GraphQLID
            },
            preferences: {
                type: GraphQLString
            }
        },
        async resolve(parent, args) {
            let user = await User.findById(args.id);
            user.sp_preferences = args.preferences;
            return user.save();
        }
    },
    login: {
        type: UserAuthType,
        args: {
            email: {
                type: new GraphQLNonNull(GraphQLString)
            },
            password: {
                type: new GraphQLNonNull(GraphQLString)
            },




        },
        async resolve(parent, args) {
            const user = await User.findOne({
                email: args.email
            })
            //console.log(user);

            if (!user) {
                throw new Error('No such user found')
            }

            // 2
            // //console.log(user);

            const valid = await bcrypt.compare(args.password, user.password)
            if (!valid) {
                throw new Error('Invalid password')
            }

            const token = await jwt.sign({
                userId: user._id
            }, APP_SECRET);

            let activity = new Activity({
                // type: data.type,
                text: "Logged in",
                operation: "Login",
                userId: user._id,
            })
            await activity.save();


            // 3
            return {
                token,
                user,
            }
            // return user.save();
        }
    },
    setPassword: {
        type: UserType,
        args: {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            },
            password: {
                type: new GraphQLNonNull(GraphQLString)
            },

        },
        async resolve(parent, args) {
            const password = await bcrypt.hash(args.password, 10);
            return User.findByIdAndUpdate(args.id, {
                password: password
            }, {
                new: true

            })
            // return user.save();
        }
    },
    resetPassword: {
        type: UserType,
        args: {
            email: {
                type: new GraphQLNonNull(GraphQLString)
            },

        },
        async resolve(parent, args) {
            const user = await User.findOne({
                email: args.email,
            })
            if (!user) {
                throw new Error('No such user found')
            }
            var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            var token = '';
            for (var i = 16; i > 0; --i) {
                token += chars[Math.round(Math.random() * (chars.length - 1))];
            }
            user.reset = token;
            user.resetExpires = Date.now() + 3600000;
            user.save();
            let link = process.env.BASIC_URL + 'reset-password/' + user.reset;
            //console.log(link);
            mail.reset(user.email, link, user.name);

            return user;
        }
    },

    changePassword: {
        type: UserType,
        args: {
            token: {
                type: new GraphQLNonNull(GraphQLString)
            },
            password: {
                type: new GraphQLNonNull(GraphQLString)
            },

        },
        async resolve(parent, args) {
            const user = await User.findOne({
                reset: args.token,
            })
            if (!user || user.resetExpires > Date.now())
                throw new Error("Reset password token is invalid or expired");

            const password = await bcrypt.hash(args.password, 10);
            user.password = password;
            user.reset = null;
            user.resetExpires = null;

            await user.save();

            return user;
        }
    }
}
module.exports = userMutations;