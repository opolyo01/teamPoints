$("#chart").kendoChart({
    title: {
        text: "Scores per day"
    },
    legend: {
        position: "top"
    },
    seriesDefaults: {
        type: "column"
    },
    series: [{
        name: "Maria",
        data: [-500, 0, 500, 100, 300, 0, -200]
    }, {
        name: "Edward",
        data: [200, 400, 500, 100, 50, 20, 400]
    }],
    valueAxis: {
        labels: {
            format: "{0}"
        },
        line: {
            visible: false
        },
        axisCrossingValue: 0
    },
    categoryAxis: {
        categories: ["March 31", "Apr 1", "Apr 2", "Apr 3", "Apr 4", "Apr 5", "Apr 6"],
        line: {
            visible: false
        },
        labels: {
            padding: {top: 135}
        }
    },
    tooltip: {
        visible: true,
        format: "{0}",
        template: "#= series.name #: #= value #"
    }
});