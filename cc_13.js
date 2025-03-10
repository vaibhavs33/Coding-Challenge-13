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

    //Task 4 - Employee Card Removal with Event Bubbling
    removeBtn.addEventListener('click', (event) => {
        //Removing the card from the page
        employeeCard.remove();
            
        //Prevent click from affecting parent elements (stop event bubbling)
        event.stopPropagation();
    });
    
    //Logging a message when the employee card is clicked
    employeeCard.addEventListener('click', () => {
        console.log('Clicked On Employee Card:', empName.textContent);
    });

    //Task 5 - Inline Editing for Employee Cards
    employeeCard.addEventListener('dblclick', () => {
        //Stopping the function if a save button already exists to prevent multiple edit modes
        if(employeeCard.querySelector('.save-btn')){
            return;
        }
            
        //Clearing the current card content for editing
        employeeCard.innerHTML = '';
        
        //Adding input field to edit the employee name
        const nameInput = document.createElement('input');
        nameInput.setAttribute('type', 'text');
        nameInput.value = empName.textContent;
        
        //Adding input field to edit the employee position
        const positionInput = document.createElement('input');
        positionInput.setAttribute('type', 'text');
        positionInput.value = empPosition.textContent;
        
        //Adding a save button to save the edits
        const saveBtn = document.createElement('button');
        saveBtn.setAttribute('class', 'save-btn');
        saveBtn.textContent = 'Save';
        
        //Adding elements with clear spacing
        employeeCard.appendChild(nameInput);
        employeeCard.appendChild(document.createElement('br'));
        employeeCard.appendChild(positionInput);
        employeeCard.appendChild(document.createElement('br'));
        employeeCard.appendChild(saveBtn);
        employeeCard.appendChild(document.createElement('br'));
        employeeCard.appendChild(removeBtn);
        
        //Saving the edits and going back to the original card view
        saveBtn.onclick = () => {
            //Updates the employee name. If value is not null or empty space, otherwise inform the user with an alert.
            if(nameInput.value != null && nameInput.value.trim() != ''){
                empName.textContent = nameInput.value.trim();
            }
            else{
                alert('Employee name cannot be empty, so putting the old value back');
            }
            
            //Updates the employee position. If value is not null or empty space, otherwise inform the user with an alert.
            if(positionInput.value != null && positionInput.value.trim() != ''){
                empPosition.textContent = positionInput.value.trim();
            }
            else{
                alert('Employee position cannot be empty, so putting the old value back');
            }
            
            employeeCard.innerHTML = '';
            employeeCard.append(empName, empPosition, removeBtn);
        };
    });
        
    //Adding the completed card to the container
    divEmpContainer.appendChild(employeeCard);
    return employeeCard; 
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
