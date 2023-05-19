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

    if (formData.lastName === undefined) {
      setErrorLastname({ ...errorLastname, lastName: "El apellido es requerido" });
      isValid = false;
    } else {
      if (formData.lastName.length <= 3) {
        setErrorLastname({
          ...errorLastname,
          lastName: "El apellido es muy corto",
        });
        console.log("valida");
      } else {
        if (!namVal.test(formData.lastName)) {
          setErrorLastname({
            ...errorLastname,
            lastName: "Ingrese solo letras",
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
    <Center
      w="100%"
      h="100%"
      bg={{
        linearGradient: {
          colors: ["primary.400", "primary.800"],
          start: [1, 0],
          end: [0, 0],
        },
      }}
    >
      <Box safeArea p="2" py="8" w="90%" maxW="290">
       
        <Heading mt="1" color="primary.50" fontWeight="medium" size="xs">
          Completa los siguientes campos.
        </Heading>
        <VStack space={3} mt={5}>
          <FormControl isRequired isInvalid={"kinship" in errorkinship}>
            <FormControl.Label
              _text={{
                color: "primary.50",
                fontWeight: "bold",
              }}
              marginLeft={2}
            >
              Parentesco
            </FormControl.Label>
            <Input
              p={2}
              placeholder="Ingrese el parentesco"
              backgroundColor="primary.100"
              variant="rounded"
              color="primary.900"
              fontWeight="bold"
              onChangeText={(value) =>
                setFormData({ ...formData, kinship: value })
              }
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="person" />}
                  size={5}
                  ml="2"
                  color="primary.200"
                />
              }
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
              }}
              marginLeft={2}
            >
              Nombre
            </FormControl.Label>
            <Input
              p={2}
              placeholder="Ingrese su nombre"
              backgroundColor="primary.100"
              variant="rounded"
              color="primary.900"
              fontWeight="bold"
              onChangeText={(value) =>
                setFormData({ ...formData, name: value })
              }
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="person" />}
                  size={5}
                  ml="2"
                  color="primary.200"
                />
              }
            />
            {"name" in errors ? (
              <FormControl.ErrorMessage _text={{ color: "primary.700" }}>
                {errors.name}
              </FormControl.ErrorMessage>
            ) : (
              <FormControl.HelperText>Ingrese su nombre</FormControl.HelperText>
            )}
          </FormControl>

          <FormControl isRequired isInvalid={"lastName" in errorLastname}>
            <FormControl.Label
              _text={{
                color: "primary.50",
                fontWeight: "bold",
              }}
              marginLeft={2}
            >
              Apellido
            </FormControl.Label>
            <Input
              p={2}
              placeholder="Ingrese su apellido"
              backgroundColor="primary.100"
              variant="rounded"
              color="primary.900"
              fontWeight="bold"
              onChangeText={(value) =>
                setFormData({ ...formData, lastName: value })
              }
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="person" />}
                  size={5}
                  ml="2"
                  color="primary.200"
                />
              }
            />
            {"lastName" in errorLastname ? (
              <FormControl.ErrorMessage _text={{ color: "primary.700" }}>
                {errorLastname.lastName}
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
              }}
              marginLeft={2}
            >
              Teléfono
            </FormControl.Label>
            <Input
              p={2}
              placeholder="Ingrese su número"
              backgroundColor="primary.100"
              variant="rounded"
              color="primary.900"
              fontWeight="bold"
              onChangeText={(value) =>
                setFormData({ ...formData, phone: value })
              }
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="phone" />}
                  size={5}
                  ml="2"
                  color="primary.200"
                />
              }
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
            mt="5"
            size="lg"
            marginTop={15}
            backgroundColor="primary.200"
            borderWidth="2"
            borderColor="primary.200"
            rounded={10}
            // onPress={() => {navigation.navigate("Contacts")}}>
            onPress={submit}
          >
            Guardar
          </Button>

          {/* <Button size='lg' bg='primary.200' onPress={() => {navigation.navigate("Contact")}}>Guardar</Button> */}
        </VStack>
      </Box>
    </Center>
  );
}
