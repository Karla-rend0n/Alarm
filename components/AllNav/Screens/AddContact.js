import * as React from "react";
import {
  Box,
  Center,
  Heading,
  ScrollView,
  VStack,
  FormControl,
  Input,
  Icon,
  HStack,
  Button,
  Circle,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function AddContact() {
  const navigation = useNavigation();
  const [formData, setFormData] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [errorkinship, setErrorkinship] = React.useState({});
  const [errorLastname, setErrorLastname] = React.useState({});
  const [errorPhone, setErrorPhone] = React.useState({});
  var namVal = /^[A-Za-z]+$/i;
  var number = /^\+?(52\s?)?1?\d{3}\s?\d{3}\s?\d{4}$/

  const validate = () => {
    let isValid = true;
    setErrorkinship({});
    setErrors({});
    setErrorPhone({});
    setErrorLastname({});
    if (formData.kinship === undefined) {
      setErrorkinship({ ...errorkinship, kinship: "El parentesco es necesario" });
      isValid = false;
    } else {
      if (formData.kinship.length <= 3) {
        setErrorkinship({
          ...errorkinship,
          kinship: "El parentesco es muy corto",
        });
        console.log("valida");
      } else {
        if (!namVal.test(formData.kinship)) {
          setErrorkinship({
            ...errorkinship,
            kinship: "Ingrese solo letras",
          });
        }
      }
    }

    if (formData.name === undefined) {
      setErrors({ ...errors, name: 'El nombre es requerido' });
      isValid = false;
    } else {
      if (formData.name.length <= 3) {
        setErrors({
          ...errors,
          name: "El nombre es muy corto",
        });
        isValid = false;
        console.log("valida");
      } else {
        if (!namVal.test(formData.name)) {
          setErrors({
            ...errors,
            name: "Ingrese solo letras",
          });
        }
      }
    }

    if (formData.last_name === undefined) {
      setErrorLastname({ ...errorLastname, last_name: "El apellido es requerido" });
      isValid = false;
    } else {
      if (formData.last_name.length <= 3) {
        setErrorLastname({
          ...errorLastname,
          last_name: "El apellido es muy corto",
        });
        console.log("valida");
      } else {
        if (!namVal.test(formData.last_name)) {
          setErrorLastname({
            ...errorLastname,
            last_name: "Ingrese solo letras",
          });
        }
      }
    }

    if (formData.phone === undefined) {
      setErrorPhone({ ...errorPhone, phone: "El telefono es requerido" });
      isValid = false;
    } else if (!number.test(formData.phone)) {
      setErrorPhone({ ...errorPhone, phone: "Solo necesito 10 digitos" });
      isValid = false;
    }

    return isValid;
  };

  const submit = () => {
    validate() ? navigation.navigate("Contacts") : console.log("bad", formData);
  };

  return (
    <ScrollView flex={1} contentContainerStyle={{ flexGrow: 1 }}>
      <Center flex={1} bg={{
        linearGradient: {
          colors: ['primary.400', 'primary.800'],
          start: [1, 0],
          end: [0, 0]
        }
      }}>
        <Box safeArea p="2" py="8" width="100%" maxWidth="350px">

          <Heading size="xl" color="Black" _dark={{
            color: "primary.50",
            fontWeight: 'bold'
          }} mt={windowHeight * 0.05}>
            Completa los siguientes campos.
          </Heading>


          <VStack space={windowHeight * 0.05} mt={windowHeight * 0.05}>
            <FormControl isRequired isInvalid={"kinship" in errorkinship}>
              <FormControl.Label
                _text={{
                  color: "primary.50",
                  fontWeight: "bold",
                  fontSize: 'lg'

                }}>
                Parentesco
              </FormControl.Label>

              <Input
                width="100%"
                InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="primary.200" />}
                onChangeText={(value) => setFormData({ ...formData, kinship: value })}
                mt="3"
                placeholder="Ingrese el parentesco"
                color="primary.900"
                fontSize="sm"
                fontWeight="bold"
                backgroundColor="primary.100"
                variant="rounded"
              />

              {"kinship" in errorkinship ? (
                <FormControl.ErrorMessage _text={{ color: "primary.700" }}>
                  {errorkinship.kinship}
                </FormControl.ErrorMessage>
              ) : (
                <FormControl.HelperText>Ingrese que tipo de relacion tiene con la persona</FormControl.HelperText>
              )}
            </FormControl>


            <FormControl isRequired isInvalid={"name" in errors}>
              <FormControl.Label
                _text={{
                  color: "primary.50",
                  fontWeight: "bold",
                  fontSize: 'lg'

                }}>
                Nombre
              </FormControl.Label>

              <Input
                width="100%"
                InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="primary.200" />}
                onChangeText={(value) => setFormData({ ...formData, name: value })}
                mt="3"
                placeholder="Ingrese su nombre"
                color="primary.900"
                fontSize="sm"
                fontWeight="bold"
                backgroundColor="primary.100"
                variant="rounded"
              />


              {"name" in errors ? (
                <FormControl.ErrorMessage _text={{ color: "primary.700" }}>
                  {errors.name}
                </FormControl.ErrorMessage>
              ) : (
                <FormControl.HelperText>Ingrese su nombre</FormControl.HelperText>
              )}
            </FormControl>



            <FormControl isRequired isInvalid={"last_name" in errorLastname}>
              <FormControl.Label
                _text={{
                  color: "primary.50",
                  fontWeight: "bold",
                  fontSize: 'lg'

                }}>
                Apellidos
              </FormControl.Label>

              <Input
                width="100%"
                InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="primary.200" />}
                onChangeText={(value) => setFormData({ ...formData, last_name: value })}
                mt="3"
                placeholder="Ingrese sus apellidos"
                color="primary.900"
                fontSize="sm"
                fontWeight="bold"
                backgroundColor="primary.100"
                variant="rounded"
              />



              {"last_name" in errorLastname ? (
                <FormControl.ErrorMessage _text={{ color: "primary.700" }}>
                  {errorLastname.last_name}
                </FormControl.ErrorMessage>
              ) : (
                <FormControl.HelperText>Solo ingrese sus apellidos</FormControl.HelperText>
              )}
            </FormControl>




            <FormControl isRequired isInvalid={"phone" in errorPhone}>
              <FormControl.Label
                _text={{
                  color: "primary.50",
                  fontWeight: "bold",
                  fontSize: 'lg'
                }}>
                Teléfono
              </FormControl.Label>

              <Input
                width="100%"
                InputLeftElement={<Icon as={<MaterialIcons name="phone" />} size={5} ml="2" color="primary.200" />}
                onChangeText={(value) => setFormData({ ...formData, phone: value })}
                mt="3"
                placeholder="+52"
                color="primary.900"
                fontSize="sm"
                fontWeight="bold"
                backgroundColor="primary.100"
                variant="rounded"
              />

              {"phone" in errorPhone ? (
                <FormControl.ErrorMessage _text={{ color: "primary.700" }}>
                  {errorPhone.phone}
                </FormControl.ErrorMessage>
              ) : (
                <FormControl.HelperText>Ingrese su número de teléfono</FormControl.HelperText>
              )}
            </FormControl>


            <Button
              background="primary.200" borderWidth="2" borderColor="primary.200" mt="5" rounded={10} _text={{
                color: "primary.50",
                fontWeight: "700",
                fontSize: "lg"
              }} onPress={submit}>
              Guardar
            </Button>
          </VStack>
        </Box>
      </Center >
    </ScrollView >

  );
}
