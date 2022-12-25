const container = document.querySelector('.container'),
qrInput = container.querySelector('.form input'),
generateBtn = container.querySelector('.form button'),
qrImg = container.querySelector('.qr-code .qr-code_img');

generateBtn.addEventListener('click', ()=>{
    let qrValue = qrInput.value;

    if (!qrValue){
        alert('Insira uma URL ou um texto para gerar o QR Code');
        return;
    }
    
    generateBtn.innerText = "Gerando...";
    qrImg.src = `https://chart.googleapis.com/chart?cht=qr&chs=170x170&chl=${qrValue}`;
    qrImg.addEventListener('load', ()=>{
        generateBtn.innerText = "Gerar QR Code"
        container.classList.add('active');
    })
     
})

qrInput.addEventListener('keyup', ()=>{
    if(!qrInput.value){
        container.classList.remove('active')
    }
})