console.log('App.js is running');

//JSX - Javascript XML
const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hand of a computer ',
    options: [],
};

const onFormSubmit = (event) => {
    event.preventDefault();

    const option = event.target.elements.option.value;

    if (option) {
        app.options.push(option);
        event.target.elements.option.value = '';
        render();
    }
};

const removeAllOptions = () => {
    if (app.options.length > 0) {
        app.options = [];
        render();
    }
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

var appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>
                {app.options && app.options.length > 0
                    ? 'Here is your options'
                    : 'no options'}
            </p>
            <button disabled={app.options.length <= 0} onClick={onMakeDecision}>
                What Should I do?
            </button>
            <button onClick={removeAllOptions}>Remove All</button>
            <ol>
                {app.options.map((option, index) => {
                    return <li key={index}>{option}</li>;
                })}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

render();
