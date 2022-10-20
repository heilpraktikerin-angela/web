# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

TODO

## Development

To run your Remix app locally, make sure your project's local dependencies are installed:

```sh
pnpm install
```

Afterwards, start the Remix development server like so:

```sh
npm run dev
```

Open up [http://localhost:3000](http://localhost:3000) and you should be ready to go!

If you're used to using the `vercel dev` command provided by [Vercel CLI](https://vercel.com/cli) instead, you can also use that, but it's not needed.

## 🖌 Stylesheet generation

> -> Sass -> Tailwind

```bash
concurrently \"pnpm run generate:sass:css --watch\" \"pnpm run generate:tailwind:css --watch\"
```

The Sass Compiler watches all `.scss` files to give us the opportunity to create complex styles that Tailwind might not be able to handle.
These files will be compiled to `.css` files which then can be imported in the Component/s.

```ts
import styles from './blog.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}
```

The Tailwind Compiler only watches the compiled (from Sass) main `root.css` file
and compiles it to `tailwind.root.css` (adds used Tailwind styles, ..) which is imported in the root of the project.

## 🧐 TODO

<details>
<summary>Workflow optimization</summary>

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

## 🔴 Issues

### Tailwind classes not loading when using dynamic classes

- [Stackoverflow](https://stackoverflow.com/questions/71818458/tailwind-classes-not-loading-when-using-dynamic-classes-vue)
- [Docs](https://tailwindcss.com/docs/content-configuration#class-detection-in-depth)

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

### Tailwind Class Detection in Depth

- [Docs](https://tailwindcss.com/docs/content-configuration#class-detection-in-depth)

### Basic Git Commands

- [Good Overview](https://confluence.atlassian.com/bitbucketserver/basic-git-commands-776639767.html)

### `Inline` Flex

- [Stackoverflow](https://stackoverflow.com/questions/28732703/how-to-make-flex-div-take-only-the-needed-space)

### `.svg` to `favicon`

- [Nice Generator](https://realfavicongenerator.net/)
