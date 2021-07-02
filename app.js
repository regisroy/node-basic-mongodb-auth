const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('Requête reçue !');
    next();
});

app.use((req, res, next) => {
    res.status(201);
    console.log('Changement status !');
    next();
});

app.use((req, res, next) => {
    res.json({ message: 'Votre requête a bien été reçue !' });
    console.log('Changement response');
    next();
});

app.use((req, res, next) => {
    console.log('Réponse envoyée avec succès !');
});

module.exports = app;