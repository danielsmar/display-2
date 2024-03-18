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
  TableCaption,
  TableContainer, } from "@chakra-ui/react";

export default function Page() {
  
  const { isOpen, onOpen, onClose } = useDisclosure()
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
                <Text color= "#CECFCF" id="joules">0.00</Text>
              </Stack>
              <Stack direction="row" justifyContent="space-between" fontSize="sm" fontWeight="medium" color="gray.500">
                <Text color= "#CECFCF">Speed (m/s)</Text>
                <Text color= "#CECFCF" id="speed">0.00</Text>
              </Stack>
              <Stack direction="row" justifyContent="space-between" fontSize="sm" fontWeight="medium" color="gray.500">
                <Text color= "#CECFCF">Calibre (mm)</Text>
                <Text color= "#CECFCF" id="caliber">0.00</Text>
              </Stack>
              <Stack direction="row" justifyContent="space-between" fontSize="sm" fontWeight="medium" color="gray.500">
                <Text color= "#CECFCF">FPS</Text>
                <Text color= "#CECFCF" id="fps">0.00</Text>
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
                <Tr>
                  <Td isNumeric>0.00</Td>
                  <Td isNumeric>0.00</Td>
                  <Td isNumeric>0.00</Td>
                  <Td isNumeric>0.00</Td>
                </Tr>
                <Tr>
                  <Td isNumeric>0.00</Td>
                  <Td isNumeric>0.00</Td>
                  <Td isNumeric>0.00</Td>
                  <Td isNumeric>0.00</Td>
                </Tr>
                <Tr>
                  <Td isNumeric>0.00</Td>
                  <Td isNumeric>0.00</Td>
                  <Td isNumeric>0.00</Td>
                  <Td isNumeric>0.00</Td>
                </Tr>
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
