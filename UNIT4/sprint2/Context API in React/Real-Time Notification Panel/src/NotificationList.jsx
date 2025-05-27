import { useContext } from 'react';
import { NotificationContext } from './NotificationContext';
import { Box, Text, VStack } from '@chakra-ui/react';

export default function NotificationList() {
  const { notifications } = useContext(NotificationContext);

  return (
    <VStack align="stretch" spacing={3} mt={4}>
      {notifications.length === 0 ? (
        <Text>No notifications</Text>
      ) : (
        notifications.map((n) => (
          <Box
            key={n.id}
            p="3"
            bg={n.read ? 'gray.100' : 'blue.100'}
            borderRadius="md"
            fontWeight={n.read ? 'normal' : 'bold'}
          >
            {n.message}
          </Box>
        ))
      )}
    </VStack>
  );
}
