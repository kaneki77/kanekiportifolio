document.addEventListener('DOMContentLoaded', () => {
    // Obtém o botão "Learn More" pelo seu ID
    const learnMoreBtn = document.getElementById('learnMoreBtn');

    // Obtém o elemento <nav> pelo seletor de tag
    const nav = document.querySelector('nav');

    // Adiciona um evento de clique ao botão "Learn More"
    learnMoreBtn.addEventListener('click', () => {
        // Faz a rolagem suave até o elemento com ID "about"
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    });

    // Adiciona um evento de rolagem à janela
    window.addEventListener('scroll', () => {
        // Verifica se a rolagem vertical é maior que 50px
        if (window.scrollY > 50) {
            // Altera o fundo do elemento <nav> para um roxo com opacidade
            nav.style.background = 'rgba(75, 0, 130, 0.9)';
        } else {
            // Torna o fundo do elemento <nav> transparente
            nav.style.background = 'transparent';
        }
    });
});