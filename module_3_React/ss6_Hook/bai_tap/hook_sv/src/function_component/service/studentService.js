// kết nối API

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

export function getAllStudent() {
// kết nối API của back-end
    return listStudents;
}

export function addNewStudent(student) {
// kết nối API để thêm mới
    listStudents.push(student);
}
// export function deleteStudentsId(id) {
//   for (let i = 0; i <listStudents.length ; i++) {
//      if (listStudents[i].id==id){
//          listStudents.splice(i,1);
//          break;
//      }
//   }
// }

export function deleteStudentById(id){
  for(let i=0;i<listStudents.length;i++){
    if(listStudents[i].id==id){
        listStudents.splice(i,1);
        break;
    } 
  }
}

export function searchByNamme(nameSearch){
  return listStudents.filter((student)=>student.name.includes(nameSearch))
}