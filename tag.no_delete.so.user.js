// ==UserScript==
// @name           Simple no delete on tags
// @namespace      iorgamihai
// @description    Move delete icon on top of tag StackExchange
// @include        http://stackoverflow.com/*
// @include        http://*.stackoverflow.com/*
// @include        http://serverfault.com/*
// @include        http://superuser.com/*
// @include        http://meta.stackoverflow.com/*
// @include        http://meta.serverfault.com/*
// @include        http://meta.superuser.com/*
// @include        http://stackapps.com/*
// @include        http://*.stackexchange.com/*
// @include        http://askubuntu.com/*
// @include        http://meta.askubuntu.com/*
// @include        http://answers.onstartups.com/*
// @include        http://meta.answers.onstartups.com/*
// @include        http://mathoverflow.net/*
// @author         Iorga Mihai
// ==/UserScript==


function with_jquery(f) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.textContent = "(" + f.toString() + ")(jQuery)";
    document.body.appendChild(script);
};


with_jquery(function($) { $(function () {
	
	var remakeTags = function(){
		$('.post-tag span.delete-tag').each(function(){
			$(this).parent().css('position', 'relative');
			$(this).css('position', 'absolute');
			$(this).css('top', '-15px');
			$(this).css('right', '-10px');
		});
	}
	
	$(document).bind('DOMSubtreeModified',function(){
		remakeTags();
	});
	
	remakeTags();
})});