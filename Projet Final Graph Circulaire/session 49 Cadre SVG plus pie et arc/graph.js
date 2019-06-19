const dims = {height: 300, width: 300, radius: 150};

const svg = d3.select('.box')
              .append('svg')
              .attr('width', dims.width + 150) // pour les labels
              .attr('height', dims.height + 150);

const graph = svg.append('g')
                 .attr('transform', `translate(${dims.width / 2 + 5}, ${dims.height / 2 + 5})`);

const pie = d3.pie()
              .sort(null)
              .value(d => d.prix);

const arcPath = d3.arc()
                  .outerRadius(dims.radius)
                  .innerRadius(dims.radius / 2);