import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';
class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined,
    };
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
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: option,
        }));
    };

    handelDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };

    handleClearSelectedOptionModal = () => {
        this.setState(() => ({ selectedOption: undefined }));
    };

    handelDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter(
                (option) => optionToRemove !== option
            ),
        }));
    };
    handleAddOption = (option) => {
        if (!option) {
            return 'Enter Valid to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option is already exists';
        }
        this.setState((prevState) => ({
            options: prevState.options.concat(option),
        }));
    };

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
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOptionModal={
                        this.handleClearSelectedOptionModal
                    }
                />
            </div>
        );
    }
}

export default IndecisionApp;
