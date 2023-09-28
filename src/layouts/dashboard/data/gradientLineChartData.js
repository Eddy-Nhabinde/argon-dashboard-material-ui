const gradientLineChartData = (data, type) => {

  function getLabels() {
    const data = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30","31"]

    if (type == 'month') {
      const currentDate = new Date();
      const last30Days = [];

      for (let i = 1; i <= 30; i++) {
        const date = new Date(currentDate);
        date.setDate(currentDate.getDate() - i);

        if (data.indexOf("" + date.getDate().toString() + "") != -1) {
          last30Days.push(data[data.indexOf("" + date.getDate().toString() + "")]);
        }
      }
      return last30Days

    }
    else return ["Jan", "Fev", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  }

  return {
    labels: getLabels(),
    datasets: [
      {
        label: "Mobile apps",
        color: "info",
        data: data,
      },
    ],
  }
};

export default gradientLineChartData;
