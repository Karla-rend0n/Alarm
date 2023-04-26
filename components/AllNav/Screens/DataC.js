import * as React from 'react'
import { Box, Center, HStack, Heading, Image, ScrollView, VStack, Text, Circle, Pressable, Button, Icon } from 'native-base';
import {AntDesign} from '@expo/vector-icons';

export default function DataC() {
    return <Center w="100%" h="100%" bg={{
            linearGradient: {
                colors: ['primary.400', 'primary.800'],
                start: [1, 0],
                end: [0, 0]

            }
        }}>
            <Box safeArea p="2"  w="90%" maxW="290">
            

                <VStack space={3} >
                

                    <Box rounded="xl" >
                        <Pressable>
                        {({
                            isHovered,
                            isPressed
                        }) => {
                            return <Box bg={isPressed ? "primary.100" : isHovered ? "primary.100" : "primary.200"} style={{
                                transform: [{
                                    scale: isPressed ? 0.96 : 1
                                }]
                            }} p="5" rounded="8" shadow={3} borderWidth="1" borderColor="primary.200">
                                <VStack space={3} alignItems='center'>
                                <Image width="50" height="50"
                                        source={require('../../../assets/IconoPerfil.png')} />
                                <HStack alignItems="center" space={10}>
                                <Text color='primary.50' mt='1' fontWeight='bold'>
                                        Mamá
                                    </Text>
                                    <Text color='primary.50' mt='1' fontWeight='bold'>
                                        María 
                                    </Text>

                                    <Text color='primary.50' mt='1' fontWeight='bold'>
                                        Herrera
                                    </Text>
                                </HStack>
                                <Text color='primary.50' mt='1' fontWeight='bold'>
                                    449-456-98-78
                                    </Text>
                                </VStack>


                            </Box>
                    
                        }}
                        </Pressable>

                        <HStack mt='3/4' space={20} marginLeft='4'>
                        <Button size='lg' bg='primary.200'>Editar</Button>
                        <Button size='lg' bg='primary.200'>Eliminar</Button>
                    </HStack>
                    </Box>
                    
                   
                </VStack>

              
            </Box>
        </Center>
        

   
}