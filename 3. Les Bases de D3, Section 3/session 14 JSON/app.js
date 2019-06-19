

d3.json('data.json').then(donnee => {
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
})


                

// .attr('r', function(d){return d.radius})

