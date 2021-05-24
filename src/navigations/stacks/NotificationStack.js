import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import NotificationScreen from '../../screens/mainScreen/NotificationScreen';
import JobDetailScreen from '../../screens/JobDetailScreen';

const Stack = createStackNavigator();
export default function NotificationStack (){
    return(
        <Stack.Navigator>
            <Stack.Screen name= "Notification" component={NotificationScreen}/>
            <Stack.Screen name= "JobDetail" component={JobDetailScreen}/>
        </Stack.Navigator>
    );
}