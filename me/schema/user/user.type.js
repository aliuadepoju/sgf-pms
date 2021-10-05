import graphql, {
    GraphQLInt
} from 'graphql';

import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLString,
    GraphQLList
} from 'graphql';
const Mda = require('../mdas/mdas.model');
const Role = require('../roles/roles.model');
const RoleType = require('../roles/roles.type');
const MdaType = require('../mdas/mdas.type');





const UserType = new GraphQLObjectType({
    name: 'Users',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        activeYear: {
            type: GraphQLString
        },
        name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        mdaList: {
            type: GraphQLString,
            async resolve(parent, args) {
                let role = await Role.findById(parent.role);
                if (parent.role.name == "Admin") return '';
                return JSON.stringify(parent.mda)
            }
        },
        mda: {
            type: new GraphQLList(MdaType),
            async resolve(parent, args) {
                // let role = await Role.findById(parent.role);
                // if (parent.role.name == "Admin") return [];
                //console.log(parent.mda);

                let mda = await Mda.find({
                    '_id': {
                        $in: parent.mda
                    }
                });
                //console.log(mda);

                return mda;

            }
        },
        role: {
            type: RoleType,
            resolve(parent, args) {
                return Role.findById(parent.role);
            }
        },
        password: {
            type: GraphQLString
        },
        phone: {
            type: GraphQLString
        },
        access: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },

        sp_preferences: {
            type: GraphQLString
        },

    })
});
module.exports = UserType;