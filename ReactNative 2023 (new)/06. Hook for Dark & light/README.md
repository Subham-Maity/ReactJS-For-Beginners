
## ⭐ What is useColorScheme ?



<p align="center">
<img style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}} src="https://camo.githubusercontent.com/d70ec28bc63b94f76fcb2c785a03e8f175e4c238491acd616bc2bfa0904c8909/68747470733a2f2f692e696d6775722e636f6d2f6b4d5a59674c502e676966" />
</p>

The useColorScheme hook in React allows you to access the color scheme preference of a device, typically light or dark mode, so that you can dynamically update your application's styles to match the preferred color scheme.

**Supported color schemes**

- light (default) - The user prefers a light color theme.
- dark - The user has explicitly set a preference for dark mode.
- null - The user has not indicated a preferred color theme.




***Example:**


Simple replace the code in AppPro.tsx with the following code and run the app.

> We created a small app to show you how to use the useColorScheme hook in React. You can find the project with all details 👇.





 [Click Here For Code](https://code-xam.vercel.app/docs/reactnative/react5#-how-to-apply-styles-in-react-native-)


<p align="center">
            <img style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}}
            src="https://github.com/Subham-Maity/ReactJS-For-Beginners/blob/master/ReactNative%202023%20(new)/06.%20Hook%20for%20Dark%20&%20light/img/1.gif?raw=true"
            width="250"/>
</p>

```tsx filename="AppPro.tsx"
import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

function AppPro():JSX.Element{

    const [mode, setMode] = useState<'light' | 'dark'>('light')
    const [bgColor, setBgColor] = useState('#fff')

    const switchMode = () => {
        if (mode === 'light') {
            setMode('dark')
            setBgColor('#333')
        } else {
            setMode('light')
            setBgColor('#fff')
        }
    }

    return(
        <View style={[styles.container, { backgroundColor: bgColor }]}>
            <Text style={mode === 'light' ? styles.blackText : styles.whiteText}>
                Hello World!
            </Text>
            <TouchableOpacity onPress={switchMode} style={styles.button}>
                <Text style={mode === 'light' ? styles.blackText : styles.whiteText}>
                    Switch Mode
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    whiteText:{
        color:'#FFFFFF'
    },
    blackText:{
        color:'#000000'
    },
    button: {
        padding: 10,
        backgroundColor: '#ccc',
        marginTop: 20
    }
})

export default AppPro
```



Don't confuse with the code above. It's just an example to show you how to use the useColorScheme hook in React. We will learn how to use it in our project soon.



## ⭐ Appearance Module?


The useColorScheme React hook provides and subscribes to color scheme updates from the Appearance module.


```tsx
import {Appearance} from 'react-native';
```

The `Appearance` module exposes information about the user's appearance preferences, such as their preferred color scheme (light or dark).

#### Developer notes



##### android

> The `Appearance` API is inspired by the [Media Queries draft](https://drafts.csswg.org/mediaqueries-5/) from the W3C. The color scheme preference is modeled after the [`prefers-color-scheme` CSS media feature](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme).

##### ios
> The color scheme preference will map to the user's Light or [Dark theme](https://developer.android.com/guide/topics/ui/look-and-feel/darktheme) preference on Android 10 (API level 29) devices and higher.

##### web

> The color scheme preference will map to the user's Light or [Dark Mode](https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/dark-mode/) preference on iOS 13 devices and higher.



## Example

You can use the `Appearance` module to determine if the user prefers a dark color scheme:

```tsx
const colorScheme = Appearance.getColorScheme();
if (colorScheme === 'dark') {
  // Use dark color scheme
}
```

Although the color scheme is available immediately, this may change (e.g. scheduled color scheme change at sunrise or sunset). Any rendering logic or styles that depend on the user preferred color scheme should try to call this function on every render, rather than caching the value. For example, you may use the [`useColorScheme`](usecolorscheme) React hook as it provides and subscribes to color scheme updates, or you may use inline styles rather than setting a value in a `StyleSheet`.

---

# Reference

## Methods

### `getColorScheme()`

```tsx
static getColorScheme(): 'light' | 'dark' | null;
```

Indicates the current user preferred color scheme. The value may be updated later, either through direct user action (e.g. theme selection in device settings) or on a schedule (e.g. light and dark themes that follow the day/night cycle).

Supported color schemes:

- `light`: The user prefers a light color theme.
- `dark`: The user prefers a dark color theme.
- null: The user has not indicated a preferred color theme.

See also: `useColorScheme` hook.

> Note: `getColorScheme()` will always return `light` when debugging with Chrome.

---

### `addChangeListener()`

```tsx
static addChangeListener(
  listener: (preferences: {colorScheme: 'light' | 'dark' | null}) => void,
): NativeEventSubscription;
```

Add an event handler that is fired when appearance preferences change.

