import React from "react"
import Option from "./Option"


const Options = (props) => {
    return (
        <div>
            <div className = "widget-header">
                <h3 className = "widget-header__title">Your options:</h3>
                <button onClick = {props.handleDeleteOptions} className = "button button--link">Remove all options</button>
            </div>
            {props.options.length === 0 && <p className = "widget__message">Please add an option to get started!</p>}
            {
                props.options.map((option, index) => <Option count = {index + 1} key = {option} optionText = {option} handleDeleteSingle = {props.handleDeleteSingle} />)
            }
            
        </div>
    )
}

export default Options