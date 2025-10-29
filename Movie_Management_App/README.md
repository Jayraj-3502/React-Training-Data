# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

# Tech Stack

Main Tech: react, react-dom
Libraries: react-redux, react-router-dom, @reduxjs/toolkit
Packages: axios, react-icons,
Framework: tailwindcss, @tailwindcss/vite

---

# Folder Structure

Movie_Management_App

- src
  - app
    - store.js (redux store file)
  - assets
  - components
    - trash (folder)
      - FavourateCard.jsx (profile favroute section card)
      - WatchLaterCard.jsx (profile watch latter section cards)
      - RecentlViewedCard.jsx (profile recent viewed section cards)
    - CommonCard.jsx
    - Loader.jsx (loader for loading)
    - MovieCard.jsx (movie card for home and all movies page)
  - features
    - movies.js (movie slice)
    - theme.js (theme slice)
    - users.js (user slice)
  - key
    - keydetails.txt (details for api key)
  - Pages
    - auth
      - Login.jsx (login page)
      - Signup.jsx (signup page)
    - layout
      - Layout.jsx (landing page)
    - navigation
      - Navigation.jsx (navigation bar)
    - AllMovies.jsx (all movie page)
    - Details.jsx (movie detail page)
    - Home.jsx (home page)
    - Profile.jsx (profile page)
    - Search.jsx (Search Page according to search keyword)
    - export.js (import and export all file in this folder from this file)
- App.jsx (routing page)
- index.css (main css file)
- main.jsx (main file for render)

---

# Features

<!-- ------------------------------------------- -->

# Home Page

- visible item

  - Popular movie section
  - Top rated movies section
  - Discover movies section
  - Trending movies Section

- work

  - you can add movie to watch later list
  - you can add movie to favroute list
  - you can add movie to recent watch list
  - you can see movie details on new page
  - you can see movie poster, rating, movie name etc
  - add to favrouter and watch later button disable untill user logged in

<!-- ------------------------------------------- -->

# All Movies Page

- visible item

  - you can see filter according to gener, year and ratings
  - by default action gener is set so action movies will appear
  - on click on left side gener menus you can select any one of them
  - also have a drop down to select from year, rating or genre for filter
  - pagination to change pages according to filter

- work

  - you can add movie to watch later list
  - you can add movie to favroute list
  - you can add movie to recent watch list
  - you can see movie details on new page
  - you can see movie poster, rating, movie name etc
  - add to favrouter and watch later button disable untill user logged in

<!-- ------------------------------------------- -->

# Search Page

- when you search for a movie on navigation search bar and click on search icons or tab enter it redirect to search page with related keyword movies
- pagination is available to see more result accrding to search keyword

<!-- ------------------------------------------- -->

# Profile Page

- if user logged in

  - User Name
  - Watch later list
  - Favroute list
  - Recent watch list

- i fuser not logged in

  - Text saying that need to login first too see details

- Word

  - you can remove movie from watch later or favroute list

<!-- ------------------------------------------- -->

# Login Page

- user can login by following details
  - email
  - password

<!-- ------------------------------------------- -->

# Signup Page

- you can signup by providing following details
  - username
  - email
  - password
  - confirm password

<!-- ------------------------------------------- -->

# theme button

- this button help to switch theme between dark and light mode

<!-- ------------------------------------------- -->

# singin / logout button

- this is a button which toggle its text based on current user if current user exist it will show logout and if current user not exist it will show signin
