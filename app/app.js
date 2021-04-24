import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import HomeScreen from './app/screens/HomeScreen';
import SigninScreen from './app/screens/SigninScreen';
import SignupScreen from './app/screens/SignupScreen';

const stackNavigator = createStackNavigator({
  Signup : SignupScreen,
  Signin: SigninScreen,
  Home: HomeScreen
});

const App = createAppContainer(stackNavigator);

export default App;