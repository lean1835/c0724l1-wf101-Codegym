// kết nối API
import axios from "axios"
const listStudents=[
    {
      id:1,
      name:"an1",
      phone:"0123",
      email: "anle@cg"
    },
    {
      id:2,
      name:"an2",
      phone:"0129",
      email: "lean@1"
    },
    {
      id:3,
      name:"an3",
      phone:"0423",
      email: "vanlam@914"
    }
  ];

export async function  getAllStudent() {
    try {
      const response= await axios.get("http://localhost:8080/Students");
      return response.data;
    } catch (e) {
      console.log("loi"+e);
      return [];
    }
}

export async function addNewStudent(student) {
  try {
    const response= await axios.post("http://localhost:8080/Students",student);
  } catch (e) {
    console.log("loi"+e);
    return null;
  }
}
// export function deleteStudentsId(id) {
//   for (let i = 0; i <listStudents.length ; i++) {
//      if (listStudents[i].id==id){
//          listStudents.splice(i,1);
//          break;
//      }
//   }
// }

export async function deleteStudentById(id){
  try {
    const response= await axios.delete("http://localhost:8080/Students/"+id);
  } catch (e) {
    console.log("loi"+e);
  }
}

export async function searchByNamme(nameSearch,classSearch){
  let url=`http://localhost:8080/Students?name_like=${nameSearch}&class.id=${classSearch}&_sort=name&_order=asc`;
  if(classSearch==''){
    url=`http://localhost:8080/Students?name_like=${nameSearch}&_sort=name&_order=asc`
  }
    try {
        const  response = await axios.get(url);
        return response.data;
    }catch (e) {
        console.log("lỗi "+e);
        return [];
    }
}


export async function getStudentById(id){
  try {
    const response= await axios.get("http://localhost:8080/Students/"+id);
    return response.data;
  } catch (e) {
    console.log("loi"+e);
    return []
  }
}