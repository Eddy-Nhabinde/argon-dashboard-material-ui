import { useRecoilState } from "recoil";
import { Role } from "store";

export function CheckRole(access) {
    const [role,] = useRecoilState(Role)

    switch (role) {
        case 'normal':
            if (access == 'all') return true
            else return false
        case 'psi':
            if (access == 'psi' || access == 'psi and admin') return true
            else return false
        case 'admin':
            if (access == 'all' || access == 'admin' || access == 'psi and admin') return true
            else return false
    }
}