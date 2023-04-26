import * as React from 'react'
import { Box, Center, Heading, VStack, FormControl, Input, Icon, ScrollView, Button, Circle, HStack} from 'native-base'
import { Ionicons, MaterialIcons, Entypo, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Address() {
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
                    color: "primary.50"
                }} >
                    Dirección
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
                            Dirección
                        </FormControl.Label>
                        <Input p={2} placeholder="Address" backgroundColor="primary.100"
                            variant="rounded"
                            InputLeftElement={<Icon as={<FontAwesome name='address-book-o' />} size={5} ml="2" color='primary.200' />} />
                        <FormControl.HelperText>

                        </FormControl.HelperText>
                        <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>

                    </FormControl>

                    <FormControl >

                        <FormControl.Label _text={{
                            color: 'primary.50',
                            fontWeight: 'bold'
                        }} marginLeft={2} >
                            Calle
                        </FormControl.Label>
                        <Input p={2} placeholder="Street" backgroundColor="primary.100"
                            variant="rounded"
                            InputLeftElement={<Icon as={<Entypo name='address' />} size={5} ml="2" color='primary.200' />} />
                        <FormControl.HelperText>

                        </FormControl.HelperText>
                        <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>

                    </FormControl>
                    <FormControl >

                        <FormControl.Label _text={{
                            color: 'primary.50',
                            fontWeight: 'bold'
                        }} marginLeft={2} >
                            Numero Exterior
                        </FormControl.Label>
                        <Input type='number'
                            p={2} placeholder="717" backgroundColor="primary.100"
                            variant="rounded"
                            InputLeftElement={<Icon as={<MaterialCommunityIcons name='home-group' />} size={5} ml="2" color='primary.200' />} />
                        <FormControl.HelperText>

                        </FormControl.HelperText>
                        <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>

                    </FormControl>
                    <FormControl >

                        <FormControl.Label _text={{
                            color: 'primary.50',
                            fontWeight: 'bold'
                        }} marginLeft={2} >
                            Numero Interior
                        </FormControl.Label>
                        <Input p={2} placeholder="5B" backgroundColor="primary.100"
                            variant="rounded"
                            InputLeftElement={<Icon as={<MaterialCommunityIcons name='home-import-outline' />} size={5} ml="2" color='primary.200' />} />
                        <FormControl.HelperText>

                        </FormControl.HelperText>
                        <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>

                    </FormControl>
                    <FormControl >

                        <FormControl.Label _text={{
                            color: 'primary.50',
                            fontWeight: 'bold'
                        }} marginLeft={2} >
                            Colonia
                        </FormControl.Label>
                        <Input p={2} placeholder="Col" backgroundColor="primary.100"
                            variant="rounded"
                            InputLeftElement={<Icon as={<MaterialCommunityIcons name='home-group' />} size={5} ml="2" color='primary.200' />} />
                        <FormControl.HelperText>

                        </FormControl.HelperText>
                        <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>

                    </FormControl>
                    <FormControl >

                        <FormControl.Label _text={{
                            color: 'primary.50',
                            fontWeight: 'bold'
                        }}marginLeft={2} >
                            Codigo Postal
                        </FormControl.Label>
                        <Input p={2} placeholder="Password" backgroundColor="primary.100"
                            variant="rounded"
                            InputLeftElement={<Icon as={<Ionicons name='lock-closed' />} size={5} ml="2" color='primary.200' />} />
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
                            InputLeftElement={<Icon as={<Ionicons name='lock-closed' />} size={5} ml="2" color='primary.200' />} />
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
                            InputLeftElement={<Icon as={<Ionicons name='lock-closed' />} size={5} ml="2" color='primary.200' />} />
                        <FormControl.HelperText>

                        </FormControl.HelperText>
                        <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>

                    </FormControl>
                    <HStack space={10} marginLeft='45'>
                    <Button marginTop={15} backgroundColor='primary.200' size='lg'>
                        Omitir
                    </Button>
                    <Button marginTop={15} backgroundColor='primary.200'>
                        Finalizar
                    </Button>
                    </HStack>

                </VStack>
                <HStack space={3} marginLeft='110' marginTop='5'>
                    <Circle size="10px" bg="primary.300"></Circle>
                    <Circle size="10px" bg="primary.300"></Circle>
                    <Circle size="10px" bg="primary.800"></Circle>

                </HStack>
            </Box>

        </Center>
    </ScrollView>
}