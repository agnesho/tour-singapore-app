import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import Nature from './Nature';
import MLA from './MLA';
import ShoppingMalls from './ShoppingMalls';
import Food from './Food';


export default function ActivitiesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Things to do in Singapore!</Text>
      <TouchableOpacity onPress={() => {navigation.navigate("Nature")}}> 
        <Text style={styles.item}>Nature</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {navigation.navigate("Museums, Libraries and Attractions")}}> 
        <Text style={styles.item}>Museums, Libraries and Attractions</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {navigation.navigate("Shopping Malls")}}> 
        <Text style={styles.item}>Shopping Malls</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {navigation.navigate("Food")}}> 
        <Text style={styles.item}>Food</Text>
      </TouchableOpacity>    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingTop: 15,
    paddingBottom: 20,
  },
  item: {
    justifyContent: 'center',
    fontSize: 20,
    height: 60,
    paddingTop: 15,
    color: 'purple',
  },
});