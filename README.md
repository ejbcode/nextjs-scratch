# NextJs From Scratch

## Install

To create a project, run:

```bash
npx create-next-app my-app

  cd my-app
  npm run dev
```

## Folder structure

📦my-app

┣ 📂pages

┃ ┣ 📂api

┃ ┃ ┗ 📜hello.js

┃ ┣ 📜index.js

┃ ┗ 📜_app.js

┣ 📂public

┃ ┣ 📜favicon.ico

┃ ┗ 📜vercel.svg

┣ 📂styles

┃ ┣ 📜globals.css

┃ ┗ 📜Home.module.css

┣ 📜.gitignore

┣ 📜package-lock.json

┣ 📜package.json

┗ 📜README.md

## Pages

All React Component exported from a .js, .jsx, .ts, or .tsx file in the pages directory will become a page. Each page is associeted with a route based on its own file name.

**Example:**
If you create a React Component like below

```JS
const welcome = () => {
  return (
    <div>
      Welcome
    </div>
  )
}

export default welcome

```

it will be accessible at _/welcome_ with no need to import a router

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
