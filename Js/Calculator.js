 let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else if (buttonText == 'Help') {
            screenValue = "";
            screen.value = screenValue;
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}

function Hello() {
    alert("Press any number you want, After that try to press any Mathematical sign. E.G.(X,+,-,%). Thereafter press Another number, as you wish. Finally press the Button {'Equal'}. And you should get your Answer. For more Help scroll down 👇🏽 ");
 }
