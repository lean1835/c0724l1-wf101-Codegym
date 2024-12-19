import axios from "axios";
export async function getAllClass() {
    try {
        const res= await axios.get("http://localhost:8080/Class");
        return res.data;
        console.log(res.data)
      } catch (e) {
        console.log("loi"+e);
        return [];
      }
}