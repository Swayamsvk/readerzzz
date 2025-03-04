/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {StyleSheet, View} from 'react-native';
import Splash from './src/core/Main/Screens/Splash';
import Dashboard from './src/core/Main/Screens/Dashboard';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function App(): React.JSX.Element {
  const Tab = createBottomTabNavigator();

  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsSplashVisible(false); // Hide splash after 3 seconds
    }, 3000);
  }, []);

  if (isSplashVisible) {
    return <Splash />; // Show splash screen initially
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({color, size}) => {
            let iconName;
            if (route.name === 'Discover') {
              iconName = 'search';
            } else if (route.name === 'Read') {
              iconName = 'book-outline';
            } else if (route.name === 'Account') {
              iconName = 'person-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarStyle: styles.tabBar,
          tabBarLabelStyle: styles.tabLabel,
          tabBarActiveTintColor: '#5D3FD3',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Discover" component={Dashboard} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#F4F4F4',
    borderRadius: 30,
    margin: 10,
    height: 70,
    elevation: 5,
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: 10,
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default App;
