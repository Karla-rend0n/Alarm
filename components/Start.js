import React from "react";
import { Box, Button, Center, Image, VStack } from 'native-base'
import { useNavigation } from "@react-navigation/native";






export default function Home() {
    const navigation = useNavigation();

    return <Center w="100%" h="100%" bg={{
        linearGradient: {
            colors: ['primary.400', 'primary.800'],
            start: [1, 0],
            end: [0, 0]

        }
    }}>
        <Box safeArea p="1" py="8" w="100%" maxW="350">
            <VStack space={1} justifyContent="center" alignItems="center">
                <Image width="389" height="138" mt="9"
                    source={require('../assets/itaa.png')} />

                <Image width="116" height="131" mt="10"
                    source={require('../assets/ita2.png')} />
            </VStack>

            <VStack space={10} mt="47">

                <Button background="primary.50" borderWidth="2" borderColor="primary.50" mt="15" rounded={10} onPress={() => { navigation.navigate("Login") }} _text={{
                    color: "primary.900",
                    fontWeight: "700",
                    fontSize: "lg"
                }}>
                    Inciar sesión
                </Button>

                <Button background="primary.50" borderWidth="2" borderColor="primary.50" mt="14" rounded={10} onPress={() => { navigation.navigate("Register") }} _text={{
                    color: "primary.900",
                    fontWeight: "700",
                    fontSize: "lg"
                }}>
                    Crear una cuenta
                </Button>

            </VStack>

        </Box>
    </Center>
}





