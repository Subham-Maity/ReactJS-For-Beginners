# [Website View](https://codexam.vercel.app/docs/reactnative/react7)

# Unsupported class file major version 63


## ⭐ Understanding the Error

<p>
<img style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}} src="https://media.giphy.com/media/vrxxqQbyRxYi6scCjT/giphy.gif" />
</p>



```bash
BUILD FAILED in 1serror Failed to install the app. Make sure you have the Android development environment set up: https://reactnative.dev/docs/environment-setup.
Error: Command failed: gradlew.bat app:installDebug -PreactNativeDevServerPort=8081

FAILURE: Build failed with an exception.

* What went wrong:
Could not open settings generic class cache for settings file 'F:\mains\ReactJS-For-Beginners\ReactNative 2023 (new)\00. Projects\2. Basic Template App\blogApp\android\settings.gradle' (C:\Users\maity\.gradle\caches\7.5.1\scripts\7f2bgt9wpkwmrzb6xn6aaghhf).
> BUG! exception in phase 'semantic analysis' in source unit '_BuildScript_' Unsupported class file major version 63

* Try:
> Run with --stacktrace option to get the stack trace.
> Run with --info or --debug option to get more log output.
> Run with --scan to get full insights.

* Get more help at https://help.gradle.org
```

> This error is caused by the Gradle version. You can fix this by updating the Gradle version.
> Or another way is to downgrade the java version to 8.
> 
> 

<h3 className="text-2xl m-8">📌 How to check the Gradle version?</h3>


- First check compatibility of your gradle version with your java version. You can check it [here](https://docs.gradle.org/current/userguide/compatibility.html).

> According to the above link let's assume that you are using java 17 so you can use gradle 7.2 or above.


### 📌 How to install Gradle?

1. You can install gradle(according to your java version) by downloading the zip file from [here](https://gradle.org/releases/).
<p align="center">
<img style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}} src="https://user-images.githubusercontent.com/97989643/223637656-2534e1e0-799a-4923-bed9-f81a9d1f11d2.png" />
</p>

2. Unzip the file and copy the folder to your desired location like `C:\Gradle`.

3. Now add the path of the gradle folder to the environment variable `PATH`.
   <p align="center">
   <img style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}} src="https://user-images.githubusercontent.com/97989643/223639351-39db6f70-f5fb-4420-82ef-a4b8afc5d7c2.png" />
   </p>
   - Configure your system environment variables by adding `C:\Gradle\bin` (or wherever you extracted Gradle) to your PATH variable.
   - To do this, go to Control Panel > System and Security > System > Advanced system settings > Environment Variables.
   - Under System variables, select Path and click Edit.
   - Click New and type `C:\Gradle\bin`.
   - Click OK to save the changes.
  <p align="center">
   <img style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}} src="https://user-images.githubusercontent.com/97989643/223639712-576112fa-e97e-4a68-af38-ca6b0c3f07a9.png" />
   </p>


 4. Now check the gradle version by running the following command in your terminal.

```bash
gradle -v
```

You will get the following output.

```bash
------------------------------------------------------------
Gradle 8.0.2
------------------------------------------------------------

Build time:   2023-03-03 16:41:37 UTC
Revision:     7d6581558e226a580d91d399f7dfb9e3095c2b1d

Kotlin:       1.8.10
Groovy:       3.0.13
Ant:          Apache Ant(TM) version 1.10.11 compiled on July 10 2021
JVM:          17.0.6 (Oracle Corporation 17.0.6+9-LTS-190)
OS:           Windows 11 10.0 amd64
```

### 📌 How to install Java 17?

1. You can download the java 17 from [here](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html).

    - You can search on google for the latest version of java 17 and click on official website link.
    - Then click on the download button.
     <p align="center">
     <img style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}} src="https://user-images.githubusercontent.com/97989643/223640824-b83691d0-0adb-46a1-be68-d76c7c13e9ed.png" />
     </p>
2. Go to the C drive and open the Program Files folder and check the java folder and inside that folder you will find the jdk folder and inside that folder you will find the bin folder.

   - Copy the path of the bin folder
    <p align="center">
        <img style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}} src="https://user-images.githubusercontent.com/97989643/223641864-fdcc4391-19e4-4288-827c-6b98ef8ccf73.png" />
        </p>

    ```bash
        C:\Program Files\Java\jdk-17\bin
    ```
  - Now add the path of the bin folder to the environment variable `PATH`.

    - To do this, go to Control Panel > System and Security > System > Advanced system settings > Environment Variables.
    - Under System variables, select Path and click Edit.
    - Click New and paste the path of the bin folder.
    - Click OK to save the changes.
    <p align="center">
        <img style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}} src="https://user-images.githubusercontent.com/97989643/223642583-cdc8af8e-772a-4931-835e-90b1ea8c687e.png" />
        </p>

3. Now go to Environment Variables again and click on the New button and add the following variable.

    - Variable name: `JAVA_HOME`
    - Variable value: `C:\Program Files\Java\jdk-17`
    <p align="center">
        <img style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}} src="https://user-images.githubusercontent.com/97989643/223642836-eb8de7ca-08ce-4e39-b247-ff433848e9b9.png" />
        </p>

4. Now again go to Environment Variables and click on the system variables and find the variable named `Path` and click on the edit button and add the following path.

    - Click New and paste the path of the bin folder.
    ```bash
     C:\Program Files\Common Files\Oracle\Java\javapath
    ```
    <p align="center">
        <img style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}} src="https://user-images.githubusercontent.com/97989643/223643330-93bbbc09-3f6e-4c83-b07c-4165c6a64e1f.png" />
        </p>

5. Now check the java version by running the following command in your terminal.

    ```bash
    java -version
    ```

    You will get the following output.

    ```bash
    java version "17" 2021-09-14
    Java(TM) SE Runtime Environment (build 17+35-2724)
    Java HotSpot(TM) 64-Bit Server VM (build 17+35-2724, mixed mode, sharing)
    ```



Now if you hit `npx react-native run-android` in your terminal it will work fine.














