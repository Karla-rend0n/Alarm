import { useNavigation } from "@react-navigation/native";
import { Box, Center, Divider, Flex, Heading, ScrollView, Text, VStack } from "native-base";
import React from "react";
import { Dimensions } from "react-native";

import { useUser } from "../../store/user";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ViewProfile() {
    const navigation = useNavigation();
    const { user } = useUser(state => state)
    const info = user[0];

    return (
        <ScrollView flex={1} contentContainerStyle={{ flexGrow: 1 }}>
            <Box background='primary.50' w='100%' alignItems='center'>
                <Flex direction='row' alignItems='center' marginTop={10} marginBottom='1'>
                    {/* <Avatar size="xl" source={{
                        uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    }}
                        marginTop='70'>
                    </Avatar> */}

                    <Heading color='primary.900' marginTop='60' marginLeft='3'>
                        Tú Información
                    </Heading>
                </Flex>
            </Box>

            <Center flex={1} bg={{
                linearGradient: {
                    colors: ['primary.400', 'primary.800'],
                    start: [1, 0],
                    end: [0, 0]
                }
            }}>
                <Box safeArea p="2" width="100%" maxWidth="350px" >
                    <VStack space={windowHeight * 0.02} mt={windowHeight * 0.02}>
                        <Heading fontWeight='bold' fontSize='lg'>
                            Nombre
                        </Heading>

                        <Text fontWeight='normal' fontSize='md' mx={10}>
                            {info.name}
                        </Text>

                        <Divider mx={1} background='primary.50' />


                        <Heading fontWeight='bold' fontSize='lg' mt="10">
                            Apellidos
                        </Heading>

                        <Text fontWeight='normal' fontSize='md' mx={10}>
                            {info.last_name}
                        </Text>

                        <Divider mx={1} background='primary.50' />


                        <Heading fontWeight='bold' fontSize='lg' mt="10">
                            Email
                        </Heading>

                        <Text fontWeight='normal' fontSize='md' mx={10}>
                            {info.email}
                        </Text>

                        <Divider mx={1} background='primary.50' />


                        <Heading fontWeight='bold' fontSize='lg' mt="10">
                            Contraseña
                        </Heading>

                        <Text fontWeight='normal' fontSize='md' mx={10}>
                            {info.password}
                        </Text>

                        <Divider mx={1} background='primary.50' />


                        <Heading fontWeight='bold' fontSize='lg' mt="10">
                            Teléfono
                        </Heading>

                        <Text fontWeight='normal' fontSize='md' mx={10}>
                            {info.phone}
                        </Text>

                        <Divider mx={1} background='primary.50' />


                        <Heading fontWeight='bold' fontSize='lg' mt="10">
                            Edad
                        </Heading>

                        <Text fontWeight='normal' fontSize='md' mx={10}>
                            {info.age}
                        </Text>

                        <Divider mx={1} background='primary.50' />
                    </VStack>
                </Box>
            </Center>
        </ScrollView>
    );
}
