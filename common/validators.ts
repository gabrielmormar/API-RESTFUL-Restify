export const validateCPF = (cpf: string): boolean => {
    let sum, rest
    if (cpf == undefined || cpf.trim().length === 0 || cpf === '00000000000') {
        return false
    }

    cpf = cpf.replace('.', '').replace('.', '').replace('-', '')

    sum = 0
    for (let i = 1; i <= 9; i++) {
        sum = sum + parseInt(cpf.substring(i-1, i)) * (11 - i)        
    }
    rest = (sum * 10) % 11

    if((rest === 10) || (rest === 11)) {
        rest = 0
    }

    if(rest !== parseInt(cpf.substring(9,10))) {
        return false
    }

}