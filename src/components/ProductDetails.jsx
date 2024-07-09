
import React, { useCallback, useEffect, useState } from 'react'
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import { useSelector} from "react-redux"

const ProductDetails = () => {

    const [product, SetProduct] = useState(null);

    const products = useSelector((state)=> state.products.data);

    const { id } = useParams();

    const getProductDetails = useCallback(async () => {

        // const res = await axios.get('/products.json');

        // const products = res.data.products;

        const currentProduct = products.find((product) => product.id === Number(id));

        SetProduct(currentProduct);
    },[id]);

    useEffect(() => {
        getProductDetails();
    }, [getProductDetails]);

    return (
        <Container>
            <Row className='my-3'>
                <Col md={5}>
                    <img src={product?.image} alt="" className='width-100' />
                </Col>
                <Col>
                    <ListGroup>
                        <ListGroup.Item>Name : {product?.name} </ListGroup.Item>
                        <ListGroup.Item>Brand : {product?.brand} </ListGroup.Item>
                        <ListGroup.Item>Price : {product?.price}</ListGroup.Item>
                        <ListGroup.Item>Stock : {product?.stock}</ListGroup.Item>
                        <ListGroup.Item>Description : {product?.description}</ListGroup.Item>
                        <ListGroup.Item>category : {product?.category}</ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductDetails