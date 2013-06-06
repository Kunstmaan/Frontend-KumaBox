/*global jQuery:false, $: false*/
'use strict';

var KumaBundles = (function ($, window, undefined) {

    var init, initModal;

    init = function () {
        initModal();
    };

    initModal = function () {
        $('.modal').kumaBox();
    };

    return {
        init: init
    };
}(jQuery, window));

$(function () {
    KumaBundles.init();
});
