export default class UsersDTO {
    constructor(user) {
        this.id = user.id
        this.nombre_completo = `${user.first_name} ${user.last_name}`
    }
}