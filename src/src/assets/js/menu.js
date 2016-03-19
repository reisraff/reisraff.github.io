jQuery(document).ready(function($){
  var secondaryNav = $('.cd-secondary-nav');
  var secondaryNavTopPosition = secondaryNav.offset().top;
  var contentSections = $('.cd-section');

  function menuTrigger() {
    if ($(window).width() >= 1170) {
      if ($(window).scrollTop() > secondaryNavTopPosition) {
        if ($('#cd-dummy').length === 0) {
          secondaryNav.before('<div id="cd-dummy" class="cd-secondary-nav">&nbsp;</div>');
        }
        secondaryNav.addClass('is-fixed');
        setTimeout(function() {
          secondaryNav.addClass('animate-children');
        }, 50);
      } else {
        $('#cd-dummy').remove();
        secondaryNav.removeClass('is-fixed');
        setTimeout(function() {
          secondaryNav.removeClass('animate-children');
        }, 50);
      }
    }

    updateSecondaryNavigation();
  }

  function updateSecondaryNavigation() {
    contentSections.each(function(){
      var actual = $(this);
      var actualHeight = actual.height() +
        parseInt(actual.css('paddingTop').replace('px', '')) +
        parseInt(actual.css('paddingBottom').replace('px', ''));

      var actualAnchor = secondaryNav.find('a[href="#'+actual.attr('id')+'"]');

      if (
        ( actual.offset().top - secondaryNav.height() <= $(window).scrollTop() )
        && ( actual.offset().top +  actualHeight - secondaryNav.height() > $(window).scrollTop() )
      ) {
        actualAnchor.addClass('cd-active');
      } else {
        actualAnchor.removeClass('cd-active');
      }
    });
  }

  $(window).on('scroll', menuTrigger);

  menuTrigger();

  $('.cd-secondary-nav-trigger').on('click', function(event) {
      event.preventDefault();
      $(this).toggleClass('menu-is-open');
      secondaryNav.find('ul').toggleClass('is-visible');
  });

  secondaryNav.find('ul a').on('click', function(event) {
    if (this.hash.trim() !== '') {
      event.preventDefault();

      var target = $(this.hash);

      $('body,html').animate({
        'scrollTop': target.offset().top - secondaryNav.height() + 1
        },
        400
      );

      $('.cd-secondary-nav-trigger').removeClass('menu-is-open');
      secondaryNav.find('ul').removeClass('is-visible');
    }
  });
});
