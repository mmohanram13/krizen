import React,{Component} from 'react';

import { AppRegistry, Image, StatusBar, ScrollView } from 'react-native';

import {
Button,
Text,
Container,
List,
ListItem,
Content,
Icon
} from 'native-base';

const routes = ["Home","Show Location", "Contacts", "Logout"];

export default class SideBar extends Component {

render() {
return (
  <Container>
    <Content style={{backgroundColor:'#34495e'}}>
      <ScrollView>
        <List
            dataArray={routes}
            contentContainerStyle={{ marginTop: 20}}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}
                >
                  <Text style={{color:'white'}}>{data}</Text>
                </ListItem>
              );
            }}
        />  
      </ScrollView>
    </Content>
  </Container>
);
}
}