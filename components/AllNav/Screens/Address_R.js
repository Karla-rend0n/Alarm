import * as React from 'react'
import { Box, Center, Heading, VStack, FormControl, Input, Icon, Select, ScrollView, Button, Circle, HStack, AlertDialog, Select } from 'native-base'
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
    const [jsonZipCode, setJsonZipCode] = React.useState({})


    const get_zip_code = async() =>{
        try{
            let url = 'https://api-alarm.cadsita.net/zip_code/' + formData.zip_code + '/get_zip_code/'
            console.log('url', url)
            const response = await fetch(url)
              setJsonZipCode( await response.json())
              console.log('json', jsonZipCode)
              return jsonZipCode
            } catch (error) {
              console.error(error);
            }
        }

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
            setErrorAddress({ ...errorAddress, Address: 'La dirección es requerida' })
            isValid = false
        } else {
            if (formData.Address.length <= 3) {
                setErrorAddress({
                    ...errorAddress,
                    Address: 'La dirección es muy corta'
                })
                console.log('valida')
            }
        }


        if (formData.Street === undefined) {
            setErrorStreet({ ...errorStreet, Street: 'La calle es requerida' })
            isValid = false
        } else {
            if (formData.Street.length <= 3) {
                setErrorStreet({
                    ...errorStreet,
                    Street: 'La calle es muy corta'
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
            setErrorNumE({ ...errorNumE, NumE: 'El número exterior es requerido' });
            isValid = false
        } else if (!number.test(formData.NumE)) {

            setErrorNumE({ ...errorNumE, NumE: 'Solo ingrese números' });
            isValid = false
        } else if (formData.NumE < 2) {
            setErrorNumE({ ...errorNumE, NumE: 'Tienen que ser más de 2 dígitos' });
            isValid = false
        }

        if (formData.NumI < 2) {
            setErrorNumI({ ...errorNumI, NumI: 'Tienen que ser más de 2 dígitos' });
            isValid = false
        }


        if (formData.cologne === undefined) {
            setErrorcologne({ ...errorcologne, cologne: 'La colonia es requerida' })
            isValid = false
        } 


        if (formData.CP === undefined) {
            setErrorCP({ ...errorCP, CP: 'El codigo postal es requerido' });
            isValid = false
        } else if (!number.test(formData.CP)) {

            setErrorCP({ ...errorCP, CP: 'Solo ingrese números' });
            isValid = false
        } else if (formData.CP < 4) {
            setErrorCP({ ...errorCP, CP: 'Tienen que ser 5 dígitos' });
            isValid = false
        }


        if (formData.state === undefined) {
            setErrorstate({ ...errorstate, state: 'El estado es requerido' })
            isValid = false
        } 

        if (formData.municipality === undefined) {
            setErrormunicipality({ ...errormunicipality, municipality: 'El municipio es requerido' })
            isValid = false
        } 
        return isValid
    };





    const submit = () => { validate() ? setIsOpen(!isOpen) : console.log('bad', formData) }

    const [isOpen, setIsOpen] = React.useState(false);

    const onClose = () => setIsOpen(false);

    const cancelRef = React.useRef(null);

    const handleCloseOpen = () => {
        setIsOpen(false);
        navigation.navigate("Login")
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
                        <Input p={2} placeholder="Ingrese su dirección" backgroundColor="primary.100"
                            variant="rounded"
                            color="primary.900"
                            fontWeight="bold"
                            onChangeText={value => setFormData({ ...formData, Address: value })}
                            InputLeftElement={<Icon as={<FontAwesome name='address-book-o' />} size={5} ml="2" color='primary.200' />} />
                        {'Address' in errorAddress ? <FormControl.ErrorMessage _text={{ color: 'primary.700' }}>{errorAddress.Address}</FormControl.ErrorMessage> : <FormControl.HelperText>
                            Ingrese su dirección: Calle, Número y colonia
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
                        <Input p={2} placeholder="Ingrese su calle" backgroundColor="primary.100"
                            variant="rounded"
                            color="primary.900"
                            fontWeight="bold"
                            onChangeText={value => setFormData({ ...formData, Street: value })}
                            InputLeftElement={<Icon as={<Entypo name='address' />} size={5} ml="2" color='primary.200' />} />
                        {'Street' in errorStreet ? <FormControl.ErrorMessage _text={{ color: 'primary.700' }}>{errorStreet.Street}</FormControl.ErrorMessage> : <FormControl.HelperText>
                            Ingrese su calle
                        </FormControl.HelperText>
                        }

                    </FormControl>
                    <FormControl isRequired isInvalid={'NumE' in errorNumE} >

                        <FormControl.Label _text={{
                            color: 'primary.50',
                            fontWeight: 'bold'
                        }} marginLeft={2} >
                            Número Exterior
                        </FormControl.Label>
                        <Input type='number'
                            p={2} placeholder="Ingrese el número exterior" backgroundColor="primary.100"
                            variant="rounded"
                            color="primary.900"
                            fontWeight="bold"
                            onChangeText={value => setFormData({ ...formData, NumE: value })}
                            InputLeftElement={<Icon as={<MaterialCommunityIcons name='home-group' />} size={5} ml="2" color='primary.200' />} />
                        {'NumE' in errorNumE ? <FormControl.ErrorMessage _text={{ color: 'primary.700' }}>{errorNumE.NumE}</FormControl.ErrorMessage> : <FormControl.HelperText>
                            Ingrese su número exterior
                        </FormControl.HelperText>
                        }

                    </FormControl>
                    <FormControl isInvalid={'NumI' in errorNumI} >

                        <FormControl.Label _text={{
                            color: 'primary.50',
                            fontWeight: 'bold'
                        }} marginLeft={2} >
                            Número Interior
                        </FormControl.Label>
                        <Input p={2} placeholder="Opcional" backgroundColor="primary.100"
                            variant="rounded"
                            color="primary.900"
                            fontWeight="bold"
                            onChangeText={value => setFormData({ ...formData, NumI: value })}
                            InputLeftElement={<Icon as={<MaterialCommunityIcons name='home-import-outline' />} size={5} ml="2" color='primary.200' />} />
                        {'NumI' in errorNumI ? <FormControl.ErrorMessage _text={{ color: 'primary.700' }}>{errorNumI.NumI}</FormControl.ErrorMessage> : <FormControl.HelperText>
                            Ingrese su número interior OPCIONAL
                        </FormControl.HelperText>
                        }

                    </FormControl>

                    <FormControl isRequired isInvalid={'CP' in errorCP} >

                        <FormControl.Label _text={{
                            color: 'primary.50',
                            fontWeight: 'bold'
                        }} marginLeft={2} >
                            Código Postal
                        </FormControl.Label>
                        <Input p={2} placeholder="Ingrese el Código postal" backgroundColor="primary.100"
                            variant="rounded"
                            color="primary.900"
                            fontWeight="bold"
                            onChangeText={value => setFormData({ ...formData, zip_code: value })}
                            InputLeftElement={<Icon as={<Entypo name='location' />} size={5} ml="2" color='primary.200' />} 
                            onBlur={get_zip_code} />
                        {'CP' in errorCP ? <FormControl.ErrorMessage _text={{ color: 'primary.700' }}>{errorCP.CP}</FormControl.ErrorMessage> : <FormControl.HelperText>
                            Ingrese el Código postal
                        </FormControl.HelperText>
                        }

                    </FormControl>
                    <FormControl isRequired isInvalid={'cologne' in errorcologne}>

                        <FormControl.Label _text={{
                            color: 'primary.50',
                            fontWeight: 'bold'
                        }} marginLeft={2} >
                            Colonia
                        </FormControl.Label>
                        <Select selectedValue={formData.cologne} minWidth="200" placeholder="Seleccione su colonia" backgroundColor="primary.100"
                        <Select selectedValue={formData.cologne} minWidth="200" placeholder="Seleccione su colonia" backgroundColor="primary.100"
                            color="primary.900"
                            fontWeight="bold" InputLeftElement={<Icon as={<MaterialCommunityIcons name='city-variant-outline' />} size={5} ml="2" color='primary.200' />}
                            onValueChange={itemValue => setFormData({ ...formData, cologne: itemValue })}>
                            { JSON.stringify(jsonZipCode) === '{}' ?
                                <Select.Item label="" value="" />
                                :
                                jsonZipCode.map((ngbh) =>
                                    <Select.Item label={ngbh.neighborhood} value={ngbh.neighborhood}/>
                                )
                            }
                        </Select>
                        
                        {'cologne' in errorcologne ? <FormControl.ErrorMessage _text={{ color: 'primary.700' }}>{errorcologne.cologne}</FormControl.ErrorMessage> : <FormControl.HelperText>
                            Ingrese su colonia
                        </FormControl.HelperText>
                        }


                    </FormControl>

                    <FormControl isRequired isInvalid={'state' in errorstate}>

                        <FormControl.Label _text={{
                            color: 'primary.50',
                            fontWeight: 'bold'
                        }} marginLeft={2} >
                            Estado
                        </FormControl.Label>
                        <Select selectedValue={formData.state} minWidth="200" placeholder="Seleccione su estado" backgroundColor="primary.100"
                            color="primary.900"
                            fontWeight="bold" InputLeftElement={<Icon as={<MaterialCommunityIcons name='city-variant-outline' />} size={5} ml="2" color='primary.200' />}
                            onValueChange={itemValue => setFormData({ ...formData, state: itemValue })}>
                            <Select.Item label="Aguascalientes" value="Ags" />
                            <Select.Item label="Zacatecas" value="Zac" />
                            <Select.Item label="Jalisco" value="Jalisco" />

                        </Select>
                        {'state' in errorstate ? <FormControl.ErrorMessage _text={{ color: 'primary.700' }}>{errorstate.state}</FormControl.ErrorMessage> : <FormControl.HelperText>
                            Ingrese su estado
                        </FormControl.HelperText>
                        }
                    </FormControl>


                    <FormControl isRequired isInvalid={'municipality' in errormunicipality}>

                        <FormControl.Label _text={{
                            color: 'primary.50',
                            fontWeight: 'bold'
                        }} marginLeft={2} >
                            Municipio
                        </FormControl.Label>
                        <Select selectedValue={formData.municipality} minWidth="200" placeholder="Seleccione su Municipio" backgroundColor="primary.100"
                            color="primary.900"
                            fontWeight="bold" InputLeftElement={<Icon as={<MaterialCommunityIcons name='city-variant-outline' />} size={5} ml="2" color='primary.200' />}
                            onValueChange={itemValue => setFormData({ ...formData, municipality: itemValue })}>
                            <Select.Item label="Aguascalientes" value="Aguascalientes" />
                            <Select.Item label="Asientos" value="Asientos" />
                            <Select.Item label="Calvillo" value="Calvillo" />
                            <Select.Item label="Cosío" value="Cosío" />
                            <Select.Item label="Jesús María" value="Jesús María" />
                            <Select.Item label="Pabellón de Arteaga" value="Pabellón de Arteaga" />
                            <Select.Item label="Rincón de Romos" value="Rincón de Romos" />
                            <Select.Item label="San José de Gracia" value="San José de Gracia" />
                            <Select.Item label="Tepezalá" value="Tepezalá" />
                            <Select.Item label="El Llano" value="El Llano" />
                            <Select.Item label="San Francisco de los Romo" value="San Francisco de los Romo" />
                        </Select>
                        {'municipality' in errormunicipality ? <FormControl.ErrorMessage _text={{ color: 'primary.700' }}>{errormunicipality.municipality}</FormControl.ErrorMessage> : <FormControl.HelperText>
                            Ingrese su municipio
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


                    <Button onPress={submit} marginTop={15} backgroundColor='primary.200' rounded={10} size='lg' borderWidth="2" borderColor="primary.200">
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