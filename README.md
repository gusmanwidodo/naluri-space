# Naluri Space Project
The Naluri space project is investigating how we could model the solar system.

## Prerequisites
- Node 12
- Docker

## The Concept


## How to run

### Fullstack development
> Backend
```
cd server
npm i
npm run dev
```

> Frontend
```
cd client
npm i
npm run serve
```

### Using docker compose
```
docker-compose up -d
```

## Project structure
```
.
├── Makefile
├── README.md
├── client
│   ├── README.md
│   ├── babel.config.js
│   ├── dist
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   │   ├── favicon.ico
│   │   └── index.html
│   ├── src
│   │   ├── App.vue
│   │   ├── assets
│   │   │   └── logo.png
│   │   ├── components
│   │   │   ├── PiCalculation.vue
│   │   │   └── SunCircumference.vue
│   │   ├── main.ts
│   │   ├── router
│   │   │   └── index.ts
│   │   ├── shims-tsx.d.ts
│   │   ├── shims-vue.d.ts
│   │   ├── store
│   │   │   └── index.ts
│   │   ├── util
│   │   │   └── api.ts
│   │   └── views
│   │       ├── Contact.vue
│   │       └── Home.vue
│   └── tsconfig.json
├── docker-compose.yml
└── server
    ├── Dockerfile
    ├── jest.config.js
    ├── package-lock.json
    ├── package.json
    ├── src
    │   ├── app.ts
    │   ├── controllers
    │   │   └── home.controller.ts
    │   ├── exceptions
    │   │   └── HttpException.ts
    │   ├── interfaces
    │   │   └── controller.interface.ts
    │   ├── lib
    │   │   ├── circle.ts
    │   │   └── spigot.ts
    │   ├── middleware
    │   │   ├── error.middleware.ts
    │   │   └── logger.middleware.ts
    │   ├── models
    │   │   └── picalculation.model.ts
    │   └── server.ts
    ├── tsconfig.json
    └── tslint.json
```
## Contact
- [Gusman Widodo (Linkedin)](https://www.linkedin.com/in/gusmanwidodo/)
