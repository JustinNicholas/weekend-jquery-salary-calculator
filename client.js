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
    <td><button class="delete ${placeInArray}">Delete</button></td>
    </tr>
    `)
    placeInArray++;

    $('.fname').val('');
    $('.lname').val('');
    $('.idNum').val('');
    $('.title').val('');
    $('.salary').val('');

    calcMonthTotal(totalComp);
}


function removeEmployee(){
    console.log(this.class);
    $(this).closest('tr').remove();

    //array.splice(5, 1);
}

function calcMonthTotal(array){
    $('.monthCost').empty();
    let monthTotal = 0;
    for( let i=0; i<array.length; i++ ){
        let costNum = Number(array[i]);
        monthTotal += costNum;
    }
    $('.monthCost').append(monthTotal);
}