

### **Install React Router package**

Let’s see how to set up react-router in our code:

Procedure: The first thing we have to do is install the react-router package because it is not a part of the core react library.


```
npm install react-router-dom
```





### **Set Up routing for our application**

Procedure: After installing the package, The first thing you have to do is go to the root component, that is, your "app.js" file, and import a few things from the react-router package. We are going to import the Browser Router as Router, Switch, Route, and Link from react-router-dom. To import the following using the below command:


```
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
```



#### **In App.js**



1. Using Router: We have to surround our entire application with the router component and it means that we can use the router in the entire application. As a result, all components that are nested inside this app component(app.js) get access to the router. Hence, To surround your app with the router component, use &lt;Router>&lt;/Router>
2. Using Switch: The next step is to decide where we want our page content to go when we go to different pages. Since we want to access the different News items with Update Props. So, we are going to use the switch component (&lt;switch>&lt;/switch>). The switch component makes sure that only one route shows at any one time. All of our routes go inside this switch component.
3. Using Route: Alright, we need to set up our individual routes for the pages of different Categories. So, we will create a route for each page, for which we will be using the route component(&lt;route>&lt;/route>). At this moment, we have General, Business, Entertainment, Health, Science, Sports, Technology pages of our application, and hence we are going to place the same number of routes inside this switch component.

Figure 1.1: Using React Router in NewsMonkey

Remember, that we are using the &lt;Route Exact path= “/” /> for the exact matching of the endpoint.



Point to be noted: React won’t render the NewsComponent again while navigating through different categories as it will render the NewsComponent for the first request. But we want to rebound the News component with the Updated Props. To fix this issue we would add a unique key prop to every route as shown below:

Figure 1.2: Using Key prop to Rebound NewsComponent

Result: We would be displaying the News of a specific Category while the selected path is used as an endpoint in the URL.

Note: Since we have already learned about react-router so we won’t be discussing the React router in detail.


#### **In Navbar.js: **

We would like to show the specific news when the user selects the desired category. For example, when the user visits the sports category then we want to display the news articles related to sports, to do this we have to refactor the navbar component. We would replace the "/about" endpoint with different endpoints related to those specific news categories, as shown below:

Figure 1.3: Changing the Endpoints of the Categories




### **Fixing the Reloading issue**

You might have noticed that the page is reloading while switching between different categories so to solve this we would replace the "a href" keyword with ‘link to’ in "Navbar.js". To do so firstly, Make sure to import the link from react-router-dom.

Figure 1.4: Using 'Link to' instead of 'a href'
