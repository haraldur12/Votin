import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

const Questions = new Mongo.Collection('questions');

if (Meteor.isServer) {
  Meteor.publish('questions', () => Questions.find());
}
Meteor.methods({
  'questions.insert': question => Questions.insert(question),
  'questions.feedbackUpdate': (_id, feedback) => {
    Questions.update({ _id, 'feedbacks.response': feedback }, {
      $inc: { 'feedbacks.$.count': 1 },
    });
  },
});

export { Questions };
