module.exports = {
	type: 'lin', //lin log exp
	b : 1, // y=b*x , y = b^x  , y = log[b](x)
	tick: 3000, // 3000 - 6000 - 9000
	nrTicks: 200, //nrTicks * tick = simulation loop time
	requestsFrequency: 250,// 500 - 1000 - 2000  - 2500 non fa molte richieste con num max utenti
	simulationID : 'LIN-1-3-200-250'
};  //utenti totali = 80  