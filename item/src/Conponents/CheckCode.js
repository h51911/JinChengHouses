import React,{Component} from 'react';
class CheckCode extends Component{
    constructor(props){
        super(props);
        // this.state={
        //     num1:Math.ceil(Math.random()*100),
        //     num2:Math.ceil(Math.random()*80),
        //     res:0
        // }
        
        // this.state.res = this.state.num1+this.state.num2;
        // this.fresh = this.fresh.bind(this)
        // this.duibi = this.duibi.bind(this)
        // console.log(this.state.res)
        console.log("get",this.props.num1,this.props.num2,this.props.fresh)
    }
    // fresh(){
    //     let num1 = Math.ceil(Math.random()*100);
    //     let num2 = Math.ceil(Math.random()*80);
    //     this.setState({
    //         num1,
    //         num2,
    //         res:num1+num2
    //     })
    //     // console.log(this.state.res)
    // }
    // duibi(e){
    // console.log(e.target.value,this.state.res,e.target.value==this.state.res);
    // }
    // render(){
    //     let {num1,num2,res} = this.state;
    //     return (

    //         <div className="checkCode" onClick={this.fresh}>
    //          <span>{num1}</span><span>+</span><span>{num2}</span><span>=</span><span>{res}</span>
    //         </div>
          
    //     )
    // }
    render(){
        let {num1,num2,fresh} = this.props;
        return (

            <div className="checkCode" onClick={fresh}>
             <span>{num1}</span><span>+</span><span>{num2}</span><span>=</span>
            </div>
          
        )
    }
}
export default CheckCode;