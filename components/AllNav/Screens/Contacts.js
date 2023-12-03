import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { Box, Button, Center, HStack, Heading, Icon, Image, Pressable, ScrollView, Text, VStack } from 'native-base';
import React, { useEffect, useState } from 'react';
import { Dimensions } from "react-native";
import { useUser } from "../../store/user";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function ComponenteContact({ isHovered, isPressed, informacion }) {
    return (
        <Box
            bg={isPressed ? "primary.100" : isHovered ? "primary.100" : "primary.300"}
            style={{ transform: [{ scale: isPressed ? 0.96 : 1 }] }}
            p={windowWidth * 0.05}
            rounded="8"
            shadow={3}
            borderWidth="3"
            borderColor="primary.200"
            mb={windowHeight * 0.05} // Espacio entre cajas de contacto
        >
            <HStack alignItems="center">
                <Image
                    width={windowWidth * 0.12}
                    height={windowWidth * 0.12}
                    mt={windowHeight * 0.05}
                    mb={windowHeight * 0.05}
                    ml={windowWidth * 0.05}
                    mr={windowWidth * 0.05}
                    source={require('../../../assets/IconoPerfil.png')}
                />

                <Text color='primary.900' mt={windowHeight * 0.01} fontWeight='bold'>
                    {informacion.name} {informacion.last_name}
                </Text>
            </HStack>
        </Box>
    )
}

export default function Contacts(refresh = false) {
    const navigation = useNavigation();
    const [contacts, setContacts] = useState([]);
    const { user } = useUser(state => state)
    const info = user[0];

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    useEffect(() => {
        fetch(`https://api-alarm.cadsita.net/contact/?user=${info.id}`, requestOptions)
            .then(response => response.json())
            .then((result) => setContacts(result))
            .catch(error => console.log('error', error))
    }, [refresh]);

    return (
        <ScrollView flex={1} contentContainerStyle={{ flexGrow: 1 }}>
            <Center flex={1} bg={{
                linearGradient: {
                    colors: ['primary.400', 'primary.800'],
                    start: [1, 0],
                    end: [0, 0]
                }
            }}>
                <Box safeArea p="2" py="8" width="100%" maxWidth="350px">
                    <Heading size="xl" fontWeight="600" color="Black" _dark={{
                        color: "primary.50",
                        fontWeight: 'bold'
                    }} mt={windowHeight * 0.05}>
                        Contactos
                    </Heading>

                    <VStack space={windowHeight * 0.05} mt={windowHeight * 0.05}>
                        <Button
                            alignSelf="flex-end"
                            marginLeft="auto"
                            mt={windowHeight * 0.03}
                            width={windowWidth * 0.14}
                            height={windowWidth * 0.14}
                            bgColor="primary.200"
                            borderWidth="3"
                            borderColor="primary.200"
                            rounded="full"
                            leftIcon={<Icon as={AntDesign} name="plus" />}
                            onPress={() => { navigation.navigate("Añadir Contacto") }}
                        />

                        <Box rounded="xl" width="100%">
                            {contacts.map((contact, index) => (
                                <Pressable
                                    key={index}
                                    onPress={() => {
                                        navigation.navigate('ViewD', { contact });
                                    }}
                                >
                                    {({ isHovered, isPressed }) => (
                                        <ComponenteContact
                                            key={index}
                                            isHovered={isHovered}
                                            isPressed={isPressed}
                                            informacion={contact}
                                        />
                                    )}
                                </Pressable>
                            ))}
                        </Box>
                    </VStack>
                </Box>
            </Center>
        </ScrollView>
    );
}
