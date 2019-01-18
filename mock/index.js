let ip = {


}


function saveIp(name,vale,path){
	ip[name].port = vale
	ip[name].path = path
	console.log(11111,vale,ip)
}

function getIp(name){
	return ip
}
module.exports={
	saveIp:saveIp,
	getIp:getIp

}
