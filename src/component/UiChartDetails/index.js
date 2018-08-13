import React from 'react';
import { Col, Image, FormControl } from 'react-bootstrap';

import UiText from '../UiText';

const Chart = ({ data, onChangeQuantity, handleShow, clickRemove, index }) => {
    let subtotal = 0;
    let itemprice = data.p_price*data.p_quantity;
    subtotal = subtotal+itemprice;
    return(
        <div>
            <Col md={12} style={{padding:'20px 0px 20px 0px'}}>
                <Col 
                    md={8} 
                    style={{
                        padding:'0px',
                        margin:'0px'
                    }}
                >
                    <Col md={4} style={{padding:'0px'}}>
                        <Image 
                            src={data.p_image}
                            style={{width:'100%'}}
                        />
                    </Col>

                    <Col md={8}>

                        <Col md={12}> 
                            <UiText 
                                text={'COTTON T-SHIRTS'} 
                                color={'black'}  
                            />
                            <UiText 
                                text={`Style # : ${'Code'}`} 
                                bold={'600'}
                            />
                            <UiText 
                                text={`Color   : ${'colorName'}`} 
                            />
                        </Col>

                        <Col md={12} style={{    marginTop: '50px'}}>
                            <UiText 
                                text={'EDIT '} 
                                color={'black'} 
                                align="left" 
                                letterSpace={'1px'} 
                                margin='5px' 
                                onClick={()=>handleShow(data.p_id)}
                            />
                            <UiText 
                                text={'| X REMOVE'} 
                                color={'black'} 
                                align="left" 
                                margin='5px'
                                onClick={()=>clickRemove(index)}
                            />
                            <UiText 
                                text={'| SAVE FOR LATER'} 
                                color={'black'} 
                                margin='5px' 
                            />
                        </Col>
                       
                    </Col>

                </Col>

                <Col md={1}>
                    <UiText 
                        text={'S'} 
                        bold={'600'}
                    />
                </Col>

                <Col md={2}>
                    <FormControl
                        type="number"
                        value={data.p_quantity}
                        placeholder={'Quantity'}
                        onChange={(e)=>onChangeQuantity(e.target.value, data.p_id)}
                    />
                </Col>
                <Col md={1} style={{padding:'0px'}}>
                    <UiText text={data.c_currency} bold={'600'} color="black" 
                        bold={'600'} size={4} align="left"  margin='0px 10px 0px 10px'/>
                    <UiText text={itemprice} bold={'600'} color="black" 
                        bold={'600'} size={6} />
                </Col>
            </Col>
        </div>
    )
}

export default Chart;