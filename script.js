(function () {
  'use strict';

  var TABS = ['home', 'writing', 'projects', 'about'];
  var DEFAULT_TAB = 'home';

  function getTabFromHash() {
    var hash = window.location.hash.replace('#', '').toLowerCase();
    return TABS.indexOf(hash) !== -1 ? hash : DEFAULT_TAB;
  }

  function switchTab(tabId) {
    if (TABS.indexOf(tabId) === -1) tabId = DEFAULT_TAB;

    TABS.forEach(function (id) {
      var panel = document.getElementById('panel-' + id);
      var btn   = document.getElementById('tab-btn-' + id);
      var isActive = (id === tabId);

      if (isActive) {
        panel.classList.add('active');
        panel.removeAttribute('aria-hidden');
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
      } else {
        panel.classList.remove('active');
        panel.setAttribute('aria-hidden', 'true');
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      }
    });
  }

  function navigateTo(tabId) {
    history.pushState(null, '', '#' + tabId);
    switchTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleHashChange() {
    var hash = window.location.hash.replace('#', '').toLowerCase();
    if (TABS.indexOf(hash) !== -1) {
      switchTab(hash);
    }
  }

  document.addEventListener('DOMContentLoaded', function () {

    // Activate the correct tab on initial load (supports deep-linking).
    switchTab(getTabFromHash());

    // Browser back/forward navigation.
    window.addEventListener('hashchange', handleHashChange);

    // Nav tab clicks.
    document.querySelectorAll('.nav-tab').forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        var hash = this.getAttribute('href').replace('#', '');
        navigateTo(hash);
      });
    });

    // Nav name click → home.
    var navName = document.getElementById('nav-name-link');
    if (navName) {
      navName.addEventListener('click', function (e) {
        e.preventDefault();
        navigateTo('home');
      });
    }

    // Hero CTA buttons (and any element with data-tab).
    document.querySelectorAll('[data-tab]').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        navigateTo(this.getAttribute('data-tab'));
      });
    });

  });

}());
