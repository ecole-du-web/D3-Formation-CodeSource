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

// fonction de mise à jour
const maj = (donnee) => {
    console.log(donnee);
    
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