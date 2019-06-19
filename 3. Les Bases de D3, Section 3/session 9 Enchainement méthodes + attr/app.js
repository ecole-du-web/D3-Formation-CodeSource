const box = d3.select('.box');

const svg  = box.append('svg')
        .attr('height', 500)
        .attr('width',600);


svg.append('rect')
    .attr('width', 150)
    .attr('height', 75)
    .attr('fill', "red")
    .attr('x', 50)
    .attr('y', 200);


svg.append('line')
    .attr('x1', 50)
    .attr('y1', 100)
    .attr('x2', 250)
    .attr('y2', 200)
    .attr('stroke', 'green');

svg.append('circle')
    .attr('r', 100)
    .attr('cx', 350)
    .attr('cy', 150)
    .attr('fill', 'pink');

