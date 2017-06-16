import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';

import RadioBox from './RadioBox'

if (Meteor.isClient) {

  describe('RadioBox', function () {

    it('should use response choice as radiobox ', function () {
      const response = 'No where.';
      const wrapper = mount( <RadioBox response={response}/> );
      const currentQuestion = wrapper.find('span').text();
      expect(currentQuestion).toBe(response);
    });

  });
}
