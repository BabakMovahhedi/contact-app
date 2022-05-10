import http from "./httpservic";

export default function addcontact(data){
    return http.post('/contacts',data);
};