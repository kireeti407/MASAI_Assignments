import { ChakraProvider, Container } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import FeedbackForm from "./features/feedback/FeedbackForm";
import FeedbackDashboard from "./features/feedback/FeedbackDashboard";

const App = () => (
  <ChakraProvider>
    <Provider store={store}>
      <Container>
        <FeedbackForm />
        <FeedbackDashboard />
      </Container>
    </Provider>
  </ChakraProvider>
);

export default App;
