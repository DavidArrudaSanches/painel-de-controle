// Arquivo: script-direto.js

// 
const statusDisplay = document.querySelector('#status-display')

const btnAtivar= document.querySelector('[data-action="ativar"]')
const btnPausar= document.querySelector('[data-action="pausar"]')
const btnAlerta= document.querySelector('[data-action="alerta"]')
const btnResetar= document.querySelector('[data-action="resetar"]')


btnAtivar.addEventListener('click', () =>{
    statusDisplay.textContent = 'Sistema Ativo.'
    statusDisplay.className = 'status-ativo';
});

btnPausar.addEventListener('click', () =>{
    statusDisplay.textContent = 'Sistema Pausado.'
    statusDisplay.className = 'status-pausado';
});

btnAlerta.addEventListener('click', () =>{
    statusDisplay.textContent = 'ALERTA DE SISTEMA.'
    statusDisplay.className = 'status-alerta';
});

btnResetar.addEventListener('click', () =>{
    statusDisplay.textContent = 'Sistema RESETADO.'
    statusDisplay.className = 'status-resetado';
});

