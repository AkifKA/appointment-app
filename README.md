# MAK Hospital Appointment Project
In the this project, a simple React application is created to manage hospital appointments. The application allows users to view a list of doctors and schedule appointments with them. The technologies used in this project include React for building the user interface, Bootstrap for styling, and React-Bootstrap for using Bootstrap components within the React application.

# Technologies Used:
   - React: A JavaScript library for building user interfaces, providing components and managing the application state.
   - Bootstrap: A popular CSS framework for styling the user interface with pre-defined styles and components.
   - React-Bootstrap: A library that integrates Bootstrap components into React applications, allowing the use of Bootstrap components as React components.

# Project Overview:
   - `index.js`: The entry point of the application where the root component (`App`) is rendered into the HTML element with the id "root".
   - `App.js`: The main component of the application that renders the `Home` component, which displays the hospital's appointment service.
   - `Home.js`: The component responsible for rendering the main content of the application. It displays the list of doctors and the appointment list.
   - `AddModal.js`: A modal component used to add new appointments. It takes input from the user for patient name and appointment date and time.
   - `AppointmentList.js`: A component to display the list of appointments. It allows the user to delete appointments and mark them as consulted.
   - `Doctors.js`: A component that displays a list of doctors, including their names and departments. It also provides the functionality to schedule appointments with a specific doctor by using the `AddModal` component.

The application uses React's state management and useState hook to handle and update the list of doctors and appointments. The `AddModal` component manages its own state to handle the input for creating new appointments. React-Bootstrap components, such as `Modal`, `Button`, `Form`, `Container`, `Row`, and `Col`, are used to create the user interface with Bootstrap styling. The application makes use of event handling and conditional rendering to provide a simple and intuitive user experience for managing hospital appointments. <br>

<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzd0a3N1N3JxMzI4NDd6N3M4YnQ1NGN2N3B2dTV0MjF6bGd1bzcxMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dUizNrYbLZrbElp5UN/giphy.gif" align="center" width="800">

## Project Skeleton

```
├── public
│     └── index.html
├── src
│    ├── components
│    │       ├── HastaEkle.jsx
│    │       │
│    │       └── HastaListe.jsx
│    │
│    ├── helper
│    │       └── Home.jsx
│    │ 
│    │ 
│    ├── App.js
│    ├── App.css
│    ├── index.js
│    └── index.css
├── package.json
└── yarn.lock
```
