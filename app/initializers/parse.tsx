import * as $ from 'jquery';

$.ajaxSetup({
  beforeSend(xhr, options) {
    if(options.url.match(/api.parse.com/)) {
      xhr.setRequestHeader('X-Parse-Application-Id', 'AoI43zFu72tAHR6js7tGjcDXtFAC5sx8dXwZyzJw');
      xhr.setRequestHeader('X-Parse-REST-API-Key', 'l48qACQoBYXCrp2MiQhMdYjQbYLE2X9iSXDjCRrD');
      if(localStorage.getItem('parse-session-token')) {
        xhr.setRequestHeader('X-Parse-Session-Token', localStorage.getItem('parse-session-token'));
      }
    }
  }
});
