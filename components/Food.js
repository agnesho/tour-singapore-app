import React, {useEffect} from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LauPaSat from './LauPaSat';
import Breadstreet from './Breadstreet';
import Alazhar from './Alazhar';

export default function Food({navigation}) {

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
      <TouchableOpacity onPress={() => {navigation.navigate("Lau Pa Sat")}}> 
        <Text style={styles.item}>Lau Pa Sat</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {navigation.navigate("Breadstreet")}}> 
        <Text style={styles.item}>Bread Street Kitchen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {navigation.navigate("Al-Azhar")}}> 
        <Text style={styles.item}>Al-Azhar Restaurant</Text>
      </TouchableOpacity>
    </View>
  )}

    function restrictionsAlert() {
      alert(
        'Group sizes up to 5\nOnly take away allowed'
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