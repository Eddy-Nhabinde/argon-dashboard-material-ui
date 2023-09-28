import { atom } from "recoil";

export const AlertState = atom({
    key: "AlertState",
    default: { msg: '', type: '', description: '' }
})

export const Role = atom({
    key: "Role",
    default: "admin"
})