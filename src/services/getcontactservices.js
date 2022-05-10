import http from "./httpservic";

export default function getcontact(){
    return http.get('/contacts');
};