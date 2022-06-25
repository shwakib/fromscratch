import React from "react";
import { Card, CardBody, CardFooter, CardHeader, Button } from 'reactstrap';

const controlsArr = [
    { label: 'Salad', type: 'salad' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
]

const BuildControl = props => {
    return (
        <div className="d-flex">
            <div className="me-auto ml-5" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                {props.label}
            </div>
            <button style={{ fontSize: '20px', borderRadius: '4px' }} className="btn btn-success btn-sm m-1" onClick={props.added}>+</button>
            <button style={{ fontSize: '20px', borderRadius: '4px' }} className="btn btn-danger btn-sm m-1" onClick={props.removed}>-</button>
        </div>
    )
}

const controls = props => {
    return (
        <div className="container ml-md-5" style={{ textAlign: 'center' }}>
            <Card style={{ marginTop: '30px', marginBottom: '30px', textAlign: 'center' }}>
                <CardHeader style={{ backgroundColor: '#D70F64', color: 'white' }}><h4>Add Ingredients</h4></CardHeader>
                <CardBody>
                    {
                        controlsArr.map(item => {
                            return <BuildControl label={item.label} type={item.type} key={Math.random()} added={() => props.ingredientsAdded(item.type)} removed={() => props.ingredientsRemoved(item.type)} />
                        })
                    }
                </CardBody>
                <CardFooter>
                    <h5>Price:<strong>{props.price}</strong> BDT</h5>
                    <Button disabled={!props.purchasable} style={{ width: '100%' }} onClick={props.toggleModal}>Order Now</Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default controls;