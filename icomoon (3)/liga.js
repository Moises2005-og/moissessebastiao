/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'file-picture': '&#xe927;',
            'file5': '&#xe927;',
            'folder-upload': '&#xe934;',
            'directory6': '&#xe934;',
            'cart': '&#xe93a;',
            'purchase': '&#xe93a;',
            'phone': '&#xe942;',
            'telephone': '&#xe942;',
            'address-book': '&#xe944;',
            'contact': '&#xe944;',
            'location': '&#xe947;',
            'map-marker': '&#xe947;',
            'location2': '&#xe948;',
            'map-marker2': '&#xe948;',
            'display': '&#xe956;',
            'screen': '&#xe956;',
            'laptop': '&#xe957;',
            'computer': '&#xe957;',
            'mobile': '&#xe958;',
            'cell-phone': '&#xe958;',
            'mobile2': '&#xe959;',
            'cell-phone2': '&#xe959;',
            'tablet': '&#xe95a;',
            'mobile3': '&#xe95a;',
            'yahoo': '&#xeabb;',
            'brand51': '&#xeabb;',
            'yahoo2': '&#xeabc;',
            'tux': '&#xeabd;',
            'brand52': '&#xeabd;',
            'apple': '&#xeabe;',
            'brand53': '&#xeabe;',
            'finder': '&#xeabf;',
            'brand54': '&#xeabf;',
            'android': '&#xeac0;',
            'brand55': '&#xeac0;',
            'windows': '&#xeac1;',
            'brand56': '&#xeac1;',
            'windows8': '&#xeac2;',
            'brand57': '&#xeac2;',
            'soundcloud': '&#xeac3;',
            'brand58': '&#xeac3;',
            'soundcloud2': '&#xeac4;',
            'brand59': '&#xeac4;',
            'linkedin': '&#xeac9;',
            'brand64': '&#xeac9;',
            'pinterest': '&#xead1;',
            'brand72': '&#xead1;',
            'xing2': '&#xead4;',
            'brand75': '&#xead4;',
            'foursquare': '&#xead6;',
            'brand77': '&#xead6;',
            'chrome': '&#xead9;',
            'browser': '&#xead9;',
            'firefox': '&#xeada;',
            'browser2': '&#xeada;',
            'IE': '&#xeadb;',
            'browser3': '&#xeadb;',
            'edge': '&#xeadc;',
            'browser4': '&#xeadc;',
            'opera': '&#xeade;',
            'browser6': '&#xeade;',
            'IcoMoon': '&#xeaea;',
            'icomoon': '&#xeaea;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/icon-/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
