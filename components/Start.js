import React from "react";
import { Box, Button, Center, Image, VStack, ScrollView } from 'native-base'
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



export default function Start() {
    const navigation = useNavigation();


    // Relación de aspecto original de la imagen ita2.png
    const ita2ImageWidth = 80;
    const ita2ImageHeight = 131;

    // Ajustamos la altura proporcionalmente al ancho de la pantalla
    const ita2ImageHeightAdjusted = (windowWidth * 0.25 * ita2ImageHeight) / ita2ImageWidth;

    return (
        <Box flex={1} bg={{ // Utilizamos flex para ocupar todo el espacio disponible
            linearGradient: {
                colors: ['primary.400', 'primary.800'],
                start: [1, 0],
                end: [0, 0]
            }
        }}>

            <ScrollView flex={1} contentContainerStyle={{ flexGrow: 1 }}> {/* Utilizamos ScrollView para que el contenido sea desplazable */}
                <Center flex={1}>

                    <Box safeArea p="5%" w="100%" maxWidth="350px"> {/* Ajustamos los valores de padding y utilizamos porcentajes */}

                        <VStack space={windowHeight * 0.02} justifyContent="center" alignItems="center">


                            <Image
                                width={windowWidth * 0.9}
                                height={ita2ImageHeightAdjusted}
                                resizeMode="contain"
                                source={require('../assets/itaa.png')}
                                alt="Logo Tec"
                            />

                            <Image
                                width={windowWidth * 0.30}
                                height={ita2ImageHeightAdjusted}
                                mt={windowHeight * 0.02}
                                source={require('../assets/ita2.png')}
                            />
                        </VStack>


                        <VStack space={windowHeight * 0.07} mt={windowHeight * 0.05}> {/* Ajustamos el espacio entre los botones */}
                            <Button background="primary.50" borderWidth="2" borderColor="primary.50" rounded={10} onPress={() => { navigation.navigate("Login") }} _text={{
                                color: "primary.900",
                                fontWeight: "700",
                                fontSize: "lg"
                            }}>
                                Iniciar sesión
                            </Button>

                            <Button background="primary.50" borderWidth="2" borderColor="primary.50" rounded={10} onPress={() => { navigation.navigate("Register") }} _text={{
                                color: "primary.900",
                                fontWeight: "700",
                                fontSize: "lg"
                            }}>
                                Crear una cuenta
                            </Button>
                        </VStack>

                    </Box>
                </Center>
            </ScrollView>
        </Box>
    );
}


