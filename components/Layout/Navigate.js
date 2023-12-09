import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";


import Login from "../Login";
import Start from "../Start";

import Address_R from "../AllNav/Screens/Address_R";
import Contact_Registration from "../AllNav/Screens/Contact_Registration";
import Register from "../AllNav/Screens/Register";
import ViewContact from "../AllNav/Screens/ViewContacts";

import AddContact from "../AllNav/Screens/AddContact";
import C_Information from "../AllNav/Screens/C_Information";
import Contacts from "../AllNav/Screens/Contacts";
import Edit_Contacts from "../AllNav/Screens/Edit_Contacts";
import Home from "../AllNav/Screens/Home";

import Address from "../AllNav/Screens/Address";
import Address_Edit from "../AllNav/Screens/Address_Edit";
import Profile from "../AllNav/Screens/Profile";
import Profile_Edit from "../AllNav/Screens/Profile_Edit";

import ViewProfile from "../AllNav/Screens/ViewProfile";

import { FontAwesome, Ionicons } from '@expo/vector-icons';
import RegisterContacts from "../AllNav/Screens/RegisterContacts";

const Stack = createNativeStackNavigator()
const Rstack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();
const ProfileStackNavigator = createNativeStackNavigator();
const CNavigation = createNativeStackNavigator();

function ProfileStack() {
    return (
        <ProfileStackNavigator.Navigator>
            <ProfileStackNavigator.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: false
                }}
            />

            <ProfileStackNavigator.Screen
                name="Edit_P"
                component={Profile_Edit}
                options={{
                    headerBackTitleVisible: false,
                    headerTransparent: true,
                    title: "",
                }}
            />

            <ProfileStackNavigator.Screen
                name="Address"
                component={Address}
                options={{
                    headerBackTitleVisible: true,
                    headerTransparent: true,
                    title: "",
                }}
            />

            <ProfileStackNavigator.Screen
                name="Address_Edit"
                component={Address_Edit}
                options={{
                    headerTransparent: true,
                    title: "",
                    headerTintColor: '#ffff', // Cambia 'color_de_flecha' al color que desees
                }}
            />

            <ProfileStackNavigator.Screen
                name="ViewProfile"
                component={ViewProfile}
                options={{
                    headerBackTitleVisible: false,
                    headerTransparent: true,
                    title: "",
                }}
            />
        </ProfileStackNavigator.Navigator>
    )
}

function HomeTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: "#BD8A3E",
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="home" size={27} color={color} />
                    ),
                    headerShown: false
                }}
            />

            <Tab.Screen
                name="Agregar Contacto"
                component={Contact_Screen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="person-add" size={24} color={color} />
                    ),
                    headerShown: false,
                    unmountOnBlur: true,
                }}
            />

            <Tab.Screen
                name="Profile"
                component={ProfileStack}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="person-circle-sharp" size={29} color={color} />
                    ),
                    headerShown: false,
                    unmountOnBlur: true,
                }}
            />
        </Tab.Navigator>
    );
}

function Contact_Screen() {
    return (
        <CNavigation.Navigator>
            <CNavigation.Screen
                name="Contacts"
                component={Contacts}
                options={{
                    headerShown: false
                }}
            />

            <CNavigation.Screen
                name="Edit"
                component={Edit_Contacts}
                options={{
                    headerTransparent: true,
                    title: "",
                    headerTintColor: '#ffff', // Cambia 'color_de_flecha' al color que desees
                }}
            />

            <CNavigation.Screen
                name="ViewD"
                component={C_Information}
                options={{
                    headerTransparent: true,
                    title: "",
                    headerTintColor: '#ffff', // Cambia 'color_de_flecha' al color que desees
                }}
            />

            <CNavigation.Screen
                name="Añadir Contacto"
                component={AddContact}
                options={{
                    headerTransparent: true,
                    title: "",
                    headerTintColor: '#ffff', // Cambia 'color_de_flecha' al color que desees
                }}
            />
        </CNavigation.Navigator>
    )
}

function R_Navegation() {
    return (
        <Rstack.Navigator>
            <Rstack.Screen
                name="Register"
                component={Register}
                options={{
                    headerTransparent: true,
                    title: "", //Establece el titulo en una cadena vacia para ocultarlo
                    headerTintColor: '#ffff', // Cambia 'color_de_flecha' al color que desees
                }}
            />

            <Rstack.Screen
                name="Contact_R"
                component={Contact_Registration}
                options={{
                    headerTransparent: true,
                    title: "",
                    headerTintColor: '#ffff', // Cambia 'color_de_flecha' al color que desees
                }}
            />

            <Rstack.Screen
                name="ViewContact"
                component={ViewContact}
                options={{
                    headerTransparent: true,
                    title: "",
                    headerTintColor: '#ffff', // Cambia 'color_de_flecha' al color que desees
                }}
            />

            <Rstack.Screen
                name="RegisterContacts"
                component={RegisterContacts}
                options={{
                    headerTransparent: true,
                    title: "",
                    headerTintColor: '#ffff', // Cambia 'color_de_flecha' al color que desees
                }}
            />

            <Rstack.Screen
                name="Address_R"
                component={Address_R}
                options={{

                    headerTransparent: true,
                    title: "",
                    headerTintColor: '#ffff', // Cambia 'color_de_flecha' al color que desees
                }}
            />
        </Rstack.Navigator>
    )
}

export default function Navigate() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Start" component={Start}
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name="Login" component={Login}
                    options={{
                        headerTransparent: true,
                        title: "",
                        headerTintColor: '#ffff', // Cambia 'color_de_flecha' al color que desees
                    }}
                />

                <Stack.Screen
                    name="Home" component={HomeTabs}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="Register" component={R_Navegation}
                    options={{

                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
