import {
  ChakraProvider,
  Box,
  Flex,
  Grid,
  Button,
  Text,
  useMediaQuery,
  VStack
} from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext, AuthContextProvider } from "./AuthContext";
import { ThemeContext, ThemeContextProvider } from "./ThemeContext";

const products = ["Product 1", "Product 2", "Product 3", "Product 4"];

function AppLayout() {
  const { isLoggedIn, toggleAuth } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  const isDark = theme === "dark";

  return (
    <Box bg={isDark ? "gray.800" : "gray.100"} color={isDark ? "white" : "black"} minH="100vh">
      {/* Navbar */}
      <Flex
        as="nav"
        p="4"
        justifyContent="space-between"
        bg={isDark ? "gray.900" : "gray.200"}
      >
        <Button onClick={toggleAuth}>
          {isLoggedIn ? "Log Out" : "Log In"}
        </Button>
        <Button onClick={toggleTheme}>
          Switch to {isDark ? "Light" : "Dark"} Mode
        </Button>
      </Flex>

      {/* Main layout */}
      <Flex direction={{ base: "column", md: "row" }} flex="1">
        {/* Sidebar */}
        {isLargerThan768 && (
          <Box
            w={{ base: "100%", md: "250px" }}
            bg={isDark ? "gray.700" : "gray.300"}
            p="4"
          >
            <Text fontWeight="bold">Sidebar</Text>
            {isLoggedIn && <Text>Welcome back, user!</Text>}
          </Box>
        )}

        {/* Main Content */}
        <Box flex="1" p="4">
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap="4">
            {products.map((product) => (
              <Box
                key={product}
                p="4"
                bg={isDark ? "gray.600" : "white"}
                shadow="md"
                borderRadius="md"
              >
                {product}
              </Box>
            ))}
          </Grid>
        </Box>
      </Flex>

      {/* Footer */}
      <Box
        as="footer"
        p="4"
        bg={isDark ? "gray.900" : "gray.300"}
        textAlign="center"
        mt="auto"
      >
        <Text>Footer Content</Text>
      </Box>
    </Box>
  );
}

export default function App() {
  return (
    <ChakraProvider>
      <AuthContextProvider>
        <ThemeContextProvider>
          <AppLayout />
        </ThemeContextProvider>
      </AuthContextProvider>
    </ChakraProvider>
  );
}

