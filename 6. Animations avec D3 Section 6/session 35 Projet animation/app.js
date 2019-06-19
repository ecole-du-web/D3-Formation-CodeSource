var i = 0;

var svg = d3.select('body')
            .append('svg')
            .attr('width', 1920)
            .attr('height', 1080);

svg.append('rect')
.attr('width', 1920)
.attr('height', 1080)
.on('mousemove', anim);


function anim(){

    var coord = d3.mouse(this);
    //console.log(coord);
    
    svg.insert('circle', 'rect')
       .attr('cx', coord[0])
       .attr('cy', coord[1])
       .attr('r', 0)
       .attr('fill', d3.hsl((i = i + 1), 1, 0.5))
       .transition()
       .duration(1500)
       .ease(d3.easeCircleOut)
       .attr('r', 150)
       .style('opacity', 0)
       .remove();
}