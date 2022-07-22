$(document).ready(onReady)

function onReady(){
    // These are the click listeners for the add emplyee and remove employee.
    $('#submit-button').on('click', addEmployee);
    $('.salary-table').on('click', '.delete', removeEmployee)
}

// this array will hold all salaries to be calculate the total
let totalComp = [];

// this function function takes in inputs, calls a function to add them to the DOM, clears the input categories, and adds salary to array.
function addEmployee(){

    // get info from all input fields
    let fName = $('.fname').val();
    let lName = $('.lname').val();
    let idNum = $('.idNum').val();
    let title = $('.title').val();
    let salary = $('.salary').val();

    // checks if any of the inputs are blank when submit button is clicked and send alert if any blanks
    if( fName == '' || lName == '' || idNum == '' || title == '' || salary == '' ){
        alert('Please fill out all fields before submitting');
    } else {

    // push salary of new emplyoee to totalComp array
    totalComp.push(salary);

    // append all input data to DOM
    $('.salary-table').append(`
    <tr>
    <td>${fName}</td>
    <td>${lName}</td>
    <td>${idNum}</td>
    <td>${title}</td>
    <td class"salary">$${salary}</td>
    <td><button class="delete" id="${salary}">Delete</button></td>
    </tr>
    `)
    // set values to blank again
    $('.fname').val('');
    $('.lname').val('');
    $('.idNum').val('');
    $('.title').val('');
    $('.salary').val('');

    // calculate monthly total
    calcMonthTotal(totalComp);
    }
}

// this function removes an emplyee from the DOM and removes their salary from total comp. It also recalls the calc total function
// to update the total.
function removeEmployee(){
    // remove from DOM
    $(this).closest('tr').remove();

    // get id which is salary
    const index = totalComp.indexOf(this.id);

    // remove this 1 salary from totalComp array
    if (index > -1) {
        totalComp.splice(index, 1);
    }
    // calculate monthly total again
    calcMonthTotal(totalComp);

}

// this function calculates the total monthly cost of the array of salaries and updates it on the DOM.
function calcMonthTotal(array){
    // clear the monthly cost on the DOM
    $('.monthCost').empty();
    // reset the total to $0
    let monthTotal = 0;
    // loop through to add all salaries divided by 12 months
    for( let i=0; i<array.length; i++ ){
        let costNum = Number(array[i] / 12);
        monthTotal += parseFloat(costNum.toFixed(2));
    }
    // display monthly cost on DOM and checks if total cost is less than $20,000
    if ( monthTotal < 20000 ) {
        // append monthy cost to DOM
        $('.monthCost').append(monthTotal);
        // remove red background if cost is less than $20,000
        $('.total-cost').removeClass('too-high');
    } else {
        // append monthy cost to DOM
        $('.monthCost').append(monthTotal);
        // add red background if cost is greater than $20,000
        $('.total-cost').addClass('too-high');
    }
}