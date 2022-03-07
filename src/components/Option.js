import React from 'react'

const Option = (props) => {
    return (
        <div className = "option">
            <p className = "option__text">{props.count}. {props.optionText}</p>
            
            <button 
                onClick = {(e) => {
                    props.handleDeleteSingle(props.optionText)
                }}
                className = "button button--link"
            >
                Remove
            </button>
        </div>
    )
}

export default Option