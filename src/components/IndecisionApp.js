import React from "react";
import AddOption from './AddOption'
import Action from "./Action.js";
import Header from "./Header.js";
import Options from "./Options.js";
import OptionModal from './OptionModal'

class IndecisionApp extends React.Component{
    state = {
        options: [],
        selectedOption: undefined
    }
    
    
    
    render(){
        const subtitle = 'Put your life in the hands of a computer!'
        return (
            <div>
                <Header subtitle = {subtitle}/>
                <div className = "container">
                    <div className = "widget">
                        <Options options = {this.state.options} handleDeleteOptions = {this.handleDeleteOptions} handleDeleteSingle = {this.handleDeleteSingle}/>
                        <AddOption handleAddOption = {this.handleAddOption}/>
                    </div>
                    
                    <Action hasOptions = {this.state.options.length > 0} handlePick = {this.handlePick} />
                </div>
                
                <OptionModal selectedOption ={this.state.selectedOption} handleCloseModal = {this.handleCloseModal} />
            </div>
        )
    }



    handleDeleteOptions = () => {
        this.setState(() => ({
            options: []
        }))
    }

    componentDidMount(){
        try{
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)

            if(options){
                this.setState(() => ({
                    options: options
                })) 
            }
        }catch(e){

        } 
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
    }

    handleDeleteSingle = (option) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((opt) => opt !== option) 
        }))
    }

    handleCloseModal = () => {
        this.setState(() => ({
            selectedOption: undefined
        }))
    }

    handlePick = () => {
        const randNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randNum]
        this.setState(() => {
            return {
                selectedOption: option
            }
        })
    }

    handleAddOption = (option) => {
        if(!option){
            return 'Enter valid value to add item'
        }else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists'
        }
        this.setState((prevState) => ({
                options: prevState.options.concat([option])
        }))
    }
}

export default IndecisionApp