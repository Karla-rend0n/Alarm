import * as React from 'react'
import { Box, Center, Heading, VStack, FormControl, Input, Icon, ScrollView, Button, Circle, HStack, AlertDialog, Select } from 'native-base'
import { Ionicons, MaterialIcons, Entypo, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function Address_R({route}) {

    const navigation = useNavigation();
    const [formData, setFormData] = React.useState({})
    const [errorCity, setErrorCity] = React.useState({})
    const [errorStreet, setErrorStreet] = React.useState({})
    const [errorNumE, setErrorNumE] = React.useState({})
    const [errorNumI, setErrorNumI] = React.useState({})
    const [errorcologne, setErrorcologne] = React.useState({})
    const [errorCP, setErrorCP] = React.useState({})
    const [errorstate, setErrorstate] = React.useState({})
    const [errormunicipality, setErrormunicipality] = React.useState({})
    const [jsonZipCode, setJsonZipCode] = React.useState({})
    const {data_contact, data_register} = route.params

    const get_zip_code = async () => {
        try {
            let url = 'https://api-alarm.cadsita.net/zip_code/' + formData.zip_code + '/get_zip_code/'
            console.log('url', url)
            const response = await fetch(url)
            setJsonZipCode(await response.json())
            console.log('json', jsonZipCode)
            return jsonZipCode
        } catch (error) {
            console.error(error);
        }
    }


    const handlerSave = async () => {
        setIsOpen(!isOpen)
        console.log('data_contact', data_contact)
        console.log('data_register',data_register)
        console.log('formData',formData)
        json_result ={
            ...data_register,
            "profile_address": [formData],
            "profile_contact":[data_contact]
        }
        console.log('json_result',json_result)
        
        try{
            fetch('https://api-alarm.cadsita.net/profile/', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(json_result),
                });

        } catch (error) {
            console.error(error);
        }
    }

    var namVal = /^[A-Za-z]+$/i;
    var number = /^[0-9]+$/i



    const validate = () => {
        let isValid = true;
        setErrorCity({})
        setErrorStreet({})
        setErrorNumE({})
        setErrorNumI({})
        setErrorcologne({})
        setErrorCP({})
        setErrorstate({})
        setErrormunicipality({})


        if (formData.city === undefined) {
            setErrorCity({ ...errorCity, City: 'La ciudad es requerida' })
            isValid = false
        } else {
            if (formData.city.length <= 3) {
                setErrorCity({
                    ...errorCity,
                    City: 'El nombrede la ciudad es muy corta'
                })
                console.log('valida')
            }
        }


        if (formData.street === undefined) {
            setErrorStreet({ ...errorStreet, street: 'La calle es requerida' })
            isValid = false
        } else {
            if (formData.street.length <= 3) {
                setErrorStreet({
                    ...errorStreet,
                    street: 'La calle es muy corta'
                })
                console.log('valida')
            } else {
                if (!namVal.test(formData.street)) {
                    setErrorStreet({
                        ...errorStreet,
                        street: 'Ingrese letras'
                    })
                }
            }

        }

        if (formData.building_number === undefined) {
            setErrorNumE({ ...errorNumE, building_number: 'El número exterior es requerido' });
            isValid = false
        } else if (!number.test(formData.building_number)) {

            setErrorNumE({ ...errorNumE, building_number: 'Solo ingrese números' });
            isValid = false
        } else if (formData.building_number < 2) {
            setErrorNumE({ ...errorNumE, building_number: 'Tienen que ser más de 2 dígitos' });
            isValid = false
        }

        if (formData.apartment_number < 2) {
            setErrorNumI({ ...errorNumI, apartment_number: 'Tienen que ser más de 2 dígitos' });
            isValid = false
        }


        if (formData.neighborhood === undefined) {
            setErrorcologne({ ...errorcologne, neighborhood: 'La colonia es requerida' })
            isValid = false
        }

        if (formData.zip_code === undefined) {
            setErrorCP({ ...errorCP, CP: 'El codigo postal es requerido' });
            isValid = false
        } else if (!number.test(formData.zip_code)) {

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



    const submit = () => { validate() ?  handlerSave() : console.log('bad', formData) }

    const [isOpen, setIsOpen] = React.useState(false);

    const onClose = () => setIsOpen(false);

    const cancelRef = React.useRef(null);

    const handleCloseOpen = () => {
        setIsOpen(false);
        navigation.navigate("Login")
    }


    return <ScrollView w="100%" h="100%">
        <Center w="100%" h="112%" bg={{
            linearGradient: {
                colors: ['primary.400', 'primary.800'],
                start: [1, 0],
                end: [0, 0]

            }
        }}>

            <Box safeArea p="2" py="8" w="100%" h="92%" maxW="350px"  >

                <Heading size="xl" fontWeight="600" color="Black" _dark={{
                    color: "primary.50"
                }} >
                    Dirección
                </Heading>
                <Heading mt="1" color="primary.50" fontWeight='medium' size='xs'>
                    Completa los siguientes campos.
                </Heading>

                <VStack space={6} mt={8}>
                    
                    <FormControl isRequired isInvalid={'street' in errorStreet}>

                        <FormControl.Label _text={{
                            color: 'primary.50',
                            fontWeight: 'bold',
                            fontSize: 'lg'

                        }}>Calle
                        </FormControl.Label>

                        <Input w={{

                        }} InputLeftElement={<Icon as={<Entypo name='address' />} size={5} ml="2" color='primary.200' />}
                            onChangeText={value => setFormData({ ...formData, street: value })}
                            mt="3" placeholder="Ingrese su calle" color="primary.900"
                            fontSize="sm" fontWeight="bold" backgroundColor="primary.100" variant="rounded" />

                        {'street' in errorStreet ? <FormControl.ErrorMessage _text={{ color: 'primary.700' }}>{errorStreet.street}</FormControl.ErrorMessage> : <FormControl.HelperText>
                            Ingrese su calle
                        </FormControl.HelperText>
                        }
                    </FormControl>



                    <FormControl isRequired isInvalid={'building_number' in errorNumE}>

                        <FormControl.Label _text={{
                            color: 'primary.50',
                            fontWeight: 'bold',
                            fontSize: 'lg'

                        }}>
                            Numero Exterior
                        </FormControl.Label>

                        <Input w={{

                        }} InputLeftElement={<Icon as={<MaterialCommunityIcons name='home-group' />} size={5} ml="2" color='primary.200' />}
                            onChangeText={value => setFormData({ ...formData, building_number: value })}
                            mt="3" placeholder="Ingrese el número exterior" color="primary.900"
                            fontSize="sm" fontWeight="bold" backgroundColor="primary.100" variant="rounded" />

                        {'building_number' in errorNumE ? <FormControl.ErrorMessage _text={{ color: 'primary.700' }}>{errorNumE.building_number}</FormControl.ErrorMessage> : <FormControl.HelperText>
                            Ingrese su número exterior
                        </FormControl.HelperText>
                        }
                    </FormControl>




                    <FormControl isInvalid={'apartment_number' in errorNumI}>

                        <FormControl.Label _text={{
                            color: 'primary.50',
                            fontWeight: 'bold',
                            fontSize: 'lg'

                        }}>
                            Numero Interior
                        </FormControl.Label>
                        <Input w={{

                        }} InputLeftElement={<Icon as={<MaterialCommunityIcons name='home-import-outline' />} size={5} ml="2" color='primary.200' />}
                            onChangeText={value => setFormData({ ...formData, apartment_number: value })}
                            mt="3" placeholder="Opcional" color="primary.900"
                            fontSize="sm" fontWeight="bold" backgroundColor="primary.100" variant="rounded" />

                        {'apartment_number' in errorNumI ? <FormControl.ErrorMessage _text={{ color: 'primary.700' }}>{errorNumI.apartment_number}</FormControl.ErrorMessage> : <FormControl.HelperText>
                            Ingrese su número interior OPCIONAL
                        </FormControl.HelperText>
                        }
                    </FormControl>



                    <FormControl isRequired isInvalid={'zip_code' in errorCP}>

                        <FormControl.Label _text={{
                            color: 'primary.50',
                            fontWeight: 'bold',
                            fontSize: 'lg'
                        }}>
                            Codigo Postal
                        </FormControl.Label>

                        <Input w={{

                        }} InputLeftElement={<Icon as={<Entypo name='location' />} size={5} ml="2" color='primary.200' />}
                            onChangeText={value => setFormData({ ...formData, zip_code: value })}
                            mt="3" placeholder="Ingrese el Código postal" color="primary.900"
                            fontSize="sm" fontWeight="bold" backgroundColor="primary.100" variant="rounded"
                            onBlur={get_zip_code} />
                        {'CP' in errorCP ? <FormControl.ErrorMessage _text={{ color: 'primary.700' }}>{errorCP.CP}</FormControl.ErrorMessage> : <FormControl.HelperText>
                            Ingrese el Código postal
                        </FormControl.HelperText>
                        }
                    </FormControl>



                    <FormControl isRequired isInvalid={'neighborhood' in errorcologne}>

                        <FormControl.Label _text={{
                            color: 'primary.50',
                            fontWeight: 'bold',
                            fontSize: 'lg'

                        }}>
                            Colonia
                        </FormControl.Label>
                        <Select selectedValue={formData.neighborhood} minWidth="200" placeholder="Seleccione su colonia" backgroundColor="primary.100"
                            color="primary.900"
                            fontWeight="bold" InputLeftElement={<Icon as={<MaterialCommunityIcons name='city-variant-outline' />} size={5} ml="2" mt="3" color='primary.200' />}
                            onValueChange={itemValue => setFormData({ ...formData, neighborhood: itemValue })}>

                            {JSON.stringify(jsonZipCode) === '{}' ?
                                <Select.Item label="" value="" />
                                :
                                jsonZipCode.map((ngbh) =>
                                    <Select.Item label={ngbh.neighborhood} value={ngbh.neighborhood} />
                                )
                            }
                        </Select>
                        {'neighborhood' in errorcologne ? <FormControl.ErrorMessage _text={{ color: 'primary.700' }}>{errorcologne.neighborhood}</FormControl.ErrorMessage> : <FormControl.HelperText>
                            Ingrese su colonia
                        </FormControl.HelperText>
                        }
                    </FormControl>

                    <FormControl isRequired isInvalid={'city' in errorCity} >
                        <FormControl.Label _text={{
                            color: 'primary.50',
                            fontWeight: 'bold',
                            fontSize: 'lg'
                        }}>Ciudad
                        </FormControl.Label>
                        <Input w={{

                        }} InputLeftElement={<Icon as={<MaterialCommunityIcons name='city-variant-outline' />} size={5} ml="3" color='primary.200' />}
                            onChangeText={value => setFormData({ ...formData, city: value})}
                            mt="3" placeholder="Ingrese su ciudad" color="primary.900"
                            fontSize="sm" fontWeight="bold" backgroundColor="primary.100" variant="rounded" />

                        {'Ciudad' in errorCity ? <FormControl.ErrorMessage _text={{ color: 'primary.700' }}>{errorCity.City}</FormControl.ErrorMessage> : <FormControl.HelperText>
                            Ingrese su ciudad
                        </FormControl.HelperText>
                        }

                    </FormControl>

                    <FormControl isRequired isInvalid={'municipality' in errormunicipality} >
                        <FormControl.Label _text={{
                            color: 'primary.50',
                            fontWeight: 'bold',
                            fontSize: 'lg'
                        }}>Municipio
                        </FormControl.Label>
                        <Input w={{

                        }} InputLeftElement={<Icon as={<MaterialCommunityIcons name='city-variant-outline' />} size={5} ml="3" color='primary.200' />}
                            onChangeText={value => setFormData({ ...formData, municipality: value})}
                            mt="3" placeholder="Ingrese su municipio" color="primary.900"
                            fontSize="sm" fontWeight="bold" backgroundColor="primary.100" variant="rounded" />

                        {'Municipio' in errorCity ? <FormControl.ErrorMessage _text={{ color: 'primary.700' }}>{errormunicipality.municipality}</FormControl.ErrorMessage> : <FormControl.HelperText>
                            Ingrese su municipio
                        </FormControl.HelperText>
                        }

                    </FormControl>

                    <FormControl isRequired isInvalid={'state' in errorstate} >
                        <FormControl.Label _text={{
                            color: 'primary.50',
                            fontWeight: 'bold',
                            fontSize: 'lg'
                        }}>Estado
                        </FormControl.Label>
                        <Input w={{

                        }} InputLeftElement={<Icon as={<MaterialCommunityIcons name='city-variant-outline' />} size={5} ml="3" color='primary.200' />}
                            onChangeText={value => setFormData({ ...formData, state: value})}
                            mt="3" placeholder="Ingrese su estado" color="primary.900"
                            fontSize="sm" fontWeight="bold" backgroundColor="primary.100" variant="rounded" />

                        {'Estado' in errorCity ? <FormControl.ErrorMessage _text={{ color: 'primary.700' }}>{errorstate.state}</FormControl.ErrorMessage> : <FormControl.HelperText>
                            Ingrese su estado
                        </FormControl.HelperText>
                        }

                    </FormControl>

                    {/* <FormControl isRequired isInvalid={'municipality' in errormunicipality}>

                        <FormControl.Label _text={{
                            color: 'primary.50',
                            fontWeight: 'bold',
                            fontSize: 'lg'

                        }} >
                            Municipio
                        </FormControl.Label>
                        <Select selectedValue={formData.municipality} minWidth="200" placeholder="Seleccione su Municipio" backgroundColor="primary.100"
                            color="primary.900"
                            fontWeight="bold" InputLeftElement={<Icon as={<MaterialCommunityIcons name='city-variant-outline' />} size={5} ml="2" mt="3" color='primary.200' />}
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

                    </FormControl> */}

                    {/* <FormControl isRequired isInvalid={'state' in errorstate}>

                        <FormControl.Label _text={{
                            color: 'primary.50',
                            fontWeight: 'bold',
                            fontSize: 'lg'

                        }}>
                            Estado
                        </FormControl.Label>
                        <Select selectedValue={formData.state} minWidth="200" placeholder="Seleccione su estado" backgroundColor="primary.100"
                            color="primary.900"
                            fontWeight="bold" InputLeftElement={<Icon as={<MaterialCommunityIcons name='city-variant-outline' />} size={5} ml="2" mt="3" color='primary.200' />}
                            onValueChange={itemValue => setFormData({ ...formData, state: itemValue })}>
                            <Select.Item label="Aguascalientes" value="Ags" />
                            <Select.Item label="Zacatecas" value="Zacatecas" />
                            <Select.Item label="Jalisco" value="Jalisco" />

                        </Select>
                        {'state' in errorstate ? <FormControl.ErrorMessage _text={{ color: 'primary.700' }}>{errorstate.state}</FormControl.ErrorMessage> : <FormControl.HelperText>
                            Ingrese su estado
                        </FormControl.HelperText>
                        }
                    </FormControl> */}

                    {/* <HStack space={10} marginLeft='45'> */}

                    {/* <Button marginTop={15} backgroundColor='primary.200' size='lg' borderWidth="2" borderColor="primary.200"
                            // onPress={() => { navigation.navigate("Home") }}>
                            onPress={submit}>

                            Omitir
                        </Button> */}


                    {/* </HStack> */}

                    <Button
                        background="primary.200" borderWidth="2" borderColor="primary.200" mt="5" rounded={10} _text={{
                            color: "primary.50",
                            fontWeight: "700",
                            fontSize: "lg"
                        }} onPress={submit}>
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
                <HStack space={3} marginTop="8" alignSelf="center">
                    <Circle size="10px" bg="primary.200"></Circle>
                    <Circle size="10px" bg="primary.200"></Circle>
                    <Circle size="10px" bg="primary.50"></Circle>

                </HStack>
            </Box>

        </Center>
    </ScrollView>
}