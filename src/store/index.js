import { atom } from "recoil";

export const AlertState = atom({
    key: "AlertState",
    default: { msg: '', type: '', description: '' }
})

export const Role = atom({
    key: "Role",
    default: "admin"
})

export const Details = atom({
    key: "Details",
    default: { open: false, data: {} }
})

export const ModalState = atom({
    key: "ModalState",
    default: { open: false }
})

export const Confirmation = atom({
    key: "Confirmation",
    default: { open: false, confirm: false }
})

export const List = atom({
    key: "List",
    default: []
})

export const AddOrEdit = atom({
    key: "AddOrEdit",
    default: { add: false }
})

export const NameFilter = atom({
    key: "NameFilter",
    default: ""
})


export const HttpStatus = atom({
    key: "HttpStatus",
    default: 200
})




