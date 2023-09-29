import React from "react";
import { Center, Box, Avatar, Icon, Input, FormControl, Button, Stack, ScrollView, Heading, HStack, Container, Divider, Text, VStack, Flex } from "native-base"
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function Address() {
    const navigation = useNavigation();


    return (
        <ScrollView flex={1} contentContainerStyle={{ flexGrow: 1 }}>

            <Box background="primary.50" w="100%" alignItems='center'>
                <Flex direction="column" alignItems="center" marginTop={10}>
                    <Heading size="lg" fontWeight="600" color="Black" _dark={{
                        color: "primary.900",
                        fontWeight: 'bold'
                    }} marginTop='50'
                        marginBottom='50'>
                        Dirección
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
                            Dirección
                        </Heading>
                        <Text fontWeight='normal' fontSize='md' mx={10}>
                            Av. Adolfo
                        </Text>
                        <Divider mx={1} background='primary.50' />


                        <Heading fontWeight='bold' fontSize='lg' mt="10">
                            Calle
                        </Heading>
                        <Text fontWeight='normal' fontSize='md' mx={10}>
                            Los pinos
                        </Text>
                        <Divider mx={1} background='primary.50' />


                        <Heading fontWeight='bold' fontSize='lg' mt="10">
                            Número exterior
                        </Heading>
                        <Text fontWeight='normal' fontSize='md' mx={10}>
                            34
                        </Text>
                        <Divider mx={1} background='primary.50' />


                        <Heading fontWeight='bold' fontSize='lg' mt="10">
                            Número interior
                        </Heading>
                        <Text fontWeight='normal' fontSize='md' mx={10}>
                            5
                        </Text>
                        <Divider mx={1} background='primary.50' />


                        <Heading fontWeight='bold' fontSize='lg' mt="10">
                            Código Postal
                        </Heading>
                        <Text fontWeight='normal' fontSize='md' mx={10}>
                            58794
                        </Text>
                        <Divider mx={1} background='primary.50' />


                        <Heading fontWeight='bold' fontSize='lg' mt="10">
                            Colonia
                        </Heading>
                        <Text fontWeight='normal' fontSize='md' mx={10}>
                            Industrial
                        </Text>
                        <Divider mx={1} background='primary.50' />


                        <Heading fontWeight='bold' fontSize='lg' mt="10">
                            Estado
                        </Heading>
                        <Text fontWeight='normal' fontSize='md' mx={10}>
                            Aguascalientes
                        </Text>
                        <Divider mx={1} background='primary.50' />


                        <Heading fontWeight='bold' fontSize='lg' mt="10">
                            Municipio
                        </Heading>
                        <Text fontWeight='normal' fontSize='md' mx={10}>
                            Aguascalientes
                        </Text>
                        <Divider mx={1} background='primary.50' />

                        <Button
                            background="primary.200" borderWidth="2" borderColor="primary.200" mt="3" rounded={10} _text={{
                                color: "primary.50",
                                fontWeight: "700",
                                fontSize: "lg"
                            }} onPress={() => navigation.navigate("Address_Edit")}>
                            Editar
                        </Button>
                    </VStack>
                </Box>
            </Center>
        </ScrollView>
    );

}
