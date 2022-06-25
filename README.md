# Laravel React Starter Kit

- Laravel
- React
- Typescript
- Tailwind CSS
- Husky
- ESLint

# Getting Started

Create `.env` from `.env.example`.

```
cp .env.example .env
```

Run docker container.

```
docker-compose up
```

Genarate laravel app key.

```
docker-compose exec web php artisan key:generate
```

Migarate database.

```
docker-compose exec web php artisan migrate
```
