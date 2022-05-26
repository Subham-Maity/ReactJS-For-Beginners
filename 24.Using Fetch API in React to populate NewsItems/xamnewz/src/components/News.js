import React, { Component } from 'react'
import NewsItem from "./NewsItem";

export class News extends Component {

  constructor() {
    super();
    console.log('Hello I am a constructor from News component');

    this.state = {
      articles: [],
      loading: false,


    }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=cc6a310ae70f4a82be489063830cc9e6";
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({ articles: parsedData.articles })
  }

  render() {
    console.log("render")
    return(
        <div className="container my-3">
          <h1>XamNewz - Top Headlines</h1>
          <div className="row">
            {/*map() creates a new array from calling a function for every array element.*/}
            {this.state.articles.map((element)=>{
              return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
              </div>
            })}
          </div>
        </div>
    )
  }
}






export default News
