import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Fade } from "react-reveal";
import PullRequestsData from "../../shared/opensource/pull_requests.json";
import { openSource } from "../../portfolio";
import "./PullRequestChart.css";

const PullRequestChart = (props) => {
  const theme = props.theme;
  const data = {
    labels: ["Open", "Merged", "Closed"],
    datasets: [
      {
        data: [
          PullRequestsData["open"],
          PullRequestsData["merged"],
          PullRequestsData["closed"],
        ],
        backgroundColor: ["#28a745", "#6f42c1", "#d73a49"],
        hoverBackgroundColor: ["#28a745dd", "#6f42c1dd", "#d73a49dd"],
      },
    ],
  };

  if (!openSource.pr_chart) {
    return null;
  }

  if (PullRequestsData.data.length === 0) {
    return null;
  }

  return (
    <div className="pr-chart">
      <Fade bottom duration={2000} distance="20px">
        <h2 className="pr-chart-header" style={{ color: theme.secondaryText }}>
          Pull Request Distribution
        </h2>
      </Fade>
      <Doughnut
        data={data}
        options={{
          padding: "0",
          margin: "0",
          responsive: true,
          maintainAspectRatio: true,
          animation: {
            duration: 4000,
          },
        }}
      />
    </div>
  );
};

export default PullRequestChart;
