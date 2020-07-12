# CodeNawis Frontity Theme :art:

:fire: A Frontity Theme for Wordpress site.

# More than Mars Theme
1. Sharing Buttons
2. AuthorBox in Single Post Page
3. Category based Posts in Homepage
4. Comment Section in Single Post Page
5. Grid System
6. Search
7. Categories in Navbar
8. Tags in post page
9. Better Pagination
10. Footer

++ Addon are here

+ New look design
+ More flexiblity and advance look 


:zap: Check out the [demo site here](#comingSoon).

# Demo 

<p align="center">
  <img alt="Frontity-codenawis" src="assets/demo.png">
</p>
<p align="left">
  <img alt="Frontity-codenawis" src="assets/demo-2.png">
</p>

# Installation :wrench:

## 1. For new projects: clone this project.

1. `git clone https://github.com/mymakarim/frontity-codenawis`.
2. `cd frontity-codenawis`.
3. `npm install && npx frontity dev` (from the project's root directory).

4. Your site will now be available at `http://localhost:3000/`

## 2. For new/existing project: use npm.

1. `npm install @frontity/codenawis`.
2. Add the package in `frontity-settings.js`.

```javascript
  packages: [
    {
      "name": "@frontity/codenawis",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "News",
              "/category/ADD SLUG HERE from your WP category url /"
            ],
            [
              "Featured",
              "/category/featured/"
            ],
            [
              "Report",
              "/category/####/"
            ],
            [
              "MultiMedia",
              "/category/####/"
            ],
            [
              "About Us",
              "/about/"
            ]
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          }
        }
      }
    },
```

3. go to `packages/codenawis/src/components/utility/config/homepageSections.js` and put the `categoryID` and `slug` of the categories you want them to appear as sections in the homepage

4. Remove your previous theme (`mars-theme`?) from `frontity-settings.js`.
5. `npx frontity dev` (from project's root directory).
6. Your site will be available at `http://localhost:3000/`.

## Credits :white_flower:

- Build with love :blue_heart:, using [Frontity's](https://frontity.org) [mars-theme](https://www.npmjs.com/package/@frontity/mars-theme) as base.

## Authors

1. [Jitendra Popat ](https://profiles.wordpress.org/jitenit/)
2. [Yahya Makarim]

## License :scroll:

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  