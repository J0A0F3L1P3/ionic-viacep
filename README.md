# Passo a passo para subir um projeto Ionic no GitHub usando GitHub Pages

Este guia irá ajudá-lo a fazer o deploy de uma aplicação Ionic no GitHub Pages, permitindo que você hospede seu aplicativo de forma gratuita e acessível via web.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado e configurado:

1. **Node.js e npm**: Necessários para executar comandos npm e Ionic.
2. **Ionic CLI**: Ferramenta de linha de comando do Ionic.
   - Verifique se você já tem o Ionic instalado com o comando:
     ```bash
     ionic --version
     ```
   - Se não estiver instalado, instale com:
     ```bash
     npm install -g @ionic/cli
     ```
   - Em sistemas Linux ou macOS, use `sudo` para permissões de administrador:
     ```bash
     sudo npm install -g @ionic/cli
     ```
3. **Git**: Sistema de controle de versão para gerenciar seu código.
   - [Baixe e instale o Git](https://git-scm.com/downloads)
4. **Conta no GitHub**: Para hospedar seu repositório e utilizar o GitHub Pages.
   - [Crie uma conta no GitHub](https://github.com/join)

## Passo 1: Criar um novo projeto Ionic

No terminal, execute:

```bash
ionic start meu-app blank --type=angular
```

- Substitua `meu-app` pelo nome do seu projeto.
- Quando solicitado, escolha o NgModules.

## Passo 2: Navegar até o diretório do projeto

```bash
cd meu-app
```

## Passo 3: Executar o projeto localmente

Para testar se tudo está funcionando corretamente, execute:

```bash
ionic serve
```

- O aplicativo estará disponível em `http://localhost:8100`.

## Passo 4: Inicializar um repositório Git

Dentro do diretório do projeto, inicialize o Git:

```bash
git init
```

Adicione todos os arquivos e faça um commit inicial:

```bash
git add .
git commit -m "Commit inicial"
```

## Passo 5: Criar um repositório no GitHub

1. Acesse o GitHub e crie um novo repositório:
   - Clique em **New** ou acesse [github.com/new](https://github.com/new).
   - Nomeie o repositório (por exemplo, `meu-app`).
   - Escolha entre público ou privado.
   - Não adicione nenhum arquivo inicial (README, .gitignore).

2. Copie a URL do repositório (por exemplo, `https://github.com/seu-usuario/meu-app.git`).

## Passo 6: Adicionar o repositório remoto e enviar o código

No terminal, adicione o repositório remoto:

```bash
git remote add origin https://github.com/seu-usuario/meu-app.git
```

Envie o código para o GitHub:

```bash
git push -u origin main
```

## Passo 7: Instalar o pacote angular-cli-ghpages

Este pacote permite fazer o deploy do seu aplicativo Angular (ou Ionic) no GitHub Pages de forma simples.

Instale globalmente:

```bash
ng add angular-cli-ghpages
```

## Passo 8: Configurar o script de deploy

Abra o arquivo `package.json` e adicione o seguinte script dentro de `"scripts"`:

```json
"scripts": {
  // ... outros scripts ...
  "deploy": "ionic build --prod && echo > www/.nojekyll && gh-pages -d www"
}
```

## Passo 9: Fazer o deploy para o GitHub Pages

No terminal, execute:

```bash
npm run deploy
```

Este comando irá:

- Construir o aplicativo para produção.
- Criar o diretorio para configuração
- Enviar o build para a branch `gh-pages` do seu repositório.

## Passo 10: Configurar href da pagina

No github:

- Acesse a branch `gh-pages`
- Acesse o arquivo `index.html`
- E altere o href do base

```html
<head>
  <meta charset="utf-8">
  <title>Ionic App</title>

  <base href="/my-app/">
```

- Salve as alterações e acesse o link:

```
https://seu-usuario.github.io/meu-app/
```

- Substitua `seu-usuario` pelo seu nome de usuário no GitHub.
- Substitua `meu-app` pelo nome do seu repositório.

## Dicas e Soluções de Problemas

- **Atualizando o aplicativo após mudanças no código?**
  - Faça as alterações necessárias.
  - Commit e push das mudanças:
    ```bash
    git add .
    git commit -m "Atualizações"
    git push origin master
    ```
  - Execute `npm run deploy` novamente para atualizar o GitHub Pages.
