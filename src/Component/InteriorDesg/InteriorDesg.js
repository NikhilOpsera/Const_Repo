import React, { Component } from 'react';
import "./InteriorDesg.css";

export default class InteriorDesg extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
             btntext:'SEE MORE',
             styling : {display:"none"},
        }
    }
    
    btnBlock =()=>{
        console.log("ggs")
        if(this.state.btntext === 'SEE MORE'){
            this.setState({
                btntext: 'SEE LESS',
                styling : { },
            })
        } else {
            this.setState({
                btntext: 'SEE MORE',
                styling : {display:"none"},
            })
        }
    }

    render() {
        return (
                <div className="InteriorDesignes">
                    <p className="InteriorDesigne-text">InteriorDesign Project</p>
                    <div className="InteriorDesigne-grid">
                        <img className="grid1" src="/ImageBox/InteriorDesg/1.jpg" alt=""></img>
                        <img className="grid2" src="/ImageBox/InteriorDesg/29.jpg" alt=""></img>
                        <img className="grid1" src="/ImageBox/InteriorDesg/3.jpg" alt=""></img>
                        <img className="grid2" src="/ImageBox/InteriorDesg/4.jpg" alt=""></img>
                        <img className="grid1" src="/ImageBox/InteriorDesg/5.jpg" alt=""></img>
                        <img className="grid1" src="/ImageBox/InteriorDesg/7.jpg" alt=""></img>
                        {/* <img className="grid2" src="/ImageBox/InteriorDesg/6.jpg" alt=""></img> */}
                    </div>
                    <div className="InteriorDesigne-grid seedata-toto" style={this.state.styling}>
                        <img className="grid2" src="/ImageBox/InteriorDesg/8.jpg" alt=""></img>
                        <img className="grid1" src="/ImageBox/InteriorDesg/9.jpg" alt=""></img>
                        <img className="grid2" src="/ImageBox/InteriorDesg/10.jpg" alt=""></img>                        
                        <img className="grid1" src="/ImageBox/InteriorDesg/11.jpg" alt=""></img>
                        <img className="grid2" src="/ImageBox/InteriorDesg/12.jpg" alt=""></img>
                        <img className="grid1" src="/ImageBox/InteriorDesg/13.jpg" alt=""></img>
                        <img className="grid2" src="/ImageBox/InteriorDesg/14.jpg" alt=""></img>
                        <img className="grid1" src="/ImageBox/InteriorDesg/15.jpg" alt=""></img>
                        {/* <img className="grid2" src="/ImageBox/InteriorDesg/30.jpg" alt=""></img> */}
                        <img className="grid1" src="/ImageBox/InteriorDesg/17.jpg" alt=""></img>
                        <img className="grid2" src="/ImageBox/InteriorDesg/18.jpg" alt=""></img>
                        <img className="grid1" src="/ImageBox/InteriorDesg/19.jpg" alt=""></img>
                        <img className="grid2" src="/ImageBox/InteriorDesg/20.jpg" alt=""></img>
                        <img className="grid1" src="/ImageBox/InteriorDesg/21.jpg" alt=""></img>
                        <img className="grid2" src="/ImageBox/InteriorDesg/22.jpg" alt=""></img>
                        <img className="grid1" src="/ImageBox/InteriorDesg/23.jpg" alt=""></img>
                        <img className="grid2" src="/ImageBox/InteriorDesg/24.jpg" alt=""></img>
                        <img className="grid1" src="/ImageBox/InteriorDesg/25.jpg" alt=""></img>
                        <img className="grid2" src="/ImageBox/InteriorDesg/26.jpg" alt=""></img>
                        <img className="grid1" src="/ImageBox/InteriorDesg/27.jpg" alt=""></img>
                        <img className="grid2" src="/ImageBox/InteriorDesg/28.jpg" alt=""></img>
                    </div>
                    <button className="seemorebtner" onClick={this.btnBlock}>{this.state.btntext}</button>
                </div>
        );
    }
}

//  