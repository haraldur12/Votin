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
                      { response: 'Barcelona', count: 3 }],
    };
    const secondQ = {
      _id: '2',
      question: 'What is the capital of France ?',
      responses: ['Paris', 'Nice', 'Narbonne', 'Lyon'],
      feedbacks: [{ response: 'Paris', count: 51 },
                      { response: 'Nice', count: 34 },
                      { response: 'Narbonne', count: 32 },
                      { response: 'Lyon', count: 21 }],
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
    it('Should update feedback', (done) => {
      expect(Questions.findOne({ _id: '1' })).toExist();
      expect(Questions.findOne({ _id: '2' })).toExist();
      done();
    });
  });
}
