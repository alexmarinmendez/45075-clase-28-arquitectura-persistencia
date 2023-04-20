import UsersDTO from "../dtos/usersDto.js"
import UsersService from "../services/UsersService.js"

const userService = new UsersService()

const getUsers = async(req, res) => {
    let result = await userService.getUsers()
    let resultDTO = result.map(user => new UsersDTO(user))
    res.send(resultDTO)
}

const saveUser = async(req, res) => {
    let user = req.body
    let result = await userService.addUser(user)
    // res.send(result)
    res.send(new UsersDTO(result))
}

export default { saveUser, getUsers }