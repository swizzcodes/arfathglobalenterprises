function scrollToSolutions(){
	document.getElementById("solutionsArea").scrollIntoView({
  behavior: "smooth",
  block: "center"
});

}

function showProduct(destination, product_id){
    sessionStorage.setItem("product_id", product_id);
    if(destination=='dry'){
    	window.location.href="HTML/dry_filtration.html";
    }else if(destination=="wet"){
    	window.location.href="HTML/wet_filtration.html";
    }else if(destination=="filter_media"){
    	window.location.href="HTML/filter_media.html";
    }
    else if(destination=="filter_hc"){
        window.location.href="HTML/filter_housings.html";
    }
    
}
function showProduct2(destination, product_id){
    sessionStorage.setItem("product_id", product_id);
    if(destination=='dry'){
    	window.location.href="dry_filtration.html";
    }else if(destination=="wet"){
    	window.location.href="wet_filtration.html";
    }else if(destination=="filter_media"){
    	window.location.href="filter_media.html";
    }
    else if(destination=="filter_hc"){
        window.location.href="filter_housings.html";
    }
    
}
function showIndustry(product_id){
    sessionStorage.setItem("product_id", product_id);
    window.location.href="HTML/industries.html"; 
}
function showIndustry2(product_id){
    sessionStorage.setItem("product_id", product_id);
    window.location.href="industries.html"; 
}

function scrollToItem(){
	var product_id = sessionStorage.getItem("product_id");
	console.log(product_id)
document.getElementById(product_id).scrollIntoView({ behavior: "smooth", block: "center" });
}
function clearHistory(){
    sessionStorage.removeItem("product_id");
}