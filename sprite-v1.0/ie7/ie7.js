/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'sprite\'">' + entity + '</span>' + html;
	}
	var icons = {
		'mail': '&#xe900;',
		'tel': '&#xe901;',
		'antenna': '&#xe902;',
		'clock': '&#xe904;',
		'diagram': '&#xe906;',
		'astronaut': '&#xe908;',
		'client1': '&#xe90b;',
		'client2': '&#xe90c;',
		'client3': '&#xe90d;',
		'client4': '&#xe90e;',
		'client5': '&#xe90f;',
		'client6': '&#xe910;',
		'insta': '&#xe911;',
		'tw': '&#xe912;',
		'fb': '&#xe913;',
		'in': '&#xe914;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
