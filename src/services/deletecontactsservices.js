import http from "./httpservic";

export default function deletecontact(id){
    return http.delete(`/contacts/${id}`);
};