# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

TODO
-> Sass -> Tailwind -> PostCSS

## Development

To run your Remix app locally, make sure your project's local dependencies are installed:

```sh
npm install
```

Afterwards, start the Remix development server like so:

```sh
npm run dev
```

Open up [http://localhost:3000](http://localhost:3000) and you should be ready to go!

If you're used to using the `vercel dev` command provided by [Vercel CLI](https://vercel.com/cli) instead, you can also use that, but it's not needed.

## 🧐 TODO

<details>
<summary>Other</summary>

- [ ] Build EsLint plugin to simplyfy the extracting of inline Tailwind.
      Before running Plugin

  ```tsx
  const Container = () => {
    return (
      <div className="flex flex-row mx-8 items-center name:Container">
        {/* .. */}
      </div>
    );
  };
  ```

  After running Plugin

  ```tsx
  const Component = () => {
    return <div className={Container}>{/* .. */}</div>;
  };

  const Container = tss`flex flex-row mx-8 items-center`;
  ```

  </details>

## 👨‍🏫 Learnings

### Problems with CSS-in-JS Libraries

- [How to increase CSS-in-JS performance](https://itnext.io/how-to-increase-css-in-js-performance-by-175x-f30ddeac6bce)
- [Why I moved from styled-components to Tailwind CSS](https://daily.dev/blog/why-i-moved-from-styled-components-to-tailwind-css-and-whats-the-future-of-css-in-js)

### Sass Preprocessing

- [Basic Preprocessing Guide](https://sass-lang.com/guide)

### Hide processed `.css` files

#### VS-Code

```json
//.vscode/settings.json
{
  "files.exclude": {
    "**/*.css": true,
    "**/*.css.map": true
  }
}
```

#### Webstorm/IntelliJ

Not neccessary as it automatically structures them below the `.scss` file.
