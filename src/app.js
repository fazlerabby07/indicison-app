class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handlePick = this.handlePick.bind(this);
        this.handelDeleteOptions = this.handelDeleteOptions.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: ['List one', 'List two', 'List three'],
        };
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handelDeleteOptions() {
        this.setState(() => {
            return { options: [] };
        });
    }
    handleAddOption(option) {
        if (!option) {
            return 'Enter Valid to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option is already exists';
        }
        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option),
            };
        });
    }

    render() {
        const title = 'Indecision App';
        const subTitle = 'Put your life in the hand of a computer';
        return (
            <div>
                <Header title={title} subTitle={subTitle} />
                <Action handlePick={this.handlePick} />
                <Options
                    options={this.state.options}
                    handelDeleteOptions={this.handelDeleteOptions}
                />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handlePick}>
                    What Should I do
                </button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handelDeleteOptions}>
                    Remove All
                </button>
                {this.props.options.map((option, index) => {
                    return <Option key={index} option={option} />;
                })}
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return <div>{this.props.option}</div>;
    }
}

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

        this.setState(() => {
            return {
                error,
            };
        });
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
