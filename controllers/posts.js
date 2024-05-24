const {base , posts} = require("../postsArray")
console.log(base)
console.log(posts)




module.exports.index = function (req, res) {
  // specifico il dato che stiamo dando
  res.type("html")
  let html = `<h3><a href="http://localhost:3000">Torna in home page</a></h3><div><ul>`;
  posts.forEach(post => html += `<li>
    <h2>${post.titolo}</h2>
    <img width="300" height="200" src="${post.immagine}" alt="${post.titolo}">
    <p>${post.contenuto}</p>
    <p><strong>Tags:</strong> ${post.tags.join(", ")}</p>
  </li>`)
  html += `</ul></div> `;
  res.send(html)
}


