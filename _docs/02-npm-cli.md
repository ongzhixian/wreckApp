# npm CLI

## tldr;

npm init
npm install --save-dev @babel/core  @babel/cli @babel/preset-env @babel/preset-react
npm install --save-dev webpack webpack-cli webpack-dev-server
npm install --save-dev style-loader css-loader babel-loader


## Components

ZX: These are strictly speaking not absolute requirements for developing a ReactJs app.
    Babel       -- needed if you want to use JSX
    Webpack     -- 
    Typescript  -- needed if you want to use Typescript

Packages:

    Babel
        @babel/core         -- core Babel package
        @babel/cli          -- Babel compiler CLI
        @babel/preset-env   -- Babel preset to transform ES6+ to pre-ES6+ Javascript
        @babel/preset-react -- Babel preset to transform JSX to pre-ES6+ Javascript

    Webpack
        webpack             -- core Webpack package
        webpack-cli         -- CLI to Webpack
        webpack-dev-server  -- Server to run React app with Hot Module Reloading (HMR)
        style-loader        -- Inject CSS to DOM
        css-loader          -- Process CSS to generate resolved dependencies CSS code
        babel-loader        -- Loads ES2015+ code and transpiles to ES5 using Babel


    
    Typescript

Sidenote: 
    Aside from Babel, there's also new Bublé and Traceur.
