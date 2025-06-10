import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from "chart.js";
import { FeedbackEntry } from "../../types/feedback";

ChartJS.register(BarElement, CategoryScale, LinearScale);

const FeedbackChart = ({ data }: { data: FeedbackEntry[] }) => {
  const ratingCounts = [1, 2, 3, 4, 5].map(
    (r) => data.filter((d) => d.rating === r).length
  );

  return (
    <Bar
      data={{
        labels: ["1", "2", "3", "4", "5"],
        datasets: [
          {
            label: "Feedback Count",
            data: ratingCounts,
            backgroundColor: "#319795",
          },
        ],
      }}
      options={{ responsive: true, plugins: { legend: { display: false } } }}
    />
  );
};

export default FeedbackChart;
