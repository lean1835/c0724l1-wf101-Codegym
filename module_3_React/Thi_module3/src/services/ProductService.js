import axios from "axios";
let url =`http://localhost:3000/products`
// danh sách
export async function getAllProduct(){
    try {
        const response=await axios.get(url);
        return response.data;
    } catch (e) {
        console.log("Lỗi:"+e)
    }
}
// lấy thông tin 1 cái
export async function getProductById(id){
    try {
        const response=await axios.get(`${url}/`+id);
        return response.data;
    } catch (e) {
        console.log("Lỗi:"+e)
    }
}

// xóa
export async function deleteProductById(id){
    try {
        const response=await axios.delete(`${url}/`+id);

    } catch (e) {
        console.log("Lỗi:"+e)
    }
}
// thêm mới
export async function addNewProduct(service) {
    try {
        const  response = await axios.post(url,service);
    }catch (e) {
        console.log("lỗi "+e);
    }

}
// cập nhật
export async function updateProduct(id,product) {

    try {
        const  response = await axios.put(`${url}/`+id,product);
    }catch (e) {
        console.log("lỗi "+e);
    }
}