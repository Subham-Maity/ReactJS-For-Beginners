 # [Website View](https://codexam.vercel.app/docs/reactnative/react3)



## ⭐ File Structure


 While creating your first react-native app you will see that by default there are lots of folders and files provided to run the default app

Let's try to understand what are some of the important files within it

**Files and folders provided**

<PhotoView   src="https://cdn.hashnode.com/res/hashnode/image/upload/v1675179184274/f9b7b43f-c94c-47f0-9e75-06a52574a382.png?auto=compress,format&format=webp" alt="example" >
                    <img  className="bg-purple-900 dark:bg-stone-900" style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}} align="center"  src="https://cdn.hashnode.com/res/hashnode/image/upload/v1675179184274/f9b7b43f-c94c-47f0-9e75-06a52574a382.png?auto=compress,format&format=webp" alt="example" />
                </PhotoView>



### ⚡ **`_tests_`**
Testers work on this folder to do various tasks such as checking if the app, buttons are properly rendered.

<PhotoView   src="https://cdn.hashnode.com/res/hashnode/image/upload/v1675179521357/9b0ebe27-18a2-49cf-b8b6-b7e9bf0bb21c.png?auto=compress,format&format=webp" alt="example" >
                    <img  className="bg-purple-900 dark:bg-stone-900" style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}} align="center"  src="https://cdn.hashnode.com/res/hashnode/image/upload/v1675179521357/9b0ebe27-18a2-49cf-b8b6-b7e9bf0bb21c.png?auto=compress,format&format=webp" alt="example" />
                </PhotoView>
            </PhotoProvider>
            <figcaption>
                Change the image size by using the click-and-scroll function.
            </figcaption>
        </figure>
    </div>


### ⚡ **`.bundle :`**

This folder contains configurations file. It is used to configure the app for different platforms such as android, ios, web, etc.


### ⚡ **`android :`**

This folders contain configurations related to android app, as react-native makes android and ios apps on same code base, so we have different folders for android and ios. Most of the cases we don't touch this folder but if we have to add some dependencies manually then we have to do changes in this folder.

- All configurations are linked by react native so that the android app runs fine so there is no need to access this folder.

- for some special cases, we might use some files within the folder such as

   - **build.gradle**

     - it contains the dependence required. To add dependencies manually we will access this file

     - to know the minimum SDK version required for running the project

     - to know the targeted SDK version

<PhotoView   src="https://cdn.hashnode.com/res/hashnode/image/upload/v1675179813817/9c449a18-4773-43c6-bba7-d19eb1714ee3.png?auto=compress,format&format=webp" alt="example" >
                    <img  className="bg-purple-900 dark:bg-stone-900" style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}} align="center"  src="https://cdn.hashnode.com/res/hashnode/image/upload/v1675179813817/9c449a18-4773-43c6-bba7-d19eb1714ee3.png?auto=compress,format&format=webp" alt="example" />
                </PhotoView>


- **local.properties**

- During initial setup in most devices the environmental variable for Android SDK has been configured in case it's not been assigned we should create a folder named local.properties and add the file path of the android SDK in it  ios


### ⚡ **`ios :`**

This folders contain configurations related to android app, as react-native makes android and ios apps on same code base, so we have different folders for android and ios. Most of the cases we don't touch this folder but if we have to add some dependencies manually then we have to do changes in this folder.


- pod file

     - pod file is the important file within the ios folder

     - it holds all the packages and dependencies for the ios app

     - it's the main important file for developing the ios app (we won't be writing code in it as react-native will fetch all the data from app.js or app.tsx file )
<PhotoView   src="https://cdn.hashnode.com/res/hashnode/image/upload/v1675182536794/cdf6c344-d594-43d4-a70f-2251355a39ff.png?auto=compress,format&format=webp" alt="example" >
                    <img  className="bg-purple-900 dark:bg-stone-900" style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}} align="center"  src="https://cdn.hashnode.com/res/hashnode/image/upload/v1675182536794/cdf6c344-d594-43d4-a70f-2251355a39ff.png?auto=compress,format&format=webp" alt="example" />
                </PhotoView>

### ⚡ **`node_modules :`**

- All node dependencies and packages are present within this folder.

- at times we might get errors while running our program due to some problem within the node_module so what we have to do is

- Delete the folder

- reinstall the node within the project folder by entering npm install within terminal

<Callout type="info" emoji="ℹ️">
    In case of a missing of node_modules folder we just need to run `npm install` command.
</Callout>


### ⚡ **`.eslintrc.js :`**

ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code. In a React Native app, an .eslintrc.js file is used to define the rules for linting your code, helping you to write code that adheres to a consistent style and avoid potential errors. The file is used to configure ESLint and specify which rules to enforce in your code. By using ESLint, you can ensure that your code is following best practices and is more maintainable and readable.

### ⚡ **`.gitignore :`**

- while pushing the project to any git repository we dont have to add a few files as they can be regenerated such as node_modules,bundlers,local.properties,etc. so we add them to gitignore file so that they are not pushed to the repository.

<PhotoView   src="https://cdn.hashnode.com/res/hashnode/image/upload/v1675182592363/41c5565b-4588-4e77-bb60-c79ea35d8180.png?auto=compress,format&format=webp" alt="example" >
                    <img  className="bg-purple-900 dark:bg-stone-900" style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}} align="center"  src="https://cdn.hashnode.com/res/hashnode/image/upload/v1675182592363/41c5565b-4588-4e77-bb60-c79ea35d8180.png?auto=compress,format&format=webp" alt="example" />
                </PhotoView>



### ⚡ **`.node-version`**

- This file is used to specify the node version for the project.
- It is used by the nvm tool to automatically switch to the correct node version when you cd into the project directory.

### ⚡ **`.prettierrc.js`**

- This folder is to do developer configuration which lets the programmer code with ease and comfort.
- it has nothing to do with the code that goes into production.
- Enforces a consistent coding style across the codebase.
- Automates small, manual formatting tasks.

<PhotoView   src="https://cdn.hashnode.com/res/hashnode/image/upload/v1675182617805/822a60bb-225c-4cb2-acb2-2a5df9a86bb7.png?auto=compress,format&format=webp" alt="example" >
                    <img  className="bg-purple-900 dark:bg-stone-900" style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}} align="center"  src="https://cdn.hashnode.com/res/hashnode/image/upload/v1675182617805/822a60bb-225c-4cb2-acb2-2a5df9a86bb7.png?auto=compress,format&format=webp" alt="example" />
                </PhotoView>


### ⚡ **`.ruby-version`**

This file contains the version of the ruby used in project.


<PhotoView   src="https://cdn.hashnode.com/res/hashnode/image/upload/v1675182687128/3337c43d-8346-44d1-8ec3-8a0d73fdcf64.png?auto=compress,format&format=webp" alt="example" >
                    <img  className="bg-purple-900 dark:bg-stone-900" style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}} align="center"  src="https://cdn.hashnode.com/res/hashnode/image/upload/v1675182687128/3337c43d-8346-44d1-8ec3-8a0d73fdcf64.png?auto=compress,format&format=webp" alt="example" />
                </PhotoView>



### ⚡ **`.watchmanconfig`**

This file contains the configuration of the watchman. Watchman is used to reload your app automatically whenever the developer does any code change.

- This file is used to configure watchman which is a file watching service.
- It is used to watch for changes in the filesystem.

### ⚡ **`app.json`**

- This file contains the name and display name of the project. Display name will be used for the naming to the app.
- It holds the display configuration by which ios and android take the name of the app and the icon of the app.

<PhotoView   src="https://cdn.hashnode.com/res/hashnode/image/upload/v1675182716995/031b3344-d60f-4474-9ab1-36098e1e0054.png?auto=compress,format&format=webp" alt="example" >
                    <img  className="bg-purple-900 dark:bg-stone-900" style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}} align="center"  src="https://cdn.hashnode.com/res/hashnode/image/upload/v1675182716995/031b3344-d60f-4474-9ab1-36098e1e0054.png?auto=compress,format&format=webp" alt="example" />
                </PhotoView>



### ⚡ **`App.tsx`**

- The main file of react-native

- The programs written on this file are what's been shown on the device screen.

- This file is the root of the application.


### ⚡ **`babel.config.js`**

- Javascript doesn't know how the files are run on mobile devices or split into different files, therefore we need to combine these files into a single file
- bundler combine all javascript file into a single file which makes it runnable for web and mobile
- react-native uses bable configuration and in bable metro configuration is used
- metro bundler is used to combine all the files into a single file

<PhotoView   src="https://cdn.hashnode.com/res/hashnode/image/upload/v1675182792812/f8201538-7348-4688-a365-959f687f9352.png?auto=compress,format&format=webp" alt="example" >
                    <img  className="bg-purple-900 dark:bg-stone-900" style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}} align="center"  src="https://cdn.hashnode.com/res/hashnode/image/upload/v1675182792812/f8201538-7348-4688-a365-959f687f9352.png?auto=compress,format&format=webp" alt="example" />
                </PhotoView>



### ⚡ **`Gemfile`**

The Gemfile is a file used by the Ruby package manager, Bundler, to manage gem dependencies in a Ruby project. A gem is a package of reusable code in the Ruby programming language, and the Gemfile lists the gems that your application depends on. The Gemfile allows you to specify the gems you want to use, including their versions, and Bundler takes care of downloading and installing them for you.

By using a Gemfile, you can ensure that your application is using the correct versions of gems, and that the gems you depend on are consistent across all development environments. This makes it easier to manage the dependencies of your application and to collaborate with other developers. The Gemfile is an essential part of many Ruby projects, including Ruby on Rails projects, and helps to make the development process more manageable and streamlined.


### ⚡ **`index.js`**

This is the first file which get run whenever we start the react-native project. This file define our first component and renders it.

- the first file metro bundler opens up is index.js

<PhotoView   src="https://cdn.hashnode.com/res/hashnode/image/upload/v1675181690025/1dbf54c3-396a-4ec1-9361-d1508a2c4afc.png?auto=compress,format&format=webp" alt="example" >
                    <img  className="bg-purple-900 dark:bg-stone-900" style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}} align="center"  src="https://cdn.hashnode.com/res/hashnode/image/upload/v1675181690025/1dbf54c3-396a-4ec1-9361-d1508a2c4afc.png?auto=compress,format&format=webp" alt="example" />
                </PhotoView>


- Line 9 shows which file is been opened from where (appName is been opened from App)

- App is been imported from App.tsx

- we can also see from line 7 that the name of the app is imported from app.json

- AppRegistry is responsible for converting one file into ios and android

- AppRegistry.registerComponent is the first function which is called when we start the app


### ⚡ **`metro.config.js`**

- This file contains the configurations related to metro. This config is used to merge multi-configuration.

- This file is used to configure the bundler

<PhotoView   src="https://cdn.hashnode.com/res/hashnode/image/upload/v1675183013359/b1a3280d-c26e-48f9-b3a0-9379b12df25c.png?auto=compress,format&format=webp" alt="example" >
                    <img  className="bg-purple-900 dark:bg-stone-900" style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}} align="center"  src="https://cdn.hashnode.com/res/hashnode/image/upload/v1675183013359/b1a3280d-c26e-48f9-b3a0-9379b12df25c.png?auto=compress,format&format=webp" alt="example" />
                </PhotoView>


### ⚡ **`package-lock.json`**

This file contains the packages and it's sub-packages and their version, which are installed in project.

- This file is used to lock the version of the packages which are installed in the project


## ⚡ **`package.json`**

This file contain multiple things such as:

<PhotoView   src="https://cdn.hashnode.com/res/hashnode/image/upload/v1675182305250/dc7c5c57-4f57-4faf-9880-cadf71d835f1.png?auto=compress,format&format=webp" alt="example" >
                    <img  className="bg-purple-900 dark:bg-stone-900" style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}} align="center"  src="https://cdn.hashnode.com/res/hashnode/image/upload/v1675182305250/dc7c5c57-4f57-4faf-9880-cadf71d835f1.png?auto=compress,format&format=webp" alt="example" />
                </PhotoView>



1. Name: Name of the project.

2. Version: Current version for the app.

3. Scripts: This contains scripts related to build, start, test the app.

4. Dependencies: This contains the dependency's name and their version which used to create the project

5. devDependenices: This contains the development dependencies' name and their version used to develop the project.

6. it also holds the script by which we need to run our file on ios or android


<PhotoView   src="https://cdn.hashnode.com/res/hashnode/image/upload/v1675182280434/23c078b9-3f49-415d-955d-cada95d2fe98.png?auto=compress,format&format=webp" alt="example" >
                    <img  className="bg-purple-900 dark:bg-stone-900" style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}} align="center"  src="https://cdn.hashnode.com/res/hashnode/image/upload/v1675182280434/23c078b9-3f49-415d-955d-cada95d2fe98.png?auto=compress,format&format=webp" alt="example" />
                </PhotoView>




For more information about package.json, you can visit <a href="https://code-xam.vercel.app//docs/react/react3#-packagejson">here</a>



### ⚡ **`tsconfig.json`**

This file contain configuration related to the type script as react-native support typescript by default.


<PhotoView   src="https://cdn.hashnode.com/res/hashnode/image/upload/v1675182340712/e4b01c14-aed7-4178-882e-52d95d759ff5.png?auto=compress,format&format=webp" alt="example" >
                    <img  className="bg-purple-900 dark:bg-stone-900" style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}} align="center"  src="https://cdn.hashnode.com/res/hashnode/image/upload/v1675182340712/e4b01c14-aed7-4178-882e-52d95d759ff5.png?auto=compress,format&format=webp" alt="example" />
                </PhotoView>


### ⚡ **`yarn.lock`**

This file contains the packages and it's sub-packages and their version, which are installed in project.





 