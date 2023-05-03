import React from "react";
import { Center, Box, Avatar, Icon, Input, FormControl, Button, Stack, ScrollView, Heading, HStack, Container, Divider,Text, VStack } from "native-base"
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


export default function Profile() {
    const navigation = useNavigation();

    return <Center w='100%' h="100%" bg={{
                linearGradient: {
                    colors: ['primary.400', 'primary.800'],
                    start: [1, 0],
                    end: [0, 0]

                }
            }}>
           
           <Box background="primary.50" h='18%' w="100%" alignItems='center'>
            <HStack space={5}>
                <Avatar size="xl" source={{
                    uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                }}
                marginTop='10'>


                </Avatar>
                <Heading color='primary.900' marginTop='60'>
                    Fatima Herrera
                </Heading>
                </HStack>
            </Box>


            <Box w="100%" h="82%" alignItems="center" >
                <Stack space={5} w="75%" maxW="350px" mx="auto" m="10">
                    
                    <Button rounded='full' background="primary.300" mt="0.5" onPress={() => navigation.navigate("Edit_P")} _text={{
                        color: "primary.900",
                        fontWeight: 'normal',
                        fontSize: "md"
                    }}
                        marginLeft='2/3'>
                        Editar
                    </Button>
                    <VStack space={3}>
                        <Heading fontWeight='bold' fontSize='md'>
                            Tu correo
                        </Heading>
                        <Text fontWeight='normal' fontSize='md' mx={10}>
                        fatima13@gmail.com
                        </Text>
                        <Divider mx={1} background='primary.50'/>
                    </VStack>

                    <VStack space={3}>
                        <Heading fontWeight='bold' fontSize='md'>
                            Contraseña
                        </Heading>
                        <Text fontWeight='normal' fontSize='md' mx={10}>
                            **********
                        </Text>
                        <Divider mx={1} background='primary.50'/>
                    </VStack>
                    <VStack space={3}>
                        <Heading fontWeight='bold' fontSize='md'>
                            Teléfono
                        </Heading>
                        <Text fontWeight='normal' fontSize='md' mx={10}>
                        449-567-0098
                        </Text>
                        <Divider mx={1} background='primary.50'/>
                    </VStack>
                    <VStack space={3}>
                        <Heading fontWeight='bold' fontSize='md'>
                            Edad
                        </Heading>
                        <Text fontWeight='normal' fontSize='md' mx={10}>
                            25
                        </Text>
                        <Divider mx={1} background='primary.50'/>
                    </VStack>

                    


                    <Button background="primary.300" mt="5" onPress={() => navigation.navigate("Address")}_text={{
                        color: "primary.900",
                        fontWeight: "400",
                        fontSize: "xl"
                    }} rounded='full'>
                        Dirección
                    </Button>


                </Stack>
            </Box>

        </Center>
   


}


