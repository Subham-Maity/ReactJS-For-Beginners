# [Website View](https://codexam.vercel.app/docs/reactnative/react8)


## ⭐ Extensions


<p align="center">
<img style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}} src="https://user-images.githubusercontent.com/97989643/223776354-02e4c5d5-7757-47d0-a1d5-d0a302c569ba.gif" />
</p>


You can install the following extensions for VS Code to make your life easier.


- <Link href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode">Prettier</Link> - Code formatter
- <Link href="https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer">Bracket Pair Colorizer</Link> - A customizable extension for colorizing matching brackets
- <Link href="https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme">Material Icon Theme</Link> - Material Design Icons for Visual Studio Code
- <Link href="https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets">ES7 React/Redux/GraphQL/React-Native snippets</Link> - Simple extensions for React, Redux and Graphql in JS/TS with ES7 syntax



> For example in your App.tsx file if you type `rnfs` and press `Tab` it will automatically generate the following code for you.

```jsx
import { View, Text } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App
```
</h11>
</div>


## ⭐ Import Export


1. In our App.tsx file we will change view to [SafeAreaView](/docs/reactnative/react4#safeareaview)


```jsx
import { View, Text ,SafeAreaView } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <SafeAreaView>
      <Text>App</Text>
    </SafeAreaView>
  )
}

export default App
```
2. In the app component I wan't to add a scroll feature so I will wrap the scrollview around the text component.

```jsx
import { View, Text ,SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
      <Text>App</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App
```

3. Now Create a `components` folder inside the main folder so that we can create our components inside it.


4. Now make a file named `FlatCards.tsx` inside the components folder and add the following code or use shortcut `rnfs` to create a new file.

```jsx
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text>FlatCards</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
```

5. Now How to use this component in our App.tsx file.
   - First we will import the component in our App.tsx file.
   - Then inside the return statement we will use the component using self closing tag like this ```<FLatCards/>```

   ```tsx
    import { View, Text ,SafeAreaView, ScrollView } from 'react-native'
    import React from 'react'
    import FlatCards from './components/FlatCards'


    const App = () => {
      return (
        <SafeAreaView>
          <ScrollView>
           <FlatCards/>
          </ScrollView>
        </SafeAreaView>
      )
    }

    export default App
    ```













