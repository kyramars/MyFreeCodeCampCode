$(document).ready(function() {
  var quotesArr = [
	{
		quote: "You never know how strong you are until being strong is the only choice you have.",
		author: "Bob Marley"
	},
	{
		quote: "What lies before us and what lies behind us are small matters compared to what lies within us. And when you bring what is within out into the world, miracles happen.", 
		author: "Henry David Thoreau" 
	},
	{
		quote: "I hope you live a life you're proud of. If you find that you are not, I hope you have the strength to start all over again.", 
		author: "F. Scott Fitzgerald" 
	},
	{
		quote: "Sometimes we creat our own heartbreaks through expectation.", 
		author: "Egypt - thegoodvibe.co" 
	},
	{
		quote: "I ended up falling in love with the moon, because it faithfully showed up, night after night.", 
		author: "hplyrikz.com" 
	},
	{
		quote: "Do not chase people. Be you and do you own thing and work hard. The right people who belong in your life will come to you, and stay.", 
		author: "Anonymous" 
	},
	{
		quote: "Women who wear black lead colorful lives.", 
		author: "Neiman Marcus" 
	},
	{
		quote: "You are the finest, loveliest, tenderest and most beautiful person I have ever known and even that is an understatement.", 
		author: "F. Scott Fitzgerald" 
	},
	{
		quote: "I liked her chaos. The way she blew into my life like a fucking storm, tearing the nails and windows out of my soul and opening me to the sky.", 
		author: "@inthegarden" 
	},
	{
		quote: "She was a storm, not the kind you run from, the kind you chase...", 
		author: "R. H. Sin" 
	},
	{
		quote: "Almost every successful person begins with two beliefs: the future can be better than the present, and I have the power to make it so.", 
		author: "Unknown" 
	},
	{
		quote: "Ask yourself if what you're doing today is getting you closer to where you want to be tomorrow.", 
		author: "Anonymous" 
	},
	{
		quote: "How bold one gets when one is sure of being loved.", 
		author: "Sigmund Freud" 
	},
	{
		quote: "Staying quiet doesn't mean you've got nothing to say. It means you don't think they're ready to hear your thoughts.", 
		author: "thepsychicmind.com" 
	},
	{
		quote: "Do not get upset with people or situations, both are powerless without your reaction.", 
		author: "Unknown" 
	},
	{
		quote: "Travel not to find yourself but to remember who you've been all along.", 
		author: "Unknown" 
	},
	{
		quote: "The soul has been given its own ears to hear things that the mind does not understand.", 
		author: "Rumi" 
	},
	{
		quote: "The trouble is, you think you have time.", 
		author: "Buddha" 
	},
	{
		quote: "Sometimes you put walls up not to keep people out, but to see who cares enough to break them down.", 
		author: "Socrates" 
	},
	{
		quote: "I have been a seeker and I still am, but I stopped asking the books and the stars. I started listening to the teaching of my soul.", 
		author: "Rumi" 
	},

]; //end of var quotes
  var colorsArr = [ 
    {color: "#04FFB7"}, 
    {color: "#61E81E"}, 
    {color: "#FFDB17"}, 
    {color: "#E86E07"}, 
    {color: "#FF0931"}, 
    {color: "#FF355C"}, 
    {color: "#BF2B68"}, 
    {color: "#4C438E"}, 
    {color: "#012658"}, 
    {color: "#FF8B61"}
  ]; //end of var colors
  var quote; 
  var quoteAuthor; 
  var color; 
  
  $("#getMessage").on("click", function() {
      var randomNumber = Math.floor(Math.random() * quotesArr.length); 
      //var colorRandomNumber = Math.floor(Math.random() * quotesArr.length); 
      
        quote = quotesArr[randomNumber].quote; 
        quoteAuthor = quotesArr[randomNumber].author;
        //color = colorsArr[colorRandomNumber].color; 
        
        $(".message").html(quote);
        $(".messageAuthor").html(quoteAuthor);  
        //$(".body").css(color); 
  }); //end of get quote button function
  
});  //end of document ready function 
