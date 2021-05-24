# OOP-Team-Manager

## Description 

A command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person.

## User Story

AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles 

## Acceptence Criteria

GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee id, email address, and office number
WHEN I enter the team manager’s name, employee id, email address, and office number
THEN I am presented with a menu with the option to add an engineer, an intern, or finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, id, email, and GitHub username and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, id, email, and school and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application and the HTML is generated


## Table of Contents

* [Descriptiom](#description)
* [User Story](#user-story)
* [Acceptence Criteria](#acceptence-criteria)
* [Table of Contents](#table-of-contents)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Questions](#questions)
* [Video Link](#video-link)


## Installation

Install the following items in the order shown below.

* npm init
* npm install inquirer
* npm install jest --save-dev
* npm install email-validator

## Usage 

Run the following command at the root of your gitbash terminal and answer the prompts.

* node index.js


Run the following code in the command box below:

* npm run test


## Credits

Zach Imerzel

## Questions

Contact me with any questions: 

Email : Zach.imerzel@gmail.com
Github : https://github.com/Zimerzel

## Video Link

https://drive.google.com/file/d/1eADYW8JmwWwcSB_D65ZZrrxCfWd04vJT/view