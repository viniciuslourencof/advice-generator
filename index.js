// const translate = require('@iamtraction/google-translate');

async function fetchText() {
    let response = await fetch('https://api.adviceslip.com/advice');
    
    if (response.status === 200) {
        let res = await response.json(); 

        // const advice = await translate(res.slip.advice, { from: 'en', to: 'pt' })

        advice = res.slip.advice;

        let advice__text = document.querySelector('.advice__text');
        advice__text.innerHTML = advice;

        let advice__id = document.querySelector('.advice__id');
        advice__id.innerHTML = 'Advice #' + res.slip.id;        
    }
}

fetchText();