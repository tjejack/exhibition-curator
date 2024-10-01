# Tech Returners SmArt Gallery
For the 'Software Engineering Graduate - Exhibition Curator' Project

Hosted version: https://tech-returners-smart-gallery.vercel.app/

SmArt Gallery is a front-end project sponsored by Tech Returners. This application allows users to view, search, and save artworks to locally stored virtual art exhibitions.

# Navigating the app

On opening the app, you will be taken to the home page, where a welcome message and some basic information about the site is displayed.

The responsive navigation bar will be shown as either a row of links, or a hamburger menu with a collapsible navigation pane, dependent on screen size.

The Explore Art page offers a search form, through which users can search keywords or filter by API source. Images of art, along with their creators, and the year in which they were created, are displayed. Here, users have the option to save their favourite works to a locally-stored exhibition, if they so desire.

The My Exhibition page displays all of the works saved to the user's local exhibition. This page also offers the user the opportunity to remove individual items from their exhibition, or empty the entire thing.

# Styling considerations

This app was styled with a focus on accessibility and mobile-first design.

All colour schemes have been contrast-tested, images have alt text assigned, navigation has been streamlined for keyboard users and screen readers. Where necessary, aria labels have been used for screen reader accessibility.

# If you wish to explore this application yourself:

# 1. Clone the Repository
In the terminal on your device, cd into the directory where you wish to keep this repository, then,

```git clone https://github.com/tjejack/exhibition-curator.git```

Or, if you have already forked this repo, copy the HTTPS link from the green 'Code' dropdown and replace the url.

# 2. Install the necessary dependencies
This repository uses npm, react, axios, and tailwindcss.

Before working with the repository, you're going to need to install npm to your newly downloaded repo by typing the following command into your terminal while inside the git repository

```npm install```

To find out more about the packages used, see the documentation below.

React: https://react.dev/

Axios: https://axios-http.com/

TailwindCSS: https://tailwindcss.com/

# 3. File Setup
Once you have cloned the repository and installed all of the necessary dependencies, you will need to deploy your app using the following command

```npm run dev```

Then, simply follow the link provided in your terminal, which should look something like

```http://localhost:5173```

# Tech Stack:
Art Institute of Chicago API: https://api.artic.edu/docs/

Cleveland Museum of Art Open Access API: https://openaccess-api.clevelandart.org/

TypeScript: https://www.typescriptlang.org/

React: https://react.dev/

Vite: https://vitejs.dev/

TailwindCSS: https://tailwindcss.com/

Axios: https://axios-http.com/

HeadlessUI: https://headlessui.com/

HeroIcons: https://heroicons.com/

VSCode: https://code.visualstudio.com/

Vercel: https://vercel.com/

PostCSS: https://postcss.org/

AutoPrefixer: https://github.com/postcss/autoprefixer


# This repository requires node v21.2.0.

