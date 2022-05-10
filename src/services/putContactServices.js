import http from "./httpservic";

export default function putcontact(id,data){
    return http.put(`contacts/${id}`,data);
};