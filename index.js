const { localsName } = require("ejs");
const express = require("express");
const { url } = require("inspector");
const path = require("path");

const app = express();
const port = 3000;


app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

let message = "";

app.get("/", (req, res) => {
  const devList = ["Backend", "Frontend", "Fullstack"];
  const analyticsList = ["Engenharia de dados", "Ciência de dados"];
  res.render("index", {
    titulo: "POKÉDEX",
    devList: devList,
    analyticsList: analyticsList,
    message,
  });
});

app.get("/detalhes/:poke", (req, res) => {
  let detalhe = req.params = pokedex.find(x => x.numero == detalhe)
  res.render("detalhes", {
    pekedex: pokedex,
    poedetalhe,
  });
});


app.post("/subscription", (req, res) => {
  const [{ nome: Nome, número: Número, tipo: Tipo, imagem: Imagem, descição: Descrição, altura: Altura, peso: Peso, categoria: Categoria, habilidade: Habilidade }] = req.body;
  message = `Parabéns ${nome}, sua inscrição foi realizada com sucesso! Um e-mail foi enviado para: ${email}`;
  res.redirect("/");
});

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);







