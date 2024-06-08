# Permalist Project

The Permalist is a web-based application designed to handle the creation, reading, updating, and deletion (CRUD) of persistent lists. It leverages PostgreSQL for data storage, ensuring that all entries are maintained safely and can be retrieved or modified at any time. The project is built using Node.js and Express.js, with EJS as the templating engine to render HTML views dynamically. This setup allows for seamless interactions and a straightforward user experience.

## Features
Create, Read, Update, and Delete Entries: Users can add new entries to the list, view all existing entries, modify details, and remove entries as needed.  
Persistent Data Storage: Utilizes PostgreSQL, providing robust and secure management of data.  
Dynamic Content Rendering: EJS templates facilitate dynamic HTML rendering based on server-side data. 

## Tech Stack
Frontend: HTML, CSS  
Backend: Node.js, Express.js   
Database: PostgreSQL  
Template Engine: EJS  

# Getting Started
## Prerequisites
Node.js  
npm (Node Package Manager)  
PostgreSQL  


## Installation

### 1.Clone the repository
```bash
git clone https://github.com/Vishnu2116/MERN-Stack-Project-Collection.git  
cd basic permalist project
```

### 2.Install NPM packages:
```bash
npm i
```

### 3.Setup PostgreSQL Database:
Ensure PostgreSQL is installed and running on your machine.  
Create a database for the project.  
Apply the database schema provided in the query.sql file.  

# Usage  

Once the application is running, navigate to the main page where you can:  

Add a new entry: Use the form provided on the main page to submit new items to the list.  
View all entries: All current entries are displayed below the form with options to edit or delete.  
Edit an entry: Click the 'Edit' button next to any entry to modify its details.  
Delete an entry: Click the 'Delete' button to remove an entry permanently.  

