import * as React from 'react'
import { Box, Center, HStack, Heading, Image, ScrollView, VStack, Text, Circle, Pressable, Button, Icon } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";



export default function Contacts() {
    const navigation = useNavigation();

    return (
        <ScrollView flex={1} contentContainerStyle={{ flexGrow: 1 }}>
            <Center flex={1} bg={{
                linearGradient: {
                    colors: ['primary.400', 'primary.800'],
                    start: [1, 0],
                    end: [0, 0]
                }
            }}>
                <Box safeArea p="2" py="8" w="100%" h="88%" maxW="350px" >
                    <Heading size="xl" fontWeight="600" color="Black" _dark={{
                        color: "primary.50",
                        fontWeight: 'bold'
                    }} >
                        Contactos
                    </Heading>

                    <VStack space={6} mt={8} >
                        <Button marginLeft='5/6' mt='7' rounded borderRadius="44" width="44" height="44" bgColor="primary.200" borderWidth="3" borderColor="primary.200" leftIcon={<Icon as={<AntDesign name="plus" />} />} onPress={() => { navigation.navigate("Añadir Contacto") }}>

                        </Button>



                        <Box rounded="xl" >
                            <Pressable onPress={() => { navigation.navigate("ViewD") }}>
                                {({
                                    isHovered,
                                    isPressed
                                }) => {
                                    return <Box bg={isPressed ? "primary.100" : isHovered ? "primary.100" : "primary.300"} style={{
                                        transform: [{
                                            scale: isPressed ? 0.96 : 1
                                        }]
                                    }} p="5" rounded="8" shadow={3} borderWidth="3" borderColor="primary.200">
                                        <HStack alignItems="center">
                                            <Image width="50" height="50"
                                                mt="5" mb='5' ml='5' mr='5'
                                                source={require('../../../assets/IconoPerfil.png')} />

                                            <Text color='primary.900' mt='1' fontWeight='bold' >
                                                María Herrera
                                            </Text>
                                        </HStack>


                                    </Box>

                                }}
                            </Pressable>
                        </Box>


                    </VStack>




                </Box>
            </Center>
        </ScrollView>

    );
}
