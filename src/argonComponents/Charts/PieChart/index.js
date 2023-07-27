import { useMemo } from "react";
import PropTypes from "prop-types";
import { Pie } from "react-chartjs-2";
import Card from "@mui/material/Card";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ReactEcharts from "echarts-for-react"

import configs from "argonComponents/Charts/PieChart/configs";

function PieChart({ title, description, height, chart }) {

  const renderChart = (
    <ArgonBox style={{ display: "flex", height: "415px", flexDirection: "column", justifyContent: "center" }} >
      {title || description ? (
        <ArgonBox px={1} pt={1}>
          {title && (
            <ArgonBox mb={1}>
              <ArgonTypography variant="h6">{title}</ArgonTypography>
            </ArgonBox>
          )}
          <ArgonBox mb={2}>
            <ArgonTypography component="div" variant="button" fontWeight="regular" color="text">
              {description}
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      ) : null}
      {
        useMemo(() => (
          <ArgonBox height={height}  >
            <ReactEcharts
              option={chart}
              style={{ width: "470px", height: "420px" }}
            ></ReactEcharts>
          </ArgonBox>
        ), [chart, height])
      }
    </ArgonBox>
  );

  return title || description ? <Card>{renderChart}</Card> : renderChart;
}

// Setting default values for the props of PieChart
PieChart.defaultProps = {
  title: "",
  description: "",
  height: "19.125rem",
};

// Typechecking props for the PieChart
PieChart.propTypes = {
  title: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  chart: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.array, PropTypes.object])).isRequired,
};

export default PieChart;
