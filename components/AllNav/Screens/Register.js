import * as React from 'react'
import { Box, Center, Heading, VStack, FormControl, Input, Icon, ScrollView, Button, HStack, Text, Link, Circle } from 'native-base'
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import validator from 'validator';


export default function Register() {
    const navigation = useNavigation();
    const [formData, setFormData] = React.useState({})
    const [errors, setErrors] = React.useState({})
    const [errorEmail, setErrorsEmail] = React.useState({})
    const [errorLastname, setErrorLastname] = React.useState({})
    const [errorAge, setErrorAge] = React.useState({})
    const [errorPass, setErrorPass] = React.useState({})
    const [errorConfirm, setErrorConfirm] = React.useState({})
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
        if (formData.last_name === undefined) {
            setErrorLastname({ ...errorLastname, last_name: 'Los Apellidos son requeridos' })
            isValid = false
        } else {
            if (formData.last_name.length <= 3) {
                setErrorLastname({
                    ...errorLastname,
                    last_name: 'El apellido es muy corto'
                })
                console.log('valida')
            } else {
                if (!namVal.test(formData.last_name)) {
                    setErrorLastname({
                        ...errorLastname,
                        last_name: 'Ingrese letras'
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
        if (formData.password === undefined) {
            setErrorPass({ ...errorPass, password: 'La contraseña es requerida' })
            isValid = false
        } else if (!validator.isStrongPassword(formData.password)) {
            setErrorPass({ ...errorPass, password: 'La contraseña no es lo suficientemente segura' })
            isValid = false

        } else if (formData.password.length < 8) {
            setErrorPass({ ...errorPass, password: 'La contraseña es muy pequeña' })
            isValid = false
        }
        if(formData.confPass === undefined){
            setErrorConfirm({ ...errorConfirm, confPass: 'La contraseña es requerida' })
            isValid= false
        }else if(formData.password !== formData.confPass){
            setErrorConfirm({...errorConfirm, confPass: 'Las contraseñas no coinciden'})
            isValid= false
        }

        return isValid
    };




    const submit = () => { validate() ? navigation.navigate("Contact_R", {data_register: formData}) : console.log('bad', formData) }



    return <ScrollView w="100%" h="100%">
        <Center w="100%" h="130%" bg={{
            linearGradient: {
                colors: ['primary.400', 'primary.800'],
                start: [1, 0],
                end: [0, 0]

            }
        }}>

            <Box safeArea p="2" py="8" w="100%" h="92%" maxW="350px" >

                <Heading size="xl" fontWeight="600" color="Black" _dark={{
                    color: "primary.50",
                    fontWeight: 'bold'
                }} >
                    Registro
                </Heading>
                <Heading mt="3" color="primary.50" fontWeight='medium' size='xs'>
                    Completa los siguientes campos.
                </Heading>

                <VStack space={6} mt={8}>
                    <FormControl isRequired isInvalid={'name' in errors} >

                        <FormControl.Label _text={{
                            color: 'primary.50',
                            fontWeight: 'bold',
                            fontSize: 'lg'

                        }}>Nombre
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



                    <FormControl isRequired isInvalid={'last_name' in errorLastname} >

                        <FormControl.Label _text={{
                            color: 'primary.50',
                            fontWeight: 'bold',
                            fontSize: 'lg'

                        }}>
                            Apellido
                        </FormControl.Label>
                        <Input w={{

                        }} InputLeftElement={<Icon as={<MaterialIcons name='person' />} size={5} ml="2" color='primary.200' />}
                            onChangeText={value => setFormData({ ...formData, last_name: value })}
                            mt="3" placeholder="Ingrese su apellido" color="primary.900"
                            fontSize="sm" fontWeight="bold" backgroundColor="primary.100" variant="rounded" />

                        {'last_name' in errorLastname ? <FormControl.ErrorMessage _text={{ color: 'primary.700' }}>{errorLastname.last_name}</FormControl.ErrorMessage> : <FormControl.HelperText>
                            Ingrese solos sus apellidos
                        </FormControl.HelperText>
                        }

                    </FormControl>




                    <FormControl isRequired isInvalid={'age' in errorAge} >

                        <FormControl.Label _text={{
                            color: 'primary.50',
                            fontWeight: 'bold',
                            fontSize: 'lg'

                        }}>
                            Edad
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



                    <FormControl isRequired isInvalid={'phone' in errorPhone}>

                        <FormControl.Label _text={{
                            color: 'primary.50',
                            fontWeight: 'bold',
                            fontSize: 'lg'

                        }} >
                            Teléfono
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



                    <FormControl isRequired isInvalid={'email' in errorEmail}>
                        <FormControl.Label _text={{
                            color: 'primary.50',
                            fontWeight: 'bold',
                            fontSize: 'lg'

                        }}>
                            Email
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



                    <FormControl isRequired isInvalid={'password' in errorPass}>

                        <FormControl.Label _text={{
                            color: 'primary.50',
                            fontWeight: 'bold',
                            fontSize: 'lg'

                        }}>
                            Contraseña
                        </FormControl.Label>

                        <Input mt="3" placeholder="Contraseña" color="primary.900" type="password"
                            onChangeText={value => setFormData({ ...formData, password: value })}

                            fontSize="sm" fontWeight="bold" backgroundColor="primary.100" variant="rounded"
                            InputLeftElement={<Icon as={<Ionicons name='lock-closed' />} size={5} ml="2" color='primary.200' />} />

                        {'password' in errorPass ? <FormControl.ErrorMessage _text={{ color: 'primary.700' }}>{errorPass.password}</FormControl.ErrorMessage> : <FormControl.HelperText>
                            Ingrese letras MAYÚSCULAS o minúsculas, números y caracteres
                        </FormControl.HelperText>}

                    </FormControl>

                    <FormControl isRequired isInvalid={'confPass' in errorConfirm}>

                        <FormControl.Label _text={{
                            color: 'primary.50',
                            fontWeight: 'bold',
                            fontSize: 'lg'

                        }}>
                            Confirmar Contraseña
                        </FormControl.Label>

                        <Input mt="3" placeholder="Contraseña" color="primary.900" type="password"
                            onChangeText={value => setFormData({ ...formData, confPass: value })}

                            fontSize="sm" fontWeight="bold" backgroundColor="primary.100" variant="rounded"
                            InputLeftElement={<Icon as={<Ionicons name='lock-closed' />} size={5} ml="2" color='primary.200' />} />

                        {'confPass' in errorConfirm ? <FormControl.ErrorMessage _text={{ color: 'primary.700' }}>{errorConfirm.confpass}</FormControl.ErrorMessage> : <FormControl.HelperText>
                            Ingrese la misma contraseña
                        </FormControl.HelperText>}

                    </FormControl>
                    

                    <Button
                        background="primary.200" borderWidth="2" borderColor="primary.200" mt="5" rounded={10} _text={{
                            color: "primary.50",
                            fontWeight: "700",
                            fontSize: "lg"
                        }} onPress={submit}>
                        Guardar
                    </Button>



                    <HStack color="primary.50" alignItems='center'  fontWeight="normal">
                        <Text fontSize="sm" >
                            ¿Ya tienes una cuenta? {" "}
                        </Text>
                        <Link onPress={() => { navigation.navigate("Login") }} _text={{
                            color: "primary.50",
                            fontWeight: "bold",
                            fontSize: "sm"
                        }} href="#">
                            Inicia Sesión.
                        </Link>
                    </HStack>


                </VStack>
                <HStack space={3} marginTop='8'>
                    <Circle size="10px" bg="primary.50" ></Circle>
                    <Circle size="10px" bg="primary.200" ></Circle>
                    <Circle size="10px" bg="primary.200"></Circle>

                </HStack>
            </Box>

        </Center>
    </ScrollView >
}
