const buttons = document.getElementsByClassName('box');
const inputfield = document.getElementById('number-input');

for(i=0 ; i<buttons.length; i++){

    buttons[i].addEventListener('click' , (event) =>{

        let inputtext = '' ;

        switch(event.target.innerHTML) {


            case 'C' :
                break;
            
            case '=' :
                inputtext= eval(inputfield.value);
                break;

            case '←' :
                inputtext = inputfield.value.slice(0, inputfield.value.length-1);
                break;

            default :
                inputtext = `${inputfield.value}${event.target.innerHTML}`;
                break;

        }

        inputfield.value= inputtext;
        
    })
}