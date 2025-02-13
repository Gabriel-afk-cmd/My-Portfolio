<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>
    <h1>Login-Seite</h1>
    <form onsubmit="return checkPassword()">
        <label for="password">Passwort:</label>
        <input type="password" id="password" required>
        <button type="submit">Einloggen</button>
    </form>

    <script>
        function checkPassword() {
            const password = document.getElementById('password').value;
            if (password === 'meinGeheimesPasswort') {  // Passe hier dein Passwort an
                window.location.href = 'index1.html';  // Weiterleitung zur Hauptseite
                return false;
            } else {
                alert('Falsches Passwort!');
                return false;
            }
        }
    </script>
</body>
</html>
