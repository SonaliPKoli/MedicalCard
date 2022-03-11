import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {StyleSheet,Text,View} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/loginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/homeScreen";
import report from "./screens/reportsScreen";
import profile from "./screens/Profile";
import prescription from "./screens/prescription";
import myProfile from "./screens/MainProfile";
import reminder from "./screens/reminder";
import Reportshome from "./screens/reportsHome";
import prescriptionhome from "./screens/prescriptionHome";
import pillReminderhome from "./screens/pillReminderHome";
const Stack = createStackNavigator();
const globalScreenOptions= {
  headerStyle:{backgroundColor:"#fff"},
  headerTitleStyle:{color:"black"},
  headerTintColor:"black",
};
export default function app (){
  return(
<NavigationContainer>
<Stack.Navigator screenOptions={globalScreenOptions}>
  <Stack.Screen   name ='Login' component={LoginScreen}/>
  <Stack.Screen   name ='Register' component={RegisterScreen}/>
  <Stack.Screen   name ='Home' component={HomeScreen}/>
  <Stack.Screen   name ='Report' component={report}/>
  <Stack.Screen   name ='Profile' component={profile}/>
  <Stack.Screen   name ='Prescription' component={prescription}/>
  <Stack.Screen   name ='myProfile' component={myProfile}/>
  <Stack.Screen   name ='Reminder' component={reminder}/>
  <Stack.Screen   name ='reportsHome' component={Reportshome}/>
  <Stack.Screen   name ='prescriptionHome' component={prescriptionhome}/>
  <Stack.Screen   name ='reminderHome' component={pillReminderhome}/>



  </Stack.Navigator>
</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#fff",
    alignItems:"center",
    justifyContent:"center",
  },
});