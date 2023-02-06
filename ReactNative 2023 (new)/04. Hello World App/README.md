
 # [Website View](https://codexam.vercel.app/docs/reactnative/react4)



What is JSX in ReactJS ?


JSX
---

*   In simple terms, JSX can be defined as HTML inside JavaScript.

*   It is neither pure javascript nor pure HTML

*   It is a syntax extension for Javascript

*   When the methods written in JSX run then as an output it produces the HTML code written or some other component(eg: SafeAreaView, View, Text etc)

```jsx
function App() {
  return (
    <SafeAreaView>
      <View>
        <Text> Hello World !</Text>
      </View>
    </SafeAreaView>
  );
}
```

*   In JSX the starting tag should have an end tag

*   All the components should be written within the return, only then the required output will be displayed


If you want to know more about JSX then you can read this article <a href="https://code-xam.vercel.app//docs/react/react4">What is JSX in ReactJS ? Check Here</a>






⚡ Components in Our App
----------------------

### View

*   The component acts as a container which wraps up different components including View itself

*   It can have 0 to many children

*   It is similar to ```<div>``` tag


For Example
You could use a View component to wrap multiple text elements, buttons, or other components to create a section of your app.



### Text

*   A component for displaying texts on the screen of a device


### SafeAreaView

*   The component helps in rendering the content within the safe area boundaries of a device

*   The SafeAreaView component in React Native helps keep content within the safe area boundaries of a device's screen, avoiding obscuring by rounded corners, camera or sensor notches, ensuring a consistent UI across different devices.

### Image

*   The component for displaying different types of images

*   Syntax to get the image from your local device

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1675231762020/b01f845f-ab56-44a7-a82a-66ccbcd93f6f.png?auto=compress,format&format=webp)

*   Image component also supports displaying images from remote sources, such as a URL, in addition to local images.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1675232141831/06a5683e-2610-457a-97eb-f268c5930cbb.png?auto=compress,format&format=webp)


### Button

*   The component renders a button which can be customised as user prefer

*   Syntax for Button

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1675232372138/2c5d0196-05de-4774-b2e9-0d54dd6456a1.png?auto=compress,format&format=webp)



## ⭐ Creating the App

⚡ Steps to create the app
-----------------------
```
1. Open App.tsx 2. Now, remove everything from the file and save the file and run. You should see an error on the screen like below saying that the file App.tsx is not exported. That's true because we don't have anything in the file and index.js file is expecting it to be exported.
```

<p align="center">
            <img style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}}
                 src="https://cdn.hashnode.com/res/hashnode/image/upload/v1675275836783/200ebde5-edf6-453d-8a2c-837bd775b7d4.jpeg?auto=compress,format&format=webp"
                 width="450"/>
</p>
1.  First of all, we need to **import React**

```jsx
import React from "react";
```


2.  Now we need to **import all the Components** from react-native

```jsx
import {
    View,
    Text,
    SafeAreaView,
    Image,
    Button
}
from "react-native";

```


3.  Next, we need to add the **function App**

```jsx
function App(){

}
```
![](https://cdn.hashnode.com/res/hashnode/image/upload/v1675230440278/e3a5b36d-5de7-4314-a5ad-45e7a5a30ed7.png?auto=compress,format&format=webp)

 4.  Before adding the components to the App function first let's **export the App**

```jsx
export default App;
```

Technically, this is all you need and you're required to have your app at least not crashing it's simply means that you expected an app and I'm giving you an app but it's not doing anything. So, let's add some components to the App function.



5.  Now within the App function


*   First of all, we need to add the **SafeAreaView** component so that it will fix the safe area boundaries

```jsx
function App(){
    <SafeAreaView></SafeAreaView>
}
```


*   Now you need to add the **View** component which acts as a container to wrap other components within it (it similar to ```<div>``` tag)

```jsx
function App() {

<SafeAreaView>

     <View> </View>

</SafeAreaView>

}
```


*   To add the text Hello World! we will use the **text** component and add it inside the View component


```jsx
function App(){

  <SafeAreaView>
        <View>

            <Text>Hello World!</Text>

        </View>

  </SafeAreaView>

}

```
Now , you can see It will not show the text on the screen because we need to return the component from the App function so that it will be rendered on the screen. (It's similar to ```return``` statement in ReactJS)

6. Now, we need to **return** the component from the App function

```jsx
import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

function App() {
  return (
    <SafeAreaView>
      <View>
        <Text> Hello World !</Text>
      </View>
    </SafeAreaView>
  );
}
export default App;
```
![](https://cdn.hashnode.com/res/hashnode/image/upload/v1675230631444/9d8f302a-cd05-46fc-8e40-366c83e1f24c.png?auto=compress,format&format=webp)

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1675233790330/eff84423-511b-4262-af94-1312d11ee110.png?auto=compress,format&format=webp)

*   To add the image we will use the **Image** component.

```jsx
function App() {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello World!</Text>
        <Image source={require('./assets/icons8-react-native-48.png')} />
      </View>
    </SafeAreaView>
  );
}

```


![](https://cdn.hashnode.com/res/hashnode/image/upload/v1675233793743/ad9ec650-c518-4b08-b997-9df030016982.png?auto=compress,format&format=webp)

*   To add the button we will use the **Button** component. We are giving the title of the button as First Button and on pressing the button we will get an alert saying First Button Pressed

 ```jsx

function App() {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello World!</Text>
        <Image source={require('./assets/icons8-react-native-48.png')} />
        <Button
          title="First Button"
          onPress={() => {
            alert('First Button Pressed!');
          }}
        />
      </View>
    </SafeAreaView>
  );
}

```


![](https://cdn.hashnode.com/res/hashnode/image/upload/v1675234040392/8dc678ac-8012-402f-bd76-c9055530974e.png?auto=compress,format&format=webp)

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1675234109288/a65bf669-b130-4da4-94f9-b6eba40e0c64.png?auto=compress,format&format=webp)




