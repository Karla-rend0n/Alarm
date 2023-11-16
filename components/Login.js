import React, {useEffect} from "react";
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, Icon, ScrollView, Pressable } from 'native-base'
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import validator from 'validator';
import { Dimensions } from "react-native";
import {useUser} from './store/user'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function Login() {

    const user = useUser((state)=>state);
    const navigation = useNavigation();
    const [formData, setFormData] = React.useState({})
    const [errorEmail, setErrorsEmail] = React.useState({})
    const [errorPass, setErrorPass] = React.useState({})
    const [isLoading, setIsLoading] = React.useState(false)
    const [dataProfile, setDataProfile] = React.useState({})

    var emailVal = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;



    useEffect(() => {
        const login = async () => {

         try {
             setIsLoading(true);
             let url = 'https://api-alarm.cadsita.net/login?email=' + formData.email + '&password=' + formData.password
             const response = await fetch(url);
             const dataProfile = await response.json();
             
             if (Object.keys(dataProfile).length === 0) {
                setErrorPass({ password: 'El email o el password no corresponden' });
            } else {
                // Cambiar el estado
                user.login(dataProfile);

                navigation.navigate("Home", { data_profile: dataProfile });
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false); // Independientemente del resultado, establece isLoading en false
        }
    };
    if (isLoading) {

        login();
      }
    }, [isLoading, formData.email, formData.password, navigation]);

    const validate = () => {
        let isValid = true;
        setErrorsEmail({})
        setErrorPass({})
        

        if (formData.email === undefined) {
            setErrorsEmail({ ...errorEmail, email: 'El correo es requerido' });
            isValid = false
        } else if (!formData.email || !emailVal.test(formData.email)) {
            setErrorsEmail({ ...errorEmail, email: 'Ingresa un correo electrónico válido' });
            isValid = false
    }
        

        
        if (formData.password === undefined || formData.password.length < 8) {
            setErrorPass({password: 'La contraseña es requerida y debe tener al menos 8 caracteres' })
            isValid = false
        } 

        return isValid;
    };

    const submit = () => {
        if (validate()) {
            setIsLoading(true);

        }
    };


    



    return (
        <ScrollView flex={1} contentContainerStyle={{ flexGrow: 1 }}>
            <Center flex={1} bg={{ // Utilizamos flex para ocupar todo el espacio disponible
                linearGradient: {
                    colors: ['primary.400', 'primary.800'],
                    start: [1, 0],
                    end: [0, 0]
                }
            }}>

                <Box safeArea p="2" py="8" w="100%" maxWidth="350px">

                    <Heading size="xl" color="Black" _dark={{
                        color: "primary.50",
                        fontWeight: 'bold'
                    }}>
                        Inicio de sesión
                    </Heading>
                    <Heading mt="3" color="primary.50" fontWeight='medium' size='xs'>
                        Inicia sesión con tu cuenta.
                    </Heading>



                    <VStack space={windowHeight * 0.05} mt={windowHeight * 0.05}>
                        <FormControl isRequired isInvalid={'email' in errorEmail}>
                            <FormControl.Label _text={{
                                color: "primary.50",
                                fontWeight: '700',
                                fontSize: 'lg'
                            }}>Email</FormControl.Label>
                            <Input
                                width="100%"
                                InputLeftElement={<Icon as={<MaterialIcons name="email" />} size={5} ml="3" color="primary.200" />}
                                onChangeText={value => setFormData({ ...formData, email: value })}
                                mt="3"
                                placeholder="Correo electrónico"
                                color="primary.900"
                                fontSize="sm"
                                fontWeight="bold"
                                backgroundColor="primary.100"
                                variant="rounded"
                            />

                            {'email' in errorEmail ? (<FormControl.ErrorMessage _text={{ color: 'primary.700' }}>{errorEmail.email}</FormControl.ErrorMessage> ): (<FormControl.HelperText>
                                Ingresa un correo electronico
                            </FormControl.HelperText>
                            )}
                        </FormControl>

                        <FormControl isRequired isInvalid={'password' in errorPass}>
                            <FormControl.Label _text={{
                                color: "primary.50",
                                fontWeight: '700',
                                fontSize: 'lg'
                            }}>Contraseña</FormControl.Label>
                            <Input
                                width="100%"
                                mt="3"
                                placeholder="Contraseña"
                                color="primary.900"
                                type="password"
                                onChangeText={value => setFormData({ ...formData, password: value })}
                                fontSize="sm"
                                fontWeight="bold"
                                backgroundColor="primary.100"
                                variant="rounded"
                                InputLeftElement={<Icon as={<Ionicons name='lock-closed' />} size={5} ml="2" color='primary.200' />}
                            />
                            {'password' in errorPass ? (<FormControl.ErrorMessage _text={{ color: 'primary.700' }}>{errorPass.password}</FormControl.ErrorMessage>) : (<FormControl.HelperText>
                                Ingrese letras MAYÚSCULAS o minúsculas, números y caracteres
                            </FormControl.HelperText>
                            )}


                            <Link _text={{
                                fontSize: "sm",
                                fontWeight: "700",
                                color: "primary.50",
                            }} mt="4" alignSelf="flex-end" > Forget Password?
                            </Link>
                        </FormControl>


                    <Button
                        background="primary.200" borderWidth="2" borderColor="primary.200" mt="5" rounded={10} _text={{
                            color: "primary.50",
                            fontWeight: "700",
                            fontSize: "lg"
                        }}  onPress={isLoading ? null : submit} disabled={isLoading}>
                        Iniciar sesión
                    </Button>

                    <HStack mt="5" color="primary.50" alignItems='center' alignSelf='center' fontWeight="normal">
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
        </ScrollView>
    );
}












































// import React from "react";
// import {useEffect} from 'react'
// import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, Icon, ScrollView, Pressable } from 'native-base'
// import { MaterialIcons, Ionicons } from "@expo/vector-icons";
// import { useNavigation } from "@react-navigation/native";
// import validator from 'validator';



// export default function Login() {

//     const navigation = useNavigation();
//     const [formData, setFormData] = React.useState({})
//     const [errors, setErrors] = React.useState({})
//     const [errorEmail, setErrorsEmail] = React.useState({})
//     const [errorPass, setErrorPass] = React.useState({})
//     const [isLoading, setIsLoading] = React.useState(true)
//     const [dataProfile, setDataProfile]  = React.useState({})
    
//     var emailVal = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
//     var dataValid = false

//     // useEffect(() => {
//     //     const getData = async () =>{
//     //         let url = 'https://api-alarm.cadsita.net/login?email=' + formData.email + '&password=' + formData.password
//     //         try{
//     //             console.log(url)
//     //             const response = await fetch(url);
//     //             console.log(response.json())
//     //             setDataProfile(await response.json())
//     //             console.log('json', dataProfile)
//     //             //return dataProfile
//     //         }catch (error) {
//     // //         console.error(error);
//     //         }    
//     // }; getData()
//     // }, [isLoading]);
    
      

//      const login = async () => {
//          try {
//              setIsLoading(true);
//              let url = 'https://api-alarm.cadsita.net/login?email=' + formData.email + '&password=' + formData.password
//              console.log('url', url)
//              const response = await fetch(url)
             
//              setDataProfile(await response.json())
//              const timeout = setTimeout(() => {
//                 console.log('json', dataProfile)
//                 return dataProfile
//               }, 3000);
             
//              //setIsLoading(false);
//              if (Object.keys(dataProfile).length === 0) {
//                  console.log('Object is empty', dataProfile);
//                  setErrorPass({ ...errorPass, password: 'El email o el password no corresponden' })
//                  dataValid = false
//                }
          
//              if (Object.keys(dataProfile).length > 0) {
//                  console.log('Object is NOT empty', dataProfile);
//                  dataValid = true
//                  navigation.navigate("Home", {data_profile: dataProfile})
                
//                }
//              console.log('dataValid', dataValid)
//             // clearTimeout(timeout);

             
//          } catch (error) {
//              console.error(error);
//          }
//      }

//     const validate = () => {
//         let isValid = true;
//         setErrors({})
//         setErrorsEmail({})
//         setErrorPass({})

//         if (formData.email === undefined) {
//             setErrorsEmail({ ...errorEmail, email: 'El email es requerido' });
//             isValid = false
//         } else {
//             if (!emailVal.test(formData.email)) {

//                 setErrorsEmail({ ...errorEmail, email: 'No es valido' });
//                 isValid = false
//             }
//         }
//         if (formData.password === undefined) {
//             setErrorPass({ ...errorPass, password: 'La contraseña es requerida' })
//             isValid = false
//         } else if (!validator.isStrongPassword(formData.password)) {
//             setErrorPass({ ...errorPass, password: 'La contraseña no es lo suficientemente segura' })
//             isValid = false

//         } else if (formData.password.length < 8) {
//             setErrorPass({ ...errorPass, password: 'La contraseña es muy pequeña' })
//             isValid = false
//         }
    
//         setIsLoading(false)
//         // if (Object.keys(dataProfile).length > 0) {
//         //         console.log('Object is NOT empty', dataProfile);
//         //         dataValid = true
//         //     }
//         // if (login() == true){
//         //     isValid = true
//         // }
//         // else if (login() == false){
//         //     setErrorPass({ ...errorPass, password: 'El email o el password no corresponden' })
//         //     isValid = false
//         // }

//         if (isValid){
//             login()
//         } 
        
//         // if (Object.keys(dataProfile).length === 0) {
//         //     console.log('Object is empty', dataProfile);
//         //     dataValid = false
//         //     isValid = false
//         //   }
     
//         // if (Object.keys(dataProfile).length > 0) {
//         //     console.log('Object is NOT empty', dataProfile);
//         //     dataValid = true
            
//         //   }
//         // console.log('dataValid', dataValid)
        
//         // console.log("isValid login", isValid)
//         // return isValid
//     };


//     //const submit = () => { validate() ? navigation.navigate("Home", {data_profile: dataProfile}) : console.log('bad', formData) }
//     const submit = () => { validate() }
//     return <ScrollView w="100%" h="100%">

//         <Center w="100%" h="300%" bg={{
//             linearGradient: {
//                 colors: ['primary.400', 'primary.800'],
//                 start: [1, 0],
//                 end: [0, 0]

//             }
//         }}>
//             <Box safeArea p="2" py="8" w="100%" h="91%" maxW="350px">
//                 <Heading size="xl" color="Black" _dark={{
//                     color: "primary.50",
//                     fontWeight: 'bold'
//                 }} >
//                     Inicio de sesión
//                 </Heading>
//                 <Heading mt="3" color="primary.50" fontWeight='medium' size='xs'>
//                     Inicia sesión con tu cuenta.
//                 </Heading>

//                 <VStack space={6} mt={8}>
//                     <FormControl isRequired isInvalid={'email' in errorEmail}>
//                         <FormControl.Label _text={{
//                             color: "primary.50",
//                             fontWeight: '700',
//                             fontSize: 'lg'
//                         }}>Email</FormControl.Label>
//                         <Input w={{

//                         }} InputLeftElement={<Icon as={<MaterialIcons name="email" />} size={5} ml="3" color="primary.200" />}
//                             onChangeText={value => setFormData({ ...formData, email: value })}
//                             mt="3" placeholder="Correo electrónico" color="primary.900"
//                             fontSize="sm" fontWeight="bold" backgroundColor="primary.100" variant="rounded" />

//                         {'email' in errorEmail ? <FormControl.ErrorMessage _text={{ color: 'primary.700' }}>{errorEmail.email}</FormControl.ErrorMessage> : <FormControl.HelperText>
//                             Ingresa un correo electronico
//                         </FormControl.HelperText>
//                         }

//                     </FormControl>

//                     <FormControl isRequired isInvalid={'password' in errorPass}>
//                         <FormControl.Label _text={{
//                             color: "primary.50",
//                             fontWeight: '700',
//                             fontSize: 'lg'
//                         }}>Contraseña</FormControl.Label>
//                         <Input mt="3" placeholder="Contraseña" color="primary.900" type="password"
//                             onChangeText={value => setFormData({ ...formData, password: value })}

//                             fontSize="sm" fontWeight="bold" backgroundColor="primary.100" variant="rounded"
//                             InputLeftElement={<Icon as={<Ionicons name='lock-closed' />} size={5} ml="2" color='primary.200' />} />
//                         {'password' in errorPass ? <FormControl.ErrorMessage _text={{ color: 'primary.700' }}>{errorPass.password}</FormControl.ErrorMessage> : <FormControl.HelperText>
//                             Ingrese letras MAYÚSCULAS o minúsculas, números y caracteres
//                         </FormControl.HelperText>}




//                         <Link _text={{
//                             fontSize: "sm",
//                             fontWeight: "700",
//                             color: "primary.50",
//                         }} mt="4" > Forget Password?
//                         </Link>
//                     </FormControl>


//                     <Button
//                         background="primary.200" borderWidth="2" borderColor="primary.200" mt="5" rounded={10} _text={{
//                             color: "primary.50",
//                             fontWeight: "700",
//                             fontSize: "lg"
//                         }} onPress={submit}>
//                         Inciar sesión
//                     </Button>

//                     <HStack color="primary.50" alignItems='center'  fontWeight="normal">
//                         <Text fontSize="sm" >
//                             ¿No dispones de una cuenta? {" "}
//                         </Text>
//                         <Link onPress={() => { navigation.navigate("Register") }} _text={{
//                             color: "primary.50",
//                             fontWeight: "bold",
//                             fontSize: "sm"
//                         }} href="#">
//                             Registrate.
//                         </Link>
//                     </HStack>
//                 </VStack>
//             </Box>
//         </Center>
//     </ScrollView>

// }

// //borderWidth="2" borderColor="primary.200"

