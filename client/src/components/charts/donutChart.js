import React from 'react';
import Chart from "react-apexcharts";
import classes from '../../styles/common.module.css'; 

const options = {
    series: [45,25,30],
    options:{
        series: [45,25,30],
        chart: {
            type: 'donut'
        },
        legend: {
            show: false,
        },
        dataLabels: {
            enabled: true,
        },
        plotOptions: {
            pie: {
              donut: {
                size: '35%'
              }
            }
        }
    }
}

const DonutChart = () => {
    return (
        <div>
            <Chart className={classes.DonutChart} options={options.options} series={options.series} type="donut" style={{color:'white'}}/>
        </div>
    )
}

export default React.memo(DonutChart);
