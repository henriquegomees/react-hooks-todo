
import React from 'react'

function Form(props){
    return(
        <form onSubmit={props.onSubmit} style={{ paddingLeft: 40, marginTop: 16 }}>
            <input 
                type="text" 
                value={props.value}
                onChange={props.onChange}
                placeholder="Ex.: meeting at 2:20 PM"
            />
            <button type="submit">Add ToDo</button>
        </form>
    )
}

export default Form
