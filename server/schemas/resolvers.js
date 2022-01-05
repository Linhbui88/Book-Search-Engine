const {AuthenticationError} = require('apollo-server-express');
const {User} = require('../models');
const jwt = require('jsonwebtoken');
const {signToken, secret, expiration } = require('../utils/auth')

const resolvers ={
  Query:{
    me: async (parents, args, context, info) => {
      if(!context.auth_user) {
        return null
      }
      const foundUser = await User.findOne({_id: context.auth_user._id})
      return foundUser
    },
    
  },
  Mutation: {
    login : async (parents, {email, password}) =>{
      const user = await User.findOne({email})
      if(!user) {
        throw new AuthenticationError('No user with this email found')
      }
      const correctPw = await user.isCorrectPassword(password)
      if(!correctPw) {
        throw new AuthenticationError('Incorrect password')
      }
      const token = signToken(user);
      return {token, user}
    },
    addUser : async (parents ,{username, email, password}) =>{
      const user = await User.create({username, email, password})
      if(!user) {
        throw new AuthenticationError('Cant create User')
      }
      const token = signToken(user);
      return {token, user}
    },
    saveBook : async (parents, {_id, book}) =>{
      const updatedUserWithSavedBooks = await User.findOneAndUpdate(
        {_id},
        {$push :{savedBooks : book}},
        {new: true}
      );
      return updatedUserWithSavedBooks
    },
    removeBook : async (parents, {_id, bookId}) =>{
      const updatedUserwithRemovedBook = await User.findOneAndUpdate(
        {_id},
        {$pull :{savedBooks : bookId}}
      );
      return updatedUserwithRemovedBook
    }
  }
}
module.exports = resolvers;