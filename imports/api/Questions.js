import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const Questions = new Mongo.Collection('questions');

if (Meteor.isServer) {
  Meteor.publish('questions');
}
Meteor.methods({
  'questions.insert'(question) {
    return Questions.insert(question);
  },
  'questions.update'(_id, feedback) {

    Questions.update({_id,"feedbacks.response" : feedback}, {
      $inc : {"feedbacks.$.count" : 1 } 
    });
  }
});
export { Questions };
