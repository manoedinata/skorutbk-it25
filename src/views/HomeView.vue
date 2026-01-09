<template>

    <div class="max-w-6xl mx-auto space-y-8 fade-in">

        <div class="text-center space-y-2">
            <span
                class="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-700 text-xs font-semibold tracking-wide uppercase">Teknologi
                Informasi 2025</span>
            <h1 class="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Rekap Skor UTBK 2025</h1>
            <p class="text-lg text-slate-500">Program Studi Teknologi Informasi ITS</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">

            <div class="lg:col-span-2 bg-white rounded-2xl shadow-xl border border-slate-100 p-6">
                <div class="flex justify-between items-center mb-6">
                    <h2 class="text-xl font-bold text-slate-800">Visualisasi Data Subtes</h2>
                    <div class="flex gap-2 text-xs">
                        <span class="flex items-center gap-1"><span class="w-3 h-3 rounded-full bg-indigo-500"></span>
                            Avg</span>
                        <span class="flex items-center gap-1"><span class="w-3 h-3 rounded-full bg-emerald-400"></span>
                            Max</span>
                        <span class="flex items-center gap-1"><span class="w-3 h-3 rounded-full bg-slate-300"></span>
                            Min</span>
                    </div>
                </div>
                <div class="relative h-80 w-full">
                    <canvas id="scoreChart"></canvas>
                </div>
            </div>

            <div class="space-y-6">
                <div
                    class="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl shadow-lg p-6 text-white transform hover:scale-105 transition duration-300">
                    <div class="flex items-center justify-between">
                        <p class="text-sm font-medium uppercase">Nilai Rata-Rata</p>
                        <h3 class="text-4xl font-bold mt-1">{{ avgMean }}</h3>

                    </div>
                </div>

                <div class="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
                    <p class="text-slate-500 text-sm font-medium uppercase">Rata-rata Tertinggi</p>
                    <div class="flex items-baseline gap-2 mt-1">
                        <h3 class="text-3xl font-bold text-slate-800">{{ avgMax }}</h3>
                    </div>
                    <div class="w-full bg-slate-100 rounded-full h-2.5 mt-4">
                        <div class="bg-emerald-500 h-2.5 rounded-full" style="width: 80%"></div>
                    </div>
                </div>

                <!-- <div class="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
                    <p class="text-slate-500 text-sm font-medium uppercase">Subtes Tertinggi</p>
                    <div class="flex items-baseline gap-2 mt-1">
                        <h3 class="text-3xl font-bold text-slate-800">{{ maxSubtest[0] }}</h3>
                        <span class="text-sm text-green-600 font-semibold">{{ maxSubtest[1] }}</span>
                    </div>
                    <div class="w-full bg-slate-100 rounded-full h-2.5 mt-4">
                        <div class="bg-emerald-500 h-2.5 rounded-full" style="width: 90%"></div>
                    </div>
                </div> -->
            </div>
        </div>

        <div class="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
            <div class="p-6 border-b border-slate-100">
                <h2 class="text-xl font-bold text-slate-800">Detail Skor</h2>
            </div>
            <div class="overflow-x-auto">
                <table class="w-full text-sm text-left text-slate-600">
                    <thead class="text-xs text-slate-500 uppercase bg-slate-50">
                        <tr>
                            <th scope="col" class="px-6 py-4 font-bold">Subtes</th>
                            <th scope="col" class="px-6 py-4 text-center text-slate-400">Minimum</th>
                            <th scope="col" class="px-6 py-4 text-center text-indigo-600 font-bold bg-indigo-50/50">
                                Rata-rata</th>
                            <th scope="col" class="px-6 py-4 text-center text-emerald-600 font-bold">Maksimum</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100">
                        <tr class="hover:bg-slate-50 transition" v-for="(label, index) in labels2" :key="label">
                            <td class="px-6 py-4 font-medium text-slate-900">{{ label }}</td>
                            <td class="px-6 py-4 text-center">{{ minData[index] }}</td>
                            <td class="px-6 py-4 text-center font-semibold bg-indigo-50/30 text-indigo-700">{{
                                meanData[index] }}</td>
                            <td class="px-6 py-4 text-center text-emerald-600">{{ maxData[index] }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <footer class="text-center text-slate-400 text-sm py-6">
            &copy; Teknologi Informasi 2025 ITS.
        </footer>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

// Import JSON data
import scoreData from '../../data/scores.json';
console.log(scoreData);

const avgMean = ref(0);
const avgMax = ref(0);
const avgMin = ref(0);

const minData = ref([]);
const meanData = ref([]);
const maxData = ref([]);

const labels = ['PU', 'PPU', 'PBM', 'PK', 'LBI', 'LBE', 'PM'];
const labels2 = [
    "PU (Penalaran Umum)",
    "PPU (Pengetahuan & Pemahaman Umum)",
    "PBM (Pemahaman Bacaan & Menulis)",
    "PK (Pengetahuan Kuantitatif)",
    "LBI (Literasi B. Indonesia)",
    "Lit.Bing (Literasi B. Inggris)",
    "PM (Penalaran Matematika)"
]

onMounted(() => {
    avgMean.value = scoreData.mean.toFixed(2);
    avgMax.value = scoreData.max.toFixed(2);
    avgMin.value = scoreData.min.toFixed(2);

    // Populate min, mean, max data arrays
    minData.value = labels.map(key => scoreData.summary[key.toLowerCase()]["min"].toFixed(2));
    meanData.value = labels.map(key => scoreData.summary[key.toLowerCase()]["mean"].toFixed(2));
    maxData.value = labels.map(key => scoreData.summary[key.toLowerCase()]["max"].toFixed(2));

    const ctx = document.getElementById('scoreChart').getContext('2d');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Min',
                    data: minData.value,
                    backgroundColor: '#cbd5e1', // Slate 300
                    borderRadius: 4,
                    barPercentage: 0.6,
                },
                {
                    label: 'Average',
                    data: meanData.value,
                    backgroundColor: '#6366f1', // Indigo 500
                    borderRadius: 4,
                    barPercentage: 0.6,
                },
                {
                    label: 'Max',
                    data: maxData.value,
                    backgroundColor: '#34d399', // Emerald 400
                    borderRadius: 4,
                    barPercentage: 0.6,
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false // Using custom legend in HTML for better styling
                },
                tooltip: {
                    backgroundColor: '#1e293b',
                    padding: 12,
                    cornerRadius: 8,
                    displayColors: true,
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 400, // Better scaling for scores
                    grid: {
                        color: '#f1f5f9',
                        drawBorder: false,
                    },
                    ticks: {
                        color: '#64748b'
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#475569',
                        font: {
                            weight: 'bold'
                        }
                    }
                }
            }
        }
    });
})
</script>

<style>
body {
    font-family: 'Inter', sans-serif;
}

.fade-in {
    animation: fadeIn 0.8s ease-in-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
