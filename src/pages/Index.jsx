import { Container, Text, VStack, Box, Heading, Image, Button } from "@chakra-ui/react";
import { FaPaw } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">Welcome to Dog Lovers</Heading>
        <Image src="/images/dog-landing.jpg" alt="Cute dog" borderRadius="md" boxSize="300px" objectFit="cover" />
        <Text fontSize="lg" textAlign="center">Discover the best content about dogs. From training tips to health advice, we have everything you need to take care of your furry friend.</Text>
        <Button rightIcon={<FaPaw />} colorScheme="teal" variant="solid" size="lg">Learn More</Button>
      </VStack>
    </Container>
  );
};

export default Index;