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

var oCaptcha = document.getElementById('captcha');
oCaptcha.innerHTML = createCaptcha();

oCaptcha.onclick = function () {
	oCaptcha.innerHTML = createCaptcha();
}

//正则判断
function checked(){
	//手机验证出现条件
	document.getElementById("shouJi_c").onblur =function (){
		//1、属性
		let regUser = /^1(3|4|5|7|8|9)\d{9}$/; 
		let shouJiC = document.getElementById("shouJi_c");
		//2、方法
		if(shouJiC!=""){
			if(regUser.test(shouJiC)){
				document.getElementById("cuoTit_shouJi").style.display = "none";
				return true;
			}else{
				document.getElementById("cuoTit_shouJi").style.display = "block";
				document.getElementById("cuoTit_shouJi").innerHTML = "手机号格式不对";
				return false;
			}
		}else{
			document.getElementById("cuoTit_shouJi").style.display = "block";
			document.getElementById("cuoTit_shouJi").innerHTML = "手机号不能为空";
			return false;
		}
		
	}
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

}

