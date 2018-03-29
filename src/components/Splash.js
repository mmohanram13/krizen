import React, { Component } from 'react';
import {  View, Text, StyleSheet, Image } from 'react-native';

export default class Splash extends Component {
  render() {
    return (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image
                style={styles.logo} 
                source={require('../images/earthquake.png')} 
            />
            <Text style={styles.Title}>kriZen</Text>
        </View>
        <View style={{flex:1}}>
            <Text style={styles.subTitle}>Powered by Team Krizen ;-)</Text>
        </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#f7f1e3',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    logoContainer:{
        alignItems:'center',
        flex: 10,
        justifyContent: 'center'
    },
    Title:{
        color: '#2C3A47',
        fontSize: 50,
        fontFamily: 'serif-sans',
        fontWeight: '200',
        paddingTop: 45,
    },
    subTitle:{
        color: '#EE5A24',
        fontSize: 15,
        fontFamily: 'serif-sans',
        fontWeight: '100',
    },
    logo: {
        width: 100,
        height: 100
    }
})
