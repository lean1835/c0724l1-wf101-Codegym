import React from "react";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { getServiceById } from "../services/FuramaService";
const DetailComponent= ()=>{
    const {id}=useParams();
    const [oneService,setOneService]=useState({id:"",name:"",acreage:'',cost:'',maxPeople:'',rentalType:'',type:{
        id:'',name:'',img:''
    },standard:'',amenities:'',acreagePool:'',floors:'',free:''});
    useEffect(()=>{
        const fetchData=async ()=>{
            const tempService= await getServiceById(id);
            setOneService(tempService);
        }
        fetchData();   
    },[])
    return(
        <>
        
        <h1>Chi tiết dịch vụ:</h1>
        
       
                        <img className="card-img-top" style={{width:"500px", height:"40%"}} src={oneService.img} />
                            <h3 className="card-title">Tên: {oneService.name}</h3>
                            <p className="card-text">
                              Giá:  {oneService.cost}$/{oneService.rentalType}
                            </p>
                            <p className="card-text">
                                Diện tích: {oneService.acreage}m<sup>2</sup>
                            </p>
                            <p className="card-text">
                                Loại: {oneService.type.name}
                            </p>
                            <p>
                                Ở tối đa: {oneService.maxPeople} người
                            </p>
                            <p>
                            <b>Thông tin và ưu đãi riêng của {oneService.type.name}:</b>
                            {(() => {
                                switch (oneService.type.id) {
                                case 1:
                                    return (<>
                                            <p>Tiêu chuẩn phòng: {oneService.standard}</p>
                                            <p>Tiện nghi khác: {oneService.amenities+" "}</p>
                                            <p>Diện tích bể bơi: {oneService.acreagePool}<sup>2</sup></p>
                                            <p>Số tầng: {oneService.floors}</p>
                                            </>             
                                        );
                                case 2:
                                    return (<>
                                        <p>Tiêu chuẩn phòng: {oneService.standard}</p>
                                        <p>Tiện nghi khác: {oneService.amenities+" "}</p>
                                        <p>Số tầng: {oneService.floors}</p>
                                        </>             
                                    );
                                case 3:
                                    return (<>
                                        <p>Miễn phí: {oneService.free+" "}</p>
                                        </>             
                                    );
                                default:
                                    return <div>Đây là nội dung cho các loại hình khác</div>;
                                }
                            })()}
                            </p>

        </>
    );
}
export default DetailComponent;

