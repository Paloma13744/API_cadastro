# API Cadastro de Clientes

Este projeto contém uma API para cadastro de clientes, permitindo que você adicione, visualize e exclua informações de clientes através de requisições HTTP.

## Funcionalidades

- **Cadastro de Clientes**: Adicione um novo cliente com nome, email e status.
- **Listagem de Clientes**: Visualize todos os clientes cadastrados.
- **Exclusão de Clientes**: Exclua clientes da base de dados.

## Tecnologias Utilizadas

- **Node.js** ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
- **Express** ![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
- **MongoDB** ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)
- **Prisma** ![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=flat&logo=prisma&logoColor=white)
- **Axios** ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat&logo=axios&logoColor=white)
- **Insomnia** ![Insomnia](https://img.shields.io/badge/Insomnia-4000BF?style=flat&logo=insomnia&logoColor=white)

## Como Executar o Projeto

### Pré-requisitos

Antes de rodar o projeto, tenha certeza de que você tem o **Node.js** e o **MongoDB** instalados na sua máquina.

Além disso, o **Prisma** deve ser configurado para conectar ao MongoDB.

### Passos

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/Paloma13744/API_cadastro.git
   ```

2. **Instale as dependências:**:
   ```bash
   npm install
   ```

3. **Configure o MongoDB: Certifique-se de que o MongoDB esteja rodando na sua máquina. Você pode usar um banco de dados local ou configurar um banco de dados remoto.**

4. **Configuração do Prisma: O Prisma é utilizado para gerenciar a conexão com o MongoDB. Após instalar as dependências, execute os seguintes comandos para configurar o Prisma:**
   ```bash
   npx prisma init
   ```

Isso criará um arquivo prisma/schema.prisma onde você pode configurar a conexão com o seu banco de dados MongoDB. 
O arquivo schema.prisma deve ser configurado com a string de conexão para o MongoDB. 
Aqui está um exemplo de como deve ficar a configuração de dados no arquivo schema.prisma:

datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model Customer {
  id        String @id @default(auto()) @map("_id") @db.ObjectId
  name      String
  email     String @unique
  status    Boolean
  createdAt DateTime @default(now())
}

   
5. **Configuração da URL do Banco de Dados: Adicione a URL de conexão do MongoDB no arquivo .env:**
   ```bash
   DATABASE_URL="mongodb+srv://<username>:<password>@cluster0.mongodb.net/mydb?retryWrites=true&w=majority"
   ```

6.**Gerando o Prisma Client: Após configurar o schema.prisma, execute o comando abaixo para gerar o cliente do Prisma:**
```bash
   npx prisma init
```

7.**Inicie o servidor: Para rodar a aplicação em desenvolvimento,use:**
```bash
  npm start
```


   
   
