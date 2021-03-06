var projects = [
	{name: "wikipedia", src: "img/logo/wikipedia.svg"},
	{name: "commons", src: "img/logo/wikimedia-commons.svg"},
	{name: "wikisource", src: "img/logo/wikisource.svg"},
	{name: "wikinews", src: "img/logo/wikinews.svg"},
	{name: "wiktionnary", src: "img/logo/wiktionnary.svg"},
	{name: "wikiversity", src: "img/logo/wikiversity.svg"},
	{name: "wikivoyage", src: "img/logo/wikivoyage.svg"},
	{name: "wikidata", src: "img/logo/wikidata.svg"},
	{name: "incubator", src: "img/logo/incubator.svg"},
	{name: "mediawiki", src: "img/logo/mediawiki.svg"},
	{name: "wikispecies", src: "img/logo/wikispecies.svg"},
	{name: "wikiquote", src: "img/logo/wikiquote.svg"},
	{name: "meta", src: "img/logo/wikimedia-meta.svg"},
	{name: "wikibooks", src: "img/logo/wikibooks.svg"},
	{name: "wikimania", src: "img/logo/wikimania.svg"}
	];

function genTable(innerHTML){
	return '<table><tr>' + innerHTML + '</tr></table>';
}

function genTd(imgSrc, isActive){
	return '<td><img' + ((isActive)?' class="actif"':'') + ' src="' + imgSrc + '"/></td>';
}

function genContent(projectsList, currentProject){
	var innerHTML = "";

	for( var key in projectsList){
		if(projectsList.hasOwnProperty(key)){
			if(projectsList[key].hasOwnProperty("src") && projectsList[key].hasOwnProperty("name")){
				innerHTML += genTd(projects[key].src, (projects[key].name == currentProject));
			}
		}
	}

	return genTable(innerHTML);
}

$(".footer-project").each(function(i, e){
	e.innerHTML = genContent(projects, e.dataset.activeProject);
});
