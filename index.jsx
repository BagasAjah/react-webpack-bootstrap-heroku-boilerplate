import React from 'react';

export class App extends React.Component {
	render() {
		return (
			<div>A simple React Webpack Babel App</div>
		);
	}
}

React.render(<App/>, document.querySelector("#myApp"));
