// kết nối API

const listStudents=[
    {
      name:"an1",
      phone:"0123",
      email: "anle@cg"
    },
    {

      name:"an2",
      phone:"0129",
      email: "lean@1"
    },
    {
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