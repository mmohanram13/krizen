import React, { Component } from 'react';

import {  
    View,
    Text, 
    TextInput, 
    TouchableHighlight,
    StyleSheet,
    StatusBar,
    Alert,
} from 'react-native';

import { Container, Header, Body, Title } from 'native-base';

export default class Login extends Component {

    constructor(props){
        super(props);
            this.state={
                username:'',
                password:'',
            };
        }

    onSignInPress=()=>{
        if (this.state.username === 'admin' && this.state.password === 'admin'){
            this.props.navigation.navigate('Main');
        }
        else{
            alert('Invalid Credentials');
        }
    }

render() {
    return (
        <Container>
            <Header style={{ backgroundColor: '#2c3e50' }} androidStatusBarColor='#34495e' >
                <Body>
                    <Title>Please Login</Title>
                </Body>
            </Header>
            <View style={{
                            flex:1,
                            backgroundColor: 'white',
                            justifyContent:'flex-start',
                            alignItems:'center',
                            paddingTop: 60,
                            paddingLeft: 10,
                            paddingBottom: 10,
                            paddingBottom: 60,
                        }}>
                <TextInput style = {{
                                        width: 300, 
                                        height: 40,
                                        backgroundColor: 'white',
                                        marginBottom: 30, 
                                        color: 'black'
                                    }}
                            keyboardType='email-address' 
                            returnKeyType="next" 
                            placeholder='Email or Mobile Number' 
                            placeholderTextColor='black'
                            onChangeText={(username) => this.setState({username})}/>

                <TextInput style = {{
                                        width: 300, 
                                        height: 40,
                                        backgroundColor: 'white',
                                        marginBottom: 30, 
                                        color: 'black'
                                    }}   
                           returnKeyType="go" 
                           placeholder='Password' 
                           placeholderTextColor='black' 
                           secureTextEntry
                           onChangeText={(password) => this.setState({password})}/>

                <TouchableHighlight style={{ 
                                width: 300, 
                                height: 40, 
                                backgroundColor:'#00b894', 
                                justifyContent: 'center'
                            }} 
                                                    onPress={this.onSignInPress}>
                    <Text style={{
                                    textAlign: 'center',
                                    color: 'white', 
                                    fontWeight:'500'
                                }}> Sign In </Text>
                </TouchableHighlight>

                <Text style={{
                                margin:15,
                                fontSize:12,
                                padding:10
                            }}> - or - </Text>

                <TouchableHighlight style={{ 
                                width: 300, 
                                height: 40, 
                                backgroundColor:'#00b894', 
                                justifyContent: 'center'
                            }} 
                                            onPress={this.onSignInPress}>
                    <Text style={{
                                    textAlign: 'center',
                                    color: 'white', 
                                    fontWeight:'500'
                                }}> Sign Up </Text>
                </TouchableHighlight>
            </View>
        </Container>
    );
  }
}