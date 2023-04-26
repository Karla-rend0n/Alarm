import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

//Screens
import Inicio from "../AllNav/Screens/Inicio";
import Contacto from "../AllNav/Screens/Contacto";
import Perfil from "../AllNav/Screens/Perfil";

import { FontAwesome } from '@expo/vector-icons'; 
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 


//Guardar createBottom
const Tab = createBottomTabNavigator();

function MyTabs() {
    return(
        <Tab.Navigator
        initialRouteName="Inicio"
        screenOptions={{
            tabBarActiveTintColor: "purple",
        }}
        >
            <Tab.Screen 
            name="Inicio" 
            component={Inicio} 
            options={{
                tabBarIcon:({color}) => (
                    <FontAwesome name="home" size={27} color={color} />
                ),
                headerShown:false

            }}
            />


            <Tab.Screen 
            name="Agregar Contacto" 
            component={Contacto} 
            options={{
                tabBarIcon:({color}) => (
                    <SimpleLineIcons name="user-follow" size={24} color={color}  />
                ),
                headerShown:false


            }}
            />


            <Tab.Screen 
            name="Perfil" 
            component={Perfil} 
            options={{
                tabBarIcon:({color}) => (
                    <Ionicons name="person-circle-sharp" size={29} color={color}  />
                ),
                headerShown:false

            }}
            />



    </Tab.Navigator>

    );
}

//retornamos las tabs
export default function PlantillaNave(){
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>

    );
}
 