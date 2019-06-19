
var donnee = [{radius:20, x:50, y:50, color:"red"},
               {radius:25, x:150, y:50, color:"deeppink"},
               {radius:30, x:250, y:50, color:"indigo"},
               {radius:35, x:350, y:50, color:"pink"},
               {radius:40, x:450, y:50, color:"green"}];


const svg = d3.select('svg');

const circles = svg.selectAll('circle')
                   .data(donnee)
                   .attr('r', function(d){return d.radius})
                   .attr('cx', function(d){return d.x})
                   .attr('cy', function(d){return d.y})
                   .attr('fill', function(d){return d.color});

circles.enter()
       .append('circle')
       .attr('r', function(d){return d.radius})
       .attr('cx', function(d){return d.x})
       .attr('cy', function(d){return d.y})
       .attr('fill', function(d){return d.color});

                

// .attr('r', function(d){return d.radius})

