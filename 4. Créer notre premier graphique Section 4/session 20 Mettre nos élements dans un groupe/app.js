const svg = d3.select('.box')
              .append('svg')
              .attr('width', 600)
              .attr('height', 600)
              .style('background', 'AntiqueWhite');


// Dimensions
const margin = {top: 20, right: 20, bottom: 100, left: 100};
const graphWidth = 600 - margin.left - margin.right;
const graphHeight = 600 - margin.top - margin.bottom;

const graph = svg.append('g')
                 .attr('width', graphWidth)
                 .attr('height', graphHeight)
                 .attr('transform', `translate(${margin.left}, ${margin.top})`);

d3.json('data.json').then(donnee => {


    // donnée Max
    const max = d3.max(donnee, d => d.prix);
    const y = d3.scaleLinear()
                .domain([0, max])
                .range([0, 480]);
    
    const x = d3.scaleBand()
                .domain(donnee.map(item => item.nom))
                .range([0, 480])
                .paddingInner(0.3)
                .paddingOuter(0.2)

    
    const rects = graph.selectAll('rect')
                     .data(donnee);
    
    rects.attr('width', x.bandwidth())
         .attr('height', function(d){return y(d.prix)})
         .attr('fill', 'teal')
         .attr('x', function(d){return x(d.nom)});

    rects.enter()
         .append('rect')
         .attr('width', x.bandwidth())
         .attr('height', function(d){return y(d.prix)})
         .attr('fill', 'teal')
         .attr('x', function(d){return x(d.nom)});
         


})