function updateMessage(message) {
	$('#message').text(message);
}

function getMessage() {
	url = '/message';
	request = $.ajax({
		url: url,
		method: 'GET'
	});
	request.done(function (msg) {
		console.log(msg);
		updateMessage(msg.message);
	});
	request.fail(function (msg) {
		console.log('ERROR: Could not get the LBs');
	});
}

$(document).ready(function() {
	setInterval(getMessage, 1000);
});