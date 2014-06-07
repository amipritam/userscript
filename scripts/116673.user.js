// ==UserScript==
// @id             subscriptions-to-tabs
// @name           What.CD : Subscriptions To Tabs
// @namespace      hateradio)))
// @author         hateradio
// @version        1.8
// @description    Open subcriptions in tabs automatically.
// @homepage       https://www.userscripts.org/scripts/show/116673
// @updateURL      https://www.userscripts.org/scripts/source/116673.meta.js
// @icon           data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAN2AAADdgF91YLMAAAACXZwQWcAAAAgAAAAIACH+pydAAAGdElEQVRYw7WXbWhb1xnH/+fccyXFdmIkuW6IqmBFFSZKKbOtgg01CRnxYLGNJ8deQl4oK5TYdbPZJNBCnK1Qwsgo3YfBIAvpUhhjhdHsSz7YtPNYEhgxEcZZEgUpdezFjh07fpNk6erc8+yDdVXZeXFeDzwcXXTQ7/ecc55HEiMivOoxMDBQ7XK5Pi8uLq4iool0Ov0N5/yzYDCYYq9aYGBg4EuPx/Me5zyVyWT6NU3barfb3zQM405xcbGfv0r4hQsX/uRyud6bn5//Rzqdfj0YDLZUVlZWxmKxj4nIt7Cw8O4rEzh79uzGoqKiX8zOzt4zTTO8bdu2hPVeLBb76sGDB1hcXHxbPC+grq7u9UAg8Knf799GRBwAIyIwxphhGHC5XOVer5fH4/Ghjo4OFB51KpWqSafTSggx9FwC9fX1VevXr++bnJwsGxsbA+ccjDEkEgnMzs4ilUph9+7dtGXLFoyMjPzY7/d/DWAPAPT09PBNmzZ9sbi4OKXr+n+eWaC2trZK1/X+dDrtZowBAKSUuH//PpLJZH7dvXv3vkkkEmGv18s45007d+6sKCsre628vPzL8vLy8qWlpbbm5ubsMwmEQqEqu93eD8BNRCAiZLNZTE5OQkq5Yu3NmzfvzMzMXJFSvrVx40ZbWVnZ+c2bN78RCAQ0wzB+dujQoQEAeGqBUChUpet6PwA3Yww+nw8lJSW4ePHiQ3Bd1+F2uz+6cuXKcCaTyZqmuU7TtCld1/+QSqW+6u7uNqy1T9UHQqFQtRCijzHm1nUdjY2NaG1thcPhwPDwME6dOoVYLAYigtPphNPpzN8LzpcLbWlp6eeXLl36evVnr1mGoVComnPeB8Ct6zqam5uxb98+bNiwATabDTU1Nejt7cXWrVvh8XjgdDoBANYRKaXwpCT5WnDGWD8AtxACLS0taGtrgxACpmnCNE0opRAMBnHixAkEg8E8uDCUUs8uUF1dXUNE/UTkEkKgtbUV4XA4D5dS5melFAKBADo7O+H3+8EYe7EdCAaD1aZp9imlXIwxtLe3IxwOw2azLV+cXPlZEL40DWVm4fV60dXVtUJirfGQQCAQqOKc90spXVJKHDx4EHv27IHD4QDnHJqmQdM0CCGgaRps6SnYF+IoGv83mMrA4/HgwIED4Jznjyg3L6wpEAgEqjVN+9YwDFc2m8Xhw4fR3t4Ou92+Aq5pGjjnEMlx2Ba+hy05AT2bAMsaICL4fD643W4opayjSkkpBx8lkO8DFRUVVYyxvkwm47TZbOju7s5fOGsrC7cec6MQ87ehJSbAhEDyjR0g2wYwpTA8PIzx8XFIKcEYg1LqN4ODg9OPFWCMvVVSUtInhHCXlpbi2LFjCIfD0DQtD7bgAECzI+DTN8GSE2BcQ8b3E8BWCiiFeDyO06dPI51OW/DeSCTyu8feAcZYBYDvEolEGRGhp6cHLS0t+QZiNRMr2NwdaFP/BZ+9DU4KsrIZyrFc+7du3cLJkycxOjpqlWlvJBL57EmXUAD4FYDXOOfo7OzE3r17IYTIZ21lzhiDmo4DE0Og6Ri4EFA/2g+sc4EphWg0iuPHj2N0dBQOhwOmaX4SjUZ/u1YVCABNAOB0OrFr1y7oup4HF2ZuTt0CTQxBTV4H1zRo77wP0+EGKYVr167hyJEjGBoaAhFBCNGdzWZ/v2YN5qrg7wCQSCQQj8eX65pzCCGg6zp0XQdm4jDHBqEmhsEBFNV/CFG6CbquIxqN4ujRo3k4gCNPC7eGB8AYAKqrq6PLly9TMpmkTCZDUkrK/O8azf/rNE3/tYtm/vZLknPjREQkpaSrV69SfX09McYIAAH46FGt+ElhWb8JYIwxRtu3b6dIJEKmaZIxdZvm/vlHmjr3AU3/pYPk3F0iIlJK0fXr16mhoaEQ3vWs8LzAaomGhga6ceMGKWnQzPlf09Sf3yf5YIysEYvFqKmp6YXhKwRWSzQ2NlIsFiOVXsxvOxHRyMgItbW1Eefcgn/4vPCHBB4nYY27d+/S/v37C+GdLwJ/pMBqidraWjpz5gydO3eOduzYYcHVy4A/VqBQAgBxzknTNCtrBaDjZcCfKFAg8X0OTACMlwknopU/ShljGgA7AFsudADrAPwUgA/AeQDTAH74ZlreEQJg5l6bjwi5KkwiUkDB36lcW7YBcOTCngtHgZTIBSuAmwCyuTByYT3LglmuelZEpP4PnNcni85Cea0AAAAldEVYdGNyZWF0ZS1kYXRlADIwMDktMTEtMTVUMTc6MDI6MzctMDc6MDCHD5SPAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDEwLTAxLTExVDA5OjMwOjEyLTA3OjAwipkjvwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxMC0wMS0xMVQwOTozMDoxMi0wNzowMPvEmwMAAABndEVYdExpY2Vuc2UAaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnktc2EvMy4wLyBvciBodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9MR1BMLzIuMS9bjzxjAAAAJXRFWHRtb2RpZnktZGF0ZQAyMDA5LTAzLTE5VDEwOjUyOjQ4LTA2OjAwJlq4SwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAATdEVYdFNvdXJjZQBPeHlnZW4gSWNvbnPsGK7oAAAAJ3RFWHRTb3VyY2VfVVJMAGh0dHA6Ly93d3cub3h5Z2VuLWljb25zLm9yZy/vN6rLAAAAAElFTkSuQmCC
// @icon64         data:image/png;base64,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
// @screenshot     
// @include        http*://*what.cd/userhistory.php*subscriptions*
// @include        http*://*.what.cd/userhistory.php?action=posts&userid*
// @updated        23 Jan 2013
// @since          17 Sep 2011
// (c) hateradio

// Icon from the Open Icon Library.
// http://openiconlibrary.sourceforge.net/gallery2/?./Icons/actions/feed-subscribe.png
// ==/UserScript==

(function () {
	'use strict';
	var subslinks = {
		l : document.getElementById('collapselink'),
		a : document.querySelector('.linkbox a'),
		r : document.querySelectorAll('.last_read > a'),
		i : 0,
		n : 10, // Number of links
		init : function () {
			var a = document.createElement('a'), b = document.createDocumentFragment(), sub = this, bond = function (m) { var c = function (e) { m.call(sub, e); }; return c; };
			a.textContent = 'Show first 10 in tabs';
			a.href = '#';
			a.className = 'brackets';
			a.title = 'View 10 subscriptions in tabs';
			a.addEventListener('click', bond(this.opens), false);
			b.appendChild(document.createTextNode('\u00a0\u00a0\u00a0\t'));
			b.appendChild(a);
			this.node = this.l || this.a;
			this.node.parentNode.insertBefore(b, this.node.nextSibling);
			this.j = this.n;
		},
		opens: function (e) {// console.log('a'+this.j);
			e.preventDefault();
			this.i -= 1;
			this.j = this.j >= this.r.length ? this.r.length : this.j;
			while (++this.i < this.j) {
				this.open(this.r[this.i].href);// console.log(this.r[this.i].href);
			}
			this.j = this.i + this.n;// console.log('b'+this.j);
		},
		open: (function (f) {
			try {
				f = GM_openInTab;
			} catch (e) {
				f = function (url) { window.open(url); window.focus(); };
			}
			return f;
		}())
	};
	subslinks.init();
}());