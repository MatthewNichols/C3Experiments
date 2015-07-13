$(function() {

    var chart2 = c3.generate({
        bindto: '#sprintBurndownChart',
        data: {
            colors: {
                remainingTime: '#ff3300',
                timeSpent: '#006600'
            },
            names: {
                remainingTime: 'Remaining Time',
                timeSpent: 'Time Spent'
            },
            x: 'x',
            columns: [
                ['x', '2015-06-25', '2015-06-27', '2015-06-29', '2015-07-01', '2015-07-03', '2015-07-05'],
                ['remainingTime', 120, 100, 90, 60, 15, 5],
                ['timeSpent', 20, 50, 80, 110, 130, 140]
            ]
        },
        axis: {
            y: {
                label: {
                    text: 'Remaining Time Estimate',
                    position: 'outer-middle'
                }
            },
            x: {
                type: 'timeseries',
                tick: {
                    //format: '%Y-%m-%d'
                    format: function (x) {
                        console.log(x);
                        return moment(x).format("MMM D");
                    }
                },
                label: {
                    text: 'Time',
                    position: 'outer-center'
                }
            }

        }
    });
});