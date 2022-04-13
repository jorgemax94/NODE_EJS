const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    const items = [
        {
            title: "D",
            message: "Desenvolver com EJS"
        },
        {
            title: "E",
            message: "EJS usa Javascript para redenrizar HTML"
        },
        {
            title: "M",
            message: "Mais rapído"
        },
        {
            title: "A",
            message: "Altamente confiável"
        },
        {
            title: "I",
            message: "Imponente"
        },
        {
            title: "S",
            message: "Super fácil"
        }
    ];

    const subtitle = "Uma linguagem de modelagem para criação de páginas HTML utilizando JavaScript"
    res.render("pages/index", {
        qualidades: items,
        subtitle: subtitle
    });
})

app.get("/sobre", function(req, res){
    res.render("pages/about");
})


app.listen(8080, ()=>{
    console.log("listening on 8080");
})