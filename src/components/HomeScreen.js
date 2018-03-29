import React, { Component } from 'react';
import {  View, Image } from 'react-native';
import { Container, Header, Left, Text, Content, Body, Button, Icon, Title, Drawer, Card, CardItem, Right } from 'native-base';
import SideBar from './SideBar';

export default class HomeScreen extends Component {

  closeDrawer = () => {
    this.drawer._root.close()
  };

  openDrawer = () => {
    this.drawer._root.open()
  };

  render() {

    let cards = [
      {
        id: '0',
        title: 'What to do during an earthquake?',    
        picture: require('../images/earthquake.jpg'),
        topic: 'Earthquake',
        text: `If you are in a Vehicle:
        
1. Stop as quickly as safety permits and stay in the vehicle. Avoid stopping near, or under buildings, trees, overpasses, and utility wires. They can fall onto your vehicle
        
2. Stay seated in your car and wait until the earthquake is over. Stay calm, metal will protect you and your family from most debris and falling objects. The only exception to this is when you are in a garage or multi-level parking lot. When you are in a garage, get out of the car immediately, and crouch down next to the car. The metal will not protect you from the concrete that will fall on it. If you are in a multi-level parking garage, survival mainly comes down to luck. The best way to maximize your chances of survival is to do what you do in a garage - crouch next to the car. Do not try to rush back to your home. Most major earthquakes have aftershocks, which should not be underestimated. Aftershocks have the power to bring down buildings that were damaged in the main quake. Aftershocks can range from very slight, to the power of the original earthquake itself. These secondary quakes can last for about ten seconds or longer and can be life-threatening. Unfortunately, there is no way of knowing when they will happen, so there is no choice but to stay alert.
        
3.Proceed cautiously once the earthquake has stopped. Avoid roads, bridges, or ramps that might have been damaged by the earthquake.
        
4.Wait for city or municipal relief efforts. You shouldn't have to wait in your car for very long for relief efforts to arrive with food, water, and supplies.
        
If you are in a Building:
        
1.Steady yourself. Hold onto a solid object or get to the floor so that you do not fall. Try to hide under a piece of furniture.
        
2.Drop, cover, and hold. This is the national standard for earthquake safety in the United States. The alternate advice is to get next to a sturdy piece of furniture so that if a wall falls, it will create a crawl space in which you can survive. This "triangle of life" method, however, is inconsistent with earthquake research and not recommended by the American Red Cross, Structural Engineers Association of Northern California, and Earthquake Country Alliance.
        
3.Cover your head and neck. Use your hands and arms to protect these vital areas from falling objects. Your upper body should also be covered because that is what is holding your neck which is holding your head. If you have any respiratory disease, make sure that you cover your head with a t-shirt or bandana, until all the debris and dust has settled. Inhaled dirty air is not good for your lungs.
        
4.Do not move. If it is safe to do so, stay where you are for a minute or two, until you are sure the shaking has stopped. Remember, aftershocks are possible at any time, and are likely after a big earthquake. Aftershocks can range from being felt by only a few people to knocking down entire cities. They can collapse weakened buildings, especially fragile structures like mobile homes.
        
5.Slowly and carefully leave the building. As in the case of fire, it is suggested that you and your family meet in an earthquake-safe location previously designated by your family, such as a nearby baseball diamond or park. Government help should be on the way soon.
        
6.Inspect your house for anything that might be in a dangerous condition. Glass fragments, the smell of gas, or damaged electrical appliances are examples of hazards. Do not turn electrical devices on or off. Simply switching a light switch could create a spark, which in turn could electrocute you and start a fire. These fires can be more deadly because they are near electrical cords.
        
7.Check for damage around your building. You should check your house or the building you are in for fires or other forms of damage. If you need water to put out a fire, you can get some from a water heater, but be careful, as the water is hot. 
After you've dealt with any fires, run through the checklist below:
  <1> Stay away from structurally damaged areas. Wait until a police officer, a plumber, a firefighter, or relief worker inspects the area and pronounces it safe to enter.
  <2> Clean up dangerous spills. 
  <3> Gasoline can be fatal if it explodes or ignites. If you only have paper towels, use several layers of them because gasoline is poisonous and is very hard to wash off. Covering gasoline spills with some shovelfuls of sand is a good idea, but remember to mark the area by placing a sign that says 'Gasoline spill here'.
  <4> Do not drink water from the sink since it may be contaminated. 
  <5> The sewage will be damaged in major earthquakes, so do not flush the toilet. 
  <6> Instead, shut off the water system from the main valve (have a plumber do this job for you if you don't know where the main valve is). Make sure that you plug up drains from sinks and bathtubs to prevent any sewage back-flow.
  <7> Inspect the chimney for any damage before using your fireplace. Invisible damage in these places can lead to fire.
  <8> Inspect utilities.
  <9> Check for gas leaks. If you smell gas or hear blowing or hissing noise, open a window and quickly leave the building. Turn off the gas at the outside main valve if you can and call the gas company from your cell phone or from a neighbour's home. Remember, if you turn off the gas for any reason, it must be turned back on by a professional.
  <10> Look for electrical system damage. If you see sparks or broken or frayed wires, or if you smell hot insulation, turn off the electricity at the main fuse box or circuit breaker. If you have to step in water to get to the fuse box or circuit breaker, call an electrician first for advice.
  <11> Check for sewage and water line damage. If you suspect sewage lines are damaged, avoid using the toilets and call a plumber. If water pipes are damaged, contact the water company and avoid using water from the tap. You can obtain safe water from bottled water or by melting and boiling ice cubes.
        
8.Open your cabinets cautiously. Items inside may fall on you if you open the doors quickly. As you inspect the damage, use caution with glass bottles, which may be cracked and leaking. Use extra caution with alcohol, acids, cleaners, or anything that is toxic to the human body.

If you are Outdoors:
                
1.Stay where you are, unless you are somewhere unsafe. Observe your surroundings, especially if you are in an urban area. Keep in mind that even earthquake-proof buildings have a chance of falling, so don't assume you are completely safe. Don't attempt to run or drive away from an earthquake - this only increases your risk of injury.

2.Move away from buildings, street lights, power lines, and anything else that could fall. Also make sure you are not near an open fault or sinkhole. People have died after falling into large holes which suddenly appeared at the time of the earthquake. These can appear anywhere, including on roads or in parks.

3.Seek shelter near a hill or in a wide open area. If you are near objects that could fall on you, head somewhere without overhead hazards. If you can, seek shelter in a place where you are protected from the weather, but make sure that you're not somewhere where rock and soil can fall on you when aftershocks occur. Do not seek shelter under a bridge, even a sturdy one. Some bridges can be earthquake-proof, but not completely safe as objects like signs or lights can still fall on to you.

4.Stay away from buildings, power lines, or anything large or heavy that can fall on you. Also, as in a blizzard, do not walk near power lines, fallen streetlamps, or rubble. Beware of broken glass, as even a small piece can injure your foot. Wear heavy shoes to protect your feet.
        
5.Use caution when you decide to come out of your shelter. It is likely that there are other people near to you or near to your area. Things like a cell phone are handy for everyone, because if one person is injured, another can dial 911 for an ambulance.

6.Wait a moment or two after the first quake before moving to any other place. It is best to do this because aftershocks right after an earthquake are usually the strongest. If you eventually leave, observe the safety rules above and take care that debris does not fall on you.`

      },
      {
        id: '1',
        title: 'Prevention tecniques to be followed during tsunami - NDRF',
        picture: require('../images/tsunami.jpg'),
        topic: 'Tsunami',
      },
      {
        id: '2',
        title: 'Recent Wildfire attacks you need to know about',
        picture: require('../images/wildfire.jpg'),
        topic: 'Wildfire',
      }
    ]  

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
              <Title>Home</Title>
            </Body>
            <Right>
            </Right>
          </Header>
          <Container>
            <Content >
              <Card
                transparent
                bordered
                dataArray={cards}
                renderRow={card => 
                  <Card style={{margin: 12, flex: 1, elevation: 3, backgroundColor: '#FFFFFF'}}>
                      <CardItem 
                        button
                        onPress={() => this.props.navigation.navigate('NewsFeed',{data: card})}
                      >
                        <Body style={{flex:1}}>
                          <Text>{card.title}</Text>
                          <Text note>{card.topic}</Text>
                        </Body>
                      </CardItem>
                      <CardItem cardBody
                        button
                        onPress={() => this.props.navigation.navigate('NewsFeed',{data: card})}
                      >
                        <Image style={{height: 200, flex: 1}} source={card.picture}/>
                      </CardItem>
                  </Card>
                }>
              </Card>
            </Content>
          </Container>
        </Container>
      </Drawer>
    )
  }
}
