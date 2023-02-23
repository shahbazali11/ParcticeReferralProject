import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Input from "../screen/Input/Input";
import Feed from "../screen/Feed/Feed";

export type MainNavigationParamList={
    Feed: undefined;
    Input: undefined;
}

const Stack = createNativeStackNavigator<MainNavigationParamList>();

function MainNavigation() {
    return (
        <NavigationContainer>
           <Stack.Navigator initialRouteName="Input" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Feed" component={Feed}/>
            <Stack.Screen name='Input' component={Input}/>
           </Stack.Navigator>
        </NavigationContainer>
    )
}
export default MainNavigation;