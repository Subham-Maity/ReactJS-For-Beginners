

### **Using Props**

Now, we would be sending all the required data in the form of props. In our News Component, We can pass many pieces of information as props, that is we would be using them as a variable. For example, We would like to display the number of news items on a single page of the News Monkey Application.


### **Page Size as variable**

In our case, we would like to set page size as a variable. At this moment, the page size is set as 20, which means 20 articles are being rendered on each page of the application. Suppose, we would like to render only 5 articles in the NewsMonkey application. But this time we would be setting the page size as a variable.

To do so follow the below steps:



1. In app.js:

Firstly, we would be passing props in the variables of news Component from the app.js as shown below:


```jsx
<News pageSize={5}/>

```



1. In News.js:

After that, we would be using the page size as a variable and would be accessing the props by using "this.props.pageSize" as shown below:

![1](https://user-images.githubusercontent.com/97989643/172917260-8f3ea5b1-4e93-4f67-8d46-9a82760ffe2e.png)


Figure 1.1: Page Size as a variable

Remember to replace "20"  with "this.props.pageSize" as previously we have set the page size as 20 and now we would like to replace it with "this.props.pageSize", which is 5.

Result: Hence, only five news items are being displayed in the NewsMonkey application.

![5fcf89ed092f722a33076fdf35eda7e7](https://user-images.githubusercontent.com/97989643/172917287-e6960cd6-e56d-4cb2-bf37-6f9ad78f8f3a.png)


Figure 1.2: Five NewsItems on a Single Page


### **Adding Loading Spinner**
ne
Firstly, we would download a spinner from the internet. We are using the [ajaxload](http://ajaxloadingimages.net/) website, You are free to use any of the spinner generating websites. After that,  the downloaded file and paste it inside the src of the NewsApp.




#### **Create Spinner component**

We have created a separate file for the spinner named "spinner.js". Generate a class-based component in it and import the downloaded spinner file in it. In our case, it is "loading.gif" so we have imported it. We have used the imported spinner in the img src.

![3](https://user-images.githubusercontent.com/97989643/172917311-5f07a0e3-38fb-4d94-8c54-8e68bc031a03.png)


Figure 1.3: Creating Spinner Component

Hence we have successfully created the Spinner component




#### **Using Spinner component**

Since we would like to show the spinner while loading. Thus, we will change the loading from false to true. Now, we want to show the spinner when the loading is true otherwise not. To do so we would add a simple javascript logic in our application as follows:


```jsx
{this.state.loading && <spinner/>}
```


Explanation: The above logic means if the state of loading is true then only display the spinner in the application otherwise not.


#### **Using Spinner while clicking Next and Previous buttons**

Now, we want the Loading to become true whenever the Url is being hit, that is a request is being made to the server. For now, we are adding the loading in our handlePrevClick function as well as the handleNextClick function.


![4](https://user-images.githubusercontent.com/97989643/172917342-f655f5a3-6669-4adf-b84b-37b31089f7d6.png)

Figure 1.4: Using Spinner Component

Note: You can also add the Loading at any instance, like while switching the pages or rendering the application.



Result: Now, the loading is shown while making a request. But, the content and loading are showing up at the same time.

![40bf43b214a65a62e791a0fa1f544eb2](https://user-images.githubusercontent.com/97989643/172917366-64bfa284-88cd-41a3-a21d-82593c5add32.png)


Figure 1.5: Result and the Issue




### **Fixing Issue**

Thus, To fix this issue we would like to do one more thing to the application, which is erasing the NewsItems when the loading is going on. To do so, we would go to news.js and would edit the code in the following way:

![6](https://user-images.githubusercontent.com/97989643/172917390-f064eed7-2e48-4b6c-92de-b9e5f9641a01.png)



Figure 1.6: Fixing Issue

Explanation: If this.state.loading is true then don’t show any NewsItem otherwise render the news items.


### **The NewsMonkey Application**

Here’s how our application looks like at this instance:


![608468209b5654fe0c05969c092fab59](https://user-images.githubusercontent.com/97989643/172917417-a9e0daec-5d6e-47fd-83d5-2e550ba2b7cd.png)


Figure 1.7: NewsMonkey Application
