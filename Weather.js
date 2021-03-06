import React from "react";
import {Text, View, StyleSheet, StatusBar} from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {LinearGradient} from "expo-linear-gradient";

const weatherOptions = {
   Tunderstorm : {
    iconName: "weather-lightning",
    gradient: ["#373B44", "#007ADF"],
    title:"",
    subtitle:""
},
     Drizzle : {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title:"",
        subtitle:""
    },
     Rain: {
        iconName: "weather-rainy",
        gradient: ["#415A7D", "#8E8E8E"],
        title : "밖에 비온다",
        subtitle : "파전에 막걸리 한잔 어때"
    },
     Snow: {
        iconName: "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"],
        title : "눈온다",
        subtitle : "눈싸움 하러 가자!"
    },
     Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title:"",
        subtitle:""
    },
     Clear: {
        iconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"],
        title:"",
        subtitle:""
    },
     Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"],
        title:"",
        subtitle:""
    },
     Haze: {
        iconName: "weather-hail",
        gradient: ["#4BA0B0", "#D39D38"],
        title:"",
        subtitle:""
    },
     Mist: {
        iconName: "weather-hail",
        gradient: ["#4BA0B0", "#D39D38"],
        title:"",
        subtitle:""
    },
     Dust: {
        iconName: "weather-hail",
        gradient: ["#4BA0B0", "#D39D38"],
        title:"",
        subtitle:""
    }

};

export default function Weather({temp, condition}){
  return (
      <LinearGradient
        colors = {weatherOptions[condition].gradient}
        style= {styles.container}
      >
       <StatusBar barStyle="light-content" />
       <View style={styles.halfContainer}> 
        <MaterialCommunityIcons
         size={96}
         name={weatherOptions[condition].iconName}
         color="white"
        />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={styles.halfContainer}>
          <Text style={styles.title}>{weatherOptions[condition].title}</Text>
          <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
      </View>
      </LinearGradient>  
  )
}


Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
      "Tunderstorm",
      "Drizzle",
      "Rain",
      "Snow",
      "Atmosphere",
      "Clear",
      "Clouds",
      "Haze",
      "Mist",
      "Dust"
  ]).isRequired
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp:{
        fontSize: 42,
        color : "white"
    },
    halfContainer:{
        flex: 1,
        justifyContent: "center",
        alignItems:"center"
    },
    title:{
        color: "white",
        fontSize : 42,
        marginBottom : 10
    },
    subtitle: {
        color: "white",
        fontSize : 15
    }
});