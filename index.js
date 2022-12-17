// Importamos express
const express = require('express');
// Creamos una instancia de express
const app = express();
// Importamos el módulo path  de node.js e instanciamos Router de express
const path = require('path');
const router = express.Router();

router.get("/", (req, res) => {
    res.sendFile(path.join(`${__dirname}/templates/index.html`));
});
router.get("/contacto", (req, res) => {
    res.sendFile(path.join(`${__dirname}/templates/contacto.html`));
});
router.get("/perfil", (req, res) => {
    res.sendFile(path.join(`${__dirname}/templates/perfil.html`));
});

app.use("/", router);
app.listen(process.env.port || 8080);

console.log("Servidor iniciado en el puerto 8080");