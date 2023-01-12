
# Our Apps Now


![Screenshot 2022-06-16 062440](https://user-images.githubusercontent.com/97989643/173968138-0b1f8933-b165-4ec7-a7e5-ed097431c08f.png)



### **Passing "country" as a Prop**

Earlier, we have passed India as a country to the filters of the NewsItems. Now, since we are going to change the country for other different NewsCategories so we would be passing ‘country’ as a Prop. To do so follow the below steps:

1. Firstly, You need to pass the country as a prop from App.js as shown below. For the demo, we are passing the country like India:


```jsx
<News pageSize={5} country= "in" />
```


2. Secondly, we would be using the created country prop in URL to filter the News as shown below:


```jsx
let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
```



### **Prop types in Class-Based Component**

React has a mechanism for props authentication called prop types. As some functions need compulsory arguments, similarly in react components might require a prop to be defined. Otherwise, it won’t render properly.


### **Using PropTypes with static variable**

Since we are about to use prop types in our application so firstly we have to import them into the "News.js" as follows:


```jsx
import PropTypes from 'prop-types'
```



### **Static variable**

The static variable can be used to refer to the common property of all objects. Static is the property that belongs to the class only. Earlier in React, we used to define props outside of the class. But now we will be defining them inside the class by using the static variable.


### **Creating Static Variable**

Now, we would create a static variable inside the class to write proptype. Remember, we would be using static default props as well. 


![img_1](https://user-images.githubusercontent.com/97989643/173967737-30124432-e540-45be-bfd2-dfb442f97c6c.png)

Figure 1.1: Using Prop Types with Static variable

Till now, we have created two props, which are ‘country’ and ‘Page size’. Here, we have passed the default value to the props also we have declared the prop type as string and number respectively for the two values. Later on, we would be adding more proptype in this static variable.

 


### **Creating Categories**

Moreover, we would like to show the different categories in the Navbar such as Business, Entertainment, General, Health, Science, Sports, and technology. To display these categories in the Navbar, You will have to add all the above categories in the Navbar.js as list items.

![img_2](https://user-images.githubusercontent.com/97989643/173967784-f2edd8db-be39-4a3f-a36b-20c3a5b9c13e.png)

Figure 1.2: Adding Categories in Navbar.js

Result: We have successfully added all the categories in the Navbar. At this moment all the href links are /about so clicking on any of the categories will still render the same news.

Note: We would be adding the proper link to these categories later on. 


### **Passing Categories as Props**

Till now, we have created the different categories, but now we would like to pass the category from App.js. For the demo, we are passing the category as science in the following manner:


```jsx
<News pageSize={5} country= "in" category="science" />
```


Secondly, we have to embed this category in the URL. To do so we have to first add the category in the static default prop and static prop type variable.

![img_3](https://user-images.githubusercontent.com/97989643/173967866-a93a3854-570a-4750-8293-117d0b00e766.png)

Figure 1.3: Set Prop Type of Category

Now, We can easily pass the Category to the URL of ComponentDidMount, handlePrevClick, and handleNextClick function as follows:


```jsx
let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
