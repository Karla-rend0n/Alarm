import React from "react";
import { Center, Box, Heading, Button, Text, TouchableOpacity, ScrollView, useState, Flex, Stack } from "native-base"


export default function Start() {
    const showMessage = () => Alert.alert('Button clicked !');

    const [estadoBoton, setEstadoBoton] = React.useState('Apagado');
    const [tiempoInicioPresionado, setTiempoInicioPresionado] = React.useState(0);

    const handlePressIn = () => {
        setTiempoInicioPresionado(Date.now());
    };

    const handlePressOut = () => {
        const tiempoFinPresionado = Date.now();
        const duracionPresionado = tiempoFinPresionado - tiempoInicioPresionado;

        if (duracionPresionado >= 2000 && estadoBoton === 'Apagado') {
            setEstadoBoton('Encendido');
        } else if (duracionPresionado >= 0 && estadoBoton === 'Encendido') {
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
            setEstadoBotonE('Encendido');
        } else if (duracionPresionado >= 0 && estadoBotonE === 'Encendido') {
            setEstadoBotonE('Apagado');
        }
    };




    return (


        <Center alignContent='center' w="100%" h="100%" bg={{
            linearGradient: {
                colors: ['primary.400', 'primary.800'],
                start: [1, 0],
                end: [0, 0]

            }
        }}>


            <Stack space={2} w="75%" maxW="350px" mx="auto">

                <Flex alignItems="center" >
                    <Heading size="lg" color="Black" _dark={{
                        color: "primary.50",
                        fontWeight: 'bold'
                    }}>
                        Botón de emergencia
                    </Heading>
                </Flex>
                <Flex direction="row" alignItems="center" >

                    <Heading mt="5" color="primary.50" fontWeight='medium' size='xs' >
                        Si vez algo sospechoso presiona el botón.
                    </Heading>
                </Flex>



                <Button mt='5' rounded borderRadius="200" width="200" height="200" alignSelf="center" bgColor="primary.300" borderWidth="3" borderColor="primary.900" onPressIn={handlePressIn} onPressOut={handlePressOut}>
                    <Button rounded borderRadius="170" width="170" height="170" alignSelf="center" bgColor="primary.500" borderWidth="4" borderColor="primary.1000" onPressIn={handlePressIn} onPressOut={handlePressOut}>
                        <Text alignSelf="center">{estadoBoton}</Text>

                        <Text alignSelf="center" fontWeight="700">Alarma</Text>

                    </Button>
                </Button>

                <Flex direction="row" alignItems="center" >

                    <Heading mt="9" color="primary.50" fontWeight='medium' size='xs' >
                        En caso de emergencia presione el botón.
                    </Heading>
                </Flex>

                <Button mt='5' rounded borderRadius="200" width="200" height="200" alignSelf="center" bgColor="primary.300" borderWidth="3" borderColor="primary.900" onPressIn={handlePressInicio} onPressOut={handlePressApagado}>
                    <Button rounded borderRadius="170" width="170" height="170" alignSelf="center" bgColor="primary.600" borderWidth="4" borderColor="primary.1001" onPressIn={handlePressInicio} onPressOut={handlePressApagado}>
                        <Text alignSelf="center">{estadoBotonE}</Text>

                        <Text alignSelf="center" fontWeight="700">Emergencia</Text>

                    </Button>

                </Button>

            </Stack>


        </Center>

    );
}




