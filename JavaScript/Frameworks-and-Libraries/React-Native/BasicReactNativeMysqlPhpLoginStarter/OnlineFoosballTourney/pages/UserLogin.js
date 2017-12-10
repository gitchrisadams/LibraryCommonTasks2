
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, TextInput, View, Alert, Button, Text} from 'react-native';
 
// Importing Stack Navigator library to add multiple activities.
import { StackNavigator } from 'react-navigation';
import ProfileActivity from '../pages/ProfileActivity';
 
// Creating Login Activity.
class UserLogin extends Component {
 
  // Setting up Login Activity title.
  static navigationOptions =
   {
      title: 'UserLogin',
   };
 
constructor(props) {
 
    super(props)
 
    this.state = {
 
      UserEmail: '',
      UserPassword: ''
 
    }
 
  }

UserLoginFunction = () =>{
 
 const { UserEmail }  = this.state ;
 const { UserPassword }  = this.state ;

 // This is necessary so we can send user to another screen.
 const {navigate} = this.props.navigation;
 
  fetch('http://oft.christopheradams.com/User_Login.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  body: JSON.stringify({
 
    email: UserEmail,
 
    password: UserPassword
 
  })
 
}).then(function(response) {
 
        // If server response message same as Data Matched
       // if(responseJson === 'Data Matched')
       //  {
 
       //      //Then open Profile activity and send user email to profile activity.
       //      this.props.navigation.navigate('Second', { Email: UserEmail });
 
       //  }
       //  else{
 
       //    Alert.alert(responseJson);
       //  }
       console.log('response');
       console.log(response);

    // Note: If php text is changed you need to update this!
    switch(response._bodyText) {
      case "<script>console.log(\"con successful\")</script>\"Data Matched\"":
        console.log('Log user in...!');
        navigate('ProfileActivityScreen', {Email: UserEmail});
        break;
      default:
        console.log("Didn't match so don't login.");
    }
 
      }).catch((error) => {
        console.log(error);
      });
 
 
  }
 
  render() {
    const {goBack} = this.props.navigation;
    return (
 
<View style={styles.MainContainer}>
 
        <Text style= {styles.TextComponentStyle}>User Login Form</Text>
  
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
 
        <Button title="Click Here To Login" onPress={this.UserLoginFunction} color="#2196F3" />
      
        <Button title="New user? Signup" onPress={() => goBack(null)} color="#2196F3" />
 
</View>
            
    );
  }
}

/*
// Creating Profile activity.
class ProfileActivity extends Component
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
         <View style = { styles.MainContainer }>
 
            <Text style = {styles.TextComponentStyle}> { this.props.navigation.state.params.Email } </Text>
 
            <Button title="Click here to Logout" onPress={ () => goBack(null) } />
 
         </View>
      );
   }
}
*/

export default MainProject = StackNavigator(
{
   UserLoginScreen: { screen: UserLogin },
   
   ProfileActivityScreen: { screen: ProfileActivity }
 
}, { headerMode: 'none' });
 
const styles = StyleSheet.create({
 
MainContainer :{
 
justifyContent: 'center',
flex:1,
margin: 10,
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
 
},
 
 TextComponentStyle: {
   fontSize: 20,
  color: "#000",
  textAlign: 'center', 
  marginBottom: 15
 }
});

 