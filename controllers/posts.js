const { base, posts } = require("../postsArray")
const postsJson = require("../postsJson.json")
const fs = require('fs');
const path = require('path');



module.exports.index = function (req, res) {
  if (req.accepts('html')) {
    let html = `<h3><a href="http://localhost:3000">Torna in home page</a></h3><div><ul>`;
    posts.forEach(post => {
      html += `
        <li>
          <h2>${post.titolo}</h2>
          <img width="300" height="200" src="${post.immagine}" alt="${post.titolo}">
          <p>${post.contenuto}</p>
          <p><strong>Tags:</strong> ${post.tags.join(', ')}</p>
        </li>`;
    });
    html += `</ul></div>`;
    res.type('html').send(html);
  } else if (req.accepts('json')) {
    res.json(postsJson);
  } else {
    // Piccolo test
    res.status(406).send('Non Accettato');
  }
};


