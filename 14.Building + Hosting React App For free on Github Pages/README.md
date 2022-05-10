
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


<p>
4. Run the npm run deploy
</p>
<p>
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
<p>
Our TextUtils application:
</p>
<p>
If you would like to check our application, then click <a href="https://codewithharry.github.io/TextUtils-React/">here</a>.
</p>
<h3><strong>In a nutshell:</strong></h3>


<p>
Here is the short summary of the four steps, which are required for deploying your application in Github:
</p>
<p>
Figure 1.2: Hosting the application in Github
</p>