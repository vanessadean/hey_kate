function loadRecipes(meal){
			
	var recipesURL = "https://www.googleapis.com/blogger/v3/blogs/3854030458663494467/posts?labels="+meal+"&maxResults=100&fields=items(title,url)&key=AIzaSyCexQPjcyCb2qtDq5ZAEiCNHrFEt0CjowA";

	var recipes = {
		'titles': [],
		'links': []
	};

	$.ajax({
		url: recipesURL,
		jsonpCallback: 'jsonCallback', 
		contentType: "application/json",
		dataType: 'jsonp',
		success: function(json) { 
			console.log(json);
			for (var i=0; i<json.items.length; i++) {
				recipes.titles[i] = json.items[i].title;
				recipes.links[i] = json.items[i].url;
      			}   
			console.log(recipes);
		}, 
		error: function(e) {	       
			console.log(e.message);
		}
	});
	return recipes;
}

var retorts = [
"Dream on sucker!",
"Maybe if you weren’t so ugly.",
"Do I look like Betty Crocker?",
"Make it yourself!",
"Not even if you looked like Ryan Gosling.",
"Take a hike!",
"Not while there is a breath in my body.",
"What’s in it for me?",
"Why would I do that?",
];


