
![Logo](http://localhost:5173/yoda.avif)


# Swapi react app

A brief documentation of what this project does and how he work.


## Environment Variables

To run this project, you will need to add the following environment variables to your .env.local file in the frontend directory.

`VITE_API_PROXY=http://localhost:3001`


## Installation and start

Install the project with npm

Start with the backend

```bash
  cd backend 
  npm install
  npm run dev
```
In a new terminal, start the frontend
```bash
  cd frontend 
  npm install
  npm run dev
```

## Running Tests

To run Jest test, run the following command in the frontend directory

```bash
  npm test
```


## Tech Stack

**Client:** React, Vite, Shadcn, TailwindCSS, TypeScript, Jest

**Server:** Node, Hapi, TypeScript

**Infra:** Vercel, Render
## Tech FAQ

#### Why MVC for the backend ?

For a clear separation between business logic (Model), interface (View) and HTTP request management (Controller), improving the maintainability of a SWAPI project with Node and Hapi.

#### Why vite for React ?

Vite optimizes ReactJS development by providing an ultra-fast development server with instant hot reloading, significantly reducing waiting times for code modifications. Its native ES module management and Rollup-based build improve production performance while simplifying configuration, facilitating maintenance and accelerating delivery.

#### Why shadcn for the frontend ui ?
Shadcn provides a system of reusable UI components, styled with Tailwind CSS, facilitating rapid development, visual consistency and fine customization in the frontend.

### Why Redux was not used in React ?
Redux was not used because authentication management remains limited in scope and complexity, making the React context lighter, simpler to implement, and sufficient to share auth state between components without the architectural overhead and verbosity of Redux.
## Optimizations

* Add automated end-to-end tests with Cypress or Playwright to validate complete user paths.
* Integrate these tests into a GitHub Actions pipeline to guarantee quality for each push or pull request.
* Automate error reporting via a global error handler to improve traceability and responsiveness in production.
* Improve the user interface with a progressive redesign to enhance ergonomics and visual consistency.
* Implement a secure authentication system, such as Firebase Auth, to manage registration, login, sessions and password recovery, a free and easy-to-integrate solution.
## Author

[@domov44](https://www.github.com/domov44)