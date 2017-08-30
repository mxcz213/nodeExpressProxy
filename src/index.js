;(function(){
	var doc = document;
	var testButton = doc.getElementById('testButton');
	var testButton2 = doc.getElementById('testButton2');

	testButton.addEventListener('click',function(){
		ajax({
			method:'GET',
			url:'http://127.0.0.1:3000/user/classify',
			callback:function(data){
				console.log(data);
			}
		});		
	},false)

	testButton2.addEventListener('click',function(){
		ajax({
			method:'GET',
			url:'http://rapapi.org/mockjsdata/19913/private/v1/user/login',
			callback:function(data){
				console.log(data);
			}
		});		
	},false);

	function ajax(options){
		var xhr = new XMLHttpRequest();
		xhr.open(options.method,options.url,true);
		xhr.onreadystatechange = function(){
			if(xhr.readyState === 4){
				if(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304){
					var data = JSON.parse(xhr.responseText);
					options.callback(data);
				}
			}
		}
		xhr.send(null);	
	}
})();