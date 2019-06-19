const svg = d3.select('.box')
              .append('svg')
              .attr('width', 600)
              .attr('height', 550)
              .style('background', 'AntiqueWhite');


// Dimensions
const margin = {top: 20, right: 20, bottom: 100, left: 100};
const graphWidth = 600 - margin.left - margin.right;
const graphHeight = 600 - margin.top - margin.bottom;

const graph = svg.append('g')
                 .attr('width', graphWidth)
                 .attr('height', graphHeight)
                 .attr('transform', `translate(${margin.left}, ${margin.top})`);

const groupeX = graph.append('g')
                     .attr('transform', `translate(0, ${graphHeight})`);
const groupeY = graph.append('g')


db.collection('pays').get().then(res => {

       var donnee = [];
       res.docs.forEach(doc => {
              donnee.push(doc.data())
       })




    // donnée Max
    const max = d3.max(donnee, d => d.prix);
    const y = d3.scaleLinear()
                .domain([0, max])
                .range([graphHeight, 0]);
    
    const x = d3.scaleBand()
                .domain(donnee.map(item => item.nom))
                .range([0, 480])
                .paddingInner(0.3)
                .paddingOuter(0.2)

    
    const rects = graph.selectAll('rect')
                     .data(donnee);
    
    rects.attr('width', x.bandwidth())
         .attr('height', function(d){return graphHeight - y(d.prix)})
         .attr('fill', 'teal')
         .attr('x', function(d){return x(d.nom)})
         .attr('y', function(d){return y(d.prix)});

    rects.enter()
         .append('rect')
         .attr('width', x.bandwidth())
         .attr('height', function(d){return graphHeight - y(d.prix)})
         .attr('fill', 'teal')
         .attr('x', function(d){return x(d.nom)})
         .attr('y', function(d){return y(d.prix)});
         
// Création et mise en place des Axes

const axeX = d3.axisBottom(x)
const axeY = d3.axisLeft(y)
               .ticks(5)
               .tickFormat(d => d + ' Euros');

groupeX.call(axeX)
       .style('font-size', "14px");
groupeY.call(axeY)
       .style('font-size', "13px");

})