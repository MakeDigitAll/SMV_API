
function getUserInfo(email){
    return{
        id: email.id,
        email: email.email,
        nombre: email.nombre,
        apellido: email.apellido,
    }
}
module.exports = getUserInfo;