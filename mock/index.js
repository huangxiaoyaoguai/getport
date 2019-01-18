let ip = {

}


function saveIp(name,vale){
	ip[name] = vale

	console.log(11111,vale,ip)
}

function getIp(name){
	return ip
}
module.exports={
	saveIp:saveIp,
	getIp:getIp

}
