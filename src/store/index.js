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