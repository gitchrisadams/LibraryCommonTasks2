import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Alert, Button, Text, ScrollView, TouchableOpacity} from 'react-native';
 
// Importing Stack Navigator library to add multiple activities.
import { StackNavigator } from 'react-navigation';

// Creating Profile activity.
export default class ProfileActivity extends Component
{
 
  // Setting up profile activity title.
   static navigationOptions =
   {
      title: 'ProfileActivity',
    
   };
    
 
   render()
   {
 
     const {goBack} = this.props.navigation;
 
      return(
         <ScrollView contentContainerStyle = {{paddingTop: 20, paddingVertical: 20}}>
            
            <Text> { this.props.navigation.state.params.Email } </Text>

            <Button title="Click here to Logout" onPress={ () => goBack(null) } />


         </ScrollView>
      );
   }

    _goToTourney1 = () => {
      console.log('go to tourney 1');
    }

}

const styles = StyleSheet.create({
  textStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#7BBA33',
    padding: 10,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 20,
    height: 70,

    borderRadius: 10
  },
  });