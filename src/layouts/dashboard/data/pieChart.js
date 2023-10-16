const pieChartData = (consultas) => {

  return {
    color: ["#31E981", '#F25C54', '#FFBC0A'],
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: 'Consultas',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: consultas?.[2]?.total || 0, name: 'Realizadas' },
          { value: consultas?.[1]?.total || 0, name: 'Canceladas' },
          { value: consultas?.[0]?.total || 0, name: 'Pendentes' },
        ]
      }
    ]
  };
};

export default pieChartData;
