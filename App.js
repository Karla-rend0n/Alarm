import React from "react";
import {Center, NativeBaseProvider, extendTheme} from "native-base";

import { LinearGradient } from 'expo-linear-gradient';

import Navigate from "./components/Layout/Navigate";

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
        400: '#621132',//Tinto 
        500: '#C1591F',//Naranja
        600: '#9B1010',//Rojo Emergencia
        700: '#DDDAE0',//gris de los botones claro 70%
        800: '#63110E',// Tinto degradado
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
      <Navigate/>      
    </NativeBaseProvider>
  );
}


   


