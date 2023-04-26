import React from "react";
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, Icon, ScrollView, Pressable } from 'native-base'
import { MaterialIcons, Ionicons } from "@expo/vector-icons";


export default function Login() {
    return <Center w="100%" h="100%" bg={{
            linearGradient: {
                colors: ['primary.400', 'primary.800'],
                start: [1, 0],
                end: [0, 0]

            }
        }}>
            <Box safeArea p="2" py="8" w="90%" maxW="290">
                <Heading size="lg" color="Black" _dark={{
                    color: "primary.50",
                    fontWeight: 'bold'
                }} >
                    Inicio de sesión
                </Heading>
                <Heading mt="1" color="primary.50" fontWeight='medium' size='xs'>
                    Inicia sesión con tu cuenta.
                </Heading>

                <VStack space={3} mt={5}>
                    <FormControl>
                        <FormControl.Label _text={{
                            color: "primary.50",
                            fontWeight: '700',
                            fontSize: 'lg'
                        }}>Email</FormControl.Label>
                        <Input w={{

                        }} InputLeftElement={<Icon as={<MaterialIcons name="email" />} size={5} ml="3" color="primary.200" />}
                            mt="3" placeholder="hello@gmail.com" color="primary.200" fontSize="sm" fontWeight="400" backgroundColor="primary.100" borderWidth="2" borderColor="primary.200" variant="rounded" />
                    </FormControl>

                    <FormControl>
                        <FormControl.Label _text={{
                            color: "primary.50",
                            fontWeight: '700',
                            fontSize: 'lg'
                        }}>Contraseña</FormControl.Label>
                        <Input mt="3" placeholder=" Introduce una contraseña" color="primary.200" type="password"
                            fontSize="sm" fontWeight="400" backgroundColor="primary.100" borderWidth="2"
                            borderColor="primary.200" variant="rounded"
                            InputLeftElement={<Icon as={<Ionicons name='lock-closed' />} size={5} ml="2" color='primary.200' />} />

                        <Link _text={{
                            fontSize: "sm",
                            fontWeight: "700",
                            color: "primary.50",
                        }} mt="2" alignSelf="flex-end"> Forget Password?
                        </Link>
                    </FormControl>


                    <Button background="primary.200" borderWidth="2" borderColor="primary.200" mt="5" rounded={10} _text={{
                        color: "primary.50",
                        fontWeight: "700",
                        fontSize: "lg"
                    }}>
                        Inciar sesión
                    </Button>

                    <HStack color="primary.50" alignItems='center' fontWeight="normal">
                        <Text fontSize="sm" >
                            ¿No dispones de una cuenta? {" "}
                        </Text>
                        <Link _text={{
                            color: "primary.50",
                            fontWeight: "bold",
                            fontSize: "sm"
                        }} href="#">
                            Registrate.
                        </Link>
                    </HStack>
                </VStack>
            </Box>
        </Center>
    
}


