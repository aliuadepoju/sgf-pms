import graphql from 'graphql';
import {
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
    GraphQLList,

} from 'graphql';
import Category from './category.model';
import CategoryType from './category.type';


const categoryQueries = {
    category: {
        type: CategoryType,
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve(parent, args) {
            return Category.findById(args.id);
        }
    },
    deleteCategory: {
        type: CategoryType,
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve(parent, args) {
            return Category.findByIdAndRemove(args.id);
        }
    },
    categories: {
        type: new GraphQLList(CategoryType),
        args: {},
        resolve(parent, args) {
            return Category.find().sort({

            });
        }
    },
}
module.exports = categoryQueries;