import { Box, Flex, Heading } from "@chakra-ui/react";

const Header = ({ title = "Code Learning Platform" }) => {
  return (
    <Box
      as="header"
      bg="white"
      borderBottom="1px solid"
      borderColor="gray.200"
      boxShadow="sm"
    >
      <Flex maxW="100%" mx="auto" px={6} py={4} align="center" gap={3}>
        <Box
          w={10}
          h={10}
          rounded="md"
          bg="blue.500"
          display="flex"
          alignItems="center"
          justifyContent="center"
          color="white"
          fontWeight="bold"
        >
          Py
        </Box>
        <Heading as="h1" size="lg" color="gray.800">
          {title}
        </Heading>
      </Flex>
    </Box>
  );
};

export default Header;
