import { useNavigation } from "@react-navigation/native";
import { AlertDialog, Box, Button, Center, Heading, VStack } from 'native-base';
import * as React from 'react';

export default function Profile() {
    const navigation = useNavigation();
    const [formData, setFormData] = React.useState({})
    const [isOpen, setIsOpen] = React.useState(false);
    const cancelRef = React.useRef(null);

    const validate = () => {
        let isValid = true;
        return isValid
    };

    const submit = () => { validate() ? setIsOpen(!isOpen) : console.log('bad', formData) }
    const onClose = () => setIsOpen(false);

    const handleCloseOpen = () => {
        setIsOpen(false);
        navigation.navigate("Start")
    }

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
                Configuración
            </Heading>

            <VStack space={3} mt={5}>
                <Button background="primary.300" mt="6" borderWidth="3" borderColor="primary.200" onPress={() => navigation.navigate("ViewProfile")} _text={{
                    color: "primary.900",
                    fontWeight: "700",
                    fontSize: "lg"
                }} rounded='full'>
                    Ver Perfil
                </Button>

                <Button background="primary.300" mt="6" borderWidth="3" borderColor="primary.200" onPress={() => navigation.navigate("Edit_P")} _text={{
                    color: "primary.900",
                    fontWeight: "700",
                    fontSize: "lg"
                }} rounded='full'>
                    Editar Perfil
                </Button>

                <Button background="primary.300" mt="6" borderWidth="3" borderColor="primary.200" onPress={() => navigation.navigate("Address")} _text={{
                    color: "primary.900",
                    fontWeight: "700",
                    fontSize: "lg"
                }} rounded='full'>
                    Ver Dirección
                </Button>

                <Button background="primary.300" mt="6" borderWidth="3" borderColor="primary.200" onPress={submit} _text={{
                    color: "primary.900",
                    fontWeight: "700",
                    fontSize: "lg"
                }} rounded='full'>
                    Cerrar Sesión
                </Button>

                <AlertDialog
                    leastDestructiveRef={cancelRef}
                    isOpen={isOpen}
                    onClose={onClose}
                >
                    <AlertDialog.Content>
                        <AlertDialog.CloseButton />
                        <AlertDialog.Header>Cerrar Sesión</AlertDialog.Header>

                        <AlertDialog.Body>
                            ¿Estás seguro de que quieres cerrar la sesión?
                        </AlertDialog.Body>

                        <AlertDialog.Footer>
                            <Button.Group space={2}>
                                <Button
                                    variant="unstyled"
                                    colorScheme="coolGray"
                                    onPress={onClose}
                                    ref={cancelRef}
                                >
                                    Cancelar
                                </Button>

                                <Button colorScheme="danger" onPress={handleCloseOpen}>
                                    Salir
                                </Button>
                            </Button.Group>
                        </AlertDialog.Footer>
                    </AlertDialog.Content>
                </AlertDialog>
            </VStack>
        </Box>
    </Center>
};
