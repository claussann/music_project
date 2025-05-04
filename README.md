Description:
A React-based web application simulating a music-themed platform with dynamic routing and interactive components. Designed as a portfolio project to demonstrate routing, state management, form handling, localStorage interaction, and functional programming concepts.

Features:
Fake Login System
Login page with a mock authentication form. After submission, a modal with a countdown redirects the user to the home page.

Dynamic Home Page
Cards are dynamically generated using the .map() method on an array of music genre objects.

Genre Navigation
Each card includes an interactive button to navigate to the selected music genre page.

Genre Page Functionality:
- Input field to enter your favorite band.
- Buttons to:
    - Save the selected genre and band to localStorage.
    - Load saved data from localStorage.
    - Delete data from localStorage.

Technologies Used:
React (with useState, useEffect, react-router-dom)
JavaScript
HTML/CSS
LocalStorage
Functional Programming