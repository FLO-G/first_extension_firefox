function element(n, c) {

  let oNodeList = document.getElementsByTagName(n);
  if (oNodeList.length > 0) {
    for (let i = 0; i < oNodeList.length; i++) {
      oNodeList[i].style.border = '1px solid '+ c;
    }
  } else {
    'message "div" pas trouvé'
  }
}

element('div', 'red');
element('a', 'blue');
element('p', 'purple');
element('ul', 'white');
element('li', 'orange');

element('h1', 'green');
element('h2', 'green');
element('h3', 'green');
element('h4', 'green');
element('h5', 'green');
element('h6', 'green');