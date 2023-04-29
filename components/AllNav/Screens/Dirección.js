import React from "react";
import { Center, Box, Avatar, Icon, Input, FormControl, Button, Stack, ScrollView, Heading, HStack, Container, Divider, Text, VStack } from "native-base"
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function Dirección() {
    const navigation = useNavigation();

    return <ScrollView w='100%' h="100%">
        <Center w='100%' h="100%" bg={{
            linearGradient: {
                colors: ['primary.400', 'primary.800'],
                start: [1, 0],
                end: [0, 0]

            }
        }}>

            <Box background='primary.50' w="100%" alignItems='center'>
                <Heading size="lg" fontWeight="600" color="Black" _dark={{
                    color: "primary.900",
                    fontWeight: 'bold'
                }} marginTop='50'
                    marginBottom='50'>
                    Dirección
                </Heading>
            </Box>


            <Box w="100%" h="82%" alignItems="center" >
                <Stack space={5} w="75%" maxW="350px" mx="auto" m="10">

                    <VStack space={3}>
                        <Heading fontWeight='bold' fontSize='md'>
                            Dirección
                        </Heading>
                        <Text fontWeight='normal' fontSize='md' mx={10}>
                            Av. Adolfo
                        </Text>
                        <Divider mx={1} background='primary.50' />
                    </VStack>

                    <VStack space={3}>
                        <Heading fontWeight='bold' fontSize='md'>
                            Calle
                        </Heading>
                        <Text fontWeight='normal' fontSize='md' mx={10}>
                            Los pinos
                        </Text>
                        <Divider mx={1} background='primary.50' />
                    </VStack>
                    <VStack space={3}>
                        <Heading fontWeight='bold' fontSize='md'>
                            Número exterior
                        </Heading>
                        <Text fontWeight='normal' fontSize='md' mx={10}>
                            34
                        </Text>
                        <Divider mx={1} background='primary.50' />
                    </VStack>
                    <VStack space={3}>
                        <Heading fontWeight='bold' fontSize='md'>
                            Número interior
                        </Heading>
                        <Text fontWeight='normal' fontSize='md' mx={10}>
                            5
                        </Text>
                        <Divider mx={1} background='primary.50' />
                    </VStack>
                    <VStack space={3}>
                        <Heading fontWeight='bold' fontSize='md'>
                        Colonia
                        </Heading>
                        <Text fontWeight='normal' fontSize='md' mx={10}>
                        Industrial
                        </Text>
                        <Divider mx={1} background='primary.50' />
                    </VStack>
                    <VStack space={3}>
                        <Heading fontWeight='bold' fontSize='md'>
                        Código Postal
                        </Heading>
                        <Text fontWeight='normal' fontSize='md' mx={10}>
                        58794
                        </Text>
                        <Divider mx={1} background='primary.50' />
                    </VStack>
                    <VStack space={3}>
                        <Heading fontWeight='bold' fontSize='md'>
                        Estado
                        </Heading>
                        <Text fontWeight='normal' fontSize='md' mx={10}>
                        Aguascalientes
                        </Text>
                        <Divider mx={1} background='primary.50' />
                    </VStack>
                    <VStack space={3}>
                        <Heading fontWeight='bold' fontSize='md'>
                        Municipio 
                        </Heading>
                        <Text fontWeight='normal' fontSize='md' mx={10}>
                        Aguascalientes
                        </Text>
                        <Divider mx={1} background='primary.50' />
                    </VStack>




                    <Button background="primary.300" mt="5" _text={{
                        color: "primary.900",
                        fontWeight: "400",
                        fontSize: "xl"
                    }} rounded='full'
                    onPress={() => navigation.navigate("DireEditar")}>
                        Editar
                    </Button>


                </Stack>
            </Box>

        </Center>

    </ScrollView>

}
