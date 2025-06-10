import { Box, Heading, Select } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import FeedbackChart from "./FeedbackChart";
import { setFilter } from "./feedbackSlice";

const FeedbackDashboard = () => {
  const { feedbacks, filter } = useSelector((state: RootState) => state.feedback);
  const dispatch = useDispatch();

  const filtered = feedbacks.filter((fb) =>
    (!filter.rating || fb.rating === filter.rating) &&
    (!filter.date || fb.date.startsWith(filter.date))
  );

  return (
    <Box maxW="lg" mx="auto" mt={8}>
      <Heading mb={4}>Dashboard</Heading>
      <Select placeholder="Filter by Rating" onChange={(e) => dispatch(setFilter({ rating: +e.target.value || undefined }))}>
        {[1, 2, 3, 4, 5].map((r) => <option key={r} value={r}>{r}</option>)}
      </Select>
      <FeedbackChart data={filtered} />
    </Box>
  );
};

export default FeedbackDashboard;
