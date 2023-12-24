
interface UserInterface{
    username: string
    producer?: boolean
    password?: string
}

export class Auth implements UserInterface {
    username: string
    password?: string 

    constructor(username: string, password: string){
        this.username = username
        this.password = password
    }

    checkUser = async() =>{
        const response = await fetch("http://69-users-bun-1:6903/login",{
        method: "POST",
        body: JSON.stringify(this.username)
        })
        console.log(await response.json())
        //console.log(this.username)
    }
}
