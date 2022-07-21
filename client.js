console.log('JS Working');

$(document).ready(onReady)

function onReady(){
    console.log('JQ Working');

    $('#submit-button').on('click', addEmployee);
    $('.salary-table').on('click', '.delete', removeEmployee)
}

let totalComp = [];
let placeInArray = 0;

function addEmployee(){
    let fName = $('.fname').val()
    let lName = $('.lname').val()
    let idNum = $('.idNum').val()
    let title = $('.title').val()
    let salary = $('.salary').val()

    totalComp.push(salary);
    console.log(totalComp);

    $('.salary-table').append(`
    <tr>
    <td>${fName}</td>
    <td>${lName}</td>
    <td>${idNum}</td>
    <td>${title}</td>
    <td>${salary}</td>
    <td><button class="delete place${placeInArray}">Delete</button></td>
    </tr>
    `)
    placeInArray++;
}


function removeEmployee(){
    $(this).closest('tr').remove();
}