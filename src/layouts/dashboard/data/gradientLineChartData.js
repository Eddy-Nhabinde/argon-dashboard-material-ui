
const gradientLineChartData = (data, type) => {
  let months = [
    "Jan",
    "Fev",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ]

  function getLabels() {
    if (type == 'year') {
      let labels = []

      for (let i = 0; i < data?.monthsOrDays?.length; i++)
        labels.push(months[data?.monthsOrDays[i] - 1])

      return labels
    }
    else return data?.monthsOrDays
  }

  return {
    labels: getLabels(),
    datasets: [
      {
        label: "Mobile apps",
        color: "info",
        data: data?.data,
      },
    ],
  }
};

export default gradientLineChartData;
