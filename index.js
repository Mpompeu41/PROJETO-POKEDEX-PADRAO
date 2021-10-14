const express = require("express");
const path = require("path");
const app = express();
   
const port = process.env.PORT || 3000;

const pokedex = [
  {
    numero: "005",
    nome: "Charmaleon",
    tipo: "Fire",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png",
    descricao: "Tem uma natureza bárbara. Na batalha, ele chicoteia sua cauda de fogo e o corta com garras afiadas.",
    altura: "1.1",
    peso: "19.0",
    categoria: "Flame",
    habilidade: "Blaze"
  },
  {
    numero: "006",
    nome: "Charizard",
    tipo: "Fire",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
    descricao: "Ele cospe fogo que é quente o suficiente para derreter pedregulhos. Pode causar incêndios florestais ao soprar chamas.",
    altura: "1.7",
    peso: "90.5",
    categoria: "Flame",
    habilidade: "Blaze"
  },
  {
    numero: "015",
    nome: "Beedrill",
    tipo: "Bug",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png",
    descricao: "Possui três ferrões venenosos nas patas dianteiras e na cauda. Eles são usados ​​para golpear seu inimigo repetidamente.",
    altura: "1.0",
    peso: "29.5",
    categoria: "Poison Bee",
    habilidade: "Swarm"
  }
];


app.set("view engine", "ejs");


app.use(express.static(path.join(__dirname, "public")));


app.use(express.urlencoded());


app.get("/", (req, res) => {
  res.render("index", {
    pokedex,
  });
});


app.get("/cadastro", (req, res) => {
  res.render("cadastro");
});


app.get("/detalhes/:id", (req, res) => {

  
  const id = req.params.id;
 
  
  const pokemon = pokedex[id];

  
  res.render("detalhes", { pokemon });
});


app.post("/subscription", (req, res) => {
  
  const { numero, nome, tipo, imagem, descricao, altura, peso, categoria, habilidade } = req.body;

 
  pokedex.push({
    numero,
    nome,
    tipo,
    imagem,
    descricao,
    altura,
    peso,
    categoria,
    habilidade,
  })

  
  res.redirect("/");
});


app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));






// const { localsName } = require("ejs");
// const express = require("express");
// const { url } = require("inspector");
// const path = require("path");

// const app = express();
// const port = 3000;


// app.set("view engine", "ejs");
// app.use(express.static(path.join(__dirname, "public")));
// app.use(express.urlencoded());

// let message = "";

// app.get("/", (req, res) => {
//   const devList = ["Backend", "Frontend", "Fullstack"];
//   const analyticsList = ["Engenharia de dados", "Ciência de dados"];
//   res.render("index", {
//     titulo: "POKÉDEX",
//     devList: devList,
//     analyticsList: analyticsList,
//     message,
//   });
// });

// app.get("/detalhes/:poke", (req, res) => {
//   let detalhe = req.params = pokedex.find(x => x.numero == detalhe)
//   res.render("detalhes", {
//     pekedex: pokedex,
//     poedetalhe,
//   });
// });


// app.post("/subscription", (req, res) => {
//   const [{ nome: Nome, número: Número, tipo: Tipo, imagem: Imagem, descição: Descrição, altura: Altura, peso: Peso, categoria: Categoria, habilidade: Habilidade }] = req.body;
//   message = `Parabéns ${nome}, sua inscrição foi realizada com sucesso! Um e-mail foi enviado para: ${email}`;
//   res.redirect("/");
// });

// app.listen(port, () =>
//   console.log(`Servidor rodando em http://localhost:${port}`)
// );







