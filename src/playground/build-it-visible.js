const visibilityIfo = {
    visible: false,
    buttonName: 'Show Details',
};

const onToggle = () => {
    visibilityIfo.visible = !visibilityIfo.visible;
    if (visibilityIfo.visible) {
        visibilityIfo.buttonName = 'Hide Details';
    } else {
        visibilityIfo.buttonName = 'Show Details';
    }

    render();
};

const app = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle </h1>
            <button onClick={onToggle}>{visibilityIfo.buttonName}</button>
            {visibilityIfo.visible && (
                <p>This is the details you want to show.</p>
            )}
        </div>
    );
    ReactDOM.render(template, app);
};
render();
