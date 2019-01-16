import React from "react";
//import "./button.css";
export class StatusButton extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            status:true,
            size:this.props.size?this.props.size:150,
            borderRadius:this.props.size?this.props.size/2+5:80,
            width:this.props.size?this.props.size/2-5:70,
            flag:this.props.size?true:false
        }
        
    }
    componentDidMount()
    {
        if(this.state.flag){
        if(this.props.size<=80)
        {
            this.setState({
                size:80,
                borderRadius:45,
                width:35
            })
        }
    }
    }
    render(){
        return(
            <div>
                    <div style={{backgroundColor:`${this.props.backgroundColor?this.props.backgroundColor:"lightgrey"}`,borderRadius:`${this.state.borderRadius}px`, width:`${this.state.size}px`,fontFamily:"QuickSand",padding:"2px 3px",position:"relative"}} align="middle">      
                    <div>                      
                        <div style={{width:`${this.state.width}px`,float:"left",borderRadius:`${this.state.borderRadius}px`,backgroundColor:`${this.state.status?(this.props.activeColor?this.props.activeColor:"#363638"):(this.props.backgroundColor?this.props.backgroundColor:"lightgrey")}`,color:`${this.state.status?"white":this.props.activeColor?this.props.activeColor:"#363638"}`,padding:"5px 10px",cursor:"pointer",overflow:"hidden"}}  onClick={()=>{this.setState({status:true});this.props.buttonClick1()}}><b>{this.props.status1?this.props.status:"O"}</b></div>
                        <div style={{width:`${this.state.width}px`,float:"right",borderRadius:`${this.state.borderRadius}px`,backgroundColor:`${this.state.status?(this.props.backgroundColor?this.props.backgroundColor:"lightgrey"):(this.props.activeColor?this.props.activeColor:"#363638")}`,color:`${this.state.status?this.props.activeColor?this.props.activeColor:"#363638":"white"}`,padding:"5px 10px",cursor:"pointer",overflow:"hidden"}}  onClick={()=>{this.setState({status:false});this.props.buttonClick2()}}><b>{this.props.status2?this.props.status:"I"}</b></div>
                        <div style={{clear:"both"}}/>          
                    </div>
                  </div>
                  </div>
                
        )
    }
}
export class StatusButtonToggle extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            status:true,
            size:this.props.size?this.props.size:150,
            borderRadius:this.props.size?this.props.size+5/2:80,
            width:this.props.size?this.props.size/2-5:70,
            flag:this.props.size?true:false
        }
        
    }
    componentDidMount()
    {
        if(this.state.flag){
        if(this.props.size<=80)
        {
            this.setState({
                size:80,
                borderRadius:45,
                width:35
            })
        }
    }
    }
    render(){
        return(
            <div>
                    <div style={{backgroundColor:`${this.props.backgroundColor?this.props.backgroundColor:"lightgrey"}`,borderRadius:`${this.state.borderRadius}px`, width:`${this.state.size}px`,fontFamily:"QuickSand",padding:"2px 3px",position:"relative"}} onClick={()=>{this.setState((prevState)=>({status:!prevState.status}));this.props.onclick()}} align="middle">       
                    <div>                      
                        <div style={{width:`${this.state.width}px`,float:"left",borderRadius:`${this.state.borderRadius}px`,backgroundColor:`${this.state.status?(this.props.activeColor?this.props.activeColor:"#363638"):(this.props.backgroundColor?this.props.backgroundColor:"lightgrey")}`,color:`${this.state.status?"white":this.props.activeColor?this.props.activeColor:"#363638"}`,padding:"5px 10px",cursor:"pointer",overflow:"hidden"}}><b>{this.props.status1?this.props.status:"O"}</b></div>
                        <div style={{width:`${this.state.width}px`,float:"right",borderRadius:`${this.state.borderRadius}px`,backgroundColor:`${this.state.status?(this.props.backgroundColor?this.props.backgroundColor:"lightgrey"):(this.props.activeColor?this.props.activeColor:"#363638")}`,color:`${this.state.status?this.props.activeColor?this.props.activeColor:"#363638":"white"}`,padding:"5px 10px",cursor:"pointer",overflow:"hidden"}}><b>{this.props.status2?this.props.status:"I"}</b></div>
                        <div style={{clear:"both"}}/>          
                    </div>
                  </div>
                  </div>
                
        )
    }
}