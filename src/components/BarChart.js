import React from 'react';
import {Bar} from 'react-chartjs-2';
const BarChart = () => {
 
    return (
      <div>
        <Bar 
            data={
                {
                    labels: ['Red','Orange','Green'],
                }
            }
            height={400}
            width={600}
            options={
                {
                    maintainAspectRatio: false,
                }
            }
            />
      </div>
    );
}

export default BarChart;
