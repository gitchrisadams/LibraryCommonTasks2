import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  StatusBar,
  View
} from 'react-native';

import App from './app.ios';
import DrawerMenu from './Drawer/drawer-toolbar-ios';
import HousingView from './Pages/housing';
import ResourcesView from './Pages/resources';
import FAQView from './Pages/faq-contact';
import FinanceView from './Pages/finances';
import YourRightsView from './Pages/your-rights';
import CheckListsView from './Pages/checklists';
import FavoritesView from './Pages/favorites';
import { DrawerNavigator, StackNavigator } from 'react-navigation';


{ /* Create the stackNavigator with all our individual pages/screens. */ }
const stackNavigator = StackNavigator({
  Finances: { screen: FinanceView },
  YourRights: { screen: YourRightsView },
  Housing: { screen: HousingView },
  Resources: { screen: ResourcesView },
  FAQ: { screen: FAQView} ,
  CheckLists: { screen: CheckListsView },
  Favorites: { screen: FavoritesView }
}, {
  headerMode: 'none'
});


const ReactNativeMenuDropdown = DrawerNavigator({
  Home: {
    screen: App,
  },
  Stack: {
    screen: stackNavigator
  }
}, 
  {
  contentComponent: DrawerMenu,
  contentOptions: {
    activeTintColor: '#e91e63',
    style: {
      flex: 1,
      paddingTop: 15,
    }
  }
});

{ /* Register the ReactNativeMenuDropdown DrawerNavigator as the main App. */ }
AppRegistry.registerComponent('react-native-menu-dropdown', () => ReactNativeMenuDropdown);
