import React from "react";
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, Icon, Pressable}from 'native-base'
import { MaterialIcons } from "@expo/vector-icons";


// import {LinearGradient} from 'expo-linear-gradient';
// import {TouchableOpacity, View, StyleSheet,} from "react-native-web";

// const styles = StyleSheet.create({
  
//    borderRadius: 100,
//    paddingVertical: 100,
//    marginHorizontal: 100,
//    marginVertical: 10,
//    alignItems: "Center",
//    //elevation: 1
//    alignSelf: 'Center',
//    width: '100%',
//    height:400,
//    fontWeight:'bold',
//     fontSize: "md"

// })


export default function Login(){
    return <Center w="100%" h="100%" bg="primary.800">
    <Box safeArea p="1" py="8" w="100%" maxW="350">
        <Heading size="xl" fontWeight="800" color="black" mt="-12" _dark={{
            color: "primary.50"
          }}>
            Inicio de sesión
        </Heading>
        <Heading size="sm" fontWeight="500" color="black" mt="4" _dark={{
            color: "primary.50"
          }}>
            Inicia sesión con tu cuenta.
        </Heading>

        <VStack space={10} mt="47">
            <FormControl>
                <FormControl.Label _text={{
                      color: "primary.50",
                      fontWeight: '700',
                      fontSize: 'lg'
                }}>Email</FormControl.Label>
                <Input w={{

                }}InputLeftElement={<Icon as={<MaterialIcons name="email" />} size={5} ml="3" color="primary.200" />}
                mt="3" placeholder="hello@gmail.com" color="primary.200" fontSize="sm" fontWeight="400" backgroundColor="primary.100"  borderWidth="2"  borderColor="primary.200" variant="rounded"/>               
            </FormControl>
            
            <FormControl>
                <FormControl.Label _text={{
                     color: "primary.50",
                     fontWeight: '700',
                     fontSize: 'lg'
                }}>Contraseña</FormControl.Label>
                <Input mt="3" placeholder=" Introduce una contraseña" color="primary.200" type="password" fontSize="sm" fontWeight="400" backgroundColor="primary.100" borderWidth="2" borderColor="primary.200"  variant="rounded" />

                <Link _text={{
                    fontSize: "lg",
                    fontWeight: "700",
                    color: "primary.50",
                }} mt="2" alignSelf="flex-end"> Forget Password?
                </Link>
            </FormControl>

            {/* <View style={styles.create}>
                <TouchableOpacity>
                    <LinearGradient
                     start={{x:1, y:-40}}
                     end={{x:10, y:-50}}
                     locations={[0.2, 1]}
        colors={['#807E82', 'red']}
        style={styles.LinearGradient}>
        <Text style={styles.buttonText}>Sign in with Facebook</Text>
      </LinearGradient>
      </TouchableOpacity>

    </View> */}

            
  

            <Button background="primary.200" borderWidth="2" borderColor="primary.200" mt="5" rounded={10} _text={{
                color:"primary.50",
                fontWeight:"700",
                fontSize: "lg"
            }}>
                Inciar sesión
            </Button>
            j
            <HStack mt="-7" color="primary.50" alignItems='center' fontWeight="normal">
                <Text fontSize="sm" >
                ¿No dispones de una cuenta? {" "}
                </Text>
                <Link _text={{
                    color: "primary.50",
                    fontWeight: "bold",
                    fontSize: "sm"
                }}href="#">
                Registrate.
                </Link>
            </HStack>
        </VStack>
    </Box>
</Center>
}


