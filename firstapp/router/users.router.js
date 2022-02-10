//utilisation d'express!
const express = require("express");
const router = express.Router() //router d'Express donc il faut obligatiorement la majuscule


//localhos:3000/api/users/
router.get("/", (req, res)=>{
    //renvoie du json en api. Ceci est une bonne pratique 
        res.json({
            message: "Liste de tous les users"
        })
}); //demande resource


//localhost:3000/api/users/:id --> Get one users by id (recupere un user)
router.get("/:id", (req, res)=> {
    console.log(req.params.id)
    
    res.json({
        message: "Un seule user"
    })
}); //demande resource

//localhost:3000/api/users/ -->    Post all users (ajouter un user)
router.post("/", (req, res)=>{
    res.json({
        message: "Création d'un user"
    })
}); //publier les resource


//localhost:3000/api/users/:id --> PUT  one user (modifier un user)
router.put("/:id", (req, res) =>{
    res.json({
        message: "Modification d'un user"
    })
}); //ajout de resource 

//localhost:3000/api/users/:id --> DELETE one user (supprimer un user)
router.delete("/:id", (req, res)=>{
    res.json({
        message: "Suppression d'un user"
    })
}); // supprimer des resource.


module.exports = router;
//doit être exporter absolument!!! de sorte que le server puisse l'utiliser.