import React from 'react'
import {Modal,FormControl,Col,Image} from 'react-bootstrap';
import { connect } from 'react-redux';

import UiText from '../UiText';
import UiButton from '../UiButton';
import { changeQuantity } from '../../redux/action';
import '../../App.css';

class UiModal extends React.Component {
    constructor(props){
        super(props)
    }
    onChangeQuantity = (value, index) => {
        const { dataList, changeQuantity } = this.props;
        changeQuantity(index, value , dataList)
    }
    render() {
        console.log(this.props)
        const { item_id, show, dataList, onHide } = this.props;
        if(!item_id){
            return null;
        }else{
            const { p_name, p_price, p_image, p_style, p_quantity } = dataList[item_id];
            return (
                <div>
                    <Modal show={show} onHide={onHide}>
                    <Modal.Header closeButton>
                
                    </Modal.Header>
                    <Modal.Body style={{display:'inline-block'}}>
                    <Col md={12}>
                        <Col md={6}>
                            <UiText text={p_name} margin="0px 0px 20px 0px"/>
                            <UiText text={'$'} bold={'600'} color="black" 
                                bold={'600'} size={4} align="left"  margin='0px 10px 0px 10px'/>
                            <UiText text={p_price} bold={'600'} color="black" 
                                bold={'600'} size={6} />
    
                            <UiText text={p_style} margin="30px 0px 10px 0px"/>
                            
                            <Col md={12}>
                                <UiButton text={' '} color="green" align="left" margin="5px"/>
                                <UiButton text={' '} color="pink" align="left" margin="5px"/>
                                <UiButton text={' '} color="darkblue" align="left" margin="5px"/>
                            </Col>
    
                            <UiText text={'Color blue'} />
                            <Col md={12} className="inline-block" >

                                <select className="model-select">
                                    <option value="small">small</option>
                                    <option value="medium">medium</option>
                                    <option value="large">large</option>
                                    <option value="extra large">extra large</option>
                                </select>

                                <FormControl
                                    type="number"
                                    value={p_quantity}
                                    placeholder={'Quantity'}
                                    onChange={(e)=>this.onChangeQuantity(e.target.value, item_id)}
                                />

                            </Col>
                    
                            <UiButton text={'Edit'} color="darkblue" size={80}/>
                            <UiText text={'Cotton T-shirts'} underline={true}/>
                        
                        </Col>
                        <Col md={6}>
                            <Image src={p_image}
                                style={{width:'100%'}}/>
                        </Col>
                    </Col>
                    </Modal.Body>
                </Modal>
                </div>
            );
        }
        
    }
  }
  
  const mapStateToProps = (state, ownProps) => {
    return {
      dataList: state.dataList.dataList,
    };
  };
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeQuantity : (index, value , dataList) => {
            changeQuantity(index, value , dataList, dispatch)
        },
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(UiModal);