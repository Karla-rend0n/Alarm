import React from "react";
import { Center, Box, Heading, Button, Text, TouchableOpacity, ScrollView, useState, Flex, Stack, VStack } from "native-base"
import { Linking } from "react-native"


//export default function Home() {
export default function Home({route}) {

    const showMessage = () => Alert.alert('Button clicked !');
    const {data_profile} = route.params
    const [estadoBoton, setEstadoBoton] = React.useState('Apagado');
    const [tiempoInicioPresionado, setTiempoInicioPresionado] = React.useState(0);
    
    const handlePressIn = () => {
        setTiempoInicioPresionado(Date.now());
    };

    const sendRequest = (status) => {
        console.log('Status', status)
        let profile_contact = data_profile[0].profile_contact
        let contact_phone = '+52' + profile_contact[0].phone
        let contact_name =  profile_contact[0].name + ' ' + profile_contact[0].last_name

        let profile_name = data_profile[0].name + ' ' + data_profile[0].last_name
        console.log('data_profile', profile_name)
        console.log('data_contact', contact_name, contact_phone)


        fetch('https://8hado3nks6.execute-api.us-east-1.amazonaws.com/default/Send-Mqtt-SNS', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: 'SafetyNet', status: status,
                contactNumber: contact_phone,
                contactName: contact_name,
                profileName: profile_name
            }),

        })
            .then(response => response.json())
            .then(json => {
                console.log('Hola', json)
            })
            .catch(error => {
                console.error(error);
            });
    };



    const handlePressOut = () => {
        const tiempoFinPresionado = Date.now();
        const duracionPresionado = tiempoFinPresionado - tiempoInicioPresionado;

        if (duracionPresionado >= 2000 && estadoBoton === 'Apagado') {
            sendRequest('1')
            setEstadoBoton('Encendido');
        } else if (duracionPresionado >= 0 && estadoBoton === 'Encendido') {
            sendRequest('2')
            setEstadoBoton('Apagado');
        }
    };


    const [estadoBotonE, setEstadoBotonE] = React.useState('Apagado');
    const [tiempoInicioPresionadoE, setTiempoInicioPresionadoE] = React.useState(0);

    const handlePressInicio = () => {
        setTiempoInicioPresionadoE(Date.now());
    };

    const handlePressApagado = () => {
        const tiempoFinPresionado = Date.now();
        const duracionPresionado = tiempoFinPresionado - tiempoInicioPresionadoE;

        if (duracionPresionado >= 2000 && estadoBotonE === 'Apagado') {
            sendRequest('3')
            setEstadoBotonE('Encendido');
        } else if (duracionPresionado >= 0 && estadoBotonE === 'Encendido') {
            sendRequest('4')
            setEstadoBotonE('Apagado');
        }
    };





    return (
        <ScrollView w="100%" h="100%">

            <Center w="100%" h="154%" bg={{
                linearGradient: {
                    colors: ['primary.400', 'primary.800'],
                    start: [1, 0],
                    end: [0, 0]

                }
            }}>
                <Box safeArea p="2" py="8" w="100%" h="94%" maxW="350px" >

                    <Heading size="xl" color="Black" _dark={{
                        color: "primary.50",
                        fontWeight: 'bold'
                    }} >
                        Botón de emergencia
                    </Heading>




                    <Heading mt="10" color="primary.50" fontWeight='medium' size='md' >
                        Si vez algo sospechoso presiona el botón.
                    </Heading>

                    <VStack space={10} mt={10}>


                        <Button mt='3' rounded borderRadius="200" width="200" height="200"  bgColor="primary.300" borderWidth="3" borderColor="primary.900" onPressIn={handlePressIn} onPressOut={handlePressOut}>
                            <Button rounded borderRadius="170" width="170" height="170" bgColor="primary.500" borderWidth="4" borderColor="primary.1000" onPressIn={handlePressIn} onPressOut={handlePressOut}>
                                <Text>{estadoBoton}</Text>

                                <Text fontWeight="700">Alarma</Text>

                            </Button>
                        </Button>

                        <Flex direction="row" alignItems="center" >

                            <Heading mt="10" color="primary.50" fontWeight='medium' size='md' >
                                En caso de emergencia presione el botón.
                            </Heading>
                        </Flex>

                        <Button mt='3' rounded borderRadius="200" width="200" height="200"  bgColor="primary.300" borderWidth="3" borderColor="primary.900" onPressIn={handlePressInicio} onPressOut={handlePressApagado}>
                            <Button rounded borderRadius="170" width="170" height="170"  bgColor="primary.600" borderWidth="4" borderColor="primary.1001" onPressIn={handlePressInicio} onPressOut={handlePressApagado}>
                                <Text>{estadoBotonE}</Text>

                                <Text  fontWeight="700">Emergencia</Text>

                            </Button>

                        </Button>

                    </VStack>

                </Box>


            </Center>
        </ScrollView>

    );
}




