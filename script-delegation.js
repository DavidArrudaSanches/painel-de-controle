const statusDisplay= document.querySelector('#status-display')

const containerBotoes= document.querySelector('.botoes-acao')

containerBotoes.addEventListener('click', (event) => {
    
    const target = event.target

    console.log(target)

    if(target.tagName !== 'BUTTON'){
        return
    }

    const acao = target.dataset.action;

    switch(acao) {
        case 'ativar':
            statusDisplay.textContent = 'Sistema Ativo.'
            statusDisplay.className = 'status-ativo';
            break
        case 'pausar':
            statusDisplay.textContent = 'Sistema Pausado.'
            statusDisplay.className = 'status-pausado';
            break
        case 'alerta':
            statusDisplay.textContent = 'ALERTA DE SISTEMA.'
            statusDisplay.className = 'status-alerta';
            break
        case 'resetar':
            statusDisplay.textContent = 'Sistema RESETADO.'
            statusDisplay.className = 'status-resetado';
            break
    }

})
