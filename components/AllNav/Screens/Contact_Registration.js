import * as React from 'react'
import { Box, Center, Heading, ScrollView, VStack, FormControl, Input, Icon, HStack, Button, Circle } from 'native-base'
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Contact_Registration() {
    const navigation = useNavigation();
    const [formData, setFormData] = React.useState({})
    const [errors, setErrors] = React.useState({})
    const [errorkinship, setErrorkinship] = React.useState({})
    const [errorLastname, setErrorLastname] = React.useState({})
    const [errorPhone, setErrorPhone]=React.useState({})
    var namVal = /^[A-Za-z]+$/i;
    var number = /^[0-9]+$/i




    const validate = () => {
        let isValid = true;
        setErrorkinship({})
        setErrors({})
        setErrorPhone({})
        setErrorLastname({})

        if (formData.kinship === undefined) {
            setErrorkinship({ ...errorkinship, kinship: 'kinship is required' })
            isValid = false
        } else {
            if (formData.kinship.length <= 3) {
                setErrorkinship({
                    ...errorkinship,
                    kinship: 'kinship Name is too short'
                })
                console.log('valida')
            } else {
                if (!namVal.test(formData.kinship)) {
                    setErrorkinship({
                        ...errorkinship,
                        kinship: 'Ingrese letras'
                    })
                }
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
        
        return isValid
    };




    const submit = () => { validate() ? console.log('good', formData) : console.log('bad', formData) }

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
                    <FormControl isRequired isInvalid={'kinship' in errorkinship} >

                        <FormControl.Label _text={{
                            color: 'primary.50',
                            fontWeight: 'bold'
                        }} marginLeft={2}>
                            Parentesco
                        </FormControl.Label>
                        <Input p={2} placeholder="Esposo" backgroundColor="primary.100"
                            variant="rounded"
                            color="primary.900"
                            fontWeight="bold"
                            onChangeText={value => setFormData({ ...formData, kinship: value })}
                            InputLeftElement={<Icon as={<MaterialIcons name='person' />} size={5} ml="2" color='primary.200' />} />

{'kinship' in errorkinship ? <FormControl.ErrorMessage _text={{ color: 'primary.700' }}>{errorkinship.kinship}</FormControl.ErrorMessage> : <FormControl.HelperText>

</FormControl.HelperText>
}
                    </FormControl>
                    <FormControl isRequired isInvalid={'name' in errors}>

                        <FormControl.Label _text={{
                            color: 'primary.50',
                            fontWeight: 'bold'
                        }} marginLeft={2}>
                            Nombre
                        </FormControl.Label>
                        <Input p={2} placeholder="Sofía" backgroundColor="primary.100"
                            variant="rounded"
                            color="primary.900"
                            fontWeight="bold"
                            onChangeText={value => setFormData({ ...formData, name: value })}
                            InputLeftElement={<Icon as={<MaterialIcons name='person' />} size={5} ml="2" color='primary.200' />} />
                            {'name' in errors ? <FormControl.ErrorMessage _text={{ color: 'primary.700' }}>{errors.name}</FormControl.ErrorMessage> : <FormControl.HelperText>

</FormControl.HelperText>
}

                    </FormControl>


                    <FormControl isRequired isInvalid={'lastName' in errorLastname}>

                        <FormControl.Label _text={{
                            color: 'primary.50',
                            fontWeight: 'bold'
                        }} marginLeft={2} >
                            Apellido
                        </FormControl.Label>
                        <Input p={2} placeholder="Hernández" backgroundColor="primary.100"
                            variant="rounded"
                            color="primary.900"
                            fontWeight="bold"
                            onChangeText={value => setFormData({ ...formData, lastName: value })}
                            InputLeftElement={<Icon as={<MaterialIcons name='person' />} size={5} ml="2" color='primary.200' />} />
                            {'lastName' in errorLastname ? <FormControl.ErrorMessage _text={{ color: 'primary.700' }}>{errorLastname.lastName}</FormControl.ErrorMessage> : <FormControl.HelperText>

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
                        <Input p={2} placeholder="449-748-22-00" backgroundColor="primary.100"
                            variant="rounded"
                            color="primary.900"
                            fontWeight="bold"
                            onChangeText={value => setFormData({ ...formData, phone: value })}
                            InputLeftElement={<Icon as={<MaterialIcons name='phone' />} size={5} ml="2" color='primary.200' />} />
                             {'phone' in errorPhone?<FormControl.ErrorMessage _text={{ color: 'primary.700' }}>{errorPhone.phone}</FormControl.ErrorMessage>:<FormControl.HelperText>

</FormControl.HelperText>}

                    </FormControl>


                    <HStack space={10} marginLeft='45'>
                    <Button marginTop={15} backgroundColor='primary.200' size='lg' borderWidth="2" borderColor="primary.200"
                        onPress={() => {navigation.navigate("Address_R")}}>
                        Omitir
                    </Button>
                    <Button marginTop={15} backgroundColor='primary.200' size='lg' borderWidth="2" borderColor="primary.200"
                    // onPress={() => {navigation.navigate("ViewContact")}} >
                        onPress={submit}>

                        Finalizar
                    </Button>
                    </HStack>

                    {/* <HStack space={10} marginLeft='45'>
                        <Button size='lg' bg='primary.200' borderWidth="2" borderColor="primary.200" onPress={() => {navigation.navigate("Address_R")}}>Omitir</Button>
                        <Button size='lg' bg='primary.200' borderWidth="2" borderColor="primary.200" onPress={() => {navigation.navigate("ViewContact")}}>Guardar</Button>
                    </HStack> */}

                </VStack>
                <HStack space={3} marginLeft='110' marginTop='5'>
                    <Circle size="10px" bg="primary.200"></Circle>
                    <Circle size="10px" bg="primary.50"></Circle>
                    <Circle size="10px" bg="primary.200"></Circle>

                </HStack>
            </Box>


    </Center>
   

}