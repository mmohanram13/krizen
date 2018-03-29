import React,{ Component } from 'react';
import {
    StackNavigator, DrawerNavigator
} from 'react-navigation';

import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import ContactScreen from './ContactScreen';
import LocationScreen from './LocationScreen';
import NewsFeed from './NewsFeed';
import LogoutScreen from './LogoutScreen';
import SideBar from './SideBar';

export const Drawer = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    "Show Location": { screen: LocationScreen },
    NewsFeed: { screen: NewsFeed },
    Contacts: { screen: ContactScreen },
    Logout: { screen: LogoutScreen },
  },
  {
    contentComponent: props => <SideBar />,
  }
);

export default StackNavigator({
  Login: { screen: LoginScreen },
  Main: { screen: Drawer },
},
{
  headerMode: 'none',
  initialRouteName: 'Login',
});
