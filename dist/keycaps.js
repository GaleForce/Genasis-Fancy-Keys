function createNode(tag, className,  inner) {
  var node = document.createElement(tag);
  node.className = className;
  node.innerHTML = inner;
  return node;
}

var keycapDir = 'keycaps/';
var color = '_b';

// 60% Layout Keys
var rowOneKeys = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'bspace'];
var rowTwoKeys = ['tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'bslash'];
var rowThreeKeys = ['caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', 'quote', 'enter'];
var rowFourKeys = ['lshift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', 'period', 'slash', 'rshift'];
var rowBottomKeys = ['lctrl', 'lsuper', 'lalt', 'space', 'ralt', 'rsuper', 'fn', 'rctrl'];

// 80% Layout Keys
var rowFnKeys = ['esc', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'f10', 'f11', 'f12'];
var homeGroupKeys = ['print', 'scroll', 'pause', 'insert', 'home', 'pageup', 'del', 'end', 'pagedown'];
var arrowKeys = ['up', 'left', 'down', 'right'];

// 100% Layout Keys
var tenkeyKeys = ['num', 'tenslash', '*', 'ten-', 't7', 't8', 't9', 't4', 't5', 't6', 't1', 't2', 't3', 't0', 'decimal', '+', 'tenter'];

// Mapping 60% Layout
var rowOne = document.querySelector('.keyboard__r1');
var rowTwo = document.querySelector('.keyboard__r2');
var rowThree = document.querySelector('.keyboard__r3');
var rowFour = document.querySelector('.keyboard__r4');
var rowBottom = document.querySelector('.keyboard__bottom');

// Mapping 80% Layout
var rowFn = document.querySelector('.keyboard__fn');
//var homeGroup = document.querySelector('.keyboard__homegroup');
//var arrows = document.querySelector('.keyboard__arrows');
// Mapping 100% Layout
//var tenkey = document.querySelector('.keyboard__tenkey');

// Construct Keyboard

function buildRow(row, element) {
  for (var i = 0; i < row.length; i++) {
    var keycap = createNode('img', 'keycap keycap-' + row[i], '');
    keycap.src = keycapDir + row[i] + color + '.png';
    element.appendChild(keycap);
  }
}

buildRow(rowFnKeys, rowFn);
buildRow(rowOneKeys, rowOne);
buildRow(rowTwoKeys, rowTwo);
buildRow(rowThreeKeys, rowThree);
buildRow(rowFourKeys, rowFour);
buildRow(rowBottomKeys, rowBottom);


// Change Keycaps by Cap or Group

function getKey(keyClass) {
  var foundKey = keyClass.substr(7, keyClass.length); //find better way
  return foundKey;
}

function changeCapColor(key, color) {
  var targetedKey = document.querySelector('.keycap-' + key);
  targetedKey.src = keycapDir + key + '_' + color.charAt(0) + '.png';
}

function changeGroupColor(element, color) {
  var targetedGroup = element.childNodes;
  for (var i = 0; i < targetedGroup.length; i++) {
    var currentKey = targetedGroup[i].classList[1];
    var key = getKey(currentKey);
    changeCapColor(key, color);
  }
}


// Debug functions for buttons

function toggleCapColor(key) {
  var targetedKey = document.querySelector('.keycap-' + key);
  if (targetedKey.classList.contains('toggled')) {
    changeCapColor(key, 'beige');
    targetedKey.classList.remove('toggled');
  } else {
    changeCapColor(key, 'red');
    targetedKey.classList.add('toggled');
  }
}

function toggleGroupColor(element) {
  if (element.classList.contains('toggled')) {
    changeGroupColor(element, 'beige')
    element.classList.remove('toggled');
  } else {
    changeGroupColor(element, 'triumph')
    element.classList.add('toggled');
  }
}

var toggleEsc = document.querySelector('.toggle-esc');
var toggleEnter = document.querySelector('.toggle-enter');
var toggleFn = document.querySelector('.toggle-fn');

toggleEsc.addEventListener('click', function() {
  toggleCapColor('esc')
});

toggleEnter.addEventListener('click', function() {
  toggleCapColor('enter')
});

toggleFn.addEventListener('click', function() {
  toggleGroupColor(rowFn);
});