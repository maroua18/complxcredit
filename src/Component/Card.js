import React,{Component} from 'react'
import pice from "./puce.jpg"
import logo from "./mc.png"
import './card.css'


export default class Card extends Component{
state={
    number:"",
    name:"",
    date:"",
}


handleChangeNumber=(event)=>{
    if (event.target.value.length<=19 && (!event.target.value.match(/[^0-9 ]/g))) {
        this.setState({
            number:event.target.value.replace(/[ ]/g, "")
        })
    }
}
handleChangeName=(event)=>{
    if (event.target.value.length<=20 && (event.target.value.match(/[A-Z a-z]/g))) {
        this.setState({
            name:event.target.value.toUpperCase()
        })
    }
}

handleChangeDate=(event)=>{
    if (event.target.value.length<=5 && (!event.target.value.match(/[^0-9/]/g) &&(event.target.value.substring(0,2) <13))){
        this.setState({
            date:event.target.value.replace(/[/]/g, "")
        })
    }
  
}

slach=(x)=> {
    var arr = []
     for (let i=0; i< x.length ;i+=2) {
     arr.push(x.slice(i,i+2))
     }
     return arr.join('/')
 }

    render(){
        return(
            <div>



            <div className='credit-card'>
            <h1>Credit Card</h1>

            <div className='credit-card__number '>
            <img src={pice}alt="pic"></img>
             <h4>{this.state.number.padEnd(16,'*').match(/.{1,4}/g).join('  ')}</h4>
             </div>
            
            <div className="information">
                <div className="date">
                    <p><strong>5422</strong></p>
                    <p><strong>{this.state.name}</strong></p>
                </div>

                <div className='expiry'>
                    <div className="year">
                    <p>Month/Year</p></div>
                    <div className="validite"> 
                       <div><p>Valid </p>
                        <p>Thru</p></div>
                    <div><h5>{this.slach(this.state.date)}</h5></div>
                       </div>
                </div>
            </div>
            <img  className="visa"src={logo} alt="pic"/> 
            </div>


            <div> 
            <input value={this.state.number} onChange={this.handleChangeNumber} ></input>
            <input value={this.state.name} onChange={this.handleChangeName}></input>
            <input value={this.slach(this.state.date)} onChange={this.handleChangeDate}></input>
        </div>


</div>
        )
    }
}
