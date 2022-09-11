#  Deploy this Simple JS project into docker and the run in local kubernates

* **steps to deploy local machine

 ``` git clone  ```

 ``` docker build -t sumon84/nodeapp . ```

 ``` docker images ```

 ``` docker run -d -p 3000:3000 sumon84/nodeapp ``` 

* **Open your app in your ip: ``` http://192.168.1.27:3000 ```


## ** steps to push the image into docker hub

``` docker push sumon84/nodeapp:latest ```

 ## steps to deploy in kubernates

 ``` k apply -f deployment.yaml ```
 
 ``` k get deployment```
 
 ``` k get pods```

 ``` k apply -f service.yaml```

 Open the link:      http://192.168.49.2:31110

 Follow:   https://www.youtube.com/watch?v=CfPRbdT-wXo









