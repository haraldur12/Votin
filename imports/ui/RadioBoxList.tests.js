import React from 'react';
import expect from 'expect';
import { Meteor } from 'meteor/meteor';
import { mount } from 'enzyme';

import {questions} from '../fixtures/fixtures';
import  RadioBoxList  from './RadioBoxList';

if (Meteor.isClient) {
  describe('RadioBoxList', function () {

  it('should render question responses as inputs',function(){
    const wrapper = mount( <RadioBoxList responses={questions[0].responses}/> );
    expect(wrapper.find("span").first().text()).toBe(questions[0].responses[0]);
   });
  });
}
