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

// couleur

const couleur = d3.scaleOrdinal((d3['schemeAccent']));

// fonction de mise à jour
const maj = (donnee) => {
    
    // domaine des couleurs
    couleur.domain(donnee.map(d => d.nom));

    const paths = graph.selectAll('path')
                       .data(pie(donnee));

    //console.log(paths.enter());
    
    // exit
    paths.exit().remove();

    // maj du dom
    paths.attr('d', arcPath);

    paths.enter()
        .append('path')
        .attr('d', arcPath)
        .attr('stroke', '#fff')
        .attr('stroke-width', 3)
        .attr('fill', d => couleur(d.data.nom));
    
}

// appel de la db et rester à l'écoute

var donnee = [];

db.collection('dépenses').onSnapshot(res => {

    res.docChanges().forEach(change => {

        const doc = {...change.doc.data(), id: change.doc.id};

        switch(change.type) {
            case 'added':
                donnee.push(doc);
                break;
            case 'modified':
                const index = donnee.findIndex(item => item.id == doc.id);
                donnee[index] = doc;
                break;
            case 'removed':
                donnee = donnee.filter(item => item.id !== doc.id);
                break;
            default:
                break;
        }
    });

    maj(donnee);
})