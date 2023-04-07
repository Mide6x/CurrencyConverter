import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const dollarValue = "300"
const nairaValue = "500"

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Currency Converter</Text>
      </View>
<ScrollView>
      <View >
        <View style={styles.inputContainer}>
        <Text style={styles.inputText}>USD Value</Text>
        <Text style={styles.valueText}>USD Value in naira is {dollarValue}</Text>
          <TextInput
            style={styles.TextInput}
            placeholder="Type in your currency value"
          />
          

          <TouchableOpacity />
        </View>


        <View style={styles.inputContainer}>
        <Text style={styles.inputText}>NGN Value</Text>
        <Text style={styles.valueText}>NGN Value in dollar is {nairaValue}</Text>
          <TextInput
            style={styles.TextInput}
            placeholder="Type in your currency value"
          />
         
          <TouchableOpacity />
        </View>


      </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  header: {
    backgroundColor: "#dda0dd",
    marginTop: 0,
    padding: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 0,
    color: "white",
    marginTop: 20,
  },
  inputText: {
    fontSize: 23,
    fontWeight: "bold",
    padding: 0,
    color: "#522d80",
    marginTop: 20,
  },
  TextInput: {
    width: "87%",
    height: 40,
    backgroundColor: "#e6e8fa",
    borderRadius: 10,
    marginBottom: 200,
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  valueText: {
    fontSize: 15,
    fontWeight: "medium",
    padding: 0,
    color: "#522d80",
  },
});
