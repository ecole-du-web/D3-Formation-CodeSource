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
const groupeY = svg.append('g')