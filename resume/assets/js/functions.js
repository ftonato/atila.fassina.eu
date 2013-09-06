function slideOnMenu() {
		$(menu).addClass('summaryActive');
	}

function slideOffMenu() {
		$(menu).removeClass('summaryActive');
	}

function changeSection(obj) {
	clickedMenu = parseInt(obj.attr('cd'));
	$('.content').css('display','none');
	$('.content[cd="'+clickedMenu+'"]').fadeIn('fast');
	$('.topicItemSelected').removeClass('topicItemSelected');
	$('.topicItem[cd="'+clickedMenu+'"]').addClass('topicItemSelected');
}

var clickedMenu;
var menu;

$(document).ready (function() {

	menu = $('#summary');

	$('.btnClose').click(function(){
		slideOffMenu();	
	});

	$('.topicItem').click(function(){
		slideOffMenu();
		changeSection($(this));
	});

	$('#btnMenu').click(function(){
		slideOnMenu();
	});
});