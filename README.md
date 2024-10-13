# ViaCEP

Um aplicativo Ionic simples que permite buscar informações de endereços utilizando o serviço ViaCEP, através da entrada de um CEP ou informações de rua.

## Principais Funcionalidades

- **Buscar pelo CEP**: Digite um CEP e obtenha os dados correspondentes, como logradouro, bairro, cidade e UF.
- **Buscar por Rua**: Pesquise endereços informando a UF, cidade e nome da rua.
- **Interface Responsiva**: O aplicativo se adapta a diferentes tamanhos de tela, proporcionando uma experiência de usuário agradável.

## Tecnologias Utilizadas

- **Ionic**: Framework para o desenvolvimento de aplicativos móveis.
- **Angular**: Framework para construção de aplicações web.
- **HttpClient**: Para realizar requisições HTTP ao serviço ViaCEP.
- **ToastController**: Para exibir mensagens ao usuário.

## Como Configurar e Iniciar

1. **Clone o repositório**:

   ```bash[[
   git clone https://github.com/J0A0F3L1P3/ionic-viacep
   cd via_cep
   ```

2. **Instale as dependências**:

   ```bash
   npm install
   ```

3. **Inicie o aplicativo**:

   ```bash
   ionic serve
   ```

4. **Acesse o aplicativo**:

   Abra seu navegador e vá para `http://localhost:8100`.

## Como Usar

1. **Buscar pelo CEP**:
   - Insira um CEP no campo correspondente e clique no botão "Buscar pelo CEP". Os dados do endereço aparecerão na tela.

2. **Buscar por Rua**:
   - Preencha os campos de UF, cidade e nome da rua, e clique no botão "Buscar por RUA". Os endereços correspondentes serão exibidos.
