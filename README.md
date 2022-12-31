README-Generator

A README.md generator that is used via the command line to help rapidly construct quality README files

Table of Contents 📃
Description
Usage
Technology
Features
Credits
License
Contribution Guidelines
Feedback
Description
The purpose of this CLI application is to help a developer to quickly generate a README.md template that they can then update at a later date manually.

Rather than having a dev simply copy and paste a template over from a saved template they might have on github, they can install this application to their local repository.

They then run the application, fill in some prompts and hesto presto the README template is there ready to be edited.

User Story 👤
AS A developer I WANT a README generator SO THAT I can quickly create a professional README for a new project

What did I Learn 🏫
One of the lessons I took away from this project was the importance of splitting up helper functions into utilities, exporting these functions and importing them into js files that I need them in.

I was already familiar with using npm to install packages and had used node before to run javascript files before.

Other things I learned:

Developed my understanding of how to use asynchronous functions in JavaScript
Deepened my knowledge on how to use badges for GitHub README files
Installation
In order to generate your own README.md, and simplify your life, follow these steps.

Ensure that you have node installed

Download Node

For detailed instructions on installing node please follow this link for instructions

Clone this repository into your local repository.

git clone git@github.com: git@github.com/mriya20/README-Generator.git
Initialize an npm package by running:

npm init
Install the dependencies to your package.json

npm i axios inquirer
After following these steps you're all set and ready to generate a plethora of README files from the CLI.

Feel free to write any npm scripts to automate the steps even further.

Usage
For a video of how to use the application please follow this link

Written instructions:

Initialize a remote repository on GitHub (So that you can link to the remote repository)
run the application with node index.js
Follow the prompts and make sure to input information correctly
After choosing the license the README is generated for you 🙌
Technology
The technology used for the development of this app was:

JavaScript

Node.js

packages:


inquirer
Features
Use prompts in the command line to generate a readme section
Email is validated using a RegEx
GitHub username is validated using a RegEx
Credits
🙏 Made with the help of:
Gergia Tech University

License
License: MIT

MIT License

Contribution Guidelines
I'm open to have anyone jump in and contribute just email to me

Guidelines for contributing
(https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)

Feedback
Ask Me Anything Gmail anastasia19markova@gmail.com


Mriya20

Any feedback please email Anastasia Markova

GitHub: Mriya20
