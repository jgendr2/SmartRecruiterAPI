## SmartRecruiter JQuery API

All references to SmartRecruiter belong to them.

This is a JQuery plugin you can use to display a more customized SmartRecruiters widget on your website.

## Usage
```hmtl
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="lib/jquery.xml2json.js"></script>
<script src="lib/jquery.smartRecruiters.js"></script>
<div id="example"></div>
```
```js
$(function(){
	$("#example").smartRecruiters({ 
		companyName: "Your Company Name", 
		pageUrl: "Your Page Url..default is window.location.href",
		departmentHtmlElement: "h3" 
	});
});
```

## Resulting Html
```hmtl
<div id="example">
	<h3>Department 1</h3>
	<ul>
		<li><a href="http://smartrecruiters.com/some/link/to/job" target="_blank">Some Job Title</a></li>
		<li><a href="http://smartrecruiters.com/some/link/to/job" target="_blank">Some Job Title</a></li>
		<li><a href="http://smartrecruiters.com/some/link/to/job" target="_blank">Some Job Title</a></li>
	</ul>
	<h3>Department 2</h3>
	<ul>
		<li><a href="http://smartrecruiters.com/some/link/to/job" target="_blank">Some Job Title</a></li>
		<li><a href="http://smartrecruiters.com/some/link/to/job" target="_blank">Some Job Title</a></li>
		<li><a href="http://smartrecruiters.com/some/link/to/job" target="_blank">Some Job Title</a></li>
	</ul>
</div>
```

## Customizing the Look
This plugin just outputs HTML, so all you need to do is add a little CSS and you're good to go!


## Demo
```index.html``` will show your results for an example.

## Want to Add Something to this Plugin?
Just fork it! Make sure you have node installed (brew install node), and coffeescript installed (npm install -g coffee-script), then from the directory run:
```sh
coffee --compile --output lib/ src/
```
