import * as React from "react";
import {
  Box,
  Center,
  HStack,
  Heading,
  Image,
  ScrollView,
  VStack,
  Text,
  Circle,
  Pressable,
  Button,
  Icon,
  AlertDialog,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function C_Information() {
  const navigation = useNavigation();

  const [formData, setFormData] = React.useState({})


  const validate = () => {
    let isValid = true;

    return isValid
  };


  const submit = () => { validate() ? setIsOpen(!isOpen) : console.log('bad', formData) }

  const [isOpen, setIsOpen] = React.useState(false);

  const onClose = () => setIsOpen(false);

  const cancelRef = React.useRef(null);

  const handleCloseOpen = () => {
    setIsOpen(false);
    navigation.navigate("Contacts")
  }










  return (
    <ScrollView w="100%" h="100%">
      <Center
        w="100%"
        h="300%"
        bg={{
          linearGradient: {
            colors: ["primary.400", "primary.800"],
            start: [1, 0],
            end: [0, 0],
          },
        }}
      >
        <Box safeArea p="2" py="8" w="100%" h="100%" maxW="350px" >
          <VStack space={6} mt={8}>
            <Box rounded="xl">
              <Pressable>
                {({ isHovered, isPressed }) => {
                  return (
                    <Box
                      bg={
                        isPressed
                          ? "primary.100"
                          : isHovered
                            ? "primary.100"
                            : "primary.300"
                      }
                      style={{
                        transform: [
                          {
                            scale: isPressed ? 0.96 : 1,
                          },
                        ],
                      }}
                      p="5"
                      rounded="8"
                      shadow={3}
                      borderWidth="3"
                      borderColor="primary.200"
                    >
                      <VStack space={3} alignItems="center">
                        <Image
                          width="50"
                          height="50"
                          source={require("../../../assets/IconoPerfil.png")}
                        />
                        <HStack alignItems="center" space={10}>
                          <Text color="primary.900" mt="1" fontWeight="bold">
                            Mamá
                          </Text>
                          <Text color="primary.900" mt="1" fontWeight="bold">
                            María
                          </Text>

                          <Text color="primary.900" mt="1" fontWeight="bold">
                            Herrera
                          </Text>
                        </HStack>
                        <Text color="primary.900" mt="1" fontWeight="bold">
                          449-456-98-78
                        </Text>
                      </VStack>
                    </Box>
                  );
                }}
              </Pressable>

              <HStack mt="3/4" space={20} alignSelf="center" marginLeft="4">
                <Button
                  backgroundColor="primary.200"
                  size="lg"
                  borderWidth="2"
                  borderColor="primary.200"
                  onPress={() => {
                    navigation.navigate("Edit");
                  }}
                >
                  Editar
                </Button>
                <Button
                  backgroundColor="primary.200"
                  size="lg"
                  borderWidth="2"
                  borderColor="primary.200"
                  onPress={() => setIsOpen(!isOpen)}
                >
                  Eliminar
                </Button>
              </HStack>

              <AlertDialog
                leastDestructiveRef={cancelRef}
                isOpen={isOpen}
                onClose={onClose}
              >
                <AlertDialog.Content>
                  <AlertDialog.CloseButton />
                  <AlertDialog.Header>Eliminar Contacto</AlertDialog.Header>
                  <AlertDialog.Body>
                    ¿Estás seguro de que quieres eliminar este contacto?
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
                        Eliminar
                      </Button>
                    </Button.Group>
                  </AlertDialog.Footer>
                </AlertDialog.Content>
              </AlertDialog>

              {/* <HStack mt='3/4' space={20} marginLeft='4'>
                        <Button size='lg' bg='primary.200' onPress={() => {navigation.navigate("Edit")}}>Editar</Button>
                        <Button size='lg' bg='primary.200'>Eliminar</Button>
                    </HStack> */}
            </Box>
          </VStack>
        </Box>
      </Center>
    </ScrollView>

  );
}
