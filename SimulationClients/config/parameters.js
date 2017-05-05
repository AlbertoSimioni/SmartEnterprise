module.exports = {
	type: 'exp', //lin log exp
	b : 2, // y=b*x , y = b^x  , y = log[b](x)
	tick: 500, //ms
	nrTicks: 300, //nrTicks * tick = simulation loop time
	requestsFrequency: 50,
	simulationID : 'buyertest'
};
