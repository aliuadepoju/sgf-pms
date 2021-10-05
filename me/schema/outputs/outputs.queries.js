import graphql from 'graphql';
import {
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
    GraphQLList,

} from 'graphql';
import Output from './outputs.model';
import OutputType from './outputs.type';


const OutputQueries = {
    outputs: {
        type: OutputType,
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve(parent, args) {
            return Output.findById(args.id);
        }
    },
    deleteOutput: {
        type: OutputType,
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve(parent, args) {
            return Output.findByIdAndRemove(args.id);
        }
    },

    outputs: {
        type: new GraphQLList(OutputType),
        args: {},
        resolve(parent, args) {
            return Output.find().sort({

            });
        }
    },
    assignMandate: {
        type: OutputType,
        args: {
            outputId: {
                type: GraphQLID
            },
            mandateId: {
                type: GraphQLID
            }
        },
        async resolve(parent, args) {

            let output = await Output.findById(args.outputId);
            output.mandateId = args.mandateId;
            output.save();
            return output;
        }
    },
    outputsByMdas: {
        type: new GraphQLList(OutputType),
        args: {
            mdaId: {
                type: GraphQLID
            }
        },
        resolve(parent, args) {
            return Output.find({
                mdaId: args.mdaId,
                tree: 2
            }).sort({

            });
        }
    },

}
module.exports = OutputQueries;