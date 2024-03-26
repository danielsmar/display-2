// app/page.tsx
'use client'
import { 
  Card, 
  CardHeader, 
  CardBody, 
  Box, 
  Text, 
  Grid, 
  Stack, 
  Button, 
  useDisclosure, 
  Modal, 
  ModalOverlay, 
  ModalContent, 
  ModalHeader, 
  ModalCloseButton,
  ModalBody, 
  ModalFooter,
  Table,
  Thead,
  Tbody,  
  Tfoot,
  Tr,
  Th,
  Td, 
  TableContainer, } from "@chakra-ui/react";
import {useEffect, useState } from "react";
import prisma from "@/lib/prisma";
import { Measurement, MeasurementsController } from "@/controllers/measurements";



export default function Page() {
  const [joules, setJoules] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [caliber, setCaliber] = useState(0);
  const [fps, setFps] = useState(0);

  const { isOpen, onOpen, onClose } = useDisclosure()   
  const [measurements, setMeasurements] = useState<Measurement[]>([]); 

  useEffect(() => {
    async function fetchMeasurements(){
      const response = await fetch('/api/measurements',{method: 'GET'});
      const data = await response.json();
      setMeasurements(data.measurements);    
    }
    fetchMeasurements();    
  },[]);
  
  
  return (
    <Box minW="100vw" minH="100vh" display="flex" justifyContent="center" alignItems="center" bg="#161616">
      <Card maxW="sm" mx="auto" bg="#303030">
        <CardHeader borderBottom="1px" borderColor="gray.200">
          <Box px={6} py={4}>
            <Text fontSize="lg" fontWeight="medium" color= "#CECFCF">
              CRONÓGRAFO PARA AIRSOFT
            </Text>
          </Box>
        </CardHeader>
        <CardBody p={0}>
          <Grid gap={0}>
            <Stack spacing={2} px={6} py={6}>
              <Stack direction="row" justifyContent="space-between" fontSize="sm" fontWeight="medium" color="gray.500">
                <Text color= "#CECFCF">Joules (J)</Text>
                <Text color= "#CECFCF" >{joules}</Text>
              </Stack>
              <Stack direction="row" justifyContent="space-between" fontSize="sm" fontWeight="medium" color="gray.500">
                <Text color= "#CECFCF">Speed (m/s)</Text>
                <Text color= "#CECFCF" >{speed}</Text>
              </Stack>
              <Stack direction="row" justifyContent="space-between" fontSize="sm" fontWeight="medium" color="gray.500">
                <Text color= "#CECFCF">Calibre (mm)</Text>
                <Text color= "#CECFCF" >{caliber}</Text>
              </Stack>
              <Stack direction="row" justifyContent="space-between" fontSize="sm" fontWeight="medium" color="gray.500">
                <Text color= "#CECFCF">FPS</Text>
                <Text color= "#CECFCF" >{fps}</Text>
              </Stack>
            </Stack>
            <Box borderTop="1px" borderColor="gray.200" />
            <Stack px={6} py={6} direction="row" justifyContent="center">
              <Button onClick={onOpen} size="sm">Resultados</Button>                            
            </Stack>
          </Grid>
        </CardBody>
      </Card>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Histórico de Medição</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
  <TableContainer>
    <Table variant='simple'>
      <Thead>
        <Tr>
          <Th isNumeric>Joule(j)</Th>
          <Th isNumeric>Speed(m/s)</Th>
          <Th isNumeric>Calibre(mm)</Th>
          <Th isNumeric>FPS</Th>
        </Tr>
      </Thead>
      <Tbody>
        {measurements.map((measurement) => (
          <Tr key={measurement.id}>
            <Td isNumeric>{measurement.joules}</Td>
            <Td isNumeric>{measurement.speed}</Td>
            <Td isNumeric>{measurement.caliber}</Td>
            <Td isNumeric>{measurement.fps}</Td>
          </Tr>
        ))}
      </Tbody>
      
    </Table>
  </TableContainer>
</ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Fechar
            </Button>
            
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>

    
  );
}
