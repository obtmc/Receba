const express = require('express');
const app = express();
const port = 3000;

// Middleware para servir arquivos estáticos (frontend)
app.use(express.static('../frontend'));

// Rota inicial
app.get('/api', (req, res) => {
  res.send('Backend está funcionando!');
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
