var recipes = [
"Pumpkin Pie From Scratch",
"Open-Faced Salmon Sandwiches with Sweet Mustard Sauce",
"Croxetti (or Corzetti) with Green Ricotta",
"Brussels Sprouts Grilled Cheese with Balsamic Reduction",
"Roasted Fingerling Potatoes with Chive Pesto",
"Sweet Potato and Turnip Gratin",
"Curried Lentils with Sweet Potatoes and Swiss Chard",
"Slow Cooker Pulled Pork Sandwiches",
"Roast Chicken with Artichokes and Parsley Butter",
"Scallop Gumbo",
"Baked Rigatoni with Gorgonzola, Brussels Sprouts, and Figs",
"Roasted Chicken with Honey, Orange, and Cumin",
"Rice Vermicelli Noodles with Peanut Sauce and Snow Peas",
"Spicy Curry Noodle Soup with Chicken and Sweet Potato",
"Grilled Shrimp with Pesto Vinaigrette and Chive Polenta Cakes",
"Tomato Soup",
"Buffalo Chicken and Blue Cheese Dip",
"Broccoli and Cheddar Mini Quiches",
"Bacon, Cheddar, and Chive Biscuits",
"Raspberry Walnut Tart",
"Chocolate Pecan Pie",
"Sour Cherry Pie with Almond Crumble",
"Cake Pops",
"Strawberry and Cream Paletas",
"Key Lime Tart",
"Cranberry Bars with a Walnut Crust",
"Lemon Bars",
"Pumpkin Cheesecake Brownies",
"Pear and Cranberry Crisp",
"Apple Pie",
"Mini Cinnamon and Sugar Muffins (Churro Bites)",
"Roasted Salmon with Curried Peach Sauce",
"Mediterranean Style Pizza",
"Butternut Squash, Kale, and Cheddar Bread Pudding",
"Lasagna with Zucchini, Mushrooms, and Spinach",
"Blueberry Muffins with Streusel Topping",
];



var links = [
"http://brooklynfoodlibrary.blogspot.com/2011/11/pumpkin-pie-take-2.html",
"http://brooklynfoodlibrary.blogspot.com/2013/06/open-faced-salmon-sandwich-with-sweet.html",
"http://brooklynfoodlibrary.blogspot.com/2013/05/croxetti-or-corzetti-with-green-ricotta.html",
"http://brooklynfoodlibrary.blogspot.com/2013/02/brussels-sprouts-grilled-cheese-with.html",
"http://brooklynfoodlibrary.blogspot.com/2013/02/roasted-fingerling-potatoes-with-chive.html",
"http://brooklynfoodlibrary.blogspot.com/2012/11/sweet-potato-and-turnip-gratin.html",
"http://brooklynfoodlibrary.blogspot.com/2012/11/curried-lentils-with-sweet-potatoes-and.html",
"http://brooklynfoodlibrary.blogspot.com/2012/06/slow-cooker-pulled-pork-sandwiches.html",
"http://brooklynfoodlibrary.blogspot.com/2012/04/roast-chicken-with-artichokes-and.html",
"http://brooklynfoodlibrary.blogspot.com/2012/03/scallop-gumbo.html",
"http://brooklynfoodlibrary.blogspot.com/2012/02/baked-rigatoni-with-gorgonzola-brussels.html",
"http://brooklynfoodlibrary.blogspot.com/2011/11/roasted-chicken-with-honey-orange-and.html",
"http://brooklynfoodlibrary.blogspot.com/2011/10/rice-vermicelli-noodles-with-peanut.html",
"http://brooklynfoodlibrary.blogspot.com/2011/09/this-was-cover-recipe-from-taste-of.html",
"http://brooklynfoodlibrary.blogspot.com/2011/09/grilled-shrimp-with-pesto-vinaigrette.html",
"http://brooklynfoodlibrary.blogspot.com/2013/02/soup-all-i-want-to-eat-these-days-is.html",
"http://brooklynfoodlibrary.blogspot.com/2013/02/buffalo-chicken-and-blue-cheese-dip.html",
"http://brooklynfoodlibrary.blogspot.com/2012/10/broccoli-and-cheddar-mini-quiches.html",
"http://brooklynfoodlibrary.blogspot.com/2012/03/anything-that-has-bacon-in-it-doesnt.html",
"http://brooklynfoodlibrary.blogspot.com/2013/04/raspberry-walnut-tart.html",
"http://brooklynfoodlibrary.blogspot.com/2012/11/chocolate-pecan-pie.html",
"http://brooklynfoodlibrary.blogspot.com/2012/06/sour-cherry-pie-with-almond-crumble.html",
"http://brooklynfoodlibrary.blogspot.com/2011/08/im-jumping-on-cake-pop-train-little.html",
"http://brooklynfoodlibrary.blogspot.com/2011/07/strawberry-and-cream-paletas.html",
"http://brooklynfoodlibrary.blogspot.com/2011/06/key-lime-tart.html",
"http://brooklynfoodlibrary.blogspot.com/2010/12/cranberry-bars-with-walnut-crust.html",
"http://brooklynfoodlibrary.blogspot.com/2010/12/lemon-bars.html",
"http://brooklynfoodlibrary.blogspot.com/2010/11/pumpkin-cheesecake-brownies.html",
"http://brooklynfoodlibrary.blogspot.com/2010/10/pear-and-cranberry-tart.html",
"http://brooklynfoodlibrary.blogspot.com/2010/10/apple-pie.html",
"http://brooklynfoodlibrary.blogspot.com/2012/10/mini-cinnamon-and-sugar-muffins-churro.html",
"http://brooklynfoodlibrary.blogspot.com/2011/08/roasted-salmon-with-curried-peach-sauce.html",
"http://brooklynfoodlibrary.blogspot.com/2011/07/mediterranean-style-pizza.html",
"http://brooklynfoodlibrary.blogspot.com/2010/12/butternut-squash-kale-and-cheddar-bread.html",
"http://brooklynfoodlibrary.blogspot.com/2010/12/lasagna-with-zucchini-mushrooms-and.html",
"http://brooklynfoodlibrary.blogspot.com/2011/09/blueberry-muffins.html",
];



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
	
	$('.next').on('click', function() {	
		
		var recipe = recipes[Math.floor(Math.random() * recipes.length)];
		
		var retort = retorts[Math.floor(Math.random() * retorts.length)];
				
		$("#ask").html('Would you pretty please make me <a href='+links[recipe]+' id="recipe"></br>'+recipe+'</a>');
		
		$("#retort").html(retort);
	
	});

});
