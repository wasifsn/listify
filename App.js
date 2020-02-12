import React, {useState} from 'react';
import {Text, View, StyleSheet, FlatList, Alert} from 'react-native';
import {uuid} from 'uuidv4';

import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'bread'},
    {id: uuid(), text: 'meat'},
    {id: uuid(), text: 'eggs'},
    {id: uuid(), text: 'veggies'},
  ]);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };

  const addItem = text => {
    if (!text) {
      Alert.alert('Error', 'Please add an item');
    } else {
      setItems(prevItems => {
        return [{id: uuid(), text}, ...prevItems];
      });
    }
  };
  return (
    <View style={styles.container}>
      <Header title="Listify"></Header>
      <AddItem addItem={addItem}></AddItem>
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem}></ListItem>
        )}></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
