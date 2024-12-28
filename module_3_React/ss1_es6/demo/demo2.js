
///default param : giá mặc định của tham số
// gán giá trị cho tham số  -> là default param 
const sum=(a =1,b=2)=>a+b;
// nếu truyền vào giá trị thì tham số sẽ dc thay đổi khỏi giá trị mặc định
console.log(sum(10,20));
console.log(sum(5));
// Destructuring: phân rã mảng /đối tượng để lấy ra phân tử hoặc thuộc tính dễ dàng hơn

let mang1 =[23,2,5,7,34,6];
let mang2  = [2,4,6,8];
//...mang => phân rã mảng ra
//mang => là một đối tượng
let mang3 = [mang1,mang2]
//[ [ 23, 2, 5, 7, 34, 6 ], [ 2, 4, 6, 8 ] ] => 2 đối tượng -> như 2 phần tử của mảng mới
let mang3 = [...mang1,mang2]
//[ 23, 2, 5, 7, 34, 6, [ 2, 4, 6, 8 ] ] -> 1 mảng gộp vào và 1 đối tượng
let mang3 = [...mang1,...mang2]
// [
//   23, 2, 5, 7, 34,
//   6, 2, 4, 6,  8
// ] => gộp hẳn 2 mảng vào mảng 
console.log(mang3)
//muốn lấy 2 phần tử đầu tiên của mảng
let a = mang[0];
let b = mang[1];
//cho a,b là 2 ptu đầu tiên và ...rest chính là mảng để lưu những giá trị còn lại trong mang1 => nó chính là 1 mảng động 
const [a,b,...rest] = mang1; // cú pháp lưu giá trị trực tiếp của mảng const [biến hoặc mảng: ...rest]
// console.log(a)
// console.log(b)
// console.log(rest);

let student = {
    id: 1,
    name: 'chánh1'
}
//lưu giá trị trực tiếp của đối tượng const {thuộc tính chính xác của đối tượng} = đối tượng dc khởi tạo
const {name,id} = student;

// rest param
console.log(name)
console.log(id)

//gán trực tiếp có:
//mảng: const [a,b,...rest]=mang
//đối tượng: const {thuộc tính }= đối tượng
// có thể truy xuât trực tiếp

//tính tổng một mảng cần có giá trị truyền vào là 1 mảng(linh hoạt):
const sum = (...rest)=>{
    let tong =0;
    for (let i=0; i< rest.length;i++){
        tong += rest[i];
    }
    return tong;
}
console.log(sum(3,4,6,7,8,9,1,3));

// toán tử spread ;

// thêm thuộc tính cho đối tượng(gán lại đối tượng)
student ={
    //gọi các thuộc tính ban đầu của đối tượng trc
    ...student,
    //thêm thuộc tính mới
    age:40
}

console.log(student);
