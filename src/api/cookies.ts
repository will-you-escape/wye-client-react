export function getCSRFTokenCookieValue() {
  var cookieValue = document.cookie.replace(
    /(?:(?:^|.*;\s*)csrftoken\s*=\s*([^;]*).*$)|^.*$/,
    '$1'
  );
  return cookieValue;
}
