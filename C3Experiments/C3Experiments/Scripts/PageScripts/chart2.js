$(function() {

    var chart2 = c3.generate({
        bindto: '#chart2',
        data: {
            columns: [
                ['data1', 30, 200, 100, 400, 150, 250],
                ['data2', 50, 20, 150, 40, 15, 25]
            ],
            types: {
                data2: 'bar'
            }
        },
        axis: {
            y: {
                label: {
                    text: 'Y Label',
                    position: 'outer-middle'
                }
            },
            x: {
                label: {
                    text: 'X Label',
                    position: 'outer-center'
                }
            }

        }
    });

    console.log(chart2);
});