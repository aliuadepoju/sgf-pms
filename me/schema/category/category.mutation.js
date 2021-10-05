import graphql from 'graphql';
import {
    GraphQLNonNull,
    GraphQLString,
    GraphQLID
} from 'graphql';
import Category from './category.model';
import CategoryType from './category.type';



const categoryMutations = {
    createCategory: {
        type: CategoryType,
        args: {
            title: {
                type: new GraphQLNonNull(GraphQLString)
            },

        },
        resolve(parent, args) {
            let category = new Category({
                title: args.title,
                slug: args.title.replace(/\s+/g, '-').toLowerCase()
            });
            return category.save();
        }
    },
    editCategory: {
        type: CategoryType,
        args: {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            },
            title: {
                type: new GraphQLNonNull(GraphQLString)
            },
        },
        resolve(parent, args) {
            let category = {
                title: args.title,
                slug: args.title.replace(/\s+/g, '-').toLowerCase()
            };

            return Category.findByIdAndUpdate(args.id, category, {
                new: true
            });
        },
    },

}




module.exports = categoryMutations;