
<h3>**News API**</h3>


We would be using a News API to render news in our news monkey Application. To check out the news API, click [here](https://newsapi.org/). After that, log in to the news API by filling up some basic details like Name, Email, Password, and get your API key. After you are logged in, you will see your live API key in every example. We would be using the Top headlines Endpoint for our application.

Figure 1.1: Using Top headline Endpoint

After doing so, we would get some sample response news for our application. In order to do that, copy the Definition Url and search for it on the internet to get the example response News as shown below:

Figure 1.2: Our Sample Response News

 

Note: We are getting the output as a parsed JSON because we have installed ‘[JSON view](https://chrome.google.com/webstore/detail/jsonview/gmegofmjomhknnokphhckolhcffdaihd?hl=en)’ extension. We will disable the extension and will copy the raw JSON code.

Figure 1.3: Copy the Raw JSON code

<h4>**Using NewsAPI in News Monkey**</h4>


Create a new file named sampleOutput.json and paste the sample response code into it. You can use the format document option to perfectly format your raw JSON code. Remember, It is just a piece of sample news and not real-time news. These sample articles will act as our News Item. As for now, we have four articles.

Figure 1.4: Four News Articles

 

<h4>**Enhancing News Item Component**</h4>


Visit [bootstrap](https://getbootstrap.com/) to get some designing components for the NewsMonkey application. We would like to use Cards to display our NewsItems. So, Copy the code of your desired card and paste it inside NewsItem.js as shown below: 

Figure 1.5: Adding Cards in NewsItem

Now, we will change the Title and Description of every card. To do that, we will be taking the title and description as a prop in the NewsItem.

 

<h4>**Using props in class-based component**</h4>


We would be passing the title and description of the News as a prop.

Figure 1.6: Using Props with class-based Component

 

Explanation: Above, We have used a destructuring method of Javascript. It allows us to extract values from arrays and objects and lets us assign them to other variables. In our case, this.props is an object, and we are extracting the title and description from that object.

Hence, we can easily pass the title and description to every newsItem.

 

<h4>**Adding Title and Description**</h4>


For the demo, We are passing the title as ‘myTitle’ and the description as ‘mydesc’ in the NewsItem from News.js.

Figure 1.7: Passing Title and Description

Result: We have successfully added the six NewsItems Components and have passed the Title and Description to one of our NewsItem Components. 

Figure 1.8: Result

 

<h4>**Enhancing NewsMonkey **</h4>


Our application isn’t looking that amazing, so let’s add some Styles and make it Outstanding. In order to do that, we would add all these news items in the container and can add our desired CSS to them. Here, We are providing a grid layout to our cards.

Figure 1.9: Structuring our NewsItem properly

Result: We have successfully added a heading and have aligned our three cards in one row. Now our application is looking adequate. Here’s how it looks:

Figure 1.10: Our Application

 

<h4>**Adding Sample Images to card**</h4>


In the sample response code of news API, we are provided with a Sample Image URL. We can use this URL in the ‘img src’ tag of the NewsItems Card.  
 


Figure 1.11: Image Url

In order to use those images in the cards, simply copy the URL and paste it inside the ‘img src’ tag of the NewsItems.

 

Result: this is how our News Cards looks like:

We have added these images just for the demo. Later on, we will be passing this image Url as a Prop.

 
