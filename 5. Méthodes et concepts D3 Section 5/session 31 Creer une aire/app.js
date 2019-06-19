var points = [[0, 100], [130, 180], [260, 100], [390, 180], [600, 100]];

var svg = d3.select('body')
            .append('svg')
            .attr("width", 600)
            .attr('height', 500)
            .style('background', 'antiqueWhite');
            
var area = d3.area().y0(500);

svg.append('path')
   .attr('d', area(points));