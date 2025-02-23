import axios from "axios";
let url =`http://localhost:8080/service`
export async function getAllService(){
    try {
        const response=await axios.get(url);
        return response.data;
    } catch (e) {
        console.log("Lỗi:"+e)
    }
}

export async function getServiceById(id){
    try {
        const response=await axios.get(`${url}/`+id);
        return response.data;
        console.log(response)
    } catch (e) {
        console.log("Lỗi:"+e)
    }
}

export async  function searchByNameAndType(nameSearch,typeSearch) {

    let url1 =`${url}?name_like=${nameSearch}&type.id=${typeSearch}&_sort=name&_order=asc`
    if (typeSearch==""){
        url1 =`${url}?name_like=${nameSearch}&_sort=name&_order=asc`
    }
    try {
        const  response = await axios.get(url1);
        return response.data;
    }catch (e) {
        console.log("lỗi "+e);
        return [];
    }
}
export async function deleteServiceById(id){
    try {
        const response=await axios.delete(`${url}/`+id);

    } catch (e) {
        console.log("Lỗi:"+e)
    }
}
export async function addNewService(service) {
    try {
        const  response = await axios.post(url,service);
    }catch (e) {
        console.log("lỗi "+e);
    }

}
export async function updateService(id,service) {

    try {
        const  response = await axios.put(`${url}/`+id,service);
        console.log("---------service-update-------------")
    }catch (e) {
        console.log("lỗi "+e);
    }
}