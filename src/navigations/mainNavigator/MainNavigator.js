import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import NewsFeedStack from '../stacks/NewFeedStack';
import StationStack from '../stacks/StationStack';
import NotificationStack from '../stacks/NotificationStack';
import SettingStack from '../stacks/SettingStack';

const Tab = createBottomTabNavigator();

export default function MainNavigator(){
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="NewsFeed" component={NewsFeedStack} options={{ tabBarBadge: 3 }} />
                <Tab.Screen name="Station" component={StationStack} />
                <Tab.Screen name="Notification" component={NotificationStack} />
                <Tab.Screen name="Setting" component={SettingStack} />
            </Tab.Navigator>
        </NavigationContainer>        
    );
}
