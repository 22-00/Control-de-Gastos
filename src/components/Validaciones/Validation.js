export const Validation = (obj) => {
    var error = {}
    if(obj.name.length > 20) error.name = "La descripcion no puede contener mas de 20 caracteres"
    return error
}

