function validateForm(e) {
    
    let messageList = document.getElementById('message');
    let nameValue = document.getElementById('name').value;
    let emailValue = document.getElementById('email').value;
    let checkboxState = document.getElementById('agreement-1').checked

    messageList.innerHTML = ''; // bez tego li sie dodaja, a tak to resetuje kod

    if(nameValue === '') {
        e.preventDefault(); // zatrzymuje wysylanie
        let msgName = document.createElement('li');
        msgName.innerText = 'Wpisz imię i nazwisko!';
        messageList.appendChild(msgName);
    }
    if(emailValue === '') {
        e.preventDefault();
        let msgEmail = document.createElement('li');
        msgEmail.innerText = 'Uzupelnij email!';
        messageList.appendChild(msgEmail);
    }
    if(!checkboxState) {            // checks if false
        e.preventDefault();
        let msgCheckbox = document.createElement('li');
        msgCheckbox.innerText = 'Wyraź zgodę 1';
        messageList.appendChild(msgCheckbox);
    }
}

document.getElementById('form').addEventListener('submit', validateForm);


function setAgreements() {
    let agreementOne = document.getElementById('agreement-1');
    let agreementTwo = document.getElementById('agreement-2');

    agreementOne.checked = this.checked;    //this odnosi sie do elementu wywolujacego zdarzenie
    agreementTwo.checked = this.checked;

    agreementOne.disabled = this.checked;    
    agreementTwo.disabled = this.checked;

}

document.getElementById('all-agreements').addEventListener('change', setAgreements);