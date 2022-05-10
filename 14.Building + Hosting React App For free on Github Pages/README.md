
## You can read this from the official site

https://create-react-app.dev/docs/deployment/

<h3><strong>Deploying TextUtils</strong></h3>


<p>
Whenever we create our application for production, we build it using the npm run build command and not by using npm start.
</p>
<p>
npm run build: npm run build bundles the app into static files for production, i.e. it creates a build folder that contains your application as a static application.
</p>
<p>
In Build Folder:
</p>
<p>
If you open your build folder in the live server, you will find that your application is working perfectly, which means our application is being converted into static files for deployment.
</p>
<p>
Note: React Router doesn’t work perfectly with Github pages, so we are going to remove the router from our application. But remember that while deploying in the server, it runs perfectly.
</p>
<h3><strong>Deploying a Normal Application</strong></h3>


<p>
For deploying a normal application, you have to just go to the settings section of GitHub and then navigate to the pages tab, where you can select the branch and root of your app and can easily deploy your application. But while hosting a react application, you have to follow a different set of steps, which are mentioned below:
</p>
<h4><strong>Steps for Hosting our React Application:</strong></h4>


<p>
1. Add the Home page field:
</p>
<p>
You can add the homepage field in your application by ing the below code in your package.json.
</p>



<pre class="prettyprint">"homepage": "https://myusername.github.io/my-app",
</pre>


<p>
Make sure to enter your username and the correct name of your application in the mentioned places in the above URL.
</p>
<p>
2. Install gh-pages
</p>
<p>
Use the below command to install gh-pages in your React app.
</p>



<pre class="prettyprint">npm install --save gh-pages
</pre>


<p>
3. Add the script in "package.json"
</p>
<p>
Add the below code in the script (available in "package.json") of your React application.
</p>



<pre class="prettyprint"> "predeploy": "npm run build",
  "deploy": "gh-pages -d build",
</pre>

4. Now enter 

<pre class="prettyprint">
Run the npm run deploy
</pre>
<p>

5. Full Terminal Work(You can skip it's for reference):

```html
Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

Install the latest PowerShell for new features and improvements! https://aka.ms/PSWindows

PS G:\textutils\src> npm start

> textutils@0.1.0 start
> react-scripts start

i ｢wds｣: Project is running at http://192.168.56.1/
i ｢wds｣: webpack output is served from 
i ｢wds｣: Content not from webpack is served from G:\textutils\public
i ｢wds｣: 404s will fallback to /
Starting the development server...

Browserslist: caniuse-lite is outdated. Please run:
  npx browserslist@latest --update-db
  Why you should do it regularly: https://github.com/browserslist/browserslist#browsers-data-updating
Compiled with warnings.

src\components\Navbar.js
  Line 9:17:   The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
  Line 17:29:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid

src\components\TextForm.js
  Line 115:72:  Expected '!==' and instead saw '!='  eqeqeq
  Line 116:80:  Expected '!==' and instead saw '!='  eqeqeq

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

Terminate batch job (Y/N)? y
PS G:\textutils\src> npm run build 

> textutils@0.1.0 build
> react-scripts build

Creating an optimized production build...
Browserslist: caniuse-lite is outdated. Please run:
  npx browserslist@latest --update-db
  Why you should do it regularly: https://github.com/browserslist/browserslist#browsers-data-updating
Compiled with warnings.

src\components\Navbar.js
  Line 9:17:   The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
  Line 17:29:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid

src\components\TextForm.js
  Line 115:72:  Expected '!==' and instead saw '!='  eqeqeq
  Line 116:80:  Expected '!==' and instead saw '!='  eqeqeq

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

File sizes after gzip:

  41.71 KB  build\static\js\2.3dbd9900.chunk.js
  1.99 KB   build\static\js\main.0043d511.chunk.js
  1.62 KB   build\static\js\3.bf1ffd1d.chunk.js
  1.17 KB   build\static\js\runtime-main.3e1ad736.js
  372 B     build\static\css\main.ed134873.chunk.css

The project was built assuming it is hosted at /.
You can control this with the homepage field in your package.json.

The build folder is ready to be deployed.
You may serve it with a static server:

  npm install -g serve
  serve -s build

Find out more about deployment here:

  https://cra.link/deployment

PS G:\textutils\src> npm install --save gh-pages

added 17 packages, and audited 1969 packages in 9s

150 packages are looking for funding
  run `npm fund` for details

35 vulnerabilities (1 low, 11 moderate, 19 high, 4 critical)

To address issues that do not require attention, run:
  npm audit fix

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
PS G:\textutils\src> npm run deploy

> textutils@0.1.0 predeploy
> npm run build


> textutils@0.1.0 build
> react-scripts build

Creating an optimized production build...
Browserslist: caniuse-lite is outdated. Please run:
  npx browserslist@latest --update-db
  Why you should do it regularly: https://github.com/browserslist/browserslist#browsers-data-updating
Compiled with warnings.

src\components\Navbar.js

The build folder is ready to be deployed.

Find out more about deployment here:

  https://cra.link/deployment


> textutils@0.1.0 deploy
> gh-pages -d build

Published
PS G:\textutils\src>

```


Using the npm run deploy command in your terminal will begin the publishing process.
</p>
<p>
After a certain time, the Github login dialog box appears. Enter your GitHub username and password and login into your account.
</p>
<p>
Hence our application has been hosted on Github.
</p>
<p>
If you are facing any problem, then check out the pages section available in settings, and make sure to select the branch as gh-pages as shown below:
</p>
<p align="center">
        <img src="https://github.com/Subham-Maity/react-js-bootcamp/blob/master/14.Building%20+%20Hosting%20React%20App%20For%20free%20on%20Github%20Pages/image(ignore)/1.png?raw=true "/>
        </p>

<p>
Our TextUtils application:
</p>

# If you would like to check our application, then click <a href="https://subham-maity.github.io/textutils/">here</a>.

<h3><strong>In a nutshell:</strong></h3>


<p>
Here is the short summary of the four steps, which are required for deploying your application in Github:
</p>
<p>
<p align="center">
        <img src="https://github.com/Subham-Maity/react-js-bootcamp/blob/master/14.Building%20+%20Hosting%20React%20App%20For%20free%20on%20Github%20Pages/image(ignore)/2.png?raw=true "/>
        </p>
Figure 1.2: Hosting the application in Github
</p>

