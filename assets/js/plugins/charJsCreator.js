const createSuperheroChart = (superhero) => {
    var chart = new CanvasJS.Chart("chartContainer", {
        theme: "light2",
        title: {
            text: `Estadísticas de poder para ${superhero.name}`,
            fontSize: 21,
            padding: 37,
        },
        legend: {
            fontSize: 15,
            maxWidth: 300,
        },
        data: [
            {
            type: "pie",
            showInLegend: true,
            toolTipContent: "{legendText}: {y}",
            yValueFormatString: "#####",
            legendText: "{indexLabel}",
            indexLabelFontSize: 14,
            dataPoints: [
                { y: superhero.powerstats.intelligence, legendText: 'intelligence', indexLabel: `intelligence (${superhero.powerstats.intelligence})`},
                { y: superhero.powerstats.strength, legendText: 'strength', indexLabel: `strength (${superhero.powerstats.strength})`},
                { y: superhero.powerstats.speed, legendText: 'speed', indexLabel: `speed (${superhero.powerstats.speed})`},
                { y: superhero.powerstats.durability, legendText: 'durability', indexLabel: `durability (${superhero.powerstats.durability})`},
                { y: superhero.powerstats.power, legendText: 'power', indexLabel: `power (${superhero.powerstats.power})`},
                { y: superhero.powerstats.combat, legendText: 'combat', indexLabel: `combat (${superhero.powerstats.combat})`}
            ],
            },
        ],
    });
    chart.render();
};
