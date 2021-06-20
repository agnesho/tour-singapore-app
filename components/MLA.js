import React, {useEffect} from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import USS from './USS';
import MadameTussauds from './MadameTussauds';
import NationalLibrary from './NationalLibrary';

export default function MLA({navigation}) {

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => 
      <TouchableOpacity style={styles.restrictionsAlertButton} onPress={restrictionsAlert}> 
        <Text style={styles.restrictionsAlertButtonText}>Restrictions</Text> 
      </TouchableOpacity>
    });
  })

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {navigation.navigate("USS")}}> 
        <Text style={styles.item}>Universal Studios Singapore</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {navigation.navigate("Madame Tussauds")}}> 
        <Text style={styles.item}>Madame Tussauds</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {navigation.navigate("National Library")}}> 
        <Text style={styles.item}>National Library</Text>
      </TouchableOpacity>
    </View>
  )}

    function restrictionsAlert() {
      alert(
        'Group sizes up to 5\n20 pax for non-conveyance tours\n50 pax for conveyance tours\nOperating Capacity at 50%'
      )
  }

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },

  item: {
    width: "100%",
    fontWeight: 'bold', 
    fontSize: 20,
    height: 60,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#999", 
    paddingLeft: 20,
    paddingTop: 20,
  },

  restrictionsAlertButton: {
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 15,
    marginRight: 10,
  },
  restrictionsAlertButtonText: {
    fontWeight: 'bold',
    color: 'white',
  },
});