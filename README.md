# 🩺 `Heilpraktikerin Angela`

This website built was built with Remix for a client called `Angela`.

#### 🕐 Time spent building this project

- `web:`
  [![wakatime](https://wakatime.com/badge/user/aa5a8ce7-1c57-4f26-a159-ea57ec5ea7c1/project/0206e189-973d-485a-868e-4c1a18489a28.svg)](https://wakatime.com/badge/user/aa5a8ce7-1c57-4f26-a159-ea57ec5ea7c1/project/0206e189-973d-485a-868e-4c1a18489a28)

- `design + concept:` ~ 30h

## 🔗 Useful Links

- [Remix Docs](https://remix.run/docs)
- [Netlify Functions](https://www.netlify.com/products/functions/)

---

## 🌝 Design

This website was designed in Figma. The Figma link is for privacy reasons not
yet public.

<details>
<summary>Design Preview</summary>

<img src="https://raw.githubusercontent.com/heilpraktikerin-angela/web/master/static/landing_v1.png" alt="AgileTs">

</details>

---

## 🛠 Local Development

1. Setup environment variables:

   ```env
   # .env.local

   # Analytics
   GA_TRACKING_ID="1234"

   # Note: I wasn't allowed to publicly share the contact information on Github.
   # This was a condition for making the code available open source
   # Don't ask me why because the website is public anyway but who cares lol.
   CONTACT_PHONE_NUMBER="+12 3456 789012"
   CONTACT_FIRST_NAME="Jeff"
   CONTACT_LAST_NAME="Rocks"
   CONTACT_ADDRESS_STREET="Muster-Street"
   CONTACT_ADDRESS_STREET_NUMBER=3
   CONTACT_ADDRESS_POST_CODE=12345
   CONTACT_ADDRESS_CITY="Jeffhausen"
   CONTACT_SURROUNDING="Jeffhausen / Jeffcity"
   CONTACT_EMAIL="jeff@jeff.com"
   CONTACT_HOMEPAGE="https://www.jeff.de"
   ```

2. Start the Remix dev server:

```sh
npm run dev
```

The Remix dev server starts your app in development mode, rebuilding assets on
file changes

3. Open up [http://localhost:3000](http://localhost:3000), and you should be
   ready to go!

---

## 📬 Deployment

This website is hosted on [Netlify](https://www.netlify.com/)

### 📡 Netlify Setup

1. Install the [Netlify CLI](https://www.netlify.com/products/dev/):

```sh
npm i -g netlify-cli
```

If you have previously installed the Netlify CLI, you should update it to the
latest version:

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

### 🎉 Deploy to Netlify

There are two ways to deploy this app to Netlify, you can either go via the Git
Repository linked to Netlify and have it auto deploy changes to Netlify
(**recommended**), or you can deploy your app manually. If you've followed the
setup instructions already, all you need to do is run this:

```sh
# Local Preview deployment
netlify deploy --build

# Local Production deployment
netlify deploy --build --prod
```

---

## 🤔 Good to Know

### 🖌 Stylesheet generation

> -> Sass -> Tailwind

```bash
concurrently \"pnpm run generate:sass:css --watch\" \"pnpm run generate:tailwind:css --watch\"
```

The Sass Compiler watches all `.scss` files to give us the opportunity to create
complex styles that Tailwind might not be able to handle. These files will be
compiled to `.css` files which then can be imported in the Component/s.

```ts
import styles from './blog.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}
```

The Tailwind Compiler only watches the compiled (from Sass) main `root.css` file
and compiles it to `tailwind.root.css` (adds used Tailwind styles, ..) which is
imported in the root of the project.

---

## 🧐 TODO

<details>
<summary>Features</summary>

- [ ] Implement feature to collect Email Adresses with Mailchimp (max 500 sub ->
      should be enough for now) [ ] Make mobile navbar smaller (by just showing
      the Logo) when scrolling down (nice transition)
- [ ] Google Analytics
- [x] Impressum (based on:
      https://www.heilpraktikerausbildung-franken.de/impressum)
- [ ] Figure out why subdomains like `scan.domain.de` not working

</details>

<details>
<summary>Bug fixes</summary>

- [ ] Make Navigation Menu working again
- [ ] Font in PROD not loading

</details>

<details>
<summary>Workflow optimization</summary>

- [ ] Build EsLint plugin to simplyfy the extracting of inline Tailwind. Before
      running Plugin

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

---

## 🔴 Issues

### Website elements and fonts are too small in mobile devices

- [Stackoverflow](https://stackoverflow.com/questions/27855154/website-elements-and-fonts-are-too-small-in-mobile-devices)

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

### `process` is not defined

- [Background Information](https://remix.run/docs/en/v1/guides/constraints)
- [Docs](https://remix.run/docs/en/v1/guides/envvars)
- [How to use them in the UI](https://stackoverflow.com/questions/70730642/window-is-not-defined-when-trying-to-access-environment-variables-in-remix)

### Netlify redirect Issue (`Not found RequestID: x`)

- [Forum](https://answers.netlify.com/t/redirects-not-working-new-to-netlify/3369)
- Deploy Logs:
  `A "_redirects" file is present in the repository but is missing in the publish directory "public".`
  -> put `_redirects` file into the `public` folder!
- Add to redirect URL to `Settings/Custom domains`

```
# '_redirects' Example
# https://docs.netlify.com/routing/redirects/

https://www.scan.jeff.de https://www.jeff.de 301!
https://www.scan.jeff.de/* https://www.jeff.de/:splat 301!
```

### @Font-face not working on mobile

- [Stackoverflow](https://stackoverflow.com/questions/43327227/font-face-not-working-on-mobile)

---

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

### Environment Variables - Remix

- [Docs](https://remix.run/docs/en/v1/guides/envvars)
- [How to use them in the UI](https://stackoverflow.com/questions/70730642/window-is-not-defined-when-trying-to-access-environment-variables-in-remix)

### Prose Wrap

- [Video](https://www.youtube.com/watch?v=2LN3JfopqTY)
- [Docs](https://prettier.io/docs/en/options.html#prose-wrap)

### Prettier Playground

- [Playground](https://prettier.io/playground/)

### Remix Examples

- [Github](https://github.com/remix-run/examples/tree/main/google-analytics)

### Remix Module Constraints (Server & Browser Environment)

- [Docs](https://remix.run/docs/en/v1/guides/constraints)

### Netlify Redirect

- [Blog](https://seanherron.com/blog/domain-level-redirects-in-netlify/)
- [Docs](https://docs.netlify.com/routing/redirects/redirect-options/#domain-level-redirects)
- [Forum](https://answers.netlify.com/t/redirect-subdomain-to-another-site/7556/3)

### ConvertKit vs Mailchimp

- [Mailchimp vs ConvertKit in 2022](https://www.youtube.com/watch?v=WHVRQnk6Kjk)

### Google Analytics

- [Remix Example](https://github.com/remix-run/examples/tree/main/google-analytics)
- [Where to find your Google Analytics Tracking ID](https://borlabs.io/kb/where-to-find-your-google-analytics-tracking-id/)
- [Google Analytics `net::ERR_BLOCKED_BY_CLIENT`](https://stackoverflow.com/questions/63588516/firebase-analytics-googletagmanager-error)

### Nice Webfont Generator

- [Generator](https://www.fontsquirrel.com/tools/webfont-generator)

### Free website performance checker
- [Debug Bear](https://www.debugbear.com/test/website-speed)
