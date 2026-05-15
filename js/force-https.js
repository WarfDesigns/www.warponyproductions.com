(function () {
  var isLocalHost = /^(localhost|127\.0\.0\.1|\[::1\])$/.test(window.location.hostname);

  if (window.location.protocol === 'http:' && !isLocalHost) {
    window.location.replace('https://' + window.location.host + window.location.pathname + window.location.search + window.location.hash);
  }
}());
