module.exports = {
	type: 'lin', //lin log exp
	b : 3, // y=b*x , y = b^x  , y = log[b](x)
	tick: 1000, //ms
	nrTicks: 5000 //nrTicks * tick = simulation loop time
};
