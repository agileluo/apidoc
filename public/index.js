var api = {
	name: '用户登录',
	serviceId: 'oauth2',
	url: '',
	params: [
		{type: 'String', name: 'userId' },
		{type: 'String', name: 'password'},
		{type: 'Int', name: 'type'}
	],
	result: [
		
	]
}

$(document).ready(function(){
	var javaCode = genJavaCode(api);
	$("#java").html(javaCode);
})