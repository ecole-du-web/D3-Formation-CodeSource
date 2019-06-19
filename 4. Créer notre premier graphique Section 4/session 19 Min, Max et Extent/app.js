const svg = d3.select('svg');


d3.json('data.json').then(donnee => {

    const min = d3.min(donnee, d => d.prix);
    const max = d3.max(donnee, d => d.prix);
    const extent = d3.extent(donnee, d => d.prix);
    console.log(min, max, extent);
    

    const y = d3.scaleLinear()
                .domain([0, max])
                .range([0, 500]);
    
    const x = d3.scaleBand()
                .domain(donnee.map(item => item.nom))
                .range([0, 600])
                .paddingInner(0.3)
                .paddingOuter(0.2)

    
    const rects = svg.selectAll('rect')
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