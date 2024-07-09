import React, { useEffect } from 'react'
import { Row,Col } from 'react-bootstrap'
import SingleProduct from './SingleProduct'
import { useDispatch, useSelector} from "react-redux"
import { getProducts } from '../redux/productSlice'


const LatestProducts = () => {

  const dispatch = useDispatch();

  const products = useSelector((state)=>  state.products.data);

  // const products =[{id:1} , {id:2} , {id:3} , {id:4} , {id:5} , {id:6}];

  // const [products , SetProducts] = useState([]);

  //hooks >> useEffect hook << Lifecycle events handle

  useEffect (()=>{

    fetch("./products.json")
    .then((data) => data.json() )
    .then((res) => dispatch(getProducts(res.products)));


  },[dispatch]); //<<dependancy array

  return (
    <>
      <Row>
        <Col className='my-3'>
        <h2>Latest Products</h2>
        </Col>
      </Row>
      <Row>
        {products && products.map((product,index)=>(
            <SingleProduct key={index} product ={product} />
        ))}
      </Row>
    </>
  )
}

export default LatestProducts