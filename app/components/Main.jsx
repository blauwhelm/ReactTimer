var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
	return (
		<div>
			<Nav />
			<p>Boilerplate React App</p>
			{props.children}
		</div>
	);
};



module.exports = Main;