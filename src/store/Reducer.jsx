export const ACTION_MODAL = "ACTION_MODAL"
export const CHANGE_NAME = "CHANGE_NAME"
export const CHANGE_LASTNAME = "CHANGE_LASTNAME"
export let display = 'none'

const firstName = localStorage.getItem('firstName')
const lastName = localStorage.getItem('lastName')
const token = localStorage.getItem('Token');

const modal = {
    open: false,
    name: firstName,
    lastname: lastName,
    Token: token
}

export function ActionModal(state = modal, action) {
    switch (action.type) {
        case ACTION_MODAL:
            const stateBis = {...state}
            stateBis.open = !stateBis.open
            return stateBis;
        case CHANGE_NAME:
            const stateTier = {...state}
            stateTier.name = action.payload.target.value
            return stateTier;
        case CHANGE_LASTNAME: 
            const stateQuatro = {...state}
            stateQuatro.lastname = action.payload.target.value
            return stateQuatro;
        default:
            return state
    }
}

//useReducer