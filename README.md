<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Logo" src="https://i.imgur.com/34HanMA.png" width="100" />
  </a>
</p>
<h1 align="center">
  kyryloorlov.com - v2
</h1>
<p align="center">
  The second version of my personal website, built with <a href="https://www.gatsbyjs.org" target="_blank">Gatsby</a> and hosted with <a href="https://www.netlify.com" target="_blank">Netlify</a>.
</p>
<p align="center">
  Previous versions:
  <a href="https://github.com/kyryloren/portfolio-v1" target="_blank">Version 1</a>
</p>
<p align="center">
  <a href="https://app.netlify.com/sites/kyrylo-v2/deploys" target="_blank">
    <img src="https://api.netlify.com/api/v1/badges/1ac3bde1-3734-42e0-bb97-d6a43b866500/deploy-status" alt="Netlify status" />
  </a>
</p>

![hero](https://i.imgur.com/7Z0d8ZI.png)

## 🚀 Installing

1.  Install the gatsby CLI

    ```shell
    npm i -g gatsby-cli
    ```

2. Clone the repository and change directories

    ```shell
    git clone https://github.com/kyryloren/portfolio-v2
    cd portfolio-v2
    ```

3. Install dependencies
    ```shell
    npm install
    ```
4. Start the local server
    ```shell
    gatsby develop #for local dev
    gatsby build && gatsby serve # for production
    ```

1.  **Open the source code and start editing!**

    The site is now running at `http://localhost:8000`!

## 🧐 What's inside?

A quick look at the top-level files and directories.

```sh
  .
  ├── node_modules # modules
  ├── content # the actual text of the website
  ├── src # source folder
      └── components # main components
          └── layouts
            ├── Head.js # SEO and meta tags that go in the head
            ├── index.js # layout file
          └── icons # collection of svg icons
          └── sections # section content
          └── bubbles # drag animation in about section
          ├── customCursor.js # custom cursor logic
          ├── footer.js
          ├── nav.js
      └── context
          ├── globalContext.js # handle cursor state
      └── hooks
          ├── useWindowSize.js # get dimensions of window
      └── images
      └── pages
          ├── index.js
          ├── 404.js
      └── styles # styled components styles
      └── utils
          ├── config.js # website info for SEO
  ├── static # static content
  ├── .gitignore
  ├── .prettierrc
  ├── gatsby-config.js # imports
  ├── gatsby-browser.js # wrap page with layout
  ├── gatsby-ssr.js # wrap page with layout
  ├── LICENSE
  ├── package-lock.json
  ├── package.json
  ├── README.md
 ```
 
 ## 🎨 Color Reference
| Color          | Hex                                                                |
| -------------- | ------------------------------------------------------------------ |
| Black          | ![#090C02](https://via.placeholder.com/10/090C02?text=+) `#090C02` |
| Darker         | ![#141414](https://via.placeholder.com/10/141414?text=+) `#141414` |
| Purple Navy    | ![#5E548E](https://via.placeholder.com/10/5E548E?text=+) `#5E548E` |
| Dark Red       | ![#D64045](https://via.placeholder.com/10/D64045?text=+) `#D64045` |
| Light Red      | ![#FE4A49](https://via.placeholder.com/10/FE4A49?text=+) `#FE4A49` |
| Lighter        | ![#f2f2f2](https://via.placeholder.com/10/f2f2f2?text=+) `#f2f2f2` |
| White          | ![#FDFFFC](https://via.placeholder.com/10/FDFFFC?text=+) `#FDFFFC` |
| Accent         | ![#F397D6](https://via.placeholder.com/10/F397D6?text=+) `#F397D6` |
