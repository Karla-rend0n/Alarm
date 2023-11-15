import React, { useState, useEffect } from 'react';
import { ScrollView, Center, Box, HStack, Heading, VStack, Text, Circle, Button, Icon, Pressable, Image } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ViewContact({ route }) {
  const navigation = useNavigation();
  const { data_register, data_contact } = route.params;

  const [contacts, setContacts] = useState([]);
  const resetForm = () => {
    setContacts((prevContacts) => [...prevContacts, data_contact]);
  };


  // useEffect para actualizar la lista de contactos cuando se agrega uno nuevo
  useEffect(() => {
    if (data_contact) {
      setContacts((prevContacts) => [...prevContacts, data_contact]);
    }
  }, [data_contact]);

  return (
    <ScrollView flex={1} contentContainerStyle={{ flexGrow: 1 }}>
      <Center flex={1} bg={{
        linearGradient: {
          colors: ['primary.400', 'primary.800'],
          start: [1, 0],
          end: [0, 0],
        },
      }}>
        <Box safeArea p="2" py="8" width="100%" maxWidth="350px">
          <Heading size="xl" color="Black" _dark={{
            color: 'primary.50',
            fontWeight: 'bold',
          }} mt={windowHeight * 0.05}>
            Contactos
          </Heading>

          <VStack space={windowHeight * 0.05} mt={windowHeight * 0.05}>
            {/* Botón para agregar un nuevo contacto */}
            <Button
              alignSelf="flex-end"
              marginLeft="auto"
              mt={windowHeight * 0.03}
              width={windowWidth * 0.14}
              height={windowWidth * 0.14}
              bgColor="primary.200"
              borderWidth="3"
              borderColor="primary.200"
              rounded="full"
              leftIcon={<Icon as={AntDesign} name="plus" />}
              onPress={() => {
                navigation.navigate('Contact_R', { data_register, resetForm });
                resetForm(); // Aquí puedes llamar resetForm después de navegar
              }}
            />

            {/* Lista de contactos agregados */}
            {contacts.map((contact, index) => (
              <Box
                key={index}
                bg="primary.300"
                p={windowWidth * 0.05}
                rounded="8"
                shadow={3}
                borderWidth="3"
                borderColor="primary.200"
              >
                <HStack alignItems="center">
                  <Image
                        width={windowWidth * 0.16}
                        height={windowWidth * 0.16}
                        mt={windowHeight * 0.05}
                        mb={windowHeight * 0.05}
                        ml={windowWidth * 0.05}
                        mr={windowWidth * 0.05}
                        source={require('../../../assets/IconoPerfil.png')}
                      />
                  <Text color="primary.900" mt={windowHeight * 0.03} fontWeight="bold">
                    {contact.name} {contact.last_name}
                  </Text>
                </HStack>
              </Box>
            ))}

            <Button
              background="primary.200"
              borderWidth="2"
              borderColor="primary.200"
              mt={windowHeight * 0.08}
              rounded={10}
              _text={{
                color: 'primary.50',
                fontWeight: '700',
                fontSize: 'lg',
              }}
              onPress={() => {
                navigation.navigate('Address_R', { data_contact: contacts, data_register });
              }}
            >
              Siguiente
            </Button>
          </VStack>

          {/* Indicadores de página */}
          <HStack space={3} marginTop="8" alignSelf="center">
            <Circle size="10px" bg="primary.200"></Circle>
            <Circle size="10px" bg="primary.50"></Circle>
            <Circle size="10px" bg="primary.200"></Circle>
          </HStack>
        </Box>
      </Center>
    </ScrollView>
  );
}