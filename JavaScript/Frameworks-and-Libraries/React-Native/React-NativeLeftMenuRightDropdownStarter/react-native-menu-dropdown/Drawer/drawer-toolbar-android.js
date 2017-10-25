{/* drawer-toolbar-ios.js is the menu drawer when it is slid out. */}

import React, { Component } from 'react';
import {
    Button,
    TouchableHighlight,
    AppRegistry,
    StyleSheet,
    Text,
    StatusBar,
    View
} from 'react-native';
import { COLOR, ThemeProvider, Toolbar, Drawer, Avatar} from 'react-native-material-ui';
import Container from '../Container';

{/* toolbar: styles the slide out menu drawer when slid out*/}
const uiTheme = {
    palette: {
        primaryColor: COLOR.teal700,
        accentColor: COLOR.pink500,
    },
    toolbar: {
        container: {
            height: 55,
            paddingTop: 20,
        },
    },
    avatar: {
        container: {
            backgroundColor: '#333'
        }
    }
  };
 
export default class DrawerMenu extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
        active: '',
      };
  }

  _onPressButton(event, buttonName) {
    this.setState({active: buttonName});
    this.props.navigation.navigate(buttonName);
  }

  render() {
    return (
        <ThemeProvider uiTheme={uiTheme}>
                <Container>
                    <StatusBar backgroundColor="rgba(0, 0, 0, 0.2)" translucent />
                    <Toolbar
                    leftElement="arrow-back"
                    onLeftElementPress={() => this.props.navigation.navigate('DrawerClose')}
                    centerElement="Menu"
                />
                    <View style={styles.container}>
                        <Drawer>
                            <TouchableHighlight 
                                onPress={(event) => this._onPressButton(event, 'Housing')}
                                underlayColor="transparent"
                            >
                                <View style={styles.iconTextWrapper}>
                                    <View style={styles.iconView}><Text style={styles.allIcons}>&#xf0fd; </Text></View>
                                    <View style={styles.iconTextView}><Text>Housing</Text></View>
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight 
                                onPress={(event) => this._onPressButton(event, 'Resources')}
                                underlayColor="transparent"
                            >
                                <View style={styles.iconTextWrapper}>
                                    <View style={styles.iconView}><Text style={styles.allIcons}>&#xf07c; </Text></View>
                                    <View style={styles.iconTextView}><Text>Resources</Text></View>
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight 
                                onPress={(event) => this._onPressButton(event, 'Favorites')}
                                underlayColor="transparent"
                            >
                                <View style={styles.iconTextWrapper}>
                                    <View style={styles.iconView}><Text style={styles.allIcons}>&#xf006; </Text></View>
                                    <View style={styles.iconTextView}><Text>Favorites</Text></View>
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight 
                                onPress={(event) => this._onPressButton(event, 'YourRights')}
                                underlayColor="transparent"
                            >
                                <View style={styles.iconTextWrapper}>
                                    <View style={styles.iconView}><Text style={styles.allIcons}>&#xf24e; </Text></View>
                                    <View style={styles.iconTextView}><Text>Your Rights</Text></View>
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight 
                                onPress={(event) => this._onPressButton(event, 'Finances')}
                                underlayColor="transparent"
                            >
                                <View style={styles.iconTextWrapper}>
                                    <View style={styles.iconView}><Text style={styles.allIcons}>&#xf0d6; </Text></View>
                                    <View style={styles.iconTextView}><Text>Finances</Text></View>
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight 
                                onPress={(event) => this._onPressButton(event, 'CheckLists')}
                                underlayColor="transparent"
                            >
                                <View style={styles.iconTextWrapper}>
                                    <View style={styles.iconView}><Text style={styles.allIcons}>&#xf05d; </Text></View>
                                    <View style={styles.iconTextView}><Text>CheckLists</Text></View>
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight 
                                onPress={(event) => this._onPressButton(event, 'FAQ')}
                                underlayColor="transparent"
                            >
                                <View style={styles.iconTextWrapper}>
                                    <View style={styles.iconView}><Text style={styles.allIcons}>&#xf29c; </Text></View>
                                    <View style={styles.iconTextView}><Text>FAQ</Text></View>
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight 
                                onPress={(event) => this._onPressButton(event, 'FAQ')}
                                underlayColor="transparent"
                            >
                                <View style={styles.iconTextWrapper}>
                                    <View style={styles.iconView}><Text style={styles.allIcons}>&#xf0e0; </Text></View>
                                    <View style={styles.iconTextView}><Text>Contact US</Text></View>
                                </View>
                            </TouchableHighlight>
                        </Drawer>
                    </View>
                </Container>
            </ThemeProvider> 
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    iconTextWrapper: {
        flexDirection: 'row', 
        borderBottomColor: 'black', 
        borderBottomWidth: 1, 
        height: 60
    },
    allIcons: {
        marginTop: 20,
        marginLeft: 10,
        fontFamily: 'fontawesome', 
        fontSize: 18,
        color: '#00796B'
    },
    iconView: {
        height: 50, 
        width: 50
    },
    iconTextView: {
        height: 50, 
        width: 150, 
        marginTop: 20
    },
    drawerIcon: {
        color: '#00796B'
    },
  });
