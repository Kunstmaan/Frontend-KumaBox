/*global jQuery:false, $: false, Kunstmaan:false*/
'use strict';

var KumaBundles = (function ($, window, undefined) {

    var init, initModal;

    init = function () {
        initModal();
    };
        
    initModal = function () {
        $('.modal').each(function () {
            var modal = new Kunstmaan.Modal($(this));
            modal.init();
        });
    };
    
    return {
        init: init
    };
    
}(jQuery, window));

$(function () {
    KumaBundles.init();
});