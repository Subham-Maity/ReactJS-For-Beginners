# [**Website View**](https://code-xam.vercel.app/docs/react/react8)


Create a Movie Website using ReactJS
---


## ⭐ File and folder setup

<p align="center">
            <img style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}}
            src="https://github.com/Subham-Maity/ReactJS-For-Beginners/blob/master/React%202023%20(Better)/08.%20Creating%20Movies%20Website/files/Screenshot%202023-02-20%2018202sdfsdf6.png?raw=true"
            />
  </p>

1. Inside the `src` folder, create a folder named `components` and inside that folder create two files named `Movie.js` and `Header.js`.

2. Inside the `src` folder, create a file named `movie.json`

```js 
        my-app
        ├── README.md
        ├── node_modules
        ├── package.json
        ├── .gitignore
        ├── public
        │   ├── index.html
        │   ├── favicon.ico
        │   └── manifest.json
        └── src
            ├── components
            │   ├── Movie.js
            │   └── Header.js
            ├── movie.json
            ├── App.css
            ├── App.js
            ├── index.css
            ├── index.js
            ├── logo.svg
            └── reportWebVitals.js
```

So total files and folders will be : `App.js` , `App.css` , `Movie.js` , `Header.js` , `movie.json`


## ⭐ Movie.json


This is my `movie.json` file. You can add more movies to this file. You can get the movie details from [OMDB API](https://www.omdbapi.com/).

```json filename="movie.json"

    [
        {
          "imdbID": "tt0096895",
          "Title": "Batman",
          "Year": "1998",
          "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_.jpg"
        },
        {
          "imdbID": "tt0468569",
          "Title": "The Dark Knight",
          "Year": "2008",
          "Poster": "https://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg"
        },
        {
          "imdbID": "tt2975590",
          "Title": "Batman v Superman: Dawn of Justice",
          "Year": "2016",
          "Poster": "https://ia.media-imdb.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg"
        },
        {
          "imdbID": "tt1345836",
          "Title": "The Dark Knight Rises",
          "Year": "2012",
          "Poster": "https://ia.media-imdb.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_UX182_CR0,0,182,268_AL_.jpg"
        },
        {
          "imdbID": "tt0372784",
          "Title": "Batman Begins",
          "Year": "2005",
          "Poster": "https://ia.media-imdb.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg"
        },
        {
          "imdbID": "tt4116284",
          "Title": "The LEGO Batman Movie",
          "Year": "2017",
          "Poster": "https://ia.media-imdb.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_UX182_CR0,0,182,268_AL_.jpg"
        },
        {
          "imdbID": "tt0112462",
          "Title": "Batman Forever",
          "Year": "1995",
          "Poster": "https://ia.media-imdb.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg"
        },
        {
          "imdbID": "tt0118688",
          "Title": "Batman & Robin",
          "Year": "1997",
          "Poster": "https://ia.media-imdb.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_UX182_CR0,0,182,268_AL_.jpg"
        },
        {
          "imdbID": "tt0103776",
          "Title": "Batman Returns",
          "Year": "1992",
          "Poster": "https://ia.media-imdb.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_UX182_CR0,0,182,268_AL_.jpg"
        },
        {
          "imdbID": "tt0076759",
          "Title": "Star Wars",
          "Year": "1977",
          "Poster": "https://ia.media-imdb.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg"
        },
        {
          "imdbID": "tt2527336",
          "Title": "Star Wars: The Last Jedi",
          "Year": "2017",
          "Poster": "https://ia.media-imdb.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg"
        },
        {
          "imdbID": "tt2488496",
          "Title": "Star Wars: The Force Awakens",
          "Year": "2015",
          "Poster": "https://ia.media-imdb.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_UX182_CR0,0,182,268_AL_.jpg"
        },
        {
          "imdbID": "tt0120915",
          "Title": "Star Wars: Episode I - The Phantom Menace",
          "Year": "1999",
          "Poster": "https://ia.media-imdb.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"
        },
        {
          "imdbID": "tt1185834",
          "Title": "Star Wars: The Clone Wars",
          "Year": "2008",
          "Poster": "https://ia.media-imdb.com/images/M/MV5BMTI1MDIwMTczOV5BMl5BanBnXkFtZTcwNTI4MDE3MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"
        },
        {
          "imdbID": "tt0080684",
          "Title": "Star Wars: Episode V - The Empire Strikes Back",
          "Year": "1980",
          "Poster": "https://ia.media-imdb.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg"
        },
        {
          "imdbID": "tt0121766",
          "Title": "Star Wars: Episode III - Revenge of the Sith",
          "Year": "2005",
          "Poster": "https://ia.media-imdb.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_UY268_CR9,0,182,268_AL_.jpg"
        },
        {
          "imdbID": "tt0086190",
          "Title": "Star Wars: Episode VI - Return of the Jedi",
          "Year": "1983",
          "Poster": "https://ia.media-imdb.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"
        },
        {
          "imdbID": "tt0121765",
          "Title": "Star Wars: Episode II - Attack of the Clones",
          "Year": "2002",
          "Poster": "https://ia.media-imdb.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg"
        },
        {
          "imdbID": "tt2275656",
          "Title": "Star Wars: Threads of Destiny",
          "Year": "2014",
          "Poster": "https://ia.media-imdb.com/images/M/MV5BMTkwMzM2NDQ1Nl5BMl5BanBnXkFtZTgwMzAyODExMTE@._V1_UX182_CR0,0,182,268_AL_.jpg"
        },
        {
          "imdbID": "tt6438108",
          "Title": "Star Wars: Lost Horizons",
          "Year": "2018",
          "Poster": "https://ia.media-imdb.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg"
        },
        {
          "imdbID": "tt2076340",
          "Title": "Star Wars: Star Warriors ",
          "Year": "2007",
          "Poster": "https://ia.media-imdb.com/images/M/MV5BYjUxN2EwNTEtZjEwYy00YmZiLTg4MDUtZmIxMzQ3MGZlYWU5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNzAwODkyODg@._V1_UY268_CR82,0,182,268_AL_.jpg"
        }
      ]
```

### Explain

JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write. It is used for transmitting data between a server and a web application, as an alternative to XML.
- The third bracket indicates an array of objects
- An object is a collection of key-value pairs
- An array is a collection of values
- The syntax for an object is enclosing a list of key-value pairs within curly braces
```json
{
  "key1": "value1",
  "key2": "value2",
  "key3": "value3"
}
```
- The syntax for an array is enclosing a list of values within square brackets

```json
[
  "value1",
  "value2",
  "value3"
]
```

- JSON is a lightweight data interchange format
- JSON is widely supported by programming languages and frameworks
- JSON can be used to represent data as props in React
- JSON data can be easily validated, manipulated, and transformed

In JavaScript, you can parse a JSON string using the JSON.parse() method, which returns a JavaScript object. Here's an example:

```js
    const json = '{"result":true, "count":42}';
    const obj = JSON.parse(json);
    console.log(obj.count);
    // expected output: 42
    console.log(obj.result);
    // expected output: true
```
You can also stringify a JavaScript object to a JSON string using the JSON.stringify() method. Here's an example:

```js
        const obj = { name: 'John', age: 30, city: 'New York' };
        const myJSON = JSON.stringify(obj);
        console.log(myJSON);
        // expected output: "{"name":"John", "age":30, "city":"New York"}"
```
In JavaScript, you can use the map() function to loop through an array of JSON objects and return a new array with modified data. Here's an example:

```js
        const json = [
          {
            id: 1,
            name: 'John Doe',
            age: 25,
          },
          {
            id: 2,
            name: 'Jane Doe',
            age: 22,
          },
        ];

        const names = json.map((element) => {
          return element.name;
        });

        console.log(names);

        // expected output: Array ["John Doe", "Jane Doe"]
```




## ⭐ Header.js



```js filename="Header.js"

    const Header = () => {
        return (
            <div className="header">
            <h1>Movie Review</h1>
            </div>
        )
    }

    export default Header
```

- This is the header component of the app
- It is a functional component that returns a div with a h1 tag inside it
- This component is for the header of the app




## ⭐ Movie.js & App.js



Overall, the App component reads the movie data from the JSON file and passes the relevant information as props to the Movie component. The Movie component then renders the data in the form of an HTML element. The end result is a web page displaying a list of movie posters with their titles and release years.
 ```js filename="Movie.js"

        import React from 'react';

        function Movie(props) {
          return (
            <div className="Movie">
              <img src={props.img} alt="movie poster" />
              <div className="movie-details">
                <h3>{props.title}</h3>
                <p>Year: {props.year}</p>
              </div>
            </div>
          );
        }

        export default Movie;
```

```js filename="App.js"

        import logo from "./logo.svg";
        import "./App.css";
        import Header from "./components/Header";
        import Movie from "./components/Movie";
        import movies from "./movie.json";

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

This is a simple React app that displays information about movies from a JSON file. The JSON file contains an array of movie objects with each movie's ID, title, year, and poster. The app has two components: App.js and Movie.js.



### App.js


1. App.js imports the Header, Movie, and the movie.json file.

2. The App function returns a div containing the `Header component` and another div with the class main that contains the `Movie component`.

3. The "main" div contains a map method that iterates through the movies array from the movie.json file and returns a Movie component for each movie in the array. The Movie component is passed three props: title, year, and img, which are set to the title, year, and poster of each movie.

```js
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
```

- Here `movies` is the array of movie objects from the movie.json file.
- The map method iterates through the array and returns a Movie component for each movie in the array.
- The Movie component is passed three props: `title`, `year`, and `img`, which are set to the title, year, and poster of each movie.
- The title, year, and img props are passed to the Movie component as attributes.
- The `Movie component` uses the props to display the title, year, and poster of each movie.

### Movie.js

1. Movie.js receives the props passed from the App.js component, and it returns a div with the class "Movie" containing an image element with the src set to the img prop, and an alternative text "movie poster".
2. There's also another div with the class "movie-details" containing an h3 element with the text content of the title prop and a p element with the text content of the year prop.


```js

     function Movie(props) {
       return (
         <div className="Movie">
           <img src={props.img} alt="movie poster" />
           <div className="movie-details">
             <h3>{props.title}</h3>
             <p>Year: {props.year}</p>
           </div>
         </div>
       );
     }
```
- The `Movie component` uses the props to display the title, year, and poster of each movie.

- The `Movie component` is passed three props: `title`, `year`, and `img`, which are set to the title, year, and poster of each movie.

- The `title`, `year`, and `img` props are passed to the `Movie component` as attributes.

- The `Movie component` uses the props to display the title, year, and poster of each movie.




## ⭐ App.css



```css filename="App.css"

.App {
  text-align: center;
background: rgb(0,0,0);
background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(15,54,74,1) 50%, rgba(0,0,0,1) 100%);
  color: #fff;
  min-height: 100vh;
}

.header {
  background: rgb(64,77,97);
  background: radial-gradient(circle, rgba(64,77,97,1) 0%, rgba(134,102,85,1) 100%);
  color: #fff;
  padding: 20px;
}

.footer {
  background-color: #1a1a1a;
  color: #fff;
  padding: 20px;
}

.main {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px;
}

h1 {
  margin: 0;
  font-size: 3rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.Movie {
  background: #1f1f1f;
  border: 1px solid #333;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  color: #fff;
  font-weight: 500;
  margin-top: 20px;
  overflow: hidden;
  text-align: left;
  width: 20%;
  margin-left: 15px;
  margin-right: 51px;
  margin-bottom: 5px;
}

.Movie img {
  display: block;
  height: 400px;
  object-fit: cover;
  width: 100%;
}

.Movie h3 {
  background: rgb(37,15,51);
background: linear-gradient(90deg, rgba(37,15,51,1) 0%, rgba(15,38,74,1) 50%, rgba(155,150,150,1) 100%);
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  padding: 20px;
}

.Movie p {
  font-size: 1rem;
  line-height: 1.2;
  margin: 20px;
}

```

#### App

`.App:` → This is a component that applies to the whole application. It is used to center the content on the page, set the background color, and set the text color.

- `text-align: center;`: Centers the content on the page.
- `background: rgb(0,0,0);` `background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(15,54,74,1) 50%, rgba(0,0,0,1) 100%);` : Sets a gradient background color from black to a dark blue color.
- `color: #fff;`: Sets the text color to white.
- `min-height: 100vh;`: Sets the minimum height of the component to 100% of the viewport height.

#### Header

`.header:` → This component is used to style the header section of the page.

- `background: rgb(64,77,97);` `background: radial-gradient(circle, rgba(64,77,97,1) 0%, rgba(134,102,85,1) 100%);`: Sets a radial gradient background color from a dark blue color to a lighter brown color.
- `color: #fff;`: Sets the text color to white.
- `padding: 20px;`: Adds 20 pixels of padding to the top, right, bottom, and left of the component.


#### Footer

`.footer:` → This component is used to style the footer section of the page.

- `background-color: #1a1a1a;`: Sets the background color to a dark gray color.
- `color: #fff;`: Sets the text color to white.
- `padding: 20px;`: Adds 20 pixels of padding to the top, right, bottom, and left of the component.


#### Main

`.main:` → This component is used to style the main section of the page.

- `display: flex;`: Displays the children elements of this component as a flex container.
- `justify-content: space-between;`: Horizontally aligns the children elements with space between them.
- `flex-wrap: wrap;`: Wraps the children elements to the next line when there is no more space.
- `padding: 20px;`: Adds 20 pixels of padding to the top, right, bottom, and left of the component.

#### h1


`h1:` → This component is used to style the heading elements of the page.

- `margin: 0;`: Removes the top and bottom margin of the element.
- `font-size: 3rem;`: Sets the font size to 3 times the default font size.
- `font-weight: 700;`: Sets the font weight to bold.
- `text-transform: uppercase;`: Transforms the text to uppercase.
- `letter-spacing: 2px;`: Adds 2 pixels of space between each letter.


#### Movie

`.Movie:` → This is a component that is used to style the individual movie elements on the page.

- `background: #1f1f1f;`: Sets the background color of the movie element to a dark gray color.
- `border: 1px solid #333;`: Sets a solid black border with a width of 1 pixel around the movie element.
- `border-radius: 8px;`: Sets the border radius to 8 pixels, making the corners slightly rounded.
- `box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);`: Adds a box shadow to the movie element, giving it a slightly raised appearance.
- `color: #fff;`: Sets the text color of the movie element to white.
- `font-weight: 500;`: Sets the font weight to 500, making the text slightly bolder than the default weight.
- `margin-top: 20px;`: Adds a top margin of 20 pixels to the movie element.
- `overflow: hidden;`: Hides any content that overflows the movie element.
- `text-align: left;`: Sets the text alignment to left.
- `width: 20%;`: Sets the width of the movie element to 20% of its container.
- `margin-left: 15px;`: Adds a left margin of 15 pixels to the movie element.
- `margin-right: 51px;`: Adds a right margin of 51 pixels to the movie element.
- `margin-bottom: 5px;`: Adds a bottom margin of 5 pixels to the movie element.

#### Movie img


`.Movie img:` → This is a component that styles the image element within the movie element.

- `display: block;`: Sets the display property to block, making the image a block-level element.
- `height: 400px;`: Sets the height of the image to 400 pixels.
- `object-fit: cover;`: Scales the image to cover the entire element, while maintaining its aspect ratio.
- `width: 100%;`: Sets the width of the image to 100% of its container.


#### Movie h3

`.Movie h3:` → This is a component that styles the movie title within the movie element.

- `background: rgb(37,15,51);background: linear-gradient(90deg, rgba(37,15,51,1) 0%, rgba(15,38,74,1) 50%, rgba(155,150,150,1) 100%);`: Sets a gradient background color for the title, which goes from a dark purple to a light gray.
- `color: #fff;`: Sets the text color of the title to white.
- `font-size: 1.5rem;`: Sets the font size of the title to 1.5 rem.
- `font-weight: 700;`: Sets the font weight of the title to 700, making it bold.
- `margin: 0;`: Removes any margin that may be applied to the title.
- `padding: 20px;`: Adds padding of 20 pixels to the title.


#### Movie p

`.Movie p:` → This is a component that styles the movie description within the movie element.

- `font-size: 1rem;`: Sets the font size of the description to 1 rem.
- `line-height: 1.2;`: Sets the line height of the description to 1.2, making it slightly more spaced out.
- `margin: 20px;`: Adds a margin of 20 pixels to the description.


</h11>
</div>
