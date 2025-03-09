//Task 2 - Employee Cards Dynamic Addition
function createEmployeeCard(name, position){
    //Getting the main container to place employee cards
    let divEmpContainer = document.getElementById('employeeContainer');
    
    //Creating a new card for the employee
    const employeeCard = document.createElement('div');
    employeeCard.setAttribute('class','employee-card');
    
    //Adding the employee's name to the card
    const empName = document.createElement('h2');
    empName.setAttribute('class', 'employee-name');
    empName.textContent = name;
    employeeCard.append(empName);
    
    //Adding the employee's position to the card
    const empPosition = document.createElement('p');
    empPosition.setAttribute('class', 'employee-position');
    empPosition.textContent = position;
    employeeCard.append(empPosition);

    //Adding a button to remove the employee card
    const removeBtn = document.createElement('button');
    removeBtn.setAttribute('class', 'remove-btn');
    removeBtn.textContent = 'Remove';
    employeeCard.append(removeBtn); 
}

//When the webpage loads, the initial employee cards are added and the bulk styles are applied to all the cards
document.addEventListener('DOMContentLoaded', function (){
    createEmployeeCard('Doug Webster', 'Chief Technical Officer');
    createEmployeeCard('Sherrie Booker', 'Chief Information Officer');
    createBulkEmpStyleUpdate();
})

//Added in case there was an add button which I thought needed to be included. 
//If the add employee button is not required on the HTML page, this function can be removed.
//When "Add Employee" button is clicked, a new card is added and the styles are updated for all the cards
document.getElementById('addEmployeeBtn').addEventListener('click', () => {
    const currentCard = createEmployeeCard('Alice Hudson', 'Manager');
    setEmployeeCardStyle(currentCard);
})

//Task 3 - Bulk Update on Employee Cards
function createBulkEmpStyleUpdate(){
    //Selecting all the employee cards on the page
    const employeeCards = document.querySelectorAll('.employee-card');
    
    //Converting all cards to an array and adding styles
    const arrEmployees = Array.from(employeeCards);
    arrEmployees.forEach((emp) => {
        setEmployeeCardStyle(emp);
    })
}

//Setting the style per card
function setEmployeeCardStyle(currentCard){
    currentCard.style.border = '2px solid green';
    currentCard.style.backgroundColor = 'skyblue';
}