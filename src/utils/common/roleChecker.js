export function CheckRole(access) {

    switch (sessionStorage.getItem('acesso')) {
        case 'normal':
            if (access == 'all' || access == 'admin and normal') return true
            else return false
        case 'psicologo':
            if (access == 'psi' || access == 'psi and admin' || access == 'all') return true
            else return false
        case 'admin':
            if (access == 'all' || access == 'admin' || access == 'psi and admin' || access == 'admin and normal') return true
            else return false
    }
}