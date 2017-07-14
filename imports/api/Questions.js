import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check'
import SimpleSchema from 'simpl-schema';

const Questions = new Mongo.Collection('questions');

if (Meteor.isServer) {
  Meteor.publish('UserQuestions', userId => Questions.find({ userId }));
  Meteor.publish('currentQuestion', id => Questions.find({ _id: id }));
}
Meteor.methods({
  'questions.insert': (question) => {
    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    } else {
      return Questions.insert({
        ...question,
        userId: Meteor.userId()
      });
    }
  },
  'questions.setPrivacy': (id, setToPrivate) => {
    check(id, String);
    check(setToPrivate, Boolean);

    const question = Questions.findOne(id);
    if (question.userId !== Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
    Questions.update(id, { $set: { private: setToPrivate } });
  },
  'questions.removeQuestion': (id) => {
    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    } else {
      new SimpleSchema({
        id: {
          type: String,
          min: 1
        }
      }).validate({ id });
      Questions.remove(id);
    }
  },
  'questions.feedbackUpdate': (_id, feedback) => {
    Questions.update({ _id, 'feedbacks.response': feedback }, {
      $inc: { 'feedbacks.$.count': 1 }
    });
  }
});

export { Questions };
