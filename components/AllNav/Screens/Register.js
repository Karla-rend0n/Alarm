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
    const [errorPhone, setErrorPhone] = React.useState({})
    var emailVal = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    var namVal = /^[A-Za-z]+$/i;
    var number = /^[0-9]+$/i
    var phoneNum= /^\+?(52\s?)?1?\d{3}\s?\d{3}\s?\d{4}$/;
   

    const validate = () => {
        let isValid = true;
        setErrors({})
        setErrorsEmail({})
        setErrorPass({})
        setErrorAge({})
        setErrorPhone({})
       
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
        } else if (formData.age.length>2) {
            setErrorAge({ ...errorAge, age: 'Tiene que ser solo dos digitos' });
            isValid = false
        }else if (parseInt(formData.age)<=16){
            setErrorAge({ ...errorAge, age: 'Tiene que ser mayor de 16 años' });
            isValid = false
        }
        if (formData.phone === undefined) {
            setErrorPhone({ ...errorPhone, phone: 'El telefono es requerido' })
            isValid = false
        } else if (!phoneNum.test(formData.phone)) {
            setErrorPhone({ ...errorPhone, phone: 'Solo numeros' })
            isValid = false
        } else if (formData.phone.length < 9) {
            setErrorPhone({ ...errorPhone, phone: 'El numero necesita ser de 10 digitos' })
            isValid = false
        }
        if (formData.pass===undefined) {
            setErrorPass({ ...errorPass, pass: 'La contraseña es requerida' })
            isValid = false
        } else if (!validator.isStrongPassword(formData.pass)){
            setErrorPass({...errorPass, pass: 'La contraseña no es lo suficientemente segura'})
            
        }
        return isValid
    };




    const submit = () => { validate() ? navigation.navigate("Contact_R") : console.log('bad', formData) }



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
                    <FormControl isRequired isInvalid={'name' in errors} >

                        <FormControl.Label _text={{
                            color: 'primary.50',
                            fontWeight: 'bold'
                        }} marginLeft={2}>
                            Nombre
                        </FormControl.Label>
                        <Input p={2} placeholder="Ingrese su nombre" backgroundColor="primary.100"
                            variant="rounded"
                            color="primary.900"
                            fontWeight="bold"
                            onChangeText={value => setFormData({ ...formData, name: value })}
                            InputLeftElement={<Icon as={<MaterialIcons name='person' />} size={5} ml="2" color='primary.200' />} />

                        {'name' in errors ? <FormControl.ErrorMessage _text={{ color: 'primary.700' }}>{errors.name}</FormControl.ErrorMessage> : <FormControl.HelperText>
                            Ingrese su nombre sin apellidos
                        </FormControl.HelperText>
                        }
                    </FormControl>

                    <FormControl isRequired isInvalid={'lastName' in errorLastname} >

                        <FormControl.Label _text={{
                            color: 'primary.50',
                            fontWeight: 'bold'
                        }} marginLeft={2} >
                            Apellido
                        </FormControl.Label>
                        <Input p={2} placeholder="Ingrese su apellido" backgroundColor="primary.100"
                            variant="rounded"
                            color="primary.900"
                            fontWeight="bold"
                            onChangeText={value => setFormData({ ...formData, lastName: value })}
                            InputLeftElement={<Icon as={<MaterialIcons name='person' />} size={5} ml="2" color='primary.200' />} />
                        {'lastName' in errorLastname ? <FormControl.ErrorMessage _text={{ color: 'primary.700' }}>{errorLastname.lastName}</FormControl.ErrorMessage> : <FormControl.HelperText>
                            Ingrese solos sus apellidos
                        </FormControl.HelperText>
                        }

                    </FormControl>
                    <FormControl isRequired isInvalid={'age' in errorAge} >

                        <FormControl.Label _text={{
                            color: 'primary.50',
                            fontWeight: 'bold'
                        }} marginLeft={2} >
                            Edad
                        </FormControl.Label>
                        <Input type='number'
                            p={2} placeholder="Ingrese su edad" backgroundColor="primary.100"
                            variant="rounded"
                            color="primary.900"
                            fontWeight="bold"
                            onChangeText={value => setFormData({ ...formData, age: value })}
                            InputLeftElement={<Icon as={<MaterialIcons name='person' />} size={5} ml="2" color='primary.200' />} />
                        {'age' in errorAge ? <FormControl.ErrorMessage _text={{ color: 'primary.700' }}>{errorAge.age}</FormControl.ErrorMessage> : <FormControl.HelperText>
                            Ingrese su edad
                        </FormControl.HelperText>
                        }

                    </FormControl>
                    <FormControl isRequired isInvalid={'phone' in errorPhone}>

                        <FormControl.Label _text={{
                            color: 'primary.50',
                            fontWeight: 'bold'
                        }} marginLeft={2} >
                            Teléfono
                        </FormControl.Label>
                        <Input p={2} placeholder="+52" backgroundColor="primary.100"
                            variant="rounded"
                            color="primary.900"
                            fontWeight="bold"
                            onChangeText={value => setFormData({ ...formData, phone: value })}
                            InputLeftElement={<Icon as={<MaterialIcons name='phone' />} size={5} ml="2" color='primary.200' />} />
                        {'phone' in errorPhone ? <FormControl.ErrorMessage _text={{ color: 'primary.700' }}>{errorPhone.phone}</FormControl.ErrorMessage> : <FormControl.HelperText>
                            Ingrese su número de teléfono 
                        </FormControl.HelperText>}


                    </FormControl>
                    <FormControl isRequired isInvalid={'email' in errorEmail}>
                        <FormControl.Label _text={{
                            color: 'primary.50',
                            fontWeight: 'bold'
                        }} marginLeft={2} >
                            Email
                        </FormControl.Label>
                        <Input p={2} placeholder="Correo electrónico" backgroundColor="primary.100"
                            variant="rounded"
                            color="primary.900"
                            fontWeight="bold"
                            InputLeftElement={<Icon as={<MaterialIcons name='email' />} size={5} ml="2" color='primary.200' />}
                            //type='email'
                            onChangeText={value => setFormData({ ...formData, email: value })}
                        />

                        {'email' in errorEmail ? <FormControl.ErrorMessage _text={{ color: 'primary.700' }}>{errorEmail.email}</FormControl.ErrorMessage> : <FormControl.HelperText>
                            Ingresa un correo electrónico
                        </FormControl.HelperText>
                        }
                    </FormControl>
                    <FormControl isRequired isInvalid={'pass' in errorPass}>

                        <FormControl.Label _text={{
                            color: 'primary.50',
                            fontWeight: 'bold'
                        }} marginLeft={2} >
                            Contraseña
                        </FormControl.Label>
                        <Input p={2} placeholder="Contraseña" backgroundColor="primary.100"
                            variant="rounded"
                            color="primary.900"
                            fontWeight="bold"
                            type='password'
                            onChangeText={value => setFormData({ ...formData, pass: value })}
                            InputLeftElement={<Icon as={<Ionicons name='lock-closed' />} size={5} ml="2" color='primary.200' />} />

                        {'pass' in errorPass ? <FormControl.ErrorMessage _text={{ color: 'primary.700' }}>{errorPass.pass}</FormControl.ErrorMessage> : <FormControl.HelperText>
                        Introduce una contraseña
                        </FormControl.HelperText>}

                    </FormControl>

                    <Button marginTop={15} backgroundColor='primary.200' borderWidth="2" borderColor="primary.200" mt="5" size='lg' rounded={10}
                        // onPress={() => { navigation.navigate("Contact_R") }}>
                        onPress={submit}>
                        Guardar
                    </Button>

                    <HStack color="primary.50" marginLeft='5' fontWeight="normal">
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
                <HStack space={3} marginLeft='110' marginTop='5'>
                    <Circle size="10px" bg="primary.50"></Circle>
                    <Circle size="10px" bg="primary.200"></Circle>
                    <Circle size="10px" bg="primary.200"></Circle>

                </HStack>
            </Box>

        </Center>
    </ScrollView>
}
