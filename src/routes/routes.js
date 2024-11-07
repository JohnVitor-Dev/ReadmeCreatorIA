const express = require('express');
const router = express.Router();

router.get('/api/mensagem', (req, res) => {
    res.json({ mensagemBack: "Olá do backend!" });
});

module.exports = router;
