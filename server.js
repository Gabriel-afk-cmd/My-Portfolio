const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

// Middleware für POST-Daten
app.use(bodyParser.urlencoded({ extended: false }));

// Login-Seite direkt anzeigen
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));  // Login-Seite wird immer zuerst angezeigt
});

// Passwortprüfung
app.post('/login', (req, res) => {
    const PASSWORD = "mein-geheimes-passwort";  // Hier dein Passwort festlegen
    const userPassword = req.body.password;

    if (userPassword === PASSWORD) {
        res.redirect('/index1.html');  // Weiterleitung zur Hauptseite
    } else {
        res.send(`
            <h1>Zugriff verweigert</h1>
            <p>Falsches Passwort. <a href="/">Zurück zur Login-Seite</a></p>
        `);
    }
});

// Statische Dateien bereitstellen (index.html, bildung.html usw.)
app.use(express.static(path.join(__dirname, 'public')));

// Server starten
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server läuft unter http://localhost:${PORT}`);
});
