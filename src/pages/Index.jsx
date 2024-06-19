import { Container, Text, VStack, Box, Heading, Image, Button, SimpleGrid } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaPaw } from "react-icons/fa";

const partners = [
  { name: "Partner 1", logo: "/images/partner1-logo.png" },
  { name: "Partner 2", logo: "/images/partner2-logo.png" },
  { name: "Partner 3", logo: "/images/partner3-logo.png" }
];

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">Welcome to Dog Lovers</Heading>
        <Image src="/images/dog-landing.jpg" alt="Cute dog" borderRadius="md" boxSize="300px" objectFit="cover" />
        <Text fontSize="lg" textAlign="center">Discover the best content about dogs. From training tips to health advice, we have everything you need to take care of your furry friend.</Text>
        <Button as={RouterLink} to="/dogs" rightIcon={<FaPaw />} colorScheme="teal" variant="solid" size="lg">Learn More</Button>
      {/* Partners Section */}
        <Box w="100%" mt={10}>
          <Heading as="h2" size="xl" textAlign="center" mb={6}>Our Partners</Heading>
          <SimpleGrid columns={[1, 2, 3]} spacing={10}>
            {partners.map((partner, index) => (
              <Box key={index} textAlign="center">
                <Image src={partner.logo} alt={partner.name} boxSize="100px" objectFit="contain" mx="auto" />
                <Text mt={2} fontSize="lg">{partner.name}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;