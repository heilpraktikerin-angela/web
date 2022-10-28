# 🩺 `Heilpraktikerin Angela Kohrs`

This is a website built with Remix for a client called Angela Kohrs.

## 🔗 Useful Links

- [Remix Docs](https://remix.run/docs)
- [Netlify Functions](https://www.netlify.com/products/functions/)

## 📡 Netlify Setup

1. Install the [Netlify CLI](https://www.netlify.com/products/dev/):

```sh
npm i -g netlify-cli
```

If you have previously installed the Netlify CLI, you should update it to the latest version:

```sh
npm i -g netlify-cli@latest
```

2. Sign up and log in to Netlify:

```sh
netlify login
```

3. Make your local repository known to Netlify via the `Site ID`.

```sh
netlify init
# or
netlify link
```

## 🛠 Development

The Remix dev server starts your app in development mode, rebuilding assets on file changes. To start the Remix dev server:

```sh
npm run dev
```

Open up [http://localhost:3000](http://localhost:3000), and you should be ready to go!

The Netlify CLI builds a production version of your Remix App Server and splits it into Netlify Functions that run locally. This includes any custom Netlify functions you've developed. The Netlify CLI runs all of this in its development mode.

```sh
netlify dev
```

Open up [http://localhost:3000](http://localhost:3000), and you should be ready to go!

Note: When running the Netlify CLI, file changes will rebuild assets, but you will not see the changes to the page you are on unless you do a browser refresh of the page. Due to how the Netlify CLI builds the Remix App Server, it does not support hot module reloading.

## 📬 Deployment

There are two ways to deploy your app to Netlify, you can either link your app to your git repo and have it auto deploy changes to Netlify, or you can deploy your app manually. If you've followed the setup instructions already, all you need to do is run this:

```sh
# preview deployment
netlify deploy --build

# production deployment
netlify deploy --build --prod
```

## 🤔 Good to Know

### 🖌 Stylesheet generation

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

[ ] Implement feature to collect Email Adresses with Mailchimp (max 500 sub -> should be enough for now)
[ ] Make mobile navbar smaller (by just showing the Logo) when scrolling down (nice transition)

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

### Netlify deploy Error: Cannot finde module 'x'

- [Stackoverflow](https://stackoverflow.com/questions/67361635/netlify-deploy-error-cannot-find-module-gatsby-plugin-image-graphql-utils)

### Additional (not imported) dependencies for Remix site deploy to Netlify required?

- [Set env in Netlify Build Settings](https://docs.netlify.com/configure-builds/file-based-configuration/#build-settings)
- [**Issue resolved Thread**](https://answers.netlify.com/t/nuxt-3-deploy-failed-rollup-failed-to-resolve-import-vue/77680/13)
- [Issue asked Thread](https://answers.netlify.com/t/remix-app-deploy-runtime-handlernotfound-server-handler-is-undefined-or-not-exported/77847/11)
- [Stackoverflow](https://stackoverflow.com/questions/74165217/additional-not-imported-dependencies-for-remix-site-deploy-to-netlify-required)

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

### `.svg` to `favicon` converter

- [Nice Generator](https://realfavicongenerator.net/)

### Deploy Remix App to Netlify

- [Docs](https://docs.netlify.com/integrations/frameworks/remix/)

### Absolute Positioning Inside Relative Positioning

- [Blog](https://css-tricks.com/absolute-positioning-inside-relative-positioning/)
