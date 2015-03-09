/* MarkletJS | https://github.com/jdh11235/MarkletJS */
/* Copyright (c) 2015 Jonathan Herman. MIT License. */

var Marklet = (function () {
	'use strict';

	var Marklet = function (script) { //string
		script = Marklet.internal_prefix + script + Marklet.internal_suffix;
		script = encodeURIComponent(script);
		script = Marklet.external_prefix + script + Marklet.external_suffix;

		return script; //string
	};

	Marklet.version = '1.0';

	Marklet.internal_prefix = '(function(){';
	Marklet.internal_suffix = '})()';

	Marklet.external_prefix = 'javascript:';
	Marklet.external_suffix = '';

	return Marklet;
})();
