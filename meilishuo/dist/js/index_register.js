function createCaptcha() {
	var seeds = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

	var str = '';
	for(var i = 1; i <= 4; i++) {
		var index = Math.floor(Math.random() * seeds.length);

		str = str + seeds.charAt(index);
	}

	return str;
}

var arr = [];
for(var i = 1; i<= 10; i++) {
	arr.push(createCaptcha());
}
console.log(arr);


var oCaptcha = document.getElementById('captcha');
oCaptcha.innerHTML = createCaptcha();

oCaptcha.onclick = function () {
	oCaptcha.innerHTML = createCaptcha();
}

//正则判断
function checked(){
	//账户名只能使用数字字母下划线，且数字不能开头，长度在6-15之间
	//或者是手机号
	var checkFlag = false;
	document.getElementById("userName").onblur = checkUserName; 
	function checkUserName(){
		//1.属性		
	    let regUser = /^[a-zA-Z_]\w{5,14}$/; 
	    let regUserPhone =  /^1(3|4|5|7|8|9)\d{9}$/;  
		let userName = document.getElementById("userName").value;
		//2.方法
		if(userName!=""){
			if((regUser.test(userName)) || ( regUserPhone.test(userName))){
			//if(regUser.test(userName)){
				document.getElementById("cuoTit_userName").style.display = "none";
				// ajaxCheckName();
				return true;
			}else{
				document.getElementById("cuoTit_userName").style.display = "inline-block";
				document.getElementById("cuoTit_userName").innerHTML = "用户名格式不对";
				return false;
			}
		}else{
			document.getElementById("cuoTit_userName").style.display = "block";
			document.getElementById("cuoTit_userName").innerHTML = "用户名不能为空";
			return false;
		};		
	};

	document.getElementById("userPass").onfocus = function(){
			document.getElementById("cap").style.display = "block";
	}
	//密码，可以是数字，字母，下划线，长度在6-15之间
	document.getElementById("userPass").onblur =function checkUserPass(){
		//1、属性
		let regUser = /^[0-9a-zA-Z_]\w{5,14}$/; 
	 	let userPass = document.getElementById("userPass").value;
	 	//2、方法
	 	if(userPass!=""){
			if(regUser.test(userPass)){
				document.getElementById("cuoTit_userPass").style.display = "none";
				//checkFlag=true;
				//document.getElementById("msgbox").style.display = "block";
				//ajaxCheckName();
				return true;
			}else{
				document.getElementById("cuoTit_userPass").style.display = "inline-block";
				document.getElementById("cuoTit_userPass").innerHTML = "密码格式不对";
				//checkFlag=false;
				return false;
			}
		}else{
			document.getElementById("cuoTit_userPass").style.display = "block";
			document.getElementById("cuoTit_userPass").innerHTML = "密码不能为空";
			return false;
		};
	};
	
	
	

	//验证码	判断内容和随机产生的东西是否一致
	document.getElementById("checkMa").onblur = checkUseMa;

	function checkUseMa(){
		//1.属性	
		let checkMa=document.getElementById("checkMa").value;	
		let checkMa_box=document.getElementById("captcha").innerHTML;
		//2.方法
		if(checkMa==checkMa_box){
			document.getElementById("cuoTit_checkMa").style.display = "none";
			return true;
		}else{
			document.getElementById("cuoTit_checkMa").style.display = "block";
			document.getElementById("cuoTit_checkMa").innerHTML = "验证码有误";
			return false;
		}
	};


//	//手机验证出现条件
//	document.getElementById("shouJi").onblur =function checkEmail(){
//		//1、属性
//		let regUser = /^1(3|4|5|7|8|9)\d{9}$/; 
//		let shouJi = document.getElementById("shouJi").value;
//		//2、方法
//		if(shouJi!=""){
//			if(regUser.test(shouJi)){
//				document.getElementById("cuoTit_shouJi").style.display = "none";
//				return true;
//			}else{
//				document.getElementById("cuoTit_shouJi").style.display = "block";
//				document.getElementById("cuoTit_shouJi").innerHTML = "手机号格式不对";
//				return false;
//			}
//		}else{
//			document.getElementById("cuoTit_shouJi").style.display = "block";
//			document.getElementById("cuoTit_shouJi").innerHTML = "手机号不能为空";
//			return false;
//		}	
//	}

}