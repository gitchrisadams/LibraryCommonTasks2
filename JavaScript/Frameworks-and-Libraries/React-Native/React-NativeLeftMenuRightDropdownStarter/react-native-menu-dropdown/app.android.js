import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  StyleSheet,
  TouchableHighlight,
  Text,
  StatusBar,
  View
} from 'react-native';
import { Navigator, NativeModules } from 'react-native';

import { COLOR, ThemeProvider } from 'react-native-material-ui';
import { Toolbar, BottomNavigation, Icon } from 'react-native-material-ui';
import Container from './Container';

import { TabRouter } from 'react-navigation';

import HomePage from './Contents/home-page';
import CheckLists from './Pages/checklists';
import { DrawerNavigator } from 'react-navigation';
import ModalDropdown from 'react-native-modal-dropdown';

const uiTheme = {
  palette: {
    primaryColor: COLOR.teal700,
    accentColor: COLOR.pink500,
  },
  toolbar: {
    container: {
      height: 55,
      paddingTop: 20
    }
  }
};

const styles = StyleSheet.create({
    allIcons: {
        fontFamily: 'material-icons', 
        fontSize: 18,
        color: '#00796B'
    },

    topRightModalStyle: {
    },

    topDropDownStyle: {
      width: 200,
      borderRadius: 15,
      borderWidth: 1,
      padding: 5,
      marginTop: 10,
    }
  });

const TabRoute = TabRouter({
  'Home Page': { screen: HomePage },
  CheckLists: { screen: CheckLists }
  }, {
    
    initialRouteName: 'Home Page',
  }
);


class TabContentNavigator extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      active: props.value.active,
    };
  }

  //this method will not get called first time
  componentWillReceiveProps(newProps){
    this.setState({
      active: newProps.value.active,
    }); 
  }

  render() {
    const Component = TabRoute.getComponentForRouteName(this.state.active);
    return <Component/>;
  }
}

export default class App extends Component {
  _onPressButton(event, buttonName) {
    this.setState({active: buttonName});
    this.props.navigation.navigate(buttonName);
  }

  _onRightElementPressed(event, buttonName) {
    console.log('button Pressed');
  }

  constructor(props, context) {
    super(props, context);
    
    this.state = {
      active: 'Home Page',
    };
  }

  static navigationOptions = {
    title: 'Menu',
  };

  navigate() {
    this.props.navigation.navigate('DrawerOpen'); // open drawer
  }
  
  topRightModalPressed(idx, value) {
    { /* Action when top right dropdown modal is pressed */ }
    console.log('option selected');
    var optionSelected = (parseInt(idx) + 1);
    console.log(optionSelected);
    console.log(value);

    switch (optionSelected) {
      case 1:
        console.log('option 1 was selected');
        break;
      case 2:
        console.log('option 2 was selected');
        break;
      default:
        console.log('Whatchu talking about willis???');
    }
  }

  render() {
    return (
      <ThemeProvider uiTheme={uiTheme}>
        <Container>
          <StatusBar backgroundColor="rgba(0, 0, 0, 0.2)" translucent />

          <Toolbar
            leftElement="menu"

            rightElement={
              <ModalDropdown 
                options={['option1', 'option2']}
                onSelect={(idx, value) => this.topRightModalPressed(idx, value)}
                dropdownStyle={styles.topDropDownStyle}
              >
                  <Icon 
                    name='more-vert' 
                    style={{color: 'white'}}
                  />
              </ModalDropdown>
            }

            centerElement={this.state.active}

            onLeftElementPress={() => this.navigate()}
          />

          <TabContentNavigator value={this.state} key={this.state} />

          <BottomNavigation active={this.state.active}
            hidden={false}
            style={{ container: { position: 'absolute', bottom: 0, left: 0, right: 0 } }}
          >

            {/* The bottom toolbar actions, labels, and icons */}
            <BottomNavigation.Action
              key="Home Page"
              icon="home"
              label="Home Page"
              onPress={() => this.setState({ active: 'Home Page' })}
            />
            <BottomNavigation.Action
              key="CheckLists"
              icon="check"
              label="CheckLists"
              onPress={(event) => this._onPressButton(event, 'CheckLists')}
            />
            <BottomNavigation.Action
              key="Favorites"
              icon="stars"
              label="Favorites"
              onPress={(event) => this._onPressButton(event, 'Favorites')}
            />

          </BottomNavigation>

        </Container>
      </ThemeProvider>
    );
  }
}