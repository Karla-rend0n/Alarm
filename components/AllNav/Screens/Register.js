import * as React from 'react'
import { Box, Center, Heading, VStack, FormControl, Input, Icon, ScrollView, Button, HStack, Text, Link, Circle } from 'native-base'
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


export default function Register() {
    const navigation = useNavigation();
    const [formData, setFormData] = React.useState({})
    const [errors, setErrors] = React.useState({})
    const [errorEmail, setErrorsEmail] = React.useState({})
    const [errorLastname, setErrorLastname] = React.useState({})
    const [errorAge, setErrorAge] = React.useState({})
    const [errorPass, setErrorPass] = React.useState({})
    const [errorPhone, setErrorPhone]=React.useState({})
    var emailVal = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    var namVal = /^[A-Za-z]+$/i;
    var number = /^[0-9]+$/i
    var pattern = new RegExp("^(?=.[a-z])(?=.[A-Z])(?=.\\d)(?=.[-+_!@#$%^&*.,?]).+$")




    const validate = () => {
        let isValid = true;
        setErrors({})
        setErrorsEmail({})
        setErrorPass({})
        setErrorAge({})
        setErrorPhone({})
        if(formData.email === undefined){
            setErrorsEmail({ ...errorEmail, email: 'El email es requerido' });
            isValid = false
        }else{
        if (!emailVal.test(formData.email)) {
            
            setErrorsEmail({ ...errorEmail, email: 'is not valid' });
            isValid = false
        }
    }

        if (formData.name === undefined) {
            setErrors({ ...errors, name: 'Name is required' })
            isValid = false
        } else {
            if (formData.name.length <= 3) {
                setErrors({
                    ...errors,
                    name: 'Name is too short'
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
            setErrorLastname({ ...errorLastname, lastName: 'Last Name is required' })
            isValid = false
        } else {
            if (formData.lastName.length <= 3) {
                setErrorLastname({
                    ...errorLastname,
                    lastName: 'Last Name is too short'
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
        if(formData.age === undefined){
            setErrorAge({ ...errorAge, age: 'Age is required' });
            isValid = false
        }else if (!number.test(formData.age)) {

            setErrorAge({ ...errorAge, age: 'Solo ingrese números' });
            isValid = false
        }else if(formData.age<2 ){
            setErrorAge({ ...errorAge, age: 'Tiene que ser mayor' });
            isValid = false
        }
        if(formData.phone === undefined){
            setErrorPhone({...errorPhone, phone:'Phone is required'})
            isValid=false
        }else if(!number.test(formData.phone)){
            setErrorPhone({...errorPhone, phone:'Only numbers'})
            isValid=false
        }else if(formData.phone<9){
            setErrorPhone({...errorPhone, phone:'I need 10 digits'})
            isValid=false
        }
        if (!formData.pass || formData.pass.length < 8 ) {
            setErrorPass({ ...errorPass, pass: 'Password is required' })
            isValid = false
        }else if (!pattern.test(formData.pass)) {
            
            setErrors({ ...errors,
              pass: 'is not valid'
            });
            isValid=false
        }
        return isValid
    };




    const submit = () => { validate() ? console.log('good', formData) : console.log('bad', formData) }

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
                        <Input p={2} placeholder="Name" backgroundColor="primary.100"
                            variant="rounded"
                            color="primary.900"

                            onChangeText={value => setFormData({ ...formData, name: value })}
                            InputLeftElement={<Icon as={<MaterialIcons name='person' />} size={5} ml="2" color='primary.200' />} />

                        {'name' in errors ? <FormControl.ErrorMessage _text={{ color: 'primary.700' }}>{errors.name}</FormControl.ErrorMessage> : <FormControl.HelperText>

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
                        <Input p={2} placeholder="Last Name" backgroundColor="primary.100"
                            variant="rounded"
                            color="primary.900"
                            onChangeText={value => setFormData({ ...formData, lastName: value })}
                            InputLeftElement={<Icon as={<MaterialIcons name='person' />} size={5} ml="2" color='primary.200' />} />
                        {'lastName' in errorLastname ? <FormControl.ErrorMessage>{errorLastname.lastName}</FormControl.ErrorMessage> : <FormControl.HelperText>

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
                            p={2} placeholder="Age" backgroundColor="primary.100"
                            variant="rounded"
                            color="primary.900"
                            focusOutlineColor='primary.700'
                            onChangeText={value => setFormData({ ...formData, age: value })}
                            InputLeftElement={<Icon as={<MaterialIcons name='person' />} size={5} ml="2" color='primary.200' />} />
                        {'age' in errorAge ? <FormControl.ErrorMessage>{errorAge.age}</FormControl.ErrorMessage> : <FormControl.HelperText>

                        </FormControl.HelperText>
                        }

                    </FormControl>
                    <FormControl isRequired isInvalid={'phone'in errorPhone}>

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
                         {'phone' in errorPhone?<FormControl.ErrorMessage>{errorPhone.phone}</FormControl.ErrorMessage>:<FormControl.HelperText>

                        </FormControl.HelperText>}
                       

                    </FormControl>
                    <FormControl isRequired isInvalid={'email' in errorEmail}>
                        <FormControl.Label _text={{
                            color: 'primary.50',
                            fontWeight: 'bold'
                        }} marginLeft={2} >
                            Email
                        </FormControl.Label>
                        <Input p={2} placeholder="Email" backgroundColor="primary.100"
                            variant="rounded"
                            color="primary.900"
                            InputLeftElement={<Icon as={<MaterialIcons name='email' />} size={5} ml="2" color='primary.200' />}
                            //type='email'
                            onChangeText={value => setFormData({ ...formData, email: value })}
                        />

                        {'email' in errorEmail ? <FormControl.ErrorMessage  >{errorEmail.email}</FormControl.ErrorMessage> : <FormControl.HelperText>
                            Ingresa un correo electronico
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
                        <Input p={2} placeholder="Password" backgroundColor="primary.100"
                            variant="rounded"
                            color="primary.900"
                            type='password'
                            onChangeText={value => setFormData({ ...formData, pass: value })}
                            InputLeftElement={<Icon as={<Ionicons name='lock-closed' />} size={5} ml="2" color='primary.200' />} />
                             
                        {'pass' in errorPass ? <FormControl.ErrorMessage>{errorPass.pass}</FormControl.ErrorMessage> : <FormControl.HelperText>

                        </FormControl.HelperText>}

                    </FormControl>

                    <Button marginTop={15} backgroundColor='primary.200' borderWidth="2" borderColor="primary.200" mt="5" size='lg' rounded={10}
                        onPress={submit} >
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
