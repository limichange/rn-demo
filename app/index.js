/* @flow */

import React from 'react';

import {
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import home from './home'
import about from './about'
import login from './login'
import signup from './signup'
import debugPanel from './debugPanel'
import mainPanel from './mainPanel'
import loadingPanel from './loadingPanel'

const AppNavigator = StackNavigator(
  {
    login: {
      name: 'login',
      description: 'login',
      screen: login,
    },
    signup: {
      name: 'signup',
      description: 'signup',
      screen: signup,
    },
    home: {
      name: 'home',
      description: 'home',
      screen: home,
    },
    debugPanel: {
      name: 'debugPanel',
      description: 'debugPanel',
      screen: debugPanel,
    },
    mainPanel: {
      name: 'mainPanel',
      description: 'mainPanel',
      screen: mainPanel,
    },
    loadingPanel: {
      name: 'loadingPanel',
      description: 'loadingPanel',
      screen: loadingPanel,
    },
    about: {
      name: 'about',
      description: 'about',
      screen: about,
    }
  },
  {
    initialRouteName: 'debugPanel',
    headerMode: 'none',
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
  }
);

export default () => <AppNavigator />;
