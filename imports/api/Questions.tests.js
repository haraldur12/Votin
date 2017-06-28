import { Meteor } from 'meteor/meteor';
import expect from 'expect';
import { Questions } from './Questions';

if (Meteor.isServer) {
  describe('questions', () => {
    const firstQ = {
      _id: '1',
      question: 'What is the capital of Spain ?',
      responses: ['Madrid', 'Malaga', 'Almeria', 'Barcelona'],
      feedbacks: [{ response: 'Madrid', count: 9 },
                      { response: 'Malaga', count: 3 },
                      { response: 'Almeria', count: 2 },
                      { response: 'Barcelona', count: 3 }]
    };
    const secondQ = {
      _id: '2',
      question: 'What is the capital of France ?',
      responses: ['Paris', 'Nice', 'Narbonne', 'Lyon'],
      feedbacks: [{ response: 'Paris', count: 45 },
                      { response: 'Nice', count: 43 },
                      { response: 'Narbonne', count: 23 },
                      { response: 'Lyon', count: 12 }]
    };

    beforeEach(() => {
      Questions.remove({});
      Questions.insert(firstQ);
      Questions.insert(secondQ);
    });


    it('Should insert new questions to the database', (done) => {
      expect(Questions.findOne({ _id: '1' })).toExist();
      expect(Questions.findOne({ _id: '2' })).toExist();
      done();
    });

    it('Should update the count and check if it has been updated. --Paris', (done) => {
      Questions.update({ _id: '2', 'feedbacks.response': 'Paris' }, {
        $inc: { 'feedbacks.$.count': 13 } });
      const updatedQuestion = Questions.findOne({ _id: '2' });
      expect(updatedQuestion.feedbacks[0].count).toBe(58);
      done();
    });

    it('Should update the count and check if it has been updated. --Madrid', (done) => {
      Questions.update({ _id: '1', 'feedbacks.response': 'Madrid' }, {
        $inc: { 'feedbacks.$.count': 45 } });
      const updatedQuestion = Questions.findOne({ _id: '1' });
      expect(updatedQuestion.feedbacks[0].count).toBe(54);
      done();
    });
  });
}
