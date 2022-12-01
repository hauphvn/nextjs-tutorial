## next.js
- [view youtube](https://www.youtube.com/watch?v=BeXbCgRxifs&list=PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH&index=15&ab_channel=Codevolution)
### foundation

- You can opt to use client-side rendering for specific components in your Next.js application by choosing to fetch data
  with React's ``useEffect()`` or  [useSWR](https://swr.vercel.app/).
- You can opt to server-side render pages by
  using [getServerSideProps](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props).
- With Static Site Generation, content is generated once, at build time, when application is deployed. HTML is stored in
  a [CDN](https://nextjs.org/learn/foundations/how-nextjs-works/cdns-and-edge) and re-used for each request.
    - You can use opt to statically generate pages by
      using [getStaticProps](https://nextjs.org/docs/basic-features/data-fetching/get-static-props).

### create next app

- The component in pages can have any name, but you must export it as a ``default`` export.
- If you need to link to an external page outside the Next.js app, just use an ``<a>`` tag without ``Link``.

### Two forms of Pre-rendering

- ***Static Generation:***
    - The HTML is generated at build-time and is reused for each request
    - In development mode: pages are pre-rendered on every request. This also applies to Static Generation to make is
      easier to develop. In production mode: Static Generation will happen once, at build time, not on every request.
    - ``getStaticPaths()``:

  ```ts
  return {
  paths,
  fallback: false
  // false: return 404 if throw error
  // true: still render UI if has error
  }
  ``` 
- **Server-side Rendering**



[//]: # (This is a [Next.js]&#40;https://nextjs.org/&#41; project bootstrapped with [`create-next-app`]&#40;https://github.com/vercel/next.js/tree/canary/packages/create-next-app&#41;.)

[//]: # ()
[//]: # (## Getting Started)

[//]: # ()
[//]: # (First, run the development server:)

[//]: # ()
[//]: # (```bash)

[//]: # (npm run dev)

[//]: # (# or)

[//]: # (yarn dev)

[//]: # (```)

[//]: # ()
[//]: # (Open [http://localhost:3000]&#40;http://localhost:3000&#41; with your browser to see the result.)

[//]: # ()
[//]: # (You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.)

[//]: # ()
[//]: # ([API routes]&#40;https://nextjs.org/docs/api-routes/introduction&#41; can be accessed on [http://localhost:3000/api/hello]&#40;http://localhost:3000/api/hello&#41;. This endpoint can be edited in `pages/api/hello.ts`.)

[//]: # ()
[//]: # (The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes]&#40;https://nextjs.org/docs/api-routes/introduction&#41; instead of React pages.)

[//]: # ()
[//]: # (## Learn More)

[//]: # ()
[//]: # (To learn more about Next.js, take a look at the following resources:)

[//]: # ()
[//]: # (- [Next.js Documentation]&#40;https://nextjs.org/docs&#41; - learn about Next.js features and API.)

[//]: # (- [Learn Next.js]&#40;https://nextjs.org/learn&#41; - an interactive Next.js tutorial.)

[//]: # ()
[//]: # (You can check out [the Next.js GitHub repository]&#40;https://github.com/vercel/next.js/&#41; - your feedback and contributions are welcome!)

[//]: # ()
[//]: # (## Deploy on Vercel)

[//]: # ()
[//]: # (The easiest way to deploy your Next.js app is to use the [Vercel Platform]&#40;https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme&#41; from the creators of Next.js.)

[//]: # ()
[//]: # (Check out our [Next.js deployment documentation]&#40;https://nextjs.org/docs/deployment&#41; for more details.)
