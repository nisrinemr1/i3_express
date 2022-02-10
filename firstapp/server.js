
const express = require("express"); 
const app = express();
const port = process.env.PORT || 3000;

const userRouter = require("./router/users.router");
app.use("/api/users", userRouter)//ajoute l'utilisation d' /api/users rediriges-les vers des .users.router qui sont indiquer dans le user.router



app.listen(port, console.log(`Le serveur écoute sur le port ${port}`));
//nodemon ne fonctionne pas hors global! Si on ne veut pas utiliser nodemon, on ferais npm start!
