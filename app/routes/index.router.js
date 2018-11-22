const router = require('../../config/servidorTest').app;

// Raiz do servidor
router.get("/", function(req, res) {
    res.send("<h1>Servidor rodando com ExpressJS<h1></h1>");
})

module.exports = router;