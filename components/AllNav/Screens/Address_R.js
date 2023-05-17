import * as React from 'react'
import { Box, Center, Heading, VStack, FormControl, Input, Icon, ScrollView, Button, Circle, HStack, AlertDialog } from 'native-base'
import { Ionicons, MaterialIcons, Entypo, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function Address_R() {

    const navigation = useNavigation();
    const [formData, setFormData] = React.useState({})
    const [errorAddress, setErrorAddress] = React.useState({})
    const [errorStreet, setErrorStreet] = React.useState({})
    const [errorNumE, setErrorNumE] = React.useState({})
    const [errorNumI, setErrorNumI] = React.useState({})
    const [errorcologne, setErrorcologne] = React.useState({})
    const [errorCP, setErrorCP] = React.useState({})
    const [errorstate, setErrorstate] = React.useState({})
    const [errormunicipality, setErrormunicipality] = React.useState({})

    var namVal = /^[A-Za-z]+$/i;
    var number = /^[0-9]+$/i




    const validate = () => {
        let isValid = true;
        setErrorAddress({})
        setErrorStreet({})
        setErrorNumE({})
        setErrorNumI({})
        setErrorcologne({})
        setErrorCP({})
        setErrorstate({})
        setErrormunicipality({})


        if (formData.Address === undefined) {
            setErrorAddress({ ...errorAddress, Address: 'Address is required' })
            isValid = false
        } else {
            if (formData.Address.length <= 3) {
                setErrorAddress({
                    ...errorAddress,
                    Address: 'Address is too short'
                })
                console.log('valida')
            } else {
                if (!namVal.test(formData.Address)) {
                    setErrorLastname({
                        ...errorAddress,
                        Address: 'Ingrese letras'
                    })
                }
            }

        }


        if (formData.Street === undefined) {
            setErrorStreet({ ...errorStreet, Street: 'Street is required' })
            isValid = false
        } else {
            if (formData.Street.length <= 3) {
                setErrorStreet({
                    ...errorStreet,
                    Street: 'Street is too short'
                })
                console.log('valida')
            } else {
                if (!namVal.test(formData.Street)) {
                    setErrorStreet({
                        ...errorStreet,
                        Street: 'Ingrese letras'
                    })
                }
            }

        }

        if (formData.NumE === undefined) {
            setErrorNumE({ ...errorNumE, NumE: 'NumE is required' });
            isValid = false
        } else if (!number.test(formData.NumE)) {

            setErrorNumE({ ...errorNumE, NumE: 'Solo ingrese números' });
            isValid = false
        } else if (formData.NumE < 2) {
            setErrorNumE({ ...errorNumE, NumE: 'Tienen que ser 5 dígitos' });
            isValid = false
        }

        if (formData.NumI === undefined) {
            setErrorNumI({ ...errorNumI, NumI: 'NumI is required' });
            isValid = false
        } else if (!number.test(formData.NumI)) {

            setErrorNumI({ ...errorNumI, NumI: 'Solo ingrese números' });
            isValid = false
        } else if (formData.NumI < 2) {
            setErrorNumI({ ...errorNumI, NumI: 'Tienen que ser 5 dígitos' });
            isValid = false
        }


        if (formData.cologne === undefined) {
            setErrorcologne({ ...errorcologne, cologne: 'cologne is required' })
            isValid = false
        } else {
            if (formData.cologne.length <= 3) {
                setErrorcologne({
                    ...errorcologne,
                    cologne: 'cologne is too short'
                })
                console.log('valida')
            } else {
                if (!namVal.test(formData.cologne)) {
                    setErrorcologne({
                        ...errorcologne,
                        lastName: 'Ingrese letras'
                    })
                }
            }

        }


        if (formData.CP === undefined) {
            setErrorCP({ ...errorCP, CP: 'CP is required' });
            isValid = false
        } else if (!number.test(formData.CP)) {

            setErrorCP({ ...errorCP, CP: 'Solo ingrese números' });
            isValid = false
        } else if (formData.CP < 2) {
            setErrorCP({ ...errorCP, CP: 'Tienen que ser 5 dígitos' });
            isValid = false
        }


        if (formData.state === undefined) {
            setErrorstate({ ...errorstate, state: 'state is required' })
            isValid = false
        } else {
            if (formData.state.length <= 3) {
                setErrorstate({
                    ...errorstate,
                    state: 'state is too short'
                })
                console.log('valida')
            } else {
                if (!namVal.test(formData.state)) {
                    setErrorstate({
                        ...errorstate,
                        state: 'Ingrese letras'
                    })
                }
            }

        }

        if (formData.municipality === undefined) {
            setErrormunicipality({ ...errormunicipality, municipality: 'municipality is required' })
            isValid = false
        } else {
            if (formData.municipality.length <= 3) {
                setErrormunicipality({
                    ...errormunicipality,
                    municipality: 'municipality is too short'
                })
                console.log('valida')
            } else {
                if (!namVal.test(formData.municipality)) {
                    setErrormunicipality({
                        ...errormunicipality,
                        municipality: 'Ingrese letras'
                    })
                }
            }

        }
        return isValid
    };





    const submit = () => { validate() ? console.log('good', formData) : console.log('bad', formData) }

    const [isOpen, setIsOpen] = React.useState(false);

    const onClose = () => setIsOpen(false);

    const cancelRef = React.useRef(null);

    const handleCloseOpen = () => {
        setIsOpen(false);
        navigation.navigate("Login");
    }


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
                    <FormControl isRequired isInvalid={'Address' in errorAddress} >

                        <FormControl.Label _text={{
                            color: 'primary.50',
                            fontWeight: 'bold'
                        }} marginLeft={2}>
                            Dirección
                        </FormControl.Label>
                        <Input p={2} placeholder="Álvaro Obregón, Colonia Aguascalientes Centro, C.P. 20078" backgroundColor="primary.100"
                            variant="rounded"
                            color="primary.900"
                            fontWeight="bold"
                            onChangeText={value => setFormData({ ...formData, Address: value })}
                            InputLeftElement={<Icon as={<FontAwesome name='address-book-o' />} size={5} ml="2" color='primary.200' />} />
                        {'Address' in errorAddress ? <FormControl.ErrorMessage _text={{ color: 'primary.700' }}>{errorAddress.Address}</FormControl.ErrorMessage> : <FormControl.HelperText>

                        </FormControl.HelperText>
                        }
                    </FormControl>

                    <FormControl isRequired isInvalid={'Street' in errorStreet} >

                        <FormControl.Label _text={{
                            color: 'primary.50',
                            fontWeight: 'bold'
                        }} marginLeft={2} >
                            Calle
                        </FormControl.Label>
                        <Input p={2} placeholder="Rayón" backgroundColor="primary.100"
                            variant="rounded"
                            color="primary.900"
                            fontWeight="bold"
                            onChangeText={value => setFormData({ ...formData, Street: value })}
                            InputLeftElement={<Icon as={<Entypo name='address' />} size={5} ml="2" color='primary.200' />} />
                        {'Street' in errorStreet ? <FormControl.ErrorMessage _text={{ color: 'primary.700' }}>{errorStreet.Street}</FormControl.ErrorMessage> : <FormControl.HelperText>

                        </FormControl.HelperText>
                        }

                    </FormControl>
                    <FormControl isRequired isInvalid={'NumE' in errorNumE} >

                        <FormControl.Label _text={{
                            color: 'primary.50',
                            fontWeight: 'bold'
                        }} marginLeft={2} >
                            Numero Exterior
                        </FormControl.Label>
                        <Input type='number'
                            p={2} placeholder="717" backgroundColor="primary.100"
                            variant="rounded"
                            color="primary.900"
                            fontWeight="bold"
                            onChangeText={value => setFormData({ ...formData, NumE: value })}
                            InputLeftElement={<Icon as={<MaterialCommunityIcons name='home-group' />} size={5} ml="2" color='primary.200' />} />
                        {'NumE' in errorNumE ? <FormControl.ErrorMessage _text={{ color: 'primary.700' }}>{errorNumE.NumE}</FormControl.ErrorMessage> : <FormControl.HelperText>

                        </FormControl.HelperText>
                        }

                    </FormControl>
                    <FormControl isRequired isInvalid={'NumI' in errorNumI} >

                        <FormControl.Label _text={{
                            color: 'primary.50',
                            fontWeight: 'bold'
                        }} marginLeft={2} >
                            Numero Interior
                        </FormControl.Label>
                        <Input p={2} placeholder="58" backgroundColor="primary.100"
                            variant="rounded"
                            color="primary.900"
                            fontWeight="bold"
                            onChangeText={value => setFormData({ ...formData, NumI: value })}
                            InputLeftElement={<Icon as={<MaterialCommunityIcons name='home-import-outline' />} size={5} ml="2" color='primary.200' />} />
                        {'NumI' in errorNumI ? <FormControl.ErrorMessage _text={{ color: 'primary.700' }}>{errorNumI.NumI}</FormControl.ErrorMessage> : <FormControl.HelperText>

                        </FormControl.HelperText>
                        }

                    </FormControl>
                    <FormControl isRequired isInvalid={'cologne' in errorcologne} >

                        <FormControl.Label _text={{
                            color: 'primary.50',
                            fontWeight: 'bold'
                        }} marginLeft={2} >
                            Colonia
                        </FormControl.Label>
                        <Input p={2} placeholder="Las Flores" backgroundColor="primary.100"
                            variant="rounded"
                            color="primary.900"
                            fontWeight="bold"
                            onChangeText={value => setFormData({ ...formData, cologne: value })}
                            InputLeftElement={<Icon as={<MaterialCommunityIcons name='home-group' />} size={5} ml="2" color='primary.200' />} />
                        {'cologne' in errorcologne ? <FormControl.ErrorMessage _text={{ color: 'primary.700' }}>{errorcologne.cologne}</FormControl.ErrorMessage> : <FormControl.HelperText>

                        </FormControl.HelperText>
                        }

                    </FormControl>
                    <FormControl isRequired isInvalid={'CP' in errorCP} >

                        <FormControl.Label _text={{
                            color: 'primary.50',
                            fontWeight: 'bold'
                        }} marginLeft={2} >
                            Codigo Postal
                        </FormControl.Label>
                        <Input p={2} placeholder="30804" backgroundColor="primary.100"
                            variant="rounded"
                            color="primary.900"
                            fontWeight="bold"
                            onChangeText={value => setFormData({ ...formData, CP: value })}
                            InputLeftElement={<Icon as={<Entypo name='location' />} size={5} ml="2" color='primary.200' />} />
                        {'CP' in errorCP ? <FormControl.ErrorMessage _text={{ color: 'primary.700' }}>{errorCP.CP}</FormControl.ErrorMessage> : <FormControl.HelperText>

                        </FormControl.HelperText>
                        }

                    </FormControl>
                    <FormControl isRequired isInvalid={'state' in errorstate} >

                        <FormControl.Label _text={{
                            color: 'primary.50',
                            fontWeight: 'bold'
                        }} marginLeft={2} >
                            Estado
                        </FormControl.Label>
                        <Input p={2} placeholder="Aguascalientes" backgroundColor="primary.100"
                            variant="rounded"
                            color="primary.900"
                            fontWeight="bold"
                            onChangeText={value => setFormData({ ...formData, state: value })}
                            InputLeftElement={<Icon as={<MaterialCommunityIcons name='city-variant-outline' />} size={5} ml="2" color='primary.200' />} />
                        {'state' in errorstate ? <FormControl.ErrorMessage _text={{ color: 'primary.700' }}>{errorstate.state}</FormControl.ErrorMessage> : <FormControl.HelperText>

                        </FormControl.HelperText>
                        }

                    </FormControl>
                    <FormControl isRequired isInvalid={'municipality' in errormunicipality} >

                        <FormControl.Label _text={{
                            color: 'primary.50',
                            fontWeight: 'bold'
                        }} marginLeft={2} >
                            Municipio
                        </FormControl.Label>
                        <Input p={2} placeholder="Aguascalientes" backgroundColor="primary.100"
                            variant="rounded"
                            color="primary.900"
                            fontWeight="bold"
                            onChangeText={value => setFormData({ ...formData, municipality: value })}
                            InputLeftElement={<Icon as={<MaterialCommunityIcons name='city-variant-outline' />} size={5} ml="2" color='primary.200' />} />
                        {'municipality' in errormunicipality ? <FormControl.ErrorMessage _text={{ color: 'primary.700' }}>{errormunicipality.municipality}</FormControl.ErrorMessage> : <FormControl.HelperText>

                        </FormControl.HelperText>
                        }

                    </FormControl>
                    {/* <HStack space={10} marginLeft='45'> */}

                    {/* <Button marginTop={15} backgroundColor='primary.200' size='lg' borderWidth="2" borderColor="primary.200"
                            // onPress={() => { navigation.navigate("Home") }}>
                            onPress={submit}>

                            Omitir
                        </Button> */}


                    {/* </HStack> */}


                    <Button onPress={() => setIsOpen(!isOpen)} marginTop={15} backgroundColor='primary.200' rounded={10} size='lg' borderWidth="2" borderColor="primary.200">
                        {/* // onPress={() => {navigation.navigate("Home")}} >
                        // onPress={submit}> */}

                        Finalizar
                    </Button>


                    <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
                        <AlertDialog.Content>
                            <AlertDialog.CloseButton />
                            <AlertDialog.Header>Felicidades</AlertDialog.Header>
                            <AlertDialog.Body>
                                Tus datos se registraron correctamente, da clic en el botón para iniciar sesión.
                            </AlertDialog.Body>
                            <AlertDialog.Footer>
                                <Button.Group space={2}>
                                    <Button colorScheme="danger" onPress={handleCloseOpen}>
                                        Iniciar Sesión
                                    </Button>
                                </Button.Group>
                            </AlertDialog.Footer>
                        </AlertDialog.Content>
                    </AlertDialog>

                </VStack>
                <HStack space={3} marginLeft='110' marginTop='5'>
                    <Circle size="10px" bg="primary.200"></Circle>
                    <Circle size="10px" bg="primary.200"></Circle>
                    <Circle size="10px" bg="primary.50"></Circle>

                </HStack>
            </Box>

        </Center>
    </ScrollView>
}