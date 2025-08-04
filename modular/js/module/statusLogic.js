const STATUS_CONFIG = {
    ativar:{
        text:'Sistema Ativo',
        className:'status-ativo'
    },
    pausar:{
        text:'Sistema em Pausa',
        className:'status-pausado'
    },
    alerta:{
        text:'ALERTA DE SISTEMA',
        className:'status-alerta'
    },
    resetar:{
        text:'Sistema Resetado',
        className:'status-resetado'
    }
};


/**
 * Função pura que retorna as informações de um status com base na ação 
 * @param {string} action - 
 */

 
export function getStatusInfo(action){
    return STATUS_CONFIG[action] || STATUS_CONFIG.resetar
}

