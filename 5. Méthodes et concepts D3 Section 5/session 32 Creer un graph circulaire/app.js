// Creer notre cadre 
 
var svg = d3.select('body')
            .append('svg')
            .attr('width', 700)
            .attr('height', 600)
            .style('background', 'antiqueWhite');

var items = [200, 300, 100, 300];

var data = d3.pie().sort(null)(items);

// console.log(data);

var segments = d3.arc()
                 .innerRadius(40)
                 .outerRadius(125)
                 .padAngle(0.02);
                 
// on va creer un groupe et y ajouter les éléments path

var sections = svg.append("g")
                  .attr('transform', 'translate(300,300)')
                  .selectAll('path')
                  .data(data)
                  .enter()
                  .append('path')
                  .attr('d', segments)
                  .attr('fill', 'crimson');