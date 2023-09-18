import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import Start from "../Start";
import Login from "../Login";

import Register from "../AllNav/Screens/Register";
import Contact_Registration from "../AllNav/Screens/Contact_Registration";
import ViewContact from "../AllNav/Screens/ViewContacts";
import Address_R from "../AllNav/Screens/Address_R";

import Home from "../AllNav/Screens/Home";
import Contacts from "../AllNav/Screens/Contacts";
import AddContact from "../AllNav/Screens/AddContact";
import Edit_Contacts from "../AllNav/Screens/Edit_Contacts";
import C_Information from "../AllNav/Screens/C_Information";

import Profile from "../AllNav/Screens/Profile";
import Profile_Edit from "../AllNav/Screens/Profile_Edit";
import Address from "../AllNav/Screens/Address";
import Address_Edit from "../AllNav/Screens/Address_Edit";

import ViewProfile from "../AllNav/Screens/ViewProfile";

import { FontAwesome } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';



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
                    headerTransparent: true
                }}
            />

            <ProfileStackNavigator.Screen
                name="Address"
                component={Address}
                options={{
                    headerBackTitleVisible: true,
                    headerTransparent: true
                }}
            />

            <ProfileStackNavigator.Screen
                name="Address_Edit"
                component={Address_Edit}
                options={{
                    headerBackTitleVisible: false,
                    headerTransparent: true
                }}
            />

            <ProfileStackNavigator.Screen
                name="ViewProfile"
                component={ViewProfile}
                options={{
                    headerBackTitleVisible: false,
                    headerTransparent: true
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

        //#31607D
        //#527F9B
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="home" size={27} color={color} />
                    ),
                    headerShown: false //Esto es para que no se muestre el header o el encabezado en blanco del titulo

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
                }} />

            <CNavigation.Screen
                name="Edit"
                component={Edit_Contacts}
                options={{
                }} />

            <CNavigation.Screen
                name="ViewD"
                component={C_Information}
                options={{
                }} />

            <CNavigation.Screen
                name="Añadir Contacto"
                component={AddContact}
                options={{
                }} />



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
                }} />
            <Rstack.Screen
                name="Contact_R"
                component={Contact_Registration}
                options={{
                    headerTransparent: true,
                    title: "",
                }} />
            <Rstack.Screen
                name="ViewContact"
                component={ViewContact}
                options={{
                    headerTransparent: true,
                    title: "",
                }} />
            <Rstack.Screen
                name="Address_R"
                component={Address_R}
                options={{

                    headerTransparent: true,
                    title: "",
                }} />
            {/* <Rstack.Screen
                name="Home"
                component={HomeTabs}
                options={{
                    headerShown: false
                }} /> */}


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