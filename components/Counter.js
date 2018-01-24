/*var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },
    
    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    render: function() {
        return React.createElement('div', {onClick: this.increment},
            React.createElement('span', {}, 'Licznik ' + this.state.counter)
        );
    }
});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));*/
var Counter = React.createClass({
	getDefaultProps: function() {
		console.log('Ustawienie domyślnych wartości propsów.');
	},
	getInitialState: function() {
		return {
			counter: 0
		};
	},
	componentWillMount: function() {
		console.log('Komponent zostanie zamontowany.');
	},
	componentDidMount: function() {
		console.log('Komponent został zamontoany.');
	},
	componentWillReceiveProps: function() {
		console.log('Komponent otrzyma nowe łaściwości.');
	},
	shouldComponentUpdate: function() {
		console.log('Sprawdza czy komponent wymaga aktualizacji.');
		return true;
	},
	componentWillUpdate: function() {
		console.log('Komponent zostanie zaktualizowany.');
	},
	componentDidUpdate: function() {
		console.log('Komponent został zaktualizowany.');
	},
	componentWillUnmount: function() {
		console.log('Komponent zostanie odmontowany.');
	},
	increment: function() {
		this.setState({
			counter: this.state.counter + 1
		});
	},
	decrement: function() {
		this.setState({
			counter: this.state.counter - 1
		});
	},
	multiply: function() {
		this.setState({
			counter: this.state.counter * 2
		});
	},
	reset: function() {
		this.setState({
			counter: this.state.counter = 0
		});
	},
	render: function() {
		return React.createElement('div', {},
			React.createElement('button', {onClick: this.increment}, 'Dodaj'),
			React.createElement('button', {onClick: this.decrement}, 'Odejmij'),
			React.createElement('button', {onClick: this.multiply}, 'Mnóż x 2'),
			React.createElement('button', {onClick: this.reset}, 'reset'),
			React.createElement('p', {}, 'Licznik: ' + this.state.counter)
		);
	},
});