import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';

import QuestionBox from './QuestionBox'

if (Meteor.isClient) {

  describe('QuestionBox', function () {

    it('should use question name as text in p ', function () {
      const question = 'Where is the spoon ? ';
      const wrapper = mount( <QuestionBox question={question}/> );
      const currentQuestion = wrapper.find('p').text();
      expect(currentQuestion).toBe(question);
    });
  });
}
