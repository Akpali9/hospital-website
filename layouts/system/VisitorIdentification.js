function subscribeEvent(event, listener, useCapture) {
  if (document.addEventListener) {
    document.addEventListener(event, listener, useCapture);
  } else if (document.attachEvent) {
    document.attachEvent(event, listener, useCapture);
  }
}

function unsubscribeEvent(event, listener, useCapture) {
  if (document.removeEventListener) {
    document.removeEventListener(event, listener, useCapture);
  } else if (document.detachEvent) {
    document.detachEvent(event, listener, useCapture);
  }
}

function startActivityHandler(e) {
  unsubscribeEvent("touchstart", arguments.callee, false);
  document.documentElement.onmousemove = null; // We need it here to turn off mouse move too.

  if (true) {
    timeoutSleep(0, placeCssAspxRequest);
  }
};

document.documentElement.onmousemove = startActivityHandler;
subscribeEvent("touchstart", startActivityHandler, false);

function placeCheckerRequest() {
  var stt1 = getVirtualFolder();
  var stt2 = "layouts/system/VIChecker.aspx";
  var stt3 = addTstampAndSiteToQueryString(getMetatagContent("VIcurrentDateTime"));

  var fileref = document.createElement('link');
  fileref.setAttribute('rel', 'stylesheet');
  fileref.setAttribute('type', 'text/css');
  fileref.setAttribute('href', stt1 + stt2 + stt3);
  document.getElementsByTagName("head")[0].appendChild(fileref);
}

function placeCssAspxRequest() {
  var st1 = getVirtualFolder();
  var st2 = "layouts/system/VisitorIdentificationCSS.aspx";
  var st3 = addTstampAndSiteToQueryString(new Date().getTime());

  var fileref = document.createElement('link');
  fileref.setAttribute('rel', 'stylesheet');
  fileref.setAttribute('type', 'text/css');
  fileref.setAttribute('href', st1 + st2 + st3);
  document.getElementsByTagName("head")[0].appendChild(fileref);

  timeoutSleep(30000, placeCheckerRequest);
}

function timeoutSleep(milliseconds, callbackFunction) {
  window.setTimeout(
    function() {
      callbackFunction();
    },
    milliseconds);
}

function getMetatagContent(metatagName) {
  var metas = document.getElementsByTagName('meta');
  var metaContent;

  for (var i = 0; i < metas.length; i++) {
    if (metas[i].getAttribute("name") === metatagName) {
      metaContent = metas[i].getAttribute("content");
      break;
    }
  }
  if (!metaContent) {
    metaContent = "";
    console.log("Metatag '" + metatagName + "' content is expected to be rendered in document and not to be empty");
  }

  return metaContent;
}

function addTstampAndSiteToQueryString(tstamp) {
  var qsParams = window.location.search;
  var timestampParam = "tstamp=" + tstamp;
  var siteNameParam = qsParams.match(/sc_site=.*?&|sc_site=.*$/);

  var queryString = "?" + timestampParam;
  if (siteNameParam !== null) {
    queryString = queryString + "&" + siteNameParam;
  }

  return queryString;
}

function getVirtualFolder() {
  var virtualFolder = getMetatagContent("VirtualFolder");
  if (virtualFolder === "") {
    virtualFolder = "/";
  }

  return virtualFolder;
}
