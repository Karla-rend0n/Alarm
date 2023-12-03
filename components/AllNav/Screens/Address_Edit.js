import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Box, Button, Center, FormControl, Heading, Icon, Input, ScrollView, Select, VStack } from 'native-base';
import * as React from 'react';
import { Dimensions } from "react-native";
import { useUser } from "../../store/user";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Address_Edit() {
    const navigation = useNavigation();
    const [errorCity, setErrorCity] = React.useState({})
    const [errorStreet, setErrorStreet] = React.useState({})
    const [errorNumE, setErrorNumE] = React.useState({})
    const [errorNumI, setErrorNumI] = React.useState({})
    const [errorcologne, setErrorcologne] = React.useState({})
    const [errorCP, setErrorCP] = React.useState({})
    const [errorstate, setErrorstate] = React.useState({})
    const [errormunicipality, setErrormunicipality] = React.useState({})
    const [jsonZipCode, setJsonZipCode] = React.useState({})
    let row_zip_code

    const { user, edit_address } = useUser(state => state)
    const { profile_address } = user[0];
    const info = profile_address[0];

    const [formData, setFormData] = React.useState({
        street: info.street,
        building_number: info.building_number
    })

    var namVal = /^[A-Za-záéíóúüÜÁÉÍÓÚ\s.]+$/i;
    var number = /^[0-9]+$/i

    const get_zip_code = async () => {
        try {
            let url = 'https://api-alarm.cadsita.net/zip_code/' + formData.zip_code + '/get_zip_code/'
            console.log('url', url)

            const response = await fetch(url)
            const zipCodeData = await response.json();
            console.log('json', jsonZipCode)

            setJsonZipCode(zipCodeData);

            const foundCity = zipCodeData.filter(data => data.city)[0];

            if (foundCity) {
                setFormData(prevData => ({
                    ...prevData,
                    city: foundCity.city,
                    state: foundCity.state,
                    municipality: foundCity.municipality,
                }));
            }

            return zipCodeData;
        } catch (error) {
            console.error(error);
        }
    }

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
                    City: 'El nombre de la ciudad es muy corta'
                })

                console.log('valida')
            }
        }

        if (formData.street === undefined) {
            setErrorStreet({ ...errorStreet, Street: 'La calle es requerida' })
            isValid = false
        } else {
            if (formData.street.length <= 3) {
                setErrorStreet({
                    ...errorStreet,
                    Street: 'La calle es muy corta'
                })
            } else {
                if (!namVal.test(formData.street)) {
                    setErrorStreet({
                        ...errorStreet,
                        Street: 'Ingrese solo letras'
                    })
                }
            }
        }

        if (formData.building_number === undefined || formData.building_number.trim() === '') {
            setErrorNumE({ ...errorNumE, building_number: 'El número exterior es requerido' });
            isValid = false;
        } else if (!number.test(formData.building_number)) {
            setErrorNumE({ ...errorNumE, building_number: 'Solo ingrese números' });
            isValid = false;
        } else if (formData.building_number.length < 2) {
            setErrorNumE({ ...errorNumE, building_number: 'Tienen que ser más de 2 dígitos' });
            isValid = false;
        } else {
            setErrorNumE({ ...errorNumE, building_number: null }); // Limpia el error si la validación es exitosa
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

    // const submit = () => { validate() ? navigation.navigate("Address") : console.log('bad', formData) }

    const submit = async () => {
        if (validate()) {
            console.log(formData)
            console.log(info)

            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var new_address = {
                "street": formData.street,
                "building_number": formData.building_number,
                "apartment_number": formData.NumI,
                "neighborhood": formData.neighborhood,
                "zip_code": formData.zip_code,
                "municipality": formData.municipality,
                "city": formData.city,
                "state": formData.state,
            }

            var raw = JSON.stringify(new_address);

            var requestOptions = {
                method: 'PATCH',
                headers: myHeaders,
                body: raw,
            };

            try {
                const response = await fetch(`https://api-alarm.cadsita.net/address/${info.id}/`, requestOptions);
                const result = await response.json();
                console.log(result);
            } catch (error) {
                console.log(error);
            }

            try {
                const res = await fetch(`https://api-alarm.cadsita.net/profile/${user[0].id}/`, {
                    headers: {
                        method: 'GET',
                    }
                })

                const newUserAddress = await res.json()
                edit_address([newUserAddress])
            } catch (error) {
                console.log(error);
            }

            // navigation.navigate("Address", { refresh: true })
            navigation.navigate("Profile", { refresh: true })
        } else {
            console.log('bad', formData)
        }
    }

    return (
        <ScrollView flex={1} contentContainerStyle={{ flexGrow: 1 }}>
            <Center flex={1} bg={{
                linearGradient: {
                    colors: ['primary.400', 'primary.800'],
                    start: [1, 0],
                    end: [0, 0]
                }
            }}>
                <Box safeArea p="2" py="8" width="100%" maxWidth="350px">
                    <Heading
                        size="xl"
                        color="Black"
                        _dark={{
                            color: "primary.50",
                            fontWeight: 'bold'
                        }}
                        mt={windowHeight * 0.05}
                    >
                        Editar Dirección
                    </Heading>

                    <VStack space={windowHeight * 0.05} mt={windowHeight * 0.05}>
                        <FormControl isRequired isInvalid={'Street' in errorStreet}>
                            <FormControl.Label _text={{
                                color: 'primary.50',
                                fontWeight: 'bold',
                                fontSize: 'lg'

                            }}>
                                Calle
                            </FormControl.Label>

                            <Input
                                w={{}}
                                InputLeftElement={
                                    <Icon as={<Entypo name='address' />}
                                        size={5}
                                        ml="2"
                                        color='primary.200'
                                    />
                                }
                                onChangeText={value => setFormData({ ...formData, street: value })}
                                mt="3" placeholder="Ingrese su calle" color="primary.900"
                                fontSize="sm" fontWeight="bold" backgroundColor="primary.100" variant="rounded"
                                defaultValue={info.street}
                            />

                            {'Street' in errorStreet
                                ? <FormControl.ErrorMessage _text={{ color: 'primary.700' }}>
                                    {errorStreet.Street}
                                </FormControl.ErrorMessage>
                                : <FormControl.HelperText>
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

                            <Input
                                w={{}}
                                InputLeftElement={
                                    <Icon
                                        as={<MaterialCommunityIcons name='home-group' />}
                                        size={5}
                                        ml="2"
                                        color='primary.200'
                                    />
                                }
                                onChangeText={value => setFormData({ ...formData, building_number: value })}
                                mt="3" placeholder="Ingrese el número exterior" color="primary.900"
                                fontSize="sm" fontWeight="bold" backgroundColor="primary.100" variant="rounded"
                                defaultValue={info.building_number}
                            />

                            {'building_number' in errorNumE && errorNumE.building_number
                                ? <FormControl.ErrorMessage _text={{ color: 'primary.700' }}>
                                    {errorNumE.building_number}
                                </FormControl.ErrorMessage>
                                : <FormControl.HelperText>
                                    Ingrese su número exterior
                                </FormControl.HelperText>
                            }
                        </FormControl>

                        <FormControl isInvalid={'NumI' in errorNumI}>
                            <FormControl.Label _text={{
                                color: 'primary.50',
                                fontWeight: 'bold',
                                fontSize: 'lg'
                            }}>
                                Numero Interior
                            </FormControl.Label>

                            <Input
                                w={{}}
                                InputLeftElement={<Icon as={<MaterialCommunityIcons name='home-import-outline' />} size={5} ml="2" color='primary.200' />}
                                onChangeText={value => {
                                    setFormData({ ...formData, NumI: value });
                                    // Verifica la longitud del valor para eliminar el error si es válido
                                    if (!value || value.length >= 2) {
                                        setErrorNumI({ ...errorNumI, NumI: null });
                                    } else {
                                        setErrorNumI({ ...errorNumI, NumI: 'Tienen que ser más de 2 dígitos' });
                                    }
                                }} mt="3" placeholder="Opcional" color="primary.900"
                                fontSize="sm" fontWeight="bold" backgroundColor="primary.100" variant="rounded"
                                defaultValue={info.apartment_number}
                            />

                            {'NumI' in errorNumI
                                ? <FormControl.ErrorMessage _text={{ color: 'primary.700' }}>
                                    {errorNumI.NumI}
                                </FormControl.ErrorMessage>
                                : null
                            }

                            <FormControl.HelperText>
                                Ingrese su número interior OPCIONAL
                            </FormControl.HelperText>
                        </FormControl>

                        <FormControl isRequired isInvalid={'zip_code' in errorCP}>
                            <FormControl.Label _text={{
                                color: 'primary.50',
                                fontWeight: 'bold',
                                fontSize: 'lg'
                            }}>
                                Código Postal
                            </FormControl.Label>

                            <Input
                                width="100%"
                                InputLeftElement={<Icon as={<Entypo name='location' />} size={5} ml="2" color='primary.200' />}
                                onChangeText={value => setFormData({ ...formData, zip_code: value })}
                                mt="3"
                                placeholder="Ingrese el Código postal"
                                color="primary.900"
                                fontSize="sm"
                                fontWeight="bold"
                                backgroundColor="primary.100"
                                variant="rounded"
                                onBlur={get_zip_code}
                            />

                            {'CP' in errorCP
                                ? <FormControl.ErrorMessage _text={{ color: 'primary.700' }}>
                                    {errorCP.CP}
                                </FormControl.ErrorMessage>
                                : <FormControl.HelperText>
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

                            <Select
                                width="100%"
                                mt="3"
                                selectedValue={formData.neighborhood}
                                minWidth="200"
                                placeholder="Seleccione su colonia"
                                backgroundColor="primary.100"
                                color="primary.900"
                                fontWeight="bold"
                                InputLeftElement={<Icon as={<MaterialCommunityIcons name='city-variant-outline' />} size={5} ml="2" mt="3" color='primary.200' />}
                                onValueChange={itemValue => setFormData({ ...formData, neighborhood: itemValue })}>

                                {JSON.stringify(jsonZipCode) === '{}' ?
                                    <Select.Item label="" value="" />
                                    :
                                    jsonZipCode.map((ngbh) =>
                                        <Select.Item label={ngbh.neighborhood} value={ngbh.id} key={ngbh.id} />
                                    )
                                }
                            </Select>

                            {'neighborhood' in errorcologne
                                ? <FormControl.ErrorMessage _text={{ color: 'primary.700' }}>
                                    {errorcologne.neighborhood}
                                </FormControl.ErrorMessage>
                                : <FormControl.HelperText>
                                    Ingrese su colonia
                                </FormControl.HelperText>
                            }
                        </FormControl>

                        <FormControl isRequired isInvalid={'city' in errorCity} >
                            <FormControl.Label _text={{
                                color: 'primary.50',
                                fontWeight: 'bold',
                                fontSize: 'lg'
                            }}>
                                Ciudad
                            </FormControl.Label>

                            <Input w={{}}
                                InputLeftElement={<Icon as={<MaterialCommunityIcons name='city-variant-outline' />} size={5} ml="3" color='primary.200' />}
                                onChangeText={value => setFormData({ ...formData, city: value })}
                                value={formData.city} // Establece el valor de formData.city
                                mt="3"
                                placeholder="Ingrese su ciudad"
                                color="primary.900"
                                fontSize="sm"
                                fontWeight="bold"
                                backgroundColor="primary.100"
                                variant="rounded"
                            />

                            {'Ciudad' in errorCity
                                ? <FormControl.ErrorMessage _text={{ color: 'primary.700' }}>
                                    {errorCity.City}
                                </FormControl.ErrorMessage>
                                : <FormControl.HelperText>
                                    Ingrese su ciudad
                                </FormControl.HelperText>
                            }
                        </FormControl>

                        <FormControl isRequired isInvalid={'municipality' in errormunicipality} >
                            <FormControl.Label _text={{
                                color: 'primary.50',
                                fontWeight: 'bold',
                                fontSize: 'lg'
                            }}>
                                Municipio
                            </FormControl.Label>

                            <Input
                                width="100%"
                                InputLeftElement={<Icon as={<MaterialCommunityIcons name='city-variant-outline' />} size={5} ml="3" color='primary.200' />}
                                onChangeText={value => setFormData({ ...formData, municipality: value })}
                                value={formData.municipality} // Establece el valor de formData.municipality
                                mt="3"
                                placeholder="Ingrese su municipio"
                                color="primary.900"
                                fontSize="sm"
                                fontWeight="bold"
                                backgroundColor="primary.100"
                                variant="rounded"
                            />

                            {'Municipio' in errormunicipality
                                ? <FormControl.ErrorMessage _text={{ color: 'primary.700' }}>
                                    {errormunicipality.municipality}
                                </FormControl.ErrorMessage>
                                : <FormControl.HelperText>
                                    Ingrese su municipio
                                </FormControl.HelperText>
                            }
                        </FormControl>

                        <FormControl isRequired isInvalid={'state' in errorstate} >
                            <FormControl.Label _text={{
                                color: 'primary.50',
                                fontWeight: 'bold',
                                fontSize: 'lg'
                            }}>
                                Estado
                            </FormControl.Label>

                            <Input
                                width="100%"
                                InputLeftElement={<Icon as={<MaterialCommunityIcons name='city-variant-outline' />} size={5} ml="3" color='primary.200' />}
                                onChangeText={value => setFormData({ ...formData, state: value })}
                                value={formData.state} // Establece el valor de formData.state
                                mt="3"
                                placeholder="Ingrese su estado"
                                color="primary.900"
                                fontSize="sm"
                                fontWeight="bold"
                                backgroundColor="primary.100"
                                variant="rounded"
                            />

                            {'Estado' in errorstate
                                ? <FormControl.ErrorMessage _text={{ color: 'primary.700' }}>
                                    {errorstate.state}
                                </FormControl.ErrorMessage>
                                : <FormControl.HelperText>
                                    Ingrese su estado
                                </FormControl.HelperText>
                            }
                        </FormControl>

                        <Button
                            background="primary.200" borderWidth="2" borderColor="primary.200" mt="5" rounded={10} _text={{
                                color: "primary.50",
                                fontWeight: "700",
                                fontSize: "lg"
                            }} onPress={submit}
                        >
                            Guardar
                        </Button>
                    </VStack>
                </Box>
            </Center>
        </ScrollView >
    );
}
