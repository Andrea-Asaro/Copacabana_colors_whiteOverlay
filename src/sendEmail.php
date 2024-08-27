<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recupera i dati inviati dal form
    $nome = htmlspecialchars($_POST['nome']);
    $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    $messaggio = htmlspecialchars($_POST['messaggio']);

    // Verifica che i dati siano validi
    if ($nome && $email && $messaggio) {
        // Definisci l'email di destinazione
        $to = "tuoindirizzo@example.com";
        $subject = "Messaggio da $nome";

        // Crea il corpo del messaggio
        $body = "Nome: $nome\n";
        $body .= "Email: $email\n";
        $body .= "Messaggio:\n$messaggio";

        // Imposta le intestazioni dell'email
        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "X-Mailer: PHP/" . phpversion();

        // Invia l'email
        if (mail($to, $subject, $body, $headers)) {
            echo "Messaggio inviato con successo!";
        } else {
            echo "Errore durante l'invio del messaggio.";
        }
    } else {
        echo "Errore: uno o più campi non sono validi.";
    }
} else {
    echo "Errore: metodo di richiesta non valido.";
}
?>
