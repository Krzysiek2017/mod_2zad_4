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
		console.log('idea');
	},
	getInitialState: function() {
		return {
			counter: 0
		};
	},
	componentWillMount: function() {
		console.log('idea');
	},
	componentDidMount: function() {
		console.log('idea');
	},
	componentWillReceiveProps: function() {
		console.log('idea');
	},
	shouldComponentUpdate: function() {
		console.log('idea');
		return true;
	},
	componentWillUpdate: function() {
		console.log('idea');
	},
	componentDidUpdate: function() {
		console.log('idea');
	},
	componentWillUnmount: function() {
		console.log('idea');
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
			React.createElement('button', {
					onClick: this.increment
				},
				React.createElement('span', {}, 'Dodaj')),
			React.createElement('button', {
					onClick: this.decrement
				},
				React.createElement('span', {}, 'Odejmij')),
			React.createElement('button', {
					onClick: this.multiply
				},
				React.createElement('span', {}, 'Mnóż x 2')),
			React.createElement('button', {
					onClick: this.reset
				},
				React.createElement('span', {}, 'reset')),
			React.createElement('p', {}, 'Licznik: ' + this.state.counter)
		);
	},
});