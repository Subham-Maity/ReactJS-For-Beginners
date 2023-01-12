### **Enable Router and "about.js"**

Earlier, we commented out our router and "about.js". So firstly recover the Router and the about page again, because this time we are going to host our application on a paid server and not on Github.


### **Uninstalling gh-pages**

We want to deploy our application in normal hosting and not in Github so remove the homepage from "package.json". Also, we will uninstall gh-pages by using the _"npm uninstall gh-pages"_ command.


### **npm run build**

We would be using the npm run build command, instead of npm start, because we are building the application for production.


### **Hosting - Digital Ocean**

We will be hosting our application in Digital Ocean. You can host your application on any other hosting provider as well.


### **Creating Droplet**

To create a droplet, click on the top right create button and select droplet, or to use your previous droplet click on the destroy section and then select the rebuild droplet option to use your previously created droplet.


### **Reset New password**

Open your Windows Powershell and write _ssh root@_ and paste your IPv4 address. You will receive your new password in your email ID.


### **Installing nginx**

The next thing which we have to do is to install nginx, Follow the below steps to install nginx:

1. Firstly run the _apt update_ by using the below command:


```
sudo apt update
```


2. After that install nginx by using the below command:


```
sudo apt install nginx
```


Now, visit the server IP address, which is your IPv4 address, to check if nginx has been installed or not.




### **Using Filezilla**

Enter your host, username and password in FileZilla and then navigate to "/var/www" and delete the existing file and at last copy your build folder and paste it in there.



![30062cf363c12a839de56ff21b3699f5](https://user-images.githubusercontent.com/97989643/167683748-e67fbd6d-608a-4c01-8521-e325ed1c8dde.png)


Figure 1.1: Using Filezilla

Now our static React app has been hosted on an IP address (Your ipv4 address).




### **Purchasing a Domain**

We would be purchasing the domain from Go Daddy. Our desired domain is mytextUtils.com, Therefore we have purchased it for two years at a price of Rs.1504.


### **DNS management**

A record will be added to our DNS. In the ‘points to’ field, we will be copying our IP address and then save the settings.

Hence we have successfully hosted our application and have purchased a professional domain for it.


### **Our application**

In the end, Our application has been hosted on digital ocean and has got the professional domains for it.







