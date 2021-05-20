import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScanScreen from './screens/scanScreen';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import OtherScreen from './screens/otherScreen';

export default class App extends React.Component{
render(){
  return(
    <AppContainer/>
  )
}
}

const tabNavigator = createBottomTabNavigator({
  ScanScreen : {screen: ScanScreen},
  OtherScreen : {screen: OtherScreen}
})

const AppContainer = createAppContainer(tabNavigator);
