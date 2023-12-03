import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  Icon,
  Input,
  ScrollView,
  VStack
} from "native-base";
import React from "react";
import { Dimensions } from "react-native";
import { useUser } from "../../store/user";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function componenteEdit_Contact(kinship, name, last_name, phone, user) {
  console.log(kinship)
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "kinship": kinship,
    "name": name,
    "last_name": last_name,
    "phone": phone,
    "user": user
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("https://api-alarm.cadsita.net/contact/", requestOptions)
    .then(response => console.log(response.status))
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

export default function AddContact() {
  const navigation = useNavigation();
  const [formData, setFormData] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [errorkinship, setErrorkinship] = React.useState({});
  const [errorLastname, setErrorLastname] = React.useState({});
  const [errorPhone, setErrorPhone] = React.useState({});

  var namVal = /^[A-Za-z]+$/i;
  var number = /^\+?(52\s?)?1?\d{3}\s?\d{3}\s?\d{4}$/

  const { user } = useUser(state => state)
  const info = user[0];
  console.log(user)

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
    if (validate()) {
      // Realizar la actualización o guardar los datos
      console.log('data', formData);
      componenteEdit_Contact(formData.kinship, formData.name, formData.last_name, formData.phone, info.id)

      navigation.navigate('Contacts', { refresh: true });
    } else {
      console.log('Datos no válidos', formData);
    }
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
          <Heading
            size="xl"
            color="Black"
            _dark={{
              color: "primary.50",
              fontWeight: 'bold'
            }}
            mt={windowHeight * 0.05}
          >
            Completa los siguientes campos
          </Heading>

          <VStack space={windowHeight * 0.05} mt={windowHeight * 0.05}>
            <FormControl isRequired isInvalid={"kinship" in errorkinship}>
              <FormControl.Label
                _text={{
                  color: "primary.50",
                  fontWeight: "bold",
                  fontSize: 'lg'

                }}
              >
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

                }}
              >
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

                }}
              >
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
                }}
              >
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
              background="primary.200"
              borderWidth="2"
              borderColor="primary.200"
              mt="5"
              rounded={10}
              _text={{
                color: "primary.50",
                fontWeight: "700",
                fontSize: "lg"
              }}
              onPress={submit}
            >
              Guardar
            </Button>
          </VStack>
        </Box>
      </Center >
    </ScrollView >
  );
}
