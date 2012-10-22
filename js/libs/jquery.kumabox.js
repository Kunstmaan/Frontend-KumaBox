/*global document: false, jQuery: false, window: false, Modernizr:false */
/*!
 * KumaBox 0.1
 *
 * Based on avgrund by Hakim El Hattab, http://hakim.se
 */

(function ($, window, undefined) {

    'use strict';

    var Kunstmaan = window.Kunstmaan || {};

    Kunstmaan.Modal = function (el) {

        this.$el = $(el);
        this.boxId = null;
        this.$box = null;
      
        this.init();
        
    };

    $.extend(Kunstmaan.Modal.prototype, {
        init: function () {
            var self = this;
            $(document.documentElement).addClass('modal-ready');

            this.boxId = this.$el.data('target');
            this.$box = $('#' + this.boxId);
            
            if (this.$box.find('img').length > 0) {
                this.$box.find('img').load(function () {
                    self.boxHeight = self.$box.height();
                    self.boxWidth =  self.$box.width();
                    self.positionBox();
                });
            } else {
                self.boxHeight = self.$box.height();
                self.boxWidth =  self.$box.width();
                self.positionBox();
            }
            
            this.bindEvents();
        },

        bindEvents: function () {
            var self = this;

            this.$el.on('click', function (e) {
                e.preventDefault();
                self.activate();
            });

            $(window).scroll(function () {
                self.$box.css('top', $(window).scrollTop() + window.innerHeight / 2);
            });

            $(window).resize(function () {
                self.positionBox();
            });
        },

        activate: function () {
            // modal cover
            $('<div>').attr('class', 'modal-cover').appendTo('body');
            this.$cover = $('.modal-cover');

            this.show();
        },

        show: function () {
            $('body').addClass('modal-active');

            this.$cover.show();
            this.$box.addClass('active');
            
            this.bindDocumentEvents();
        },

        positionBox: function () {
            // Messy
            
            var h = this.boxHeight,
                w = this.boxWidth,
                marginLeft = - w / 2,
                marginTop = - h / 2;

            if (Modernizr.mq('only screen and (max-width: 1100px)')) {
                w = window.innerWidth * 0.8;
                marginLeft = - window.innerWidth * 0.8 / 2;
                this.$box.find('img').css('max-width', '100%');
            }
            
            this.$box.css({
                height: 'auto',
                width:  w,
                marginTop: marginTop,
                marginLeft: marginLeft
            });
        },

        deactivate: function () {
            $('body').removeClass('modal-active');
            
            this.$box.removeClass('active');

            this.$cover.hide().remove();
            this.$cover = null;
            this.unbindDocumentEvents();
        },

        bindDocumentEvents: function () {
            $(document).on('keyup', $.proxy(this.onDocumentKeyUp, this));
            $(document).on('click', $.proxy(this.onDocumentClick, this));
            $(document).on('touchstart', $.proxy(this.onDocumentClick, this));
        },

        unbindDocumentEvents: function () {
            $(document).off('keyup');
            $(document).off('click');
            $(document).off('touchstart');
        },

        onDocumentKeyUp: function (e) {
            if (e.keyCode === 27) {
                this.deactivate();
            }
        },

        onDocumentClick: function (e) {
            if ($(e.target).hasClass('modal-cover')) {
                this.deactivate();
            }
        }
    });

    $.fn.kumaBox = function () {
        return this.each(function () {
            new Kunstmaan.Modal(this);
        });
    };

})(jQuery, window);