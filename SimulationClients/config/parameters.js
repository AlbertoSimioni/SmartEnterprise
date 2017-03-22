module.exports = {
	type: 'lin', //lin log exp
	b : 2, // y=b*x , y = b^x  , y = log[b](x)
	tick: 500, //ms
	nrTicks: 5000, //nrTicks * tick = simulation loop time
	requestsFrequency: 5000,
	simulationID : 'first'
};
