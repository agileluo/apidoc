/**
 * 生成java代码片段
 * @param params 
 * @returns String: java代码片段
 */
function genJavaCode(api){
	var result = [];
	result.push('@FeignClient("' + api.serviceId + '")');
	result.push('public class ' + api.s + 'Client {');
		
	result.push('}');
	return result.join('\r');
}

