// Importamos express
const express = require('express');
// Creamos una instancia de express
const app = express();
// Importamos el módulo path  de node.js e instanciamos Router de express
const path = require('path');
const router = express.Router();
// Adición de los modulos para admitir información mediante la URL y json
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Enrutamiento de peticiones GET a una URL de la navegación del sitio
router.get("/", (req, res) => {
    res.sendFile(path.join(`${__dirname}/templates/index.html`));
});
router.get("/contacto", (req, res) => {
    res.sendFile(path.join(`${__dirname}/templates/contacto.html`));
});
router.get("/perfil", (req, res) => {
    res.sendFile(path.join(`${__dirname}/templates/perfil.html`));
});

// Enrutamiento de petición POST
router.post("/", (req, res) => {
    // console.log(req.body);
    res.send("El usuario " + req.body.first_name + " ha sido registrad@");
});

app.use("/", router);
app.listen(process.env.port || 8080);

console.log("Servidor iniciado en el puerto 8080");