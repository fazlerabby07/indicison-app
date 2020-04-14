class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.onToggle = this.onToggle.bind(this);
        this.state = {
            visibility: false,
        };
    }

    onToggle() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility,
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.onToggle}>
                    {this.state.visibility ? 'Hide Details' : 'Show Details'}
                </button>
                {this.state.visibility && (
                    <p>This is the details you want to show.</p>
                )}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app')); // const visibilityIfo = {//     visible: false,//     buttonName: 'Show Details',// };// const onToggle = () => {//     visibilityIfo.visible = !visibilityIfo.visible;//     if (visibilityIfo.visible) {//         visibilityIfo.buttonName = 'Hide Details';//     } else {//         visibilityIfo.buttonName = 'Show Details';//     }//     render();// };// const app = document.getElementById('app');// const render = () => {//     const template = (//         <div>//             <h1>Visibility Toggle </h1>//             <button onClick={onToggle}>{visibilityIfo.buttonName}</button>//             {visibilityIfo.visible && (//                 <p>This is the details you want to show.</p>//             )}//         </div>//     );//     ReactDOM.render(template, app);// };// render();
