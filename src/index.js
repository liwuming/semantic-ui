/*!
 * # Semantic UI 2.4.2 - Reset
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */


/*******************************
             Reset
*******************************/


/* Border-Box */
*,
*:before,
*:after {
  -webkit-box-sizing: inherit;
          box-sizing: inherit;
}
html {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

/* iPad Input Shadows */
input[type="text"],
input[type="email"],
input[type="search"],
input[type="password"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  
/* mobile firefox too! */
}
/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */
/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in
 *    IE on Windows Phone and in iOS.
 */
html {
  line-height: 1.15;
  
/* 1 */
  -ms-text-size-adjust: 100%;
  
/* 2 */
  -webkit-text-size-adjust: 100%;
  
/* 2 */
}

/* Sections
   ========================================================================== */
/**
 * Remove the margin in all browsers (opinionated).
 */
body {
  margin: 0;
}
/**
 * Add the correct display in IE 9-.
 */
article,
aside,
footer,
header,
nav,
section {
  display: block;
}
/**
 * Correct the font size and margin on `h1` elements within `section` and
 * `article` contexts in Chrome, Firefox, and Safari.
 */
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */
/**
 * Add the correct display in IE 9-.
 * 1. Add the correct display in IE.
 */
figcaption,
figure,
main {
  
/* 1 */
  display: block;
}
/**
 * Add the correct margin in IE 8.
 */
figure {
  margin: 1em 40px;
}
/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */
hr {
  -webkit-box-sizing: content-box;
          box-sizing: content-box;
  
/* 1 */
  height: 0;
  
/* 1 */
  overflow: visible;
  
/* 2 */
}
/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd `em` font sizing in all browsers.
 */
pre {
  font-family: monospace, monospace;
  
/* 1 */
  font-size: 1em;
  
/* 2 */
}

/* Text-level semantics
   ========================================================================== */
/**
 * 1. Remove the gray background on active links in IE 10.
 * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.
 */
a {
  background-color: transparent;
  
/* 1 */
  -webkit-text-decoration-skip: objects;
  
/* 2 */
}
/**
 * 1. Remove the bottom border in Chrome 57- and Firefox 39-.
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */
abbr[title] {
  border-bottom: none;
  
/* 1 */
  text-decoration: underline;
  
/* 2 */
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
  
/* 2 */
}
/**
 * Prevent the duplicate application of `bolder` by the next rule in Safari 6.
 */
b,
strong {
  font-weight: inherit;
}
/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */
b,
strong {
  font-weight: bolder;
}
/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd `em` font sizing in all browsers.
 */
code,
kbd,
samp {
  font-family: monospace, monospace;
  
/* 1 */
  font-size: 1em;
  
/* 2 */
}
/**
 * Add the correct font style in Android 4.3-.
 */
dfn {
  font-style: italic;
}
/**
 * Add the correct background and color in IE 9-.
 */
mark {
  background-color: #ff0;
  color: #000;
}
/**
 * Add the correct font size in all browsers.
 */
small {
  font-size: 80%;
}
/**
 * Prevent `sub` and `sup` elements from affecting the line height in
 * all browsers.
 */
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}

/* Embedded content
   ========================================================================== */
/**
 * Add the correct display in IE 9-.
 */
audio,
video {
  display: inline-block;
}
/**
 * Add the correct display in iOS 4-7.
 */
audio:not([controls]) {
  display: none;
  height: 0;
}
/**
 * Remove the border on images inside links in IE 10-.
 */
img {
  border-style: none;
}
/**
 * Hide the overflow in IE.
 */
svg:not(:root) {
  overflow: hidden;
}

/* Forms
   ========================================================================== */
/**
 * 1. Change the font styles in all browsers (opinionated).
 * 2. Remove the margin in Firefox and Safari.
 */
button,
input,
optgroup,
select,
textarea {
  font-family: sans-serif;
  
/* 1 */
  font-size: 100%;
  
/* 1 */
  line-height: 1.15;
  
/* 1 */
  margin: 0;
  
/* 2 */
}
/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */
button,
input {
  
/* 1 */
  overflow: visible;
}
/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */
button,
select {
  
/* 1 */
  text-transform: none;
}
/**
 * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`
 *    controls in Android 4.
 * 2. Correct the inability to style clickable types in iOS and Safari.
 */
button,
html [type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
  
/* 2 */
}
/**
 * Remove the inner border and padding in Firefox.
 */
button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
/**
 * Restore the focus styles unset by the previous rule.
 */
button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}
/**
 * Correct the padding in Firefox.
 */
fieldset {
  padding: 0.35em 0.75em 0.625em;
}
/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from `fieldset` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    `fieldset` elements in all browsers.
 */
legend {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  
/* 1 */
  color: inherit;
  
/* 2 */
  display: table;
  
/* 1 */
  max-width: 100%;
  
/* 1 */
  padding: 0;
  
/* 3 */
  white-space: normal;
  
/* 1 */
}
/**
 * 1. Add the correct display in IE 9-.
 * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */
progress {
  display: inline-block;
  
/* 1 */
  vertical-align: baseline;
  
/* 2 */
}
/**
 * Remove the default vertical scrollbar in IE.
 */
textarea {
  overflow: auto;
}
/**
 * 1. Add the correct box sizing in IE 10-.
 * 2. Remove the padding in IE 10-.
 */
[type="checkbox"],
[type="radio"] {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  
/* 1 */
  padding: 0;
  
/* 2 */
}
/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */
[type="search"] {
  -webkit-appearance: textfield;
  
/* 1 */
  outline-offset: -2px;
  
/* 2 */
}
/**
 * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.
 */
[type="search"]::-webkit-search-cancel-button,
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to `inherit` in Safari.
 */
::-webkit-file-upload-button {
  -webkit-appearance: button;
  
/* 1 */
  font: inherit;
  
/* 2 */
}

/* Interactive
   ========================================================================== */
/*
 * Add the correct display in IE 9-.
 * 1. Add the correct display in Edge, IE, and Firefox.
 */
details,
menu {
  display: block;
}
/*
 * Add the correct display in all browsers.
 */
summary {
  display: list-item;
}

/* Scripting
   ========================================================================== */
/**
 * Add the correct display in IE 9-.
 */
canvas {
  display: inline-block;
}
/**
 * Add the correct display in IE.
 */
template {
  display: none;
}

/* Hidden
   ========================================================================== */
/**
 * Add the correct display in IE 10-.
 */
[hidden] {
  display: none;
}


/*******************************
         Site Overrides
*******************************/









/*!
 * # Semantic UI 2.4.2 - Site
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */


/*******************************
             Page
*******************************/
html,
body {
  height: 100%;
}
html {
  font-size: 14px;
}
body {
  margin: 0px;
  padding: 0px;
  overflow-x: hidden;
  min-width: 320px;
  background: #FFFFFF;
  font-family: 'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif;
  font-size: 14px;
  line-height: 1.4285em;
  color: rgba(0, 0, 0, 0.87);
  font-smoothing: antialiased;
}


/*******************************
             Headers
*******************************/

h1,
h2,
h3,
h4,
h5 {
  font-family: 'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif;
  line-height: 1.28571429em;
  margin: calc(2rem -  0.14285714em ) 0em 1rem;
  font-weight: bold;
  padding: 0em;
}
h1 {
  min-height: 1rem;
  font-size: 2rem;
}
h2 {
  font-size: 1.71428571rem;
}
h3 {
  font-size: 1.28571429rem;
}
h4 {
  font-size: 1.07142857rem;
}
h5 {
  font-size: 1rem;
}
h1:first-child,
h2:first-child,
h3:first-child,
h4:first-child,
h5:first-child {
  margin-top: 0em;
}
h1:last-child,
h2:last-child,
h3:last-child,
h4:last-child,
h5:last-child {
  margin-bottom: 0em;
}


/*******************************
             Text
*******************************/

p {
  margin: 0em 0em 1em;
  line-height: 1.4285em;
}
p:first-child {
  margin-top: 0em;
}
p:last-child {
  margin-bottom: 0em;
}

/*-------------------
        Links
--------------------*/

a {
  color: #4183C4;
  text-decoration: none;
}
a:hover {
  color: #1e70bf;
  text-decoration: none;
}


/*******************************
         Scrollbars
*******************************/



/*******************************
          Highlighting
*******************************/


/* Site */
::-webkit-selection {
  background-color: #CCE2FF;
  color: rgba(0, 0, 0, 0.87);
}
::-moz-selection {
  background-color: #CCE2FF;
  color: rgba(0, 0, 0, 0.87);
}
::selection {
  background-color: #CCE2FF;
  color: rgba(0, 0, 0, 0.87);
}

/* Form */
textarea::-webkit-selection,
input::-webkit-selection {
  background-color: rgba(100, 100, 100, 0.4);
  color: rgba(0, 0, 0, 0.87);
}
textarea::-moz-selection,
input::-moz-selection {
  background-color: rgba(100, 100, 100, 0.4);
  color: rgba(0, 0, 0, 0.87);
}
textarea::selection,
input::selection {
  background-color: rgba(100, 100, 100, 0.4);
  color: rgba(0, 0, 0, 0.87);
}

/* Force Simple Scrollbars */
body ::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 10px;
  height: 10px;
}
body ::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 0px;
}
body ::-webkit-scrollbar-thumb {
  cursor: pointer;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.25);
  -webkit-transition: color 0.2s ease;
  transition: color 0.2s ease;
}
body ::-webkit-scrollbar-thumb:window-inactive {
  background: rgba(0, 0, 0, 0.15);
}
body ::-webkit-scrollbar-thumb:hover {
  background: rgba(128, 135, 139, 0.8);
}

/* Inverted UI */
body .ui.inverted::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
}
body .ui.inverted::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.25);
}
body .ui.inverted::-webkit-scrollbar-thumb:window-inactive {
  background: rgba(255, 255, 255, 0.15);
}
body .ui.inverted::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.35);
}


/*******************************
        Global Overrides
*******************************/



/*******************************
         Site Overrides
*******************************/













































/*
 * # Semantic - Menu
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Copyright 2015 Contributor
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */


/*******************************
            Standard
*******************************/


/*--------------
      Menu
---------------*/

.ui.menu {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: 1rem 0em;
  font-family: 'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif;
  background: #FFFFFF;
  font-weight: normal;
  border: 1px solid rgba(34, 36, 38, 0.15);
  -webkit-box-shadow: 0px 1px 2px 0 rgba(34, 36, 38, 0.15);
          box-shadow: 0px 1px 2px 0 rgba(34, 36, 38, 0.15);
  border-radius: 0.28571429rem;
  min-height: 2.85714286em;
}
.ui.menu:after {
  content: '';
  display: block;
  height: 0px;
  clear: both;
  visibility: hidden;
}
.ui.menu:first-child {
  margin-top: 0rem;
}
.ui.menu:last-child {
  margin-bottom: 0rem;
}

/*--------------
    Sub-Menu
---------------*/

.ui.menu .menu {
  margin: 0em;
}
.ui.menu:not(.vertical) > .menu {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

/*--------------
      Item
---------------*/

.ui.menu:not(.vertical) .item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
.ui.menu .item {
  position: relative;
  vertical-align: middle;
  line-height: 1;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-box-flex: 0;
      -ms-flex: 0 0 auto;
          flex: 0 0 auto;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  background: none;
  padding: 0.92857143em 1.14285714em;
  text-transform: none;
  color: rgba(0, 0, 0, 0.87);
  font-weight: normal;
  -webkit-transition: background 0.1s ease, color 0.1s ease, -webkit-box-shadow 0.1s ease;
  transition: background 0.1s ease, color 0.1s ease, -webkit-box-shadow 0.1s ease;
  transition: background 0.1s ease, box-shadow 0.1s ease, color 0.1s ease;
  transition: background 0.1s ease, box-shadow 0.1s ease, color 0.1s ease, -webkit-box-shadow 0.1s ease;
}
.ui.menu > .item:first-child {
  border-radius: 0.28571429rem 0px 0px 0.28571429rem;
}

/* Border */
.ui.menu .item:before {
  position: absolute;
  content: '';
  top: 0%;
  right: 0px;
  height: 100%;
  width: 1px;
  background: rgba(34, 36, 38, 0.1);
}

/*--------------
  Text Content
---------------*/

.ui.menu .text.item > *,
.ui.menu .item > a:not(.ui),
.ui.menu .item > p:only-child {
  -webkit-user-select: text;
     -moz-user-select: text;
      -ms-user-select: text;
          user-select: text;
  line-height: 1.3;
}
.ui.menu .item > p:first-child {
  margin-top: 0;
}
.ui.menu .item > p:last-child {
  margin-bottom: 0;
}

/*--------------
      Icons
---------------*/

.ui.menu .item > i.icon {
  opacity: 0.9;
  float: none;
  margin: 0em 0.35714286em 0em 0em;
}

/*--------------
     Button
---------------*/

.ui.menu:not(.vertical) .item > .button {
  position: relative;
  top: 0em;
  margin: -0.5em 0em;
  padding-bottom: 0.78571429em;
  padding-top: 0.78571429em;
  font-size: 1em;
}

/*----------------
 Grid / Container
-----------------*/

.ui.menu > .grid,
.ui.menu > .container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: inherit;
      -ms-flex-align: inherit;
          align-items: inherit;
  -webkit-box-orient: inherit;
  -webkit-box-direction: inherit;
      -ms-flex-direction: inherit;
          flex-direction: inherit;
}

/*--------------
     Inputs
---------------*/

.ui.menu .item > .input {
  width: 100%;
}
.ui.menu:not(.vertical) .item > .input {
  position: relative;
  top: 0em;
  margin: -0.5em 0em;
}
.ui.menu .item > .input input {
  font-size: 1em;
  padding-top: 0.57142857em;
  padding-bottom: 0.57142857em;
}

/*--------------
     Header
---------------*/

.ui.menu .header.item,
.ui.vertical.menu .header.item {
  margin: 0em;
  background: '';
  text-transform: normal;
  font-weight: bold;
}
.ui.vertical.menu .item > .header:not(.ui) {
  margin: 0em 0em 0.5em;
  font-size: 1em;
  font-weight: bold;
}

/*--------------
    Dropdowns
---------------*/


/* Dropdown Icon */
.ui.menu .item > i.dropdown.icon {
  padding: 0em;
  float: right;
  margin: 0em 0em 0em 1em;
}

/* Menu */
.ui.menu .dropdown.item .menu {
  min-width: calc(100% - 1px);
  border-radius: 0em 0em 0.28571429rem 0.28571429rem;
  background: #FFFFFF;
  margin: 0em 0px 0px;
  -webkit-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.08);
          box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.08);
  -webkit-box-orient: vertical !important;
  -webkit-box-direction: normal !important;
      -ms-flex-direction: column !important;
          flex-direction: column !important;
}

/* Menu Items */
.ui.menu .ui.dropdown .menu > .item {
  margin: 0;
  text-align: left;
  font-size: 1em !important;
  padding: 0.78571429em 1.14285714em !important;
  background: transparent !important;
  color: rgba(0, 0, 0, 0.87) !important;
  text-transform: none !important;
  font-weight: normal !important;
  -webkit-box-shadow: none !important;
          box-shadow: none !important;
  -webkit-transition: none !important;
  transition: none !important;
}
.ui.menu .ui.dropdown .menu > .item:hover {
  background: rgba(0, 0, 0, 0.05) !important;
  color: rgba(0, 0, 0, 0.95) !important;
}
.ui.menu .ui.dropdown .menu > .selected.item {
  background: rgba(0, 0, 0, 0.05) !important;
  color: rgba(0, 0, 0, 0.95) !important;
}
.ui.menu .ui.dropdown .menu > .active.item {
  background: rgba(0, 0, 0, 0.03) !important;
  font-weight: bold !important;
  color: rgba(0, 0, 0, 0.95) !important;
}
.ui.menu .ui.dropdown.item .menu .item:not(.filtered) {
  display: block;
}
.ui.menu .ui.dropdown .menu > .item .icon:not(.dropdown) {
  display: inline-block;
  font-size: 1em !important;
  float: none;
  margin: 0em 0.75em 0em 0em !important;
}

/* Secondary */
.ui.secondary.menu .dropdown.item > .menu,
.ui.text.menu .dropdown.item > .menu {
  border-radius: 0.28571429rem;
  margin-top: 0.35714286em;
}

/* Pointing */
.ui.menu .pointing.dropdown.item .menu {
  margin-top: 0.75em;
}

/* Inverted */
.ui.inverted.menu .search.dropdown.item > .search,
.ui.inverted.menu .search.dropdown.item > .text {
  color: rgba(255, 255, 255, 0.9);
}

/* Vertical */
.ui.vertical.menu .dropdown.item > .icon {
  float: right;
  content: "\f0da";
  margin-left: 1em;
}
.ui.vertical.menu .dropdown.item .menu {
  left: 100%;
  min-width: 0;
  margin: 0em 0em 0em 0em;
  -webkit-box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.08);
          box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.08);
  border-radius: 0em 0.28571429rem 0.28571429rem 0.28571429rem;
}
.ui.vertical.menu .dropdown.item.upward .menu {
  bottom: 0;
}
.ui.vertical.menu .dropdown.item:not(.upward) .menu {
  top: 0;
}
.ui.vertical.menu .active.dropdown.item {
  border-top-right-radius: 0em;
  border-bottom-right-radius: 0em;
}
.ui.vertical.menu .dropdown.active.item {
  -webkit-box-shadow: none;
          box-shadow: none;
}

/* Evenly Divided */
.ui.item.menu .dropdown .menu .item {
  width: 100%;
}

/*--------------
     Labels
---------------*/

.ui.menu .item > .label {
  background: #999999;
  color: #FFFFFF;
  margin-left: 1em;
  padding: 0.3em 0.78571429em;
}
.ui.vertical.menu .item > .label {
  background: #999999;
  color: #FFFFFF;
  margin-top: -0.15em;
  margin-bottom: -0.15em;
  padding: 0.3em 0.78571429em;
}
.ui.menu .item > .floating.label {
  padding: 0.3em 0.78571429em;
}

/*--------------
     Images
---------------*/

.ui.menu .item > img:not(.ui) {
  display: inline-block;
  vertical-align: middle;
  margin: -0.3em 0em;
  width: 2.5em;
}
.ui.vertical.menu .item > img:not(.ui):only-child {
  display: block;
  max-width: 100%;
  width: auto;
}


/*******************************
          Coupling
*******************************/


/*--------------
     List
---------------*/


/* Menu divider shouldnt apply */
.ui.menu .list .item:before {
  background: none !important;
}

/*--------------
     Sidebar
---------------*/


/* Show vertical dividers below last */
.ui.vertical.sidebar.menu > .item:first-child:before {
  display: block !important;
}
.ui.vertical.sidebar.menu > .item::before {
  top: auto;
  bottom: 0px;
}

/*--------------
    Container
---------------*/

@media only screen and (max-width: 767px) {
  .ui.menu > .ui.container {
    width: 100% !important;
    margin-left: 0em !important;
    margin-right: 0em !important;
  }
}
@media only screen and (min-width: 768px) {
  .ui.menu:not(.secondary):not(.text):not(.tabular):not(.borderless) > .container > .item:not(.right):not(.borderless):first-child {
    border-left: 1px solid rgba(34, 36, 38, 0.1);
  }
}


/*******************************
             States
*******************************/


/*--------------
      Hover
---------------*/

.ui.link.menu .item:hover,
.ui.menu .dropdown.item:hover,
.ui.menu .link.item:hover,
.ui.menu a.item:hover {
  cursor: pointer;
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.95);
}

/*--------------
     Pressed
---------------*/

.ui.link.menu .item:active,
.ui.menu .link.item:active,
.ui.menu a.item:active {
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.95);
}

/*--------------
     Active
---------------*/

.ui.menu .active.item {
  background: rgba(0, 0, 0, 0.05);
  color: rgba(0, 0, 0, 0.95);
  font-weight: normal;
  -webkit-box-shadow: none;
          box-shadow: none;
}
.ui.menu .active.item > i.icon {
  opacity: 1;
}

/*--------------
  Active Hover
---------------*/

.ui.menu .active.item:hover,
.ui.vertical.menu .active.item:hover {
  background-color: rgba(0, 0, 0, 0.05);
  color: rgba(0, 0, 0, 0.95);
}

/*--------------
     Disabled
---------------*/

.ui.menu .item.disabled,
.ui.menu .item.disabled:hover {
  cursor: default !important;
  background-color: transparent !important;
  color: rgba(40, 40, 40, 0.3) !important;
}


/*******************************
             Types
*******************************/


/*------------------
Floated Menu / Item
-------------------*/


/* Left Floated */
.ui.menu:not(.vertical) .left.item,
.ui.menu:not(.vertical) :not(.dropdown) > .left.menu {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-right: auto !important;
}

/* Right Floated */
.ui.menu:not(.vertical) .right.item,
.ui.menu:not(.vertical) .right.menu {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-left: auto !important;
}

/* Swapped Borders */
.ui.menu .right.item::before,
.ui.menu .right.menu > .item::before {
  right: auto;
  left: 0;
}

/*--------------
    Vertical
---------------*/

.ui.vertical.menu {
  display: block;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  background: #FFFFFF;
  -webkit-box-shadow: 0px 1px 2px 0 rgba(34, 36, 38, 0.15);
          box-shadow: 0px 1px 2px 0 rgba(34, 36, 38, 0.15);
}

/*--- Item ---*/

.ui.vertical.menu .item {
  display: block;
  background: none;
  border-top: none;
  border-right: none;
}
.ui.vertical.menu > .item:first-child {
  border-radius: 0.28571429rem 0.28571429rem 0px 0px;
}
.ui.vertical.menu > .item:last-child {
  border-radius: 0px 0px 0.28571429rem 0.28571429rem;
}

/*--- Label ---*/

.ui.vertical.menu .item > .label {
  float: right;
  text-align: center;
}

/*--- Icon ---*/

.ui.vertical.menu .item > i.icon {
  width: 1.18em;
  float: right;
  margin: 0em 0em 0em 0.5em;
}
.ui.vertical.menu .item > .label + i.icon {
  float: none;
  margin: 0em 0.5em 0em 0em;
}

/*--- Border ---*/

.ui.vertical.menu .item:before {
  position: absolute;
  content: '';
  top: 0%;
  left: 0px;
  width: 100%;
  height: 1px;
  background: rgba(34, 36, 38, 0.1);
}
.ui.vertical.menu .item:first-child:before {
  display: none !important;
}

/*--- Sub Menu ---*/

.ui.vertical.menu .item > .menu {
  margin: 0.5em -1.14285714em 0em;
}
.ui.vertical.menu .menu .item {
  background: none;
  padding: 0.5em 1.33333333em;
  font-size: 0.85714286em;
  color: rgba(0, 0, 0, 0.5);
}
.ui.vertical.menu .item .menu a.item:hover,
.ui.vertical.menu .item .menu .link.item:hover {
  color: rgba(0, 0, 0, 0.85);
}
.ui.vertical.menu .menu .item:before {
  display: none;
}

/* Vertical Active */
.ui.vertical.menu .active.item {
  background: rgba(0, 0, 0, 0.05);
  border-radius: 0em;
  -webkit-box-shadow: none;
          box-shadow: none;
}
.ui.vertical.menu > .active.item:first-child {
  border-radius: 0.28571429rem 0.28571429rem 0em 0em;
}
.ui.vertical.menu > .active.item:last-child {
  border-radius: 0em 0em 0.28571429rem 0.28571429rem;
}
.ui.vertical.menu > .active.item:only-child {
  border-radius: 0.28571429rem;
}
.ui.vertical.menu .active.item .menu .active.item {
  border-left: none;
}
.ui.vertical.menu .item .menu .active.item {
  background-color: transparent;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.95);
}

/*--------------
     Tabular
---------------*/

.ui.tabular.menu {
  border-radius: 0em;
  -webkit-box-shadow: none !important;
          box-shadow: none !important;
  border: none;
  background: none transparent;
  border-bottom: 1px solid #D4D4D5;
}
.ui.tabular.fluid.menu {
  width: calc(100% + (1px * 2)) !important;
}
.ui.tabular.menu .item {
  background: transparent;
  border-bottom: none;
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
  border-top: 2px solid transparent;
  padding: 0.92857143em 1.42857143em;
  color: rgba(0, 0, 0, 0.87);
}
.ui.tabular.menu .item:before {
  display: none;
}

/* Hover */
.ui.tabular.menu .item:hover {
  background-color: transparent;
  color: rgba(0, 0, 0, 0.8);
}

/* Active */
.ui.tabular.menu .active.item {
  background: none #FFFFFF;
  color: rgba(0, 0, 0, 0.95);
  border-top-width: 1px;
  border-color: #D4D4D5;
  font-weight: bold;
  margin-bottom: -1px;
  -webkit-box-shadow: none;
          box-shadow: none;
  border-radius: 0.28571429rem 0.28571429rem 0px 0px !important;
}

/* Coupling with segment for attachment */
.ui.tabular.menu + .attached:not(.top).segment,
.ui.tabular.menu + .attached:not(.top).segment + .attached:not(.top).segment {
  border-top: none;
  margin-left: 0px;
  margin-top: 0px;
  margin-right: 0px;
  width: 100%;
}
.top.attached.segment + .ui.bottom.tabular.menu {
  position: relative;
  width: calc(100% + (1px * 2));
  left: -1px;
}

/* Bottom Vertical Tabular */
.ui.bottom.tabular.menu {
  background: none transparent;
  border-radius: 0em;
  -webkit-box-shadow: none !important;
          box-shadow: none !important;
  border-bottom: none;
  border-top: 1px solid #D4D4D5;
}
.ui.bottom.tabular.menu .item {
  background: none;
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
  border-bottom: 1px solid transparent;
  border-top: none;
}
.ui.bottom.tabular.menu .active.item {
  background: none #FFFFFF;
  color: rgba(0, 0, 0, 0.95);
  border-color: #D4D4D5;
  margin: -1px 0px 0px 0px;
  border-radius: 0px 0px 0.28571429rem 0.28571429rem !important;
}

/* Vertical Tabular (Left) */
.ui.vertical.tabular.menu {
  background: none transparent;
  border-radius: 0em;
  -webkit-box-shadow: none !important;
          box-shadow: none !important;
  border-bottom: none;
  border-right: 1px solid #D4D4D5;
}
.ui.vertical.tabular.menu .item {
  background: none;
  border-left: 1px solid transparent;
  border-bottom: 1px solid transparent;
  border-top: 1px solid transparent;
  border-right: none;
}
.ui.vertical.tabular.menu .active.item {
  background: none #FFFFFF;
  color: rgba(0, 0, 0, 0.95);
  border-color: #D4D4D5;
  margin: 0px -1px 0px 0px;
  border-radius: 0.28571429rem 0px 0px 0.28571429rem !important;
}

/* Vertical Right Tabular */
.ui.vertical.right.tabular.menu {
  background: none transparent;
  border-radius: 0em;
  -webkit-box-shadow: none !important;
          box-shadow: none !important;
  border-bottom: none;
  border-right: none;
  border-left: 1px solid #D4D4D5;
}
.ui.vertical.right.tabular.menu .item {
  background: none;
  border-right: 1px solid transparent;
  border-bottom: 1px solid transparent;
  border-top: 1px solid transparent;
  border-left: none;
}
.ui.vertical.right.tabular.menu .active.item {
  background: none #FFFFFF;
  color: rgba(0, 0, 0, 0.95);
  border-color: #D4D4D5;
  margin: 0px 0px 0px -1px;
  border-radius: 0px 0.28571429rem 0.28571429rem 0px !important;
}

/* Dropdown */
.ui.tabular.menu .active.dropdown.item {
  margin-bottom: 0px;
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
  border-top: 2px solid transparent;
  border-bottom: none;
}

/*--------------
   Pagination
---------------*/

.ui.pagination.menu {
  margin: 0em;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  vertical-align: middle;
}
.ui.pagination.menu .item:last-child {
  border-radius: 0em 0.28571429rem 0.28571429rem 0em;
}
.ui.compact.menu .item:last-child {
  border-radius: 0em 0.28571429rem 0.28571429rem 0em;
}
.ui.pagination.menu .item:last-child:before {
  display: none;
}
.ui.pagination.menu .item {
  min-width: 3em;
  text-align: center;
}
.ui.pagination.menu .icon.item i.icon {
  vertical-align: top;
}

/* Active */
.ui.pagination.menu .active.item {
  border-top: none;
  padding-top: 0.92857143em;
  background-color: rgba(0, 0, 0, 0.05);
  color: rgba(0, 0, 0, 0.95);
  -webkit-box-shadow: none;
          box-shadow: none;
}

/*--------------
   Secondary
---------------*/

.ui.secondary.menu {
  background: none;
  margin-left: -0.35714286em;
  margin-right: -0.35714286em;
  border-radius: 0em;
  border: none;
  -webkit-box-shadow: none;
          box-shadow: none;
}

/* Item */
.ui.secondary.menu .item {
  -ms-flex-item-align: center;
      align-self: center;
  -webkit-box-shadow: none;
          box-shadow: none;
  border: none;
  padding: 0.78571429em 0.92857143em;
  margin: 0em 0.35714286em;
  background: none;
  -webkit-transition: color 0.1s ease;
  transition: color 0.1s ease;
  border-radius: 0.28571429rem;
}

/* No Divider */
.ui.secondary.menu .item:before {
  display: none !important;
}

/* Header */
.ui.secondary.menu .header.item {
  border-radius: 0em;
  border-right: none;
  background: none transparent;
}

/* Image */
.ui.secondary.menu .item > img:not(.ui) {
  margin: 0em;
}

/* Hover */
.ui.secondary.menu .dropdown.item:hover,
.ui.secondary.menu .link.item:hover,
.ui.secondary.menu a.item:hover {
  background: rgba(0, 0, 0, 0.05);
  color: rgba(0, 0, 0, 0.95);
}

/* Active */
.ui.secondary.menu .active.item {
  -webkit-box-shadow: none;
          box-shadow: none;
  background: rgba(0, 0, 0, 0.05);
  color: rgba(0, 0, 0, 0.95);
  border-radius: 0.28571429rem;
}

/* Active Hover */
.ui.secondary.menu .active.item:hover {
  -webkit-box-shadow: none;
          box-shadow: none;
  background: rgba(0, 0, 0, 0.05);
  color: rgba(0, 0, 0, 0.95);
}

/* Inverted */
.ui.secondary.inverted.menu .link.item,
.ui.secondary.inverted.menu a.item {
  color: rgba(255, 255, 255, 0.7) !important;
}
.ui.secondary.inverted.menu .dropdown.item:hover,
.ui.secondary.inverted.menu .link.item:hover,
.ui.secondary.inverted.menu a.item:hover {
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff !important;
}
.ui.secondary.inverted.menu .active.item {
  background: rgba(255, 255, 255, 0.15);
  color: #ffffff !important;
}

/* Fix item margins */
.ui.secondary.item.menu {
  margin-left: 0em;
  margin-right: 0em;
}
.ui.secondary.item.menu .item:last-child {
  margin-right: 0em;
}
.ui.secondary.attached.menu {
  -webkit-box-shadow: none;
          box-shadow: none;
}

/* Sub Menu */
.ui.vertical.secondary.menu .item:not(.dropdown) > .menu {
  margin: 0em -0.92857143em;
}
.ui.vertical.secondary.menu .item:not(.dropdown) > .menu > .item {
  margin: 0em;
  padding: 0.5em 1.33333333em;
}

/*---------------------
   Secondary Vertical
-----------------------*/

.ui.secondary.vertical.menu > .item {
  border: none;
  margin: 0em 0em 0.35714286em;
  border-radius: 0.28571429rem !important;
}
.ui.secondary.vertical.menu > .header.item {
  border-radius: 0em;
}

/* Sub Menu */
.ui.vertical.secondary.menu .item > .menu .item {
  background-color: transparent;
}

/* Inverted */
.ui.secondary.inverted.menu {
  background-color: transparent;
}

/*---------------------
   Secondary Pointing
-----------------------*/

.ui.secondary.pointing.menu {
  margin-left: 0em;
  margin-right: 0em;
  border-bottom: 2px solid rgba(34, 36, 38, 0.15);
}
.ui.secondary.pointing.menu .item {
  border-bottom-color: transparent;
  border-bottom-style: solid;
  border-radius: 0em;
  -ms-flex-item-align: end;
      align-self: flex-end;
  margin: 0em 0em -2px;
  padding: 0.85714286em 1.14285714em;
  border-bottom-width: 2px;
  -webkit-transition: color 0.1s ease;
  transition: color 0.1s ease;
}

/* Item Types */
.ui.secondary.pointing.menu .header.item {
  color: rgba(0, 0, 0, 0.85) !important;
}
.ui.secondary.pointing.menu .text.item {
  -webkit-box-shadow: none !important;
          box-shadow: none !important;
}
.ui.secondary.pointing.menu .item:after {
  display: none;
}

/* Hover */
.ui.secondary.pointing.menu .dropdown.item:hover,
.ui.secondary.pointing.menu .link.item:hover,
.ui.secondary.pointing.menu a.item:hover {
  background-color: transparent;
  color: rgba(0, 0, 0, 0.87);
}

/* Pressed */
.ui.secondary.pointing.menu .dropdown.item:active,
.ui.secondary.pointing.menu .link.item:active,
.ui.secondary.pointing.menu a.item:active {
  background-color: transparent;
  border-color: rgba(34, 36, 38, 0.15);
}

/* Active */
.ui.secondary.pointing.menu .active.item {
  background-color: transparent;
  -webkit-box-shadow: none;
          box-shadow: none;
  border-color: #1B1C1D;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.95);
}

/* Active Hover */
.ui.secondary.pointing.menu .active.item:hover {
  border-color: #1B1C1D;
  color: rgba(0, 0, 0, 0.95);
}

/* Active Dropdown */
.ui.secondary.pointing.menu .active.dropdown.item {
  border-color: transparent;
}

/* Vertical Pointing */
.ui.secondary.vertical.pointing.menu {
  border-bottom-width: 0px;
  border-right-width: 2px;
  border-right-style: solid;
  border-right-color: rgba(34, 36, 38, 0.15);
}
.ui.secondary.vertical.pointing.menu .item {
  border-bottom: none;
  border-right-style: solid;
  border-right-color: transparent;
  border-radius: 0em !important;
  margin: 0em -2px 0em 0em;
  border-right-width: 2px;
}

/* Vertical Active */
.ui.secondary.vertical.pointing.menu .active.item {
  border-color: #1B1C1D;
}

/* Inverted */
.ui.secondary.inverted.pointing.menu {
  border-color: rgba(255, 255, 255, 0.1);
}
.ui.secondary.inverted.pointing.menu {
  border-width: 2px;
  border-color: rgba(34, 36, 38, 0.15);
}
.ui.secondary.inverted.pointing.menu .item {
  color: rgba(255, 255, 255, 0.9);
}
.ui.secondary.inverted.pointing.menu .header.item {
  color: #FFFFFF !important;
}

/* Hover */
.ui.secondary.inverted.pointing.menu .link.item:hover,
.ui.secondary.inverted.pointing.menu a.item:hover {
  color: rgba(0, 0, 0, 0.95);
}

/* Active */
.ui.secondary.inverted.pointing.menu .active.item {
  border-color: #FFFFFF;
  color: #ffffff;
}

/*--------------
    Text Menu
---------------*/

.ui.text.menu {
  background: none transparent;
  border-radius: 0px;
  -webkit-box-shadow: none;
          box-shadow: none;
  border: none;
  margin: 1em -0.5em;
}
.ui.text.menu .item {
  border-radius: 0px;
  -webkit-box-shadow: none;
          box-shadow: none;
  -ms-flex-item-align: center;
      align-self: center;
  margin: 0em 0em;
  padding: 0.35714286em 0.5em;
  font-weight: normal;
  color: rgba(0, 0, 0, 0.6);
  -webkit-transition: opacity 0.1s ease;
  transition: opacity 0.1s ease;
}

/* Border */
.ui.text.menu .item:before,
.ui.text.menu .menu .item:before {
  display: none !important;
}

/* Header */
.ui.text.menu .header.item {
  background-color: transparent;
  opacity: 1;
  color: rgba(0, 0, 0, 0.85);
  font-size: 0.92857143em;
  text-transform: uppercase;
  font-weight: bold;
}

/* Image */
.ui.text.menu .item > img:not(.ui) {
  margin: 0em;
}

/*--- fluid text ---*/

.ui.text.item.menu .item {
  margin: 0em;
}

/*--- vertical text ---*/

.ui.vertical.text.menu {
  margin: 1em 0em;
}
.ui.vertical.text.menu:first-child {
  margin-top: 0rem;
}
.ui.vertical.text.menu:last-child {
  margin-bottom: 0rem;
}
.ui.vertical.text.menu .item {
  margin: 0.57142857em 0em;
  padding-left: 0em;
  padding-right: 0em;
}
.ui.vertical.text.menu .item > i.icon {
  float: none;
  margin: 0em 0.35714286em 0em 0em;
}
.ui.vertical.text.menu .header.item {
  margin: 0.57142857em 0em 0.71428571em;
}

/* Vertical Sub Menu */
.ui.vertical.text.menu .item:not(.dropdown) > .menu {
  margin: 0em;
}
.ui.vertical.text.menu .item:not(.dropdown) > .menu > .item {
  margin: 0em;
  padding: 0.5em 0em;
}

/*--- hover ---*/

.ui.text.menu .item:hover {
  opacity: 1;
  background-color: transparent;
}

/*--- active ---*/

.ui.text.menu .active.item {
  background-color: transparent;
  border: none;
  -webkit-box-shadow: none;
          box-shadow: none;
  font-weight: normal;
  color: rgba(0, 0, 0, 0.95);
}

/*--- active hover ---*/

.ui.text.menu .active.item:hover {
  background-color: transparent;
}

/* Disable Bariations */
.ui.text.pointing.menu .active.item:after {
  -webkit-box-shadow: none;
          box-shadow: none;
}
.ui.text.attached.menu {
  -webkit-box-shadow: none;
          box-shadow: none;
}

/* Inverted */
.ui.inverted.text.menu,
.ui.inverted.text.menu .item,
.ui.inverted.text.menu .item:hover,
.ui.inverted.text.menu .active.item {
  background-color: transparent !important;
}

/* Fluid */
.ui.fluid.text.menu {
  margin-left: 0em;
  margin-right: 0em;
}

/*--------------
    Icon Only
---------------*/


/* Vertical Menu */
.ui.vertical.icon.menu {
  display: inline-block;
  width: auto;
}

/* Item */
.ui.icon.menu .item {
  height: auto;
  text-align: center;
  color: #1B1C1D;
}

/* Icon */
.ui.icon.menu .item > .icon:not(.dropdown) {
  margin: 0;
  opacity: 1;
}

/* Icon Gylph */
.ui.icon.menu .icon:before {
  opacity: 1;
}

/* (x) Item Icon */
.ui.menu .icon.item > .icon {
  width: auto;
  margin: 0em auto;
}

/* Vertical Icon */
.ui.vertical.icon.menu .item > .icon:not(.dropdown) {
  display: block;
  opacity: 1;
  margin: 0em auto;
  float: none;
}

/* Inverted */
.ui.inverted.icon.menu .item {
  color: #FFFFFF;
}

/*--------------
   Labeled Icon
---------------*/


/* Menu */
.ui.labeled.icon.menu {
  text-align: center;
}

/* Item */
.ui.labeled.icon.menu .item {
  min-width: 6em;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}

/* Icon */
.ui.labeled.icon.menu .item > .icon:not(.dropdown) {
  height: 1em;
  display: block;
  font-size: 1.71428571em !important;
  margin: 0em auto 0.5rem !important;
}

/* Fluid */
.ui.fluid.labeled.icon.menu > .item {
  min-width: 0em;
}


/*******************************
           Variations
*******************************/


/*--------------
    Stackable
---------------*/

@media only screen and (max-width: 767px) {
  .ui.stackable.menu {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
  }
  .ui.stackable.menu .item {
    width: 100% !important;
  }
  .ui.stackable.menu .item:before {
    position: absolute;
    content: '';
    top: auto;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 1px;
    background: rgba(34, 36, 38, 0.1);
  }
  .ui.stackable.menu .left.menu,
  .ui.stackable.menu .left.item {
    margin-right: 0 !important;
  }
  .ui.stackable.menu .right.menu,
  .ui.stackable.menu .right.item {
    margin-left: 0 !important;
  }
  .ui.stackable.menu .right.menu,
  .ui.stackable.menu .left.menu {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
  }
}

/*--------------
     Colors
---------------*/


/*--- Standard Colors  ---*/

.ui.menu .red.active.item,
.ui.red.menu .active.item {
  border-color: #DB2828 !important;
  color: #DB2828 !important;
}
.ui.menu .orange.active.item,
.ui.orange.menu .active.item {
  border-color: #F2711C !important;
  color: #F2711C !important;
}
.ui.menu .yellow.active.item,
.ui.yellow.menu .active.item {
  border-color: #FBBD08 !important;
  color: #FBBD08 !important;
}
.ui.menu .olive.active.item,
.ui.olive.menu .active.item {
  border-color: #B5CC18 !important;
  color: #B5CC18 !important;
}
.ui.menu .green.active.item,
.ui.green.menu .active.item {
  border-color: #21BA45 !important;
  color: #21BA45 !important;
}
.ui.menu .teal.active.item,
.ui.teal.menu .active.item {
  border-color: #00B5AD !important;
  color: #00B5AD !important;
}
.ui.menu .blue.active.item,
.ui.blue.menu .active.item {
  border-color: #2185D0 !important;
  color: #2185D0 !important;
}
.ui.menu .violet.active.item,
.ui.violet.menu .active.item {
  border-color: #6435C9 !important;
  color: #6435C9 !important;
}
.ui.menu .purple.active.item,
.ui.purple.menu .active.item {
  border-color: #A333C8 !important;
  color: #A333C8 !important;
}
.ui.menu .pink.active.item,
.ui.pink.menu .active.item {
  border-color: #E03997 !important;
  color: #E03997 !important;
}
.ui.menu .brown.active.item,
.ui.brown.menu .active.item {
  border-color: #A5673F !important;
  color: #A5673F !important;
}
.ui.menu .grey.active.item,
.ui.grey.menu .active.item {
  border-color: #767676 !important;
  color: #767676 !important;
}

/*--------------
    Inverted
---------------*/

.ui.inverted.menu {
  border: 0px solid transparent;
  background: #1B1C1D;
  -webkit-box-shadow: none;
          box-shadow: none;
}

/* Menu Item */
.ui.inverted.menu .item,
.ui.inverted.menu .item > a:not(.ui) {
  background: transparent;
  color: rgba(255, 255, 255, 0.9);
}
.ui.inverted.menu .item.menu {
  background: transparent;
}

/*--- Border ---*/

.ui.inverted.menu .item:before {
  background: rgba(255, 255, 255, 0.08);
}
.ui.vertical.inverted.menu .item:before {
  background: rgba(255, 255, 255, 0.08);
}

/* Sub Menu */
.ui.vertical.inverted.menu .menu .item,
.ui.vertical.inverted.menu .menu .item a:not(.ui) {
  color: rgba(255, 255, 255, 0.5);
}

/* Header */
.ui.inverted.menu .header.item {
  margin: 0em;
  background: transparent;
  -webkit-box-shadow: none;
          box-shadow: none;
}

/* Disabled */
.ui.inverted.menu .item.disabled,
.ui.inverted.menu .item.disabled:hover {
  color: rgba(225, 225, 225, 0.3);
}

/*--- Hover ---*/

.ui.link.inverted.menu .item:hover,
.ui.inverted.menu .dropdown.item:hover,
.ui.inverted.menu .link.item:hover,
.ui.inverted.menu a.item:hover {
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
}
.ui.vertical.inverted.menu .item .menu a.item:hover,
.ui.vertical.inverted.menu .item .menu .link.item:hover {
  background: transparent;
  color: #ffffff;
}

/*--- Pressed ---*/

.ui.inverted.menu a.item:active,
.ui.inverted.menu .link.item:active {
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
}

/*--- Active ---*/

.ui.inverted.menu .active.item {
  background: rgba(255, 255, 255, 0.15);
  color: #ffffff !important;
}
.ui.inverted.vertical.menu .item .menu .active.item {
  background: transparent;
  color: #FFFFFF;
}
.ui.inverted.pointing.menu .active.item:after {
  background: #3D3E3F !important;
  margin: 0em !important;
  -webkit-box-shadow: none !important;
          box-shadow: none !important;
  border: none !important;
}

/*--- Active Hover ---*/

.ui.inverted.menu .active.item:hover {
  background: rgba(255, 255, 255, 0.15);
  color: #FFFFFF !important;
}
.ui.inverted.pointing.menu .active.item:hover:after {
  background: #3D3E3F !important;
}

/*--------------
     Floated
---------------*/

.ui.floated.menu {
  float: left;
  margin: 0rem 0.5rem 0rem 0rem;
}
.ui.floated.menu .item:last-child:before {
  display: none;
}
.ui.right.floated.menu {
  float: right;
  margin: 0rem 0rem 0rem 0.5rem;
}

/*--------------
    Inverted
---------------*/


/* Red */
.ui.inverted.menu .red.active.item,
.ui.inverted.red.menu {
  background-color: #DB2828;
}
.ui.inverted.red.menu .item:before {
  background-color: rgba(34, 36, 38, 0.1);
}
.ui.inverted.red.menu .active.item {
  background-color: rgba(0, 0, 0, 0.1) !important;
}

/* Orange */
.ui.inverted.menu .orange.active.item,
.ui.inverted.orange.menu {
  background-color: #F2711C;
}
.ui.inverted.orange.menu .item:before {
  background-color: rgba(34, 36, 38, 0.1);
}
.ui.inverted.orange.menu .active.item {
  background-color: rgba(0, 0, 0, 0.1) !important;
}

/* Yellow */
.ui.inverted.menu .yellow.active.item,
.ui.inverted.yellow.menu {
  background-color: #FBBD08;
}
.ui.inverted.yellow.menu .item:before {
  background-color: rgba(34, 36, 38, 0.1);
}
.ui.inverted.yellow.menu .active.item {
  background-color: rgba(0, 0, 0, 0.1) !important;
}

/* Olive */
.ui.inverted.menu .olive.active.item,
.ui.inverted.olive.menu {
  background-color: #B5CC18;
}
.ui.inverted.olive.menu .item:before {
  background-color: rgba(34, 36, 38, 0.1);
}
.ui.inverted.olive.menu .active.item {
  background-color: rgba(0, 0, 0, 0.1) !important;
}

/* Green */
.ui.inverted.menu .green.active.item,
.ui.inverted.green.menu {
  background-color: #21BA45;
}
.ui.inverted.green.menu .item:before {
  background-color: rgba(34, 36, 38, 0.1);
}
.ui.inverted.green.menu .active.item {
  background-color: rgba(0, 0, 0, 0.1) !important;
}

/* Teal */
.ui.inverted.menu .teal.active.item,
.ui.inverted.teal.menu {
  background-color: #00B5AD;
}
.ui.inverted.teal.menu .item:before {
  background-color: rgba(34, 36, 38, 0.1);
}
.ui.inverted.teal.menu .active.item {
  background-color: rgba(0, 0, 0, 0.1) !important;
}

/* Blue */
.ui.inverted.menu .blue.active.item,
.ui.inverted.blue.menu {
  background-color: #2185D0;
}
.ui.inverted.blue.menu .item:before {
  background-color: rgba(34, 36, 38, 0.1);
}
.ui.inverted.blue.menu .active.item {
  background-color: rgba(0, 0, 0, 0.1) !important;
}

/* Violet */
.ui.inverted.menu .violet.active.item,
.ui.inverted.violet.menu {
  background-color: #6435C9;
}
.ui.inverted.violet.menu .item:before {
  background-color: rgba(34, 36, 38, 0.1);
}
.ui.inverted.violet.menu .active.item {
  background-color: rgba(0, 0, 0, 0.1) !important;
}

/* Purple */
.ui.inverted.menu .purple.active.item,
.ui.inverted.purple.menu {
  background-color: #A333C8;
}
.ui.inverted.purple.menu .item:before {
  background-color: rgba(34, 36, 38, 0.1);
}
.ui.inverted.purple.menu .active.item {
  background-color: rgba(0, 0, 0, 0.1) !important;
}

/* Pink */
.ui.inverted.menu .pink.active.item,
.ui.inverted.pink.menu {
  background-color: #E03997;
}
.ui.inverted.pink.menu .item:before {
  background-color: rgba(34, 36, 38, 0.1);
}
.ui.inverted.pink.menu .active.item {
  background-color: rgba(0, 0, 0, 0.1) !important;
}

/* Brown */
.ui.inverted.menu .brown.active.item,
.ui.inverted.brown.menu {
  background-color: #A5673F;
}
.ui.inverted.brown.menu .item:before {
  background-color: rgba(34, 36, 38, 0.1);
}
.ui.inverted.brown.menu .active.item {
  background-color: rgba(0, 0, 0, 0.1) !important;
}

/* Grey */
.ui.inverted.menu .grey.active.item,
.ui.inverted.grey.menu {
  background-color: #767676;
}
.ui.inverted.grey.menu .item:before {
  background-color: rgba(34, 36, 38, 0.1);
}
.ui.inverted.grey.menu .active.item {
  background-color: rgba(0, 0, 0, 0.1) !important;
}

/*--------------
     Fitted
---------------*/

.ui.fitted.menu .item,
.ui.fitted.menu .item .menu .item,
.ui.menu .fitted.item {
  padding: 0em;
}
.ui.horizontally.fitted.menu .item,
.ui.horizontally.fitted.menu .item .menu .item,
.ui.menu .horizontally.fitted.item {
  padding-top: 0.92857143em;
  padding-bottom: 0.92857143em;
}
.ui.vertically.fitted.menu .item,
.ui.vertically.fitted.menu .item .menu .item,
.ui.menu .vertically.fitted.item {
  padding-left: 1.14285714em;
  padding-right: 1.14285714em;
}

/*--------------
   Borderless
---------------*/

.ui.borderless.menu .item:before,
.ui.borderless.menu .item .menu .item:before,
.ui.menu .borderless.item:before {
  background: none !important;
}

/*-------------------
       Compact
--------------------*/

.ui.compact.menu {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  margin: 0em;
  vertical-align: middle;
}
.ui.compact.vertical.menu {
  display: inline-block;
}
.ui.compact.menu .item:last-child {
  border-radius: 0em 0.28571429rem 0.28571429rem 0em;
}
.ui.compact.menu .item:last-child:before {
  display: none;
}
.ui.compact.vertical.menu {
  width: auto !important;
}
.ui.compact.vertical.menu .item:last-child::before {
  display: block;
}

/*-------------------
        Fluid
--------------------*/

.ui.menu.fluid,
.ui.vertical.menu.fluid {
  width: 100% !important;
}

/*-------------------
      Evenly Sized
--------------------*/

.ui.item.menu,
.ui.item.menu .item {
  width: 100%;
  padding-left: 0em !important;
  padding-right: 0em !important;
  margin-left: 0em !important;
  margin-right: 0em !important;
  text-align: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}
.ui.attached.item.menu {
  margin: 0em -1px !important;
}
.ui.item.menu .item:last-child:before {
  display: none;
}
.ui.menu.two.item .item {
  width: 50%;
}
.ui.menu.three.item .item {
  width: 33.333%;
}
.ui.menu.four.item .item {
  width: 25%;
}
.ui.menu.five.item .item {
  width: 20%;
}
.ui.menu.six.item .item {
  width: 16.666%;
}
.ui.menu.seven.item .item {
  width: 14.285%;
}
.ui.menu.eight.item .item {
  width: 12.5%;
}
.ui.menu.nine.item .item {
  width: 11.11%;
}
.ui.menu.ten.item .item {
  width: 10%;
}
.ui.menu.eleven.item .item {
  width: 9.09%;
}
.ui.menu.twelve.item .item {
  width: 8.333%;
}

/*--------------
     Fixed
---------------*/

.ui.menu.fixed {
  position: fixed;
  z-index: 101;
  margin: 0em;
  width: 100%;
}
.ui.menu.fixed,
.ui.menu.fixed .item:first-child,
.ui.menu.fixed .item:last-child {
  border-radius: 0px !important;
}
.ui.fixed.menu,
.ui[class*="top fixed"].menu {
  top: 0px;
  left: 0px;
  right: auto;
  bottom: auto;
}
.ui[class*="top fixed"].menu {
  border-top: none;
  border-left: none;
  border-right: none;
}
.ui[class*="right fixed"].menu {
  border-top: none;
  border-bottom: none;
  border-right: none;
  top: 0px;
  right: 0px;
  left: auto;
  bottom: auto;
  width: auto;
  height: 100%;
}
.ui[class*="bottom fixed"].menu {
  border-bottom: none;
  border-left: none;
  border-right: none;
  bottom: 0px;
  left: 0px;
  top: auto;
  right: auto;
}
.ui[class*="left fixed"].menu {
  border-top: none;
  border-bottom: none;
  border-left: none;
  top: 0px;
  left: 0px;
  right: auto;
  bottom: auto;
  width: auto;
  height: 100%;
}

/* Coupling with Grid */
.ui.fixed.menu + .ui.grid {
  padding-top: 2.75rem;
}

/*-------------------
       Pointing
--------------------*/

.ui.pointing.menu .item:after {
  visibility: hidden;
  position: absolute;
  content: '';
  top: 100%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%) rotate(45deg);
          transform: translateX(-50%) translateY(-50%) rotate(45deg);
  background: none;
  margin: 0.5px 0em 0em;
  width: 0.57142857em;
  height: 0.57142857em;
  border: none;
  border-bottom: 1px solid #D4D4D5;
  border-right: 1px solid #D4D4D5;
  z-index: 2;
  -webkit-transition: background 0.1s ease;
  transition: background 0.1s ease;
}
.ui.vertical.pointing.menu .item:after {
  position: absolute;
  top: 50%;
  right: 0%;
  bottom: auto;
  left: auto;
  -webkit-transform: translateX(50%) translateY(-50%) rotate(45deg);
          transform: translateX(50%) translateY(-50%) rotate(45deg);
  margin: 0em -0.5px 0em 0em;
  border: none;
  border-top: 1px solid #D4D4D5;
  border-right: 1px solid #D4D4D5;
}

/* Active */
.ui.pointing.menu .active.item:after {
  visibility: visible;
}
.ui.pointing.menu .active.dropdown.item:after {
  visibility: hidden;
}

/* Don't double up pointers */
.ui.pointing.menu .dropdown.active.item:after,
.ui.pointing.menu .active.item .menu .active.item:after {
  display: none;
}

/* Colors */
.ui.pointing.menu .active.item:hover:after {
  background-color: #F2F2F2;
}
.ui.pointing.menu .active.item:after {
  background-color: #F2F2F2;
}
.ui.pointing.menu .active.item:hover:after {
  background-color: #F2F2F2;
}
.ui.vertical.pointing.menu .active.item:hover:after {
  background-color: #F2F2F2;
}
.ui.vertical.pointing.menu .active.item:after {
  background-color: #F2F2F2;
}
.ui.vertical.pointing.menu .menu .active.item:after {
  background-color: #FFFFFF;
}

/*--------------
    Attached
---------------*/


/* Middle */
.ui.attached.menu {
  top: 0px;
  bottom: 0px;
  border-radius: 0px;
  margin: 0em -1px;
  width: calc(100% - (-1px * 2));
  max-width: calc(100% - (-1px * 2));
  -webkit-box-shadow: none;
          box-shadow: none;
}
.ui.attached + .ui.attached.menu:not(.top) {
  border-top: none;
}

/* Top */
.ui[class*="top attached"].menu {
  bottom: 0px;
  margin-bottom: 0em;
  top: 0px;
  margin-top: 1rem;
  border-radius: 0.28571429rem 0.28571429rem 0em 0em;
}
.ui.menu[class*="top attached"]:first-child {
  margin-top: 0em;
}

/* Bottom */
.ui[class*="bottom attached"].menu {
  bottom: 0px;
  margin-top: 0em;
  top: 0px;
  margin-bottom: 1rem;
  -webkit-box-shadow: 0px 1px 2px 0 rgba(34, 36, 38, 0.15), none;
          box-shadow: 0px 1px 2px 0 rgba(34, 36, 38, 0.15), none;
  border-radius: 0em 0em 0.28571429rem 0.28571429rem;
}
.ui[class*="bottom attached"].menu:last-child {
  margin-bottom: 0em;
}

/* Attached Menu Item */
.ui.top.attached.menu > .item:first-child {
  border-radius: 0.28571429rem 0em 0em 0em;
}
.ui.bottom.attached.menu > .item:first-child {
  border-radius: 0em 0em 0em 0.28571429rem;
}

/* Tabular Attached */
.ui.attached.menu:not(.tabular) {
  border: 1px solid #D4D4D5;
}
.ui.attached.inverted.menu {
  border: none;
}
.ui.attached.tabular.menu {
  margin-left: 0;
  margin-right: 0;
  width: 100%;
}

/*--------------
     Sizes
---------------*/


/* Mini */
.ui.mini.menu {
  font-size: 0.78571429rem;
}
.ui.mini.vertical.menu {
  width: 9rem;
}

/* Tiny */
.ui.tiny.menu {
  font-size: 0.85714286rem;
}
.ui.tiny.vertical.menu {
  width: 11rem;
}

/* Small */
.ui.small.menu {
  font-size: 0.92857143rem;
}
.ui.small.vertical.menu {
  width: 13rem;
}

/* Medium */
.ui.menu {
  font-size: 1rem;
}
.ui.vertical.menu {
  width: 15rem;
}

/* Large */
.ui.large.menu {
  font-size: 1.07142857rem;
}
.ui.large.vertical.menu {
  width: 18rem;
}

/* Huge */
.ui.huge.menu {
  font-size: 1.21428571rem;
}
.ui.huge.vertical.menu {
  width: 22rem;
}

/* Big */
.ui.big.menu {
  font-size: 1.14285714rem;
}
.ui.big.vertical.menu {
  width: 20rem;
}

/* Massive */
.ui.massive.menu {
  font-size: 1.28571429rem;
}
.ui.massive.vertical.menu {
  width: 25rem;
}


/*******************************
         Theme Overrides
*******************************/



/*******************************
         Site Overrides
*******************************/








/*!
 * # Semantic UI 2.4.2 - List
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */


/*******************************
            List
*******************************/

ul.ui.list,
ol.ui.list,
.ui.list {
  list-style-type: none;
  margin: 1em 0em;
  padding: 0em 0em;
}
ul.ui.list:first-child,
ol.ui.list:first-child,
.ui.list:first-child {
  margin-top: 0em;
  padding-top: 0em;
}
ul.ui.list:last-child,
ol.ui.list:last-child,
.ui.list:last-child {
  margin-bottom: 0em;
  padding-bottom: 0em;
}


/*******************************
            Content
*******************************/


/* List Item */
ul.ui.list li,
ol.ui.list li,
.ui.list > .item,
.ui.list .list > .item {
  display: list-item;
  table-layout: fixed;
  list-style-type: none;
  list-style-position: outside;
  padding: 0.21428571em 0em;
  line-height: 1.14285714em;
}
ul.ui.list > li:first-child:after,
ol.ui.list > li:first-child:after,
.ui.list > .list > .item,
.ui.list > .item:after {
  content: '';
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
ul.ui.list li:first-child,
ol.ui.list li:first-child,
.ui.list .list > .item:first-child,
.ui.list > .item:first-child {
  padding-top: 0em;
}
ul.ui.list li:last-child,
ol.ui.list li:last-child,
.ui.list .list > .item:last-child,
.ui.list > .item:last-child {
  padding-bottom: 0em;
}

/* Child List */
ul.ui.list ul,
ol.ui.list ol,
.ui.list .list {
  clear: both;
  margin: 0em;
  padding: 0.75em 0em 0.25em 0.5em;
}

/* Child Item */
ul.ui.list ul li,
ol.ui.list ol li,
.ui.list .list > .item {
  padding: 0.14285714em 0em;
  line-height: inherit;
}

/* Icon */
.ui.list .list > .item > i.icon,
.ui.list > .item > i.icon {
  display: table-cell;
  margin: 0em;
  padding-top: 0em;
  padding-right: 0.28571429em;
  vertical-align: top;
  -webkit-transition: color 0.1s ease;
  transition: color 0.1s ease;
}
.ui.list .list > .item > i.icon:only-child,
.ui.list > .item > i.icon:only-child {
  display: inline-block;
  vertical-align: top;
}

/* Image */
.ui.list .list > .item > .image,
.ui.list > .item > .image {
  display: table-cell;
  background-color: transparent;
  margin: 0em;
  vertical-align: top;
}
.ui.list .list > .item > .image:not(:only-child):not(img),
.ui.list > .item > .image:not(:only-child):not(img) {
  padding-right: 0.5em;
}
.ui.list .list > .item > .image img,
.ui.list > .item > .image img {
  vertical-align: top;
}
.ui.list .list > .item > img.image,
.ui.list .list > .item > .image:only-child,
.ui.list > .item > img.image,
.ui.list > .item > .image:only-child {
  display: inline-block;
}

/* Content */
.ui.list .list > .item > .content,
.ui.list > .item > .content {
  line-height: 1.14285714em;
}
.ui.list .list > .item > .image + .content,
.ui.list .list > .item > .icon + .content,
.ui.list > .item > .image + .content,
.ui.list > .item > .icon + .content {
  display: table-cell;
  width: 100%;
  padding: 0em 0em 0em 0.5em;
  vertical-align: top;
}
.ui.list .list > .item > img.image + .content,
.ui.list > .item > img.image + .content {
  display: inline-block;
  width: auto;
}
.ui.list .list > .item > .content > .list,
.ui.list > .item > .content > .list {
  margin-left: 0em;
  padding-left: 0em;
}

/* Header */
.ui.list .list > .item .header,
.ui.list > .item .header {
  display: block;
  margin: 0em;
  font-family: 'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.87);
}

/* Description */
.ui.list .list > .item .description,
.ui.list > .item .description {
  display: block;
  color: rgba(0, 0, 0, 0.7);
}

/* Child Link */
.ui.list > .item a,
.ui.list .list > .item a {
  cursor: pointer;
}

/* Linking Item */
.ui.list .list > a.item,
.ui.list > a.item {
  cursor: pointer;
  color: #4183C4;
}
.ui.list .list > a.item:hover,
.ui.list > a.item:hover {
  color: #1e70bf;
}

/* Linked Item Icons */
.ui.list .list > a.item i.icon,
.ui.list > a.item i.icon {
  color: rgba(0, 0, 0, 0.4);
}

/* Header Link */
.ui.list .list > .item a.header,
.ui.list > .item a.header {
  cursor: pointer;
  color: #4183C4 !important;
}
.ui.list .list > .item a.header:hover,
.ui.list > .item a.header:hover {
  color: #1e70bf !important;
}

/* Floated Content */
.ui[class*="left floated"].list {
  float: left;
}
.ui[class*="right floated"].list {
  float: right;
}
.ui.list .list > .item [class*="left floated"],
.ui.list > .item [class*="left floated"] {
  float: left;
  margin: 0em 1em 0em 0em;
}
.ui.list .list > .item [class*="right floated"],
.ui.list > .item [class*="right floated"] {
  float: right;
  margin: 0em 0em 0em 1em;
}


/*******************************
            Coupling
*******************************/

.ui.menu .ui.list > .item,
.ui.menu .ui.list .list > .item {
  display: list-item;
  table-layout: fixed;
  background-color: transparent;
  list-style-type: none;
  list-style-position: outside;
  padding: 0.21428571em 0em;
  line-height: 1.14285714em;
}
.ui.menu .ui.list .list > .item:before,
.ui.menu .ui.list > .item:before {
  border: none;
  background: none;
}
.ui.menu .ui.list .list > .item:first-child,
.ui.menu .ui.list > .item:first-child {
  padding-top: 0em;
}
.ui.menu .ui.list .list > .item:last-child,
.ui.menu .ui.list > .item:last-child {
  padding-bottom: 0em;
}


/*******************************
            Types
*******************************/


/*-------------------
      Horizontal
--------------------*/

.ui.horizontal.list {
  display: inline-block;
  font-size: 0em;
}
.ui.horizontal.list > .item {
  display: inline-block;
  margin-left: 1em;
  font-size: 1rem;
}
.ui.horizontal.list:not(.celled) > .item:first-child {
  margin-left: 0em !important;
  padding-left: 0em !important;
}
.ui.horizontal.list .list {
  padding-left: 0em;
  padding-bottom: 0em;
}
.ui.horizontal.list > .item > .image,
.ui.horizontal.list .list > .item > .image,
.ui.horizontal.list > .item > .icon,
.ui.horizontal.list .list > .item > .icon,
.ui.horizontal.list > .item > .content,
.ui.horizontal.list .list > .item > .content {
  vertical-align: middle;
}

/* Padding on all elements */
.ui.horizontal.list > .item:first-child,
.ui.horizontal.list > .item:last-child {
  padding-top: 0.21428571em;
  padding-bottom: 0.21428571em;
}

/* Horizontal List */
.ui.horizontal.list > .item > i.icon {
  margin: 0em;
  padding: 0em 0.25em 0em 0em;
}
.ui.horizontal.list > .item > .icon,
.ui.horizontal.list > .item > .icon + .content {
  float: none;
  display: inline-block;
}


/*******************************
             States
*******************************/


/*-------------------
       Disabled
--------------------*/

.ui.list .list > .disabled.item,
.ui.list > .disabled.item {
  pointer-events: none;
  color: rgba(40, 40, 40, 0.3) !important;
}
.ui.inverted.list .list > .disabled.item,
.ui.inverted.list > .disabled.item {
  color: rgba(225, 225, 225, 0.3) !important;
}

/*-------------------
        Hover
--------------------*/

.ui.list .list > a.item:hover .icon,
.ui.list > a.item:hover .icon {
  color: rgba(0, 0, 0, 0.87);
}


/*******************************
           Variations
*******************************/


/*-------------------
       Inverted
--------------------*/

.ui.inverted.list .list > a.item > .icon,
.ui.inverted.list > a.item > .icon {
  color: rgba(255, 255, 255, 0.7);
}
.ui.inverted.list .list > .item .header,
.ui.inverted.list > .item .header {
  color: rgba(255, 255, 255, 0.9);
}
.ui.inverted.list .list > .item .description,
.ui.inverted.list > .item .description {
  color: rgba(255, 255, 255, 0.7);
}

/* Item Link */
.ui.inverted.list .list > a.item,
.ui.inverted.list > a.item {
  cursor: pointer;
  color: rgba(255, 255, 255, 0.9);
}
.ui.inverted.list .list > a.item:hover,
.ui.inverted.list > a.item:hover {
  color: #1e70bf;
}

/* Linking Content */
.ui.inverted.list .item a:not(.ui) {
  color: rgba(255, 255, 255, 0.9) !important;
}
.ui.inverted.list .item a:not(.ui):hover {
  color: #1e70bf !important;
}

/*-------------------
       Aligned
--------------------*/

.ui.list[class*="top aligned"] .image,
.ui.list[class*="top aligned"] .content,
.ui.list [class*="top aligned"] {
  vertical-align: top !important;
}
.ui.list[class*="middle aligned"] .image,
.ui.list[class*="middle aligned"] .content,
.ui.list [class*="middle aligned"] {
  vertical-align: middle !important;
}
.ui.list[class*="bottom aligned"] .image,
.ui.list[class*="bottom aligned"] .content,
.ui.list [class*="bottom aligned"] {
  vertical-align: bottom !important;
}

/*-------------------
       Link
--------------------*/

.ui.link.list .item,
.ui.link.list a.item,
.ui.link.list .item a:not(.ui) {
  color: rgba(0, 0, 0, 0.4);
  -webkit-transition: 0.1s color ease;
  transition: 0.1s color ease;
}
.ui.link.list.list a.item:hover,
.ui.link.list.list .item a:not(.ui):hover {
  color: rgba(0, 0, 0, 0.8);
}
.ui.link.list.list a.item:active,
.ui.link.list.list .item a:not(.ui):active {
  color: rgba(0, 0, 0, 0.9);
}
.ui.link.list.list .active.item,
.ui.link.list.list .active.item a:not(.ui) {
  color: rgba(0, 0, 0, 0.95);
}

/* Inverted */
.ui.inverted.link.list .item,
.ui.inverted.link.list a.item,
.ui.inverted.link.list .item a:not(.ui) {
  color: rgba(255, 255, 255, 0.5);
}
.ui.inverted.link.list.list a.item:hover,
.ui.inverted.link.list.list .item a:not(.ui):hover {
  color: #ffffff;
}
.ui.inverted.link.list.list a.item:active,
.ui.inverted.link.list.list .item a:not(.ui):active {
  color: #ffffff;
}
.ui.inverted.link.list.list a.active.item,
.ui.inverted.link.list.list .active.item a:not(.ui) {
  color: #ffffff;
}

/*-------------------
      Selection
--------------------*/

.ui.selection.list .list > .item,
.ui.selection.list > .item {
  cursor: pointer;
  background: transparent;
  padding: 0.5em 0.5em;
  margin: 0em;
  color: rgba(0, 0, 0, 0.4);
  border-radius: 0.5em;
  -webkit-transition: 0.1s color ease, 0.1s padding-left ease, 0.1s background-color ease;
  transition: 0.1s color ease, 0.1s padding-left ease, 0.1s background-color ease;
}
.ui.selection.list .list > .item:last-child,
.ui.selection.list > .item:last-child {
  margin-bottom: 0em;
}
.ui.selection.list.list > .item:hover,
.ui.selection.list > .item:hover {
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.8);
}
.ui.selection.list .list > .item:active,
.ui.selection.list > .item:active {
  background: rgba(0, 0, 0, 0.05);
  color: rgba(0, 0, 0, 0.9);
}
.ui.selection.list .list > .item.active,
.ui.selection.list > .item.active {
  background: rgba(0, 0, 0, 0.05);
  color: rgba(0, 0, 0, 0.95);
}

/* Inverted */
.ui.inverted.selection.list > .item,
.ui.inverted.selection.list > .item {
  background: transparent;
  color: rgba(255, 255, 255, 0.5);
}
.ui.inverted.selection.list > .item:hover,
.ui.inverted.selection.list > .item:hover {
  background: rgba(255, 255, 255, 0.02);
  color: #ffffff;
}
.ui.inverted.selection.list > .item:active,
.ui.inverted.selection.list > .item:active {
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
}
.ui.inverted.selection.list > .item.active,
.ui.inverted.selection.list > .item.active {
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
}

/* Celled / Divided Selection List */
.ui.celled.selection.list .list > .item,
.ui.divided.selection.list .list > .item,
.ui.celled.selection.list > .item,
.ui.divided.selection.list > .item {
  border-radius: 0em;
}

/*-------------------
       Animated
--------------------*/

.ui.animated.list > .item {
  -webkit-transition: 0.25s color ease 0.1s, 0.25s padding-left ease 0.1s, 0.25s background-color ease 0.1s;
  transition: 0.25s color ease 0.1s, 0.25s padding-left ease 0.1s, 0.25s background-color ease 0.1s;
}
.ui.animated.list:not(.horizontal) > .item:hover {
  padding-left: 1em;
}

/*-------------------
       Fitted
--------------------*/

.ui.fitted.list:not(.selection) .list > .item,
.ui.fitted.list:not(.selection) > .item {
  padding-left: 0em;
  padding-right: 0em;
}
.ui.fitted.selection.list .list > .item,
.ui.fitted.selection.list > .item {
  margin-left: -0.5em;
  margin-right: -0.5em;
}

/*-------------------
      Bulleted
--------------------*/

ul.ui.list,
.ui.bulleted.list {
  margin-left: 1.25rem;
}
ul.ui.list li,
.ui.bulleted.list .list > .item,
.ui.bulleted.list > .item {
  position: relative;
}
ul.ui.list li:before,
.ui.bulleted.list .list > .item:before,
.ui.bulleted.list > .item:before {
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  pointer-events: none;
  position: absolute;
  top: auto;
  left: auto;
  font-weight: normal;
  margin-left: -1.25rem;
  content: '•';
  opacity: 1;
  color: inherit;
  vertical-align: top;
}
ul.ui.list li:before,
.ui.bulleted.list .list > a.item:before,
.ui.bulleted.list > a.item:before {
  color: rgba(0, 0, 0, 0.87);
}
ul.ui.list ul,
.ui.bulleted.list .list {
  padding-left: 1.25rem;
}

/* Horizontal Bulleted */
ul.ui.horizontal.bulleted.list,
.ui.horizontal.bulleted.list {
  margin-left: 0em;
}
ul.ui.horizontal.bulleted.list li,
.ui.horizontal.bulleted.list > .item {
  margin-left: 1.75rem;
}
ul.ui.horizontal.bulleted.list li:first-child,
.ui.horizontal.bulleted.list > .item:first-child {
  margin-left: 0em;
}
ul.ui.horizontal.bulleted.list li::before,
.ui.horizontal.bulleted.list > .item::before {
  color: rgba(0, 0, 0, 0.87);
}
ul.ui.horizontal.bulleted.list li:first-child::before,
.ui.horizontal.bulleted.list > .item:first-child::before {
  display: none;
}

/*-------------------
       Ordered
--------------------*/

ol.ui.list,
.ui.ordered.list,
.ui.ordered.list .list,
ol.ui.list ol {
  counter-reset: ordered;
  margin-left: 1.25rem;
  list-style-type: none;
}
ol.ui.list li,
.ui.ordered.list .list > .item,
.ui.ordered.list > .item {
  list-style-type: none;
  position: relative;
}
ol.ui.list li:before,
.ui.ordered.list .list > .item:before,
.ui.ordered.list > .item:before {
  position: absolute;
  top: auto;
  left: auto;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  pointer-events: none;
  margin-left: -1.25rem;
  counter-increment: ordered;
  content: counters(ordered, ".") " ";
  text-align: right;
  color: rgba(0, 0, 0, 0.87);
  vertical-align: middle;
  opacity: 0.8;
}
ol.ui.inverted.list li:before,
.ui.ordered.inverted.list .list > .item:before,
.ui.ordered.inverted.list > .item:before {
  color: rgba(255, 255, 255, 0.7);
}

/* Value */
.ui.ordered.list > .list > .item[data-value],
.ui.ordered.list > .item[data-value] {
  content: attr(data-value);
}
ol.ui.list li[value]:before {
  content: attr(value);
}

/* Child Lists */
ol.ui.list ol,
.ui.ordered.list .list {
  margin-left: 1em;
}
ol.ui.list ol li:before,
.ui.ordered.list .list > .item:before {
  margin-left: -2em;
}

/* Horizontal Ordered */
ol.ui.horizontal.list,
.ui.ordered.horizontal.list {
  margin-left: 0em;
}
ol.ui.horizontal.list li:before,
.ui.ordered.horizontal.list .list > .item:before,
.ui.ordered.horizontal.list > .item:before {
  position: static;
  margin: 0em 0.5em 0em 0em;
}

/*-------------------
       Divided
--------------------*/

.ui.divided.list > .item {
  border-top: 1px solid rgba(34, 36, 38, 0.15);
}
.ui.divided.list .list > .item {
  border-top: none;
}
.ui.divided.list .item .list > .item {
  border-top: none;
}
.ui.divided.list .list > .item:first-child,
.ui.divided.list > .item:first-child {
  border-top: none;
}

/* Sub Menu */
.ui.divided.list:not(.horizontal) .list > .item:first-child {
  border-top-width: 1px;
}

/* Divided bulleted */
.ui.divided.bulleted.list:not(.horizontal),
.ui.divided.bulleted.list .list {
  margin-left: 0em;
  padding-left: 0em;
}
.ui.divided.bulleted.list > .item:not(.horizontal) {
  padding-left: 1.25rem;
}

/* Divided Ordered */
.ui.divided.ordered.list {
  margin-left: 0em;
}
.ui.divided.ordered.list .list > .item,
.ui.divided.ordered.list > .item {
  padding-left: 1.25rem;
}
.ui.divided.ordered.list .item .list {
  margin-left: 0em;
  margin-right: 0em;
  padding-bottom: 0.21428571em;
}
.ui.divided.ordered.list .item .list > .item {
  padding-left: 1em;
}

/* Divided Selection */
.ui.divided.selection.list .list > .item,
.ui.divided.selection.list > .item {
  margin: 0em;
  border-radius: 0em;
}

/* Divided horizontal */
.ui.divided.horizontal.list {
  margin-left: 0em;
}
.ui.divided.horizontal.list > .item:not(:first-child) {
  padding-left: 0.5em;
}
.ui.divided.horizontal.list > .item:not(:last-child) {
  padding-right: 0.5em;
}
.ui.divided.horizontal.list > .item {
  border-top: none;
  border-left: 1px solid rgba(34, 36, 38, 0.15);
  margin: 0em;
  line-height: 0.6;
}
.ui.horizontal.divided.list > .item:first-child {
  border-left: none;
}

/* Inverted */
.ui.divided.inverted.list > .item,
.ui.divided.inverted.list > .list,
.ui.divided.inverted.horizontal.list > .item {
  border-color: rgba(255, 255, 255, 0.1);
}

/*-------------------
        Celled
--------------------*/

.ui.celled.list > .item,
.ui.celled.list > .list {
  border-top: 1px solid rgba(34, 36, 38, 0.15);
  padding-left: 0.5em;
  padding-right: 0.5em;
}
.ui.celled.list > .item:last-child {
  border-bottom: 1px solid rgba(34, 36, 38, 0.15);
}

/* Padding on all elements */
.ui.celled.list > .item:first-child,
.ui.celled.list > .item:last-child {
  padding-top: 0.21428571em;
  padding-bottom: 0.21428571em;
}

/* Sub Menu */
.ui.celled.list .item .list > .item {
  border-width: 0px;
}
.ui.celled.list .list > .item:first-child {
  border-top-width: 0px;
}

/* Celled Bulleted */
.ui.celled.bulleted.list {
  margin-left: 0em;
}
.ui.celled.bulleted.list .list > .item,
.ui.celled.bulleted.list > .item {
  padding-left: 1.25rem;
}
.ui.celled.bulleted.list .item .list {
  margin-left: -1.25rem;
  margin-right: -1.25rem;
  padding-bottom: 0.21428571em;
}

/* Celled Ordered */
.ui.celled.ordered.list {
  margin-left: 0em;
}
.ui.celled.ordered.list .list > .item,
.ui.celled.ordered.list > .item {
  padding-left: 1.25rem;
}
.ui.celled.ordered.list .item .list {
  margin-left: 0em;
  margin-right: 0em;
  padding-bottom: 0.21428571em;
}
.ui.celled.ordered.list .list > .item {
  padding-left: 1em;
}

/* Celled Horizontal */
.ui.horizontal.celled.list {
  margin-left: 0em;
}
.ui.horizontal.celled.list .list > .item,
.ui.horizontal.celled.list > .item {
  border-top: none;
  border-left: 1px solid rgba(34, 36, 38, 0.15);
  margin: 0em;
  padding-left: 0.5em;
  padding-right: 0.5em;
  line-height: 0.6;
}
.ui.horizontal.celled.list .list > .item:last-child,
.ui.horizontal.celled.list > .item:last-child {
  border-bottom: none;
  border-right: 1px solid rgba(34, 36, 38, 0.15);
}

/* Inverted */
.ui.celled.inverted.list > .item,
.ui.celled.inverted.list > .list {
  border-color: 1px solid rgba(255, 255, 255, 0.1);
}
.ui.celled.inverted.horizontal.list .list > .item,
.ui.celled.inverted.horizontal.list > .item {
  border-color: 1px solid rgba(255, 255, 255, 0.1);
}

/*-------------------
       Relaxed
--------------------*/

.ui.relaxed.list:not(.horizontal) > .item:not(:first-child) {
  padding-top: 0.42857143em;
}
.ui.relaxed.list:not(.horizontal) > .item:not(:last-child) {
  padding-bottom: 0.42857143em;
}
.ui.horizontal.relaxed.list .list > .item:not(:first-child),
.ui.horizontal.relaxed.list > .item:not(:first-child) {
  padding-left: 1rem;
}
.ui.horizontal.relaxed.list .list > .item:not(:last-child),
.ui.horizontal.relaxed.list > .item:not(:last-child) {
  padding-right: 1rem;
}

/* Very Relaxed */
.ui[class*="very relaxed"].list:not(.horizontal) > .item:not(:first-child) {
  padding-top: 0.85714286em;
}
.ui[class*="very relaxed"].list:not(.horizontal) > .item:not(:last-child) {
  padding-bottom: 0.85714286em;
}
.ui.horizontal[class*="very relaxed"].list .list > .item:not(:first-child),
.ui.horizontal[class*="very relaxed"].list > .item:not(:first-child) {
  padding-left: 1.5rem;
}
.ui.horizontal[class*="very relaxed"].list .list > .item:not(:last-child),
.ui.horizontal[class*="very relaxed"].list > .item:not(:last-child) {
  padding-right: 1.5rem;
}

/*-------------------
      Sizes
--------------------*/

.ui.mini.list {
  font-size: 0.78571429em;
}
.ui.tiny.list {
  font-size: 0.85714286em;
}
.ui.small.list {
  font-size: 0.92857143em;
}
.ui.list {
  font-size: 1em;
}
.ui.large.list {
  font-size: 1.14285714em;
}
.ui.big.list {
  font-size: 1.28571429em;
}
.ui.huge.list {
  font-size: 1.42857143em;
}
.ui.massive.list {
  font-size: 1.71428571em;
}
.ui.mini.horizontal.list .list > .item,
.ui.mini.horizontal.list > .item {
  font-size: 0.78571429rem;
}
.ui.tiny.horizontal.list .list > .item,
.ui.tiny.horizontal.list > .item {
  font-size: 0.85714286rem;
}
.ui.small.horizontal.list .list > .item,
.ui.small.horizontal.list > .item {
  font-size: 0.92857143rem;
}
.ui.horizontal.list .list > .item,
.ui.horizontal.list > .item {
  font-size: 1rem;
}
.ui.large.horizontal.list .list > .item,
.ui.large.horizontal.list > .item {
  font-size: 1.14285714rem;
}
.ui.big.horizontal.list .list > .item,
.ui.big.horizontal.list > .item {
  font-size: 1.28571429rem;
}
.ui.huge.horizontal.list .list > .item,
.ui.huge.horizontal.list > .item {
  font-size: 1.42857143rem;
}
.ui.massive.horizontal.list .list > .item,
.ui.massive.horizontal.list > .item {
  font-size: 1.71428571rem;
}


/*******************************
         Theme Overrides
*******************************/



/*******************************
    User Variable Overrides
*******************************/



/*!
 * # Semantic UI 2.4.2 - Item
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */


/*******************************
            Standard
*******************************/


/*--------------
      Item
---------------*/

.ui.items > .item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: 1em 0em;
  width: 100%;
  min-height: 0px;
  background: transparent;
  padding: 0em;
  border: none;
  border-radius: 0rem;
  -webkit-box-shadow: none;
          box-shadow: none;
  -webkit-transition: -webkit-box-shadow 0.1s ease;
  transition: -webkit-box-shadow 0.1s ease;
  transition: box-shadow 0.1s ease;
  transition: box-shadow 0.1s ease, -webkit-box-shadow 0.1s ease;
  z-index: '';
}
.ui.items > .item a {
  cursor: pointer;
}

/*--------------
      Items
---------------*/

.ui.items {
  margin: 1.5em 0em;
}
.ui.items:first-child {
  margin-top: 0em !important;
}
.ui.items:last-child {
  margin-bottom: 0em !important;
}

/*--------------
      Item
---------------*/

.ui.items > .item:after {
  display: block;
  content: ' ';
  height: 0px;
  clear: both;
  overflow: hidden;
  visibility: hidden;
}
.ui.items > .item:first-child {
  margin-top: 0em;
}
.ui.items > .item:last-child {
  margin-bottom: 0em;
}

/*--------------
     Images
---------------*/

.ui.items > .item > .image {
  position: relative;
  -webkit-box-flex: 0;
      -ms-flex: 0 0 auto;
          flex: 0 0 auto;
  display: block;
  float: none;
  margin: 0em;
  padding: 0em;
  max-height: '';
  -ms-flex-item-align: top;
      align-self: top;
}
.ui.items > .item > .image > img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 0.125rem;
  border: none;
}
.ui.items > .item > .image:only-child > img {
  border-radius: 0rem;
}

/*--------------
     Content
---------------*/

.ui.items > .item > .content {
  display: block;
  -webkit-box-flex: 1;
      -ms-flex: 1 1 auto;
          flex: 1 1 auto;
  background: none;
  margin: 0em;
  padding: 0em;
  -webkit-box-shadow: none;
          box-shadow: none;
  font-size: 1em;
  border: none;
  border-radius: 0em;
}
.ui.items > .item > .content:after {
  display: block;
  content: ' ';
  height: 0px;
  clear: both;
  overflow: hidden;
  visibility: hidden;
}
.ui.items > .item > .image + .content {
  min-width: 0;
  width: auto;
  display: block;
  margin-left: 0em;
  -ms-flex-item-align: top;
      align-self: top;
  padding-left: 1.5em;
}
.ui.items > .item > .content > .header {
  display: inline-block;
  margin: -0.21425em 0em 0em;
  font-family: 'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.85);
}

/* Default Header Size */
.ui.items > .item > .content > .header:not(.ui) {
  font-size: 1.28571429em;
}

/*--------------
     Floated
---------------*/

.ui.items > .item [class*="left floated"] {
  float: left;
}
.ui.items > .item [class*="right floated"] {
  float: right;
}

/*--------------
  Content Image
---------------*/

.ui.items > .item .content img {
  -ms-flex-item-align: middle;
      align-self: middle;
  width: '';
}
.ui.items > .item img.avatar,
.ui.items > .item .avatar img {
  width: '';
  height: '';
  border-radius: 500rem;
}

/*--------------
   Description
---------------*/

.ui.items > .item > .content > .description {
  margin-top: 0.6em;
  max-width: auto;
  font-size: 1em;
  line-height: 1.4285em;
  color: rgba(0, 0, 0, 0.87);
}

/*--------------
    Paragraph
---------------*/

.ui.items > .item > .content p {
  margin: 0em 0em 0.5em;
}
.ui.items > .item > .content p:last-child {
  margin-bottom: 0em;
}

/*--------------
      Meta
---------------*/

.ui.items > .item .meta {
  margin: 0.5em 0em 0.5em;
  font-size: 1em;
  line-height: 1em;
  color: rgba(0, 0, 0, 0.6);
}
.ui.items > .item .meta * {
  margin-right: 0.3em;
}
.ui.items > .item .meta :last-child {
  margin-right: 0em;
}
.ui.items > .item .meta [class*="right floated"] {
  margin-right: 0em;
  margin-left: 0.3em;
}

/*--------------
      Links
---------------*/


/* Generic */
.ui.items > .item > .content a:not(.ui) {
  color: '';
  -webkit-transition: color 0.1s ease;
  transition: color 0.1s ease;
}
.ui.items > .item > .content a:not(.ui):hover {
  color: '';
}

/* Header */
.ui.items > .item > .content > a.header {
  color: rgba(0, 0, 0, 0.85);
}
.ui.items > .item > .content > a.header:hover {
  color: #1e70bf;
}

/* Meta */
.ui.items > .item .meta > a:not(.ui) {
  color: rgba(0, 0, 0, 0.4);
}
.ui.items > .item .meta > a:not(.ui):hover {
  color: rgba(0, 0, 0, 0.87);
}

/*--------------
     Labels
---------------*/


/*-----Star----- */


/* Icon */
.ui.items > .item > .content .favorite.icon {
  cursor: pointer;
  opacity: 0.75;
  -webkit-transition: color 0.1s ease;
  transition: color 0.1s ease;
}
.ui.items > .item > .content .favorite.icon:hover {
  opacity: 1;
  color: #FFB70A;
}
.ui.items > .item > .content .active.favorite.icon {
  color: #FFE623;
}

/*-----Like----- */


/* Icon */
.ui.items > .item > .content .like.icon {
  cursor: pointer;
  opacity: 0.75;
  -webkit-transition: color 0.1s ease;
  transition: color 0.1s ease;
}
.ui.items > .item > .content .like.icon:hover {
  opacity: 1;
  color: #FF2733;
}
.ui.items > .item > .content .active.like.icon {
  color: #FF2733;
}

/*----------------
  Extra Content
-----------------*/

.ui.items > .item .extra {
  display: block;
  position: relative;
  background: none;
  margin: 0.5rem 0em 0em;
  width: 100%;
  padding: 0em 0em 0em;
  top: 0em;
  left: 0em;
  color: rgba(0, 0, 0, 0.4);
  -webkit-box-shadow: none;
          box-shadow: none;
  -webkit-transition: color 0.1s ease;
  transition: color 0.1s ease;
  border-top: none;
}
.ui.items > .item .extra > * {
  margin: 0.25rem 0.5rem 0.25rem 0em;
}
.ui.items > .item .extra > [class*="right floated"] {
  margin: 0.25rem 0em 0.25rem 0.5rem;
}
.ui.items > .item .extra:after {
  display: block;
  content: ' ';
  height: 0px;
  clear: both;
  overflow: hidden;
  visibility: hidden;
}


/*******************************
          Responsive
*******************************/


/* Default Image Width */
.ui.items > .item > .image:not(.ui) {
  width: 175px;
}

/* Tablet Only */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .ui.items > .item {
    margin: 1em 0em;
  }
  .ui.items > .item > .image:not(.ui) {
    width: 150px;
  }
  .ui.items > .item > .image + .content {
    display: block;
    padding: 0em 0em 0em 1em;
  }
}

/* Mobile Only */
@media only screen and (max-width: 767px) {
  .ui.items:not(.unstackable) > .item {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    margin: 2em 0em;
  }
  .ui.items:not(.unstackable) > .item > .image {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .ui.items:not(.unstackable) > .item > .image,
  .ui.items:not(.unstackable) > .item > .image > img {
    max-width: 100% !important;
    width: auto !important;
    max-height: 250px !important;
  }
  .ui.items:not(.unstackable) > .item > .image + .content {
    display: block;
    padding: 1.5em 0em 0em;
  }
}


/*******************************
           Variations
*******************************/


/*-------------------
       Aligned
--------------------*/

.ui.items > .item > .image + [class*="top aligned"].content {
  -ms-flex-item-align: start;
      align-self: flex-start;
}
.ui.items > .item > .image + [class*="middle aligned"].content {
  -ms-flex-item-align: center;
      align-self: center;
}
.ui.items > .item > .image + [class*="bottom aligned"].content {
  -ms-flex-item-align: end;
      align-self: flex-end;
}

/*--------------
     Relaxed
---------------*/

.ui.relaxed.items > .item {
  margin: 1.5em 0em;
}
.ui[class*="very relaxed"].items > .item {
  margin: 2em 0em;
}

/*-------------------
      Divided
--------------------*/

.ui.divided.items > .item {
  border-top: 1px solid rgba(34, 36, 38, 0.15);
  margin: 0em;
  padding: 1em 0em;
}
.ui.divided.items > .item:first-child {
  border-top: none;
  margin-top: 0em !important;
  padding-top: 0em !important;
}
.ui.divided.items > .item:last-child {
  margin-bottom: 0em !important;
  padding-bottom: 0em !important;
}

/* Relaxed Divided */
.ui.relaxed.divided.items > .item {
  margin: 0em;
  padding: 1.5em 0em;
}
.ui[class*="very relaxed"].divided.items > .item {
  margin: 0em;
  padding: 2em 0em;
}

/*-------------------
        Link
--------------------*/

.ui.items a.item:hover,
.ui.link.items > .item:hover {
  cursor: pointer;
}
.ui.items a.item:hover .content .header,
.ui.link.items > .item:hover .content .header {
  color: #1e70bf;
}

/*--------------
      Size
---------------*/

.ui.items > .item {
  font-size: 1em;
}

/*---------------
   Unstackable
----------------*/

@media only screen and (max-width: 767px) {
  .ui.unstackable.items > .item > .image,
  .ui.unstackable.items > .item > .image > img {
    width: 125px !important;
  }
}


/*******************************
         Theme Overrides
*******************************/



/*******************************
    User Variable Overrides
*******************************/

























/*!
 * # Semantic UI 2.4.2 - Form
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */


/*******************************
            Elements
*******************************/


/*--------------------
        Form
---------------------*/

.ui.form {
  position: relative;
  max-width: 100%;
}

/*--------------------
        Content
---------------------*/

.ui.form > p {
  margin: 1em 0em;
}

/*--------------------
        Field
---------------------*/

.ui.form .field {
  clear: both;
  margin: 0em 0em 1em;
}
.ui.form .field:last-child,
.ui.form .fields:last-child .field {
  margin-bottom: 0em;
}
.ui.form .fields .field {
  clear: both;
  margin: 0em;
}

/*--------------------
        Labels
---------------------*/

.ui.form .field > label {
  display: block;
  margin: 0em 0em 0.28571429rem 0em;
  color: rgba(0, 0, 0, 0.87);
  font-size: 0.92857143em;
  font-weight: bold;
  text-transform: none;
}

/*--------------------
    Standard Inputs
---------------------*/

.ui.form textarea,
.ui.form input:not([type]),
.ui.form input[type="date"],
.ui.form input[type="datetime-local"],
.ui.form input[type="email"],
.ui.form input[type="number"],
.ui.form input[type="password"],
.ui.form input[type="search"],
.ui.form input[type="tel"],
.ui.form input[type="time"],
.ui.form input[type="text"],
.ui.form input[type="file"],
.ui.form input[type="url"] {
  width: 100%;
  vertical-align: top;
}

/* Set max height on unusual input */
.ui.form ::-webkit-datetime-edit,
.ui.form ::-webkit-inner-spin-button {
  height: 1.21428571em;
}
.ui.form input:not([type]),
.ui.form input[type="date"],
.ui.form input[type="datetime-local"],
.ui.form input[type="email"],
.ui.form input[type="number"],
.ui.form input[type="password"],
.ui.form input[type="search"],
.ui.form input[type="tel"],
.ui.form input[type="time"],
.ui.form input[type="text"],
.ui.form input[type="file"],
.ui.form input[type="url"] {
  font-family: 'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif;
  margin: 0em;
  outline: none;
  -webkit-appearance: none;
  tap-highlight-color: rgba(255, 255, 255, 0);
  line-height: 1.21428571em;
  padding: 0.67857143em 1em;
  font-size: 1em;
  background: #FFFFFF;
  border: 1px solid rgba(34, 36, 38, 0.15);
  color: rgba(0, 0, 0, 0.87);
  border-radius: 0.28571429rem;
  -webkit-box-shadow: 0em 0em 0em 0em transparent inset;
          box-shadow: 0em 0em 0em 0em transparent inset;
  -webkit-transition: color 0.1s ease, border-color 0.1s ease;
  transition: color 0.1s ease, border-color 0.1s ease;
}

/* Text Area */
.ui.form textarea {
  margin: 0em;
  -webkit-appearance: none;
  tap-highlight-color: rgba(255, 255, 255, 0);
  padding: 0.78571429em 1em;
  background: #FFFFFF;
  border: 1px solid rgba(34, 36, 38, 0.15);
  outline: none;
  color: rgba(0, 0, 0, 0.87);
  border-radius: 0.28571429rem;
  -webkit-box-shadow: 0em 0em 0em 0em transparent inset;
          box-shadow: 0em 0em 0em 0em transparent inset;
  -webkit-transition: color 0.1s ease, border-color 0.1s ease;
  transition: color 0.1s ease, border-color 0.1s ease;
  font-size: 1em;
  line-height: 1.2857;
  resize: vertical;
}
.ui.form textarea:not([rows]) {
  height: 12em;
  min-height: 8em;
  max-height: 24em;
}
.ui.form textarea,
.ui.form input[type="checkbox"] {
  vertical-align: top;
}

/*--------------------------
  Input w/ attached Button
---------------------------*/

.ui.form input.attached {
  width: auto;
}

/*--------------------
     Basic Select
---------------------*/

.ui.form select {
  display: block;
  height: auto;
  width: 100%;
  background: #FFFFFF;
  border: 1px solid rgba(34, 36, 38, 0.15);
  border-radius: 0.28571429rem;
  -webkit-box-shadow: 0em 0em 0em 0em transparent inset;
          box-shadow: 0em 0em 0em 0em transparent inset;
  padding: 0.62em 1em;
  color: rgba(0, 0, 0, 0.87);
  -webkit-transition: color 0.1s ease, border-color 0.1s ease;
  transition: color 0.1s ease, border-color 0.1s ease;
}

/*--------------------
       Dropdown
---------------------*/


/* Block */
.ui.form .field > .selection.dropdown {
  width: 100%;
}
.ui.form .field > .selection.dropdown > .dropdown.icon {
  float: right;
}

/* Inline */
.ui.form .inline.fields .field > .selection.dropdown,
.ui.form .inline.field > .selection.dropdown {
  width: auto;
}
.ui.form .inline.fields .field > .selection.dropdown > .dropdown.icon,
.ui.form .inline.field > .selection.dropdown > .dropdown.icon {
  float: none;
}

/*--------------------
       UI Input
---------------------*/


/* Block */
.ui.form .field .ui.input,
.ui.form .fields .field .ui.input,
.ui.form .wide.field .ui.input {
  width: 100%;
}

/* Inline  */
.ui.form .inline.fields .field:not(.wide) .ui.input,
.ui.form .inline.field:not(.wide) .ui.input {
  width: auto;
  vertical-align: middle;
}

/* Auto Input */
.ui.form .fields .field .ui.input input,
.ui.form .field .ui.input input {
  width: auto;
}

/* Full Width Input */
.ui.form .ten.fields .ui.input input,
.ui.form .nine.fields .ui.input input,
.ui.form .eight.fields .ui.input input,
.ui.form .seven.fields .ui.input input,
.ui.form .six.fields .ui.input input,
.ui.form .five.fields .ui.input input,
.ui.form .four.fields .ui.input input,
.ui.form .three.fields .ui.input input,
.ui.form .two.fields .ui.input input,
.ui.form .wide.field .ui.input input {
  -webkit-box-flex: 1;
      -ms-flex: 1 0 auto;
          flex: 1 0 auto;
  width: 0px;
}

/*--------------------
   Types of Messages
---------------------*/

.ui.form .success.message,
.ui.form .warning.message,
.ui.form .error.message {
  display: none;
}

/* Assumptions */
.ui.form .message:first-child {
  margin-top: 0px;
}

/*--------------------
   Validation Prompt
---------------------*/

.ui.form .field .prompt.label {
  white-space: normal;
  background: #FFFFFF !important;
  border: 1px solid #E0B4B4 !important;
  color: #9F3A38 !important;
}
.ui.form .inline.fields .field .prompt,
.ui.form .inline.field .prompt {
  vertical-align: top;
  margin: -0.25em 0em -0.5em 0.5em;
}
.ui.form .inline.fields .field .prompt:before,
.ui.form .inline.field .prompt:before {
  border-width: 0px 0px 1px 1px;
  bottom: auto;
  right: auto;
  top: 50%;
  left: 0em;
}


/*******************************
            States
*******************************/


/*--------------------
      Autofilled
---------------------*/

.ui.form .field.field input:-webkit-autofill {
  -webkit-box-shadow: 0px 0px 0px 100px #FFFFF0 inset !important;
          box-shadow: 0px 0px 0px 100px #FFFFF0 inset !important;
  border-color: #E5DFA1 !important;
}

/* Focus */
.ui.form .field.field input:-webkit-autofill:focus {
  -webkit-box-shadow: 0px 0px 0px 100px #FFFFF0 inset !important;
          box-shadow: 0px 0px 0px 100px #FFFFF0 inset !important;
  border-color: #D5C315 !important;
}

/* Error */
.ui.form .error.error input:-webkit-autofill {
  -webkit-box-shadow: 0px 0px 0px 100px #FFFAF0 inset !important;
          box-shadow: 0px 0px 0px 100px #FFFAF0 inset !important;
  border-color: #E0B4B4 !important;
}

/*--------------------
      Placeholder
---------------------*/


/* browsers require these rules separate */
.ui.form ::-webkit-input-placeholder {
  color: rgba(191, 191, 191, 0.87);
}
.ui.form :-ms-input-placeholder {
  color: rgba(191, 191, 191, 0.87) !important;
}
.ui.form ::-moz-placeholder {
  color: rgba(191, 191, 191, 0.87);
}
.ui.form :focus::-webkit-input-placeholder {
  color: rgba(115, 115, 115, 0.87);
}
.ui.form :focus:-ms-input-placeholder {
  color: rgba(115, 115, 115, 0.87) !important;
}
.ui.form :focus::-moz-placeholder {
  color: rgba(115, 115, 115, 0.87);
}

/* Error Placeholder */
.ui.form .error ::-webkit-input-placeholder {
  color: #e7bdbc;
}
.ui.form .error :-ms-input-placeholder {
  color: #e7bdbc !important;
}
.ui.form .error ::-moz-placeholder {
  color: #e7bdbc;
}
.ui.form .error :focus::-webkit-input-placeholder {
  color: #da9796;
}
.ui.form .error :focus:-ms-input-placeholder {
  color: #da9796 !important;
}
.ui.form .error :focus::-moz-placeholder {
  color: #da9796;
}

/*--------------------
        Focus
---------------------*/

.ui.form input:not([type]):focus,
.ui.form input[type="date"]:focus,
.ui.form input[type="datetime-local"]:focus,
.ui.form input[type="email"]:focus,
.ui.form input[type="number"]:focus,
.ui.form input[type="password"]:focus,
.ui.form input[type="search"]:focus,
.ui.form input[type="tel"]:focus,
.ui.form input[type="time"]:focus,
.ui.form input[type="text"]:focus,
.ui.form input[type="file"]:focus,
.ui.form input[type="url"]:focus {
  color: rgba(0, 0, 0, 0.95);
  border-color: #85B7D9;
  border-radius: 0.28571429rem;
  background: #FFFFFF;
  -webkit-box-shadow: 0px 0em 0em 0em rgba(34, 36, 38, 0.35) inset;
          box-shadow: 0px 0em 0em 0em rgba(34, 36, 38, 0.35) inset;
}
.ui.form textarea:focus {
  color: rgba(0, 0, 0, 0.95);
  border-color: #85B7D9;
  border-radius: 0.28571429rem;
  background: #FFFFFF;
  -webkit-box-shadow: 0px 0em 0em 0em rgba(34, 36, 38, 0.35) inset;
          box-shadow: 0px 0em 0em 0em rgba(34, 36, 38, 0.35) inset;
  -webkit-appearance: none;
}

/*--------------------
        Success
---------------------*/


/* On Form */
.ui.form.success .success.message:not(:empty) {
  display: block;
}
.ui.form.success .compact.success.message:not(:empty) {
  display: inline-block;
}
.ui.form.success .icon.success.message:not(:empty) {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

/*--------------------
        Warning
---------------------*/


/* On Form */
.ui.form.warning .warning.message:not(:empty) {
  display: block;
}
.ui.form.warning .compact.warning.message:not(:empty) {
  display: inline-block;
}
.ui.form.warning .icon.warning.message:not(:empty) {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

/*--------------------
        Error
---------------------*/


/* On Form */
.ui.form.error .error.message:not(:empty) {
  display: block;
}
.ui.form.error .compact.error.message:not(:empty) {
  display: inline-block;
}
.ui.form.error .icon.error.message:not(:empty) {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

/* On Field(s) */
.ui.form .fields.error .field label,
.ui.form .field.error label,
.ui.form .fields.error .field .input,
.ui.form .field.error .input {
  color: #9F3A38;
}
.ui.form .fields.error .field .corner.label,
.ui.form .field.error .corner.label {
  border-color: #9F3A38;
  color: #FFFFFF;
}
.ui.form .fields.error .field textarea,
.ui.form .fields.error .field select,
.ui.form .fields.error .field input:not([type]),
.ui.form .fields.error .field input[type="date"],
.ui.form .fields.error .field input[type="datetime-local"],
.ui.form .fields.error .field input[type="email"],
.ui.form .fields.error .field input[type="number"],
.ui.form .fields.error .field input[type="password"],
.ui.form .fields.error .field input[type="search"],
.ui.form .fields.error .field input[type="tel"],
.ui.form .fields.error .field input[type="time"],
.ui.form .fields.error .field input[type="text"],
.ui.form .fields.error .field input[type="file"],
.ui.form .fields.error .field input[type="url"],
.ui.form .field.error textarea,
.ui.form .field.error select,
.ui.form .field.error input:not([type]),
.ui.form .field.error input[type="date"],
.ui.form .field.error input[type="datetime-local"],
.ui.form .field.error input[type="email"],
.ui.form .field.error input[type="number"],
.ui.form .field.error input[type="password"],
.ui.form .field.error input[type="search"],
.ui.form .field.error input[type="tel"],
.ui.form .field.error input[type="time"],
.ui.form .field.error input[type="text"],
.ui.form .field.error input[type="file"],
.ui.form .field.error input[type="url"] {
  background: #FFF6F6;
  border-color: #E0B4B4;
  color: #9F3A38;
  border-radius: '';
  -webkit-box-shadow: none;
          box-shadow: none;
}
.ui.form .field.error textarea:focus,
.ui.form .field.error select:focus,
.ui.form .field.error input:not([type]):focus,
.ui.form .field.error input[type="date"]:focus,
.ui.form .field.error input[type="datetime-local"]:focus,
.ui.form .field.error input[type="email"]:focus,
.ui.form .field.error input[type="number"]:focus,
.ui.form .field.error input[type="password"]:focus,
.ui.form .field.error input[type="search"]:focus,
.ui.form .field.error input[type="tel"]:focus,
.ui.form .field.error input[type="time"]:focus,
.ui.form .field.error input[type="text"]:focus,
.ui.form .field.error input[type="file"]:focus,
.ui.form .field.error input[type="url"]:focus {
  background: #FFF6F6;
  border-color: #E0B4B4;
  color: #9F3A38;
  -webkit-appearance: none;
  -webkit-box-shadow: none;
          box-shadow: none;
}

/* Preserve Native Select Stylings */
.ui.form .field.error select {
  -webkit-appearance: menulist-button;
}

/*------------------
    Dropdown Error
--------------------*/

.ui.form .fields.error .field .ui.dropdown,
.ui.form .fields.error .field .ui.dropdown .item,
.ui.form .field.error .ui.dropdown,
.ui.form .field.error .ui.dropdown .text,
.ui.form .field.error .ui.dropdown .item {
  background: #FFF6F6;
  color: #9F3A38;
}
.ui.form .fields.error .field .ui.dropdown,
.ui.form .field.error .ui.dropdown {
  border-color: #E0B4B4 !important;
}
.ui.form .fields.error .field .ui.dropdown:hover,
.ui.form .field.error .ui.dropdown:hover {
  border-color: #E0B4B4 !important;
}
.ui.form .fields.error .field .ui.dropdown:hover .menu,
.ui.form .field.error .ui.dropdown:hover .menu {
  border-color: #E0B4B4;
}
.ui.form .fields.error .field .ui.multiple.selection.dropdown > .label,
.ui.form .field.error .ui.multiple.selection.dropdown > .label {
  background-color: #EACBCB;
  color: #9F3A38;
}

/* Hover */
.ui.form .fields.error .field .ui.dropdown .menu .item:hover,
.ui.form .field.error .ui.dropdown .menu .item:hover {
  background-color: #FBE7E7;
}

/* Selected */
.ui.form .fields.error .field .ui.dropdown .menu .selected.item,
.ui.form .field.error .ui.dropdown .menu .selected.item {
  background-color: #FBE7E7;
}

/* Active */
.ui.form .fields.error .field .ui.dropdown .menu .active.item,
.ui.form .field.error .ui.dropdown .menu .active.item {
  background-color: #FDCFCF !important;
}

/*--------------------
    Checkbox Error
---------------------*/

.ui.form .fields.error .field .checkbox:not(.toggle):not(.slider) label,
.ui.form .field.error .checkbox:not(.toggle):not(.slider) label,
.ui.form .fields.error .field .checkbox:not(.toggle):not(.slider) .box,
.ui.form .field.error .checkbox:not(.toggle):not(.slider) .box {
  color: #9F3A38;
}
.ui.form .fields.error .field .checkbox:not(.toggle):not(.slider) label:before,
.ui.form .field.error .checkbox:not(.toggle):not(.slider) label:before,
.ui.form .fields.error .field .checkbox:not(.toggle):not(.slider) .box:before,
.ui.form .field.error .checkbox:not(.toggle):not(.slider) .box:before {
  background: #FFF6F6;
  border-color: #E0B4B4;
}
.ui.form .fields.error .field .checkbox label:after,
.ui.form .field.error .checkbox label:after,
.ui.form .fields.error .field .checkbox .box:after,
.ui.form .field.error .checkbox .box:after {
  color: #9F3A38;
}

/*--------------------
       Disabled
---------------------*/

.ui.form .disabled.fields .field,
.ui.form .disabled.field,
.ui.form .field :disabled {
  pointer-events: none;
  opacity: 0.45;
}
.ui.form .field.disabled > label,
.ui.form .fields.disabled > label {
  opacity: 0.45;
}
.ui.form .field.disabled :disabled {
  opacity: 1;
}

/*--------------
    Loading
---------------*/

.ui.loading.form {
  position: relative;
  cursor: default;
  pointer-events: none;
}
.ui.loading.form:before {
  position: absolute;
  content: '';
  top: 0%;
  left: 0%;
  background: rgba(255, 255, 255, 0.8);
  width: 100%;
  height: 100%;
  z-index: 100;
}
.ui.loading.form:after {
  position: absolute;
  content: '';
  top: 50%;
  left: 50%;
  margin: -1.5em 0em 0em -1.5em;
  width: 3em;
  height: 3em;
  -webkit-animation: form-spin 0.6s linear;
          animation: form-spin 0.6s linear;
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
  border-radius: 500rem;
  border-color: #767676 rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1);
  border-style: solid;
  border-width: 0.2em;
  -webkit-box-shadow: 0px 0px 0px 1px transparent;
          box-shadow: 0px 0px 0px 1px transparent;
  visibility: visible;
  z-index: 101;
}
@-webkit-keyframes form-spin {
  from {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes form-spin {
  from {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}


/*******************************
         Element Types
*******************************/


/*--------------------
     Required Field
---------------------*/

.ui.form .required.fields:not(.grouped) > .field > label:after,
.ui.form .required.fields.grouped > label:after,
.ui.form .required.field > label:after,
.ui.form .required.fields:not(.grouped) > .field > .checkbox:after,
.ui.form .required.field > .checkbox:after {
  margin: -0.2em 0em 0em 0.2em;
  content: '*';
  color: #DB2828;
}
.ui.form .required.fields:not(.grouped) > .field > label:after,
.ui.form .required.fields.grouped > label:after,
.ui.form .required.field > label:after {
  display: inline-block;
  vertical-align: top;
}
.ui.form .required.fields:not(.grouped) > .field > .checkbox:after,
.ui.form .required.field > .checkbox:after {
  position: absolute;
  top: 0%;
  left: 100%;
}


/*******************************
           Variations
*******************************/


/*--------------------
    Inverted Colors
---------------------*/

.ui.inverted.form label,
.ui.form .inverted.segment label,
.ui.form .inverted.segment .ui.checkbox label,
.ui.form .inverted.segment .ui.checkbox .box,
.ui.inverted.form .ui.checkbox label,
.ui.inverted.form .ui.checkbox .box,
.ui.inverted.form .inline.fields > label,
.ui.inverted.form .inline.fields .field > label,
.ui.inverted.form .inline.fields .field > p,
.ui.inverted.form .inline.field > label,
.ui.inverted.form .inline.field > p {
  color: rgba(255, 255, 255, 0.9);
}

/* Inverted Field */
.ui.inverted.form input:not([type]),
.ui.inverted.form input[type="date"],
.ui.inverted.form input[type="datetime-local"],
.ui.inverted.form input[type="email"],
.ui.inverted.form input[type="number"],
.ui.inverted.form input[type="password"],
.ui.inverted.form input[type="search"],
.ui.inverted.form input[type="tel"],
.ui.inverted.form input[type="time"],
.ui.inverted.form input[type="text"],
.ui.inverted.form input[type="file"],
.ui.inverted.form input[type="url"] {
  background: #FFFFFF;
  border-color: rgba(255, 255, 255, 0.1);
  color: rgba(0, 0, 0, 0.87);
  -webkit-box-shadow: none;
          box-shadow: none;
}

/*--------------------
     Field Groups
---------------------*/


/* Grouped Vertically */
.ui.form .grouped.fields {
  display: block;
  margin: 0em 0em 1em;
}
.ui.form .grouped.fields:last-child {
  margin-bottom: 0em;
}
.ui.form .grouped.fields > label {
  margin: 0em 0em 0.28571429rem 0em;
  color: rgba(0, 0, 0, 0.87);
  font-size: 0.92857143em;
  font-weight: bold;
  text-transform: none;
}
.ui.form .grouped.fields .field,
.ui.form .grouped.inline.fields .field {
  display: block;
  margin: 0.5em 0em;
  padding: 0em;
}

/*--------------------
        Fields
---------------------*/


/* Split fields */
.ui.form .fields {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  margin: 0em -0.5em 1em;
}
.ui.form .fields > .field {
  -webkit-box-flex: 0;
      -ms-flex: 0 1 auto;
          flex: 0 1 auto;
  padding-left: 0.5em;
  padding-right: 0.5em;
}
.ui.form .fields > .field:first-child {
  border-left: none;
  -webkit-box-shadow: none;
          box-shadow: none;
}

/* Other Combinations */
.ui.form .two.fields > .fields,
.ui.form .two.fields > .field {
  width: 50%;
}
.ui.form .three.fields > .fields,
.ui.form .three.fields > .field {
  width: 33.33333333%;
}
.ui.form .four.fields > .fields,
.ui.form .four.fields > .field {
  width: 25%;
}
.ui.form .five.fields > .fields,
.ui.form .five.fields > .field {
  width: 20%;
}
.ui.form .six.fields > .fields,
.ui.form .six.fields > .field {
  width: 16.66666667%;
}
.ui.form .seven.fields > .fields,
.ui.form .seven.fields > .field {
  width: 14.28571429%;
}
.ui.form .eight.fields > .fields,
.ui.form .eight.fields > .field {
  width: 12.5%;
}
.ui.form .nine.fields > .fields,
.ui.form .nine.fields > .field {
  width: 11.11111111%;
}
.ui.form .ten.fields > .fields,
.ui.form .ten.fields > .field {
  width: 10%;
}

/* Swap to full width on mobile */
@media only screen and (max-width: 767px) {
  .ui.form .fields {
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
  }
  .ui[class*="equal width"].form:not(.unstackable) .fields > .field,
  .ui.form:not(.unstackable) [class*="equal width"].fields:not(.unstackable) > .field,
  .ui.form:not(.unstackable) .two.fields:not(.unstackable) > .fields,
  .ui.form:not(.unstackable) .two.fields:not(.unstackable) > .field,
  .ui.form:not(.unstackable) .three.fields:not(.unstackable) > .fields,
  .ui.form:not(.unstackable) .three.fields:not(.unstackable) > .field,
  .ui.form:not(.unstackable) .four.fields:not(.unstackable) > .fields,
  .ui.form:not(.unstackable) .four.fields:not(.unstackable) > .field,
  .ui.form:not(.unstackable) .five.fields:not(.unstackable) > .fields,
  .ui.form:not(.unstackable) .five.fields:not(.unstackable) > .field,
  .ui.form:not(.unstackable) .six.fields:not(.unstackable) > .fields,
  .ui.form:not(.unstackable) .six.fields:not(.unstackable) > .field,
  .ui.form:not(.unstackable) .seven.fields:not(.unstackable) > .fields,
  .ui.form:not(.unstackable) .seven.fields:not(.unstackable) > .field,
  .ui.form:not(.unstackable) .eight.fields:not(.unstackable) > .fields,
  .ui.form:not(.unstackable) .eight.fields:not(.unstackable) > .field,
  .ui.form:not(.unstackable) .nine.fields:not(.unstackable) > .fields,
  .ui.form:not(.unstackable) .nine.fields:not(.unstackable) > .field,
  .ui.form:not(.unstackable) .ten.fields:not(.unstackable) > .fields,
  .ui.form:not(.unstackable) .ten.fields:not(.unstackable) > .field {
    width: 100% !important;
    margin: 0em 0em 1em;
  }
}

/* Sizing Combinations */
.ui.form .fields .wide.field {
  width: 6.25%;
  padding-left: 0.5em;
  padding-right: 0.5em;
}
.ui.form .one.wide.field {
  width: 6.25% !important;
}
.ui.form .two.wide.field {
  width: 12.5% !important;
}
.ui.form .three.wide.field {
  width: 18.75% !important;
}
.ui.form .four.wide.field {
  width: 25% !important;
}
.ui.form .five.wide.field {
  width: 31.25% !important;
}
.ui.form .six.wide.field {
  width: 37.5% !important;
}
.ui.form .seven.wide.field {
  width: 43.75% !important;
}
.ui.form .eight.wide.field {
  width: 50% !important;
}
.ui.form .nine.wide.field {
  width: 56.25% !important;
}
.ui.form .ten.wide.field {
  width: 62.5% !important;
}
.ui.form .eleven.wide.field {
  width: 68.75% !important;
}
.ui.form .twelve.wide.field {
  width: 75% !important;
}
.ui.form .thirteen.wide.field {
  width: 81.25% !important;
}
.ui.form .fourteen.wide.field {
  width: 87.5% !important;
}
.ui.form .fifteen.wide.field {
  width: 93.75% !important;
}
.ui.form .sixteen.wide.field {
  width: 100% !important;
}

/* Swap to full width on mobile */
@media only screen and (max-width: 767px) {
  .ui.form:not(.unstackable) .two.fields:not(.unstackable) > .fields,
  .ui.form:not(.unstackable) .two.fields:not(.unstackable) > .field,
  .ui.form:not(.unstackable) .three.fields:not(.unstackable) > .fields,
  .ui.form:not(.unstackable) .three.fields:not(.unstackable) > .field,
  .ui.form:not(.unstackable) .four.fields:not(.unstackable) > .fields,
  .ui.form:not(.unstackable) .four.fields:not(.unstackable) > .field,
  .ui.form:not(.unstackable) .five.fields:not(.unstackable) > .fields,
  .ui.form:not(.unstackable) .five.fields:not(.unstackable) > .field,
  .ui.form:not(.unstackable) .fields:not(.unstackable) > .two.wide.field,
  .ui.form:not(.unstackable) .fields:not(.unstackable) > .three.wide.field,
  .ui.form:not(.unstackable) .fields:not(.unstackable) > .four.wide.field,
  .ui.form:not(.unstackable) .fields:not(.unstackable) > .five.wide.field,
  .ui.form:not(.unstackable) .fields:not(.unstackable) > .six.wide.field,
  .ui.form:not(.unstackable) .fields:not(.unstackable) > .seven.wide.field,
  .ui.form:not(.unstackable) .fields:not(.unstackable) > .eight.wide.field,
  .ui.form:not(.unstackable) .fields:not(.unstackable) > .nine.wide.field,
  .ui.form:not(.unstackable) .fields:not(.unstackable) > .ten.wide.field,
  .ui.form:not(.unstackable) .fields:not(.unstackable) > .eleven.wide.field,
  .ui.form:not(.unstackable) .fields:not(.unstackable) > .twelve.wide.field,
  .ui.form:not(.unstackable) .fields:not(.unstackable) > .thirteen.wide.field,
  .ui.form:not(.unstackable) .fields:not(.unstackable) > .fourteen.wide.field,
  .ui.form:not(.unstackable) .fields:not(.unstackable) > .fifteen.wide.field,
  .ui.form:not(.unstackable) .fields:not(.unstackable) > .sixteen.wide.field {
    width: 100% !important;
  }
  .ui.form .fields {
    margin-bottom: 0em;
  }
}

/*--------------------
     Equal Width
---------------------*/

.ui[class*="equal width"].form .fields > .field,
.ui.form [class*="equal width"].fields > .field {
  width: 100%;
  -webkit-box-flex: 1;
      -ms-flex: 1 1 auto;
          flex: 1 1 auto;
}

/*--------------------
    Inline Fields
---------------------*/

.ui.form .inline.fields {
  margin: 0em 0em 1em;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
.ui.form .inline.fields .field {
  margin: 0em;
  padding: 0em 1em 0em 0em;
}

/* Inline Label */
.ui.form .inline.fields > label,
.ui.form .inline.fields .field > label,
.ui.form .inline.fields .field > p,
.ui.form .inline.field > label,
.ui.form .inline.field > p {
  display: inline-block;
  width: auto;
  margin-top: 0em;
  margin-bottom: 0em;
  vertical-align: baseline;
  font-size: 0.92857143em;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.87);
  text-transform: none;
}

/* Grouped Inline Label */
.ui.form .inline.fields > label {
  margin: 0.035714em 1em 0em 0em;
}

/* Inline Input */
.ui.form .inline.fields .field > input,
.ui.form .inline.fields .field > select,
.ui.form .inline.field > input,
.ui.form .inline.field > select {
  display: inline-block;
  width: auto;
  margin-top: 0em;
  margin-bottom: 0em;
  vertical-align: middle;
  font-size: 1em;
}

/* Label */
.ui.form .inline.fields .field > :first-child,
.ui.form .inline.field > :first-child {
  margin: 0em 0.85714286em 0em 0em;
}
.ui.form .inline.fields .field > :only-child,
.ui.form .inline.field > :only-child {
  margin: 0em;
}

/* Wide */
.ui.form .inline.fields .wide.field {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
.ui.form .inline.fields .wide.field > input,
.ui.form .inline.fields .wide.field > select {
  width: 100%;
}

/*--------------------
        Sizes
---------------------*/

.ui.mini.form {
  font-size: 0.78571429rem;
}
.ui.tiny.form {
  font-size: 0.85714286rem;
}
.ui.small.form {
  font-size: 0.92857143rem;
}
.ui.form {
  font-size: 1rem;
}
.ui.large.form {
  font-size: 1.14285714rem;
}
.ui.big.form {
  font-size: 1.28571429rem;
}
.ui.huge.form {
  font-size: 1.42857143rem;
}
.ui.massive.form {
  font-size: 1.71428571rem;
}


/*******************************
         Theme Overrides
*******************************/



/*******************************
         Site Overrides
*******************************/









/*!
 * # Semantic UI 2.4.2 - Button
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */


/*******************************
            Button
*******************************/

.ui.button {
  cursor: pointer;
  display: inline-block;
  min-height: 1em;
  outline: none;
  border: none;
  vertical-align: baseline;
  background: #E0E1E2 none;
  color: rgba(0, 0, 0, 0.6);
  font-family: 'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif;
  margin: 0em 0.25em 0em 0em;
  padding: 0.78571429em 1.5em 0.78571429em;
  text-transform: none;
  text-shadow: none;
  font-weight: bold;
  line-height: 1em;
  font-style: normal;
  text-align: center;
  text-decoration: none;
  border-radius: 0.28571429rem;
  -webkit-box-shadow: 0px 0px 0px 1px transparent inset, 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
          box-shadow: 0px 0px 0px 1px transparent inset, 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  -webkit-transition: opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease, background 0.1s ease, -webkit-box-shadow 0.1s ease;
  transition: opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease, background 0.1s ease, -webkit-box-shadow 0.1s ease;
  transition: opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease, box-shadow 0.1s ease, background 0.1s ease;
  transition: opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease, box-shadow 0.1s ease, background 0.1s ease, -webkit-box-shadow 0.1s ease;
  will-change: '';
  -webkit-tap-highlight-color: transparent;
}


/*******************************
            States
*******************************/


/*--------------
      Hover
---------------*/

.ui.button:hover {
  background-color: #CACBCD;
  background-image: none;
  -webkit-box-shadow: 0px 0px 0px 1px transparent inset, 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
          box-shadow: 0px 0px 0px 1px transparent inset, 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
  color: rgba(0, 0, 0, 0.8);
}
.ui.button:hover .icon {
  opacity: 0.85;
}

/*--------------
      Focus
---------------*/

.ui.button:focus {
  background-color: #CACBCD;
  color: rgba(0, 0, 0, 0.8);
  background-image: '' !important;
  -webkit-box-shadow: '' !important;
          box-shadow: '' !important;
}
.ui.button:focus .icon {
  opacity: 0.85;
}

/*--------------
      Down
---------------*/

.ui.button:active,
.ui.active.button:active {
  background-color: #BABBBC;
  background-image: '';
  color: rgba(0, 0, 0, 0.9);
  -webkit-box-shadow: 0px 0px 0px 1px transparent inset, none;
          box-shadow: 0px 0px 0px 1px transparent inset, none;
}

/*--------------
     Active
---------------*/

.ui.active.button {
  background-color: #C0C1C2;
  background-image: none;
  -webkit-box-shadow: 0px 0px 0px 1px transparent inset;
          box-shadow: 0px 0px 0px 1px transparent inset;
  color: rgba(0, 0, 0, 0.95);
}
.ui.active.button:hover {
  background-color: #C0C1C2;
  background-image: none;
  color: rgba(0, 0, 0, 0.95);
}
.ui.active.button:active {
  background-color: #C0C1C2;
  background-image: none;
}

/*--------------
    Loading
---------------*/


/* Specificity hack */
.ui.loading.loading.loading.loading.loading.loading.button {
  position: relative;
  cursor: default;
  text-shadow: none !important;
  color: transparent !important;
  opacity: 1;
  pointer-events: auto;
  -webkit-transition: all 0s linear, opacity 0.1s ease;
  transition: all 0s linear, opacity 0.1s ease;
}
.ui.loading.button:before {
  position: absolute;
  content: '';
  top: 50%;
  left: 50%;
  margin: -0.64285714em 0em 0em -0.64285714em;
  width: 1.28571429em;
  height: 1.28571429em;
  border-radius: 500rem;
  border: 0.2em solid rgba(0, 0, 0, 0.15);
}
.ui.loading.button:after {
  position: absolute;
  content: '';
  top: 50%;
  left: 50%;
  margin: -0.64285714em 0em 0em -0.64285714em;
  width: 1.28571429em;
  height: 1.28571429em;
  -webkit-animation: button-spin 0.6s linear;
          animation: button-spin 0.6s linear;
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
  border-radius: 500rem;
  border-color: #FFFFFF transparent transparent;
  border-style: solid;
  border-width: 0.2em;
  -webkit-box-shadow: 0px 0px 0px 1px transparent;
          box-shadow: 0px 0px 0px 1px transparent;
}
.ui.labeled.icon.loading.button .icon {
  background-color: transparent;
  -webkit-box-shadow: none;
          box-shadow: none;
}
@-webkit-keyframes button-spin {
  from {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes button-spin {
  from {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.ui.basic.loading.button:not(.inverted):before {
  border-color: rgba(0, 0, 0, 0.1);
}
.ui.basic.loading.button:not(.inverted):after {
  border-top-color: #767676;
}

/*-------------------
      Disabled
--------------------*/

.ui.buttons .disabled.button,
.ui.disabled.button,
.ui.button:disabled,
.ui.disabled.button:hover,
.ui.disabled.active.button {
  cursor: default;
  opacity: 0.45 !important;
  background-image: none !important;
  -webkit-box-shadow: none !important;
          box-shadow: none !important;
  pointer-events: none !important;
}

/* Basic Group With Disabled */
.ui.basic.buttons .ui.disabled.button {
  border-color: rgba(34, 36, 38, 0.5);
}


/*******************************
             Types
*******************************/


/*-------------------
       Animated
--------------------*/

.ui.animated.button {
  position: relative;
  overflow: hidden;
  padding-right: 0em !important;
  vertical-align: middle;
  z-index: 1;
}
.ui.animated.button .content {
  will-change: transform, opacity;
}
.ui.animated.button .visible.content {
  position: relative;
  margin-right: 1.5em;
}
.ui.animated.button .hidden.content {
  position: absolute;
  width: 100%;
}

/* Horizontal */
.ui.animated.button .visible.content,
.ui.animated.button .hidden.content {
  -webkit-transition: right 0.3s ease 0s;
  transition: right 0.3s ease 0s;
}
.ui.animated.button .visible.content {
  left: auto;
  right: 0%;
}
.ui.animated.button .hidden.content {
  top: 50%;
  left: auto;
  right: -100%;
  margin-top: -0.5em;
}
.ui.animated.button:focus .visible.content,
.ui.animated.button:hover .visible.content {
  left: auto;
  right: 200%;
}
.ui.animated.button:focus .hidden.content,
.ui.animated.button:hover .hidden.content {
  left: auto;
  right: 0%;
}

/* Vertical */
.ui.vertical.animated.button .visible.content,
.ui.vertical.animated.button .hidden.content {
  -webkit-transition: top 0.3s ease, -webkit-transform 0.3s ease;
  transition: top 0.3s ease, -webkit-transform 0.3s ease;
  transition: top 0.3s ease, transform 0.3s ease;
  transition: top 0.3s ease, transform 0.3s ease, -webkit-transform 0.3s ease;
}
.ui.vertical.animated.button .visible.content {
  -webkit-transform: translateY(0%);
          transform: translateY(0%);
  right: auto;
}
.ui.vertical.animated.button .hidden.content {
  top: -50%;
  left: 0%;
  right: auto;
}
.ui.vertical.animated.button:focus .visible.content,
.ui.vertical.animated.button:hover .visible.content {
  -webkit-transform: translateY(200%);
          transform: translateY(200%);
  right: auto;
}
.ui.vertical.animated.button:focus .hidden.content,
.ui.vertical.animated.button:hover .hidden.content {
  top: 50%;
  right: auto;
}

/* Fade */
.ui.fade.animated.button .visible.content,
.ui.fade.animated.button .hidden.content {
  -webkit-transition: opacity 0.3s ease, -webkit-transform 0.3s ease;
  transition: opacity 0.3s ease, -webkit-transform 0.3s ease;
  transition: opacity 0.3s ease, transform 0.3s ease;
  transition: opacity 0.3s ease, transform 0.3s ease, -webkit-transform 0.3s ease;
}
.ui.fade.animated.button .visible.content {
  left: auto;
  right: auto;
  opacity: 1;
  -webkit-transform: scale(1);
          transform: scale(1);
}
.ui.fade.animated.button .hidden.content {
  opacity: 0;
  left: 0%;
  right: auto;
  -webkit-transform: scale(1.5);
          transform: scale(1.5);
}
.ui.fade.animated.button:focus .visible.content,
.ui.fade.animated.button:hover .visible.content {
  left: auto;
  right: auto;
  opacity: 0;
  -webkit-transform: scale(0.75);
          transform: scale(0.75);
}
.ui.fade.animated.button:focus .hidden.content,
.ui.fade.animated.button:hover .hidden.content {
  left: 0%;
  right: auto;
  opacity: 1;
  -webkit-transform: scale(1);
          transform: scale(1);
}

/*-------------------
       Inverted
--------------------*/

.ui.inverted.button {
  -webkit-box-shadow: 0px 0px 0px 2px #FFFFFF inset !important;
          box-shadow: 0px 0px 0px 2px #FFFFFF inset !important;
  background: transparent none;
  color: #FFFFFF;
  text-shadow: none !important;
}

/* Group */
.ui.inverted.buttons .button {
  margin: 0px 0px 0px -2px;
}
.ui.inverted.buttons .button:first-child {
  margin-left: 0em;
}
.ui.inverted.vertical.buttons .button {
  margin: 0px 0px -2px 0px;
}
.ui.inverted.vertical.buttons .button:first-child {
  margin-top: 0em;
}

/* States */

/* Hover */
.ui.inverted.button:hover {
  background: #FFFFFF;
  -webkit-box-shadow: 0px 0px 0px 2px #FFFFFF inset !important;
          box-shadow: 0px 0px 0px 2px #FFFFFF inset !important;
  color: rgba(0, 0, 0, 0.8);
}

/* Active / Focus */
.ui.inverted.button:focus,
.ui.inverted.button.active {
  background: #FFFFFF;
  -webkit-box-shadow: 0px 0px 0px 2px #FFFFFF inset !important;
          box-shadow: 0px 0px 0px 2px #FFFFFF inset !important;
  color: rgba(0, 0, 0, 0.8);
}

/* Active Focus */
.ui.inverted.button.active:focus {
  background: #DCDDDE;
  -webkit-box-shadow: 0px 0px 0px 2px #DCDDDE inset !important;
          box-shadow: 0px 0px 0px 2px #DCDDDE inset !important;
  color: rgba(0, 0, 0, 0.8);
}

/*-------------------
    Labeled Button
--------------------*/

.ui.labeled.button:not(.icon) {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  background: none !important;
  padding: 0px !important;
  border: none !important;
  -webkit-box-shadow: none !important;
          box-shadow: none !important;
}
.ui.labeled.button > .button {
  margin: 0px;
}
.ui.labeled.button > .label {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  margin: 0px 0px 0px -1px !important;
  padding: '';
  font-size: 1em;
  border-color: rgba(34, 36, 38, 0.15);
}

/* Tag */
.ui.labeled.button > .tag.label:before {
  width: 1.85em;
  height: 1.85em;
}

/* Right */
.ui.labeled.button:not([class*="left labeled"]) > .button {
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}
.ui.labeled.button:not([class*="left labeled"]) > .label {
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}

/* Left Side */
.ui[class*="left labeled"].button > .button {
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}
.ui[class*="left labeled"].button > .label {
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}

/*-------------------
       Social
--------------------*/


/* Facebook */
.ui.facebook.button {
  background-color: #3B5998;
  color: #FFFFFF;
  text-shadow: none;
  background-image: none;
  -webkit-box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
          box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
}
.ui.facebook.button:hover {
  background-color: #304d8a;
  color: #FFFFFF;
  text-shadow: none;
}
.ui.facebook.button:active {
  background-color: #2d4373;
  color: #FFFFFF;
  text-shadow: none;
}

/* Twitter */
.ui.twitter.button {
  background-color: #55ACEE;
  color: #FFFFFF;
  text-shadow: none;
  background-image: none;
  -webkit-box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
          box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
}
.ui.twitter.button:hover {
  background-color: #35a2f4;
  color: #FFFFFF;
  text-shadow: none;
}
.ui.twitter.button:active {
  background-color: #2795e9;
  color: #FFFFFF;
  text-shadow: none;
}

/* Google Plus */
.ui.google.plus.button {
  background-color: #DD4B39;
  color: #FFFFFF;
  text-shadow: none;
  background-image: none;
  -webkit-box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
          box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
}
.ui.google.plus.button:hover {
  background-color: #e0321c;
  color: #FFFFFF;
  text-shadow: none;
}
.ui.google.plus.button:active {
  background-color: #c23321;
  color: #FFFFFF;
  text-shadow: none;
}

/* Linked In */
.ui.linkedin.button {
  background-color: #1F88BE;
  color: #FFFFFF;
  text-shadow: none;
}
.ui.linkedin.button:hover {
  background-color: #147baf;
  color: #FFFFFF;
  text-shadow: none;
}
.ui.linkedin.button:active {
  background-color: #186992;
  color: #FFFFFF;
  text-shadow: none;
}

/* YouTube */
.ui.youtube.button {
  background-color: #FF0000;
  color: #FFFFFF;
  text-shadow: none;
  background-image: none;
  -webkit-box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
          box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
}
.ui.youtube.button:hover {
  background-color: #e60000;
  color: #FFFFFF;
  text-shadow: none;
}
.ui.youtube.button:active {
  background-color: #cc0000;
  color: #FFFFFF;
  text-shadow: none;
}

/* Instagram */
.ui.instagram.button {
  background-color: #49769C;
  color: #FFFFFF;
  text-shadow: none;
  background-image: none;
  -webkit-box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
          box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
}
.ui.instagram.button:hover {
  background-color: #3d698e;
  color: #FFFFFF;
  text-shadow: none;
}
.ui.instagram.button:active {
  background-color: #395c79;
  color: #FFFFFF;
  text-shadow: none;
}

/* Pinterest */
.ui.pinterest.button {
  background-color: #BD081C;
  color: #FFFFFF;
  text-shadow: none;
  background-image: none;
  -webkit-box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
          box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
}
.ui.pinterest.button:hover {
  background-color: #ac0013;
  color: #FFFFFF;
  text-shadow: none;
}
.ui.pinterest.button:active {
  background-color: #8c0615;
  color: #FFFFFF;
  text-shadow: none;
}

/* VK */
.ui.vk.button {
  background-color: #4D7198;
  color: #FFFFFF;
  background-image: none;
  -webkit-box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
          box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
}
.ui.vk.button:hover {
  background-color: #41648a;
  color: #FFFFFF;
}
.ui.vk.button:active {
  background-color: #3c5876;
  color: #FFFFFF;
}

/*--------------
     Icon
---------------*/

.ui.button > .icon:not(.button) {
  height: 0.85714286em;
  opacity: 0.8;
  margin: 0em 0.42857143em 0em -0.21428571em;
  -webkit-transition: opacity 0.1s ease;
  transition: opacity 0.1s ease;
  vertical-align: '';
  color: '';
}
.ui.button:not(.icon) > .icon:not(.button):not(.dropdown) {
  margin: 0em 0.42857143em 0em -0.21428571em;
}
.ui.button:not(.icon) > .right.icon:not(.button):not(.dropdown) {
  margin: 0em -0.21428571em 0em 0.42857143em;
}


/*******************************
           Variations
*******************************/


/*-------------------
       Floated
--------------------*/

.ui[class*="left floated"].buttons,
.ui[class*="left floated"].button {
  float: left;
  margin-left: 0em;
  margin-right: 0.25em;
}
.ui[class*="right floated"].buttons,
.ui[class*="right floated"].button {
  float: right;
  margin-right: 0em;
  margin-left: 0.25em;
}

/*-------------------
       Compact
--------------------*/

.ui.compact.buttons .button,
.ui.compact.button {
  padding: 0.58928571em 1.125em 0.58928571em;
}
.ui.compact.icon.buttons .button,
.ui.compact.icon.button {
  padding: 0.58928571em 0.58928571em 0.58928571em;
}
.ui.compact.labeled.icon.buttons .button,
.ui.compact.labeled.icon.button {
  padding: 0.58928571em 3.69642857em 0.58928571em;
}

/*-------------------
        Sizes
--------------------*/

.ui.mini.buttons .button,
.ui.mini.buttons .or,
.ui.mini.button {
  font-size: 0.78571429rem;
}
.ui.tiny.buttons .button,
.ui.tiny.buttons .or,
.ui.tiny.button {
  font-size: 0.85714286rem;
}
.ui.small.buttons .button,
.ui.small.buttons .or,
.ui.small.button {
  font-size: 0.92857143rem;
}
.ui.buttons .button,
.ui.buttons .or,
.ui.button {
  font-size: 1rem;
}
.ui.large.buttons .button,
.ui.large.buttons .or,
.ui.large.button {
  font-size: 1.14285714rem;
}
.ui.big.buttons .button,
.ui.big.buttons .or,
.ui.big.button {
  font-size: 1.28571429rem;
}
.ui.huge.buttons .button,
.ui.huge.buttons .or,
.ui.huge.button {
  font-size: 1.42857143rem;
}
.ui.massive.buttons .button,
.ui.massive.buttons .or,
.ui.massive.button {
  font-size: 1.71428571rem;
}

/*--------------
    Icon Only
---------------*/

.ui.icon.buttons .button,
.ui.icon.button {
  padding: 0.78571429em 0.78571429em 0.78571429em;
}
.ui.icon.buttons .button > .icon,
.ui.icon.button > .icon {
  opacity: 0.9;
  margin: 0em !important;
  vertical-align: top;
}

/*-------------------
        Basic
--------------------*/

.ui.basic.buttons .button,
.ui.basic.button {
  background: transparent none !important;
  color: rgba(0, 0, 0, 0.6) !important;
  font-weight: normal;
  border-radius: 0.28571429rem;
  text-transform: none;
  text-shadow: none !important;
  -webkit-box-shadow: 0px 0px 0px 1px rgba(34, 36, 38, 0.15) inset;
          box-shadow: 0px 0px 0px 1px rgba(34, 36, 38, 0.15) inset;
}
.ui.basic.buttons {
  -webkit-box-shadow: none;
          box-shadow: none;
  border: 1px solid rgba(34, 36, 38, 0.15);
  border-radius: 0.28571429rem;
}
.ui.basic.buttons .button {
  border-radius: 0em;
}
.ui.basic.buttons .button:hover,
.ui.basic.button:hover {
  background: #FFFFFF !important;
  color: rgba(0, 0, 0, 0.8) !important;
  -webkit-box-shadow: 0px 0px 0px 1px rgba(34, 36, 38, 0.35) inset, 0px 0px 0px 0px rgba(34, 36, 38, 0.15) inset;
          box-shadow: 0px 0px 0px 1px rgba(34, 36, 38, 0.35) inset, 0px 0px 0px 0px rgba(34, 36, 38, 0.15) inset;
}
.ui.basic.buttons .button:focus,
.ui.basic.button:focus {
  background: #FFFFFF !important;
  color: rgba(0, 0, 0, 0.8) !important;
  -webkit-box-shadow: 0px 0px 0px 1px rgba(34, 36, 38, 0.35) inset, 0px 0px 0px 0px rgba(34, 36, 38, 0.15) inset;
          box-shadow: 0px 0px 0px 1px rgba(34, 36, 38, 0.35) inset, 0px 0px 0px 0px rgba(34, 36, 38, 0.15) inset;
}
.ui.basic.buttons .button:active,
.ui.basic.button:active {
  background: #F8F8F8 !important;
  color: rgba(0, 0, 0, 0.9) !important;
  -webkit-box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.15) inset, 0px 1px 4px 0px rgba(34, 36, 38, 0.15) inset;
          box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.15) inset, 0px 1px 4px 0px rgba(34, 36, 38, 0.15) inset;
}
.ui.basic.buttons .active.button,
.ui.basic.active.button {
  background: rgba(0, 0, 0, 0.05) !important;
  -webkit-box-shadow: '' !important;
          box-shadow: '' !important;
  color: rgba(0, 0, 0, 0.95) !important;
}
.ui.basic.buttons .active.button:hover,
.ui.basic.active.button:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

/* Vertical */
.ui.basic.buttons .button:hover {
  -webkit-box-shadow: 0px 0px 0px 1px rgba(34, 36, 38, 0.35) inset, 0px 0px 0px 0px rgba(34, 36, 38, 0.15) inset inset;
          box-shadow: 0px 0px 0px 1px rgba(34, 36, 38, 0.35) inset, 0px 0px 0px 0px rgba(34, 36, 38, 0.15) inset inset;
}
.ui.basic.buttons .button:active {
  -webkit-box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.15) inset, 0px 1px 4px 0px rgba(34, 36, 38, 0.15) inset inset;
          box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.15) inset, 0px 1px 4px 0px rgba(34, 36, 38, 0.15) inset inset;
}
.ui.basic.buttons .active.button {
  -webkit-box-shadow: '' !important;
          box-shadow: '' !important;
}

/* Standard Basic Inverted */
.ui.basic.inverted.buttons .button,
.ui.basic.inverted.button {
  background-color: transparent !important;
  color: #F9FAFB !important;
  -webkit-box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
          box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
}
.ui.basic.inverted.buttons .button:hover,
.ui.basic.inverted.button:hover {
  color: #FFFFFF !important;
  -webkit-box-shadow: 0px 0px 0px 2px #ffffff inset !important;
          box-shadow: 0px 0px 0px 2px #ffffff inset !important;
}
.ui.basic.inverted.buttons .button:focus,
.ui.basic.inverted.button:focus {
  color: #FFFFFF !important;
  -webkit-box-shadow: 0px 0px 0px 2px #ffffff inset !important;
          box-shadow: 0px 0px 0px 2px #ffffff inset !important;
}
.ui.basic.inverted.buttons .button:active,
.ui.basic.inverted.button:active {
  background-color: rgba(255, 255, 255, 0.08) !important;
  color: #FFFFFF !important;
  -webkit-box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.9) inset !important;
          box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.9) inset !important;
}
.ui.basic.inverted.buttons .active.button,
.ui.basic.inverted.active.button {
  background-color: rgba(255, 255, 255, 0.08);
  color: #FFFFFF;
  text-shadow: none;
  -webkit-box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.7) inset;
          box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.7) inset;
}
.ui.basic.inverted.buttons .active.button:hover,
.ui.basic.inverted.active.button:hover {
  background-color: rgba(255, 255, 255, 0.15);
  -webkit-box-shadow: 0px 0px 0px 2px #ffffff inset !important;
          box-shadow: 0px 0px 0px 2px #ffffff inset !important;
}

/* Basic Group */
.ui.basic.buttons .button {
  border-left: 1px solid rgba(34, 36, 38, 0.15);
  -webkit-box-shadow: none;
          box-shadow: none;
}
.ui.basic.vertical.buttons .button {
  border-left: none;
}
.ui.basic.vertical.buttons .button {
  border-left-width: 0px;
  border-top: 1px solid rgba(34, 36, 38, 0.15);
}
.ui.basic.vertical.buttons .button:first-child {
  border-top-width: 0px;
}

/*--------------
  Labeled Icon
---------------*/

.ui.labeled.icon.buttons .button,
.ui.labeled.icon.button {
  position: relative;
  padding-left: 4.07142857em !important;
  padding-right: 1.5em !important;
}

/* Left Labeled */
.ui.labeled.icon.buttons > .button > .icon,
.ui.labeled.icon.button > .icon {
  position: absolute;
  height: 100%;
  line-height: 1;
  border-radius: 0px;
  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;
  text-align: center;
  margin: 0em;
  width: 2.57142857em;
  background-color: rgba(0, 0, 0, 0.05);
  color: '';
  -webkit-box-shadow: -1px 0px 0px 0px transparent inset;
          box-shadow: -1px 0px 0px 0px transparent inset;
}

/* Left Labeled */
.ui.labeled.icon.buttons > .button > .icon,
.ui.labeled.icon.button > .icon {
  top: 0em;
  left: 0em;
}

/* Right Labeled */
.ui[class*="right labeled"].icon.button {
  padding-right: 4.07142857em !important;
  padding-left: 1.5em !important;
}
.ui[class*="right labeled"].icon.button > .icon {
  left: auto;
  right: 0em;
  border-radius: 0px;
  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;
  -webkit-box-shadow: 1px 0px 0px 0px transparent inset;
          box-shadow: 1px 0px 0px 0px transparent inset;
}
.ui.labeled.icon.buttons > .button > .icon:before,
.ui.labeled.icon.button > .icon:before,
.ui.labeled.icon.buttons > .button > .icon:after,
.ui.labeled.icon.button > .icon:after {
  display: block;
  position: absolute;
  width: 100%;
  top: 50%;
  text-align: center;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
}
.ui.labeled.icon.buttons .button > .icon {
  border-radius: 0em;
}
.ui.labeled.icon.buttons .button:first-child > .icon {
  border-top-left-radius: 0.28571429rem;
  border-bottom-left-radius: 0.28571429rem;
}
.ui.labeled.icon.buttons .button:last-child > .icon {
  border-top-right-radius: 0.28571429rem;
  border-bottom-right-radius: 0.28571429rem;
}
.ui.vertical.labeled.icon.buttons .button:first-child > .icon {
  border-radius: 0em;
  border-top-left-radius: 0.28571429rem;
}
.ui.vertical.labeled.icon.buttons .button:last-child > .icon {
  border-radius: 0em;
  border-bottom-left-radius: 0.28571429rem;
}

/* Fluid Labeled */
.ui.fluid[class*="left labeled"].icon.button,
.ui.fluid[class*="right labeled"].icon.button {
  padding-left: 1.5em !important;
  padding-right: 1.5em !important;
}

/*--------------
     Toggle
---------------*/


/* Toggle (Modifies active state to give affordances) */
.ui.toggle.buttons .active.button,
.ui.buttons .button.toggle.active,
.ui.button.toggle.active {
  background-color: #21BA45 !important;
  -webkit-box-shadow: none !important;
          box-shadow: none !important;
  text-shadow: none;
  color: #FFFFFF !important;
}
.ui.button.toggle.active:hover {
  background-color: #16ab39 !important;
  text-shadow: none;
  color: #FFFFFF !important;
}

/*--------------
    Circular
---------------*/

.ui.circular.button {
  border-radius: 10em;
}
.ui.circular.button > .icon {
  width: 1em;
  vertical-align: baseline;
}

/*-------------------
      Or Buttons
--------------------*/

.ui.buttons .or {
  position: relative;
  width: 0.3em;
  height: 2.57142857em;
  z-index: 3;
}
.ui.buttons .or:before {
  position: absolute;
  text-align: center;
  border-radius: 500rem;
  content: 'or';
  top: 50%;
  left: 50%;
  background-color: #FFFFFF;
  text-shadow: none;
  margin-top: -0.89285714em;
  margin-left: -0.89285714em;
  width: 1.78571429em;
  height: 1.78571429em;
  line-height: 1.78571429em;
  color: rgba(0, 0, 0, 0.4);
  font-style: normal;
  font-weight: bold;
  -webkit-box-shadow: 0px 0px 0px 1px transparent inset;
          box-shadow: 0px 0px 0px 1px transparent inset;
}
.ui.buttons .or[data-text]:before {
  content: attr(data-text);
}

/* Fluid Or */
.ui.fluid.buttons .or {
  width: 0em !important;
}
.ui.fluid.buttons .or:after {
  display: none;
}

/*-------------------
       Attached
--------------------*/


/* Singular */
.ui.attached.button {
  position: relative;
  display: block;
  margin: 0em;
  border-radius: 0em;
  -webkit-box-shadow: 0px 0px 0px 1px rgba(34, 36, 38, 0.15) !important;
          box-shadow: 0px 0px 0px 1px rgba(34, 36, 38, 0.15) !important;
}

/* Top / Bottom */
.ui.attached.top.button {
  border-radius: 0.28571429rem 0.28571429rem 0em 0em;
}
.ui.attached.bottom.button {
  border-radius: 0em 0em 0.28571429rem 0.28571429rem;
}

/* Left / Right */
.ui.left.attached.button {
  display: inline-block;
  border-left: none;
  text-align: right;
  padding-right: 0.75em;
  border-radius: 0.28571429rem 0em 0em 0.28571429rem;
}
.ui.right.attached.button {
  display: inline-block;
  text-align: left;
  padding-left: 0.75em;
  border-radius: 0em 0.28571429rem 0.28571429rem 0em;
}

/* Plural */
.ui.attached.buttons {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  border-radius: 0em;
  width: auto !important;
  z-index: 2;
  margin-left: -1px;
  margin-right: -1px;
}
.ui.attached.buttons .button {
  margin: 0em;
}
.ui.attached.buttons .button:first-child {
  border-radius: 0em;
}
.ui.attached.buttons .button:last-child {
  border-radius: 0em;
}

/* Top / Bottom */
.ui[class*="top attached"].buttons {
  margin-bottom: -1px;
  border-radius: 0.28571429rem 0.28571429rem 0em 0em;
}
.ui[class*="top attached"].buttons .button:first-child {
  border-radius: 0.28571429rem 0em 0em 0em;
}
.ui[class*="top attached"].buttons .button:last-child {
  border-radius: 0em 0.28571429rem 0em 0em;
}
.ui[class*="bottom attached"].buttons {
  margin-top: -1px;
  border-radius: 0em 0em 0.28571429rem 0.28571429rem;
}
.ui[class*="bottom attached"].buttons .button:first-child {
  border-radius: 0em 0em 0em 0.28571429rem;
}
.ui[class*="bottom attached"].buttons .button:last-child {
  border-radius: 0em 0em 0.28571429rem 0em;
}

/* Left / Right */
.ui[class*="left attached"].buttons {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  margin-right: 0em;
  margin-left: -1px;
  border-radius: 0em 0.28571429rem 0.28571429rem 0em;
}
.ui[class*="left attached"].buttons .button:first-child {
  margin-left: -1px;
  border-radius: 0em 0.28571429rem 0em 0em;
}
.ui[class*="left attached"].buttons .button:last-child {
  margin-left: -1px;
  border-radius: 0em 0em 0.28571429rem 0em;
}
.ui[class*="right attached"].buttons {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  margin-left: 0em;
  margin-right: -1px;
  border-radius: 0.28571429rem 0em 0em 0.28571429rem;
}
.ui[class*="right attached"].buttons .button:first-child {
  margin-left: -1px;
  border-radius: 0.28571429rem 0em 0em 0em;
}
.ui[class*="right attached"].buttons .button:last-child {
  margin-left: -1px;
  border-radius: 0em 0em 0em 0.28571429rem;
}

/*-------------------
        Fluid
--------------------*/

.ui.fluid.buttons,
.ui.fluid.button {
  width: 100%;
}
.ui.fluid.button {
  display: block;
}
.ui.two.buttons {
  width: 100%;
}
.ui.two.buttons > .button {
  width: 50%;
}
.ui.three.buttons {
  width: 100%;
}
.ui.three.buttons > .button {
  width: 33.333%;
}
.ui.four.buttons {
  width: 100%;
}
.ui.four.buttons > .button {
  width: 25%;
}
.ui.five.buttons {
  width: 100%;
}
.ui.five.buttons > .button {
  width: 20%;
}
.ui.six.buttons {
  width: 100%;
}
.ui.six.buttons > .button {
  width: 16.666%;
}
.ui.seven.buttons {
  width: 100%;
}
.ui.seven.buttons > .button {
  width: 14.285%;
}
.ui.eight.buttons {
  width: 100%;
}
.ui.eight.buttons > .button {
  width: 12.5%;
}
.ui.nine.buttons {
  width: 100%;
}
.ui.nine.buttons > .button {
  width: 11.11%;
}
.ui.ten.buttons {
  width: 100%;
}
.ui.ten.buttons > .button {
  width: 10%;
}
.ui.eleven.buttons {
  width: 100%;
}
.ui.eleven.buttons > .button {
  width: 9.09%;
}
.ui.twelve.buttons {
  width: 100%;
}
.ui.twelve.buttons > .button {
  width: 8.3333%;
}

/* Fluid Vertical Buttons */
.ui.fluid.vertical.buttons,
.ui.fluid.vertical.buttons > .button {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: auto;
}
.ui.two.vertical.buttons > .button {
  height: 50%;
}
.ui.three.vertical.buttons > .button {
  height: 33.333%;
}
.ui.four.vertical.buttons > .button {
  height: 25%;
}
.ui.five.vertical.buttons > .button {
  height: 20%;
}
.ui.six.vertical.buttons > .button {
  height: 16.666%;
}
.ui.seven.vertical.buttons > .button {
  height: 14.285%;
}
.ui.eight.vertical.buttons > .button {
  height: 12.5%;
}
.ui.nine.vertical.buttons > .button {
  height: 11.11%;
}
.ui.ten.vertical.buttons > .button {
  height: 10%;
}
.ui.eleven.vertical.buttons > .button {
  height: 9.09%;
}
.ui.twelve.vertical.buttons > .button {
  height: 8.3333%;
}

/*-------------------
       Colors
--------------------*/


/*--- Black ---*/

.ui.black.buttons .button,
.ui.black.button {
  background-color: #1B1C1D;
  color: #FFFFFF;
  text-shadow: none;
  background-image: none;
}
.ui.black.button {
  -webkit-box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
          box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
}
.ui.black.buttons .button:hover,
.ui.black.button:hover {
  background-color: #27292a;
  color: #FFFFFF;
  text-shadow: none;
}
.ui.black.buttons .button:focus,
.ui.black.button:focus {
  background-color: #2f3032;
  color: #FFFFFF;
  text-shadow: none;
}
.ui.black.buttons .button:active,
.ui.black.button:active {
  background-color: #343637;
  color: #FFFFFF;
  text-shadow: none;
}
.ui.black.buttons .active.button,
.ui.black.buttons .active.button:active,
.ui.black.active.button,
.ui.black.button .active.button:active {
  background-color: #0f0f10;
  color: #FFFFFF;
  text-shadow: none;
}

/* Basic */
.ui.basic.black.buttons .button,
.ui.basic.black.button {
  -webkit-box-shadow: 0px 0px 0px 1px #1B1C1D inset !important;
          box-shadow: 0px 0px 0px 1px #1B1C1D inset !important;
  color: #1B1C1D !important;
}
.ui.basic.black.buttons .button:hover,
.ui.basic.black.button:hover {
  background: transparent !important;
  -webkit-box-shadow: 0px 0px 0px 1px #27292a inset !important;
          box-shadow: 0px 0px 0px 1px #27292a inset !important;
  color: #27292a !important;
}
.ui.basic.black.buttons .button:focus,
.ui.basic.black.button:focus {
  background: transparent !important;
  -webkit-box-shadow: 0px 0px 0px 1px #2f3032 inset !important;
          box-shadow: 0px 0px 0px 1px #2f3032 inset !important;
  color: #27292a !important;
}
.ui.basic.black.buttons .active.button,
.ui.basic.black.active.button {
  background: transparent !important;
  -webkit-box-shadow: 0px 0px 0px 1px #0f0f10 inset !important;
          box-shadow: 0px 0px 0px 1px #0f0f10 inset !important;
  color: #343637 !important;
}
.ui.basic.black.buttons .button:active,
.ui.basic.black.button:active {
  -webkit-box-shadow: 0px 0px 0px 1px #343637 inset !important;
          box-shadow: 0px 0px 0px 1px #343637 inset !important;
  color: #343637 !important;
}
.ui.buttons:not(.vertical) > .basic.black.button:not(:first-child) {
  margin-left: -1px;
}

/* Inverted */
.ui.inverted.black.buttons .button,
.ui.inverted.black.button {
  background-color: transparent;
  -webkit-box-shadow: 0px 0px 0px 2px #D4D4D5 inset !important;
          box-shadow: 0px 0px 0px 2px #D4D4D5 inset !important;
  color: #FFFFFF;
}
.ui.inverted.black.buttons .button:hover,
.ui.inverted.black.button:hover,
.ui.inverted.black.buttons .button:focus,
.ui.inverted.black.button:focus,
.ui.inverted.black.buttons .button.active,
.ui.inverted.black.button.active,
.ui.inverted.black.buttons .button:active,
.ui.inverted.black.button:active {
  -webkit-box-shadow: none !important;
          box-shadow: none !important;
  color: #FFFFFF;
}
.ui.inverted.black.buttons .button:hover,
.ui.inverted.black.button:hover {
  background-color: #000000;
}
.ui.inverted.black.buttons .button:focus,
.ui.inverted.black.button:focus {
  background-color: #000000;
}
.ui.inverted.black.buttons .active.button,
.ui.inverted.black.active.button {
  background-color: #000000;
}
.ui.inverted.black.buttons .button:active,
.ui.inverted.black.button:active {
  background-color: #000000;
}

/* Inverted Basic */
.ui.inverted.black.basic.buttons .button,
.ui.inverted.black.buttons .basic.button,
.ui.inverted.black.basic.button {
  background-color: transparent;
  -webkit-box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
          box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
  color: #FFFFFF !important;
}
.ui.inverted.black.basic.buttons .button:hover,
.ui.inverted.black.buttons .basic.button:hover,
.ui.inverted.black.basic.button:hover {
  -webkit-box-shadow: 0px 0px 0px 2px #000000 inset !important;
          box-shadow: 0px 0px 0px 2px #000000 inset !important;
  color: #FFFFFF !important;
}
.ui.inverted.black.basic.buttons .button:focus,
.ui.inverted.black.basic.buttons .button:focus,
.ui.inverted.black.basic.button:focus {
  -webkit-box-shadow: 0px 0px 0px 2px #000000 inset !important;
          box-shadow: 0px 0px 0px 2px #000000 inset !important;
  color: #545454 !important;
}
.ui.inverted.black.basic.buttons .active.button,
.ui.inverted.black.buttons .basic.active.button,
.ui.inverted.black.basic.active.button {
  -webkit-box-shadow: 0px 0px 0px 2px #000000 inset !important;
          box-shadow: 0px 0px 0px 2px #000000 inset !important;
  color: #FFFFFF !important;
}
.ui.inverted.black.basic.buttons .button:active,
.ui.inverted.black.buttons .basic.button:active,
.ui.inverted.black.basic.button:active {
  -webkit-box-shadow: 0px 0px 0px 2px #000000 inset !important;
          box-shadow: 0px 0px 0px 2px #000000 inset !important;
  color: #FFFFFF !important;
}

/*--- Grey ---*/

.ui.grey.buttons .button,
.ui.grey.button {
  background-color: #767676;
  color: #FFFFFF;
  text-shadow: none;
  background-image: none;
}
.ui.grey.button {
  -webkit-box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
          box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
}
.ui.grey.buttons .button:hover,
.ui.grey.button:hover {
  background-color: #838383;
  color: #FFFFFF;
  text-shadow: none;
}
.ui.grey.buttons .button:focus,
.ui.grey.button:focus {
  background-color: #8a8a8a;
  color: #FFFFFF;
  text-shadow: none;
}
.ui.grey.buttons .button:active,
.ui.grey.button:active {
  background-color: #909090;
  color: #FFFFFF;
  text-shadow: none;
}
.ui.grey.buttons .active.button,
.ui.grey.buttons .active.button:active,
.ui.grey.active.button,
.ui.grey.button .active.button:active {
  background-color: #696969;
  color: #FFFFFF;
  text-shadow: none;
}

/* Basic */
.ui.basic.grey.buttons .button,
.ui.basic.grey.button {
  -webkit-box-shadow: 0px 0px 0px 1px #767676 inset !important;
          box-shadow: 0px 0px 0px 1px #767676 inset !important;
  color: #767676 !important;
}
.ui.basic.grey.buttons .button:hover,
.ui.basic.grey.button:hover {
  background: transparent !important;
  -webkit-box-shadow: 0px 0px 0px 1px #838383 inset !important;
          box-shadow: 0px 0px 0px 1px #838383 inset !important;
  color: #838383 !important;
}
.ui.basic.grey.buttons .button:focus,
.ui.basic.grey.button:focus {
  background: transparent !important;
  -webkit-box-shadow: 0px 0px 0px 1px #8a8a8a inset !important;
          box-shadow: 0px 0px 0px 1px #8a8a8a inset !important;
  color: #838383 !important;
}
.ui.basic.grey.buttons .active.button,
.ui.basic.grey.active.button {
  background: transparent !important;
  -webkit-box-shadow: 0px 0px 0px 1px #696969 inset !important;
          box-shadow: 0px 0px 0px 1px #696969 inset !important;
  color: #909090 !important;
}
.ui.basic.grey.buttons .button:active,
.ui.basic.grey.button:active {
  -webkit-box-shadow: 0px 0px 0px 1px #909090 inset !important;
          box-shadow: 0px 0px 0px 1px #909090 inset !important;
  color: #909090 !important;
}
.ui.buttons:not(.vertical) > .basic.grey.button:not(:first-child) {
  margin-left: -1px;
}

/* Inverted */
.ui.inverted.grey.buttons .button,
.ui.inverted.grey.button {
  background-color: transparent;
  -webkit-box-shadow: 0px 0px 0px 2px #D4D4D5 inset !important;
          box-shadow: 0px 0px 0px 2px #D4D4D5 inset !important;
  color: #FFFFFF;
}
.ui.inverted.grey.buttons .button:hover,
.ui.inverted.grey.button:hover,
.ui.inverted.grey.buttons .button:focus,
.ui.inverted.grey.button:focus,
.ui.inverted.grey.buttons .button.active,
.ui.inverted.grey.button.active,
.ui.inverted.grey.buttons .button:active,
.ui.inverted.grey.button:active {
  -webkit-box-shadow: none !important;
          box-shadow: none !important;
  color: rgba(0, 0, 0, 0.6);
}
.ui.inverted.grey.buttons .button:hover,
.ui.inverted.grey.button:hover {
  background-color: #cfd0d2;
}
.ui.inverted.grey.buttons .button:focus,
.ui.inverted.grey.button:focus {
  background-color: #c7c9cb;
}
.ui.inverted.grey.buttons .active.button,
.ui.inverted.grey.active.button {
  background-color: #cfd0d2;
}
.ui.inverted.grey.buttons .button:active,
.ui.inverted.grey.button:active {
  background-color: #c2c4c5;
}

/* Inverted Basic */
.ui.inverted.grey.basic.buttons .button,
.ui.inverted.grey.buttons .basic.button,
.ui.inverted.grey.basic.button {
  background-color: transparent;
  -webkit-box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
          box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
  color: #FFFFFF !important;
}
.ui.inverted.grey.basic.buttons .button:hover,
.ui.inverted.grey.buttons .basic.button:hover,
.ui.inverted.grey.basic.button:hover {
  -webkit-box-shadow: 0px 0px 0px 2px #cfd0d2 inset !important;
          box-shadow: 0px 0px 0px 2px #cfd0d2 inset !important;
  color: #FFFFFF !important;
}
.ui.inverted.grey.basic.buttons .button:focus,
.ui.inverted.grey.basic.buttons .button:focus,
.ui.inverted.grey.basic.button:focus {
  -webkit-box-shadow: 0px 0px 0px 2px #c7c9cb inset !important;
          box-shadow: 0px 0px 0px 2px #c7c9cb inset !important;
  color: #DCDDDE !important;
}
.ui.inverted.grey.basic.buttons .active.button,
.ui.inverted.grey.buttons .basic.active.button,
.ui.inverted.grey.basic.active.button {
  -webkit-box-shadow: 0px 0px 0px 2px #cfd0d2 inset !important;
          box-shadow: 0px 0px 0px 2px #cfd0d2 inset !important;
  color: #FFFFFF !important;
}
.ui.inverted.grey.basic.buttons .button:active,
.ui.inverted.grey.buttons .basic.button:active,
.ui.inverted.grey.basic.button:active {
  -webkit-box-shadow: 0px 0px 0px 2px #c2c4c5 inset !important;
          box-shadow: 0px 0px 0px 2px #c2c4c5 inset !important;
  color: #FFFFFF !important;
}

/*--- Brown ---*/

.ui.brown.buttons .button,
.ui.brown.button {
  background-color: #A5673F;
  color: #FFFFFF;
  text-shadow: none;
  background-image: none;
}
.ui.brown.button {
  -webkit-box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
          box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
}
.ui.brown.buttons .button:hover,
.ui.brown.button:hover {
  background-color: #975b33;
  color: #FFFFFF;
  text-shadow: none;
}
.ui.brown.buttons .button:focus,
.ui.brown.button:focus {
  background-color: #90532b;
  color: #FFFFFF;
  text-shadow: none;
}
.ui.brown.buttons .button:active,
.ui.brown.button:active {
  background-color: #805031;
  color: #FFFFFF;
  text-shadow: none;
}
.ui.brown.buttons .active.button,
.ui.brown.buttons .active.button:active,
.ui.brown.active.button,
.ui.brown.button .active.button:active {
  background-color: #995a31;
  color: #FFFFFF;
  text-shadow: none;
}

/* Basic */
.ui.basic.brown.buttons .button,
.ui.basic.brown.button {
  -webkit-box-shadow: 0px 0px 0px 1px #A5673F inset !important;
          box-shadow: 0px 0px 0px 1px #A5673F inset !important;
  color: #A5673F !important;
}
.ui.basic.brown.buttons .button:hover,
.ui.basic.brown.button:hover {
  background: transparent !important;
  -webkit-box-shadow: 0px 0px 0px 1px #975b33 inset !important;
          box-shadow: 0px 0px 0px 1px #975b33 inset !important;
  color: #975b33 !important;
}
.ui.basic.brown.buttons .button:focus,
.ui.basic.brown.button:focus {
  background: transparent !important;
  -webkit-box-shadow: 0px 0px 0px 1px #90532b inset !important;
          box-shadow: 0px 0px 0px 1px #90532b inset !important;
  color: #975b33 !important;
}
.ui.basic.brown.buttons .active.button,
.ui.basic.brown.active.button {
  background: transparent !important;
  -webkit-box-shadow: 0px 0px 0px 1px #995a31 inset !important;
          box-shadow: 0px 0px 0px 1px #995a31 inset !important;
  color: #805031 !important;
}
.ui.basic.brown.buttons .button:active,
.ui.basic.brown.button:active {
  -webkit-box-shadow: 0px 0px 0px 1px #805031 inset !important;
          box-shadow: 0px 0px 0px 1px #805031 inset !important;
  color: #805031 !important;
}
.ui.buttons:not(.vertical) > .basic.brown.button:not(:first-child) {
  margin-left: -1px;
}

/* Inverted */
.ui.inverted.brown.buttons .button,
.ui.inverted.brown.button {
  background-color: transparent;
  -webkit-box-shadow: 0px 0px 0px 2px #D67C1C inset !important;
          box-shadow: 0px 0px 0px 2px #D67C1C inset !important;
  color: #D67C1C;
}
.ui.inverted.brown.buttons .button:hover,
.ui.inverted.brown.button:hover,
.ui.inverted.brown.buttons .button:focus,
.ui.inverted.brown.button:focus,
.ui.inverted.brown.buttons .button.active,
.ui.inverted.brown.button.active,
.ui.inverted.brown.buttons .button:active,
.ui.inverted.brown.button:active {
  -webkit-box-shadow: none !important;
          box-shadow: none !important;
  color: #FFFFFF;
}
.ui.inverted.brown.buttons .button:hover,
.ui.inverted.brown.button:hover {
  background-color: #c86f11;
}
.ui.inverted.brown.buttons .button:focus,
.ui.inverted.brown.button:focus {
  background-color: #c16808;
}
.ui.inverted.brown.buttons .active.button,
.ui.inverted.brown.active.button {
  background-color: #cc6f0d;
}
.ui.inverted.brown.buttons .button:active,
.ui.inverted.brown.button:active {
  background-color: #a96216;
}

/* Inverted Basic */
.ui.inverted.brown.basic.buttons .button,
.ui.inverted.brown.buttons .basic.button,
.ui.inverted.brown.basic.button {
  background-color: transparent;
  -webkit-box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
          box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
  color: #FFFFFF !important;
}
.ui.inverted.brown.basic.buttons .button:hover,
.ui.inverted.brown.buttons .basic.button:hover,
.ui.inverted.brown.basic.button:hover {
  -webkit-box-shadow: 0px 0px 0px 2px #c86f11 inset !important;
          box-shadow: 0px 0px 0px 2px #c86f11 inset !important;
  color: #D67C1C !important;
}
.ui.inverted.brown.basic.buttons .button:focus,
.ui.inverted.brown.basic.buttons .button:focus,
.ui.inverted.brown.basic.button:focus {
  -webkit-box-shadow: 0px 0px 0px 2px #c16808 inset !important;
          box-shadow: 0px 0px 0px 2px #c16808 inset !important;
  color: #D67C1C !important;
}
.ui.inverted.brown.basic.buttons .active.button,
.ui.inverted.brown.buttons .basic.active.button,
.ui.inverted.brown.basic.active.button {
  -webkit-box-shadow: 0px 0px 0px 2px #cc6f0d inset !important;
          box-shadow: 0px 0px 0px 2px #cc6f0d inset !important;
  color: #D67C1C !important;
}
.ui.inverted.brown.basic.buttons .button:active,
.ui.inverted.brown.buttons .basic.button:active,
.ui.inverted.brown.basic.button:active {
  -webkit-box-shadow: 0px 0px 0px 2px #a96216 inset !important;
          box-shadow: 0px 0px 0px 2px #a96216 inset !important;
  color: #D67C1C !important;
}

/*--- Blue ---*/

.ui.blue.buttons .button,
.ui.blue.button {
  background-color: #2185D0;
  color: #FFFFFF;
  text-shadow: none;
  background-image: none;
}
.ui.blue.button {
  -webkit-box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
          box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
}
.ui.blue.buttons .button:hover,
.ui.blue.button:hover {
  background-color: #1678c2;
  color: #FFFFFF;
  text-shadow: none;
}
.ui.blue.buttons .button:focus,
.ui.blue.button:focus {
  background-color: #0d71bb;
  color: #FFFFFF;
  text-shadow: none;
}
.ui.blue.buttons .button:active,
.ui.blue.button:active {
  background-color: #1a69a4;
  color: #FFFFFF;
  text-shadow: none;
}
.ui.blue.buttons .active.button,
.ui.blue.buttons .active.button:active,
.ui.blue.active.button,
.ui.blue.button .active.button:active {
  background-color: #1279c6;
  color: #FFFFFF;
  text-shadow: none;
}

/* Basic */
.ui.basic.blue.buttons .button,
.ui.basic.blue.button {
  -webkit-box-shadow: 0px 0px 0px 1px #2185D0 inset !important;
          box-shadow: 0px 0px 0px 1px #2185D0 inset !important;
  color: #2185D0 !important;
}
.ui.basic.blue.buttons .button:hover,
.ui.basic.blue.button:hover {
  background: transparent !important;
  -webkit-box-shadow: 0px 0px 0px 1px #1678c2 inset !important;
          box-shadow: 0px 0px 0px 1px #1678c2 inset !important;
  color: #1678c2 !important;
}
.ui.basic.blue.buttons .button:focus,
.ui.basic.blue.button:focus {
  background: transparent !important;
  -webkit-box-shadow: 0px 0px 0px 1px #0d71bb inset !important;
          box-shadow: 0px 0px 0px 1px #0d71bb inset !important;
  color: #1678c2 !important;
}
.ui.basic.blue.buttons .active.button,
.ui.basic.blue.active.button {
  background: transparent !important;
  -webkit-box-shadow: 0px 0px 0px 1px #1279c6 inset !important;
          box-shadow: 0px 0px 0px 1px #1279c6 inset !important;
  color: #1a69a4 !important;
}
.ui.basic.blue.buttons .button:active,
.ui.basic.blue.button:active {
  -webkit-box-shadow: 0px 0px 0px 1px #1a69a4 inset !important;
          box-shadow: 0px 0px 0px 1px #1a69a4 inset !important;
  color: #1a69a4 !important;
}
.ui.buttons:not(.vertical) > .basic.blue.button:not(:first-child) {
  margin-left: -1px;
}

/* Inverted */
.ui.inverted.blue.buttons .button,
.ui.inverted.blue.button {
  background-color: transparent;
  -webkit-box-shadow: 0px 0px 0px 2px #54C8FF inset !important;
          box-shadow: 0px 0px 0px 2px #54C8FF inset !important;
  color: #54C8FF;
}
.ui.inverted.blue.buttons .button:hover,
.ui.inverted.blue.button:hover,
.ui.inverted.blue.buttons .button:focus,
.ui.inverted.blue.button:focus,
.ui.inverted.blue.buttons .button.active,
.ui.inverted.blue.button.active,
.ui.inverted.blue.buttons .button:active,
.ui.inverted.blue.button:active {
  -webkit-box-shadow: none !important;
          box-shadow: none !important;
  color: #FFFFFF;
}
.ui.inverted.blue.buttons .button:hover,
.ui.inverted.blue.button:hover {
  background-color: #3ac0ff;
}
.ui.inverted.blue.buttons .button:focus,
.ui.inverted.blue.button:focus {
  background-color: #2bbbff;
}
.ui.inverted.blue.buttons .active.button,
.ui.inverted.blue.active.button {
  background-color: #3ac0ff;
}
.ui.inverted.blue.buttons .button:active,
.ui.inverted.blue.button:active {
  background-color: #21b8ff;
}

/* Inverted Basic */
.ui.inverted.blue.basic.buttons .button,
.ui.inverted.blue.buttons .basic.button,
.ui.inverted.blue.basic.button {
  background-color: transparent;
  -webkit-box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
          box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
  color: #FFFFFF !important;
}
.ui.inverted.blue.basic.buttons .button:hover,
.ui.inverted.blue.buttons .basic.button:hover,
.ui.inverted.blue.basic.button:hover {
  -webkit-box-shadow: 0px 0px 0px 2px #3ac0ff inset !important;
          box-shadow: 0px 0px 0px 2px #3ac0ff inset !important;
  color: #54C8FF !important;
}
.ui.inverted.blue.basic.buttons .button:focus,
.ui.inverted.blue.basic.buttons .button:focus,
.ui.inverted.blue.basic.button:focus {
  -webkit-box-shadow: 0px 0px 0px 2px #2bbbff inset !important;
          box-shadow: 0px 0px 0px 2px #2bbbff inset !important;
  color: #54C8FF !important;
}
.ui.inverted.blue.basic.buttons .active.button,
.ui.inverted.blue.buttons .basic.active.button,
.ui.inverted.blue.basic.active.button {
  -webkit-box-shadow: 0px 0px 0px 2px #3ac0ff inset !important;
          box-shadow: 0px 0px 0px 2px #3ac0ff inset !important;
  color: #54C8FF !important;
}
.ui.inverted.blue.basic.buttons .button:active,
.ui.inverted.blue.buttons .basic.button:active,
.ui.inverted.blue.basic.button:active {
  -webkit-box-shadow: 0px 0px 0px 2px #21b8ff inset !important;
          box-shadow: 0px 0px 0px 2px #21b8ff inset !important;
  color: #54C8FF !important;
}

/*--- Green ---*/

.ui.green.buttons .button,
.ui.green.button {
  background-color: #21BA45;
  color: #FFFFFF;
  text-shadow: none;
  background-image: none;
}
.ui.green.button {
  -webkit-box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
          box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
}
.ui.green.buttons .button:hover,
.ui.green.button:hover {
  background-color: #16ab39;
  color: #FFFFFF;
  text-shadow: none;
}
.ui.green.buttons .button:focus,
.ui.green.button:focus {
  background-color: #0ea432;
  color: #FFFFFF;
  text-shadow: none;
}
.ui.green.buttons .button:active,
.ui.green.button:active {
  background-color: #198f35;
  color: #FFFFFF;
  text-shadow: none;
}
.ui.green.buttons .active.button,
.ui.green.buttons .active.button:active,
.ui.green.active.button,
.ui.green.button .active.button:active {
  background-color: #13ae38;
  color: #FFFFFF;
  text-shadow: none;
}

/* Basic */
.ui.basic.green.buttons .button,
.ui.basic.green.button {
  -webkit-box-shadow: 0px 0px 0px 1px #21BA45 inset !important;
          box-shadow: 0px 0px 0px 1px #21BA45 inset !important;
  color: #21BA45 !important;
}
.ui.basic.green.buttons .button:hover,
.ui.basic.green.button:hover {
  background: transparent !important;
  -webkit-box-shadow: 0px 0px 0px 1px #16ab39 inset !important;
          box-shadow: 0px 0px 0px 1px #16ab39 inset !important;
  color: #16ab39 !important;
}
.ui.basic.green.buttons .button:focus,
.ui.basic.green.button:focus {
  background: transparent !important;
  -webkit-box-shadow: 0px 0px 0px 1px #0ea432 inset !important;
          box-shadow: 0px 0px 0px 1px #0ea432 inset !important;
  color: #16ab39 !important;
}
.ui.basic.green.buttons .active.button,
.ui.basic.green.active.button {
  background: transparent !important;
  -webkit-box-shadow: 0px 0px 0px 1px #13ae38 inset !important;
          box-shadow: 0px 0px 0px 1px #13ae38 inset !important;
  color: #198f35 !important;
}
.ui.basic.green.buttons .button:active,
.ui.basic.green.button:active {
  -webkit-box-shadow: 0px 0px 0px 1px #198f35 inset !important;
          box-shadow: 0px 0px 0px 1px #198f35 inset !important;
  color: #198f35 !important;
}
.ui.buttons:not(.vertical) > .basic.green.button:not(:first-child) {
  margin-left: -1px;
}

/* Inverted */
.ui.inverted.green.buttons .button,
.ui.inverted.green.button {
  background-color: transparent;
  -webkit-box-shadow: 0px 0px 0px 2px #2ECC40 inset !important;
          box-shadow: 0px 0px 0px 2px #2ECC40 inset !important;
  color: #2ECC40;
}
.ui.inverted.green.buttons .button:hover,
.ui.inverted.green.button:hover,
.ui.inverted.green.buttons .button:focus,
.ui.inverted.green.button:focus,
.ui.inverted.green.buttons .button.active,
.ui.inverted.green.button.active,
.ui.inverted.green.buttons .button:active,
.ui.inverted.green.button:active {
  -webkit-box-shadow: none !important;
          box-shadow: none !important;
  color: #FFFFFF;
}
.ui.inverted.green.buttons .button:hover,
.ui.inverted.green.button:hover {
  background-color: #22be34;
}
.ui.inverted.green.buttons .button:focus,
.ui.inverted.green.button:focus {
  background-color: #19b82b;
}
.ui.inverted.green.buttons .active.button,
.ui.inverted.green.active.button {
  background-color: #1fc231;
}
.ui.inverted.green.buttons .button:active,
.ui.inverted.green.button:active {
  background-color: #25a233;
}

/* Inverted Basic */
.ui.inverted.green.basic.buttons .button,
.ui.inverted.green.buttons .basic.button,
.ui.inverted.green.basic.button {
  background-color: transparent;
  -webkit-box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
          box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
  color: #FFFFFF !important;
}
.ui.inverted.green.basic.buttons .button:hover,
.ui.inverted.green.buttons .basic.button:hover,
.ui.inverted.green.basic.button:hover {
  -webkit-box-shadow: 0px 0px 0px 2px #22be34 inset !important;
          box-shadow: 0px 0px 0px 2px #22be34 inset !important;
  color: #2ECC40 !important;
}
.ui.inverted.green.basic.buttons .button:focus,
.ui.inverted.green.basic.buttons .button:focus,
.ui.inverted.green.basic.button:focus {
  -webkit-box-shadow: 0px 0px 0px 2px #19b82b inset !important;
          box-shadow: 0px 0px 0px 2px #19b82b inset !important;
  color: #2ECC40 !important;
}
.ui.inverted.green.basic.buttons .active.button,
.ui.inverted.green.buttons .basic.active.button,
.ui.inverted.green.basic.active.button {
  -webkit-box-shadow: 0px 0px 0px 2px #1fc231 inset !important;
          box-shadow: 0px 0px 0px 2px #1fc231 inset !important;
  color: #2ECC40 !important;
}
.ui.inverted.green.basic.buttons .button:active,
.ui.inverted.green.buttons .basic.button:active,
.ui.inverted.green.basic.button:active {
  -webkit-box-shadow: 0px 0px 0px 2px #25a233 inset !important;
          box-shadow: 0px 0px 0px 2px #25a233 inset !important;
  color: #2ECC40 !important;
}

/*--- Orange ---*/

.ui.orange.buttons .button,
.ui.orange.button {
  background-color: #F2711C;
  color: #FFFFFF;
  text-shadow: none;
  background-image: none;
}
.ui.orange.button {
  -webkit-box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
          box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
}
.ui.orange.buttons .button:hover,
.ui.orange.button:hover {
  background-color: #f26202;
  color: #FFFFFF;
  text-shadow: none;
}
.ui.orange.buttons .button:focus,
.ui.orange.button:focus {
  background-color: #e55b00;
  color: #FFFFFF;
  text-shadow: none;
}
.ui.orange.buttons .button:active,
.ui.orange.button:active {
  background-color: #cf590c;
  color: #FFFFFF;
  text-shadow: none;
}
.ui.orange.buttons .active.button,
.ui.orange.buttons .active.button:active,
.ui.orange.active.button,
.ui.orange.button .active.button:active {
  background-color: #f56100;
  color: #FFFFFF;
  text-shadow: none;
}

/* Basic */
.ui.basic.orange.buttons .button,
.ui.basic.orange.button {
  -webkit-box-shadow: 0px 0px 0px 1px #F2711C inset !important;
          box-shadow: 0px 0px 0px 1px #F2711C inset !important;
  color: #F2711C !important;
}
.ui.basic.orange.buttons .button:hover,
.ui.basic.orange.button:hover {
  background: transparent !important;
  -webkit-box-shadow: 0px 0px 0px 1px #f26202 inset !important;
          box-shadow: 0px 0px 0px 1px #f26202 inset !important;
  color: #f26202 !important;
}
.ui.basic.orange.buttons .button:focus,
.ui.basic.orange.button:focus {
  background: transparent !important;
  -webkit-box-shadow: 0px 0px 0px 1px #e55b00 inset !important;
          box-shadow: 0px 0px 0px 1px #e55b00 inset !important;
  color: #f26202 !important;
}
.ui.basic.orange.buttons .active.button,
.ui.basic.orange.active.button {
  background: transparent !important;
  -webkit-box-shadow: 0px 0px 0px 1px #f56100 inset !important;
          box-shadow: 0px 0px 0px 1px #f56100 inset !important;
  color: #cf590c !important;
}
.ui.basic.orange.buttons .button:active,
.ui.basic.orange.button:active {
  -webkit-box-shadow: 0px 0px 0px 1px #cf590c inset !important;
          box-shadow: 0px 0px 0px 1px #cf590c inset !important;
  color: #cf590c !important;
}
.ui.buttons:not(.vertical) > .basic.orange.button:not(:first-child) {
  margin-left: -1px;
}

/* Inverted */
.ui.inverted.orange.buttons .button,
.ui.inverted.orange.button {
  background-color: transparent;
  -webkit-box-shadow: 0px 0px 0px 2px #FF851B inset !important;
          box-shadow: 0px 0px 0px 2px #FF851B inset !important;
  color: #FF851B;
}
.ui.inverted.orange.buttons .button:hover,
.ui.inverted.orange.button:hover,
.ui.inverted.orange.buttons .button:focus,
.ui.inverted.orange.button:focus,
.ui.inverted.orange.buttons .button.active,
.ui.inverted.orange.button.active,
.ui.inverted.orange.buttons .button:active,
.ui.inverted.orange.button:active {
  -webkit-box-shadow: none !important;
          box-shadow: none !important;
  color: #FFFFFF;
}
.ui.inverted.orange.buttons .button:hover,
.ui.inverted.orange.button:hover {
  background-color: #ff7701;
}
.ui.inverted.orange.buttons .button:focus,
.ui.inverted.orange.button:focus {
  background-color: #f17000;
}
.ui.inverted.orange.buttons .active.button,
.ui.inverted.orange.active.button {
  background-color: #ff7701;
}
.ui.inverted.orange.buttons .button:active,
.ui.inverted.orange.button:active {
  background-color: #e76b00;
}

/* Inverted Basic */
.ui.inverted.orange.basic.buttons .button,
.ui.inverted.orange.buttons .basic.button,
.ui.inverted.orange.basic.button {
  background-color: transparent;
  -webkit-box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
          box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
  color: #FFFFFF !important;
}
.ui.inverted.orange.basic.buttons .button:hover,
.ui.inverted.orange.buttons .basic.button:hover,
.ui.inverted.orange.basic.button:hover {
  -webkit-box-shadow: 0px 0px 0px 2px #ff7701 inset !important;
          box-shadow: 0px 0px 0px 2px #ff7701 inset !important;
  color: #FF851B !important;
}
.ui.inverted.orange.basic.buttons .button:focus,
.ui.inverted.orange.basic.buttons .button:focus,
.ui.inverted.orange.basic.button:focus {
  -webkit-box-shadow: 0px 0px 0px 2px #f17000 inset !important;
          box-shadow: 0px 0px 0px 2px #f17000 inset !important;
  color: #FF851B !important;
}
.ui.inverted.orange.basic.buttons .active.button,
.ui.inverted.orange.buttons .basic.active.button,
.ui.inverted.orange.basic.active.button {
  -webkit-box-shadow: 0px 0px 0px 2px #ff7701 inset !important;
          box-shadow: 0px 0px 0px 2px #ff7701 inset !important;
  color: #FF851B !important;
}
.ui.inverted.orange.basic.buttons .button:active,
.ui.inverted.orange.buttons .basic.button:active,
.ui.inverted.orange.basic.button:active {
  -webkit-box-shadow: 0px 0px 0px 2px #e76b00 inset !important;
          box-shadow: 0px 0px 0px 2px #e76b00 inset !important;
  color: #FF851B !important;
}

/*--- Pink ---*/

.ui.pink.buttons .button,
.ui.pink.button {
  background-color: #E03997;
  color: #FFFFFF;
  text-shadow: none;
  background-image: none;
}
.ui.pink.button {
  -webkit-box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
          box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
}
.ui.pink.buttons .button:hover,
.ui.pink.button:hover {
  background-color: #e61a8d;
  color: #FFFFFF;
  text-shadow: none;
}
.ui.pink.buttons .button:focus,
.ui.pink.button:focus {
  background-color: #e10f85;
  color: #FFFFFF;
  text-shadow: none;
}
.ui.pink.buttons .button:active,
.ui.pink.button:active {
  background-color: #c71f7e;
  color: #FFFFFF;
  text-shadow: none;
}
.ui.pink.buttons .active.button,
.ui.pink.buttons .active.button:active,
.ui.pink.active.button,
.ui.pink.button .active.button:active {
  background-color: #ea158d;
  color: #FFFFFF;
  text-shadow: none;
}

/* Basic */
.ui.basic.pink.buttons .button,
.ui.basic.pink.button {
  -webkit-box-shadow: 0px 0px 0px 1px #E03997 inset !important;
          box-shadow: 0px 0px 0px 1px #E03997 inset !important;
  color: #E03997 !important;
}
.ui.basic.pink.buttons .button:hover,
.ui.basic.pink.button:hover {
  background: transparent !important;
  -webkit-box-shadow: 0px 0px 0px 1px #e61a8d inset !important;
          box-shadow: 0px 0px 0px 1px #e61a8d inset !important;
  color: #e61a8d !important;
}
.ui.basic.pink.buttons .button:focus,
.ui.basic.pink.button:focus {
  background: transparent !important;
  -webkit-box-shadow: 0px 0px 0px 1px #e10f85 inset !important;
          box-shadow: 0px 0px 0px 1px #e10f85 inset !important;
  color: #e61a8d !important;
}
.ui.basic.pink.buttons .active.button,
.ui.basic.pink.active.button {
  background: transparent !important;
  -webkit-box-shadow: 0px 0px 0px 1px #ea158d inset !important;
          box-shadow: 0px 0px 0px 1px #ea158d inset !important;
  color: #c71f7e !important;
}
.ui.basic.pink.buttons .button:active,
.ui.basic.pink.button:active {
  -webkit-box-shadow: 0px 0px 0px 1px #c71f7e inset !important;
          box-shadow: 0px 0px 0px 1px #c71f7e inset !important;
  color: #c71f7e !important;
}
.ui.buttons:not(.vertical) > .basic.pink.button:not(:first-child) {
  margin-left: -1px;
}

/* Inverted */
.ui.inverted.pink.buttons .button,
.ui.inverted.pink.button {
  background-color: transparent;
  -webkit-box-shadow: 0px 0px 0px 2px #FF8EDF inset !important;
          box-shadow: 0px 0px 0px 2px #FF8EDF inset !important;
  color: #FF8EDF;
}
.ui.inverted.pink.buttons .button:hover,
.ui.inverted.pink.button:hover,
.ui.inverted.pink.buttons .button:focus,
.ui.inverted.pink.button:focus,
.ui.inverted.pink.buttons .button.active,
.ui.inverted.pink.button.active,
.ui.inverted.pink.buttons .button:active,
.ui.inverted.pink.button:active {
  -webkit-box-shadow: none !important;
          box-shadow: none !important;
  color: #FFFFFF;
}
.ui.inverted.pink.buttons .button:hover,
.ui.inverted.pink.button:hover {
  background-color: #ff74d8;
}
.ui.inverted.pink.buttons .button:focus,
.ui.inverted.pink.button:focus {
  background-color: #ff65d3;
}
.ui.inverted.pink.buttons .active.button,
.ui.inverted.pink.active.button {
  background-color: #ff74d8;
}
.ui.inverted.pink.buttons .button:active,
.ui.inverted.pink.button:active {
  background-color: #ff5bd1;
}

/* Inverted Basic */
.ui.inverted.pink.basic.buttons .button,
.ui.inverted.pink.buttons .basic.button,
.ui.inverted.pink.basic.button {
  background-color: transparent;
  -webkit-box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
          box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
  color: #FFFFFF !important;
}
.ui.inverted.pink.basic.buttons .button:hover,
.ui.inverted.pink.buttons .basic.button:hover,
.ui.inverted.pink.basic.button:hover {
  -webkit-box-shadow: 0px 0px 0px 2px #ff74d8 inset !important;
          box-shadow: 0px 0px 0px 2px #ff74d8 inset !important;
  color: #FF8EDF !important;
}
.ui.inverted.pink.basic.buttons .button:focus,
.ui.inverted.pink.basic.buttons .button:focus,
.ui.inverted.pink.basic.button:focus {
  -webkit-box-shadow: 0px 0px 0px 2px #ff65d3 inset !important;
          box-shadow: 0px 0px 0px 2px #ff65d3 inset !important;
  color: #FF8EDF !important;
}
.ui.inverted.pink.basic.buttons .active.button,
.ui.inverted.pink.buttons .basic.active.button,
.ui.inverted.pink.basic.active.button {
  -webkit-box-shadow: 0px 0px 0px 2px #ff74d8 inset !important;
          box-shadow: 0px 0px 0px 2px #ff74d8 inset !important;
  color: #FF8EDF !important;
}
.ui.inverted.pink.basic.buttons .button:active,
.ui.inverted.pink.buttons .basic.button:active,
.ui.inverted.pink.basic.button:active {
  -webkit-box-shadow: 0px 0px 0px 2px #ff5bd1 inset !important;
          box-shadow: 0px 0px 0px 2px #ff5bd1 inset !important;
  color: #FF8EDF !important;
}

/*--- Violet ---*/

.ui.violet.buttons .button,
.ui.violet.button {
  background-color: #6435C9;
  color: #FFFFFF;
  text-shadow: none;
  background-image: none;
}
.ui.violet.button {
  -webkit-box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
          box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
}
.ui.violet.buttons .button:hover,
.ui.violet.button:hover {
  background-color: #5829bb;
  color: #FFFFFF;
  text-shadow: none;
}
.ui.violet.buttons .button:focus,
.ui.violet.button:focus {
  background-color: #4f20b5;
  color: #FFFFFF;
  text-shadow: none;
}
.ui.violet.buttons .button:active,
.ui.violet.button:active {
  background-color: #502aa1;
  color: #FFFFFF;
  text-shadow: none;
}
.ui.violet.buttons .active.button,
.ui.violet.buttons .active.button:active,
.ui.violet.active.button,
.ui.violet.button .active.button:active {
  background-color: #5626bf;
  color: #FFFFFF;
  text-shadow: none;
}

/* Basic */
.ui.basic.violet.buttons .button,
.ui.basic.violet.button {
  -webkit-box-shadow: 0px 0px 0px 1px #6435C9 inset !important;
          box-shadow: 0px 0px 0px 1px #6435C9 inset !important;
  color: #6435C9 !important;
}
.ui.basic.violet.buttons .button:hover,
.ui.basic.violet.button:hover {
  background: transparent !important;
  -webkit-box-shadow: 0px 0px 0px 1px #5829bb inset !important;
          box-shadow: 0px 0px 0px 1px #5829bb inset !important;
  color: #5829bb !important;
}
.ui.basic.violet.buttons .button:focus,
.ui.basic.violet.button:focus {
  background: transparent !important;
  -webkit-box-shadow: 0px 0px 0px 1px #4f20b5 inset !important;
          box-shadow: 0px 0px 0px 1px #4f20b5 inset !important;
  color: #5829bb !important;
}
.ui.basic.violet.buttons .active.button,
.ui.basic.violet.active.button {
  background: transparent !important;
  -webkit-box-shadow: 0px 0px 0px 1px #5626bf inset !important;
          box-shadow: 0px 0px 0px 1px #5626bf inset !important;
  color: #502aa1 !important;
}
.ui.basic.violet.buttons .button:active,
.ui.basic.violet.button:active {
  -webkit-box-shadow: 0px 0px 0px 1px #502aa1 inset !important;
          box-shadow: 0px 0px 0px 1px #502aa1 inset !important;
  color: #502aa1 !important;
}
.ui.buttons:not(.vertical) > .basic.violet.button:not(:first-child) {
  margin-left: -1px;
}

/* Inverted */
.ui.inverted.violet.buttons .button,
.ui.inverted.violet.button {
  background-color: transparent;
  -webkit-box-shadow: 0px 0px 0px 2px #A291FB inset !important;
          box-shadow: 0px 0px 0px 2px #A291FB inset !important;
  color: #A291FB;
}
.ui.inverted.violet.buttons .button:hover,
.ui.inverted.violet.button:hover,
.ui.inverted.violet.buttons .button:focus,
.ui.inverted.violet.button:focus,
.ui.inverted.violet.buttons .button.active,
.ui.inverted.violet.button.active,
.ui.inverted.violet.buttons .button:active,
.ui.inverted.violet.button:active {
  -webkit-box-shadow: none !important;
          box-shadow: none !important;
  color: #FFFFFF;
}
.ui.inverted.violet.buttons .button:hover,
.ui.inverted.violet.button:hover {
  background-color: #8a73ff;
}
.ui.inverted.violet.buttons .button:focus,
.ui.inverted.violet.button:focus {
  background-color: #7d64ff;
}
.ui.inverted.violet.buttons .active.button,
.ui.inverted.violet.active.button {
  background-color: #8a73ff;
}
.ui.inverted.violet.buttons .button:active,
.ui.inverted.violet.button:active {
  background-color: #7860f9;
}

/* Inverted Basic */
.ui.inverted.violet.basic.buttons .button,
.ui.inverted.violet.buttons .basic.button,
.ui.inverted.violet.basic.button {
  background-color: transparent;
  -webkit-box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
          box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
  color: #FFFFFF !important;
}
.ui.inverted.violet.basic.buttons .button:hover,
.ui.inverted.violet.buttons .basic.button:hover,
.ui.inverted.violet.basic.button:hover {
  -webkit-box-shadow: 0px 0px 0px 2px #8a73ff inset !important;
          box-shadow: 0px 0px 0px 2px #8a73ff inset !important;
  color: #A291FB !important;
}
.ui.inverted.violet.basic.buttons .button:focus,
.ui.inverted.violet.basic.buttons .button:focus,
.ui.inverted.violet.basic.button:focus {
  -webkit-box-shadow: 0px 0px 0px 2px #7d64ff inset !important;
          box-shadow: 0px 0px 0px 2px #7d64ff inset !important;
  color: #A291FB !important;
}
.ui.inverted.violet.basic.buttons .active.button,
.ui.inverted.violet.buttons .basic.active.button,
.ui.inverted.violet.basic.active.button {
  -webkit-box-shadow: 0px 0px 0px 2px #8a73ff inset !important;
          box-shadow: 0px 0px 0px 2px #8a73ff inset !important;
  color: #A291FB !important;
}
.ui.inverted.violet.basic.buttons .button:active,
.ui.inverted.violet.buttons .basic.button:active,
.ui.inverted.violet.basic.button:active {
  -webkit-box-shadow: 0px 0px 0px 2px #7860f9 inset !important;
          box-shadow: 0px 0px 0px 2px #7860f9 inset !important;
  color: #A291FB !important;
}

/*--- Purple ---*/

.ui.purple.buttons .button,
.ui.purple.button {
  background-color: #A333C8;
  color: #FFFFFF;
  text-shadow: none;
  background-image: none;
}
.ui.purple.button {
  -webkit-box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
          box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
}
.ui.purple.buttons .button:hover,
.ui.purple.button:hover {
  background-color: #9627ba;
  color: #FFFFFF;
  text-shadow: none;
}
.ui.purple.buttons .button:focus,
.ui.purple.button:focus {
  background-color: #8f1eb4;
  color: #FFFFFF;
  text-shadow: none;
}
.ui.purple.buttons .button:active,
.ui.purple.button:active {
  background-color: #82299f;
  color: #FFFFFF;
  text-shadow: none;
}
.ui.purple.buttons .active.button,
.ui.purple.buttons .active.button:active,
.ui.purple.active.button,
.ui.purple.button .active.button:active {
  background-color: #9724be;
  color: #FFFFFF;
  text-shadow: none;
}

/* Basic */
.ui.basic.purple.buttons .button,
.ui.basic.purple.button {
  -webkit-box-shadow: 0px 0px 0px 1px #A333C8 inset !important;
          box-shadow: 0px 0px 0px 1px #A333C8 inset !important;
  color: #A333C8 !important;
}
.ui.basic.purple.buttons .button:hover,
.ui.basic.purple.button:hover {
  background: transparent !important;
  -webkit-box-shadow: 0px 0px 0px 1px #9627ba inset !important;
          box-shadow: 0px 0px 0px 1px #9627ba inset !important;
  color: #9627ba !important;
}
.ui.basic.purple.buttons .button:focus,
.ui.basic.purple.button:focus {
  background: transparent !important;
  -webkit-box-shadow: 0px 0px 0px 1px #8f1eb4 inset !important;
          box-shadow: 0px 0px 0px 1px #8f1eb4 inset !important;
  color: #9627ba !important;
}
.ui.basic.purple.buttons .active.button,
.ui.basic.purple.active.button {
  background: transparent !important;
  -webkit-box-shadow: 0px 0px 0px 1px #9724be inset !important;
          box-shadow: 0px 0px 0px 1px #9724be inset !important;
  color: #82299f !important;
}
.ui.basic.purple.buttons .button:active,
.ui.basic.purple.button:active {
  -webkit-box-shadow: 0px 0px 0px 1px #82299f inset !important;
          box-shadow: 0px 0px 0px 1px #82299f inset !important;
  color: #82299f !important;
}
.ui.buttons:not(.vertical) > .basic.purple.button:not(:first-child) {
  margin-left: -1px;
}

/* Inverted */
.ui.inverted.purple.buttons .button,
.ui.inverted.purple.button {
  background-color: transparent;
  -webkit-box-shadow: 0px 0px 0px 2px #DC73FF inset !important;
          box-shadow: 0px 0px 0px 2px #DC73FF inset !important;
  color: #DC73FF;
}
.ui.inverted.purple.buttons .button:hover,
.ui.inverted.purple.button:hover,
.ui.inverted.purple.buttons .button:focus,
.ui.inverted.purple.button:focus,
.ui.inverted.purple.buttons .button.active,
.ui.inverted.purple.button.active,
.ui.inverted.purple.buttons .button:active,
.ui.inverted.purple.button:active {
  -webkit-box-shadow: none !important;
          box-shadow: none !important;
  color: #FFFFFF;
}
.ui.inverted.purple.buttons .button:hover,
.ui.inverted.purple.button:hover {
  background-color: #d65aff;
}
.ui.inverted.purple.buttons .button:focus,
.ui.inverted.purple.button:focus {
  background-color: #d24aff;
}
.ui.inverted.purple.buttons .active.button,
.ui.inverted.purple.active.button {
  background-color: #d65aff;
}
.ui.inverted.purple.buttons .button:active,
.ui.inverted.purple.button:active {
  background-color: #cf40ff;
}

/* Inverted Basic */
.ui.inverted.purple.basic.buttons .button,
.ui.inverted.purple.buttons .basic.button,
.ui.inverted.purple.basic.button {
  background-color: transparent;
  -webkit-box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
          box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
  color: #FFFFFF !important;
}
.ui.inverted.purple.basic.buttons .button:hover,
.ui.inverted.purple.buttons .basic.button:hover,
.ui.inverted.purple.basic.button:hover {
  -webkit-box-shadow: 0px 0px 0px 2px #d65aff inset !important;
          box-shadow: 0px 0px 0px 2px #d65aff inset !important;
  color: #DC73FF !important;
}
.ui.inverted.purple.basic.buttons .button:focus,
.ui.inverted.purple.basic.buttons .button:focus,
.ui.inverted.purple.basic.button:focus {
  -webkit-box-shadow: 0px 0px 0px 2px #d24aff inset !important;
          box-shadow: 0px 0px 0px 2px #d24aff inset !important;
  color: #DC73FF !important;
}
.ui.inverted.purple.basic.buttons .active.button,
.ui.inverted.purple.buttons .basic.active.button,
.ui.inverted.purple.basic.active.button {
  -webkit-box-shadow: 0px 0px 0px 2px #d65aff inset !important;
          box-shadow: 0px 0px 0px 2px #d65aff inset !important;
  color: #DC73FF !important;
}
.ui.inverted.purple.basic.buttons .button:active,
.ui.inverted.purple.buttons .basic.button:active,
.ui.inverted.purple.basic.button:active {
  -webkit-box-shadow: 0px 0px 0px 2px #cf40ff inset !important;
          box-shadow: 0px 0px 0px 2px #cf40ff inset !important;
  color: #DC73FF !important;
}

/*--- Red ---*/

.ui.red.buttons .button,
.ui.red.button {
  background-color: #DB2828;
  color: #FFFFFF;
  text-shadow: none;
  background-image: none;
}
.ui.red.button {
  -webkit-box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
          box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
}
.ui.red.buttons .button:hover,
.ui.red.button:hover {
  background-color: #d01919;
  color: #FFFFFF;
  text-shadow: none;
}
.ui.red.buttons .button:focus,
.ui.red.button:focus {
  background-color: #ca1010;
  color: #FFFFFF;
  text-shadow: none;
}
.ui.red.buttons .button:active,
.ui.red.button:active {
  background-color: #b21e1e;
  color: #FFFFFF;
  text-shadow: none;
}
.ui.red.buttons .active.button,
.ui.red.buttons .active.button:active,
.ui.red.active.button,
.ui.red.button .active.button:active {
  background-color: #d41515;
  color: #FFFFFF;
  text-shadow: none;
}

/* Basic */
.ui.basic.red.buttons .button,
.ui.basic.red.button {
  -webkit-box-shadow: 0px 0px 0px 1px #DB2828 inset !important;
          box-shadow: 0px 0px 0px 1px #DB2828 inset !important;
  color: #DB2828 !important;
}
.ui.basic.red.buttons .button:hover,
.ui.basic.red.button:hover {
  background: transparent !important;
  -webkit-box-shadow: 0px 0px 0px 1px #d01919 inset !important;
          box-shadow: 0px 0px 0px 1px #d01919 inset !important;
  color: #d01919 !important;
}
.ui.basic.red.buttons .button:focus,
.ui.basic.red.button:focus {
  background: transparent !important;
  -webkit-box-shadow: 0px 0px 0px 1px #ca1010 inset !important;
          box-shadow: 0px 0px 0px 1px #ca1010 inset !important;
  color: #d01919 !important;
}
.ui.basic.red.buttons .active.button,
.ui.basic.red.active.button {
  background: transparent !important;
  -webkit-box-shadow: 0px 0px 0px 1px #d41515 inset !important;
          box-shadow: 0px 0px 0px 1px #d41515 inset !important;
  color: #b21e1e !important;
}
.ui.basic.red.buttons .button:active,
.ui.basic.red.button:active {
  -webkit-box-shadow: 0px 0px 0px 1px #b21e1e inset !important;
          box-shadow: 0px 0px 0px 1px #b21e1e inset !important;
  color: #b21e1e !important;
}
.ui.buttons:not(.vertical) > .basic.red.button:not(:first-child) {
  margin-left: -1px;
}

/* Inverted */
.ui.inverted.red.buttons .button,
.ui.inverted.red.button {
  background-color: transparent;
  -webkit-box-shadow: 0px 0px 0px 2px #FF695E inset !important;
          box-shadow: 0px 0px 0px 2px #FF695E inset !important;
  color: #FF695E;
}
.ui.inverted.red.buttons .button:hover,
.ui.inverted.red.button:hover,
.ui.inverted.red.buttons .button:focus,
.ui.inverted.red.button:focus,
.ui.inverted.red.buttons .button.active,
.ui.inverted.red.button.active,
.ui.inverted.red.buttons .button:active,
.ui.inverted.red.button:active {
  -webkit-box-shadow: none !important;
          box-shadow: none !important;
  color: #FFFFFF;
}
.ui.inverted.red.buttons .button:hover,
.ui.inverted.red.button:hover {
  background-color: #ff5144;
}
.ui.inverted.red.buttons .button:focus,
.ui.inverted.red.button:focus {
  background-color: #ff4335;
}
.ui.inverted.red.buttons .active.button,
.ui.inverted.red.active.button {
  background-color: #ff5144;
}
.ui.inverted.red.buttons .button:active,
.ui.inverted.red.button:active {
  background-color: #ff392b;
}

/* Inverted Basic */
.ui.inverted.red.basic.buttons .button,
.ui.inverted.red.buttons .basic.button,
.ui.inverted.red.basic.button {
  background-color: transparent;
  -webkit-box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
          box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
  color: #FFFFFF !important;
}
.ui.inverted.red.basic.buttons .button:hover,
.ui.inverted.red.buttons .basic.button:hover,
.ui.inverted.red.basic.button:hover {
  -webkit-box-shadow: 0px 0px 0px 2px #ff5144 inset !important;
          box-shadow: 0px 0px 0px 2px #ff5144 inset !important;
  color: #FF695E !important;
}
.ui.inverted.red.basic.buttons .button:focus,
.ui.inverted.red.basic.buttons .button:focus,
.ui.inverted.red.basic.button:focus {
  -webkit-box-shadow: 0px 0px 0px 2px #ff4335 inset !important;
          box-shadow: 0px 0px 0px 2px #ff4335 inset !important;
  color: #FF695E !important;
}
.ui.inverted.red.basic.buttons .active.button,
.ui.inverted.red.buttons .basic.active.button,
.ui.inverted.red.basic.active.button {
  -webkit-box-shadow: 0px 0px 0px 2px #ff5144 inset !important;
          box-shadow: 0px 0px 0px 2px #ff5144 inset !important;
  color: #FF695E !important;
}
.ui.inverted.red.basic.buttons .button:active,
.ui.inverted.red.buttons .basic.button:active,
.ui.inverted.red.basic.button:active {
  -webkit-box-shadow: 0px 0px 0px 2px #ff392b inset !important;
          box-shadow: 0px 0px 0px 2px #ff392b inset !important;
  color: #FF695E !important;
}

/*--- Teal ---*/

.ui.teal.buttons .button,
.ui.teal.button {
  background-color: #00B5AD;
  color: #FFFFFF;
  text-shadow: none;
  background-image: none;
}
.ui.teal.button {
  -webkit-box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
          box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
}
.ui.teal.buttons .button:hover,
.ui.teal.button:hover {
  background-color: #009c95;
  color: #FFFFFF;
  text-shadow: none;
}
.ui.teal.buttons .button:focus,
.ui.teal.button:focus {
  background-color: #008c86;
  color: #FFFFFF;
  text-shadow: none;
}
.ui.teal.buttons .button:active,
.ui.teal.button:active {
  background-color: #00827c;
  color: #FFFFFF;
  text-shadow: none;
}
.ui.teal.buttons .active.button,
.ui.teal.buttons .active.button:active,
.ui.teal.active.button,
.ui.teal.button .active.button:active {
  background-color: #009c95;
  color: #FFFFFF;
  text-shadow: none;
}

/* Basic */
.ui.basic.teal.buttons .button,
.ui.basic.teal.button {
  -webkit-box-shadow: 0px 0px 0px 1px #00B5AD inset !important;
          box-shadow: 0px 0px 0px 1px #00B5AD inset !important;
  color: #00B5AD !important;
}
.ui.basic.teal.buttons .button:hover,
.ui.basic.teal.button:hover {
  background: transparent !important;
  -webkit-box-shadow: 0px 0px 0px 1px #009c95 inset !important;
          box-shadow: 0px 0px 0px 1px #009c95 inset !important;
  color: #009c95 !important;
}
.ui.basic.teal.buttons .button:focus,
.ui.basic.teal.button:focus {
  background: transparent !important;
  -webkit-box-shadow: 0px 0px 0px 1px #008c86 inset !important;
          box-shadow: 0px 0px 0px 1px #008c86 inset !important;
  color: #009c95 !important;
}
.ui.basic.teal.buttons .active.button,
.ui.basic.teal.active.button {
  background: transparent !important;
  -webkit-box-shadow: 0px 0px 0px 1px #009c95 inset !important;
          box-shadow: 0px 0px 0px 1px #009c95 inset !important;
  color: #00827c !important;
}
.ui.basic.teal.buttons .button:active,
.ui.basic.teal.button:active {
  -webkit-box-shadow: 0px 0px 0px 1px #00827c inset !important;
          box-shadow: 0px 0px 0px 1px #00827c inset !important;
  color: #00827c !important;
}
.ui.buttons:not(.vertical) > .basic.teal.button:not(:first-child) {
  margin-left: -1px;
}

/* Inverted */
.ui.inverted.teal.buttons .button,
.ui.inverted.teal.button {
  background-color: transparent;
  -webkit-box-shadow: 0px 0px 0px 2px #6DFFFF inset !important;
          box-shadow: 0px 0px 0px 2px #6DFFFF inset !important;
  color: #6DFFFF;
}
.ui.inverted.teal.buttons .button:hover,
.ui.inverted.teal.button:hover,
.ui.inverted.teal.buttons .button:focus,
.ui.inverted.teal.button:focus,
.ui.inverted.teal.buttons .button.active,
.ui.inverted.teal.button.active,
.ui.inverted.teal.buttons .button:active,
.ui.inverted.teal.button:active {
  -webkit-box-shadow: none !important;
          box-shadow: none !important;
  color: rgba(0, 0, 0, 0.6);
}
.ui.inverted.teal.buttons .button:hover,
.ui.inverted.teal.button:hover {
  background-color: #54ffff;
}
.ui.inverted.teal.buttons .button:focus,
.ui.inverted.teal.button:focus {
  background-color: #44ffff;
}
.ui.inverted.teal.buttons .active.button,
.ui.inverted.teal.active.button {
  background-color: #54ffff;
}
.ui.inverted.teal.buttons .button:active,
.ui.inverted.teal.button:active {
  background-color: #3affff;
}

/* Inverted Basic */
.ui.inverted.teal.basic.buttons .button,
.ui.inverted.teal.buttons .basic.button,
.ui.inverted.teal.basic.button {
  background-color: transparent;
  -webkit-box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
          box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
  color: #FFFFFF !important;
}
.ui.inverted.teal.basic.buttons .button:hover,
.ui.inverted.teal.buttons .basic.button:hover,
.ui.inverted.teal.basic.button:hover {
  -webkit-box-shadow: 0px 0px 0px 2px #54ffff inset !important;
          box-shadow: 0px 0px 0px 2px #54ffff inset !important;
  color: #6DFFFF !important;
}
.ui.inverted.teal.basic.buttons .button:focus,
.ui.inverted.teal.basic.buttons .button:focus,
.ui.inverted.teal.basic.button:focus {
  -webkit-box-shadow: 0px 0px 0px 2px #44ffff inset !important;
          box-shadow: 0px 0px 0px 2px #44ffff inset !important;
  color: #6DFFFF !important;
}
.ui.inverted.teal.basic.buttons .active.button,
.ui.inverted.teal.buttons .basic.active.button,
.ui.inverted.teal.basic.active.button {
  -webkit-box-shadow: 0px 0px 0px 2px #54ffff inset !important;
          box-shadow: 0px 0px 0px 2px #54ffff inset !important;
  color: #6DFFFF !important;
}
.ui.inverted.teal.basic.buttons .button:active,
.ui.inverted.teal.buttons .basic.button:active,
.ui.inverted.teal.basic.button:active {
  -webkit-box-shadow: 0px 0px 0px 2px #3affff inset !important;
          box-shadow: 0px 0px 0px 2px #3affff inset !important;
  color: #6DFFFF !important;
}

/*--- Olive ---*/

.ui.olive.buttons .button,
.ui.olive.button {
  background-color: #B5CC18;
  color: #FFFFFF;
  text-shadow: none;
  background-image: none;
}
.ui.olive.button {
  -webkit-box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
          box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
}
.ui.olive.buttons .button:hover,
.ui.olive.button:hover {
  background-color: #a7bd0d;
  color: #FFFFFF;
  text-shadow: none;
}
.ui.olive.buttons .button:focus,
.ui.olive.button:focus {
  background-color: #a0b605;
  color: #FFFFFF;
  text-shadow: none;
}
.ui.olive.buttons .button:active,
.ui.olive.button:active {
  background-color: #8d9e13;
  color: #FFFFFF;
  text-shadow: none;
}
.ui.olive.buttons .active.button,
.ui.olive.buttons .active.button:active,
.ui.olive.active.button,
.ui.olive.button .active.button:active {
  background-color: #aac109;
  color: #FFFFFF;
  text-shadow: none;
}

/* Basic */
.ui.basic.olive.buttons .button,
.ui.basic.olive.button {
  -webkit-box-shadow: 0px 0px 0px 1px #B5CC18 inset !important;
          box-shadow: 0px 0px 0px 1px #B5CC18 inset !important;
  color: #B5CC18 !important;
}
.ui.basic.olive.buttons .button:hover,
.ui.basic.olive.button:hover {
  background: transparent !important;
  -webkit-box-shadow: 0px 0px 0px 1px #a7bd0d inset !important;
          box-shadow: 0px 0px 0px 1px #a7bd0d inset !important;
  color: #a7bd0d !important;
}
.ui.basic.olive.buttons .button:focus,
.ui.basic.olive.button:focus {
  background: transparent !important;
  -webkit-box-shadow: 0px 0px 0px 1px #a0b605 inset !important;
          box-shadow: 0px 0px 0px 1px #a0b605 inset !important;
  color: #a7bd0d !important;
}
.ui.basic.olive.buttons .active.button,
.ui.basic.olive.active.button {
  background: transparent !important;
  -webkit-box-shadow: 0px 0px 0px 1px #aac109 inset !important;
          box-shadow: 0px 0px 0px 1px #aac109 inset !important;
  color: #8d9e13 !important;
}
.ui.basic.olive.buttons .button:active,
.ui.basic.olive.button:active {
  -webkit-box-shadow: 0px 0px 0px 1px #8d9e13 inset !important;
          box-shadow: 0px 0px 0px 1px #8d9e13 inset !important;
  color: #8d9e13 !important;
}
.ui.buttons:not(.vertical) > .basic.olive.button:not(:first-child) {
  margin-left: -1px;
}

/* Inverted */
.ui.inverted.olive.buttons .button,
.ui.inverted.olive.button {
  background-color: transparent;
  -webkit-box-shadow: 0px 0px 0px 2px #D9E778 inset !important;
          box-shadow: 0px 0px 0px 2px #D9E778 inset !important;
  color: #D9E778;
}
.ui.inverted.olive.buttons .button:hover,
.ui.inverted.olive.button:hover,
.ui.inverted.olive.buttons .button:focus,
.ui.inverted.olive.button:focus,
.ui.inverted.olive.buttons .button.active,
.ui.inverted.olive.button.active,
.ui.inverted.olive.buttons .button:active,
.ui.inverted.olive.button:active {
  -webkit-box-shadow: none !important;
          box-shadow: none !important;
  color: rgba(0, 0, 0, 0.6);
}
.ui.inverted.olive.buttons .button:hover,
.ui.inverted.olive.button:hover {
  background-color: #d8ea5c;
}
.ui.inverted.olive.buttons .button:focus,
.ui.inverted.olive.button:focus {
  background-color: #daef47;
}
.ui.inverted.olive.buttons .active.button,
.ui.inverted.olive.active.button {
  background-color: #daed59;
}
.ui.inverted.olive.buttons .button:active,
.ui.inverted.olive.button:active {
  background-color: #cddf4d;
}

/* Inverted Basic */
.ui.inverted.olive.basic.buttons .button,
.ui.inverted.olive.buttons .basic.button,
.ui.inverted.olive.basic.button {
  background-color: transparent;
  -webkit-box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
          box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
  color: #FFFFFF !important;
}
.ui.inverted.olive.basic.buttons .button:hover,
.ui.inverted.olive.buttons .basic.button:hover,
.ui.inverted.olive.basic.button:hover {
  -webkit-box-shadow: 0px 0px 0px 2px #d8ea5c inset !important;
          box-shadow: 0px 0px 0px 2px #d8ea5c inset !important;
  color: #D9E778 !important;
}
.ui.inverted.olive.basic.buttons .button:focus,
.ui.inverted.olive.basic.buttons .button:focus,
.ui.inverted.olive.basic.button:focus {
  -webkit-box-shadow: 0px 0px 0px 2px #daef47 inset !important;
          box-shadow: 0px 0px 0px 2px #daef47 inset !important;
  color: #D9E778 !important;
}
.ui.inverted.olive.basic.buttons .active.button,
.ui.inverted.olive.buttons .basic.active.button,
.ui.inverted.olive.basic.active.button {
  -webkit-box-shadow: 0px 0px 0px 2px #daed59 inset !important;
          box-shadow: 0px 0px 0px 2px #daed59 inset !important;
  color: #D9E778 !important;
}
.ui.inverted.olive.basic.buttons .button:active,
.ui.inverted.olive.buttons .basic.button:active,
.ui.inverted.olive.basic.button:active {
  -webkit-box-shadow: 0px 0px 0px 2px #cddf4d inset !important;
          box-shadow: 0px 0px 0px 2px #cddf4d inset !important;
  color: #D9E778 !important;
}

/*--- Yellow ---*/

.ui.yellow.buttons .button,
.ui.yellow.button {
  background-color: #FBBD08;
  color: #FFFFFF;
  text-shadow: none;
  background-image: none;
}
.ui.yellow.button {
  -webkit-box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
          box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
}
.ui.yellow.buttons .button:hover,
.ui.yellow.button:hover {
  background-color: #eaae00;
  color: #FFFFFF;
  text-shadow: none;
}
.ui.yellow.buttons .button:focus,
.ui.yellow.button:focus {
  background-color: #daa300;
  color: #FFFFFF;
  text-shadow: none;
}
.ui.yellow.buttons .button:active,
.ui.yellow.button:active {
  background-color: #cd9903;
  color: #FFFFFF;
  text-shadow: none;
}
.ui.yellow.buttons .active.button,
.ui.yellow.buttons .active.button:active,
.ui.yellow.active.button,
.ui.yellow.button .active.button:active {
  background-color: #eaae00;
  color: #FFFFFF;
  text-shadow: none;
}

/* Basic */
.ui.basic.yellow.buttons .button,
.ui.basic.yellow.button {
  -webkit-box-shadow: 0px 0px 0px 1px #FBBD08 inset !important;
          box-shadow: 0px 0px 0px 1px #FBBD08 inset !important;
  color: #FBBD08 !important;
}
.ui.basic.yellow.buttons .button:hover,
.ui.basic.yellow.button:hover {
  background: transparent !important;
  -webkit-box-shadow: 0px 0px 0px 1px #eaae00 inset !important;
          box-shadow: 0px 0px 0px 1px #eaae00 inset !important;
  color: #eaae00 !important;
}
.ui.basic.yellow.buttons .button:focus,
.ui.basic.yellow.button:focus {
  background: transparent !important;
  -webkit-box-shadow: 0px 0px 0px 1px #daa300 inset !important;
          box-shadow: 0px 0px 0px 1px #daa300 inset !important;
  color: #eaae00 !important;
}
.ui.basic.yellow.buttons .active.button,
.ui.basic.yellow.active.button {
  background: transparent !important;
  -webkit-box-shadow: 0px 0px 0px 1px #eaae00 inset !important;
          box-shadow: 0px 0px 0px 1px #eaae00 inset !important;
  color: #cd9903 !important;
}
.ui.basic.yellow.buttons .button:active,
.ui.basic.yellow.button:active {
  -webkit-box-shadow: 0px 0px 0px 1px #cd9903 inset !important;
          box-shadow: 0px 0px 0px 1px #cd9903 inset !important;
  color: #cd9903 !important;
}
.ui.buttons:not(.vertical) > .basic.yellow.button:not(:first-child) {
  margin-left: -1px;
}

/* Inverted */
.ui.inverted.yellow.buttons .button,
.ui.inverted.yellow.button {
  background-color: transparent;
  -webkit-box-shadow: 0px 0px 0px 2px #FFE21F inset !important;
          box-shadow: 0px 0px 0px 2px #FFE21F inset !important;
  color: #FFE21F;
}
.ui.inverted.yellow.buttons .button:hover,
.ui.inverted.yellow.button:hover,
.ui.inverted.yellow.buttons .button:focus,
.ui.inverted.yellow.button:focus,
.ui.inverted.yellow.buttons .button.active,
.ui.inverted.yellow.button.active,
.ui.inverted.yellow.buttons .button:active,
.ui.inverted.yellow.button:active {
  -webkit-box-shadow: none !important;
          box-shadow: none !important;
  color: rgba(0, 0, 0, 0.6);
}
.ui.inverted.yellow.buttons .button:hover,
.ui.inverted.yellow.button:hover {
  background-color: #ffdf05;
}
.ui.inverted.yellow.buttons .button:focus,
.ui.inverted.yellow.button:focus {
  background-color: #f5d500;
}
.ui.inverted.yellow.buttons .active.button,
.ui.inverted.yellow.active.button {
  background-color: #ffdf05;
}
.ui.inverted.yellow.buttons .button:active,
.ui.inverted.yellow.button:active {
  background-color: #ebcd00;
}

/* Inverted Basic */
.ui.inverted.yellow.basic.buttons .button,
.ui.inverted.yellow.buttons .basic.button,
.ui.inverted.yellow.basic.button {
  background-color: transparent;
  -webkit-box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
          box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
  color: #FFFFFF !important;
}
.ui.inverted.yellow.basic.buttons .button:hover,
.ui.inverted.yellow.buttons .basic.button:hover,
.ui.inverted.yellow.basic.button:hover {
  -webkit-box-shadow: 0px 0px 0px 2px #ffdf05 inset !important;
          box-shadow: 0px 0px 0px 2px #ffdf05 inset !important;
  color: #FFE21F !important;
}
.ui.inverted.yellow.basic.buttons .button:focus,
.ui.inverted.yellow.basic.buttons .button:focus,
.ui.inverted.yellow.basic.button:focus {
  -webkit-box-shadow: 0px 0px 0px 2px #f5d500 inset !important;
          box-shadow: 0px 0px 0px 2px #f5d500 inset !important;
  color: #FFE21F !important;
}
.ui.inverted.yellow.basic.buttons .active.button,
.ui.inverted.yellow.buttons .basic.active.button,
.ui.inverted.yellow.basic.active.button {
  -webkit-box-shadow: 0px 0px 0px 2px #ffdf05 inset !important;
          box-shadow: 0px 0px 0px 2px #ffdf05 inset !important;
  color: #FFE21F !important;
}
.ui.inverted.yellow.basic.buttons .button:active,
.ui.inverted.yellow.buttons .basic.button:active,
.ui.inverted.yellow.basic.button:active {
  -webkit-box-shadow: 0px 0px 0px 2px #ebcd00 inset !important;
          box-shadow: 0px 0px 0px 2px #ebcd00 inset !important;
  color: #FFE21F !important;
}

/*-------------------
       Primary
--------------------*/


/*--- Standard ---*/

.ui.primary.buttons .button,
.ui.primary.button {
  background-color: #2185D0;
  color: #FFFFFF;
  text-shadow: none;
  background-image: none;
}
.ui.primary.button {
  -webkit-box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
          box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
}
.ui.primary.buttons .button:hover,
.ui.primary.button:hover {
  background-color: #1678c2;
  color: #FFFFFF;
  text-shadow: none;
}
.ui.primary.buttons .button:focus,
.ui.primary.button:focus {
  background-color: #0d71bb;
  color: #FFFFFF;
  text-shadow: none;
}
.ui.primary.buttons .button:active,
.ui.primary.button:active {
  background-color: #1a69a4;
  color: #FFFFFF;
  text-shadow: none;
}
.ui.primary.buttons .active.button,
.ui.primary.buttons .active.button:active,
.ui.primary.active.button,
.ui.primary.button .active.button:active {
  background-color: #1279c6;
  color: #FFFFFF;
  text-shadow: none;
}

/* Basic */
.ui.basic.primary.buttons .button,
.ui.basic.primary.button {
  -webkit-box-shadow: 0px 0px 0px 1px #2185D0 inset !important;
          box-shadow: 0px 0px 0px 1px #2185D0 inset !important;
  color: #2185D0 !important;
}
.ui.basic.primary.buttons .button:hover,
.ui.basic.primary.button:hover {
  background: transparent !important;
  -webkit-box-shadow: 0px 0px 0px 1px #1678c2 inset !important;
          box-shadow: 0px 0px 0px 1px #1678c2 inset !important;
  color: #1678c2 !important;
}
.ui.basic.primary.buttons .button:focus,
.ui.basic.primary.button:focus {
  background: transparent !important;
  -webkit-box-shadow: 0px 0px 0px 1px #0d71bb inset !important;
          box-shadow: 0px 0px 0px 1px #0d71bb inset !important;
  color: #1678c2 !important;
}
.ui.basic.primary.buttons .active.button,
.ui.basic.primary.active.button {
  background: transparent !important;
  -webkit-box-shadow: 0px 0px 0px 1px #1279c6 inset !important;
          box-shadow: 0px 0px 0px 1px #1279c6 inset !important;
  color: #1a69a4 !important;
}
.ui.basic.primary.buttons .button:active,
.ui.basic.primary.button:active {
  -webkit-box-shadow: 0px 0px 0px 1px #1a69a4 inset !important;
          box-shadow: 0px 0px 0px 1px #1a69a4 inset !important;
  color: #1a69a4 !important;
}
.ui.buttons:not(.vertical) > .basic.primary.button:not(:first-child) {
  margin-left: -1px;
}

/* Inverted */
.ui.inverted.primary.buttons .button,
.ui.inverted.primary.button {
  background-color: transparent;
  -webkit-box-shadow: 0px 0px 0px 2px #54C8FF inset !important;
          box-shadow: 0px 0px 0px 2px #54C8FF inset !important;
  color: #54C8FF;
}
.ui.inverted.primary.buttons .button:hover,
.ui.inverted.primary.button:hover,
.ui.inverted.primary.buttons .button:focus,
.ui.inverted.primary.button:focus,
.ui.inverted.primary.buttons .button.active,
.ui.inverted.primary.button.active,
.ui.inverted.primary.buttons .button:active,
.ui.inverted.primary.button:active {
  -webkit-box-shadow: none !important;
          box-shadow: none !important;
  color: #FFFFFF;
}
.ui.inverted.primary.buttons .button:hover,
.ui.inverted.primary.button:hover {
  background-color: #3ac0ff;
}
.ui.inverted.primary.buttons .button:focus,
.ui.inverted.primary.button:focus {
  background-color: #2bbbff;
}
.ui.inverted.primary.buttons .active.button,
.ui.inverted.primary.active.button {
  background-color: #3ac0ff;
}
.ui.inverted.primary.buttons .button:active,
.ui.inverted.primary.button:active {
  background-color: #21b8ff;
}

/* Inverted Basic */
.ui.inverted.primary.basic.buttons .button,
.ui.inverted.primary.buttons .basic.button,
.ui.inverted.primary.basic.button {
  background-color: transparent;
  -webkit-box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
          box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
  color: #FFFFFF !important;
}
.ui.inverted.primary.basic.buttons .button:hover,
.ui.inverted.primary.buttons .basic.button:hover,
.ui.inverted.primary.basic.button:hover {
  -webkit-box-shadow: 0px 0px 0px 2px #3ac0ff inset !important;
          box-shadow: 0px 0px 0px 2px #3ac0ff inset !important;
  color: #54C8FF !important;
}
.ui.inverted.primary.basic.buttons .button:focus,
.ui.inverted.primary.basic.buttons .button:focus,
.ui.inverted.primary.basic.button:focus {
  -webkit-box-shadow: 0px 0px 0px 2px #2bbbff inset !important;
          box-shadow: 0px 0px 0px 2px #2bbbff inset !important;
  color: #54C8FF !important;
}
.ui.inverted.primary.basic.buttons .active.button,
.ui.inverted.primary.buttons .basic.active.button,
.ui.inverted.primary.basic.active.button {
  -webkit-box-shadow: 0px 0px 0px 2px #3ac0ff inset !important;
          box-shadow: 0px 0px 0px 2px #3ac0ff inset !important;
  color: #54C8FF !important;
}
.ui.inverted.primary.basic.buttons .button:active,
.ui.inverted.primary.buttons .basic.button:active,
.ui.inverted.primary.basic.button:active {
  -webkit-box-shadow: 0px 0px 0px 2px #21b8ff inset !important;
          box-shadow: 0px 0px 0px 2px #21b8ff inset !important;
  color: #54C8FF !important;
}

/*-------------------
      Secondary
--------------------*/


/* Standard */
.ui.secondary.buttons .button,
.ui.secondary.button {
  background-color: #1B1C1D;
  color: #FFFFFF;
  text-shadow: none;
  background-image: none;
}
.ui.secondary.button {
  -webkit-box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
          box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
}
.ui.secondary.buttons .button:hover,
.ui.secondary.button:hover {
  background-color: #27292a;
  color: #FFFFFF;
  text-shadow: none;
}
.ui.secondary.buttons .button:focus,
.ui.secondary.button:focus {
  background-color: #2e3032;
  color: #FFFFFF;
  text-shadow: none;
}
.ui.secondary.buttons .button:active,
.ui.secondary.button:active {
  background-color: #343637;
  color: #FFFFFF;
  text-shadow: none;
}
.ui.secondary.buttons .active.button,
.ui.secondary.buttons .active.button:active,
.ui.secondary.active.button,
.ui.secondary.button .active.button:active {
  background-color: #27292a;
  color: #FFFFFF;
  text-shadow: none;
}

/* Basic */
.ui.basic.secondary.buttons .button,
.ui.basic.secondary.button {
  -webkit-box-shadow: 0px 0px 0px 1px #1B1C1D inset !important;
          box-shadow: 0px 0px 0px 1px #1B1C1D inset !important;
  color: #1B1C1D !important;
}
.ui.basic.secondary.buttons .button:hover,
.ui.basic.secondary.button:hover {
  background: transparent !important;
  -webkit-box-shadow: 0px 0px 0px 1px #27292a inset !important;
          box-shadow: 0px 0px 0px 1px #27292a inset !important;
  color: #27292a !important;
}
.ui.basic.secondary.buttons .button:focus,
.ui.basic.secondary.button:focus {
  background: transparent !important;
  -webkit-box-shadow: 0px 0px 0px 1px #2e3032 inset !important;
          box-shadow: 0px 0px 0px 1px #2e3032 inset !important;
  color: #27292a !important;
}
.ui.basic.secondary.buttons .active.button,
.ui.basic.secondary.active.button {
  background: transparent !important;
  -webkit-box-shadow: 0px 0px 0px 1px #27292a inset !important;
          box-shadow: 0px 0px 0px 1px #27292a inset !important;
  color: #343637 !important;
}
.ui.basic.secondary.buttons .button:active,
.ui.basic.secondary.button:active {
  -webkit-box-shadow: 0px 0px 0px 1px #343637 inset !important;
          box-shadow: 0px 0px 0px 1px #343637 inset !important;
  color: #343637 !important;
}
.ui.buttons:not(.vertical) > .basic.primary.button:not(:first-child) {
  margin-left: -1px;
}

/* Inverted */
.ui.inverted.secondary.buttons .button,
.ui.inverted.secondary.button {
  background-color: transparent;
  -webkit-box-shadow: 0px 0px 0px 2px #545454 inset !important;
          box-shadow: 0px 0px 0px 2px #545454 inset !important;
  color: #545454;
}
.ui.inverted.secondary.buttons .button:hover,
.ui.inverted.secondary.button:hover,
.ui.inverted.secondary.buttons .button:focus,
.ui.inverted.secondary.button:focus,
.ui.inverted.secondary.buttons .button.active,
.ui.inverted.secondary.button.active,
.ui.inverted.secondary.buttons .button:active,
.ui.inverted.secondary.button:active {
  -webkit-box-shadow: none !important;
          box-shadow: none !important;
  color: #FFFFFF;
}
.ui.inverted.secondary.buttons .button:hover,
.ui.inverted.secondary.button:hover {
  background-color: #616161;
}
.ui.inverted.secondary.buttons .button:focus,
.ui.inverted.secondary.button:focus {
  background-color: #686868;
}
.ui.inverted.secondary.buttons .active.button,
.ui.inverted.secondary.active.button {
  background-color: #616161;
}
.ui.inverted.secondary.buttons .button:active,
.ui.inverted.secondary.button:active {
  background-color: #6e6e6e;
}

/* Inverted Basic */
.ui.inverted.secondary.basic.buttons .button,
.ui.inverted.secondary.buttons .basic.button,
.ui.inverted.secondary.basic.button {
  background-color: transparent;
  -webkit-box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
          box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.5) inset !important;
  color: #FFFFFF !important;
}
.ui.inverted.secondary.basic.buttons .button:hover,
.ui.inverted.secondary.buttons .basic.button:hover,
.ui.inverted.secondary.basic.button:hover {
  -webkit-box-shadow: 0px 0px 0px 2px #616161 inset !important;
          box-shadow: 0px 0px 0px 2px #616161 inset !important;
  color: #545454 !important;
}
.ui.inverted.secondary.basic.buttons .button:focus,
.ui.inverted.secondary.basic.buttons .button:focus,
.ui.inverted.secondary.basic.button:focus {
  -webkit-box-shadow: 0px 0px 0px 2px #686868 inset !important;
          box-shadow: 0px 0px 0px 2px #686868 inset !important;
  color: #545454 !important;
}
.ui.inverted.secondary.basic.buttons .active.button,
.ui.inverted.secondary.buttons .basic.active.button,
.ui.inverted.secondary.basic.active.button {
  -webkit-box-shadow: 0px 0px 0px 2px #616161 inset !important;
          box-shadow: 0px 0px 0px 2px #616161 inset !important;
  color: #545454 !important;
}
.ui.inverted.secondary.basic.buttons .button:active,
.ui.inverted.secondary.buttons .basic.button:active,
.ui.inverted.secondary.basic.button:active {
  -webkit-box-shadow: 0px 0px 0px 2px #6e6e6e inset !important;
          box-shadow: 0px 0px 0px 2px #6e6e6e inset !important;
  color: #545454 !important;
}

/*---------------
    Positive
----------------*/


/* Standard */
.ui.positive.buttons .button,
.ui.positive.button {
  background-color: #21BA45;
  color: #FFFFFF;
  text-shadow: none;
  background-image: none;
}
.ui.positive.button {
  -webkit-box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
          box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
}
.ui.positive.buttons .button:hover,
.ui.positive.button:hover {
  background-color: #16ab39;
  color: #FFFFFF;
  text-shadow: none;
}
.ui.positive.buttons .button:focus,
.ui.positive.button:focus {
  background-color: #0ea432;
  color: #FFFFFF;
  text-shadow: none;
}
.ui.positive.buttons .button:active,
.ui.positive.button:active {
  background-color: #198f35;
  color: #FFFFFF;
  text-shadow: none;
}
.ui.positive.buttons .active.button,
.ui.positive.buttons .active.button:active,
.ui.positive.active.button,
.ui.positive.button .active.button:active {
  background-color: #13ae38;
  color: #FFFFFF;
  text-shadow: none;
}

/* Basic */
.ui.basic.positive.buttons .button,
.ui.basic.positive.button {
  -webkit-box-shadow: 0px 0px 0px 1px #21BA45 inset !important;
          box-shadow: 0px 0px 0px 1px #21BA45 inset !important;
  color: #21BA45 !important;
}
.ui.basic.positive.buttons .button:hover,
.ui.basic.positive.button:hover {
  background: transparent !important;
  -webkit-box-shadow: 0px 0px 0px 1px #16ab39 inset !important;
          box-shadow: 0px 0px 0px 1px #16ab39 inset !important;
  color: #16ab39 !important;
}
.ui.basic.positive.buttons .button:focus,
.ui.basic.positive.button:focus {
  background: transparent !important;
  -webkit-box-shadow: 0px 0px 0px 1px #0ea432 inset !important;
          box-shadow: 0px 0px 0px 1px #0ea432 inset !important;
  color: #16ab39 !important;
}
.ui.basic.positive.buttons .active.button,
.ui.basic.positive.active.button {
  background: transparent !important;
  -webkit-box-shadow: 0px 0px 0px 1px #13ae38 inset !important;
          box-shadow: 0px 0px 0px 1px #13ae38 inset !important;
  color: #198f35 !important;
}
.ui.basic.positive.buttons .button:active,
.ui.basic.positive.button:active {
  -webkit-box-shadow: 0px 0px 0px 1px #198f35 inset !important;
          box-shadow: 0px 0px 0px 1px #198f35 inset !important;
  color: #198f35 !important;
}
.ui.buttons:not(.vertical) > .basic.primary.button:not(:first-child) {
  margin-left: -1px;
}

/*---------------
     Negative
----------------*/


/* Standard */
.ui.negative.buttons .button,
.ui.negative.button {
  background-color: #DB2828;
  color: #FFFFFF;
  text-shadow: none;
  background-image: none;
}
.ui.negative.button {
  -webkit-box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
          box-shadow: 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
}
.ui.negative.buttons .button:hover,
.ui.negative.button:hover {
  background-color: #d01919;
  color: #FFFFFF;
  text-shadow: none;
}
.ui.negative.buttons .button:focus,
.ui.negative.button:focus {
  background-color: #ca1010;
  color: #FFFFFF;
  text-shadow: none;
}
.ui.negative.buttons .button:active,
.ui.negative.button:active {
  background-color: #b21e1e;
  color: #FFFFFF;
  text-shadow: none;
}
.ui.negative.buttons .active.button,
.ui.negative.buttons .active.button:active,
.ui.negative.active.button,
.ui.negative.button .active.button:active {
  background-color: #d41515;
  color: #FFFFFF;
  text-shadow: none;
}

/* Basic */
.ui.basic.negative.buttons .button,
.ui.basic.negative.button {
  -webkit-box-shadow: 0px 0px 0px 1px #DB2828 inset !important;
          box-shadow: 0px 0px 0px 1px #DB2828 inset !important;
  color: #DB2828 !important;
}
.ui.basic.negative.buttons .button:hover,
.ui.basic.negative.button:hover {
  background: transparent !important;
  -webkit-box-shadow: 0px 0px 0px 1px #d01919 inset !important;
          box-shadow: 0px 0px 0px 1px #d01919 inset !important;
  color: #d01919 !important;
}
.ui.basic.negative.buttons .button:focus,
.ui.basic.negative.button:focus {
  background: transparent !important;
  -webkit-box-shadow: 0px 0px 0px 1px #ca1010 inset !important;
          box-shadow: 0px 0px 0px 1px #ca1010 inset !important;
  color: #d01919 !important;
}
.ui.basic.negative.buttons .active.button,
.ui.basic.negative.active.button {
  background: transparent !important;
  -webkit-box-shadow: 0px 0px 0px 1px #d41515 inset !important;
          box-shadow: 0px 0px 0px 1px #d41515 inset !important;
  color: #b21e1e !important;
}
.ui.basic.negative.buttons .button:active,
.ui.basic.negative.button:active {
  -webkit-box-shadow: 0px 0px 0px 1px #b21e1e inset !important;
          box-shadow: 0px 0px 0px 1px #b21e1e inset !important;
  color: #b21e1e !important;
}
.ui.buttons:not(.vertical) > .basic.primary.button:not(:first-child) {
  margin-left: -1px;
}


/*******************************
            Groups
*******************************/

.ui.buttons {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  font-size: 0em;
  vertical-align: baseline;
  margin: 0em 0.25em 0em 0em;
}
.ui.buttons:not(.basic):not(.inverted) {
  -webkit-box-shadow: none;
          box-shadow: none;
}

/* Clearfix */
.ui.buttons:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

/* Standard Group */
.ui.buttons .button {
  -webkit-box-flex: 1;
      -ms-flex: 1 0 auto;
          flex: 1 0 auto;
  margin: 0em;
  border-radius: 0em;
  margin: 0px 0px 0px 0px;
}
.ui.buttons > .ui.button:not(.basic):not(.inverted),
.ui.buttons:not(.basic):not(.inverted) > .button {
  -webkit-box-shadow: 0px 0px 0px 1px transparent inset, 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
          box-shadow: 0px 0px 0px 1px transparent inset, 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
}
.ui.buttons .button:first-child {
  border-left: none;
  margin-left: 0em;
  border-top-left-radius: 0.28571429rem;
  border-bottom-left-radius: 0.28571429rem;
}
.ui.buttons .button:last-child {
  border-top-right-radius: 0.28571429rem;
  border-bottom-right-radius: 0.28571429rem;
}

/* Vertical  Style */
.ui.vertical.buttons {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}
.ui.vertical.buttons .button {
  display: block;
  float: none;
  width: 100%;
  margin: 0px 0px 0px 0px;
  -webkit-box-shadow: none;
          box-shadow: none;
  border-radius: 0em;
}
.ui.vertical.buttons .button:first-child {
  border-top-left-radius: 0.28571429rem;
  border-top-right-radius: 0.28571429rem;
}
.ui.vertical.buttons .button:last-child {
  margin-bottom: 0px;
  border-bottom-left-radius: 0.28571429rem;
  border-bottom-right-radius: 0.28571429rem;
}
.ui.vertical.buttons .button:only-child {
  border-radius: 0.28571429rem;
}


/*******************************
         Theme Overrides
*******************************/



/*******************************
         Site Overrides
*******************************/





















/*!
 * # Semantic UI 2.4.2 - Dimmer
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */


/*******************************
            Dimmer
*******************************/

.dimmable:not(body) {
  position: relative;
}
.ui.dimmer {
  display: none;
  position: absolute;
  top: 0em !important;
  left: 0em !important;
  width: 100%;
  height: 100%;
  text-align: center;
  vertical-align: middle;
  padding: 1em;
  background-color: rgba(0, 0, 0, 0.85);
  opacity: 0;
  line-height: 1;
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
  -webkit-animation-duration: 0.5s;
          animation-duration: 0.5s;
  -webkit-transition: background-color 0.5s linear;
  transition: background-color 0.5s linear;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  will-change: opacity;
  z-index: 1000;
}

/* Dimmer Content */
.ui.dimmer > .content {
  -webkit-user-select: text;
     -moz-user-select: text;
      -ms-user-select: text;
          user-select: text;
  color: #FFFFFF;
}

/* Loose Coupling */
.ui.segment > .ui.dimmer {
  border-radius: inherit !important;
}

/* Scrollbars */
.ui.dimmer:not(.inverted)::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
}
.ui.dimmer:not(.inverted)::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.25);
}
.ui.dimmer:not(.inverted)::-webkit-scrollbar-thumb:window-inactive {
  background: rgba(255, 255, 255, 0.15);
}
.ui.dimmer:not(.inverted)::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.35);
}


/*******************************
            States
*******************************/


/* Animating */
.animating.dimmable:not(body),
.dimmed.dimmable:not(body) {
  overflow: hidden;
}

/* Animating / Active / Visible */
.dimmed.dimmable > .ui.animating.dimmer,
.dimmed.dimmable > .ui.visible.dimmer,
.ui.active.dimmer {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  opacity: 1;
}

/* Disabled */
.ui.disabled.dimmer {
  width: 0 !important;
  height: 0 !important;
}


/*******************************
           Variations
*******************************/


/*--------------
    Legacy
---------------*/


/* Animating / Active / Visible */
.dimmed.dimmable > .ui.animating.legacy.dimmer,
.dimmed.dimmable > .ui.visible.legacy.dimmer,
.ui.active.legacy.dimmer {
  display: block;
}

/*--------------
    Alignment
---------------*/

.ui[class*="top aligned"].dimmer {
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
}
.ui[class*="bottom aligned"].dimmer {
  -webkit-box-pack: end;
      -ms-flex-pack: end;
          justify-content: flex-end;
}

/*--------------
      Page
---------------*/

.ui.page.dimmer {
  position: fixed;
  -webkit-transform-style: '';
          transform-style: '';
  -webkit-perspective: 2000px;
          perspective: 2000px;
  -webkit-transform-origin: center center;
          transform-origin: center center;
}
body.animating.in.dimmable,
body.dimmed.dimmable {
  overflow: hidden;
}
body.dimmable > .dimmer {
  position: fixed;
}

/*--------------
    Blurring
---------------*/

.blurring.dimmable > :not(.dimmer) {
  -webkit-filter: blur(0px) grayscale(0);
          filter: blur(0px) grayscale(0);
  -webkit-transition: 800ms -webkit-filter ease;
  transition: 800ms -webkit-filter ease;
  transition: 800ms filter ease;
  transition: 800ms filter ease, 800ms -webkit-filter ease;
}
.blurring.dimmed.dimmable > :not(.dimmer) {
  -webkit-filter: blur(5px) grayscale(0.7);
          filter: blur(5px) grayscale(0.7);
}

/* Dimmer Color */
.blurring.dimmable > .dimmer {
  background-color: rgba(0, 0, 0, 0.6);
}
.blurring.dimmable > .inverted.dimmer {
  background-color: rgba(255, 255, 255, 0.6);
}

/*--------------
    Aligned
---------------*/

.ui.dimmer > .top.aligned.content > * {
  vertical-align: top;
}
.ui.dimmer > .bottom.aligned.content > * {
  vertical-align: bottom;
}

/*--------------
    Inverted
---------------*/

.ui.inverted.dimmer {
  background-color: rgba(255, 255, 255, 0.85);
}
.ui.inverted.dimmer > .content > * {
  color: #FFFFFF;
}

/*--------------
     Simple
---------------*/


/* Displays without javascript */
.ui.simple.dimmer {
  display: block;
  overflow: hidden;
  opacity: 1;
  width: 0%;
  height: 0%;
  z-index: -100;
  background-color: rgba(0, 0, 0, 0);
}
.dimmed.dimmable > .ui.simple.dimmer {
  overflow: visible;
  opacity: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.85);
  z-index: 1;
}
.ui.simple.inverted.dimmer {
  background-color: rgba(255, 255, 255, 0);
}
.dimmed.dimmable > .ui.simple.inverted.dimmer {
  background-color: rgba(255, 255, 255, 0.85);
}


/*******************************
         Theme Overrides
*******************************/



/*******************************
        User Overrides
*******************************/




