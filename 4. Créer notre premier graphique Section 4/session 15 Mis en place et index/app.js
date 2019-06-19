const svg = d3.select('svg');


d3.json('data.json').then(donnee => {

    const rects = svg.selectAll('rect')
                     .data(donnee);
    
    rects.attr('width', 50)
         .attr('height', function(d){return d.prix})
         .attr('fill', 'teal');

    rects.enter()
         .append('rect')
         .attr('width', 50)
         .attr('height', function(d){return d.prix})
         .attr('fill', 'teal')
         .attr('x', function(d,i){return i * 75});
         

    console.log(rects);
    

})