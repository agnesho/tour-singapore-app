import React, {useEffect} from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Botanic from './Botanic';
import ConeyIsland from './ConeyIsland';
import SungeiBuloh from './SungeiBuloh';

export default function Nature({navigation}) {

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
      <TouchableOpacity onPress={() => {navigation.navigate("Botanic Gardens")}}> 
        <Text style={styles.item}>Botanic Gardens</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {navigation.navigate("Sungei Buloh")}}> 
        <Text style={styles.item}>Sungei Buloh Wetland Reserve</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {navigation.navigate("Coney Island")}}> 
        <Text style={styles.item}>Coney Island</Text>
      </TouchableOpacity>
    </View>
  )}

    function restrictionsAlert() {
      alert(
        'Group sizes up to 5\n20 pax for non-conveyance tours\n50 pax for conveyance tours'
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