
import * as React from 'react';
import { StyleSheet, Text, View,ImageBackground,ScrollView, Image  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SignIn } from './app/auth/screens/sign-in';
import { SignUp } from './app/auth/screens/sign-up';
import { Home } from './app/auth/screens/home';


const Stack = createStackNavigator()



const image = { uri: "https://i.pinimg.com/originals/6f/9a/ba/6f9ababa9c2fe98f2fbcaca0f68e52eb.jpg" };

export default function App() {


  return (
    // <ImageBackground source={image} style={styles.backgroundcontainer}>
    <NavigationContainer>
     
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerShown: false,
      }}
    >
      
      <Stack.Screen name="Home" component={Home} />
     
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
     
      
    </Stack.Navigator>
  
  </NavigationContainer>
  // </ImageBackground>
     
     
  
   
      // <ImageBackground source={image} style={styles.backgroundcontainer}>
      // <SignIn></SignIn>
      // <SignUp></SignUp>
      // </ImageBackground>
    
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  backgroundcontainer:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
   
   
  }
});
