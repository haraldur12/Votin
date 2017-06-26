import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

const Questions = new Mongo.Collection('questions');

if (Meteor.isServer) {
  Meteor.publish('questions', function questionPublisher() {
     return Questions.find();
   });
 }
Meteor.methods({

  'questions.insert'(question) {

    return Questions.insert(question);
  },

  // the name should correspond to the method
  'questions.update'(_id, feedback) {

    Questions.update({_id,"feedbacks.response" : feedback}, {
      $inc : {"feedbacks.$.count" : 1 }
    });
  }
});
export { Questions };
