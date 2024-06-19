import { Container, VStack, Box, Heading, Image, Text } from "@chakra-ui/react";

const dogs = [
  {
    name: "Golden Retriever",
    image: "/images/golden-retriever.jpg",
    description: "Friendly, intelligent, and devoted. Golden Retrievers are one of the most popular dog breeds in the United States."
  },
  {
    name: "Labrador Retriever",
    image: "/images/labrador-retriever.jpg",
    description: "Outgoing, even-tempered, and gentle. Labradors are known for their friendly nature and are great family pets."
  },
  {
    name: "German Shepherd",
    image: "/images/german-shepherd.jpg",
    description: "Confident, courageous, and smart. German Shepherds are highly versatile and excel in various roles such as police and service dogs."
  }
];

const Dogs = () => {
  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">Dog Breeds</Heading>
        {dogs.map((dog, index) => (
          <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" w="100%">
            <Image src={dog.image} alt={dog.name} boxSize="100%" objectFit="cover" />
            <Box p={6}>
              <Heading as="h2" size="lg" mb={4}>{dog.name}</Heading>
              <Text fontSize="md">{dog.description}</Text>
            </Box>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Dogs;