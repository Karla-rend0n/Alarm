import React from "react";
import {Center, Box, Heading, Button, Text, TouchableOpacity, ScrollView} from "native-base"


export default function Start(){
    const showMessage = () => Alert.alert('Button clicked !');

    return (
        <ScrollView w="100%" h="100%">

        <Center w="100%" h="100%" bg={{
            linearGradient: {
                colors: ['primary.400', 'primary.800'],
                start: [1, 0],
                end: [0, 0]

            }
        }}>
        <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading size="lg" marginTop='0.5' marginBottom='5' color="Black" _dark={{
                    color: "primary.50",
                    fontWeight: 'bold'
                }}>
            Botón de emergencia
        </Heading>
        <Heading mt="1" marginLeft='2' color="primary.50" fontWeight='medium' size='xs' >
            Si vez algo sospechoso presiona el botón.
        </Heading>

        <Button mt='5' rounded  borderRadius="200" width="200" height="200" alignSelf="center" bgColor="primary.300" borderWidth="3"  borderColor="primary.900">
        <Button  rounded  borderRadius="170" width="170" height="170" alignSelf="center" bgColor="primary.500" borderWidth="4"  borderColor="primary.1000">
        <Text alignSelf="center" fontWeight="700">Alarma</Text>

        </Button>    
    </Button>

        <Heading mt="10" marginLeft='2' color="primary.50" fontWeight='medium' size='xs' >
            En caso de emergencia presione el botón.
        </Heading>

                
        <Button mt='5' rounded  borderRadius="200" width="200" height="200" alignSelf="center" bgColor="primary.300" borderWidth="3"  borderColor="primary.900">
        <Button  rounded  borderRadius="170" width="170" height="170" alignSelf="center" bgColor="primary.600" borderWidth="4"  borderColor="primary.1001">
        <Text alignSelf="center" fontWeight="700">Emergencia</Text>

        </Button>

    </Button>
    
        </Box>

</Center>
</ScrollView>
   
    );
}
