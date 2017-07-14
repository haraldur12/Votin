import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';

import Header from './Header';

if (Meteor.isClient) {
  describe('Header', () => {
    it('should use title prop as h1 text', () => {
      const title = 'Votin ';
      const wrapper = mount(<Header title={title} />);
      const actualTitle = wrapper.find('h1').text();
      expect(actualTitle).toBe(title);
    });
  });
}
