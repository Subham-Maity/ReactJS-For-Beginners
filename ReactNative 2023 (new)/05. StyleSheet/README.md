

## ⭐ What is StyleSheet ?


<p align="center">
            <img style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}}
            src="https://media3.giphy.com/media/fuJPZBIIqzbt1kAYVc/giphy.gif"
            width="450"/>
</p>


StyleSheet is a component in react-native which is responsible for all the styling of different components. It's similar to CSS in web development.



## ⭐ How to apply styles in React Native?


### Component Setup

1. Create a new file in your project and name it as `AppPro.tsx`
2. Import the following components into your index.js file and comment out the `import App from './App';` line.
and import our `AppPro` component.

```js filename="index.js" /AppPro/
/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import App from './AppPro';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
```

3. Now import view , text , StyleSheet and useColorScheme from react-native

```jsx filename="AppPro.tsx"

import React from 'react'

import{
    View,
    Text,
    StyleSheet,
    useColorScheme,
} from 'react-native'
```

4. Now create a new function component and name it as `AppPro` and return a view component with a text component inside it.

```jsx filename="AppPro.tsx"

const AppPro = () => {
    return(
        <View>
            <Text>
                Hello World
            </Text>
        </View>
    )
}

export default AppPro
```

- But there should be a case where I should return a JSX element. So, we can use `JSX.Element` as a return type for our function component and it will return always a JSX element.


Basically if you write a function component and you don't return anything then it will return undefined. So, to avoid that we can use JSX.Element as a return type for our function component and it will return always a JSX element.


```jsx filename="AppPro.tsx"
    function AppPro(){
             return ()
         }
export default AppPro
```
It will not give any error but it will return undefined.

```jsx filename="AppPro.tsx"

function AppPro(): JSX.Element{
    return ("Hello World")
    }

export default AppPro
```
**It will give an error.* -> It says hey this is not a valid JSX element.Typescript just provides you some features so that you write less buggy code.

```jsx filename="AppPro.tsx"

function AppPro():JSX.Element{
     return(
        <View >
             <Text>
                Hello World!
             </Text>
        </View>
    )
}
```

1. Now for using color scheme we need to create a variable `isDarkMode` and assign it to `useColorScheme()` and pass `dark` as a parameter.

```jsx filename="AppPro.tsx"

 const isDarkMode = useColorScheme() === 'dark';
```

5.  To use StyleSheet we need to create an object styles and then we can use it in our components also need to import a component StyleSheet from react-native into your application

- Import StyleSheet from react-native
```css
        import { StyleSheet } from 'react-native';
```
- Now create an object of styles using create() of Stylesheet.
        Using ```StyleSheet.create({})``` and assign it to a variable.
```jsx
        const styles = StyleSheet.create({});
 ```

- To create a new style we need to define the style in the form of a key: value pair where the key is the style name and the value is the properties defined for styling.

```jsx
const styles = StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    whiteText:{
        color:'#FFFFFF'
    },
    blackText:{
         color:'#000000'
    }
})
```
- Make sure you insert a comma , between each property and each style object.


1. **How to apply styles ?**

To apply the style to the component we need to add ```style = {styles.styleName}``` in the component tag

-  Here in the below code, we are applying the style named container to the Component **View** inside the return statement.

```jsx
<View style={styles.container}>
```

- For whiteText and blackText we are applying the styles to the component **Text** inside the return statement.

```jsx
<Text style={isDarkMode ? styles.whiteText: styles.blackText }>
```


**Note:* We need to first define the style and then we can use it in our components like

```jsx
whiteText:{
    color:'#FFFFFF'
    },
blackText:{
    color:'#000000'
    }
```




**Entire code for AppPro.tsx**

```jsx filename="AppPro.tsx"

import React from 'react'

import{
    View,
    Text,
    StyleSheet,
    useColorScheme,
} from 'react-native'

function AppPro():JSX.Element{

    const isDarkMode = useColorScheme() === 'dark'


    return(

        <View style={styles.container}>

            <Text style={isDarkMode ? styles.whiteText: styles.blackText }>
                Hello World!

            </Text>
        </View>
    )


}

const styles = StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    whiteText:{
        color:'#FFFFFF'
    },
    blackText:{
        color:'#000000'
    }
})

export default AppPro
```




## ⭐ Main-axis and Cross-axis in react-native



StyleSheet Use in React Native

Main-axis and Cross-axis of react-native are opposite to what's on web dev


|Web Development          |React-native             |
|-------------------------|-------------------------|
|Main axis: Left to Right |Main axis: Top to Bottom |
|Cross axis: Top to Bottom|Cross axis: Left to Right|


**Understanding in depth about Main-axis and Cross-axis with the help of justify-content and align-items**


In flexbox, we know two concepts **align-items** and **justify-content**. With the help of align-items and justify-content let's try to understand more about Main-axis and Cros-Axis

### justify-content

*   justify-content aligns all the items on the **main axis.**

*   On **web** `justify-content:center` places all the items toward the centre of the main axis (The main axis is the horizontal axis: **Left to right**)

    ![](https://cdn.hashnode.com/res/hashnode/image/upload/v1675491073392/f111df46-e1ce-44e6-94d5-512a353bec3a.png?auto=compress,format&format=webp)

*   On **react-native** `justifyContent:'center'` places all the items toward the centre of the main axis (The main axis is the Vertical axis: **Top to bottom**)

    ![](https://cdn.hashnode.com/res/hashnode/image/upload/v1675491998478/55acab92-d06f-4682-9c5c-6d367c954906.png?auto=compress,format&format=webp)


### align-items

*   align-items aligns all the items on the **cross axis**

*   On **web** `align-items:center` places all the items toward the centre of the cross axis(Cross axis is the vertical axis: **Top to bottom** )

    ![](https://cdn.hashnode.com/res/hashnode/image/upload/v1675491239560/ba915bbe-d5e3-4f00-8b51-7240d801df31.png?auto=compress,format&format=webp)

*   on **react-native** `alignItems:'center'` places all the items toward the centre on the cross axis(Cross axis is the horizontal axis: **Left to right**)

    ![](https://cdn.hashnode.com/res/hashnode/image/upload/v1675491721503/2c1bc436-7e8d-48d0-bb74-6e1051a6aeff.png?auto=compress,format&format=webp)

