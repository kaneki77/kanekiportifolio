<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Define o e-mail para onde as mensagens serão enviadas
    $to = "seuemail@example.com"; // Substitua pelo seu e-mail

    // Define o assunto do e-mail
    $subject = "Nova mensagem de contato";

    // Sanitiza os dados recebidos
    $name = filter_var(trim($_POST["name"]), FILTER_SANITIZE_STRING);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = filter_var(trim($_POST["message"]), FILTER_SANITIZE_STRING);

    // Monta o conteúdo do e-mail
    $emailContent  = "Nome: $name\n";
    $emailContent .= "Email: $email\n\n";
    $emailContent .= "Mensagem:\n$message\n";

    // Configura os cabeçalhos do e-mail
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Envia o e-mail e exibe uma mensagem de sucesso ou erro
    if (mail($to, $subject, $emailContent, $headers)) {
        echo "Obrigado! Sua mensagem foi enviada com sucesso.";
    } else {
        echo "Desculpe, ocorreu um erro e sua mensagem não pôde ser enviada.";
    }
} else {
    // Se não for uma requisição POST, redireciona para a página inicial
    header("Location: index.html");
    exit;
}
?>
