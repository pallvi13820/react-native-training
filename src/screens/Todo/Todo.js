//todo.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodo, RemoveTodo } from '@/actions/todoaction';
import { StyleSheet, Dimensions } from 'react-native';
import {
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const Todo = ({ navigation }) => {
  const [todoValue, setTodoValue] = useState('');
  const dispatch = useDispatch();
  const data = useSelector(state => state?.todoreducer);
  const todos = data?.todos || [];

  const addTodo = () => {
    if (todos && !todos.some(todo => todo.text === todoValue)) {
      dispatch(AddTodo(todoValue));
      setTodoValue('');
    } else {
      alert(`${todoValue} already added in Todo List`);
    }
  };

  const renderTodoList = () => {
    return (
      <FlatList
        data={todos.reverse()}
        renderItem={({ item }) => (
          <View style={styles.todoView}>
            <View style={styles.todoList}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Todolist', { item })}
              >
                <Text numberOfLines={1}>{item.text}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    );
  };

  return (
    <View style={styles.main}>
      <TextInput
        style={styles.mainInput}
        onChangeText={setTodoValue}
        placeholder={'Add your todo here'}
        value={todoValue}
      />
      <Button name="increase" title="Add Todo" onPress={addTodo} />
      <Text style={{ alignSelf: 'stretch', paddingLeft: 40 }}>
        List of Todos :
      </Text>
      {renderTodoList()}
    </View>
  );
};

let width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
  },
  mainInput: {
    borderWidth: 1,
    height: 55,
    width: width * 0.9,
    padding: 10,
    margin: 10,
    alignItems: 'center',
    borderRadius: 9,
  },
  todoList: {
    borderWidth: 1,
    borderRadius: 10,
    width: width * 0.8,
    height: 40,
    paddingHorizontal: 10,
  },
  todoView: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    padding: 5,
  },
});

export default Todo;
