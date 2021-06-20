import React, {useEffect} from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { createStackNavigator} from '@react-navigation/stack';
import { Tab, NavigationContainer } from '@react-navigation/native';
import VivoCity from './VivoCity';
import Paragon from './Paragon';
import SuntecCity from './SuntecCity';

export default function ShoppingMalls({navigation}) {

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
      <TouchableOpacity onPress={() => {navigation.navigate("Vivo City")}}> 
        <Text style={styles.item}>VivoCity</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {navigation.navigate("Paragon")}}> 
        <Text style={styles.item}>Paragon Shopping Centre</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {navigation.navigate("Suntec City")}}> 
        <Text style={styles.item}>Suntec City</Text>
      </TouchableOpacity>
    </View>
  )}

    function restrictionsAlert() {
      alert(
        'Group sizes up to 5\nOccupancy Limit of 1 person per 10sqm'
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