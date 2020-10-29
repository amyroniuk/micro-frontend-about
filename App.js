/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Routes from './src/core/routes';
import Dashboard from './src/core/features/dashboard/Dashboard';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        {Routes.map((route) => (
          <Drawer.Screen
            key={route.route}
            name={route.route}
            component={route.component}
            options={{drawerLabel: route.name}}
          />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
