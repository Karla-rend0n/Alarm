import React from "react";
import { Center, Box, Avatar, Icon, Input, FormControl, Button, Stack, ScrollView, Heading, Flex, VStack } from "native-base"
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import validator from 'validator';



export default function Profile_Edit() {
    const navigation = useNavigation();
    const [formData, setFormData] = React.useState({})
    const [errors, setErrors] = React.useState({})
    const [errorEmail, setErrorsEmail] = React.useState({})
    const [errorLastname, setErrorLastname] = React.useState({})
    const [errorAge, setErrorAge] = React.useState({})
    const [errorPass, setErrorPass] = React.useState({})
    const [errorPhone, setErrorPhone] = React.useState({})
    var emailVal = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    var namVal = /^[A-Za-z]+$/i;
    var number = /^[0-9]+$/i
    var phoneNum = /^\+?(52\s?)?1?\d{3}\s?\d{3}\s?\d{4}$/;


    const validate = () => {
        let isValid = true;
        setErrors({})
        setErrorsEmail({})
        setErrorPass({})
        setErrorAge({})
        setErrorPhone({})
        setErrorLastname({})


        if (formData.email === undefined) {
            setErrorsEmail({ ...errorEmail, email: 'El email es requerido' });
            isValid = false
        } else {
            if (!emailVal.test(formData.email)) {

                setErrorsEmail({ ...errorEmail, email: 'No es valido' });
                isValid = false
            }
        }

        if (formData.name === undefined) {
            setErrors({ ...errors, name: 'El nombre es requerido' })
            isValid = false
        } else {
            if (formData.name.length < 3) {
                setErrors({
                    ...errors,
                    name: 'El nombre es muy corto'
                });
                isValid = false
                console.log('valida')
            } else {
                if (!namVal.test(formData.name)) {
                    setErrors({
                        ...errors,
                        name: 'ingrese letras'
                    })
                }
            }
        }
        if (formData.lastName === undefined) {
            setErrorLastname({ ...errorLastname, lastName: 'Los Apellidos son requeridos' })
            isValid = false
        } else {
            if (formData.lastName.length <= 3) {
                setErrorLastname({
                    ...errorLastname,
                    lastName: 'El apellido es muy corto'
                })
                console.log('valida')
            } else {
                if (!namVal.test(formData.lastName)) {
                    setErrorLastname({
                        ...errorLastname,
                        lastName: 'Ingrese letras'
                    })
                }
            }

        }
        if (formData.age === undefined) {
            setErrorAge({ ...errorAge, age: 'La edad es requerida' });
            isValid = false
        } else if (!number.test(formData.age)) {

            setErrorAge({ ...errorAge, age: 'Solo ingrese números' });
            isValid = false
        } else if (formData.age.length > 2) {
            setErrorAge({ ...errorAge, age: 'Tiene que ser solo dos digitos' });
            isValid = false
        } else if (parseInt(formData.age) <= 16) {
            setErrorAge({ ...errorAge, age: 'Tiene que ser mayor de 16 años' });
            isValid = false
        }
        if (formData.phone === undefined) {
            setErrorPhone({ ...errorPhone, phone: 'El telefono es requerido' })
            isValid = false
        } else if (!phoneNum.test(formData.phone)) {
            setErrorPhone({ ...errorPhone, phone: 'El numero necesita ser de 10 digitos' })
            isValid = false
        }
        if (formData.pass === undefined) {
            setErrorPass({ ...errorPass, pass: 'La contraseña es requerida' })
            isValid = false
        } else if (!validator.isStrongPassword(formData.pass)) {
            setErrorPass({ ...errorPass, pass: 'La contraseña no es lo suficientemente segura' })
            isValid = false

        } else if (formData.pass.length < 8) {
            setErrorPass({ ...errorPass, pass: 'La contraseña es muy pequeña' })
            isValid = false
        }

        return isValid
    };




    const submit = () => { validate() ? navigation.navigate("Profile") : console.log('bad', formData) }


    return <ScrollView w="100%" h="100%">

        <Box background="primary.50" w="100%" alignItems='center'>
            <Flex direction="column" alignItems="center" marginTop='10' marginBottom='1'>

                <Avatar size="xl" source={{
                    uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                }}
                    marginTop='10'>


                </Avatar>
            </Flex>
        </Box>

        <Center w="100%" h="110%" alignItems="center" bg={{
            linearGradient: {
                colors: ['primary.400', 'primary.800'],
                start: [1, 0],
                end: [0, 0]

            }
        }}>




            <Box safeArea p="2" py="8" w="100%" h="100%" maxW="350px">

                <VStack space={6} mt={8}>


                    <FormControl isRequired isInvalid={'name' in errors}>

                        <FormControl.Label _text={{
                            color: 'primary.50',
                            fontWeight: 'bold',
                            fontSize: 'lg'

                        }}>
                            Nombre
                        </FormControl.Label>

                        <Input w={{

                        }} InputLeftElement={<Icon as={<MaterialIcons name='person' />} size={5} ml="3" color='primary.200' />}
                            onChangeText={value => setFormData({ ...formData, name: value })}
                            mt="3" placeholder="Ingrese su nombre" color="primary.900"
                            fontSize="sm" fontWeight="bold" backgroundColor="primary.100" variant="rounded" />

                        {'name' in errors ? <FormControl.ErrorMessage _text={{ color: 'primary.700' }}>{errors.name}</FormControl.ErrorMessage> : <FormControl.HelperText>
                            Ingrese su nombre sin apellidos
                        </FormControl.HelperText>
                        }
                    </FormControl>





                    <FormControl isRequired isInvalid={'lastName' in errorLastname}>
                        <FormControl.Label _text={{
                            color: 'primary.50',
                            fontWeight: 'bold',
                            fontSize: 'lg'

                        }}>Apellido
                        </FormControl.Label>

                        <Input w={{

                        }} InputLeftElement={<Icon as={<MaterialIcons name='person' />} size={5} ml="2" color='primary.200' />}
                            onChangeText={value => setFormData({ ...formData, lastName: value })}
                            mt="3" placeholder="Ingrese su apellido" color="primary.900"
                            fontSize="sm" fontWeight="bold" backgroundColor="primary.100" variant="rounded" />

                        {'lastName' in errorLastname ? <FormControl.ErrorMessage _text={{ color: 'primary.700' }}>{errorLastname.lastName}</FormControl.ErrorMessage> : <FormControl.HelperText>
                            Ingrese solos sus apellidos
                        </FormControl.HelperText>
                        }
                    </FormControl>



                    <FormControl isRequired isInvalid={'email' in errorEmail} >

                        <FormControl.Label _text={{
                            color: 'primary.50',
                            fontWeight: 'bold',
                            fontSize: 'lg'

                        }}>Email
                        </FormControl.Label>

                        <Input w={{

                        }} InputLeftElement={<Icon as={<MaterialIcons name='email' />} size={5} ml="2" color='primary.200' />}
                            onChangeText={value => setFormData({ ...formData, email: value })}

                            mt="3" placeholder="Correo electrónico" color="primary.900"
                            fontSize="sm" fontWeight="bold" backgroundColor="primary.100" variant="rounded" />

                        {'email' in errorEmail ? <FormControl.ErrorMessage _text={{ color: 'primary.700' }}>{errorEmail.email}</FormControl.ErrorMessage> : <FormControl.HelperText>
                            Ingresa un correo electrónico
                        </FormControl.HelperText>
                        }

                    </FormControl>




                    <FormControl isRequired isInvalid={'pass' in errorPass}>

                        <FormControl.Label _text={{
                            color: 'primary.50',
                            fontWeight: 'bold',
                            fontSize: 'lg'

                        }}>Contraseña
                        </FormControl.Label>

                        <Input mt="3" placeholder="Contraseña" color="primary.900" type="password"
                            onChangeText={value => setFormData({ ...formData, pass: value })}

                            fontSize="sm" fontWeight="bold" backgroundColor="primary.100" variant="rounded"
                            InputLeftElement={<Icon as={<Ionicons name='lock-closed' />} size={5} ml="2" color='primary.200' />} />

                        {'pass' in errorPass ? <FormControl.ErrorMessage _text={{ color: 'primary.700' }}>{errorPass.pass}</FormControl.ErrorMessage> : <FormControl.HelperText>
                            Ingrese letras MAYÚSCULAS o minúsculas, números y caracteres
                        </FormControl.HelperText>}

                    </FormControl>





                    <FormControl isRequired isInvalid={'phone' in errorPhone}>

                        <FormControl.Label _text={{
                            color: 'primary.50',
                            fontWeight: 'bold',
                            fontSize: 'lg'

                        }}> Teléfono
                        </FormControl.Label>

                        <Input w={{

                        }} InputLeftElement={<Icon as={<MaterialIcons name='phone' />} size={5} ml="2" color='primary.200' />}
                            onChangeText={value => setFormData({ ...formData, phone: value })}

                            mt="3" placeholder="+52" color="primary.900"
                            fontSize="sm" fontWeight="bold" backgroundColor="primary.100" variant="rounded" />

                        {'phone' in errorPhone ? <FormControl.ErrorMessage _text={{ color: 'primary.700' }}>{errorPhone.phone}</FormControl.ErrorMessage> : <FormControl.HelperText>
                            Ingrese su número de teléfono
                        </FormControl.HelperText>}
                    </FormControl>




                    <FormControl isRequired isInvalid={'age' in errorAge}>

                        <FormControl.Label _text={{
                            color: 'primary.50',
                            fontWeight: 'bold',
                            fontSize: 'lg'

                        }}>Edad
                        </FormControl.Label>
                        <Input w={{

                        }} type='number'
                            InputLeftElement={<Icon as={<MaterialIcons name='person' />} size={5} ml="2" color='primary.200' />}
                            onChangeText={value => setFormData({ ...formData, age: value })}
                            mt="3" placeholder="Ingrese su edad" color="primary.900"
                            fontSize="sm" fontWeight="bold" backgroundColor="primary.100" variant="rounded" />

                        {'age' in errorAge ? <FormControl.ErrorMessage _text={{ color: 'primary.700' }}>{errorAge.age}</FormControl.ErrorMessage> : <FormControl.HelperText>
                            Ingrese su edad
                        </FormControl.HelperText>
                        }
                    </FormControl>

                    <Button
                        background="primary.200" borderWidth="2" borderColor="primary.200" mt="5" rounded={10} _text={{
                            color: "primary.50",
                            fontWeight: "700",
                            fontSize: "lg"
                        }} onPress={submit}>
                        Guardar
                    </Button>

                </VStack>

            </Box>
        </Center>

    </ScrollView >



}