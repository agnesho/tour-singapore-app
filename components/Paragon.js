import { StatusBar } from "expo-status-bar";
import React from "react";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

/* Insert your API's url here */
const apiURL = "";

export default function Paragon() {
  const [loading, setLoading] = useState(true);
  const [picture, setPicture] = useState("");
  const [how, setHow] = useState("");
  const [what, setWhat] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const response = await fetch(apiURL);
    const responseData = await response.json();
    const Location = responseData.filter(
      (location) =>
        location.username ===
        "paragon" /* 'Username' refers to the partition key I use with DynamoDB */
    )[0];
    setPicture(Location.photourl);
    setHow(Location.howtogo);
    setWhat(Location.whattodo);
    setAddress(Location.address);
    setLoading(false);
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.profilePic}
        source={{
          uri: picture,
        }}
      />

      <Text style={styles.HowToGo}> How to go? </Text>
      <Text style={styles.HowToGoText}>{loading ? "Loading" : how}</Text>
      <Text style={styles.WhatToDo}> What to do?</Text>
      <Text style={styles.WhatToDoText}>{loading ? "Loading" : what}</Text>
      <Text style={styles.ExactLocation}> Exact location </Text>
      <Text style={styles.HowToGoText}>{loading ? "Loading" : address}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
  },
  profilePic: {
    height: 240,
    width: 400,
    alignSelf: "center",
    marginTop: 10,
  },
  HowToGo: {
    color: "black",
    fontSize: 18,
    marginTop: 20,
    fontWeight: "bold",
  },
  HowToGoText: {
    color: "black",
    fontSize: 16,
    marginTop: 20,
    textAlign: "center",
  },
  WhatToDo: {
    color: "black",
    fontSize: 18,
    marginTop: 20,
    fontWeight: "bold",
  },
  WhatToDoText: {
    color: "black",
    fontSize: 16,
    marginTop: 20,
    paddingLeft: 20,
    textAlign: "left",
  },
  ExactLocation: {
    color: "black",
    fontSize: 18,
    marginTop: 20,
    fontWeight: "bold",
  },
});
