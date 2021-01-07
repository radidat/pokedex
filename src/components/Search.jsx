import React, {Component, createRef} from 'react'; 
import{getContext} from '../context/Context';

console.log(getContext)

 export class Search extends Component{

    constructor(props){
        super(props)
        this.input = createRef()
    }

 onClick = async (handleClick, inputRef)=>{ 

         let getValue = inputRef.current.value;
            if(!getValue){ 
                return;
            }else if(getValue){ 
              await handleClick(getValue.toLowerCase().trim())
            }
         document.querySelector("input[type*='text']").value =''
 }

    render(){
             const {handleClick} = this.context;
        return(
            <div className='search-pokemon row'>

            <div className='form-group col-auto' style={{width:'600px'}}>
                <input type='text' className='form-control' name='search' ref={this.input}></input>
            </div>

            <div type ='col-auto col-auto'>
            <button className='btn btn-info' 
            onClick={()=>this.onClick(handleClick, this.input) }>chercher</button>
            </div>
           
            </div>
          
        )
    }
}
Search.contextType = getContext;