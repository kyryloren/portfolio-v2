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

A quick look at the top-level files and directories you'll see in a Gatsby project.

```sh
  .
  ├── node_modules # modules
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
