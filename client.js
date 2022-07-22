console.log('JS Working');

$(document).ready(onReady)

function onReady(){
    console.log('JQ Working');

    $('#submit-button').on('click', addEmployee);
    $('.salary-table').on('click', '.delete', removeEmployee)
}

let totalComp = [];
let uniqNum = 0;

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
    <td class"salary">${salary}</td>
    <td><button class="delete" id="${salary}">Delete</button></td>
    </tr>
    `)
    uniqNum++;

    $('.fname').val('');
    $('.lname').val('');
    $('.idNum').val('');
    $('.title').val('');
    $('.salary').val('');

    calcMonthTotal(totalComp);
}


function removeEmployee(){

    $(this).closest('tr').remove();

    const index = totalComp.indexOf(this.id);

    if (index > -1) {
        totalComp.splice(index, 1);
    }
    calcMonthTotal(totalComp);

}

function calcMonthTotal(array){
    $('.monthCost').empty();
    let monthTotal = 0;
    for( let i=0; i<array.length; i++ ){
        let costNum = Number(array[i]);
        monthTotal += (costNum / 12);
    }
    $('.monthCost').append(monthTotal);
}