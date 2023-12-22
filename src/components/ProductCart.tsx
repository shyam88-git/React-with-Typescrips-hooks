import React, { useState } from 'react'
import { IProduct } from '../models/IProduct';
import styled from 'styled-components';
import { ProductServices } from '../services/ProductServices';
import {FaPlus,FaMinus ,FaTrash} from 'react-icons/fa'


const CardContainer=styled.div`
    
     margin: 0;
     padding: 0;
     width: 100%;
     margin-left: 20px;
`

const CardBody=styled.div`
    
    width: 50%;
    justify-content: center;
    text-align: left;
    
`

const CardTitle=styled.h2`

    font-size: larger;
    color: blueviolet;
    
    
`

const CardPara=styled.p`
    
    font-size: 20px;
    color: green;

`

const CardTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    border: 1px solid black;
    text-align: center;

    th, td {
        border: 1px solid black;
        padding: 8px;
    }

    .img-table {
        width: 50px;
        height: 30px;
    }
`;

const RedTrash=styled(FaTrash)`
    color:red;
`

const GreenMinus=styled(FaMinus)`
color:green;
`
const GreenPlus=styled(FaPlus)`
color:green;
`
    



const ProductCart:React.FC = () => {

     const[watches,setWatches]=useState<IProduct[]>(ProductServices.getAllProducts());

     const handleDecrement=(productId:string):void=>{

        const theProducts=watches.map((watch)=>{

             if(watch.id===productId){
                return{

                    ...watch,
                    qty:watch.qty-1>0?watch.qty-1:0
                }
             }
             return watch;
        });
        setWatches(theProducts);
     }

     const handleIncrement=(productId:string):void=>{

        const theProducts=watches.map((watch)=>{

            if(watch.id===productId){

                return{

                    ...watch,
                    qty:watch.qty+1
                }

                
            }
            return watch;
        });

        setWatches(theProducts);




     }

     const handleDelete=(productId:string):void=>{

        const products=watches.filter((watch)=>watch.id!==productId);


        setWatches(products);



     }
     
     
     
  return (

    <CardContainer>

        <CardBody>
            <CardTitle>Watch Kart</CardTitle>
            <CardPara>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio repellat sequi tempora numquam placeat quasi minus cum commodi animi quis quaerat, tenetur veniam exercitationem itaque, repudiandae, similique dolores fuga deserunt!</CardPara>

        </CardBody>

        {watches.length>0 ? <CardTable>
            <tr>
                <th>SNO</th>
                <th>Image</th>
                 <th>Price</th>
                 <th>Qty</th>
                 <th>Total</th>
                 <th>Action</th>
                 
            </tr>

            {watches.map((watch ,index)=>{

            

                return(

                   <tr key={index}>

                        <td>{watch.id}</td>
                        <td><img src={watch.imgUrl} alt="" className='img-table'/></td>
                        <td>&#8377;{watch.price}</td>
                        <td><GreenMinus onClick={()=>handleDecrement(watch.id)}/> {watch.qty} <GreenPlus onClick={()=>handleIncrement(watch.id)}/> </td>
                        <td>{watch.price * watch.qty}</td>
                        <td><RedTrash onClick={()=>handleDelete(watch.id)}/>
                            
                        </td>
                       
                        
                   </tr> 
                )
            })}


        </CardTable>

    :<span>Not Data Found</span>
        }
    </CardContainer>

        
    
  )
}

export default ProductCart;