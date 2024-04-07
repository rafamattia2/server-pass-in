# Especificações

# pass.in

O pass.in é uma aplicação de **gestão de participantes em eventos presenciais**.

A ferramenta permite que o organizador cadastre um evento e abra uma página pública de inscrição.

Os participantes inscritos podem emitir uma credencial para check-in no dia do evento.

O sistema fará um scan da credencial do participante para permitir a entrada no evento.

### Tecnologias utilizadas

- [Typescript](https://www.typescriptlang.org/)
- [Fastify](https://fastify.dev/docs/latest/)
- [Prisma ORM](https://www.prisma.io/docs)

## Requisitos

### Requisitos funcionais

- [ ] O organizador deve poder cadastrar um novo evento;
- [ ] O organizador deve poder visualizar dados de um evento;
- [ ] O organizador deve poser visualizar a lista de participantes;
- [ ] O participante deve poder se inscrever em um evento;
- [ ] O participante deve poder visualizar seu crachá de inscrição;
- [ ] O participante deve poder realizar check-in no evento;

### Regras de negócio

- [ ] O participante só pode se inscrever em um evento uma única vez;
- [ ] O participante só pode se inscrever em eventos com vagas disponíveis;
- [ ] O participante só pode realizar check-in em um evento uma única vez;

### Requisitos não-funcionais

- [ ] O check-in no evento será realizado através de um QRCode;

## Especificações da API

[Swagger UI](https://nlw-unite-nodejs.onrender.com/docs/static/index.html)

## Banco de dados

Nessa aplicação vamos utilizar banco de dados relacional (SQL). Para ambiente de desenvolvimento seguiremos com o SQLite pela facilidade do ambiente.

### Para testar as requests

Basta importar o arquivo "insomnia-server-pass-in" no aplicativo do [Insomnia](https://nlw-unite-nodejs.onrender.com/docs/static/index.html) para conseguir testar as request.

## Diagrama ERD

![Diagrama ERD](./erd.svg){width=200rem}

# Como executar o projeto

```bash
# clonar repositório
git clone https://github.com/rafamattia2/server-pass-in.git

# instale as dependências (certifique-se de possuir o node em sua máquina)
npm install

# para rodar o projeto
npm run dev
# ou
npm run start


```
