

const base ="http://localhost:3000/"
// Array posts
const posts = [
  {
    titolo: "Scoprire le Meraviglie del Mondo",
    contenuto: "Esploriamo insieme alcune delle meraviglie più affascinanti del nostro pianeta, dai deserti alle foreste pluviali.",
    immagine: `${base}travel.jpg`,
    tags: ["viaggi", "natura", "avventura"]
  },
  {
    titolo: "Guida alla Programmazione in JavaScript",
    contenuto: "In questa guida, ti mostreremo come iniziare a programmare in JavaScript, uno dei linguaggi più popolari al mondo.",
    immagine: `${base}programmazione.jpg`,
    tags: ["programmazione", "JavaScript", "coding"]
  },
  {
    titolo: "Ricette Facili e Veloci per Tutti i Giorni",
    contenuto: "Scopri come preparare piatti deliziosi in pochi minuti con queste ricette semplici e veloci.",
    immagine: `${base}kitchen.jpg`,
    tags: ["cucina", "ricette", "facile", "veloce"]
  },
  {
    titolo: "Fitness e Benessere: Come Mantenersi in Forma",
    contenuto: "Consigli e esercizi per mantenersi in forma e vivere una vita sana e attiva.",
    immagine: `${base}gym.jpg`,
    tags: ["fitness", "benessere", "salute"]
  },
  {
    titolo: "Il Fascino dell'Arte Contemporanea",
    contenuto: "Un viaggio attraverso le opere e gli artisti che stanno plasmando il mondo dell'arte contemporanea.",
    immagine: `${base}art.jpg`,
    tags: ["arte", "contemporanea", "cultura"]
  }
];

// esporto il file
module.exports ={
    base,
    posts
}