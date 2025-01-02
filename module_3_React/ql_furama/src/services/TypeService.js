import axios from "axios";

export async function getAllType(){
    try {
        const response=await axios.get("http://localhost:8080/type");
        return response.data;
    } catch (e) {
        console.log("Lỗi:"+e)
    }
}