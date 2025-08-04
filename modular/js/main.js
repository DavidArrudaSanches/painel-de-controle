// js/main.js

import { getStatusInfo } from "./module/statusLogic.js";
import { updateDisplay } from "./module/uiUpdater.js";

const statusDisplay = document.querySelector('#status-display')
const containerDeBotoes = document.querySelector('.botoes-acao')

function handleBottonClick (event){
    const target = event.target

    if (target.tagName !== 'BUTTON') return

    const acao = target.dataset.action

    const statusInfo = getStatusInfo(acao)

    updateDisplay(statusDisplay,statusInfo)
}

function init(){
    if(!containerDeBotoes)return;

    const initialStatus = getStatusInfo('resetar');
    updateDisplay
}