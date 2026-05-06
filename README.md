# Galeria de Links

Uma galeria moderna de links para websites, com tema e autor exibidos abaixo de cada imagem.

## Funcionalidades

- ✅ Design responsivo (mobile, tablet, desktop)
- ✅ Busca em tempo real por tema ou autor
- ✅ Filtros por categoria gerados automaticamente
- ✅ Efeitos hover com zoom na imagem
- ✅ Tema escuro moderno com gradientes
- ✅ Animações suaves de entrada
- ✅ Dados lidos automaticamente de `site1/dados.txt`

## Como usar

1. Abra o arquivo `index.html` em qualquer navegador
2. Use a barra de busca para filtrar por tema ou autor
3. Clique nos botões de categoria para filtrar
4. Clique em uma imagem para visitar o site

## Adicionar novos sites

Edite o arquivo `site1/dados.txt` e adicione um novo objeto à lista JSON:

```json
[
    {
        "id": 10,
        "tema": "Nome do tema",
        "autor": "Nome do autor",
        "categoria": "Categoria",
        "url": "site1/pasta-do-site/index.html",
        "imagem": "site1/screenshots/imagem-do-site.png",
        "descricao": "Resumo curto do site."
    }
]
```

As imagens usadas no portal ficam em `site1/screenshots/`.

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