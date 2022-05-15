
import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
        <div className="my-3">
          <div className="card" style={{width: "18rem"}}>
            <img src="https://www.reuters.com/resizer/uJ5mTUU8wwRYogVmsH0lQkh7tyE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/UUOP4DBZSFMHBGNPEHCUYYEOCM.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
          </div>
        </div>
    )
  }
}

export default NewsItem