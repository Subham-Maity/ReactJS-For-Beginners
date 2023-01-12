
![Screenshot 2022-05-16 050703](https://user-images.githubusercontent.com/97989643/168499075-85a1a8c0-fe74-41c8-be2c-90480615fefa.png)




### **Passing ImageURL as a Prop**

First of all, you have to use the Image Url with the props object. After that, We would pass the image URL in the ‘img src’ tag. Now, let’s pass content (URL of Image) in this ‘imageURL’ from News.js as shown below:

![1](https://user-images.githubusercontent.com/97989643/168499042-ac51b02d-88d1-4fc7-bc86-262d9321979d.png)

Figure 1.1: Passing Image as a Prop

Hence, we have successfully passed the image as a prop in the first News Item.


### **Using States in Class Components**

The first step is to create a state object and initialize it, and this step is usually done inside the class constructor:


### **Constructor**

If you don’t know, the constructor is a method used to initialize an object’s state in a class. Remember, within the constructor, we will call the super method. This is required because we extend react component class, and a call has to be made to the base class constructor.

Syntax:


```jsx
constructor(){
    super()
}
```



### **Creating the State object**

After doing this, we create our state object. For now, let ‘this.state’ equals an empty object.


```jsx
constructor(){
    super()
    this.state = {
    }
}
```


Remember, we are using the class-based components, so don’t forget to use the ‘this’ keyword. By the way, State is the reserved keyword in react. So, when you declare this.state, react understands your intention.

Hence, we have successfully created a state object. Now let’s go ahead and initialize a property.


#### **Create a variable**

Here, we will be creating an article variable. We would be using all the articles of ‘sampleoutput.json’ in this article variable as an array.


#### **Accessing this array**

We can easily access this array from the constructor by using ‘this.articles’ in the state. We can even add some more properties in this.state. For example, we are adding a loading property to our application.


![2](https://user-images.githubusercontent.com/97989643/168499060-3d066070-66b6-43c6-a914-13a2c1ecb2b7.png)

![Untitled Project](https://user-images.githubusercontent.com/97989643/168499093-72b8a48f-0592-4bda-bbe0-52086c17b684.gif)


Figure 1.2: Using States in Class Components


### **Revising Props and State**

At this point, If you are confused with the concept of Props and State in React. Here is a quick comparison between the two to clear your mind.

![6de3fcdc7f206c1b553f6f7b35388571](https://user-images.githubusercontent.com/97989643/168499064-35eb3da8-22e1-42c1-b652-c117e128a25b.png)

Figure 1.3: Quick Review between State and prop




