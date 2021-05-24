import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SettingScreen from '../../screens/mainScreen/SettingScreen';
import JobDetailScreen from '../../screens/JobDetailScreen';

const Stack = createStackNavigator();
export default function SettingStack (){
    return(
        <Stack.Navigator>
            <Stack.Screen name= "Setting" component={SettingScreen}/>
            <Stack.Screen name= "JobDetail" component={JobDetailScreen}/>
        </Stack.Navigator>
    );
}