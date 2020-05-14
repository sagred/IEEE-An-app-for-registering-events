import React, {useEffect} from 'react'
import { Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import PushController from './Push';
import Home from './components/Home'
import Benefits from './components/Benefits'
import Guest from './components/Guest'
import Idea from './components/Idea'
import SplashScreen from 'react-native-splash-screen'

const Events = () => {
  return (
     <Home />
  );
}

const IeeeTab = () => {
  return (
      <Benefits />
  );
}

function GuestTab() {
  return (
     <Guest />
  );
}

function IdeaTab() {
  return (
      <Idea />
  );
}

const Tab = createMaterialBottomTabNavigator();


function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#61fff2"
      barStyle={{ backgroundColor: '#000000' }}
    >
      <Tab.Screen
        name="Events"
        component={Events}
        options={{
          tabBarLabel: 'Events',
          tabBarIcon: ({ color }) => (
            <Icon name="calendar" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="IeeeTab"
        component={IeeeTab}
        options={{
          tabBarLabel: 'IEEE',
          tabBarIcon: ({ color }) => (
            <Icon name="bank" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="IdeaTab"
        component={IdeaTab}
        options={{
          tabBarLabel: 'Ideas',
          tabBarIcon: ({ color }) => (
            <Icon name="flash" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="GuestTab"
        component={GuestTab}
        options={{
          tabBarLabel: 'Guest',
          tabBarIcon: ({ color }) => (
            <Icon name="alien" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {

useEffect( () => {
    SplashScreen.hide();
  })

  return (
    <NavigationContainer>
      <Tabs />
      <PushController/>
    </NavigationContainer>
  );
}

export default App
