function handleFormSubmit(ele) {
    var submitButton = ele.querySelector('input[type=submit]');
  var spinner = document.createElement('span');
  spinner.setAttribute('class', 'loader');
  submitButton.setAttribute('disabled', true);
  submitButton.style.cursor = 'wait';
  submitButton.parentNode.appendChild(spinner);
  return true;
  }
  function resetSubmitButton(e){
    var submitButtons = e.target.form.getElementsByClassName('submit-button');
  for(var i=0;i<submitButtons.length;i++){
    submitButtons[i].disabled = false;
    }
  }
  function addChangeHandler(elements){
    for(var i=0; i<elements.length; i++){
    elements[i].addEventListener('change', resetSubmitButton);
    }
  }
  var form = document.getElementById('form31');
  addChangeHandler(form.getElementsByTagName('input'));
  addChangeHandler(form.getElementsByTagName('select'));
  addChangeHandler(form.getElementsByTagName('textarea'));
  var nodes = document.querySelectorAll('#form31 input[data-subscription]');
  if (nodes) {
    for (var i = 0, len = nodes.length; i < len; i++) {
      var status = nodes[i].dataset ? nodes[i].dataset.subscription : nodes[i].getAttribute('data-subscription');
  if(status ==='true') {
    nodes[i].checked = true;
      }
    }
  };
  var nodes = document.querySelectorAll('#form31 select[data-value]');
  if (nodes) {
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
  var selectedValue = node.dataset ? node.dataset.value : node.getAttribute('data-value');
  if (selectedValue) {
        for (var j = 0; j < node.options.length; j++) {
          if(node.options[j].value === selectedValue) {
    node.options[j].selected = 'selected';
  break;
          }
        }
      }
    }
  }
  this.getParentElement = function(list) {
    return list[list.length-1].parentElement};
  var dom0 = document.querySelector('#form31 #fe494');
  var fe494 = new LiveValidation(dom0, {
    validMessage: "", onlyOnBlur: false, wait: 300, isPhoneField: false}
  );
  fe494.add(Validate.Presence, {
    failureMessage:"This field is required"}
  );
  fe494.add(Validate.Format, {
    pattern: /(^[A-Z0-9!#\$%&'\*\+\-\/=\?\^_`\{\|\}~][A-Z0-9!#\$%&'\*\+\-\/=\?\^_`\{\|\}~\.]{0, 62}@(([A-Z0-9](?:[A-Z0-9\-]{0, 61}[A-Z0-9])?)(\.[A-Z0-9](?:[A-Z0-9\-]{0, 61}[A-Z0-9])?)+)$)/i, failureMessage: "A valid email address is required"}
  );
  fe494.add(Validate.Format, {
    pattern: /\.\.|\.@/i, failureMessage: "A valid email address is required", negate: "true"}
  );
  fe494.add(Validate.Custom, {
    against: function(value) {
      return !value.match(/(telnet|ftp|https?):\/\/(?:[a-z0-9][a-z0-9-]{0, 61}[a-z0-9]\.|[a-z0-9]\.)+[a-z]{2, 63}/i);
    }
    , failureMessage: "Value must not contain any URL's"}
  );
  fe494.add(Validate.Custom, {
    against: function(value) {
      return !value.match(/(<([^>]+)>)/ig);
    }
    , failureMessage: "Value must not contain any HTML"}
  );
  var dom1 = document.querySelector('#form31 #fe515');
  var fe515 = new LiveValidation(dom1, {
    validMessage: "", onlyOnBlur: false, wait: 300, isPhoneField: false}
  );
  fe515.add(Validate.Custom, {
    against: function(value) {
      return !value.match(/(telnet|ftp|https?):\/\/(?:[a-z0-9][a-z0-9-]{0, 61}[a-z0-9]\.|[a-z0-9]\.)+[a-z]{2, 63}/i);
    }
    , failureMessage: "Value must not contain any URL's"}
  );
  fe515.add(Validate.Custom, {
    against: function(value) {
      return !value.match(/(<([^>]+)>)/ig);
    }
    , failureMessage: "Value must not contain any HTML"}
  );
  fe515.add(Validate.Acceptance, {
    failureMessage:"This field is required"}
  );
