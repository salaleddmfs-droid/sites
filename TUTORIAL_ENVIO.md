# Tutorial de envio e publicacao do site

Este projeto esta na pasta local:

```text
c:\Users\Germano Martins\Documents\SalaLED
```

Repositorio no GitHub:

```text
https://github.com/salaleddmfs-droid/sites
```

Endereco publico do site na internet:

```text
https://salaleddmfs-droid.github.io/sites/
```

Este tutorial explica como o projeto foi enviado para o GitHub, como o link publico foi colocado no About do repositorio e como fazer novos envios no futuro.

## 1. Abrir a pasta do projeto

No VS Code, abra a pasta `SalaLED`.

No terminal PowerShell, entre na pasta com:

```powershell
Set-Location "c:\Users\Germano Martins\Documents\SalaLED"
```

## 2. Primeira configuracao do Git

Estes passos so foram necessarios na primeira vez.

Inicializar o Git dentro da pasta:

```powershell
git init
```

Configurar o nome e o e-mail para os commits deste projeto:

```powershell
git config user.name "Primeiro"
git config user.email "sala.led.dmfs@gmail.com"
```

Mudar o branch principal para `main`:

```powershell
git branch -M main
```

Ligar a pasta local ao repositorio do GitHub:

```powershell
git remote add origin https://github.com/salaleddmfs-droid/sites.git
```

Confirmar o remoto configurado:

```powershell
git remote -v
```

## 3. Primeiro commit do projeto

Ver os arquivos que vao entrar no Git:

```powershell
git status
```

Adicionar todos os arquivos:

```powershell
git add .
```

Criar o commit inicial:

```powershell
git commit -m "Initial site files"
```

## 4. Quando o GitHub ja tinha conteudo

O repositorio remoto ja tinha um commit inicial com o arquivo `LICENSE`. Para nao apagar esse conteudo, foi necessario juntar o historico remoto com o historico local.

Baixar a referencia do GitHub:

```powershell
git fetch origin main
```

Juntar os historicos, permitindo que sejam independentes:

```powershell
git merge origin/main --allow-unrelated-histories --no-edit
```

Depois disso, o `LICENSE` do GitHub ficou preservado e os arquivos do site tambem ficaram no mesmo historico.

## 5. Enviar para o GitHub

Enviar o branch `main` para o GitHub e deixar o branch local a acompanhar o remoto:

```powershell
git push -u origin main
```

Se o GitHub pedir autenticacao, conclua o login no navegador que abrir.

## 6. Confirmar que o envio correu bem

Verificar o estado local:

```powershell
git status --short --branch
```

Quando estiver tudo certo, deve aparecer algo parecido com:

```text
## main...origin/main
```

Tambem pode confirmar no GitHub:

```text
https://github.com/salaleddmfs-droid/sites
```

## 7. Ativar o GitHub Pages

O GitHub Pages e o que permite abrir o site pela internet.

No GitHub:

1. Abra o repositorio `salaleddmfs-droid/sites`.
2. Clique em `Settings`.
3. No menu lateral, clique em `Pages`.
4. Em `Build and deployment`, deixe `Source` como `Deploy from a branch`.
5. Em `Branch`, selecione `main`.
6. Na pasta, selecione `/ (root)`.
7. Clique em `Save`.

Depois de guardar, o GitHub deve mostrar uma mensagem parecida com:

```text
Your GitHub Pages site is currently being built from the main branch.
```

E normal o link dar `404` durante alguns minutos enquanto o GitHub constroi o site.

## 8. Link publico do site

Depois do GitHub Pages publicar, o site fica disponivel em:

```text
https://salaleddmfs-droid.github.io/sites/
```

Como o projeto tem `index.html` na raiz, o GitHub Pages abre esse arquivo automaticamente.

## 9. Colocar o link no About do repositorio

Para facilitar o acesso ao site pela internet, o link foi colocado no About do repositorio.

No GitHub:

1. Abra o repositorio.
2. No painel lateral do repositorio, clique no botao de editar detalhes do repositorio.
3. No campo `Website`, escreva:

```text
https://salaleddmfs-droid.github.io/sites/
```

4. Clique em `Save changes`.

Depois disso, o link aparece diretamente na pagina principal do repositorio.

## 10. Fluxo normal para proximos envios

Sempre que alterar arquivos do site, use este fluxo:

```powershell
git status
git add .
git commit -m "Descreve aqui a alteracao"
git push
```

Exemplos de mensagens de commit:

```text
Adiciona novo site
Atualiza estilos da galeria
Corrige texto do README
Adiciona tutorial de envio
```

Depois do `git push`, o GitHub Pages atualiza o site automaticamente. Pode demorar alguns minutos para a mudanca aparecer no endereco publico.

## 11. Se houver alteracoes feitas diretamente no GitHub

Antes de enviar novas alteracoes, se alguem mexeu no repositorio pelo navegador, baixe primeiro as mudancas:

```powershell
git pull
```

Depois faca o commit normal e envie:

```powershell
git add .
git commit -m "Atualiza site"
git push
```

Se aparecer conflito, e preciso resolver os arquivos indicados pelo Git, fazer novo commit e enviar novamente.

## 12. Arquivos principais do projeto

- `index.html`: estrutura principal da pagina.
- `style.css`: estilos visuais da galeria.
- `script.js`: dados e comportamento da galeria.
- `README.md`: descricao geral do projeto.
- `TUTORIAL_ENVIO.md`: este tutorial de envio e publicacao.
- `site1/dados.txt`: dados auxiliares do primeiro site.

## 13. Cuidados importantes

Nao apague a pasta `.git`. Ela guarda o historico local e a ligacao com o GitHub.

Nao use `git push --force` sem ter certeza. Esse comando pode sobrescrever historico remoto.

Antes de enviar, use sempre `git status` para perceber o que mudou.