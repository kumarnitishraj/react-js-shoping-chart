import React, { Component } from 'react';
import '../../App.css';
import UiText from '../../component/UiText'
import { connect } from 'react-redux'

class Footer extends Component {
    render() {

        const { dataList } = this.props;
        let subtotal = 0;
        dataList.map(d=>{
            let itemprice = d.p_price*d.p_quantity;
            subtotal = subtotal+itemprice;
        })
        let estimatedTotal = subtotal>5?subtotal-5:0;

        return (
        <div className="col-md-12 col-sm-12 col-xs-12" 
            style={{borderTop: '8px solid lightgrey',}}>
            <div className="col-md-3 col-sm-3 col-xs-3" style={{marginTop:'50px'}} >
                <UiText
                    text ={'Need help or have a question'}
                    size = {4}
                    bold = {600}

                />
                <UiText text={'Call customer service at \n 1800-189-200'} />
                <UiText text={'chat with one of our'} underline={true} color="black"/>
                <UiText text={'see return and exchnage policy'} underline={true} color="black"/>
            </div>

            <div className="col-md-9 col-sm-9 col-xs-9" style={{marginTop:'50px'}}>
            <div className="col-md-12 col-sm-12 col-xs-12" style={{ padding:'0px 10px 10px 10px',borderBottom: '3px solid lightgrey'}}>
                <div className="col-md-6 col-sm-6 col-xs-6">
                    <UiText text={'Enter promotion code or Gift Card'} size={5} />
                </div>
                <div className="col-md-6 col-sm-6 col-xs-6" align="right">
                    <input type="text" />
                    <button>{'APPLY'}</button>
                </div>
            </div>

            <div className="col-md-12 col-sm-12 col-xs-12"  style={{ padding:'20px 10px 20px 10px',borderBottom: '3px solid lightgrey'}}>
                <div className="col-md-12 col-sm-12 col-xs-12">
                    <div className="col-md-6 col-sm-6 col-xs-6">
                        <UiText text={'subtotls'} size={5} color="black" />
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-6" align="right">
                        <UiText text={"$ "+subtotal} />
                    </div>
                </div>

                <div className="col-md-12 col-sm-12 col-xs-12">
                    <div className="col-md-6 col-sm-6 col-xs-6">
                        <UiText text={'Promotion Code'}size={5} color="black" />
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-6" align="right">
                        <UiText text={'$ 15'} />
                    </div>
                </div>

                <div className="col-md-12 col-sm-12 col-xs-12">
                    <div className="col-md-6 col-sm-6 col-xs-6">
                        <UiText text={'Estimted Shipping'} size={5} color="black" />
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-6" align="right">
                        <UiText text={'free'} />
                    </div>
                </div>
            </div>

            <div className="col-md-12 col-sm-12 col-xs-12" style={{ padding:'20px 10px 20px 10px',borderBottom: '8px solid lightgrey'}}>
                <div className="col-md-6 col-sm-6 col-xs-6">
                    <UiText text={'Estimated Total'} size={6} color="black" 
                    subText={'Tax will be applied during checkout'}/>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-6" align="right">
                    <UiText text={'$ '+estimatedTotal} />
                </div>
                </div>
            <div className="col-md-12 col-sm-12 col-xs-12"></div>
            </div>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      dataList: state.dataList.dataList,
    };
};
  
export default connect(mapStateToProps)(Footer);
