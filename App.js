import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Header from './components/header';
import TodoItemList from './components/todoitem';
import AddTodo from './components/addTodo';

const App = () => {

  const [todos, setTodos] = useState([
    { text: 'aprender react', key: 1 },
    { text: 'aprender android', key: 2 },
    { text: 'aprender web', key: 3 },
  ]);

  const pressHandler = (key) => {
    setTodos((precTodos) => {
      return precTodos.filter(todos => todos.key != key);
    })
  };

  const subimitHandler = (text,resetValue) => {
    setTodos((prevTodos)=>{
      return [
        {text:text, key: Math.random().toString()},
        ...prevTodos

      ]
    });
    resetValue();
  };

  return (
    <View style={styles.body}>
      <Header />
      <View style={styles.content}>
        <AddTodo subimitHandler={subimitHandler}/>
        <FlatList style={styles.list}
          data={todos}
          keyExtractor={(item, index) => item.key.toString()}
          renderItem={({ item }) => (
            <TodoItemList item={item} pressHandler={pressHandler} />
          )}
        />
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
  },
  content: {
    paddingHorizontal: 24,
  },
  list: {
    marginTop: 30,
    color: Colors.black

  },
});

export default App;
