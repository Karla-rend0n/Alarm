import * as React from 'react'
import { Box, Center, HStack, Heading, Image, ScrollView, VStack, Text, Circle, Pressable, Button, Icon } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";



export default function ViewContact() {
    const navigation = useNavigation();

    return <ScrollView w='100%' h='100%'>
        <Center w="100%" h="210%" bg={{
            linearGradient: {
                colors: ['primary.400', 'primary.800'],
                start: [1, 0],
                end: [0, 0]
            }
        }}>
            <Box safeArea p="2" py="8" w="100%" h="90%" maxW="350px" >
                <Heading size="xl" fontWeight="600" color="Black" _dark={{
                    color: "primary.50",
                    fontWeight: 'bold'
                }} >
                    Contactos
                </Heading>

                <VStack space={6} mt={8} >
                    <Button marginLeft='5/6' mt='7' rounded borderRadius="44" width="44" height="44" alignSelf="center" bgColor="primary.200" borderWidth="3" borderColor="primary.200" leftIcon={<Icon as={<AntDesign name="plus" />} />} onPress={() => { navigation.navigate("Contact_R") }}>

                    </Button>



                    <Box rounded="xl" >
                        <Pressable>
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

                                        <Text color='primary.900' mt='3' fontWeight='bold'>
                                            María Herrera
                                        </Text>
                                    </HStack>


                                </Box>

                            }}
                        </Pressable>
                    </Box>

                    <Button
                        background="primary.200" borderWidth="2" borderColor="primary.200" mt="8" rounded={10} _text={{
                            color: "primary.50",
                            fontWeight: "700",
                            fontSize: "lg"
                        }} onPress={() => { navigation.navigate("Address_R") }}>
                        Siguiente

                    </Button>
                </VStack>


                <HStack space={3} marginTop="8" alignSelf="center">
                    <Circle size="10px" bg="primary.200"></Circle>
                    <Circle size="10px" bg="primary.50"></Circle>
                    <Circle size="10px" bg="primary.200"></Circle>

                </HStack>


            </Box>
        </Center>

    </ScrollView>
}
