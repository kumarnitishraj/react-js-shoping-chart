import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../../App.css';

import UiText from '../../component/UiText'
import UiModal from '../../component/UiModal';
import UiChartDetails from '../../component/UiChartDetails';
import { changeQuantity } from '../../redux/action'
import { LOAD_JSON, RREMOVE_ITEM } from '../../config' ;
import dataList from '../../config/data.json';

class UiContent extends Component {
    constructor(props) {
        super(props);    
        this.state = {
            show: false,
        };
    }

    componentDidMount(){
        const { loadJson } = this.props;
        loadJson()
    }
    
    handleClose = () => {
        this.setState({ 
            show: false 
        });
    }
    
    handleShow = (item_id) => {
        this.setState({ 
            show: true,
            item_id, 
        });
    }

    onChangeQuantity = (value, index) => {
        const { dataList, changeQuantity } = this.props;
        changeQuantity(index, value , dataList)
    }

    clickRemove = (index) => {
        const { removeData, dataList } = this.props;
        removeData(index, dataList);
    }

    render() {
        
        const { item_id, show } = this.state;
        const { dataList } = this.props;
        return (
            <Col md={12} sm={12} xs={12} style={{marginBottom:'20px'}}>

                <UiModal show={show} item_id={item_id} onHide={this.handleClose}/>
                <Col 
                    md={12}  
                    style={{ 
                        padding:'5px',
                        borderTop: '1px solid lightgrey',
                        borderBottom: '2px solid lightgrey'
                        }}
                    >
                        <Col md={8}><UiText text={'4 ITEMS'} bold={'600'} /></Col>
                        <Col md={1}><UiText text={'SIZE'} bold={'600'}/></Col>
                        <Col md={2}><UiText text={'QTY'} bold={'600'}/></Col>
                        <Col md={1}><UiText text={'PRICE'} bold={'600'}/></Col>
                </Col>
                <Col md={12}>
                {dataList.map((data, key)=>
                    {
                        return(
                            <UiChartDetails 
                                key={key} 
                                index = {key}
                                data={data}
                                handleShow={this.handleShow}
                                clickRemove={this.clickRemove}
                                onChangeQuantity={this.onChangeQuantity}
                            />
                        )
                    })}
                </Col>
                
            </Col>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      dataList: state.dataList.dataList,
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
        changeQuantity : (index, value , dataList) => {
            changeQuantity(index, value , dataList, dispatch)
        },
        removeData: (index, dataList) => {
            let list = dataList.filter((d,i)=>i==index?false:true);
            // list.splice(index, 1);
            dispatch({type:RREMOVE_ITEM, dataList:list})
        },
        loadJson : () => {
            dispatch({type:LOAD_JSON, dataList})
        },
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(UiContent);

