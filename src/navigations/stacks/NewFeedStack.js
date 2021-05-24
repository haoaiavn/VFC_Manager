import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import NewsFeedScreen from '../../screens/mainScreen/NewsFeedScreen';
import JobDetailScreen from '../../screens/JobDetailScreen';

const Stack = createStackNavigator();
export default function NewsFeedStack (){
    return(
        <Stack.Navigator>
            <Stack.Screen name= "NewsFeed" component={NewsFeedScreen}/>
            <Stack.Screen name= "JobDetail" component={JobDetailScreen}/>
        </Stack.Navigator>
    );
}