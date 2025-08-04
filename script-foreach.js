const statusDisplay = document.querySelector('#status-display')

const todosOsBotoes = document.querySelectorAll('[data-action]')


todosOsBotoes.forEach(botao=> {
    botao.addEventListener('click', () => {
    
        const acao= botao.dataset.action

        console.log(acao)

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
})