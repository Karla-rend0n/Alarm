import React from "react";
import { Center, Box, Heading, Avatar, HStack, Flex, Spacer, VStack, Input, FormControl, Button, Stack, Text } from "native-base"

export default function Perfil_Editar() {
    return <Center h="100%" >
        <VStack space={2} alignItems="center">
            <Heading mt="10" color="primary.500" fontWeight="normal" size="sm" _dark={{
            }}>
                Si vez algo sospechoso presiona el botón.
            </Heading>
        </VStack>


        <Box bg="primary.800" w="100%" h="82%" alignItems="center">
            <Stack space={4} w="75%" h="82%" maxW="350px" mx="auto" m="10">

                <FormControl>
                    <FormControl.Label _text={{
                        color: "primary.50",
                        fontWeight: '700',
                        fontSize: 'lg'
                    }}>Dirección</FormControl.Label>
                    <Input mt="3" placeholder="     Av. Adolfo" color="primary.200" fontSize="sm" fontWeight="400" backgroundColor="primary.100" borderWidth="2" borderColor="primary.200" variant="rounded" />
                </FormControl>

                <FormControl>
                    <FormControl.Label _text={{
                        color: "primary.50",
                        fontWeight: '700',
                        fontSize: 'lg'
                    }}>Calle</FormControl.Label>
                    <Input mt="3" placeholder="     Los pinos" color="primary.200" fontSize="sm" fontWeight="400" backgroundColor="primary.100" borderWidth="2" borderColor="primary.200" variant="rounded" />
                </FormControl>

                <FormControl>
                    <FormControl.Label _text={{
                        color: "primary.50",
                        fontWeight: '700',
                        fontSize: 'lg'
                    }}>Número exterior</FormControl.Label>
                    <Input mt="3" placeholder="     34" color="primary.200" fontSize="sm" fontWeight="400" backgroundColor="primary.100" borderWidth="2" borderColor="primary.200" variant="rounded" />
                </FormControl>

                <FormControl>
                    <FormControl.Label _text={{
                        color: "primary.50",
                        fontWeight: '700',
                        fontSize: 'lg'
                    }}>Número interior</FormControl.Label>
                    <Input mt="3" placeholder="     5" color="primary.200" fontSize="sm" fontWeight="400" backgroundColor="primary.100" borderWidth="2" borderColor="primary.200" variant="rounded" />
                </FormControl>

                <FormControl>
                    <FormControl.Label _text={{
                        color: "primary.50",
                        fontWeight: '700',
                        fontSize: 'lg'
                    }}>Colonia</FormControl.Label>
                    <Input mt="3" placeholder="     Industrial" color="primary.200" fontSize="sm" fontWeight="400" backgroundColor="primary.100" borderWidth="2" borderColor="primary.200" variant="rounded" />
                </FormControl>

                <FormControl>
                    <FormControl.Label _text={{
                        color: "primary.50",
                        fontWeight: '700',
                        fontSize: 'lg'
                    }}>Código Postal</FormControl.Label>
                    <Input mt="3" placeholder="     58794" color="primary.200" fontSize="sm" fontWeight="400" backgroundColor="primary.100" borderWidth="2" borderColor="primary.200" variant="rounded" />
                </FormControl>

                <FormControl>
                    <FormControl.Label _text={{
                        color: "primary.50",
                        fontWeight: '700',
                        fontSize: 'lg'
                    }}>Estado</FormControl.Label>
                    <Input mt="3" placeholder="     Aguascalientes" color="primary.200" fontSize="sm" fontWeight="400" backgroundColor="primary.100" borderWidth="2" borderColor="primary.200" variant="rounded" />
                </FormControl>

                <FormControl>
                    <FormControl.Label _text={{
                        color: "primary.50",
                        fontWeight: '700',
                        fontSize: 'lg'
                    }}>Municipio </FormControl.Label>
                    <Input mt="3" placeholder="     Aguascalientes" color="primary.200" fontSize="sm" fontWeight="400" backgroundColor="primary.100" borderWidth="2" borderColor="primary.200" variant="rounded" />
                </FormControl>

                <Button background="primary.300" w="101" h="35" alignSelf="center" mt="5" rounded={25} _text={{
                    color: "primary.900",
                    fontWeight: "400",
                    fontSize: "xl"
                }}>
                    Guardar
                </Button>


            </Stack>
        </Box>

    </Center>
}