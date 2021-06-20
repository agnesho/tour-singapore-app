import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import ActivitiesScreen from './components/ActivitiesScreen';
import Nature from './components/Nature';
import MLA from './components/MLA';
import ShoppingMalls from './components/ShoppingMalls';
import Food from './components/Food';
import Botanic from './components/Botanic';
import ConeyIsland from './components/ConeyIsland';
import SungeiBuloh from './components/SungeiBuloh';
import USS from './components/USS';
import MadameTussauds from './components/MadameTussauds';
import NationalLibrary from './components/NationalLibrary';
import VivoCity from './components/VivoCity';
import Paragon from './components/Paragon';
import SuntecCity from './components/SuntecCity';
import LauPaSat from './components/LauPaSat';
import Breadstreet from './components/Breadstreet';
import Alazhar from './components/Alazhar';


function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>  
      <Text style={styles.text}>tOUR Singapore!</Text> 
      <TouchableOpacity onPress={() => {navigation.navigate("Activities")}}>
        <FontAwesome name="map" size={80} color="red" />
      </TouchableOpacity>
    </View>
  );
} 

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="" component={HomeScreen} options={{
          headerTitle: "", headerStyle: styles.homeheaderStyle,}}/>
        <Stack.Screen name="Activities" component={ActivitiesScreen} options={{
          headerTitle: "Activities",
          headerTitleStyle: styles.headerTitleStyle,
          headerStyle: styles.headerStyle,}}/>
        <Stack.Screen name="Nature" component={Nature} options={{
          headerTitle: "Nature",
          headerTitleStyle: styles.secondheaderTitleStyle,
          headerStyle: styles.secondheaderStyle,}} />
        <Stack.Screen name="Sungei Buloh" component={SungeiBuloh} />
        <Stack.Screen name="Botanic Gardens" component={Botanic} />
        <Stack.Screen name="Coney Island" component={ConeyIsland} />
        <Stack.Screen name="Museums, Libraries and Attractions" component={MLA} options={{
          headerTitle: "M.L.A.",
          headerTitleStyle: styles.secondheaderTitleStyle,
          headerStyle: styles.secondheaderStyle,}} />
        <Stack.Screen name="USS" component={USS} />
        <Stack.Screen name="Madame Tussauds" component={MadameTussauds} />
        <Stack.Screen name="National Library" component={NationalLibrary} />
        <Stack.Screen name="Shopping Malls" component={ShoppingMalls} options={{
          headerTitle: "Shopping Malls",
          headerTitleStyle: styles.secondheaderTitleStyle,
          headerStyle: styles.secondheaderStyle,}} />
        <Stack.Screen name="Vivo City" component={VivoCity} />
        <Stack.Screen name="Paragon" component={Paragon} />
        <Stack.Screen name="Suntec City" component={SuntecCity} />
        <Stack.Screen name="Food" component={Food} options={{
          headerTitle: "Food",
          headerTitleStyle: styles.secondheaderTitleStyle,
          headerStyle: styles.secondheaderStyle,}} />
        <Stack.Screen name="Lau Pa Sat" component={LauPaSat} />
        <Stack.Screen name="Breadstreet" component={Breadstreet} />
        <Stack.Screen name="Al-Azhar" component={Alazhar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: 'center',
  },
  text: {
    paddingBottom: 30,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
  },
  homeheaderStyle:{
    height: 0,
    borderBottomWidth: 0,
    borderBottomColor: "white",
    backgroundColor: "white"
  },
  headerTitleStyle: {
    fontWeight: "bold",
    fontSize: 25, 
  },
  headerStyle: {
    height: 80,
    backgroundColor: "#eee",
    borderBottomWidth: 3,
    borderBottomColor: "purple",
  },
  secondheaderTitleStyle: {
    fontWeight: "bold",
    fontSize: 20, 
  },
  secondheaderStyle: {
    height: 80,
    backgroundColor: "#eee",
    borderBottomWidth: 3,
    borderBottomColor: "purple",
  },
});