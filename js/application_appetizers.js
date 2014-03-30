function loadRecipes(){

	var soupDip = {
			'titles': ["Tomato Soup","Homemade Chicken Noodle Soup","Homemade Noodles","White Bean, Pasta, and Kale Soup","Spicy Curry Noodle Soup with Chicken and Sweet Potato","Butternut Squash Soup with Pears and Shallots","Potato leek soup","Buffalo Chicken and Blue Cheese Dip","Goat Cheese and Caramelized Onion Dip","Roasted Garlic Hummus with Toasted Pine Nuts","Roasted Garlic","Roasted Cauliflower Dip"],
			'links': ["http://brooklynfoodlibrary.blogspot.com/2013/02/soup-all-i-want-to-eat-these-days-is.html","http://brooklynfoodlibrary.blogspot.com/2012/02/ive-been-slacking-on-blogging-but-now.html","http://brooklynfoodlibrary.blogspot.com/2012/01/homemade-noodles.html","http://brooklynfoodlibrary.blogspot.com/2012/01/after-strict-holiday-diet-of-cake-pops.html","http://brooklynfoodlibrary.blogspot.com/2011/09/this-was-cover-recipe-from-taste-of.html","http://brooklynfoodlibrary.blogspot.com/2010/09/butternut-squash-soup-with-pears-and.html","http://brooklynfoodlibrary.blogspot.com/2010/03/potato-leek-soup.html","http://brooklynfoodlibrary.blogspot.com/2013/02/buffalo-chicken-and-blue-cheese-dip.html","http://brooklynfoodlibrary.blogspot.com/2011/05/goat-cheese-and-caramelized-onion-dip.html","http://brooklynfoodlibrary.blogspot.com/2010/08/roasted-garlic-hummus-with-toasted-pine.html","http://brooklynfoodlibrary.blogspot.com/2010/08/roasted-garlic.html","http://brooklynfoodlibrary.blogspot.com/2010/03/roasted-cauliflower-puree.html"]
	};	

	var recipesURL = "https://www.googleapis.com/blogger/v3/blogs/3854030458663494467/posts?labels=Sides&maxResults=100&fields=items(title,url)&key=AIzaSyCexQPjcyCb2qtDq5ZAEiCNHrFEt0CjowA";

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
		}, 
		error: function(e) {
			console.log(e.message);    
		}
	});

	for (var i=0; i<soupDip.titles.length; i++){
		recipes.titles[21+i] = soupDip.titles[i];
		recipes.links[21+i] = soupDip.links[i];
	}
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

$(document).ready(function() {
	var recipes = loadRecipes();
	console.log(recipes);	
	$('.next').on('click', function() {
		var recipe = Math.floor(Math.random() * recipes.titles.length);
		var retort = retorts[Math.floor(Math.random() * retorts.length)];	
		$("#ask").html('Would you pretty please make me <a href='+recipes.links[recipe]+' id="recipe" target="_blank"></br>'+recipes.titles[recipe]+'</a>');
		$("#retort").html(retort);
	});
});
