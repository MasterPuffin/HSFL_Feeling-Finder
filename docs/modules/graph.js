function getRandomMood() {
    const moods = [0, 1, 1, 2, 2, 2, 3, 3, 4];
    return moods[Math.floor(Math.random() * moods.length)];
}

let data = {};

if (sessionStorage.getItem("moodData")) {
    data = JSON.parse(sessionStorage.getItem("moodData"));
} else {
    data.stimmung = [];
    data.stress = [];
    data.schlaf = [];
    data.ernaehrung = [];
    data.bewegung = [];

    for (let i = 0; i<7; i++) {
        data.stimmung.push(getRandomMood());
        data.stress.push(getRandomMood());
        data.schlaf.push(getRandomMood());
        data.ernaehrung.push(getRandomMood());
        data.bewegung.push(getRandomMood());
    }
    sessionStorage.setItem("moodData", JSON.stringify(data));
}

// console.log(data);

function graph(showLegend = false) {
    const colors = {
        blue: "#007BFF",
        // blue: 'rgba(0, 123, 255, 0.2)',
        green: "#28A745",
        // green: 'rgba(40, 167, 69, 0.2)',
        red: "#DC3545",
        // red: 'rgba(220, 53, 69, 1)',
        orange: "#efaf00",
        // orange: 'rgba(239, 175, 0, 0.2)',
        aqua: "#17A2B8"
        // aqua: 'rgba(23, 162, 184, 0.2)',
    };

    /*
    Stimmung
    Stress
    Schlaf
    Ernährung
    Bewegung
    */
    const lineChartData = {
        labels: ['Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Gestern', 'Heute'],
        datasets: [{
            label: 'Stimmung',
            borderColor: colors.red,
            backgroundColor: colors.red,
            fill: false,
            data: data.stimmung,
            yAxisID: 'ax-stimmung',
        }, {
            label: 'Stress',
            borderColor: colors.orange,
            backgroundColor: colors.orange,
            fill: false,
            data: data.stress,
            hidden: true,
            yAxisID: 'ax-stress',
        }, {
            label: 'Schlaf',
            borderColor: colors.blue,
            backgroundColor: colors.blue,
            fill: false,
            data: data.schlaf,
            hidden: true,
            yAxisID: 'ax-schlaf',
        }, {
            label: 'Ernährung',
            borderColor: colors.green,
            backgroundColor: colors.green,
            fill: false,
            data: data.ernaehrung,
            hidden: true,
            yAxisID: 'ax-ernaehrung',
        }, {
            label: 'Bewegung',
            borderColor: colors.aqua,
            backgroundColor: colors.aqua,
            fill: false,
            data: data.bewegung,
            hidden: true,
            yAxisID: 'ax-bewegung',
        }
        ]
    };

    window.onload = function () {
        const ctx = document.getElementById('canvas').getContext('2d');
        window.myLine = Chart.Line(ctx, {
            data: lineChartData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                hoverMode: 'index',
                stacked: false,
                legend: {
                    display: showLegend,
                    position: 'bottom',
                    labels: {
                        fontColor: "black",
                        boxWidth: 20,
                        padding: 20
                    }
                },
                scales: {
                    yAxes: [{
                        type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                        display: true,
                        position: 'left',
                        id: 'ax-stimmung',
                        ticks: {
                            min: 0,
                            max: 4,
                            stepSize: 1,
                            callback: function (label) {
                                switch (label) {
                                    case 0:
                                        return '😭';
                                    case 1:
                                        return '😔';
                                    case 2:
                                        return '😐';
                                    case 3:
                                        return '😃';
                                    case 4:
                                        return '😀';
                                }
                            }
                        }
                    }, {
                        type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                        display: false,
                        position: 'left',
                        id: 'ax-stress',
                    }, {
                        type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                        display: false,
                        position: 'left',
                        id: 'ax-schlaf',
                    }, {
                        type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                        display: false,
                        position: 'left',
                        id: 'ax-ernaehrung',
                    }, {
                        type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                        display: false,
                        position: 'right',
                        id: 'ax-bewegung',
                    }],
                }
            }
        });
    };
}