import * as React from 'react'
import { Box, Center, Heading, ScrollView, VStack, FormControl, Input, Icon, HStack, Button, Circle } from 'native-base'
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function AddContact() {
    const navigation = useNavigation();

    return  <Center w="100%" h="100%" bg={{
        linearGradient: {
            colors: ['primary.400', 'primary.800'],
            start: [1, 0],
            end: [0, 0]

        }
    }}>

<Box safeArea p="2" py="8" w="90%" maxW="290">
                <Heading size="lg" fontWeight="600" color="Black" _dark={{
                    color: "primary.50",
                    fontWeight: 'bold'
                }}>
                    Añadir Contactos
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
                            Parentesco
                        </FormControl.Label>
                        <Input p={2} placeholder="Parentesco" backgroundColor="primary.100"
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
                        <Button size='lg' bg='primary.200' onPress={() => {navigation.navigate("Contact")}}>Guardar</Button>

                </VStack>
            </Box>


    </Center>
   

}