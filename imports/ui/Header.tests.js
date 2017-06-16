import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';

import Header from './Header';

if (Meteor.isClient) {

  describe('Header', function () {

    it('should use title prop as h1 text', function () {
      const title = 'Quantilope ';
      const wrapper = mount( <Header title={title}/> );
      const actualTitle = wrapper.find('h1').text();

      expect(actualTitle).toBe(title);
    });

  });
}
