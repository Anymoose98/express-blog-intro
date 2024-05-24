// Array posts
const posts = [
  {
    titolo: "Scoprire le Meraviglie del Mondo",
    contenuto: "Esploriamo insieme alcune delle meraviglie più affascinanti del nostro pianeta, dai deserti alle foreste pluviali.",
    immagine: "https://example.com/images/meraviglie.jpg",
    tags: ["viaggi", "natura", "avventura"]
  },
  {
    titolo: "Guida alla Programmazione in JavaScript",
    contenuto: "In questa guida, ti mostreremo come iniziare a programmare in JavaScript, uno dei linguaggi più popolari al mondo.",
    immagine: "https://example.com/images/javascript.jpg",
    tags: ["programmazione", "JavaScript", "coding"]
  },
  {
    titolo: "Ricette Facili e Veloci per Tutti i Giorni",
    contenuto: "Scopri come preparare piatti deliziosi in pochi minuti con queste ricette semplici e veloci.",
    immagine: "https://example.com/images/ricette.jpg",
    tags: ["cucina", "ricette", "facile", "veloce"]
  },
  {
    titolo: "Fitness e Benessere: Come Mantenersi in Forma",
    contenuto: "Consigli e esercizi per mantenersi in forma e vivere una vita sana e attiva.",
    immagine: "https://example.com/images/fitness.jpg",
    tags: ["fitness", "benessere", "salute"]
  },
  {
    titolo: "Il Fascino dell'Arte Contemporanea",
    contenuto: "Un viaggio attraverso le opere e gli artisti che stanno plasmando il mondo dell'arte contemporanea.",
    immagine: "https://example.com/images/arte.jpg",
    tags: ["arte", "contemporanea", "cultura"]
  }
];

module.exports.index = function (req, res) {
  let html = `<div><ul>`;
  posts.forEach(post => html += `<li>
    <h2>${post.titolo}</h2>
    <img src="${post.immagine}" alt="${post.titolo}">
    <p>${post.contenuto}</p>
    <p><strong>Tags:</strong> ${post.tags.join(", ")}</p>
  </li>`)
  html += `</ul></div>`;
  res.send(html)
}


