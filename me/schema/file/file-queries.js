import graphql from 'graphql';
import {
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
    GraphQLList,

} from 'graphql';
import File from '../../models/files';
import FileType from './file-type';


const fileQueries = {
    file: {
        type: FileType,
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve(parent, args) {
            return File.findById(args.id);
        }
    },
    deleteFile: {
        type: FileType,
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve(parent, args) {
            return File.findByIdAndRemove(args.id);
        }
    },
    files: {
        type: new GraphQLList(FileType),
        args: {},
        resolve(parent, args) {
            return File.find().sort({

            });
        }
    },
}
module.exports = fileQueries;