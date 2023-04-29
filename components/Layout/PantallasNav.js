import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import Principal from "../Principal";
import Login from "../Login";

import Register from "../AllNav/Screens/Register";
import ContactsR from "../AllNav/Screens/ContactsR";
import ViewContact from "../AllNav/Screens/ViewContacts";
import Address from "../AllNav/Screens/Address";

import Inicio from "../AllNav/Screens/Inicio";
import Contacts from "../AllNav/Screens/Contacto";

import Perfil from "../AllNav/Screens/Perfil";
import Perfil_Editar from "../AllNav/Screens/Perfil_Editar";
import Dirección from "../AllNav/Screens/Dirección";
import Dirección_Editar from "../AllNav/Screens/Dirección_Editar";

import { FontAwesome } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Contactos_Editar from "../AllNav/Screens/Contactos_Editar";
import DataC from "../AllNav/Screens/DataC";
import AgregarContacto from "../AllNav/Screens/AgregarContacto";





const Stack = createNativeStackNavigator()
const Rstack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();
const HomeStackNavigator = createNativeStackNavigator();
const CNavigation = createNativeStackNavigator();

function MyStack() {
    return (
        <HomeStackNavigator.Navigator>
            <HomeStackNavigator.Screen
                name="Perfil"
                component={Perfil}
                options={{
                    headerShown: false
                }}
            />

            <HomeStackNavigator.Screen
                name="Editar"
                component={Perfil_Editar}
                options={{
                    headerBackTitleVisible: false,
                    headerTransparent: true
                }}
            />

            <HomeStackNavigator.Screen
                name="Dirección"
                component={Dirección}
                options={{
                    headerBackTitleVisible: true,
                    headerTransparent: true
                }}
            />

            <HomeStackNavigator.Screen
                name="DireEditar"
                component={Dirección_Editar}
                options={{
                    headerBackTitleVisible: false,
                    headerTransparent: true
                }}
            />

        </HomeStackNavigator.Navigator>

    )
}

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
                component={CScreen}
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

function CScreen() {
    return (
        <CNavigation.Navigator>
            <CNavigation.Screen
                name="Contactos"
                component={Contacts}
                options={{
                    headerShown: false
                }} />
                
                <CNavigation.Screen
                name="Editar"
                component={Contactos_Editar}
                options={{
                }} />
                
                <CNavigation.Screen
                name="ViewD"
                component={DataC}
                options={{
                }} />
                
                <CNavigation.Screen
                name="Agregar"
                component={AgregarContacto}
                options={{
                }} />
            
           

        </CNavigation.Navigator>
    )
}







function RNavegation() {
    return (
        <Rstack.Navigator>
            <Rstack.Screen
                name="Registro"
                component={Register}
                options={{
                    headerShown: false
                }} />
            <Rstack.Screen
                name="Contacto"
                component={ContactsR}
                options={{
                    headerTransparent: true
                }} />
            <Rstack.Screen
                name="ViewContact"
                component={ViewContact}
                options={{
                    headerTransparent: true
                }} />
            <Rstack.Screen
                name="Dirección"
                component={Address}
                options={{

                    headerTransparent: true
                }} />
            <Rstack.Screen
                name="Principal"
                component={MyTabs}
                options={{
                    headerShown: false
                }} />


        </Rstack.Navigator>
    )
}

export default function PantallaNav() {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Inicio" component={Principal}
                    options={{
                        headerShown: false,

                    }}
                />

                <Stack.Screen
                    name="Login" component={Login}
                    options={{
                        headerShown: false

                    }}
                />
                <Stack.Screen
                    name="Principal" component={MyTabs}
                    options={{
                        headerShown: false
                    }}
                />


                <Stack.Screen
                    name="Registro" component={RNavegation}
                    options={{

                        headerShown: false
                    }}
                />





            </Stack.Navigator>
        </NavigationContainer>

    )

}