import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import { Platform } from "react-native";



export default function App() {
  const theme = extendTheme({
    colors: {
      // Add new color
      primary: {
        50: '#FFFFFF', // Blanco
        100: '#DDDAE0', // Gris de input 100%
        200: '#807E82',// gris de los botones fuerte 100%
        300: '#D9D9D9', //botones de alarma y enmergencia 
        400: '#',
        500: '#C1591F',//Neranja
        600: '#9B1010',//Rojo Emergencia
        700: '#DDDAE0',//gris de los botones claro 70%
        800: '#1B396A',// Azul
        900: '#000000',//Negro
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
    <NativeBaseProvider theme={theme}>
      <Center alignItems="center">
        
      </Center>
    </NativeBaseProvider>
  );
}
