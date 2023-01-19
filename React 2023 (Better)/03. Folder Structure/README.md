# [**Website View**](https://code-xam.vercel.app/docs/react/react3)
## ⭐ Structure of a React App



1. First fire up your terminal and create a new react app using the following command.
```bash
 npx create-react-app structure-explain-codexam
```
2. This will create a new folder named structure-explain-codexam and will install all the dependencies required for a react app. Now redirect to the folder using the following command.
```bash
        cd structure-explain-codexam
```
3. For starting the development server, use the following command.
```bash
  npm start
```
4. If you want to stop the development server, press ``Ctrl+C`` in the terminal.

- Now open the folder in your code editor and you will see the following structure.
```bash
        structure-explain-codexam
        ├── README.md
        ├── node_modules
        ├── package.json
        ├── .gitignore
        ├── public
        │   ├── favicon.ico
        │   ├── index.html
        │   ├── logo192.png
        │   ├── logo512.png
        │   ├── manifest.json
        │   └── robots.txt
        └── src
            ├── App.css
            ├── App.js
            ├── App.test.js
            ├── index.css
            ├── index.js
            ├── reportWebVitals.js
            ├── setupTests.js
            └── logo.svg
```



<div style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden"}}>
        <p align="center" >
            <img
                 src="https://github.com/Subham-Maity/ReactJS-For-Beginners/blob/master/React%202022%20(Complete)/01.Creating%20our%20first%20react%20app%20using%20create-react-app/1.jpg?raw=true"
                 width="850"/>
        </p>
        <p align="center">
            <img
                 src="https://github.com/Subham-Maity/ReactJS-For-Beginners/blob/master/React%202022%20(Complete)/01.Creating%20our%20first%20react%20app%20using%20create-react-app/2.jpg?raw=true"
                 width="850"/>
        </p>
        <p align="center">
            <img
                 src="https://github.com/Subham-Maity/ReactJS-For-Beginners/blob/master/React%202022%20(Complete)/01.Creating%20our%20first%20react%20app%20using%20create-react-app/3.jpg?raw=true"
                 width="850"/>
        </p>
        <p align="center">
            <img
                 src="https://github.com/Subham-Maity/ReactJS-For-Beginners/blob/master/React%202022%20(Complete)/01.Creating%20our%20first%20react%20app%20using%20create-react-app/4.jpg?raw=true"
                 width="850"/>
        </p>
        <p align="center">
            <img
                 src="https://github.com/Subham-Maity/ReactJS-For-Beginners/blob/master/React%202022%20(Complete)/01.Creating%20our%20first%20react%20app%20using%20create-react-app/5.jpg?raw=true"
                 width="850"/>
        </p>
        </div>











## ⭐ Package.json




<p align="center">
            <img style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}}
                 src="https://media.giphy.com/media/JPgvXZhEvC434iZMCP/giphy.gif"
                 width="450"/>
    </p>



Then what is name: </span>😥❓</h12>

The name field specifies the name of the package. It must be a lowercase string, and can contain letters, numbers, and hyphens. In this example, the name of the package is "structure-explain-codexam".

hen what is version: 
 The version field specifies the version of the package. It must follow the semantic versioning format (e.g. "1.2.3"). In this example, the version of the package is "0.1.0".

Then what is private: </span>😥❓</h12>

 When you create a new npm package, you have the option to publish it to the npm registry. The npm registry is a public collection of packages that developers can access and use in their own projects. When you run the command npm publish or yarn publish, the package is uploaded to the npm registry and becomes available for other developers to download and use.

If the private field in the package.json file is set to true, it indicates that the package should not be published to the npm registry. This means that the package will only be available to use in the current project and cannot be downloaded and used by other developers. The package can be version-controlled and shared internally within the organization, but it won't be accessible publicly.

Then what is dependencies: </span>😥❓</h12>

dependencies is a field in the package.json file that lists the packages that the current package depends on. These packages are required for the current package to work correctly and must be installed on the user's computer for the package to function properly.

  For example, in the given dependencies field, the current package depends on several packages such as "@testing-library/jest-dom", "@testing-library/react", "react", "react-dom", "react-scripts", "web-vitals".

These packages are:

  - "@testing-library/jest-dom": This package provides a set of custom jest matchers that are useful for testing React components that are using the @testing-library/react library.

  - "@testing-library/react": This package provides a set of utilities for testing React components in an easy and user-focused way.

  - "@testing-library/user-event": This package provides a set of utility functions for simulating user events such as click, change, and type in React components.

  - "react": This package provides the React library, which is a JavaScript library for building user interfaces.

  - "react-dom": This package provides the React DOM library, which is the entry point to the DOM renderer for React.

   - "react-scripts": This package provides a set of scripts that are used to start, build, test, and eject a React application.

   - "web-vitals": This package provides a set of utility functions for measuring web performance metrics such as first contentful paint and time-to-interactive.

scripts is a field in the package.json file that lists the scripts that can be run using npm run or yarn run. These scripts are defined by the developer and can be used to automate common tasks such as starting the application, building the application, and running tests.

For example, in the given scripts field, the package has several scripts such as "start", "build", "test", "eject".

 These scripts are:

- "start": This script is used to start the application in development mode. When you run the command npm run start or yarn start, it will start the application and it will automatically reload the browser when you make changes to the code.

- "build": This script is used to build the application for production. When you run the command npm run build or yarn build, it will create a production-ready version of the application in the "build" directory.

- "test": This script is used to run tests on the application. When you run the command npm run test or yarn test, it will run the tests defined in the application and provide the results in the command line.

- "eject": This script is used to eject the application from the Create React App configuration. When you run the command npm run eject or yarn eject, it will remove the single build dependency from the project and give you full control over the configuration files and dependencies.

   `You can also change the name of the scripts to anything you want. For example, you can change the name of the "start" script to "dev" and run the application using the command npm run dev or yarn dev.`
         
 Then what is eslintConfig: </span>😥❓


eslintConfig is a field in the package.json file that specifies the configuration for the ESLint linter. ESLint is a tool that checks your code for potential errors and helps enforce a consistent code style.

In this example, the package extends the "react-app" and "react-app/jest" configurations.

   "react-app" is the configuration provided by Create-React-App tool which is used to set up a new React application. It contains a set of rules for linting JavaScript and JSX files in a React application.

   "react-app/jest" is the configuration provided by Create-React-App tool for linting files that are specific to Jest testing framework.

 In simple terms, this config field is used to specify which set of rules should be followed for linting the code and make sure the code is following a consistent style.
       
                
  browserslist is a field in the package.json file that specifies the browsers that the package supports. It is used by tools like Autoprefixer and Babel to determine which CSS and JavaScript features to transpile or prefix.

    In this example, the package supports different browsers for production and development mode.

  - In the production mode, the package supports browsers with a market share greater than 0.2%, that are not dead and not opera mini. This means that the package will be compatible with browsers that are actively used and not Opera Mini.

  - In the development mode, the package supports the last 1 chrome version, the last 1 firefox version, and the last 1 safari version. This means that the package will be compatible with the latest version of Chrome, Firefox, and Safari.

     In simple terms, browserslist is used to specify which version of browsers the package is compatible with. This ensures that the package will work correctly on the specified browsers and the developer can focus on the development without worrying about browser compatibility issues.



```json showLineNumbers filename="package.json"
        {
            "name": "structure-explain-codexam",
            "version": "0.1.0",
            "private": true,
            "dependencies": {
            "@testing-library/jest-dom": "^5.16.5",
            "@testing-library/react": "^13.4.0",
            "@testing-library/user-event": "^13.5.0",
            "react": "^18.2.0",
            "react-dom": "^18.2.0",
            "react-scripts": "5.0.1",
            "web-vitals": "^2.1.4"
        },
            "scripts": {
            "start": "react-scripts start",
            "build": "react-scripts build",
            "test": "react-scripts test",
            "eject": "react-scripts eject"
        },
            "eslintConfig": {
            "extends": [
            "react-app",
            "react-app/jest"
            ]
        },
            "browserslist": {
            "production": [
            ">0.2%",
            "not dead",
            "not op_mini all"
            ],
            "development": [
            "last 1 chrome version",
            "last 1 firefox version",
            "last 1 safari version"
            ]
        }
        }
```


## ⭐ GitIgnore



<p align="center">
        <img style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}}
             src="https://media.giphy.com/media/Pfzru93Tj3jwLvIYFM/giphy.gif"
             width="450"/>
    </p>

let's say you are working on a project and you have a folder called "build" where all the files that are automatically generated when you build your project are stored. You don't want to track these files in your Git repository because they can always be generated again. So, you create a .gitignore file in the root of your project and add the line "build/" (without quotes).

Now, when you run Git commands like "git add" or "git commit", it will ignore the "build" folder and all its contents. This means that the files in the "build" folder will not be tracked by Git, and will not be included in your commits. It's just a way to tell Git "hey, don't worry about these files, I got them covered."


You can find all type of gitignore files in this link:
    
<button type="button" class="mt-4  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <Link href="https://github.com/github/gitignore">Check Here</Link>
        <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</button>


```json showLineNumbers filename=".gitignore"
    # See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

    # dependencies
    /node_modules
    /.pnp
    .pnp.js

    # testing
    /coverage

    # production
    /build

    # misc
    .DS_Store
    .env.local
    .env.development.local
    .env.test.local
    .env.production.local

    npm-debug.log*
    yarn-debug.log*
    yarn-error.log*
```


## ⭐ package-lock.json

<p align="center">
            <img style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}}
                 src="https://media.giphy.com/media/7VtUWVGASs1M33zaI7/giphy.gif"
                 width="450"/>
  </p>

 `package-lock.json` is a file that is automatically generated by npm (a package manager for JavaScript) when you run the command npm install. The purpose of this file is to lock down the exact versions of all the packages (also known as dependencies) that your project depends on, so that everyone working on the project is using the same versions.

  let's say you have a React project and you have a dependency on a package called "lodash". Without a package-lock.json file, when you run npm install, npm will automatically download the latest version of lodash that is compatible with your project. However, if another developer on your team runs npm install on their machine, they may get a different version of lodash, which can cause compatibility issues.

 It is important to note that, package-lock.json should be committed to version control along with package.json, so that other developers, and any build or deploy processes, will have access to the locked versions.

  `package-lock.json` looks like
   
   <button type="button" class="mt-4  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <Link target="_blank" href="https://raw.githubusercontent.com/Subham-Maity/ReactJS-For-Beginners/master/React%202023%20(Better)/03.%20Folder%20Structure/structure-explain-codexam/package-lock.json">Check Here</Link>
            <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>


## ⭐ node_modules




<p align="center">
            <img style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}}
                 src="https://media.giphy.com/media/7d2EAbxq1fDRiHjVcd/giphy.gif"
                 width="450"/>
</p>

node_modules is a directory that is automatically created by npm (a package manager for JavaScript) when you run the command npm install. The purpose of this directory is to store all of the packages (also known as dependencies) that your project depends on.

For example, let's say you have a React project and you have a dependency on a package called "lodash". When you run npm install, npm will automatically download the latest version of lodash that is compatible with your project and store it in the node_modules directory. This way, your project can use the code from that package.

The node_modules directory can contain thousands of files and subdirectories, and it contains all the dependencies that your project is using and also the dependencies of the dependencies.

It is important to note that, you should not modify the contents of the node_modules directory, as doing so may cause compatibility issues with your project. Instead, you should use npm to manage your dependencies by adding, updating, and removing them.

For example, when you run npm install lodash, the package will be downloaded and stored in the node_modules/lodash directory and you can use it in your project like this:

```js
   import _ from 'lodash';
```


Also, it is important to note that the node_modules directory and its content should not be committed to version control, as they can be easily recreated by running npm install.



## ⭐ src


<p align="center">
                    <img style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}}
                         src="https://media.giphy.com/media/5wWf7HfQJzA8cze6CWc/giphy.gif"
                         width="450"/>
                </p>

src: This is the root directory of the project where all the source code files are stored.

  - `App.css`: This file contains the styles for the App component which is the root component of the application.

  - `App.js`: This file contains the code for the App component. This is where you define the structure and behavior of the component.

  - `App.test.js`: This file contains the tests for the App component. It is used to make sure that the component behaves as expected.

  - `index.css`: This file contains the styles for the index.js file.

  - `index.js`: This file is the entry point of the application. It renders the App component on the webpage.

  - `reportWebVitals.js`: This file is used to track and report performance metrics of the application.

  - `setupTests.js`: This file is used to configure the testing environment for the project.

  - `logo.svg`: This is an image file, typically a logo or any other image that is used in the project.

  In summary, React uses a component-based approach to building web applications. Each file in this structure represents a different component, which are interconnected and together create the final application. The App.js is the root component and index.js is the entry point of the application.


## ⭐ public


<p align="center">
                    <img style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}}
                         src="https://media.giphy.com/media/l1KVcrdl7rJpFnY2s/giphy.gif"
                         width="450"/>
                </p>
The public directory in a React project contains static assets that are served directly by the web server. These files are not processed by webpack, and therefore their names and paths are not changed during the build process.

  - `favicon.ico`: This is a small icon that is displayed on the browser's tab next to the title of the webpage.

   - `index.html`: This file is the template for the webpage. It contains the HTML structure and the root element where React will render the application.

  - `logo192.png` and `logo512.png`: These are images of the logo in different sizes. They are used for different purposes such as the home screen of a mobile device when the website is saved as a shortcut.

  - `manifest.json`: This file contains metadata about the application. It is used by the browser to provide information about the app, such as the icons, theme color, and start URL.

  - `robots.txt`: This file is used to give instructions to web crawlers, such as search engine bots, about which pages or sections of the website should not be crawled.

  In summary, the public directory contains files that are needed for the web server to serve the application. The index.html is a template for the webpage and the other files like favicon, logo, manifest and robots.txt contains information about the webpage and the application that are used by the browser and web crawlers.


## ⭐ README.md


<p align="center">
                    <img style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}}
                         src="https://media.giphy.com/media/2Y7tZMmIpwV6Lnc5QC/giphy.gif"
                         width="450"/>
                </p>
 A README file in a React project typically contains information about the project, such as its purpose, how to set it up and run it, and any dependencies or requirements that must be met. It may also contain information on how to contribute to the project, or contact the maintainers. It is a document that gives an overview of the project and how to use it. It is usually written in plain text or markdown and located in the root of the project repository.

