import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import Message from './Message';

if (Meteor.isClient) {
  describe('Message', () => {
    it('should use title prop as p text', () => {
      const message = 'Start creating your question ';
      const wrapper = mount(<Message message={message} />);
      const currentMessage = wrapper.find('p').text();
      expect(currentMessage).toBe(message);
    });
  });
}
