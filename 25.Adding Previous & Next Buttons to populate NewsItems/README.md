
![Screenshot 2022-05-29 024443](https://user-images.githubusercontent.com/97989643/170843049-f2427dc8-faee-437a-8a7d-b2dc51a9e97b.png)


### **Creating Page Parameter State**

We have found that only some of the articles are being rendered in the News Monkey application. The other articles are rendered on the Next Page. We would be fetching the remaining articles on the Next Page of the NewsMonkey application. For that, we would firstly add a page parameter to the state as follow:


```jsx
constructor(){
    super();
    this.state = {
        articles: [],
        loading: false,
        page: 1
    }
}
```



### **Creating Previous and Next Buttons**

Below, We have added the buttons and have edited them in our desired way. Here, we have added an arrow to the buttons and have even aligned the buttons perfectly.

![img_1](https://user-images.githubusercontent.com/97989643/170843037-f37b1cc4-6f71-43f8-9066-019c224a6054.png)

Figure 1.1: Adding Buttons and Editing them

The 'previous' and 'next' buttons will be added to our application.


### **Adding the Onclick Function to the Buttons**

Now, we want to render the next set of News by clicking the Next Button and the previous news by navigating through the previous button. For that reason, we would assign an OnClick function to the buttons. We are adding the ‘handleNextClick’ function to the Next button and the ‘handlePrevClick’ to the previous button.

Code:


```jsx
<div className="container d-flex justify-content-between">
    <button type="button" class="btn btn-dark" onClick={handlePrevClick}> &larr; Previous</button>
    <button type="button" class="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
</div>
```



### **Disabling Next And Previous button at a certain instance**

Moreover, we would like to disable the previous button when the page number is equal to or less than one, that is when the first page is getting rendered in the application.

Code:


```jsx
<div className="container d-flex justify-content-between">
    <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={handlePrevClick}> &larr;
        Previous</button>
    <button type="button" class="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
</div>
```


Similarly, we would also disable the Next Buttons when all the articles have been rendered. Thus, we would use the page size parameter. This parameter only renders the specific articles on a single page. For example, if the page size parameter is equal to ‘two’ then only ‘2’, of all the articles, will be rendered in the application.


### **Math.ceil() method**

We have a total of 38 results so if we render 20 News on one page then it will take 1.9 pages to render all the NewsItems. But, we want to display two pages. Thus, To overcome this issue we would use the math.ceil() method. This method rounds a number up to the next largest integer.


### **Using if-else Statement**

Now, we would like to perform the below functions only when the next page exists. Otherwise, we would disable the button, that is no function will be invoked. To do so we would use the if and else statement in our handleNextClick function.


### **Creating 'handleNextClick' and 'handlePrevClick' Function**

We would update the page state and content of ComponentDidMount by using these functions. That is, We would like to increase the page number by ‘1’ on clicking the Next button and on clicking the previous button we would decrease it by 1. To do so use the following code:


#### **For the next button:**


```jsx
handleNextClick = async () => {
    console.log("Next");
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
    }
    else {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apikey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page + 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles
        })
    })
}
```


Explanation: In the above code we have used the if-else statement to use the function only if the next page exists otherwise it won’t be executed. Now if the function is executed then the state of the page will be updated by 1.


#### **For the previous button:**


```jsx
handlePrevClick = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apikey=dbe57b028aeb41e285a226a94865f7a7"&page=${this.state.page - 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles
    })
})
```


Result: Now, on clicking the Next Button we can move to page ‘2’ where the remaining articles are being rendered.

 
