console.log('Hello')

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer!',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault()

    const option = e.target.elements.option.value

    if(option){
        app.options.push(option)
        e.target.elements.option.value = ''
        renderApp()
    }
}

const clearOptions = () => {
    app.options = []
    renderApp()
}

const onMakeDecision = () => {
    const randNum = Math.floor(Math.random() * app.options.length)
    const option = app.options[randNum]
    alert(option)
}


const appRoot = document.getElementById('app')


const renderApp = () => {
    const template = (
        <div> 
            <h1>{app.title}</h1> 
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options': 'No options'}</p> 
            <button disabled = {!(app.options.length > 0)} onClick = {onMakeDecision}>What should I do?</button>
            <button onClick = {clearOptions}>Clear all options</button>
            <ol>
                {
                    app.options.map((option) => {
                        return <li key = {option}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit = {onFormSubmit}>
                <input type = "text" name = "option"/>
                <button>Enter an option</button>
            </form>
            
        </div>
    )

    ReactDOM.render(template, appRoot)
}

renderApp()