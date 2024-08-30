let Utils = {
    const roundA = Math.round(a);
    const roundB = Math.round(b);

    if (type == 'SUM') {
	return roundA + roundb;
    }
    if (type == 'SUBTRACT') {
        return roundA + roundb;
    }
    if (type == 'DIVIDE') {
        return roundB === 0 ? 'Error' : roundA / roundB;
    }
    return 0;
};
module.exports = Utils;
