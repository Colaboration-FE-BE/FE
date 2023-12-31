import PropTypes from 'prop-types';
import ReactApexChart from 'react-apexcharts';
// import useChart  from './useChart';
import { Card, CardHeader, Box } from '@mui/material';
// ----------------------------------------------------------------------

interface AppWebsiteVisitsProps {
  title: string;
  subheader: string;
  chartData: number[];
  chartLabels: string[];
}

AppWebsiteVisits.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  chartData: PropTypes.array.isRequired,
  chartLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default function AppWebsiteVisits({ title, subheader, chartLabels, chartData, ...other }: AppWebsiteVisitsProps) {
//   const chartOptions = useChart({
//     plotOptions: { bar: {
//         columnWidth: '16%',
//         borderRadius: 0,
//         borderRadiusApplication: '',
//         borderRadiusWhenStacked: ''
//     } },
//     // fill: { type: chartData.map((i) => i.fill) },
//     labels: chartLabels,
//     // xaxis: { type: 'datetime' },
//     tooltip: {
//     //   shared: true,
//     //   intersect: false,
//     //   y: {
//     //     formatter: (y: number) => {
//     //       if (typeof y !== 'undefined') {
//     //         return `${y.toFixed(0)} visits`;
//     //       }
//     //       return y;
//     //     },
//     //   },
//     },
//   });

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type="line" series={chartData} 
        // options={chartOptions} 
        height={364} />
      </Box>
    </Card>
  );
}