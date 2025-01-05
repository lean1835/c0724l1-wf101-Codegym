import React, {useEffect, useRef, useState} from "react";
import { addNewService, getServiceById, updateService } from "../services/FuramaService";
import {useNavigate} from 'react-router-dom'
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup';
// import {getAllManufacture} from "../services/manufactureService";
import {  toast } from 'react-toastify';
import { getAllType } from "../services/TypeService";
import { useParams } from "react-router-dom";

function EditComponent(){
    const {id}=useParams();
    const [typeList,setTypeList]=useState([]);
    const [service,setService]=useState(null);
    useEffect(()=>{
        const fetService = async () => {
        let service = await getServiceById(id);
            
            service ={
                ...service,
                type: JSON.stringify(service.type)
            }
            setService(service);
        }
        fetService();
    },[])
    useEffect(()=>{
            const fetchData= async()=>{
                const type= await getAllType();
                setTypeList(type);
            }
            fetchData();
        })
        
    const [typeId,setTypeId]=useState('');
    const navigate = useNavigate();
    const handleSubmit = async (value) => {
        console.log(value);
        const service = {
            ...value,
            type: JSON.parse(value.type)
        }
        await updateService(id,service);
        toast.success("Chỉnh sửa thành công");
        navigate('/list');
    }    

    const handleValidate = Yup.object({
            name: Yup.string().required("Tên không được để trống")
                .matches(/^[A-Z][a-z\d]*(\s[A-Z][a-z\d]*)*$/, 'Tên chưa đúng định dạng'),
            cost: Yup.number().required("Vui lòng nhập giá"),
            maxPeople:Yup.number().required("Vui lòng cho biết tối đa số người"),
            acreage: Yup.number().required("Vui lòng nhập diện tích"),
            rentalType: Yup.string().required("Vui lòng chọn kiểu thuê"),
            img: Yup.string().required("Nhập ảnh chi tiết"),
            // manufacture: Yup.string().required("Phải chọn"),
            // feature: Yup.array().min(1, "Phải chọn ít nhất 1")
        })
        if(service==null){
            return "";
        }
    return(
                <>
                    <h1>--Cập nhật dịch vụ--</h1>
                    
                    <Formik initialValues={service} onSubmit={handleSubmit} validationSchema={handleValidate} >
                        <Form>
                            <div>
                                <label >Name:</label>
                                <Field className="kc" type='text' name='name'/>
                                <ErrorMessage name='name' style={{color: 'red'}} component='div'/>
                            </div>
                            <div>
                                <label>Diện tích m<sup>2</sup>:</label>
                                <Field className="kc" type='number' name='acreage'/>
                                <ErrorMessage name='acreage' style={{color: 'red'}} component='div'/>
                            </div>
                            <div >
                                <label>Giá $:</label>
                                <Field className="kc" type='number' name='cost'/>
                                <ErrorMessage name='cost' style={{color: 'red'}} component='div'/>
                            </div>
                            <div>
                                <label >Số người tối đa:</label>
                                <Field className="kc" type='text' name='maxPeople'/>
                                <ErrorMessage name='maxPeople' style={{color: 'red'}} component='div'/>
                            </div>
                            <div>
                                <label>Kiểu thuê: </label>
                                <Field  type='radio' name='rentalType' value="Tuần"/> Tuần
                                <Field type='radio' name='rentalType' value="Tháng"/> Tháng
                                <Field type='radio' name='rentalType' value="Năm"/> Năm
                                <ErrorMessage name='rentalType' style={{color: 'red'}} component='div'/>
                            </div>
                            <div>
                                <label>Ảnh:</label>
                                <Field className="kc" type='text' name='img'/>
                                <ErrorMessage name='img' style={{color: 'red'}} component='div'/>
                            </div>
                            <div>
                                <label>Loại: </label>
                                <Field onClick={(event) => {
                                    console.log(event);
                                    let selectedType = "";
                                    if(event.target.value!=""){
                                        selectedType = JSON.parse(event.target.value);
                                        
                                    }
                                     
                                     setTypeId(selectedType.id); 
                                }} className="kc" as='select' name='type'>
                                    <option value={''}>-------Select----------</option>
                                    {typeList.map((t) => (
                                        <option key={t.id}  value={JSON.stringify(t)}>{t.name}</option>
                                    ))}
                                </Field>
                                <ErrorMessage name='type' style={{color: 'red'}} component='div'/>
                            </div>
                            <br/>
                            {(() => {
                                        switch (typeId) {
                                        case 1:
                                            return (<>
                                                    <h4>Thêm về Villa</h4>
                                                    <div>
                                                    <label>Tiêu chuẩn: </label>
                                                    <Field className="kc" as='select' name='standard'>
                                                    <option value={''}>---Tiêu chuẩn biệt thự---</option>
                                                    <option value={'1 sao'}>1 sao</option>
                                                    <option value={'2 sao'}>2 sao</option>
                                                    <option value={'3 sao'}>3 sao</option>
                                                    <option value={'4 sao'}>4 sao</option>
                                                    <option value={'5 sao'}>5 sao</option>
                                                </Field>
                                                <ErrorMessage name='standard' style={{color: 'red'}} component='div'/>
                                                </div>
                                                <div>
                                                <label>Tiện nghi khác: </label>
                                                <Field type='checkbox' name='amenities' value="Hồ bơi riêng"/> Hồ bơi riêng
                                                <Field type='checkbox' name='amenities' value="Karaoke"/> Karaoke
                                                <Field type='checkbox' name='amenities' value="Phòng gym"/> Phòng gym
                                                <ErrorMessage name='amenities' style={{color: 'red'}} component='div'/>
                                                </div>
                                                <div>
                                                <label>Diện tích bể bơi m<sup>2</sup>:</label>
                                                <Field className="kc" type='number' name='acreagePool'/>
                                                <ErrorMessage name='acreagePool' style={{color: 'red'}} component='div'/>
                                                </div>
                                                <div>
                                                <label>Số tầng:</label>
                                                <Field type='number' name='floors'/>
                                                <ErrorMessage name='floors' style={{color: 'red'}} component='div'/>
                                                </div>
                                                
                                                    </>             
                                                );
                                        case 2:
                                            return (<>
                                                    <h4>Thêm về House</h4>
                                                    <div>
                                                    <label>Tiêu chuẩn: </label>
                                                    <Field className="kc" as='select' name='standard'>
                                                    <option value={''}>---Tiêu chuẩn nhà---</option>
                                                    <option value={'Nhà cấp 4'}>Nhà cấp 4</option>
                                                    <option value={'Nhà 2 tầng'}>Nhà 2 tầng</option>
                                                    <option value={'Nhà thái'}>Nhà thái</option>
                                                </Field>
                                                <ErrorMessage name='standard' style={{color: 'red'}} component='div'/>
                                                </div>
                                                <div>
                                                <label>Tiện nghi khác: </label>
                                                <Field type='checkbox' name='amenities' value="Sân vườn"/> Sân vườn
                                                <Field type='checkbox' name='amenities' value="Giếng"/> Giếng
                                                <ErrorMessage name='amenities' style={{color: 'red'}} component='div'/>
                                                </div>
                                                <div>
                                                <label>Số tầng:</label>
                                                <Field type='number' name='floors'/>
                                                <ErrorMessage name='floors' style={{color: 'red'}} component='div'/>
                                                </div>
                                                
                                                    </>             
                                                );
                                       
                                        case 3:
                                            return (<>
                                                <h4>Thêm về room</h4>
                                                <label>Miễn phí: </label>
                                                <Field type='checkbox' name='free' value="nước"/> Nước
                                                <Field type='checkbox' name='free' value="wifi"/> wifi
                                                <ErrorMessage name='free' style={{color: 'red'}} component='div'/>
                                                </>             
                                            );
                                        default:
                                            return <div></div>;
                                        }
                                    })()}
                            <br/>
                            <div>
                                <button className="btn btn-success" type={'submit'}>Save</button>
                            </div>
                        </Form>
                    </Formik>
        
                </>
    )
}
export default EditComponent;