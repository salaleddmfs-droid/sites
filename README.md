# Galeria de Links

Uma galeria moderna de links para websites, com tema e autor exibidos abaixo de cada imagem.

## Funcionalidades

- ✅ Design responsivo (mobile, tablet, desktop)
- ✅ Busca em tempo real por tema ou autor
- ✅ Filtros por categoria (Design, Tecnologia, Negócios, Educação)
- ✅ Efeitos hover com zoom na imagem
- ✅ Tema escuro moderno com gradientes
- ✅ Animações suaves de entrada
- ✅ 12 itens de exemplo

## Como usar

1. Abra o arquivo `index.html` em qualquer navegador
2. Use a barra de busca para filtrar por tema ou autor
3. Clique nos botões de categoria para filtrar
4. Clique em uma imagem para visitar o site

## Adicionar novos links

Edite o arquivo `script.js` e modifique o array `galleryData`:

```javascript
const galleryData = [
    {
        id: 1,
        image: 'URL_DA_IMAGEM',
        theme: 'Nome do Tema',
        author: 'Nome do Autor',
        category: 'categoria', // design, tecnologia, negocios, educacao
        url: 'URL_DO_SITE'
    },
    // ... mais itens
];
```

## Tecnologias

- HTML5
- CSS3 (Grid, Flexbox, Variáveis CSS, Animações)
- JavaScript (ES6+)
- Font Awesome (ícones)
- Google Fonts (Poppins)

## Deploy no GitHub Pages

1. Crie um novo repositório no GitHub
2. Faça upload dos arquivos (`index.html`, `style.css`, `script.js`, `README.md`)
3. Ative o GitHub Pages nas configurações do repositório (branch: main, pasta: /root)
4. Seu site estará disponível em: `https://seu-usuario.github.io/nome-repositorio/`

## Licença

MIT License - sinta-se livre para usar e modificar.