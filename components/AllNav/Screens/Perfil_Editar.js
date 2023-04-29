import React from "react";
import { Center, Box, Avatar, Icon, Input, FormControl, Button, Stack, ScrollView, Heading } from "native-base"
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


export default function Perfil_Editar() {
    const navigation = useNavigation();

    return <ScrollView w="100%" h="100%">
        <Center w="100%" h="100%" bg={{
            linearGradient: {
                colors: ['primary.400', 'primary.800'],
                start: [1, 0],
                end: [0, 0]

            }
        }}>
            <Box background="primary.50" h='18%' w="100%" alignItems='center'>
                <Avatar size="xl" source={{
                    uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                }}
                    marginTop='10'
                    marginBottom='1'>


                </Avatar>
            </Box>




            <Box w="100%" h="82%" alignItems="center" >
                <Stack space={4} w="75%" maxW="350px" mx="auto" m="10">

                    <FormControl >

                        <FormControl.Label _text={{
                            color: 'primary.50',
                            fontWeight: 'bold'
                        }} marginLeft={2}>
                            Nombre
                        </FormControl.Label>
                        <Input p={2} placeholder="Name"
                            variant="underlined"
                            borderBottomColor='primary.100'
                            placeholderTextColor='primary.100'
                            InputLeftElement={<Icon as={<MaterialIcons name='person' />} size={5} ml="2" color='primary.200' />} />
                        <FormControl.HelperText>

                        </FormControl.HelperText>
                        <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>

                    </FormControl>

                    <FormControl >

                        <FormControl.Label _text={{
                            color: 'primary.50',
                            fontWeight: 'bold'
                        }} marginLeft={2} >
                            Apellido
                        </FormControl.Label>
                        <Input p={2} placeholder="Last Name"
                            variant="underlined"
                            borderBottomColor='primary.100'
                            placeholderTextColor='primary.100'
                            InputLeftElement={<Icon as={<MaterialIcons name='person' />} size={5} ml="2" color='primary.200' />} />
                        <FormControl.HelperText>

                        </FormControl.HelperText>
                        <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>

                    </FormControl>


                    <FormControl >

                        <FormControl.Label _text={{
                            color: 'primary.50',
                            fontWeight: 'bold'
                        }} marginLeft={2} >
                            Email
                        </FormControl.Label>
                        <Input p={2} placeholder="Email"
                            variant="underlined"
                            borderBottomColor='primary.100'
                            placeholderTextColor='primary.100'
                            InputLeftElement={<Icon as={<MaterialIcons name='email' />} size={5} ml="2" color='primary.200' />} />
                        <FormControl.HelperText>

                        </FormControl.HelperText>
                        <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>

                    </FormControl>

                    <FormControl >

                        <FormControl.Label _text={{
                            color: 'primary.50',
                            fontWeight: 'bold'
                        }} marginLeft={2} >
                            Contraseña
                        </FormControl.Label>
                        <Input p={2} placeholder="Password"
                            variant="underlined"
                            borderBottomColor='primary.100'
                            placeholderTextColor='primary.100'
                            InputLeftElement={<Icon as={<Ionicons name='lock-closed' />} size={5} ml="2" color='primary.200' />} />
                        <FormControl.HelperText>

                        </FormControl.HelperText>
                        <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>

                    </FormControl>

                    <FormControl >

                        <FormControl.Label _text={{
                            color: 'primary.50',
                            fontWeight: 'bold'
                        }} marginLeft={2} >
                            Teléfono
                        </FormControl.Label>
                        <Input p={2} placeholder="Phone"
                            variant="underlined"
                            borderBottomColor='primary.100'
                            placeholderTextColor='primary.100'
                            InputLeftElement={<Icon as={<MaterialIcons name='phone' />} size={5} ml="2" color='primary.200' />} />
                        <FormControl.HelperText>

                        </FormControl.HelperText>
                        <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>

                    </FormControl>

                    <FormControl >

                        <FormControl.Label _text={{
                            color: 'primary.50',
                            fontWeight: 'bold'
                        }} marginLeft={2} >
                            Edad
                        </FormControl.Label>
                        <Input type='number'
                            p={2} placeholder="Age"
                            variant="underlined"
                            borderBottomColor='primary.100'
                            placeholderTextColor='primary.100'
                            InputLeftElement={<Icon as={<MaterialIcons name='person' />} size={5} ml="2" color='primary.200' />} />
                        <FormControl.HelperText>

                        </FormControl.HelperText>
                        <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>

                    </FormControl>


                    <Button background="primary.300" mt="5" _text={{
                        color: "primary.900",
                        fontWeight: "400",
                        fontSize: "xl"
                    }} rounded='full' marginBottom='5'
                    onPress={() => navigation.navigate("Perfil")}>
                        Guardar
                    </Button>
                </Stack>
            </Box>

        </Center>
    </ScrollView>



}