# Project Name
jQuery Salary Calulator

## Description

The goal of this project was to make a web application that could take in multiple inputs, display them on the DOM, and calulate the monthly total of all salaries.

Inputs to enter new employees: ( First Name, Last Name, ID Number, Title, and Annual Salary).
    Features:   - If any inputs are blank a pop up with notify user to fill out all fields.
                - Delete buttons next to each user that will remove them and their salary from the total.
                - Monthly cost is rounded to the nearest cent.
                - Monthly cost will be highlighted in red if it meets or exceeds $20,000.

The hardest part of this project is getting the delete button to remove the associated salary from the total.
    -I was able to solve this by assigning an ID of the salary amount to the delete button for each new employee. When the button is clicked, it will splice the array at the index of that salary amount and remove it from the total. 

