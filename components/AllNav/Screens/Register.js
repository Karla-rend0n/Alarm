import * as React from 'react'
import { Box, Center, Heading, VStack, FormControl, Input, Icon, ScrollView, Button, HStack, Text, Link, Circle} from 'native-base'
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function Register() {
    return <ScrollView w="100%" h="100%">
        <Center w="100%" h="100%" bg={{
            linearGradient: {
                colors: ['primary.400', 'primary.800'],
                start: [1, 0],
                end: [0, 0]

            }
        }}>

            <Box safeArea p="2" py="8" w="90%" maxW="290" >

                <Heading size="lg" fontWeight="600" color="Black" _dark={{
                    color: "primary.50",
                    fontWeight: 'bold'
                }} >
                    Registro
                </Heading>
                <Heading mt="1" color="primary.50" fontWeight='medium' size='xs'>
                    Completa los siguientes campos.
                </Heading>

                <VStack space={3} mt={5}>
                    <FormControl >

                        <FormControl.Label _text={{
                            color: 'primary.50',
                            fontWeight: 'bold'
                        }} marginLeft={2}>
                            Nombre
                        </FormControl.Label>
                        <Input p={2} placeholder="Name" backgroundColor="primary.100"
                            variant="rounded"
                            color="primary.900"
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
                        <Input p={2} placeholder="Last Name" backgroundColor="primary.100"
                            variant="rounded"
                            color="primary.900"
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
                            Edad
                        </FormControl.Label>
                        <Input type='number'
                            p={2} placeholder="Age" backgroundColor="primary.100"
                            variant="rounded"
                            color="primary.900"
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
                            Teléfono
                        </FormControl.Label>
                        <Input p={2} placeholder="Phone" backgroundColor="primary.100"
                            variant="rounded"
                            color="primary.900"
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
                            Email
                        </FormControl.Label>
                        <Input p={2} placeholder="Email" backgroundColor="primary.100"
                            variant="rounded"
                            color="primary.900"
                            InputLeftElement={<Icon as={<MaterialIcons name='email' />} size={5} ml="2" color='primary.200' />} />
                        <FormControl.HelperText>

                        </FormControl.HelperText>
                        <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>

                    </FormControl>
                    <FormControl >

                        <FormControl.Label _text={{
                            color: 'primary.50',
                            fontWeight: 'bold'
                        }}marginLeft={2} >
                            Contraseña
                        </FormControl.Label>
                        <Input p={2} placeholder="Password" backgroundColor="primary.100"
                            variant="rounded"
                            color="primary.900"
                            type='password'
                            InputLeftElement={<Icon as={<Ionicons name='lock-closed' />} size={5} ml="2" color='primary.200' />} />
                        <FormControl.HelperText>

                        </FormControl.HelperText>
                        <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>

                    </FormControl>
                    
                    <Button marginTop={15} backgroundColor='primary.200'>
                        Guardar
                    </Button>
                    
                    <HStack color="primary.50" marginLeft='5' fontWeight="normal">
                        <Text fontSize="sm" >
                            ¿Ya tienes una cuenta? {" "}
                        </Text>
                        <Link _text={{
                            color: "primary.50",
                            fontWeight: "bold",
                            fontSize: "sm"
                        }} href="#">
                            Inicia Sesión.
                        </Link>
                    </HStack>
                </VStack>
                <HStack space={3} marginLeft='110' marginTop='5'>
                    <Circle size="10px" bg="primary.800"></Circle>
                    <Circle size="10px" bg="primary.300"></Circle>
                    <Circle size="10px" bg="primary.300"></Circle>

                </HStack>
            </Box>

        </Center>
    </ScrollView>
}