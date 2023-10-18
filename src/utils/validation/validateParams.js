export function ValidateParams(type, value) {

    switch (type) {
        case 'text':
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
                return value?.match(valid)

            } else if (value?.substring(4).length == 13) {
                //Aqui quando o numero esta  assim +258 8X XX XX XXX
                return value?.match(value.substring(4))

            } else if (value?.substring(3).length == 12) {
                //Aqui quando o numero esta assim 258 8X XX XX XXX
                return value?.match(value.substring(3))
            }

        case 'date':
            let date = new Date(value)
            return value && date

        case 'char':
            return value.length = 1

    }
}