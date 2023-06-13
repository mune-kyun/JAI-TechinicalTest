# Stacks:

- postgreSQL
- express
- nuxt
- docker

# Run with db only being dockerize

Make sure you're in the most top directory. Then run these steps in order. Also, make sure to run these steps in 3 different terminal.

### init db:

- docker-compose -f docker-compose-dbonly.yml up -d

### be:

- change directory to be (cd be)
- npm install
- npm run generate
- npm run seed
- npm run dev

### fe:

- change directory to fe (cd fe)
- npm install
- npm run dev

notes:

- make sure you got npm, docker, and docker compose
- i've already seed some dummy user (username: test, password: test) (username: test2, password: test2)
- if you encountered any error feel free to contacted me :)
