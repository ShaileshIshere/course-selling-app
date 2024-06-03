
# course selling application

This app aims to streamline the process of creating and selling online courses, making it accessible for educators, trainers, and entrepreneurs to reach a global audience and generate revenue through their expertise.


## Features

- clone the repository on your respected systems.
- It's recommended to have an application that can check all the routes that are mentioned here.
- **note** this is only the backend of the application created through **Node.js, express, authentication, jsonwebtokens, mongoose, mongoDB.**
- feel free to give a feedback about the project so that it can be improved.


## with (auth, jwt)

#### Admin routes

| route | Request Type     | Requirements                | message |
| :-------- | :------- | :------------------------- | :--- |
| /admin/signup | `post` | username and password (json format) | success
| /admin/signin | `post` | token (a long zybrish string) | success
| /admin/courses | `post` | title, description, imageLink, price of the course (json format), don't forget to mention the token in the headers  | success

#### User routes

| route | Request Type     | Requirements                | message |
| :-------- | :------- | :------------------------- | :--- |
| /user/signup | `post` | username and password (json format) | success
| /user/signin | `post` | token (a long zybrish string) | success
| /user/courses | `get` | nothing, it's just the user exploring the variety of courses | no. of total courses and a course ID
| /user/courses/:courseID | `post` | courseID of the course that's going to be purchased by this user and token | success
| /user/purchasedCourses | `get` | token | user will see how many course he/she has bought

## without (auth, jwt)

#### Admin routes

| route | Request Type     | Requirements                | message |
| :-------- | :------- | :------------------------- | :--- |
| /admin/signup | `post` | username and password (json format) | success
| /admin/courses | `post` | title, description, imageLink, price of the course (json format), don't forget to mention the token in the headers  | success

#### User routes

| route | Request Type     | Requirements                | message |
| :-------- | :------- | :------------------------- | :--- |
| /user/signup | `post` | username and password (json format) | success
| /user/courses | `get` | nothing, it's just the user exploring the variety of courses | no. of total courses and a course ID
| /user/courses/:courseID | `post` | courseID of the course that's going to be purchased by this user | success
| /user/purchasedCourses | `get` | username in the headers | user will see how many course he/she has bought


