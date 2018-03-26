# React Kanban
> A digital Kanban board made with React

## Introduction
Build a Digital Kanban board using:
- **React** for building the front-end User-Interface (UI)
- HTML and CSS (via [sass](https://sass-lang.com))
- **Express** as the Server
- **Sequelize** as your ORM for the **Postgresql** Datastore.

## Specifications

### Card (component)
Cards contain information about a task.

#### Card Properties

A Card has 6 properties:
  1. A unique identifier, e.g. "Card-Id #001".
  1. A Title briefly describing the task.
  1. A priority selection to denote "Low" or "High" priority tasks.
  1. A status of a card that should match the column the card can be found in. Columns: "Queue", "In Progress", or "Done".
  1. A "Created by" field. This displays the name of the user who created the task. This field is automatically completed when a user submits a new card.
  1. An "Assigned to field". This should display the name of the person who is currently working on the task.

#### Creating a new Card
A form which is used to create a new Card. A card is first created with minimal information like:
  - Title (String)
  - Status (Queue, In Progress, Done)
  - Priority (low, Medium, High, Blocker)
  - Created By (Username)
  - Assigned To (Name)

All other fields are not needed when creating a new Card. The other fields: "Unique Identifier".

### Cards in Columns
A card can be moved to either the next or previous column using the Status selection field.


### Columns (component)
Columns contain Cards sharing the same status.

### Kanban Board (Main Component)
The Kanban board contains multiple Columns (and Columns contain Cards). This is the main application component. It is responsible for retreiving data and *passing it down* to other child components.

### Server
Express server which will serve the `index.html` and static assets.

#### Routes

The server has:
  - RESTful API endpoints to create, read, update, and delete kanban cards for your application. 

### Database
Sequelize (ORM) and Postgresql. Created a UML Schema for the database.

### Styles
Replicated similar color schemes and layouts as Trello.

#### Responsive Layout
Created a desktop and mobile view.