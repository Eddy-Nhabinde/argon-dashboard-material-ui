
const gradientLineChartData = (data, type) => {
  let months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Ooutubro",
    "Novembro",
    "Dezembro"
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
        label: "Consultas",
        color: "info",
        data: data?.data,
      },
    ],
  }
};

export default gradientLineChartData;
