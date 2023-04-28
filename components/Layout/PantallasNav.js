import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Principal from "../Principal";
import Login from "../Login";
import Register from "../AllNav/Screens/Register";


const Stack = createNativeStackNavigator()

export default function PantallaNav(){

    return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
            name="PanInicio" component={Principal}
            options={{
                headerShown:false,
            }}
            />
            
            <Stack.Screen
            name="PanLogin" component={Login}
            />
            
            <Stack.Screen
            name="PanRegistro" component={Register}
            />
            
       

            

        </Stack.Navigator>
    </NavigationContainer>

    )

}