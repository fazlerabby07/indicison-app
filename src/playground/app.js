class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handlePick = this.handlePick.bind(this);
        this.handelDeleteOptions = this.handelDeleteOptions.bind(this);
        this.handelDeleteOption = this.handelDeleteOption.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: [],
        };
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (err) {}
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length != this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('saving data');
        }
    }
    componentWillUnmount() {
        console.log('component did unmonunt');
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handelDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }
    handelDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter(
                (option) => optionToRemove !== option
            ),
        }));
    }
    handleAddOption(option) {
        if (!option) {
            return 'Enter Valid to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option is already exists';
        }
        this.setState((prevState) => ({
            options: prevState.options.concat(option),
        }));
    }

    render() {
        const subTitle = 'Put your life in the hand of a computer';
        return (
            <div>
                <Header subTitle={subTitle} />
                <Action
                    handlePick={this.handlePick}
                    hasOptions={this.state.options.length > 0}
                />
                <Options
                    options={this.state.options}
                    handelDeleteOptions={this.handelDeleteOptions}
                    handelDeleteOption={this.handelDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subTitle && <h2>{props.subTitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecision App',
};
const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick} disabled={!props.hasOptions}>
                What Should I do
            </button>
        </div>
    );
};

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handelDeleteOptions}>Remove All</button>
            {props.options.length === 0 && (
                <p>please add a option to get started</p>
            )}
            {props.options.map((option, index) => {
                return (
                    <Option
                        key={index}
                        option={option}
                        handelDeleteOption={props.handelDeleteOption}
                    />
                );
            })}
        </div>
    );
};

const Option = (props) => {
    return (
        <div>
            {props.option}
            <button
                onClick={(e) => {
                    props.handelDeleteOption(props.option);
                }}
            >
                Remove
            </button>
        </div>
    );
};

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined,
        };
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({ error }));

        if (!error) {
            e.target.elements.option.value = '';
        }
    }
    render() {
        return (
            <div> 
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
