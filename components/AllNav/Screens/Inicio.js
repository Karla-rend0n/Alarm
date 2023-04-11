import React from "react";
import {Center, Box, Heading, Button, Text, TouchableOpacity} from "native-base"


export default function Inicio(){
    const showMessage = () => Alert.alert('Button clicked !');

    return (

        <Center w="100%" h="100%" bg="primary.800">
        <Box safeArea p="1" py="8" w="100%" maxW="350">
        <Heading size="2xl" fontWeight="700"  color="Black" _dark={{
            color: "primary.50"
        }}>
            Botón de emergencia
        </Heading>
        <Heading mt="10" color="primary.50" fontWeight="500" size="lg" _dark={{
        }}>
            Si vez algo sospechoso presiona el botón.
        </Heading>

        <Button  rounded  borderRadius="200" width="200" height="200" alignSelf="center" bgColor="primary.300" borderWidth="3"  borderColor="primary.900">
        <Button  rounded  borderRadius="170" width="170" height="170" alignSelf="center" bgColor="primary.500" borderWidth="4"  borderColor="primary.1000">
        <Text alignSelf="center" fontWeight="700">Alarma</Text>

        </Button>    
    </Button>

        <Heading mt="10" color="primary.50" fontWeight="500" size="lg" _dark={{
        }}>
            En caso de emergencia presione el botón.
        </Heading>

                
        <Button  rounded  borderRadius="200" width="200" height="200" alignSelf="center" bgColor="primary.300" borderWidth="3"  borderColor="primary.900">
        <Button  rounded  borderRadius="170" width="170" height="170" alignSelf="center" bgColor="primary.600" borderWidth="4"  borderColor="primary.1001">
        <Text alignSelf="center" fontWeight="700">Emergencia</Text>

        </Button>


    
    </Button>
    
      






        

        </Box>

</Center>
   
    );
}
