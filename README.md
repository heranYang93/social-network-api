<div align="center">
  <h3 align="center">Social Network API</h3>

  <p align="center">
    This API is built for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. Express.js, MongoDB database and the Mongoose ODM are used for routing, 
    <br />
    <a href="https://github.com/heranYang93/e-commerce-back-end/blob/main/Demo/demo_categories.mp4">View Demo Part1</a>
    ·
    <a href="https://github.com/heranYang93/e-commerce-back-end/blob/main/Demo/demo_tags%26products.mp4">View Demo Part2</a>
    ·
    <a href="https://github.com/heranyang93/e-commerce-back-end/issues">Report Bug</a>
    ·
    <a href="https://github.com/heranyang93/e-commerce-back-end/issues">Request Feature</a>
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#user-story">User Story</a></li>
        <li><a href="#acceptance-criteria">Acceptance Criteria</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About The Project

![Product Screenshoot](./Demo/result.png)

Internet retail, also known as **e-commerce**, is the largest sector of the electronics industry, generating an estimated $29 trillion in 2019. E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. Due to their prevalence, understanding the fundamental architecture of these platforms will benefit you as a full-stack web developer.

This task aims to configure a working Express.js API to use Sequelize to interact with a MySQL database.

<p align="right">(<a href="#top">back to top</a>)</p>

### User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

<p align="right">(<a href="#top">back to top</a>)</p>

### Acceptance Criteria

- GIVEN a functional Express.js API

- WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
  `THEN I am able to connect to a database using Sequelize`

- WHEN I enter schema and seed commands
  `THEN a development database is created and is seeded with test data`

-WHEN I enter the command to invoke the application
`THEN my server is started and the Sequelize models are synced to the MySQL database`

-WHEN I open API GET routes in Insomnia for categories, products, or tags
`THEN the data for each of these routes is displayed in a formatted JSON`

-WHEN I test API POST, PUT, and DELETE routes in Insomnia
`THEN I am able to successfully create, update, and delete data in my database`

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

The following dependencies/resources have been used:

- [Node.js](https://nodejs.org/en/)
- [dotenv](https://github.com/motdotla/dotenv#readme)
- [mysql2](https://github.com/sidorares/node-mysql2)
- [mySQL](https://www.mysql.com/)
- [sequelize](https://sequelize.org/)

<p align="right">(<a href="#top">back to top</a>)</p>

## Getting Started

### Prerequisites

- Node must be installed
- mySQL must be installed

### Installation

- Install all necessary dependencies
  - sequelize, dotenv, mysql2, and cli-table must be installed
  ```sh
  npm i
  ```
  - Point the terminal to the main directory and run the following command
  ```sh
  npm start
  ```

<p align="right">(<a href="#top">back to top</a>)</p>

## Usage

- Point the terminal to the main directory

- Run the following command in mySQL CLI
  `SOURCE db/schema.sql`

- Quit mySQL command line
  `quit;`

- Populate the database with your own data or use the seed provided in the package
  `npm run seed`

- Initiate the server
  `npm run start`

<p align="right">(<a href="#top">back to top</a>)</p>

## Contact

Heran Yang- [LinkedIn](https://www.linkedin.com/in/heranyang/)

Project Link: [https://github.com/heranyang93/team-profile-generator](https://github.com/heranyang93/team-profile-generator)

<p align="right">(<a href="#top">back to top</a>)</p>
