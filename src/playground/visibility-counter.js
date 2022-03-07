let buttonName = 'Show details'

const onSwitch = () => {
    if(buttonName === 'Show details'){
        buttonName = 'Hide details'
    }else{
        buttonName = 'Show details'
    }
    render()
}

const appRoot = document.getElementById('app')

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick = {onSwitch}>{buttonName}</button>
            <p>{buttonName === 'Hide details' ? 'Here are some details' : null}</p>
        </div>
    )
    
    ReactDOM.render(template, appRoot)
    
}

render()