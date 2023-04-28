import React from "react";
import {Center, NativeBaseProvider, extendTheme} from "native-base";
import Login from "./components/Login";
import Principal from "./components/Principal";
import MainNav from "./components/AllNav/MainNav"; 
import Perfil from "./components/AllNav/Screens/Perfil"; 
import Perfil_Editar from "./components/AllNav/Screens/Perfil_Editar";
import Dirección_Editar from "./components/AllNav/Screens/Dirección_Editar"
import NativeBaseIcon from "./components/NativeBaseIcon";
import { Platform } from "react-native";
import Register from "./components/AllNav/Screens/Register";
import Address from "./components/AllNav/Screens/Address";
import ContactsR from "./components/AllNav/Screens/ContactsR";
import ViewContact from "./components/AllNav/Screens/ViewContacts";
import Contacts from "./components/AllNav/Screens/Contacto";
import Dirección from "./components/AllNav/Screens/Dirección";
import DataC from "./components/AllNav/Screens/DataC";
import Contactos_Editar from "./components/AllNav/Screens/Contactos_Editar";
import { LinearGradient } from 'expo-linear-gradient';
import Inicio from "./components/AllNav/Screens/Inicio";


import PantallaNav from "./components/Layout/PantallasNav";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();






export default function App() {
  const config = {
    dependencies: {
      'linear-gradient': LinearGradient
    }
  };
  const theme = extendTheme({
    colors: {
      // Add new color
      primary: {
        50: '#FFFFFF', // Blanco
        100: '#DDDAE0', // Gris de input 100%
        200: '#807E82',// gris de los botones fuerte 100%
        300: '#D9D9D9', //botones de alarma y enmergencia 
        400: '#6585B8',//degradado
        500: '#C1591F',//Naranja
        600: '#9B1010',//Rojo Emergencia
        700: '#DDDAE0',//gris de los botones claro 70%
        800: '#1B396A',// Azul
        900: '#000000',//Negro
        1000: '#C1591F',//borde naranja
        1001: '#9B1010' // borde rojo
      },
      // Redefining only one shade, rest of the color will remain same.
      amber: {
        400: '#d97706',
      },
    },
    config: {
      // Changing initialColorMode to 'dark'
      initialColorMode: 'dark',
    },
  });

     


  return (

    <NativeBaseProvider theme={theme} config={config}>

      <PantallaNav/>
      {/* <Principal/> */}
      {/*<Login/>*/}
      {/*<Register/>*/}

      
      {/* <ContactsR/> */}
      {/* <ViewContact/> */}
      {/* <Address/> */}
    


      {/* <MainNav/> */}
      {/* <Inicio/> */}
      {/*<Contacts/> faltan detalles*/}
      {/* <Contactos_Editar/> */} 
      {/* <DataC/> */}
      {/* <Perfil/> */}
      {/* <Perfil_Editar/> */}
      {/* <Dirección/> */}
      {/* <Dirección_Editar/> */}




      
     
      
      
    </NativeBaseProvider>
  );
}


   


