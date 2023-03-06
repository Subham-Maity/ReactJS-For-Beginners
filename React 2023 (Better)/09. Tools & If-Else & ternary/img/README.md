# [**Website View**](https://code-xam.vercel.app/docs/react/react9)



## ⭐ Tools


[React Developer Tool](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) is a Chrome extension that allows you to inspect the React component hierarchies in the Chrome Developer Tools. It can also help you to see the props and the state of your React components. It is a must have tool for React developers.

- When you open any website that is built with React, you will see that extension icon color changes to blue. This means that the website is using React.
- You can also inspect the React component hierarchies in the Chrome Developer Tools. It can also help you to see the props and the state of your React components.
- Open inspect element by pressing F12 or right click and select inspect element. Then click on the React icon in the top right corner of the developer tools. You will see the React component hierarchies in the developer tools.

<p align="center">
            <img style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}}
            src="https://github.com/Subham-Maity/ReactJS-For-Beginners/blob/master/React%202023%20(Better)/09.%20Tools%20&%20If-Else%20&%20ternary/img/1.png?raw=true"
            width="750"/>
</p>





## ⭐ If-Else




> We will use previous movie website example to understand if-else. [Check Here](/docs/react/react8)

That was our App.js file.

```js
    import * as React from 'react';

    import Header from './src/components/Header';
    import Movie from './src/components/Movie';
    import movies from './movie.json';
    import './App.css';

    function App() {
      return (
        <div className="App">
          <Header />
          <div className="main">
            {movies.map((element) => {
              return (
                <Movie
                  title={element.Title}
                  year={element.Year}
                  img={element.Poster}
                />
              );
            })}
          </div>
        </div>
      );
    }

    export default App;
```

### If-Else

If you want to show the content if login is true else show the "Kaal Ana" text then you can use if-else in react.

```js
    let login = false;
    if (login==flase) {
        return <h1>Kaal Ana</h1>
    }
```

```js filename="App.js"
    import * as React from 'react';

    import Header from './src/components/Header';
    import Movie from './src/components/Movie';
    import movies from './movie.json';
    import './App.css';

    function App() {
      let login = false;
      if (login == false) {
        return <h1>Kaal ana</h1>;
      }
      return (
        <div className="App">
          <Header />
          <div className="main">
            {movies.map((element) => {
              return (
                <Movie
                  title={element.Title}
                  year={element.Year}
                  img={element.Poster}
                />
              );
            })}
          </div>
        </div>
      );
    }

    export default App;
```

#### ⚡ [Playground](https://stackblitz.com/edit/react-ts-iivwyg?devToolsHeight=33&file=App.tsx)


## ⭐ Ternary Operator



> We will use previous movie website example to understand Ternary Operator. [Check Here](/docs/react/react8)

That was our App.js file.

```js
    import * as React from 'react';

    import Header from './src/components/Header';
    import Movie from './src/components/Movie';
    import movies from './movie.json';
    import './App.css';

    function App() {
      return (
        <div className="App">
          <Header />
          <div className="main">
            {movies.map((element) => {
              return (
                <Movie
                  title={element.Title}
                  year={element.Year}
                  img={element.Poster}
                />
              );
            })}
          </div>
        </div>
      );
    }

    export default App;
```

 ### Ternary Operator
If you want to show the header then make login false else make login true then you can use ternary operator in react.
```js
    let login = true; //false -> Header
    {login == false ? <Header /> : <h1>Tu Nikaal</h1>}
```

```js filename="App.js"
    import * as React from 'react';

    import Header from './src/components/Header';
    import Movie from './src/components/Movie';
    import movies from './movie.json';
    import './App.css';

    function App() {
      let login = true; //false -> Header
      return (
        <div className="App">
          {login == false ? <Header /> : <h1>Tu Nikaal</h1>}
          <div className="main">
            {movies.map((element) => {
              return (
                <Movie
                  title={element.Title}
                  year={element.Year}
                  img={element.Poster}
                />
              );
            })}
          </div>
        </div>
      );
    }

    export default App;
```
#### ⚡ [Playground](https://stackblitz.com/edit/react-ts-kbvsap?devToolsHeight=33&file=App.tsx)

## ⭐ Some Key Points


> You can't directly use if-else in jsx.

Remember this sytax.

```js
   {
   (() => {
   //code -> if-else
   })()
   }
```

Now you can use if-else in jsx.

```js
   let login = true; //false -> Chal Be

         {(() => {
           if (login) {
             return <h1>Chal Be</h1>;
           } else {
             return <h1> Bhai Tu Great Hai</h1>;
           }
         })()}
```

```js filename="App.js"
    import * as React from 'react';

    import Header from './src/components/Header';
    import Movie from './src/components/Movie';
    import movies from './movie.json';
    import './App.css';

    function App() {
      let login = true; //false -> Chal Be
      return (
        <div className="App">
          {(() => {
            if (login) {
              return <h1>Chal Be</h1>;
            } else {
              return <h1> Bhai Tu Great Hai</h1>;
            }
          })()}
          <div className="main">
            {movies.map((element) => {
              return (
                <Movie
                  title={element.Title}
                  year={element.Year}
                  img={element.Poster}
                />
              );
            })}
          </div>
        </div>
      );
    }

    export default App;
```

#### ⚡ [Playground](https://stackblitz.com/edit/react-ts-4qsrpl?devToolsHeight=33&file=App.tsx)

        





