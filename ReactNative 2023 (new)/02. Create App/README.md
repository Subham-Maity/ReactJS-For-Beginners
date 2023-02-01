 # [Website View](https://codexam.vercel.app/docs/reactnative/react2)

 
# Installation Guide
    
<p align="center">
            <img style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}}
                 src="https://media.giphy.com/media/2CV88JdrUCOYT5Ec8j/giphy.gif"
                 width="450"/>
</p>

1. Open your terminal and type the following command to check if you have node and jdk installed on your system or not.

```bash filename="nodejs"
node -v
```
```bash filename="jdk"
jdk -v
```

1. If you don't know what to type in the terminal, you can simply hit the program's name, and it will display its documentation.

   - In my case if I type `adb` in the terminal then it will show me the documentation of the program.

```bash filename="adb"
adb
```
As you can see, I want to see a list of all connected devices, so it will ask you to run the `adb devices` command. This is how you can use the documentation of the program.

1. How to create a first blank react native project?

## [Video Link](https://youtu.be/k8xMLntOVSc)

Just choose a directory where you want to create your project and type the following command in the terminal. (you can also use `cd` command to change the directory and for checking the current directory use `pwd` command)

```bash filename="react-native"
npx react-native init CodeXam
 ```
» Here npx is a package runner tool that comes with npm 5.2+ and higher. It allows you to run packages without installing them globally.

» react-native init is a command to create a new react native project.

» codeXam is the name of the project.

» Remember name should not be started with a number or special character.


- Into the mac the ruby version is little bit outdated so you have to install the latest version of ruby. You can install the latest version of ruby by using the following command.

```bash filename="ruby"
brew update
brew install ruby-build
brew install rbenv

rbenv install 2.7.5
rbenv global 2.7.5
```
  
Another useful tips if you directly open vscode from the terminal then you can use the following command.

```bash filename="vscode"
code .
```


1. Now open your android or ios

- `Android`
2. Connect your Android device to your development machine with a USB cable

3. Enable Developer mode on your Android device

 - Go to Settings > About phone > Software information > Build number and tap it 7 times to enable Developer mode.
 - Go back to Settings > System > Advanced > Developer options and enable USB debugging.
 - Select USB Configuration > MTP(Recommended) Media Transfer Protocol
 - Also enable usb debugging in the developer options.

1. Enable USB Debugging in the Developer Options on your Android device

 2. Run your React Native app on your Android device with the following command: npx react-native run-android

        - `iOS`
3. Install Xcode or set up an iOS development environment
4. Connect your iOS device to your development machine with a USB cable
5. Enable Developer mode on your iOS device
6. Trust your development machine on your iOS device
7. Run your React Native app on your iOS device with the following command: npx react-native run-ios



You might face some error while running the project on your device. like
```
* What went wrong:
Could not determine the dependencies of task ':app:compileDebugJavaWithJavac'.
> SDK location not found. Define a valid SDK location with an ANDROID_HOME environment variable or by setting the sdk.dir path in your project's local properties file at
 ```
To solve this error you have to set the ANDROID_HOME environment variable.

For that simple go to your android folder inside the CodeXam folder and check if you have a `local.properties` file or not. If you don't have then create a new file and name it `local.properties` and add the following line in it.

**For mac user**
```
sdk.dir = /Users/your_user_name/Library/Android/sdk
```
**For windows user**
```
sdk.dir = C:\\Users\\your_user_name\\AppData\\Local\\Android\\Sdk
```
for example in my case
```
sdk.dir = C:\\Users\\maity\\AppData\\Local\\Android\\Sdk
```
Server will take some time to start. So be patient.





