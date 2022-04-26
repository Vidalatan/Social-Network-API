# Social Network API

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

A light-weight Mongo based API. Made as a proof of concept for using MongoDB with javascript.


## Table of Contents

1.  [Installation](#installation)

2.  [Usage](#usage)

3.  [License](#license)

4.  [Tests](#tests)

---

## [Installation](#installation)

>## Step One
>Create a MongoDB Database
>
>There are many ways to create an database with mongo, either locally or through a cloud platform such as [Mongo Atlas](https://www.mongodb.com/cloud/atlas/register2?utm_content=rlsapostreg&utm_source=google&utm_campaign=gs_americas_uscan_search_brand_dsa_atlas_desktop_rlsa_postreg&utm_term=&utm_medium=cpc_paid_search&utm_ad=&utm_ad_campaign_id=14383025495&adgroup=129270225274&gclid=CjwKCAjwsJ6TBhAIEiwAfl4TWHhemP4tH-_KAuJTYJEfoSu6TkPSWlf36aQnjZUP1qVRZLhOb7DlPBoCUbgQAvD_BwE). If you don't know how to create one, take a look at this [article](https://www.mongodb.com/basics/create-database).


>## Step Two
>Clone or Download
>
>You can clone the repo directly from github here, or you can download it as a a zip file. Just look for the green button at the top right corner of the gihub repo.


>## Step Three
>Navigate Terminal to Directory
>
>Once you have the social-network-BE-API directory on your computer, open up a terminal on its location.


>## Step Four
>Install Dependencies
>
>While you are located in the social-network-BE-API directory, enter 'npm install'. This should start installing all required dependencies.


>## Step Five
>Edit '.env.EXAMPLE' file
>
>If you are using Mongo Atlas, you will need to update the URI to connect to your database. This is found in the .env.EXAMPLE file.
>
>You will also nwant to update the file name itself to '.env' (removing the word EXAMPLE) so that it will actually get loaded in.

## [Usage](#usage)

>## Step One
>Navigate Your Terminal
>
>Either open a new terminal or navigate your terminal on the location of the social-network-BE-API directory.

>## Step Two
>Set the Database
>
>While your terminal is located on the social-network-BE-API directory, enter 'npm run seed'. This will initialize the database and some preset values (seeds).

>## Step Three
>Start the server
>
>In the same terminal, enter 'npm run start'. This will start the server and allow requests to be made to the server.

>## Step Four
>Send Requests
>
>If you have a HTTP-based API requesting tool like Insomnia or PostMan API, this will be a lot easier. Simply send requests to their correct routes including any information in the body as needed.
>
>If you don't have a tool for making API requests, then it is highly recommended you use one. You can sign-up for free and use [Post Man Here](https://www.postman.com/).

---

## [License](#license)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

 Copyright (c) 2022 Vidalatan Licensed under the MIT License license.

## [Tests](#tests)

Video demonstrating retrieving all or single users, creating users, updating users, and deleting users

https://user-images.githubusercontent.com/59946423/165375317-af1e9f09-8d3a-4c64-9a6b-eb43e5f54065.mp4



Video demonstrating adding and removing friend ids from users

https://user-images.githubusercontent.com/59946423/165375344-062d0a99-5232-4fa3-85f4-dc850f405b92.mp4



Video demonstrating retrieving all or single thoughts, creating thoughts, updating thoughts, and deleting thoughts. Including their cascading effect on users.

https://user-images.githubusercontent.com/59946423/165375369-535c7371-0283-40ad-81e6-90c2e722fcf4.mp4



Video demonstrating adding and removing reactions to thoughts. Including their cascading effect on users and thoughts.

https://user-images.githubusercontent.com/59946423/165375394-13495c5d-dc28-4891-a518-64b6ada56ef5.mp4



Here is the link to the full video:
[https://drive.google.com/file/d/1-pNGmY_fzMNMTDQiLXEAUdNipG6ZQVjK/view?usp=sharing](https://drive.google.com/file/d/1-pNGmY_fzMNMTDQiLXEAUdNipG6ZQVjK/view?usp=sharing)
