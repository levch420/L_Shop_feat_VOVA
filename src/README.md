# L_Shop

Прототип кондитерского магазина: **Express + TypeScript** (API), фронт — **SPA на клиенте** (данные с `/api/*`, без SSR).

## Скрипты

- `npm install`
- `npm run dev` — API на [http://localhost:3000](http://localhost:3000), клиент на [http://localhost:8081](http://localhost:8081) (прокси `/api` → 3000; порт можно задать `WEBPACK_PORT`)
- `npm run build` — сборка клиента в `dist/` и сервера в `server/dist/`
- `npm start` — продакшен: отдаётся `dist/` и API (нужен предварительный `npm run build`)
- `npm run lint` / `npm run format`

## GitHub и ветка review

1. Создайте репозиторий с именем **L_Shop**.
2. В проекте уже есть история коммитов в **main** и отдельная ветка **review** (создана как orphan, без общего предка с main).
3. После пуша обеих веток откройте **Pull Request из `main` в `review`** и **не закрывайте** его — в нём оставляют комментарии ревью.

## Команда из 3 человек

Пункт «доставка» в задании не делаем: в навигации нет раздела «Доставка», отдельного API доставки нет.
