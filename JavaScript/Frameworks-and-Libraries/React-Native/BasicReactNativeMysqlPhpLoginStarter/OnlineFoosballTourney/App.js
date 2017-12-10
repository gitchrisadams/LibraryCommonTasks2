/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  Button
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import UserLoginView from './pages/UserLogin';
import ProfileActivity from './pages/ProfileActivity';


class App extends Component<{}> {

static navigationOptions = {
  title: 'User Registration'
}

constructor(props) {
 
    super(props)
 
    this.state = {
 
      UserName: '',
      UserEmail: '',
      UserPassword: ''
 
    }
 
  }

goToLoginPressed = () => {
  console.log('go to login pressed');
  this.props.navigation.navigate('Second');
}
 
UserRegistrationFunction = () =>{
  const { UserName }  = this.state ;
  const { UserEmail }  = this.state ;
  const { UserPassword }  = this.state ;

   // This is necessary so we can send user to another screen.
   const {navigate} = this.props.navigation;
 
  fetch('http://oft.christopheradams.com/user_registration.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
   
      name: UserName,
   
      email: UserEmail,
   
      password: UserPassword
   
    })
   
  }).then(function(response) {
    console.log('response:');
    console.log(response);

    // Note: If php text is changed you need to update this!
    switch(response._bodyText) {
      case "<script>console.log(\"con successful\")</script>\"Email Already Exist, Please Try Again !!!\"":
        console.log('User already exists!');
        break;
      case "<script>console.log(\"con successful\")</script>\"User Registered Successfully\"":
        console.log("User Registered Successfully!");
        navigate('ProfileActivityScreen', {Email: UserEmail});
        break;
      default:
        console.log("Error occurred!");
    }

  }).catch(function(error) {
    console.log('error');
    console.log(error);
  });

}

  render() {
    return (
      <View style={styles.MainContainer}>
              <Text style= {{ fontSize: 20, color: "#000", textAlign: 'center', marginBottom: 15 }}>User Registration Form</Text>
        
              <TextInput
                
                // Adding hint in Text Input using Place holder.
                placeholder="Enter User Name"
       
                onChangeText={UserName => this.setState({UserName})}
       
                // Making the Under line Transparent.
                underlineColorAndroid='transparent'
       
                style={styles.TextInputStyleClass}
              />
       
              <TextInput
                
                // Adding hint in Text Input using Place holder.
                placeholder="Enter User Email"
       
                onChangeText={UserEmail => this.setState({UserEmail})}
       
                // Making the Under line Transparent.
                underlineColorAndroid='transparent'
       
                style={styles.TextInputStyleClass}
              />
       
              <TextInput
                
                // Adding hint in Text Input using Place holder.
                placeholder="Enter User Password"
       
                onChangeText={UserPassword => this.setState({UserPassword})}
       
                // Making the Under line Transparent.
                underlineColorAndroid='transparent'
       
                style={styles.TextInputStyleClass}
       
                secureTextEntry={true}
              />
       
              <Button title="Click Here To Register" onPress={this.UserRegistrationFunction} color="#2196F3" />

              <Button title="Already signed up? Login" onPress={this.goToLoginPressed} color="#2196F3" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
 
MainContainer :{
 
justifyContent: 'center',
flex:1,
margin: 10
},
 
TextInputStyleClass: {
 
textAlign: 'center',
marginBottom: 7,
height: 40,
borderWidth: 1,
// Set border Hex Color Code Here.
 borderColor: '#2196F3',
 
 // Set border Radius.
 borderRadius: 5 ,
 
// Set border Radius.
 //borderRadius: 10 ,
}
 
});


export default ActivityProject = StackNavigator(
{
  First: { screen: App },
  
  Second: { screen: UserLoginView },

  ProfileActivityScreen: { screen: ProfileActivity }
}, { headerMode: 'none' });
 

