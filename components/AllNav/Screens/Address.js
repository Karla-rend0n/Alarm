import { useNavigation } from '@react-navigation/native';
import { Box, Button, Center, Divider, Flex, Heading, ScrollView, Text, VStack } from "native-base";
import React from "react";
import { Dimensions } from "react-native";
import { useUser } from "../../store/user";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Address() {
    const navigation = useNavigation();
    const { user } = useUser(state => state)
    const { profile_address } = user[0];
    const info = profile_address[0];

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
                            {info.street} {info.building_number}
                        </Text>

                        <Divider mx={1} background='primary.50' />


                        <Heading fontWeight='bold' fontSize='lg' mt="10">
                            Calle
                        </Heading>

                        <Text fontWeight='normal' fontSize='md' mx={10}>
                            {info.street}
                        </Text>

                        <Divider mx={1} background='primary.50' />


                        <Heading fontWeight='bold' fontSize='lg' mt="10">
                            Número exterior
                        </Heading>

                        <Text fontWeight='normal' fontSize='md' mx={10}>
                            {info.building_number}
                        </Text>

                        <Divider mx={1} background='primary.50' />


                        <Heading fontWeight='bold' fontSize='lg' mt="10">
                            Número interior
                        </Heading>

                        <Text fontWeight='normal' fontSize='md' mx={10}>
                            {info.apartment_number ? info.apartment_number : "No existe un número de interior"}
                        </Text>

                        <Divider mx={1} background='primary.50' />


                        <Heading fontWeight='bold' fontSize='lg' mt="10">
                            Código Postal
                        </Heading>

                        <Text fontWeight='normal' fontSize='md' mx={10}>
                            {info.zip_code}
                        </Text>

                        <Divider mx={1} background='primary.50' />


                        <Heading fontWeight='bold' fontSize='lg' mt="10">
                            Colonia
                        </Heading>

                        <Text fontWeight='normal' fontSize='md' mx={10}>
                            {info.city}
                        </Text>

                        <Divider mx={1} background='primary.50' />


                        <Heading fontWeight='bold' fontSize='lg' mt="10">
                            Estado
                        </Heading>

                        <Text fontWeight='normal' fontSize='md' mx={10}>
                            {info.state}
                        </Text>

                        <Divider mx={1} background='primary.50' />


                        <Heading fontWeight='bold' fontSize='lg' mt="10">
                            Municipio
                        </Heading>

                        <Text fontWeight='normal' fontSize='md' mx={10}>
                            {info.municipality}

                        </Text>

                        <Divider mx={1} background='primary.50' />

                        <Button
                            background="primary.200"
                            borderWidth="2"
                            borderColor="primary.200"
                            mt="3"
                            rounded={10}
                            _text={{
                                color: "primary.50",
                                fontWeight: "700",
                                fontSize: "lg"
                            }}
                            onPress={() => navigation.navigate("Address_Edit")}
                        >
                            Editar
                        </Button>
                    </VStack>
                </Box>
            </Center>
        </ScrollView>
    );
}
