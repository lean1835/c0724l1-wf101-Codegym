const sv1={
    firstName: 'John',
    gender: 'male',
    degree: 'Bachelor',
    english: 'English'
};
const sv2={
    name: 'John',
    gender: 'male',
    degree: 'Bachelor',
    english: 'English'
};

const sinhVien=(firstName="Quân",degree="NA")=>{
    const sv={firstName,degree};
    return sv;
}
// const {firstName,degree}=sv1;
const {firstName,degree}=sv2;
console.log(sinhVien(firstName,degree));