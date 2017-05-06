module.exports = {
	type: 'lin', //lin log exp
	b : 1.5, // y=b*x , y = b^x  , y = log[b](x)
	tick: 5000, //ms
	nrTicks: 60, //nrTicks * tick = simulation loop time
	requestsFrequency: 200,
	simulationID : 'buyertest'
};
