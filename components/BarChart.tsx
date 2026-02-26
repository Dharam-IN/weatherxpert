'use client';

import { Line } from 'react-chartjs-2';
import { ScriptableContext } from 'chart.js';
import _ from 'lodash';

const graphConfig = {
    hoverBackgroundColor: '#8b5cf6', // Violet 500
    borderColor: '#8b5cf6',
    borderWidth: 4,
    tension: 0.4,
    fill: true,
    backgroundColor: (context: ScriptableContext<'line'>) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, 'rgba(139, 92, 246, 0.4)');
        gradient.addColorStop(1, 'rgba(139, 92, 246, 0)');
        return gradient;
    },
};

interface Props { labels: string[]; values: number[]; label: string; }

const BarChart = ({ labels, values, label }: Props) => {
    return (
        <div className="w-full overflow-x-auto custom-scrollbar pb-2">
            <div className="h-48 w-full min-w-[36rem]">
                <Line
                    options={{
                        maintainAspectRatio: false,
                        scales: { y: { min: (_.min(values) || 0) - 5, display: false } },
                        plugins: {
                            datalabels: {
                                anchor: 'end', align: 'top', formatter: Math.round,
                                backgroundColor: '#111827', borderRadius: 8, color: '#fff',
                                padding: 6, font: { weight: 'bold', family: 'Poppins' },
                            },
                        },
                    }}
                    data={{
                        labels,
                        datasets: [{
                            data: values, label, pointRadius: 5,
                            pointBackgroundColor: '#8b5cf6', pointBorderColor: '#fff', pointBorderWidth: 2,
                            ...graphConfig,
                        }],
                    }}
                />
            </div>
        </div>
    );
};

export default BarChart;