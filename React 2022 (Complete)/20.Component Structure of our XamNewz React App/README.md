


![Screenshot 2022-05-15 133020](https://user-images.githubusercontent.com/97989643/168463142-32dba48c-6198-40fb-af39-5c75ed9bd4c9.png)


<h3><strong>The component structure of our application</strong></h3>


<p>
Structure: We would create a Navbar component at the top and at the middle of our application, we would add a ‘news’ component that would contain our news items.
</p>
<p>
  
  ![1a8b6e47e90a01a6fa1276c4dea0b489](https://user-images.githubusercontent.com/97989643/168459382-96e80617-006e-4d33-bf1f-af7c917981dc.png)
  

Figure 1.1: Structure of News Monkey
</p>
<p>
Navbar Component:
</p>
<p>
It will have navigation of different pages of our application, like About, Home, etc pages.
</p>
<p>
News Component:
</p>
<p>
The big red component is the News component. It will contain a lot of ‘NewsItem’ components.
</p>
<p>
NewsItem Component:
</p>
<p>
Many of these items will be specific news. For example Weather news, Sports News, Politics news, etc.
</p>
<p>
News Detail Component:
</p>
<p>
I would like to point out that later on, we would create a ‘NewsDetail’ Component. This component will show details of specific news when the reader clicks on a specific NewsItem. Our navbar will remain intact at the top of the application.
</p>
<p>
  
  ![0abafcc9e9499c8dbc6cba263aa52b23](https://user-images.githubusercontent.com/97989643/168459391-fce5f51b-977b-46f4-8f2e-5682206ee895.png)

Figure 1.2: News Detail Component
</p>
<p>
Benefits: Structuring our app in this way lets us easily manage our application and also helps in reusing the components again and again.
</p>
<p>

</p>
<h3><strong>Getting Started With NewsMonkey</strong></h3>


<p>
Let’s Start our development server by using the ‘npm run start’ and start building our Amazing NewsMonkey Application:
</p>
<p>
Note: We will be using Bootstrap to get some design Components for our application.
</p>
<h3><strong>Using Bootstrap</strong></h3>


<p>
Visit <a href="http://getbootstrap.com/">getBootstrap.com</a> and copy-paste the starter Template of Bootstrap in your "Index.html" file. Now, we are ready to use the components of Bootstrap. Make sure to remember the below points while copying the code from Bootstrap:
</p>
<ol>

<li>Close those tags which don’t have a closing tag

<li>Replace the "Class" keyword with "ClassName"

<li>Replace href= “#” with href= “/”
</li>
</ol>
<h3><strong>Changing Title and meta description</strong></h3>


<p>
We have added a fancy and SEO-friendly title and meta description to our NewsMonkey application:
</p>
<p>
  
  
  ![img_3](https://user-images.githubusercontent.com/97989643/168459397-6ce16631-7e2f-4393-ace1-97cfc6f1e6b6.png)

Figure 1.3: Adding title and meta description
</p>
<h3><strong>Navbar component</strong></h3>


<p>
Let’s begin creating our application from Navbar. Firstly we would create a "Navbar.js" file and would add a class-based component to it. Secondly, we would copy-paste the code of the Navbar component from Bootstrap. After this, we would make our desired changes in the Navbar. We have successfully created our React Component and now we would like to render it in our application.
</p>
<h4><strong>Using Navbar component</strong></h4>


<p>
We know that "App.js" is the file that is being rendered in our application. So, We have to use this Component in our "App.js" to render it in our application. 
</p>
<p>
  
  ![img_4](https://user-images.githubusercontent.com/97989643/168459403-9d938bc3-9fbd-4e96-8863-397bec0f081e.png)

  
Figure 1.4: Using Navbar component
</p>
<p>
The Navbar of NewsMonkey has been successfully added.
</p>
<p>

</p>
<h3><strong>News Component</strong></h3>


<p>
We would like to create a ‘news’ component, that would reside in the center of our application, and it will contain all the NewsItem components. So let’s create a new file: 
</p>
<h4><strong>News.js:</strong></h4>


<p>
Create a "news.js" file and add a Class-based component to it. Now, we would return the desired content which we want to render in our application. After doing so, we would add this component to our "App.js". 
</p>
<p>
  
  ![img_5](https://user-images.githubusercontent.com/97989643/168459410-fbc21eed-868e-4898-afc7-ea79e807a330.png)

  
Figure 1.5: Using News Component
</p>
<h4><strong>"NewsItem.js"</strong></h4>


<p>
Create a "NewsItem.js" file and add a Class-based component to it. Now, we would return the desired content which we want to render in our application. After doing so, we would add this component to our "News.js". Hence, Our News.js file is being rendered in app.js and the News.js file contains our NewsItem Component.
</p>
<p>
  
  ![img_6](https://user-images.githubusercontent.com/97989643/168459415-706e5243-1db0-4c80-9b81-53bee303f252.png)

  
  
Figure 1.6: Using NewsItem Component in "news.js"
</p>
<p>
Hence, the News item component has been successfully added to our News component.
</p>
