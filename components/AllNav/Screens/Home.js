import React from "react";
import { Center, Box, Heading, Button, Text, TouchableOpacity, ScrollView, useState, Flex, Stack, VStack } from "native-base"
import { Linking } from "react-native"
import { Dimensions } from "react-native";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



//export default function Home() {
export default function Home({ route }) {

    const showMessage = () => Alert.alert('Button clicked !');
    const { data_profile } = route.params || {}; // Asegúrate de que data_profile sea un objeto vacío si no está presente
    // const { data_profile } = route.params
    const [estadoBoton, setEstadoBoton] = React.useState('Apagado');
    const [tiempoInicioPresionado, setTiempoInicioPresionado] = React.useState(0);

    const handlePressIn = () => {
        setTiempoInicioPresionado(Date.now());
    };

    const sendRequest = async (status) => {
        try {
            console.log('Status', status)
            let profile_contact = data_profile[0].profile_contact
            let contact_phone = '+52' + profile_contact[0].phone
            let contact_name = profile_contact[0].name + ' ' + profile_contact[0].last_name

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
        } catch (error) {
            console.error(error);
        }
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
        <ScrollView flex={1} contentContainerStyle={{ flexGrow: 1 }}>
            <Center flex={1} bg={{ // Utilizamos flex para ocupar todo el espacio disponible
                linearGradient: {
                    colors: ['primary.400', 'primary.800'],
                    start: [1, 0],
                    end: [0, 0]
                }
            }}>
                <Box safeArea p="2" py="8" w="100%" maxWidth={windowWidth * 0.8} >

                    <Heading size="xl" color="Black" _dark={{
                        color: "primary.50",
                        fontWeight: 'bold'
                    }}>
                        Botón de emergencia
                    </Heading>

                    <VStack space={windowHeight * 0.04} mt={windowHeight * 0.04}>


                        <Heading mt="3" color="primary.50" fontWeight='medium' size='md'>
                            Si vez algo sospechoso presiona el botón.
                        </Heading>



                        <Button mt='3' rounded borderRadius="200" width="200" height="200" bgColor="primary.300" borderWidth="3" borderColor="primary.900" onPressIn={handlePressIn} onPressOut={handlePressOut} alignItems={'center'} alignSelf={'center'}>
                            <Button rounded borderRadius="170" width="170" height="170" bgColor="primary.500" borderWidth="4" borderColor="primary.1000" onPressIn={handlePressIn} onPressOut={handlePressOut} alignItems={'center'} alignSelf={'center'}>
                                <Text alignItems={'center'} alignSelf={'center'}>{estadoBoton}</Text>

                                <Text fontWeight="700">Alarma</Text>

                            </Button>
                        </Button>

                        <Flex direction="row" alignItems="center" >

                            <Heading mt={windowHeight * 0.03} color="primary.50" fontWeight='medium' size='md' >
                                En caso de emergencia presione el botón.
                            </Heading>
                        </Flex>

                        <Button mt='3' rounded borderRadius="200" width="200" height="200" bgColor="primary.300" borderWidth="3" borderColor="primary.900" onPressIn={handlePressInicio} onPressOut={handlePressApagado} alignItems={'center'} alignSelf={'center'}>
                            <Button rounded borderRadius="170" width="170" height="170" bgColor="primary.600" borderWidth="4" borderColor="primary.1001" onPressIn={handlePressInicio} onPressOut={handlePressApagado} alignItems={'center'} alignSelf={'center'}>
                                <Text alignItems={'center'} alignSelf={'center'}>{estadoBotonE}</Text>

                                <Text fontWeight="700">Emergencia</Text>

                            </Button>

                        </Button>

                    </VStack>

                </Box>


            </Center>
        </ScrollView>

    );
}




