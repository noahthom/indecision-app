class Counter extends React.Component {
    render(){
        return (
            <div>
                <h1>Count: {this.state.count} </h1>
                <button onClick = {this.handleAddOne}>+1</button>
                <button onClick = {this.handleMinusOne}>-1</button>
                <button onClick = {this.handleReset}>Reset</button>
            </div>
        )
    }

    
    constructor(props){
        super(props)
        this.handleAddOne = this.handleAddOne.bind(this)
        this.handleMinusOne = this.handleMinusOne.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.state = {
            count: props.count
        }
    }


    handleAddOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }


    handleMinusOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }


    handleReset(){
        this.setState(() => {
            return {
                count: 0
            }
        })
    }


    componentDidMount(){
        try{
            const json = localStorage.getItem('count')
            const count = JSON.parse(json)
            if(count){
                this.setState(() => ({count: count}))
            }
        }catch(e){

        }
    }


    componentDidUpdate(prevState){
        if(prevState.count !== this.state.count){
            const json = JSON.stringify(this.state.count)
            localStorage.setItem('count', json)
        }
    
    }
}

Counter.defaultProps = {
    count: 0
}



ReactDOM.render(<Counter />, document.getElementById('app'))








// let count = 0 
// const addOne = () => {
//     count++
//     renderCounter()
// }

// const subtractOne = () => {
//     count--
//     renderCounter()
// }

// const reset = () => {
//     count = 0
//     renderCounter()
// }

// const appRoot = document.getElementById('app')

// const renderCounter = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick = {addOne}>+1</button>
//             <button onClick = {subtractOne}>-1</button>
//             <button onClick = {reset}>Reset</button>
//         </div>
//     )

//     ReactDOM.render(templateTwo, appRoot)
// }

// renderCounter()