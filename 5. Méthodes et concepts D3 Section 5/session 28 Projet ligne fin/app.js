// Les dimensions 
var margin = {top: 20, right: 20, bottom: 30, left: 50};
var width = 960 - margin.left - margin.right;
var height = 500 - margin.top - margin.bottom;

// Creer notre cadre SVG
// ajouter le groupe qui contient le graph
// Déplacer ce groupe
var svg = d3.select("body").append('svg')
            .attr('width', 960)
            .attr('height', 550)
            .style('background','antiqueWhite')
            .append('g')
            .attr('transform', "translate(" + margin.left + ", " + margin.top + ")");

// Creation des groupes X et Y
const groupeX = svg.append('g')
                   .attr('transform', "translate(0, " + height + ")");
const groupeY = svg.append('g');

d3.json('data.json').then(data => {

  // On va mettre en variable la méthode time parse

  var parseTime = d3.timeParse("%d-%b-%y");

  // Formattage des strings en objet date
  data.forEach(function(d) {
   // console.log(parseTime(d.date));
    d.date = parseTime(d.date);
  })

  // Mettre en place les portée(range) et les domaines de nos axes

  var x = d3.scaleTime()
            .domain(d3.extent(data, d => d.date))
            .range([0, width]);
            //console.log(d3.extent(data, d => d.date));
  var y = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.valeur)])
            .range([height, 0]);    

  // X

  const axeX = d3.axisBottom(x);
  
  groupeX.call(axeX)
         .style('font-size', '14px');

  groupeX.selectAll('text')
         .attr('transform', 'rotate(-30) translate(0,10)')
         .attr('text-anchor', 'end');


  // Y
  const axeY = d3.axisLeft(y)
                 .ticks(5);
  groupeY.call(axeY)
         .style('font-size', '13px');

  // Création des coordonnées

  var valueLine = d3.line()
                    .x(function(d) {return x(d.date)})
                    .y(function(d) {return y(d.valeur)});

  // Ajout du Path
  svg.append('path')
     .attr("class", "line")
     .attr('d', valueLine(data));

})

