import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Currency Converter</Text>
      </View>
      <View>
        <View style={styles.container}>
          <View>
              <TextInput
                style={styles.TextInput}
                placeholder="Type in your currency value"
              />
              <TextInput
                style={styles.TextInput}
                placeholder="Type in your currency value"
              />
            </View>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#dda0dd",
    padding: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginTop: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: "50%"
  },
  TextInput: {
    width: "87%",
    backgroundColor: "#e6e8fa",
    borderRadius: 10,
    padding: 25,
    marginBottom: 30,
    color: "black"
  }
});
