import React from "react";
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, Center, Checkbox, HStack,}from 'native-base'
import {LinearGradient} from 'expo-linear-gradient';
import {TouchableOpacity, View, StyleSheet,} from "react-native-web";

const styles = StyleSheet.create({
  
   borderRadius: 100,
   paddingVertical: 100,
   marginHorizontal: 100,
   marginVertical: 10,
   alignItems: "Center",
   //elevation: 1
   alignSelf: 'Center',
   width: '100%',
   height:400,
   fontWeight:'bold',
    fontSize: "md"

})


export default function Login(){
    return <Center w="100%" h="100%" bg="primary.800">
    <Box safeArea p="1" py="50" w="100%" maxW="290">
        <Heading size="lg" fontWeight="extrabold" color="Black" _dark={{
            color: "primary.50"
        }}>
            Inicio de sesión
        </Heading>
        <Heading mt="5" color="primary.50" fontWeight="normal" size="xs" _dark={{
        }}>
            Inicia sesión con tu cuenta.
        </Heading>

        <VStack space={10} mt="10">
            <FormControl>
                <FormControl.Label _text={{
                      color: "primary.50",
                      fontWeight: 'bold',
                }}>Email</FormControl.Label>
                <Input mt="3" backgroundColor="primary.100"  borderWidth="2"  borderColor="primary.200" variant="rounded" placeholder="hello@gmail.com"/>               
            </FormControl>
            
            <FormControl >
                <FormControl.Label _text={{
                    color:"primary.50",
                    fontWeight: 'bold'
                }}>Password</FormControl.Label>
                <Input mt="3" type="password" backgroundColor="primary.100" borderColor="primary.200"  variant="outline" placeholder="Introduce una contraseña"/>

                <Link _text={{
                    fontSize: "xs",
                    color: "primary.100",
                    fontWeight: "bold"
                }} mt="4" alignSelf={"flex-end"}>Remember ?</Link>
            </FormControl>

            <View style={styles.create}>
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

    </View>

            
  

            <Button background="primary.200" mt="5"  borderColor="primary.200" _text={{
                color:"primary.50",
                fontWeight:'bold',
                fontSize: "md"

            }}>
                Inciar sesión
            </Button>
            

            


            

        

            <HStack mt="-7" color="primary.50" justifyContent="center" fontWeight="normal" size="xs">
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


