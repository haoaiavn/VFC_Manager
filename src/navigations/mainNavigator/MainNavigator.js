import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import NewsFeedStack from '../stacks/NewFeedStack';
import StationStack from '../stacks/StationStack';
import NotificationStack from '../stacks/NotificationStack';
import SettingStack from '../stacks/SettingStack';

const Tab = createBottomTabNavigator();

export default function MainNavigator(){
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="NewsFeed"
                tabBarOptions={{
                    activeTintColor: '#4EC4FF',
                    showLabel: false,
                }}>
                <Tab.Screen 
                    name="NewsFeed"
                    component={NewsFeedStack}
                    options={{
                        tabBarLabel: "NewsFeed",
                        tabBarIcon: ({focused, color, size}) => (
                            <Ionicons name="home" size={size} color={color} />
                          ),
                    }} />
                <Tab.Screen
                    name="Station"
                    component={StationStack}
                    options={{
                        tabBarLabel: "Station",
                        tabBarIcon: ({focused, color, size}) => (
                            <Ionicons name="people" size={size} color={color} />
                        ),
                    }} />
                <Tab.Screen
                    name="Notification"
                    component={NotificationStack}
                    options={{
                        tabBarBadge: 3,
                        tabBarLabel: "Notification",
                        tabBarIcon: ({focused, color, size}) => (
                            <Ionicons name="notifications" size={size} color={color} />
                        ),
                    }} />
                <Tab.Screen
                    name="Setting"
                    component={SettingStack}
                    options={{
                        tabBarLabel: "Setting",
                        tabBarIcon: ({focused, color, size}) => (
                            <Ionicons name="settings" size={size} color={color} />
                          ),
                    }} />
            </Tab.Navigator>
        </NavigationContainer>        
    );
}
