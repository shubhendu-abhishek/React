const msg = React.createElement(
	'h2',
	{'id':"message", className:'msg'},
	"Helo World"
	)
ReactDOM.render(
	msg,
	document.getElementById("msg-container")
	)