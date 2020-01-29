
import React, {Component} from 'react';
import {Platform, Text, View} from 'react-native';
import AddToDo from './AddToDo';
import ToDoList from './ToDoList';

export default class App extends Component{
  render() {
    return(
      <View testId="welcome">
        <Text>ToDo TDD</Text>
        <AddToDo></AddToDo>
        <ToDoList></ToDoList>
      </View>
    );
  }
};
