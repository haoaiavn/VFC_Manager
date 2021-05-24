import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import StationScreen from '../../screens/mainScreen/StationScreen';
import JobDetailScreen from '../../screens/JobDetailScreen';

const Stack = createStackNavigator();
export default function StationStack (){
    return(
        <Stack.Navigator>
            <Stack.Screen name= "Station" component={StationScreen}/>
            <Stack.Screen name= "JobDetail" component={JobDetailScreen}/>
        </Stack.Navigator>
    );
}