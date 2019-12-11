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

    function getRandomMood() {
        const moods = [0, 1, 1, 2, 2, 2, 3, 3, 4];
        return moods[Math.floor(Math.random() * moods.length)];
    }

    /*
    Stimmung
    Stress
    Schlaf
    Ernährung
    Bewegung
    */
    var lineChartData = {
        labels: ['Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Gestern', 'Heute'],
        datasets: [{
            label: 'Stimmung',
            borderColor: colors.red,
            backgroundColor: colors.red,
            fill: false,
            data: [
                getRandomMood(),
                getRandomMood(),
                getRandomMood(),
                getRandomMood(),
                getRandomMood(),
                getRandomMood(),
                getRandomMood()
            ],
            yAxisID: 'ax-stimmung',
        }, {
            label: 'Stress',
            borderColor: colors.orange,
            backgroundColor: colors.orange,
            fill: false,
            data: [
                getRandomMood(),
                getRandomMood(),
                getRandomMood(),
                getRandomMood(),
                getRandomMood(),
                getRandomMood(),
                getRandomMood()
            ],
            hidden: true,
            yAxisID: 'ax-stress',
        }, {
            label: 'Schlaf',
            borderColor: colors.blue,
            backgroundColor: colors.blue,
            fill: false,
            data: [
                getRandomMood(),
                getRandomMood(),
                getRandomMood(),
                getRandomMood(),
                getRandomMood(),
                getRandomMood(),
                getRandomMood()
            ],
            hidden: true,
            yAxisID: 'ax-schlaf',
        }, {
            label: 'Ernährung',
            borderColor: colors.green,
            backgroundColor: colors.green,
            fill: false,
            data: [
                getRandomMood(),
                getRandomMood(),
                getRandomMood(),
                getRandomMood(),
                getRandomMood(),
                getRandomMood(),
                getRandomMood()
            ],
            hidden: true,
            yAxisID: 'ax-ernaehrung',
        }, {
            label: 'Bewegung',
            borderColor: colors.aqua,
            backgroundColor: colors.aqua,
            fill: false,
            data: [
                getRandomMood(),
                getRandomMood(),
                getRandomMood(),
                getRandomMood(),
                getRandomMood(),
                getRandomMood(),
                getRandomMood()
            ],
            hidden: true,
            yAxisID: 'ax-bewegung',
        }
        ]
    };

    window.onload = function () {
        var ctx = document.getElementById('canvas').getContext('2d');
        window.myLine = Chart.Line(ctx, {
            data: lineChartData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                hoverMode: 'index',
                stacked: false,
                legend: {
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
                            callback: function (label, index, labels) {
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