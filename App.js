import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert,TouchableWithoutFeedback, Keyboard } from 'react-native';
// import Sandbox from './components/Sandbox';
import AddTodo from './components/addTodo';
import Header from './components/Header';
import TodoItem from './components/TodoItem';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: 1 },
    { text: 'play football', key: 2 },
    { text: 'buy cookies', key: 3 },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [...prevTodos, { text: text, key: Math.random().toString() }];
      });
    } else {
      Alert.alert('OOPS!', 'todos must be over 3 char long', [
        { text: 'close', onPress: () => console.log('alert closed') },
      ]);
    }
  };
  return (
    // <Sandbox/>
    <TouchableWithoutFeedback onPress={()=> {
      Keyboard.dismiss();
      console.log('dismiss keyboard')
      }}>

    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1,
    // backgroundColor: 'lightblue'
  },
  list: {
    marginTop: 20,
    flex: 1,
    // backgroundColor: 'gold'
  },
});
