
![Screenshot 2022-05-15 162202](https://user-images.githubusercontent.com/97989643/168469162-46615e38-ef8e-4f3c-a039-e80024e56225.png)


<h3>News API</h3>


We would be using a News API to render news in our news monkey Application. To check out the news API, click [here](https://newsapi.org/). After that, log in to the news API by filling up some basic details like Name, Email, Password, and get your API key. After you are logged in, you will see your live API key in every example. We would be using the Top headlines Endpoint for our application.

![img_1](https://user-images.githubusercontent.com/97989643/168466730-1edace78-f00b-46c6-96ca-4c6c076cd6f7.png)


Figure 1.1: Using Top headline Endpoint

After doing so, we would get some sample response news for our application. In order to do that, copy the Definition Url and search for it on the internet to get the example response News as shown below:


![img_2](https://user-images.githubusercontent.com/97989643/168466726-6fbac2c3-58ac-493b-92dc-83c37bf9d571.png)


Figure 1.2: Our Sample Response News

 

Note: We are getting the output as a parsed JSON because we have installed ‘[JSON view](https://chrome.google.com/webstore/detail/jsonview/gmegofmjomhknnokphhckolhcffdaihd?hl=en)’ extension. We will disable the extension and will copy the raw JSON code.

![img_3](https://user-images.githubusercontent.com/97989643/168466721-cdb19a70-23ce-4df3-85ac-b92b8556a222.png)



Figure 1.3: Copy the Raw JSON code


![Screenshot 2022-05-15 173645](https://user-images.githubusercontent.com/97989643/168471988-baece61c-a7f0-45f5-a53f-2358a5cb472c.png)


![Screenshot 2022-05-15 173722](https://user-images.githubusercontent.com/97989643/168471990-46cce252-dd4f-403a-a8ec-73568d057c35.png)



<h4>Using NewsAPI in News Monkey</h4>


Create a new file named sampleOutput.json and paste the sample response code into it. You can use the format document option to perfectly format your raw JSON code. Remember, It is just a piece of sample news and not real-time news. These sample articles will act as our News Item. As for now, we have four articles.



![img_4](https://user-images.githubusercontent.com/97989643/168466717-f5555f65-13ec-4fa0-abb0-26e16f77e61d.png)

Figure 1.4: Four News Articles

 

<h4>Enhancing News Item Component</h4>


Visit [bootstrap](https://getbootstrap.com/) to get some designing components for the NewsMonkey application. We would like to use Cards to display our NewsItems. So, Copy the code of your desired card and paste it inside NewsItem.js as shown below: 


![img_5](https://user-images.githubusercontent.com/97989643/168466710-3b21f44d-adff-4c02-8328-8c282abc6265.png)


Figure 1.5: Adding Cards in NewsItem

Now, we will change the Title and Description of every card. To do that, we will be taking the title and description as a prop in the NewsItem.

 

<h4>Using props in class-based component</h4>


We would be passing the title and description of the News as a prop.

![img_6](https://user-images.githubusercontent.com/97989643/168466707-8e9347b4-abb8-4513-a180-392144fcdbb2.png)



Figure 1.6: Using Props with class-based Component

 

Explanation: Above, We have used a destructuring method of Javascript. It allows us to extract values from arrays and objects and lets us assign them to other variables. In our case, this.props is an object, and we are extracting the title and description from that object.

Hence, we can easily pass the title and description to every newsItem.

 

<h4>Adding Title and Description</h4>


For the demo, We are passing the title as ‘myTitle’ and the description as ‘mydesc’ in the NewsItem from News.js.

![img_7](https://user-images.githubusercontent.com/97989643/168466704-f52e0b98-a4e9-4919-ab34-6fe6966e0a02.png)


Figure 1.7: Passing Title and Description

Result: We have successfully added the six NewsItems Components and have passed the Title and Description to one of our NewsItem Components. 




![Screenshot 2022-05-15 154300](https://user-images.githubusercontent.com/97989643/168467675-e9e98c3e-adc8-4451-a425-bd3b5402f240.png)

Figure 1.8: Result

 

<h4>Enhancing NewsMonkey </h4>


Our application isn’t looking that amazing, so let’s add some Styles and make it Outstanding. In order to do that, we would add all these news items in the container and can add our desired CSS to them. Here, We are providing a grid layout to our cards.

![img_9](https://user-images.githubusercontent.com/97989643/168466694-a28d3113-2c1c-4a95-92f7-a541814ad7f6.png)

Figure 1.9: Structuring our NewsItem properly

Result: We have successfully added a heading and have aligned our three cards in one row. Now our application is looking adequate. Here’s how it looks:
![img_10](https://user-images.githubusercontent.com/97989643/168466688-2b029fdc-4e09-4b2c-9014-02abe483e4f8.png)


Figure 1.10: Our Application

 

<h4>Adding Sample Images to card</h4>


In the sample response code of news API, we are provided with a Sample Image URL. We can use this URL in the ‘img src’ tag of the NewsItems Card.  
![img_11](https://user-images.githubusercontent.com/97989643/168466679-89d63c87-da23-452d-8bb2-264bc3e7b116.png)



Figure 1.11: Image Url

In order to use those images in the cards, simply copy the URL and paste it inside the ‘img src’ tag of the NewsItems.

 



We have added these images just for the demo. Later on, we will be passing this image Url as a Prop.

 
