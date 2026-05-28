# 🚀 Portfólio de Gustavo Moura (Kaneki) - Design Moderno Minimalista

> **Criando o futuro da tecnologia com código e automação inteligente.**  
> Portfólio profissional com design moderno minimalista em cores escuras, otimizado para apresentar trabalhos em automação industrial, IoT e desenvolvimento web.

---

## 👨‍💻 Sobre mim

Eu sou o **Gustavo Moura**, freelancer em Desenvolvimento Web e Automação Industrial, apaixonado por unir programação e controle industrial para transformar processos e criar soluções inovadoras. Com experiência adquirida como estagiário em Instrumentação e Automação na Usina Coruripe, atuo atualmente de forma independente desenvolvendo soluções que conectam o mundo digital aos processos físicos.

- 🔧 **Linguagens e tecnologias:** Python, C#, Flask, Kivy, SQLite, Firebase, HTML/CSS/JS  
- ⚙️ **Prática em programação:** SFC (Sequential Function Charts) com tecnologia IO-Link para automação avançada  
- 🌐 **Desenvolvimento:** Backend e frontend, integração com bancos de dados e interfaces intuitivas   
- 💡 **Foco:** IoT, automação inteligente e simulação de controle industrial
- 🎓 **Formação:** Bacharelado em Sistemas de Informação — UEMG (cursando, 5º período)

---

## ✨ Características do Portfólio

### Design Moderno Minimalista
- **Paleta de cores escuras:** Preto (#0a0a0a), cinza escuro (#121212), cinza médio (#1a1a1a)
- **Tipografia limpa:** Sistema de fontes nativas para melhor performance
- **Animações suaves:** Transições elegantes e interações fluidas
- **Responsivo:** Funciona perfeitamente em desktop, tablet e mobile

### Seções Principais
1. **Hero:** Apresentação impactante com nome e especialidades
2. **Sobre:** Biografia profissional com estatísticas
3. **Habilidades:** Cards organizados por categoria (Automação, IoT, Desenvolvimento)
4. **Projetos:** Showcase dos principais projetos com links
5. **Portfólio:** Galeria de fotos e vídeos dos trabalhos realizados ⭐
6. **Experiência:** Timeline profissional e formação acadêmica
7. **Contato:** Informações de contato e redes sociais

### Galeria de Portfólio (Novo!)
- **Filtros por categoria:** Automação, IoT, Desenvolvimento
- **Suporte a imagens e vídeos:** Visualização em modal fullscreen
- **Fácil adição de conteúdo:** Funções JavaScript para adicionar mídia dinamicamente
- **Layout responsivo:** Grid adaptável a diferentes tamanhos de tela

---

## 📸 Como Adicionar Fotos e Vídeos ao Portfólio

### Método 1: Via Console do Navegador

1. Abra o site no navegador
2. Pressione `F12` para abrir o DevTools
3. Vá para a aba `Console`
4. Use os comandos abaixo:

**Para adicionar uma imagem:**
```javascript
addImageToPortfolio('assets/minha-foto.jpg', 'Título da Imagem', 'Descrição do trabalho', 'automation');
```

**Para adicionar um vídeo:**
```javascript
addVideoToPortfolio('assets/meu-video.mp4', 'Título do Vídeo', 'Descrição do trabalho', 'iot');
```

**Categorias disponíveis:**
- `automation` - Automação Industrial
- `iot` - IoT e Conectividade
- `development` - Desenvolvimento Web
- `all` - Todos (não use como categoria de item)

**Para remover os placeholders de exemplo:**
```javascript
removePlaceholders();
```

### Método 2: Editando o HTML Diretamente

1. Abra o arquivo `index.html`
2. Localize a seção `<!-- Portfolio Section -->`
3. Adicione novos itens dentro do `<div class="portfolio-grid">`:

**Exemplo de item de imagem:**
```html
<div class="portfolio-item" data-category="automation">
  <div class="portfolio-media">
    <img src="assets/sua-imagem.jpg" alt="Título">
    <div class="portfolio-overlay">
      <button class="media-view-btn" data-type="image" data-src="assets/sua-imagem.jpg">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"/>
          <path d="M21 21l-4.35-4.35"/>
        </svg>
      </button>
    </div>
  </div>
  <div class="portfolio-info">
    <h4>Título do Trabalho</h4>
    <p>Descrição breve do trabalho realizado</p>
  </div>
</div>
```

**Exemplo de item de vídeo:**
```html
<div class="portfolio-item" data-category="iot">
  <div class="portfolio-media">
    <video src="assets/seu-video.mp4" style="width: 100%; height: 100%; object-fit: cover;"></video>
    <div class="portfolio-overlay">
      <button class="media-view-btn" data-type="video" data-src="assets/seu-video.mp4">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"/>
          <path d="M21 21l-4.35-4.35"/>
        </svg>
      </button>
    </div>
  </div>
  <div class="portfolio-info">
    <h4>Título do Vídeo</h4>
    <p>Descrição do processo ou projeto</p>
  </div>
</div>
```

### Método 3: Organizando os Arquivos

1. Coloque suas imagens e vídeos na pasta `assets/`
2. Use nomes descritivos: `projeto-automacao-01.jpg`, `demo-iot.mp4`
3. Formatos recomendados:
   - **Imagens:** JPG, PNG, WebP
   - **Vídeos:** MP4, WebM

---

## 🚩 Projetos em Destaque

| Projeto                     | Descrição                                                                   | Tecnologias / Ferramentas             | Link                   |
|----------------------------|-----------------------------------------------------------------------------|-------------------------------------|------------------------|
| Usina Pixelada   | Interface web interativa simulando painel de controle de uma planta industrial | Flask, JavaScript, CSS               | [Repositório](https://github.com/kaneki77/Usina-Pixelada)       |
| Painel IoT - Instrumentação Virtual       | Controle virtual para válvulas de usina com backend em Flask       | Flask, MQTT, Python                       | Em Desenvolvimento       |
| Sistema de Monitoramento Industrial    | Plataforma completa para monitoramento de equipamentos industriais             | SCADA, Analytics, API            | Em Planejamento       |
| Portfólio Moderno          | Site pessoal com design minimalista para mostrar projetos         | HTML, CSS, JS                      | [Repositório](https://github.com/kaneki77/kanekiportifolio)       |

---

## 🎯 Estrutura do Projeto

```
kanekiportifolio/
├── index.html          # Página principal
├── style.css           # Estilos minimalistas em cores escuras
├── script.js           # JavaScript com funcionalidades da galeria
├── README.md           # Este arquivo
├── assets/             # Pasta para imagens e vídeos
│   ├── automation_bg.jpg
│   ├── control_panel.jpg
│   ├── iot_sensors.jpg
│   ├── modern_factory.jpg
│   ├── github.png
│   ├── linkedin.png
│   ├── gmail.png
│   └── insta.png
└── [backups]           # Arquivos de backup (.backup)
```

---

## 🚀 Como Usar

### Visualizar Localmente

1. Clone o repositório:
```bash
git clone https://github.com/kaneki77/kanekiportifolio.git
cd kanekiportifolio
```

2. Abra o arquivo `index.html` no navegador

### Deploy no GitHub Pages

1. Vá para as configurações do repositório no GitHub
2. Navegue até **Pages** no menu lateral
3. Em **Source**, selecione a branch `main` e pasta `/ (root)`
4. Clique em **Save**
5. Aguarde alguns minutos e acesse: `https://kaneki77.github.io/kanekiportifolio/`

---

## 🎨 Personalização

### Alterar Cores

Edite as variáveis CSS no arquivo `style.css`:

```css
:root {
  --bg-primary: #0a0a0a;      /* Fundo principal */
  --bg-secondary: #121212;     /* Fundo secundário */
  --bg-card: #1e1e1e;         /* Fundo dos cards */
  --text-primary: #e0e0e0;    /* Texto principal */
  --text-secondary: #a0a0a0;  /* Texto secundário */
  --accent-primary: #ffffff;   /* Cor de destaque */
}
```

### Atualizar Informações Pessoais

Edite o arquivo `index.html` e procure pelas seções:
- **Hero:** Linha ~44 (nome e título)
- **Sobre:** Linha ~58 (biografia)
- **Experiência:** Linha ~229 (timeline profissional)
- **Contato:** Linha ~264 (email, LinkedIn, GitHub)

---

## 📫 Contato

- **LinkedIn:** [Gustavo Moura](https://www.linkedin.com/in/gustavo-moura-carvalho-bab964366/)  
- **GitHub:** [@kaneki77](https://github.com/kaneki77)  
- **Email:** Gustavogtavb45@gmail.com

---

## 🌟 Tecnologias Utilizadas

<div align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="40" alt="HTML5" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="40" alt="CSS3" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="40" alt="JavaScript" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" width="40" alt="Python" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" width="40" alt="Flask" />
</div>

---

## 📝 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar como inspiração para seu próprio portfólio!

---

## 🚀 Vamos conectar e criar o amanhã!

Sou movido pela vontade de construir sistemas que conectam o mundo físico ao digital, com inovação e eficiência. Sinta-se à vontade para explorar meus projetos, colaborar ou trocar ideias.

---

*"Automação não é o futuro, é o presente que molda o amanhã."*  
— Kaneki

---

**Desenvolvido com ❤️ por Gustavo Moura**
