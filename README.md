# Meetapp

Meetapp é um projeto desenvolvido com a stack Javascript Node, React, React-native que tem a proposta emular o ambiente de um aplicativo web e mobile para organização de Meetups, assim como a plataforma Meetup. 
Este foi desenvolvido com a finalidade de comprovar minha proficiencia em Javascript e suas plataformas e frameworks presentes na stack Node, ReactJs, React Native, Postgres e Redis, com a utilização do Docker para a disponibilização dos bancos de dados através de containers.

## Getting Started

Para fins de teste você deve ter instalado em sua máquina uma versão LTS ou superior do NodeJs e o Docker com as imagens do MySQL e Redis devidamente configuradas.

### Pré Requisitos 

Segue os pré requisitos para rodar o projeto em localhost

* [NODE] (https://nodejs.org/en/download/) 
* [YARN] (https://yarnpkg.com/pt-BR/docs/install) 
* [DOCKER] (https://docs.docker.com/toolbox/toolbox_install_windows/) 
* [MAILTRAP] (https://mailtrap.io) 
* [AMBIENTE DEV ANDROID] (https://docs.rocketseat.dev/ambiente-react-native/introducao) - para projeto em react-native

O projeto meetapp mobile foi desenvolvido apenas para o ambiente ANDROID

#### Instalação Docker:
* [DOCKER TOOL BOX - WINDOWS](https://docs.docker.com/toolbox/toolbox_install_windows/) - No meu caso utilizei a toolbox para windows

#### Criar Container redis e prostgress

```
docker run --name name_database -e POSTGRES_PASSWORD=mysecretpass -p 5432:5432 -d postgres:11

docker run --name name_redis -p 6379:6379 -d -t redis:alpine

```

Com os bancos de dados instalados,crie uma conta no 
* [MAILTRAP](https://mailtrap.io) - para envio de emails

Antes de iniciar o serviço, crie um arquivo .env com as configurações necessárias de Bancos de dados, emails, e outras variáveis de ambiente necessárias


### Instalação

Passo a passo para rodar o projeto em localhost

Clonar o projeto contendo todas as pastas - API, MEETAPP WEB e MEETAPP MOBILE

```
git@github.com:Sanguinettecode/meetapps.git
```

para todos os projetos 

```
cd final_api
yarn
```

e 

```
cd meetapp_web
yarn
```

e finalmente 

```
cd meetapp_app
yarn
```

Com todos as dependências instaladas digite o comando adequado

```
/*para o serviço final api*/

yarn dev 

yarn queue
```

Respequitivamente para iniciar o serviço da api rest e o monitoramento das filas com Redis

```
/*para o projeto web*/

yarn start
```

e

```
/*para o projeto mobile*/

react-native run-android
```


## Imagens

![Exemplo tela mobile](https://github.com/Sanguinettecode/meetapps/blob/master/presentation_images/meetapp_mobile.jpg)
![Exemplo tela web](https://github.com/Sanguinettecode/meetapps/blob/master/presentation_images/meetapp_web.jpg)
 


