function getFlag(lista, flagValue){
    flag = lista[lista.indexOf(flagValue) + 1];
    return flag
}
module.exports =  getFlag;