import { ACTION_MODAL } from "./Reducer";
import { CHANGE_NAME } from "./Reducer";
import { CHANGE_LASTNAME } from "./Reducer";

export const toogleModalAction = (modal) => ({
    type: ACTION_MODAL,
    payload: {...modal, open: !modal.open}
})

export const nameAction = (modal) => ({
    type: CHANGE_NAME,
    payload: {...modal}
})

export const lastnameAction = (modal) => ({
    type: CHANGE_LASTNAME,
    payload: {...modal}
})