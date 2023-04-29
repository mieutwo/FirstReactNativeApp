import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name,setName] = useState("Mandy")
  const [person,setPerson] = useState({name: 'bob',age: 30})

  const clickMe = () => {
    setName("Mieu")
    setPerson({name: 'Mandy Mieu', age: 22})
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{name}</Text>
      <Text style={styles.textStyle}>My name is {person.name} and my age is {person.age}</Text>
      <Button title='Click Me' color='red' onPress={()=>alert("Welcome to my app")} disabled={false}></Button>
      <View style={styles.button}>
        <Button title='Change' color='black' onPress={clickMe}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
    fontStyle: 'italic',
    backgroundColor: "white"
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    margin: 20
  }
});
