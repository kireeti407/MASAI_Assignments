import { ChakraProvider, Box, Button, Heading, Stack } from '@chakra-ui/react';
import { NotificationProvider } from './NotificationContext';
import NotificationList from './NotificationList';
import { useContext } from 'react';
import { NotificationContext } from './NotificationContext';

function Controls() {
  const { markAllAsRead, stopNotifications } = useContext(NotificationContext);

  return (
    <Stack direction="row" spacing={4} mt={4}>
      <Button colorScheme="green" onClick={markAllAsRead}>
        Mark All as Read
      </Button>
      <Button colorScheme="red" onClick={stopNotifications}>
        Stop Notifications
      </Button>
    </Stack>
  );
}

function AppContent() {
  return (
    <Box maxW="600px" mx="auto" p={6}>
      <Heading>Notification Panel</Heading>
      <Controls />
      <NotificationList />
    </Box>
  );
}

export default function App() {
  return (
    <ChakraProvider>
      <NotificationProvider>
        <AppContent />
      </NotificationProvider>
    </ChakraProvider>
  );
}
