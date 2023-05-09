import * as React from 'react'
import { Box, Center, Heading, VStack, FormControl, Input, Icon, ScrollView, Button, HStack, Text, Link, Circle } from 'native-base'
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


export default function Register() {
    const navigation = useNavigation();
    const [formData, setFormData] = React.useState({})
    const [errors, setErrors] = React.useState({})
    var emailVal = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    var namVal= /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

    


    const validate = () => {
        let isValid=true;
        setErrors({})
        if (!emailVal.test(formData.email)) {
            console.log('no valida')
          setErrors({...errors, email: 'is not valid' });
          isValid=false
        } else {
          setErrors({});
          console.log('good', formData)
          isValid=true
        }

        if(formData.name===undefined){
            setErrors({...errors, name: 'Name is required'})
            isValid=false
        }else if (formData.name.length < 3) {
            setErrors({ ...errors,
              name: 'Name is too short'
            });
            isValid= false
          }else if(!namVal.test(formData.name)){
            setErrors({...errors, name:'Name is invalid'})
            isValid= false
          }
        return isValid
      };

    


const submit = () => { validate() ? navigation.navigate("Contact_R")  : console.log('bad', formData) }

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
                    <FormControl >

                        <FormControl.Label _text={{
                            color: 'primary.50',
                            fontWeight: 'bold'
                        }} marginLeft={2}>
                            Nombre
                        </FormControl.Label>
                        <Input p={2} placeholder="Name" backgroundColor="primary.100"
                            variant="rounded"
                            color="primary.900"
                            InputLeftElement={<Icon as={<MaterialIcons name='person' />} size={5} ml="2" color='primary.200' />} />
                        <FormControl.HelperText>

                        </FormControl.HelperText>
                        <FormControl.ErrorsMessage>Something is wrong.</FormControl.ErrorsMessage>

                    </FormControl>

                    <FormControl >

                        <FormControl.Label _text={{
                            color: 'primary.50',
                            fontWeight: 'bold'
                        }} marginLeft={2} >
                            Apellido
                        </FormControl.Label>
                        <Input p={2} placeholder="Last Name" backgroundColor="primary.100"
                            variant="rounded"
                            color="primary.900"
                            InputLeftElement={<Icon as={<MaterialIcons name='person' />} size={5} ml="2" color='primary.200' />} />
                        <FormControl.HelperText>

                        </FormControl.HelperText>
                        <FormControl.ErrorsMessage>Something is wrong.</FormControl.ErrorsMessage>

                    </FormControl>
                    <FormControl >

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
                            InputLeftElement={<Icon as={<MaterialIcons name='person' />} size={5} ml="2" color='primary.200' />} />
                        <FormControl.HelperText>

                        </FormControl.HelperText>
                        <FormControl.ErrorsMessage>Something is wrong.</FormControl.ErrorsMessage>

                    </FormControl>
                    <FormControl >

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
                        <FormControl.HelperText>

                        </FormControl.HelperText>
                        <FormControl.ErrorsMessage>Something is wrong.</FormControl.ErrorsMessage>

                    </FormControl>
                    <FormControl isRequired isInvalid={'email' in errors}>
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
                            onChangeText={value=>setFormData({...formData, email: value})}
                            />
                        
                        {'email' in errors ?<FormControl.ErrorsMessage >{errors.email}</FormControl.ErrorsMessage>:<FormControl.HelperText>
                            Ingresa un correo valido
                        </FormControl.HelperText>
                        }
                    </FormControl>
                    <FormControl >

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
                            InputLeftElement={<Icon as={<Ionicons name='lock-closed' />} size={5} ml="2" color='primary.200' />} />
                        <FormControl.HelperText>

                        </FormControl.HelperText>
                        <FormControl.ErrorsMessage>Something is wrong.</FormControl.ErrorsMessage>

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
