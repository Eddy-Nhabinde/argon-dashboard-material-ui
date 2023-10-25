export function ValidateParams(type, value, key) {
    const contPrefix = ['82', '83', '84', '85', '86', '87']

    switch (type) {
        case 'text':
            return value?.length > 0

        case 'password':
            return value?.length > 0

        case 'number':
            return typeof value == 'number'

        case 'email':
            var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            return value?.match(validRegex)

        case 'contact':
            let valid = /^[0-9]+$/

            if (value?.length == 9) {
                //Aqui no caso do contacto estar na forma regular 8X XX XX XXX
                return value?.match(valid) && contPrefix.indexOf(value?.substring(0, 2)) != -1

            } else if (value?.substring(4).length == 13) {
                //Aqui quando o numero esta  assim +258 8X XX XX XXX
                return value?.match(value.substring(4)) && contPrefix.indexOf(value?.substring(4, 6)) != -1

            } else if (value?.substring(3).length == 12) {
                //Aqui quando o numero esta assim 258 8X XX XX XXX
                return value?.match(value.substring(3)) && contPrefix.indexOf(value?.substring(3, 5)) != -1
            }

        case 'date':
            let date = new Date(value)
            if (key == 'dataNasc') {

                var month_diff = Date.now() - date.getTime();
                var age_dt = new Date(month_diff);
                var year = age_dt.getUTCFullYear();
                var age = Math.abs(year - 1970);

                return age >= 18
            }
            return value && date

        case 'char':
            return value.length == 1

    }
}