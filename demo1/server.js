const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/api/products", (req, res) => {
    res.json({
        message: "Liste de tous les produits"
    })
});
app.get("/api/products/:id", (req, res) => {
    res.json({
        message: "Un seule produit"
    })
});
app.post("/api/products", (req, res) => {
    res.json({
        message: "Créationd d'un produit"
    })
});
app.put("/api/products/:id", (req, res) => {
    res.json({
        message: "Modification du produit"
    })
});
app.delete("/api/products/:id", (req,res) => {
    res.json({
        message: "Suppression d'un produit"
    })
});


app.get("/api/prices", (req, res) => {
    res.json({
        message: "Liste de tous les prix"
    })
});
app.get("/api/prices/:idProd", (req, res) => {
    res.json({
        message: "Un seule prix"
    })
});
app.post("/api/prices", (req, res) => {
    res.json({
        message: "Création d'un prix"
    })
});
app.put("/api/prices/:idProd", (req, res) => {
    res.json({
        message: "Modification d'un prix"
    })
});
app.delete("/api/prices/:idProd", (req,res) => {
    res.json({
        message: "Suppression d'un prix"
    })
})


app.get("/api/categories", (req, res) => {
    res.json({
        message: "Liste de tous les catégories"
    })
});
app.get("/api/categories/:idProd", (req, res) => {
    res.json({
        message: "Une seule catégorie"
    })
});
app.post("/api/categories", (req, res) => {
    res.json({
        message: "Création d'une catégories"
    })
});
app.put("/api/categories/:idProd", (req, res) => {
    res.json({
        message: "Modificationd d'une catégorie"
    })
});
app.delete("/api/categories/:idProd", (req,res) => {
    res.json({
        message: "Suppressiond d'une catégorie"
    })
})
//les 5 ne sont pas obligatoires! 


//imaginons un systemes contenant 3k de produits, je dois les paginer de 25 en 25
//localhost:3000/api/products De ça on va lui demander d'afficher qu'un certains nombre de produits. C'est que ce qu'express va matcher
//localhost:3000/api/products/?min=25&max=50 Ca c'est les option que l'on matchera dans le controle de la route.  
// Imaginons une recherche dans mon administration suivant le nom d'un client. 
//localhost:3000/api/products/:name.
//localhost:3000/api/products/:id. C'est la même chose et ne changera rien.




app.listen(port, console.log(`Le serveur écoute sur le port: ${port}`));