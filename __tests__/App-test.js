/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../src/App';

import { Text } from 'react-native';
import { shallow } from 'enzyme';


// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';



describe('App',() =>{
  const wrapper = shallow(<App></App>)

  it('is Text visible?',()=>{
    expect(wrapper.find('Text').contains('ToDo TDD')).toBe(true);
  })

  it('is AddToDo visible?',()=>{
    expect(wrapper.find('AddToDo')).toHaveLength(1);
  })

  it('is ToDoList visible?',()=>{
    expect(wrapper.find('ToDoList')).toHaveLength(1);
  })
})