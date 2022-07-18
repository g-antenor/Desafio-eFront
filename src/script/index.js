const btn = document.querySelector('.btn-submit');
const btnIncorret = document.querySelector('.correct');
const btnCorrect = document.querySelector('.incorrect');

function openPopup() {
    let nome = document.getElementById('name');
    let email = document.getElementById('email');
    
    let correct = document.getElementById('right');
    let incorrect = document.getElementById('wrong');
    
    let veriName = [];
    let veriEmail = [];

    veriName.push(nome.value);
    veriEmail.push(email.value);

    if(veriName == '') {
        window.alert('[ERROR] Verifique os dados e tente novamente!');
    } else if (veriEmail == ''){
        incorrect.style.display = 'flex';
    } else {
        correct.style.display = 'flex';
    }

    console.log(veriName, veriEmail);
};

function closePopup() {
    let correct = document.getElementById('right');
    let incorrect = document.getElementById('wrong');

    let nome = document.getElementById('name');
    let email = document.getElementById('email');

    if (incorrect.style.display == 'flex' || correct.style.display == 'flex'){
        
        incorrect.style.display = 'none';
        correct.style.display = 'none'

        nome.value = '';
        email.value = '';

        nome.disabled = true;
        email.disabled = true;
        btn.disabled = true;
    }
}

btn.addEventListener('click', openPopup);

btnIncorret.addEventListener('click', closePopup);
btnCorrect.addEventListener('click', closePopup);