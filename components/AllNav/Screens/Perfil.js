import React from "react";
import {Center, Box,  Avatar,  VStack, Input, FormControl, Button, Stack} from "native-base"

export default function Perfil(){
    return <Center h="100%">
    <VStack space={2} alignItems="center">
    <Avatar m="1"  bg="primary.500" alignContent="center"  size="2xl" source={{
        uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        }}>

        </Avatar>

    </VStack>   
        
        

    <Box bg="primary.800" w="100%" h="82%" alignItems="center">
    <Stack space={4} w="75%" maxW="350px" mx="auto" m="10">

<Button background="primary.300" w="120" h="35"   mt="5"  _text={{
            color:"primary.900",
            fontWeight:'bold',
            fontSize: "md"
        }}>
            Editar
        </Button>

        <FormControl>
        <FormControl.Label _text={{
                  color: "primary.50",
                  fontWeight: '700',
                  fontSize: 'lg'
            }}>Tu correo</FormControl.Label>
            <Input mt="3" placeholder="fatima13@gmail.com" color="primary.200" fontSize="sm" fontWeight="400" backgroundColor="primary.100"  borderWidth="2"  borderColor="primary.200" variant="rounded"/>               
        </FormControl>
        
        <FormControl>
            <FormControl.Label _text={{
                 color: "primary.50",
                 fontWeight: '700',
                 fontSize: 'lg'
            }}>Contraseña</FormControl.Label>
            <Input mt="3" placeholder="************" color="primary.200" type="password" fontSize="sm" fontWeight="400" backgroundColor="primary.100" borderWidth="2" borderColor="primary.200"  variant="rounded" />
            </FormControl>

            <FormControl>
        <FormControl.Label _text={{
                  color: "primary.50",
                  fontWeight: '700',
                  fontSize: 'lg'
            }}>Teléfono</FormControl.Label>
            <Input mt="3" placeholder="449-567-00-98" color="primary.200" fontSize="sm" fontWeight="400" backgroundColor="primary.100"  borderWidth="2"  borderColor="primary.200" variant="rounded"/>               
        </FormControl>

        <FormControl>
        <FormControl.Label _text={{
                  color: "primary.50",
                  fontWeight: '700',
                  fontSize: 'lg'
            }}>Edad</FormControl.Label>
            <Input mt="3" placeholder="25" color="primary.200" fontSize="sm" fontWeight="400" backgroundColor="primary.100"  borderWidth="2"  borderColor="primary.200" variant="rounded"/>               
        </FormControl>


        <Button background="primary.300"  mt="5" rounded={25} _text={{
            color:"primary.900",
            fontWeight:"400",
            fontSize: "xl"
        }}>
            Dirección
        </Button>
        
        
        </Stack>
        </Box>

    </Center>



}

        
   