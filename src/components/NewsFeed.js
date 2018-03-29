import React, { Component } from 'react';

import {
    View,
    Image
} from 'react-native';

import SideBar from './SideBar';

import { Container, Header, Left, Text, Content, Body, Button, Icon, Title, Drawer, Card, CardItem, Right } from 'native-base';

export default class NewsFeed extends Component{

    render(){

        let {id,title,picture,topic,text} = this.props.navigation.state.params.data;

        return (
        <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<SideBar navigator={this.navigator} navigation={this.props.navigation} />}
                onClose={() => this.closeDrawer()} >
            <Container>
                <Header style={{ backgroundColor: '#2c3e50' }} androidStatusBarColor='#34495e' >
                    <Left>
                        <Button onPress={() => this.openDrawer() } transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>News Feed</Title>
                    </Body>
                    <Right>
                    </Right>
                </Header>
                <Container style={{margin: 12, flex: 1, elevation: 3, backgroundColor: '#FFFFFF'}}>
                <Content >
                    <Card >
                        <CardItem>
                            <Left>
                                <Body style={{flex:1}}>
                                    <Text style={{fontWeight: 'bold', fontSize: 25}}>{title}</Text>
                                    <Text note>{topic}</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image style={{height: 200, flex: 1}} source={picture}/>
                        </CardItem>
                        <CardItem style={{flex:1, margin:20, backgroundColor: 'white'}}>
                            <Body>
                                <Text>{text}</Text>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
                </Container>
            </Container>
        </Drawer>
        )
    }
}