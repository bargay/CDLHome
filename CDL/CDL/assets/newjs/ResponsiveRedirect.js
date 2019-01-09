$(function () {
	
	redirectResponsive();
	var specificUrl = window.location.pathname;
	
	function redirectResponsive(){
		var rawUrl = window.location.pathname;
		//alert(rawUrl);
		
		var urlsplit = rawUrl.split('/');
		var mobileUrl = "";
		for(i=0; i<urlsplit.length; i++){
			if(urlsplit[i]!="mobile"){
				mobileUrl = mobileUrl+urlsplit[i]+"/";
			}
		}
		
		//alert(mobileUrl);
		
		if(mobileUrl=="/residential/leasing-a-property/residences-for-lease/"){
			window.location.href = mobileUrl;
		}
		if(mobileUrl=="/cn/residential/leasing-a-property/residences-for-lease/"){
			window.location.href = mobileUrl;
		}
		if(mobileUrl=="/id/residential/leasing-a-property/residences-for-lease/"){
			window.location.href = mobileUrl;
		}
		
		if(mobileUrl=="/residential/buying-a-property/contact-us/"){
			window.location.href = mobileUrl;
		}
		if(mobileUrl=="/cn/residential/buying-a-property/contact-us/"){
			window.location.href = mobileUrl;
		}
		if(mobileUrl=="/id/residential/buying-a-property/contact-us/"){
			window.location.href = mobileUrl;
		}
	}
	
	$(window).on('hashchange', function() {
		//alert("change");
		if(specificUrl.includes("mobile/residential/find/find-properties")){
			//alert("include");
			window.location.href = window.location.pathname;
			return false;
		}
		
		if(specificUrl.includes("mobile/cn/residential/find/find-properties")){
			//alert("include");
			window.location.href = window.location.pathname;
			return false;
		}
		
		if(specificUrl.includes("mobile/id/residential/find/find-properties")){
			//alert("include");
			window.location.href = window.location.pathname;
			return false;
		}
		
		// if(specificUrl=="zzz"){
			// window.location.reload();
			// return false;
		// }
		redirectResponsive();
	});
    
});