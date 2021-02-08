# NextJs 101

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

## Layout

The _\_app.js_ file wraps around all of your page components, so it's a good place to put our Layout component.

_page/\_app.js_

```JS
import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
        <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
```

```JS
import React from 'react'

const Layout = ({children}) => {
  return (
    <div>
      Header
        <div className="main">
          {children}
        </div>
      Footer
    </div>
  )
}

export default Layout
```

## Head Component

Head is a 'next/head' component that can be imported from any Next.js page component to add information to the page header. In this component you can customize the page title, all of the website metadata, page keywords, viewport settings

```HTML
 <Head>
    <title>NextJS 101</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Head>
```

This should be imported in each page, but we can create a Layout with the Head component in it.
_e.g:.:_

```JS
import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'My App Title',
  keywords: 'nextjs, react',
  description: 'Next From scratch',
}

export default Meta

```

## Link component

Similar to what we would do with React-Router we use Link to navigate between pages imported from next
import Link from "next/link";

<Link href="/"><a>home</a></Link>

With that in mind, now we can create a Nav component to navigate through our links and then imported in the Layout component

```js
import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  return (
    <nav className="nav">
      <ul>
        <li className={router.pathname == "/" ? "active" : ""}>
          <Link href="/">
            <a>home</a>
          </Link>
        </li>
        <li className={router.pathname == "/welcome" ? "active" : ""}>
          <Link href="/welcome">
            <a>Welcome</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
```

## Image Component

The Next.js Image component allow you're to take advantage of lazy loading as well as optimizations around image sizes.
Next.js optimizes images on-demand, as users request them. Unlike static site generators and static-only solutions, your build times aren't increased, whether shipping 10 images or 10 million images.

```JS
import Image from 'next/image'

const Nav = () => {

  const router = useRouter()
  return (
    <div className="nav">
      <Image src="/logo.png"  alt="site logo"  width={90} height={50}/>
    </div>
  )
}

export default Nav

```

## Data Fetching and Rendering

Next.js provide two forms of pre-rendering: Static Generation and Server-side that differ when generates the HTML for a page.

Static Generation is the pre-rendering method that generates the HTML at build time. The pre-rendered HTML is then reused on each request.
Server-side Rendering is the pre-rendering method that generates the HTML on each request
In the Static Generation, the HTML pages are rendered at build time.

### Static Generation with getStaticProps

```JS
export async function getStaticProps() {
  const res = await fetch(`https:....`)
  const data = await res.json()

  return {
    props: {
      data
    }
  }
}
```

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
