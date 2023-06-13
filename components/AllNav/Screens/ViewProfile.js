import React from "react";
import { Center, Box, Avatar, Icon, Input, FormControl, Button, Stack, ScrollView, Heading, HStack, Container, Divider, Text, VStack, Flex } from "native-base"
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


export default function ViewProfile() {
    const navigation = useNavigation();

    return <ScrollView w="100%" h="100%">
        <Box background="primary.50" w="100%" alignItems='center'>
            <Flex direction="row" alignItems="center" marginTop='10' marginBottom='1'>
                <Avatar size="xl" source={{
                    uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                }}
                    marginTop='10'>


                </Avatar>
                <Heading color='primary.900' marginTop='60' marginLeft='3'>
                    Fatima Herrera
                </Heading>
            </Flex>
        </Box>

        <Box w="100%" h="100%" alignItems="center" bg={{
            linearGradient: {
                colors: ['primary.400', 'primary.800'],
                start: [1, 0],
                end: [0, 0]

            }
        }}>


            <Stack space={8} w="75%" maxW="350px" mx="auto" m="10">

                <VStack space={3}>
                    <Heading fontWeight='bold' fontSize='md'>
                        Tu correo
                    </Heading>
                    <Text fontWeight='normal' fontSize='md' mx={10}>
                        fatima13@gmail.com
                    </Text>
                    <Divider mx={1} background='primary.50' />
                </VStack>

                <VStack space={3}>
                    <Heading fontWeight='bold' fontSize='md'>
                        Contraseña
                    </Heading>
                    <Text fontWeight='normal' fontSize='md' mx={10}>
                        **********
                    </Text>
                    <Divider mx={1} background='primary.50' />
                </VStack>
                <VStack space={3}>
                    <Heading fontWeight='bold' fontSize='md'>
                        Teléfono
                    </Heading>
                    <Text fontWeight='normal' fontSize='md' mx={10}>
                        449-567-0098
                    </Text>
                    <Divider mx={1} background='primary.50' />
                </VStack>
                <VStack space={3}>
                    <Heading fontWeight='bold' fontSize='md'>
                        Edad
                    </Heading>
                    <Text fontWeight='normal' fontSize='md' mx={10}>
                        25
                    </Text>
                    <Divider mx={1} background='primary.50' />
                </VStack>

            </Stack>

        </Box>

    </ScrollView>



}


