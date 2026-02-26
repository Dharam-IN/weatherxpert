'use client';

import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    Title,
    RadialLinearScale,
    Filler,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Colors,
    CategoryScale,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
    ArcElement,
    LineElement,
    CategoryScale,
    PointElement,
    BarElement,
    LinearScale,
    RadialLinearScale,
    Filler,
    Tooltip,
    Title,
    Colors,
    ChartDataLabels,
);

ChartJS.defaults.plugins.colors.enabled = false;
ChartJS.defaults.plugins.title.display = true;

// Set generic colors that look modern and adapt well to both themes
ChartJS.defaults.scale.grid.color = 'rgba(150, 150, 150, 0.1)';
ChartJS.defaults.color = '#94a3b8'; // text-slate-400
ChartJS.defaults.font.family = 'Poppins, sans-serif';

const ChartInit = () => {
    return null; // Empty wrapper
};

export default ChartInit;