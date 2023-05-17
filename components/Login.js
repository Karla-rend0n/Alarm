import React from "react";
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, Icon, ScrollView, Pressable } from 'native-base'
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


export default function Login() {

    const navigation = useNavigation();
    const [formData, setFormData] = React.useState({})
    const [errors, setErrors] = React.useState({})
    const [errorEmail, setErrorsEmail] = React.useState({})
    const [errorPass, setErrorPass] = React.useState({})
    var emailVal = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    var pattern = new RegExp("^(?=.[a-z])(?=.[A-Z])(?=.\\d)(?=.[-+_!@#$%^&*.,?]).+$")


    const validate = () => {
        let isValid = true;
        setErrors({})
        setErrorsEmail({})
        setErrorPass({})
        if (formData.email === undefined) {
            setErrorsEmail({ ...errorEmail, email: 'El email es requerido' });
            isValid = false
        } else {
            if (!emailVal.test(formData.email)) {

                setErrorsEmail({ ...errorEmail, email: 'is not valid' });
                isValid = false
            }
        }

        if (!formData.pass || formData.pass.length < 8) {
            setErrorPass({ ...errorPass, pass: 'Password is required' })
            isValid = false
        } else if (!pattern.test(formData.pass)) {

            setErrors({
                ...errors,
                pass: 'is not valid'
            });
            isValid = false
        }
        return isValid
    };




    const submit = () => { validate() ? console.log('good', formData) : console.log('bad', formData) }

    return <Center w="100%" h="100%" bg={{
        linearGradient: {
            colors: ['primary.400', 'primary.800'],
            start: [1, 0],
            end: [0, 0]

        }
    }}>
        <Box safeArea p="2" py="8" w="90%" maxW="290">
            <Heading size="lg" color="Black" _dark={{
                color: "primary.50",
                fontWeight: 'bold'
            }} >
                Inicio de sesión
            </Heading>
            <Heading mt="1" color="primary.50" fontWeight='medium' size='xs'>
                Inicia sesión con tu cuenta.
            </Heading>

            <VStack space={3} mt={5}>
                <FormControl isRequired isInvalid={'email' in errorEmail}>
                    <FormControl.Label _text={{
                        color: "primary.50",
                        fontWeight: '700',
                        fontSize: 'lg'
                    }}>Email</FormControl.Label>
                    <Input w={{

                    }} InputLeftElement={<Icon as={<MaterialIcons name="email" />} size={5} ml="3" color="primary.200" />}
                        onChangeText={value => setFormData({ ...formData, email: value })}
                        mt="3" placeholder="hello@gmail.com" color="primary.900"
                        fontSize="sm" fontWeight="bold" backgroundColor="primary.100" variant="rounded" />

                    {'email' in errorEmail ? <FormControl.ErrorMessage _text={{ color: 'primary.700' }}>{errorEmail.email}</FormControl.ErrorMessage> : <FormControl.HelperText>
                        Ingresa un correo electronico
                    </FormControl.HelperText>
                    }

                </FormControl>

                <FormControl isRequired isInvalid={'pass' in errorPass}>
                    <FormControl.Label _text={{
                        color: "primary.50",
                        fontWeight: '700',
                        fontSize: 'lg'
                    }}>Contraseña</FormControl.Label>
                    <Input mt="3" placeholder=" Introduce una contraseña" color="primary.900" type="password"
                        onChangeText={value => setFormData({ ...formData, pass: value })}

                        fontSize="sm" fontWeight="bold" backgroundColor="primary.100" variant="rounded"
                        InputLeftElement={<Icon as={<Ionicons name='lock-closed' />} size={5} ml="2" color='primary.200' />} />

                    {'pass' in errorPass ? <FormControl.ErrorMessage _text={{ color: 'primary.700' }}>{errorPass.pass}</FormControl.ErrorMessage> : <FormControl.HelperText>

                    </FormControl.HelperText>}



                    <Link _text={{
                        fontSize: "sm",
                        fontWeight: "700",
                        color: "primary.50",
                    }} mt="2" alignSelf="flex-end"> Forget Password?
                    </Link>
                </FormControl>


                <Button
                    // onPress={submit}
                    onPress={() => { navigation.navigate("Home") }}
                    background="primary.200" borderWidth="2" borderColor="primary.200" mt="5" rounded={10} _text={{
                        color: "primary.50",
                        fontWeight: "700",
                        fontSize: "lg"
                    }}>
                    Inciar sesión
                </Button>

                <HStack color="primary.50" alignItems='center' fontWeight="normal">
                    <Text fontSize="sm" >
                        ¿No dispones de una cuenta? {" "}
                    </Text>
                    <Link onPress={() => { navigation.navigate("Register") }} _text={{
                        color: "primary.50",
                        fontWeight: "bold",
                        fontSize: "sm"
                    }} href="#">
                        Registrate.
                    </Link>
                </HStack>
            </VStack>
        </Box>
    </Center>

}

//borderWidth="2" borderColor="primary.200"

