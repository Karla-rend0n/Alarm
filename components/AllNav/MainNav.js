import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


//Screens
import Inicio from "../AllNav/Screens/Inicio";


import Contacto from "../AllNav/Screens/Contacto";



import Perfil from "../AllNav/Screens/Perfil";
import Perfil_Editar from "./Screens/Perfil_Editar";
import Dirección from "./Screens/Dirección";
import Dirección_Editar from "./Screens/Dirección_Editar";



import { FontAwesome } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';



//Para la navegación
const HomeStackNavigator = createNativeStackNavigator();

function MyStack() {
    return (
        <HomeStackNavigator.Navigator>
            <HomeStackNavigator.Screen
                name="Perfil"
                component={Perfil}
                options={{
                    headerShown: false,
                }}
            />

            <HomeStackNavigator.Screen
                name="PantEditar"
                component={Perfil_Editar}
                options={{
                    headerBackTitleVisible: false,
                }}
            />

            <HomeStackNavigator.Screen
                name="PantDirección"
                component={Dirección}
                options={{
                    headerBackTitleVisible: false,
                }}
            />

            <HomeStackNavigator.Screen
                name="PantDireEditar"
                component={Dirección_Editar}
                options={{
                    headerBackTitleVisible: false,
                }}
            />
        </HomeStackNavigator.Navigator>

    )
}


//Guardar createBottom
const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
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
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="home" size={27} color={color} />
                    ),
                    headerShown: false

                }}
            />


            <Tab.Screen
                name="Agregar Contacto"
                component={Contacto}
                options={{
                    tabBarIcon: ({ color }) => (
                        <SimpleLineIcons name="user-follow" size={24} color={color} />
                    ),
                    headerShown: false


                }}
            />


            <Tab.Screen
                name="Perfil"
                component={MyStack}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="person-circle-sharp" size={29} color={color} />
                    ),
                    headerShown: false

                }}
            />



        </Tab.Navigator>

    );
}

//retornamos las tabs
export default function PlantillaNave() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>

    );
}
