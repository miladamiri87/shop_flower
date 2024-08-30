import axios from "axios";
const SERVER_URL ="http://localhost:9000";


export const getAllUsers = () =>{
    const url = `${SERVER_URL}/user`
    return axios.get(url)
}

export const getUser=(id) =>{
    const url= `${SERVER_URL}/user/${id}`
    return axios.get(url)
}

export const createUser = (user) =>{
    const url= `${SERVER_URL}/user`
    return axios.post(url, user)
}

// http://localhost:9000/contacts/1
// 
export const getProduct=(id) =>{
    const url= `${SERVER_URL}/new_arrival_card/${id}`
    return axios.get(url)
}

export const getAllGroups=()=>{
    const url=  `${SERVER_URL}/groups`
    return axios.get(url)
}
export const getGroup=(groupId)=>{
    const url= `${SERVER_URL}/groups/${groupId}`
    return axios.get(url)
}

export const updateContact = (contact, contactId)=>{
    const url= `${SERVER_URL}/contacts/${contactId}`
    return axios.put(url, contact)
}
export const deleteContact =(contactId)=>{
    const url= `${SERVER_URL}/contacts/${contactId}`
    return axios.delete(url)
}