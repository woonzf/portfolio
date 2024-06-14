/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css ***!
  \*******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./font/Montserrat-VariableFont_wght.ttf */ "./src/font/Montserrat-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  /* https://fonts.google.com/specimen/Montserrat */
  font-family: "Montserrat";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("TrueType");
}

/* ! tailwindcss v3.4.4 | MIT License | https://tailwindcss.com */

/*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  text-decoration: underline;
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-feature-settings: normal; /* 2 */
  font-variation-settings: normal; /* 3 */
  font-size: 1em; /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
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

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  letter-spacing: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/

dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/

:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */

[hidden] {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */

main,
  section {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

/* Hide scrollbar for Chrome, Safari and Opera */

main::-webkit-scrollbar,
  section::-webkit-scrollbar {
  display: none;
}

body {
  --tw-bg-opacity: 1;
  background-color: rgba(241, 245, 249, 1);
  background-color: rgba(241, 245, 249, var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgba(39, 39, 42, 1);
  color: rgba(39, 39, 42, var(--tw-text-opacity));
}

body:where(.dark, .dark *) {
  --tw-bg-opacity: 1;
  background-color: rgba(39, 39, 42, 1);
  background-color: rgba(39, 39, 42, var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgba(241, 245, 249, 1);
  color: rgba(241, 245, 249, var(--tw-text-opacity));
}

body * {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 75ms;
}

header,
  footer {
  --tw-bg-opacity: 1;
  background-color: rgba(241, 245, 249, 1);
  background-color: rgba(241, 245, 249, var(--tw-bg-opacity));
  z-index: 50;
  height: 3.5rem;
  width: 100%;
  padding-left: 1.75rem;
  padding-right: 1.75rem;
}

header:where(.dark, .dark *),
  footer:where(.dark, .dark *) {
  --tw-bg-opacity: 1;
  background-color: rgba(39, 39, 42, 1);
  background-color: rgba(39, 39, 42, var(--tw-bg-opacity));
}

@media (min-width: 768px) {

  header,
  footer {
    padding-left: 3.5rem;
    padding-right: 3.5rem;
  }
}

aside {
  margin-top: 3.5rem;
  height: calc(100vh - 2 * 56px);
  padding-left: 200px;
}

main {
  margin-top: 3.5rem;
  height: calc(100vh - 2 * 56px);
  width: 100%;
  scroll-snap-type: y var(--tw-scroll-snap-strictness);
  overflow-y: scroll;
  scroll-behavior: smooth;
}

section {
  height: calc(100vh - 2 * 56px);
  scroll-snap-align: center;
  overflow-x: scroll;
  scroll-behavior: smooth;
  padding-left: 1.75rem;
  padding-right: 1.75rem;
}

@media (min-width: 768px) {

  section {
    padding-left: 3.5rem;
    padding-right: 3.5rem;
  }
}

h1 {
  font-size: 10vw;
  font-weight: 800;
  line-height: 0.8;
}

@media (orientation: portrait) {

  h1 {
    font-size: 15vw;
  }
}

h2 {
  font-size: 3.75rem;
  font-weight: 800;
  line-height: 0.8;
}

@media (min-width: 768px) {

  h2 {
    font-size: 4.5rem;
    line-height: 1;
  }
}

a {
    transition: transform 500ms ease;
  }

button:disabled {
  --tw-text-opacity: 1;
  color: rgba(161, 161, 170, 1);
  color: rgba(161, 161, 170, var(--tw-text-opacity));
}

button:disabled:where(.dark, .dark *) {
  --tw-text-opacity: 1;
  color: rgba(113, 113, 122, 1);
  color: rgba(113, 113, 122, var(--tw-text-opacity));
}

button:disabled {
    pointer-events: none;
  }

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgba(59, 130, 246, 0.5);
  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);
  --tw-ring-shadow: 0 0 rgba(0,0,0,0);
  --tw-shadow: 0 0 rgba(0,0,0,0);
  --tw-shadow-colored: 0 0 rgba(0,0,0,0);
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgba(59, 130, 246, 0.5);
  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);
  --tw-ring-shadow: 0 0 rgba(0,0,0,0);
  --tw-shadow: 0 0 rgba(0,0,0,0);
  --tw-shadow-colored: 0 0 rgba(0,0,0,0);
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}
.montserrat {
    font-family: "Montserrat", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
  }
.bg-theme-1 {
  --tw-bg-opacity: 1;
  background-color: rgba(248, 113, 113, 1);
  background-color: rgba(248, 113, 113, var(--tw-bg-opacity));
}
.bg-theme-2 {
  --tw-bg-opacity: 1;
  background-color: rgba(250, 204, 21, 1);
  background-color: rgba(250, 204, 21, var(--tw-bg-opacity));
}
.bg-theme-3 {
  --tw-bg-opacity: 1;
  background-color: rgba(14, 165, 233, 1);
  background-color: rgba(14, 165, 233, var(--tw-bg-opacity));
}
.bg-light {
  --tw-bg-opacity: 1;
  background-color: rgba(241, 245, 249, 1);
  background-color: rgba(241, 245, 249, var(--tw-bg-opacity));
}
.bg-dark {
  --tw-bg-opacity: 1;
  background-color: rgba(39, 39, 42, 1);
  background-color: rgba(39, 39, 42, var(--tw-bg-opacity));
}
.text-theme-1 {
  --tw-text-opacity: 1;
  color: rgba(248, 113, 113, 1);
  color: rgba(248, 113, 113, var(--tw-text-opacity));
}
.text-theme-2 {
  --tw-text-opacity: 1;
  color: rgba(250, 204, 21, 1);
  color: rgba(250, 204, 21, var(--tw-text-opacity));
}
.text-theme-3 {
  --tw-text-opacity: 1;
  color: rgba(14, 165, 233, 1);
  color: rgba(14, 165, 233, var(--tw-text-opacity));
}
.text-light {
  --tw-text-opacity: 1;
  color: rgba(39, 39, 42, 1);
  color: rgba(39, 39, 42, var(--tw-text-opacity));
}
.text-dark {
  --tw-text-opacity: 1;
  color: rgba(241, 245, 249, 1);
  color: rgba(241, 245, 249, var(--tw-text-opacity));
}
.btn-dark-mode {
  aspect-ratio: 2;
  height: 1.25rem;
  border-radius: 0.375rem;
  --tw-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.05);
  --tw-shadow-colored: inset 0 2px 4px 0 var(--tw-shadow-color);
  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), inset 0 2px 4px 0 rgba(0, 0, 0, 0.05);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);
}
@media (min-width: 768px) {

  .btn-dark-mode {
    height: 1.5rem;
  }
}
.btn-dark-mode {
    transition: background-color 500ms ease;
  }
.btn-dark-mode.theme-1:hover {
  --tw-bg-opacity: 1;
  background-color: rgba(248, 113, 113, 1);
  background-color: rgba(248, 113, 113, var(--tw-bg-opacity));
}
.btn-dark-mode.theme-2:hover {
  --tw-bg-opacity: 1;
  background-color: rgba(250, 204, 21, 1);
  background-color: rgba(250, 204, 21, var(--tw-bg-opacity));
}
.btn-dark-mode.theme-3:hover {
  --tw-bg-opacity: 1;
  background-color: rgba(14, 165, 233, 1);
  background-color: rgba(14, 165, 233, var(--tw-bg-opacity));
}
.dark-mode-ball {
  --tw-bg-opacity: 1;
  background-color: rgba(241, 245, 249, 1);
  background-color: rgba(241, 245, 249, var(--tw-bg-opacity));
  margin-left: 0.125rem;
  margin-right: 0.125rem;
  aspect-ratio: 1 / 1;
  height: calc(100% - 4px);
  border-radius: 0.375rem;
}
.dark-mode-ball:where(.dark, .dark *) {
  --tw-bg-opacity: 1;
  background-color: rgba(39, 39, 42, 1);
  background-color: rgba(39, 39, 42, var(--tw-bg-opacity));
}
.dark-mode-ball {
    transition: transform 750ms ease;
  }
.dark-mode-ball.dark {
  --tw-translate-x: calc(100% + 4px);
  transform: translate(calc(100% + 4px), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.icon-mode-dark,
  .icon-mode {
    transition: opacity 75ms ease;
  }
.icon-mode-dark {
  position: absolute;
  opacity: 0;
}
.icon-mode-dark:where(.dark, .dark *) {
  opacity: 1;
}
.icon-mode {
  position: absolute;
  opacity: 1;
}
.icon-mode:where(.dark, .dark *) {
  opacity: 0;
}
.icon-contact-link {
  aspect-ratio: 1 / 1;
  height: 30px;
  font-size: 30px;
}
@media (min-width: 640px) {

  .icon-contact-link {
    height: 40px;
    font-size: 40px;
  }
}
.icon-next {
  aspect-ratio: 1 / 1;
  height: 70px;
    transition: transform 500ms ease;
}
button:hover .icon-next {
  --tw-scale-x: 1.1;
  --tw-scale-y: 1.1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(1.1) scaleY(1.1);
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.underline-h,
  .highlight-h {
  position: relative;
}
.underline-h:after {
  --tw-bg-opacity: 1;
  background-color: rgba(39, 39, 42, 1);
  background-color: rgba(39, 39, 42, var(--tw-bg-opacity));
  position: absolute;
  left: 0px;
  bottom: 0.125rem;
  height: 0.125rem;
  width: 0px;
  border-radius: 9999px;
}
.underline-h:where(.dark, .dark *):after {
  --tw-bg-opacity: 1;
  background-color: rgba(241, 245, 249, 1);
  background-color: rgba(241, 245, 249, var(--tw-bg-opacity));
}
.underline-h:after {
    content: "";
    transition: width 500ms ease;
  }
button:hover .underline-h:after {
  width: 100%;
}
.highlight-h:after {
  position: absolute;
  top: 25%;
  left: -15px;
  z-index: -10;
  height: 50%;
  width: 0px;
  opacity: 0.8;
    content: "";
    transition: width 500ms ease;
}
button:hover .highlight-h:after {
  width: calc(100% + 30px);
}
/* Animation */
[class^="animate-"] {
    will-change: animation;
  }
.fixed {
  position: fixed;
}
.absolute {
  position: absolute;
}
.relative {
  position: relative;
}
.bottom-0 {
  bottom: 0px;
}
.left-1\\/2 {
  left: 50%;
}
.left-\\[-120px\\] {
  left: -120px;
}
.left-\\[-156px\\] {
  left: -156px;
}
.right-0 {
  right: 0px;
}
.right-14 {
  right: 3.5rem;
}
.top-0 {
  top: 0px;
}
.top-1\\/2 {
  top: 50%;
}
.top-\\[50vh\\] {
  top: 50vh;
}
.z-40 {
  z-index: 40;
}
.z-50 {
  z-index: 50;
}
.mt-14 {
  margin-top: 3.5rem;
}
.mt-2 {
  margin-top: 0.5rem;
}
.flex {
  display: flex;
}
.aspect-square {
  aspect-ratio: 1 / 1;
}
.h-10 {
  height: 2.5rem;
}
.h-\\[calc\\(20vw\\*0\\.8\\)\\] {
  height: calc(20vw * 0.8);
}
.h-fit {
  height: -moz-fit-content;
  height: fit-content;
}
.h-full {
  height: 100%;
}
.w-\\[40\\%\\] {
  width: 40%;
}
.w-fit {
  width: -moz-fit-content;
  width: fit-content;
}
.w-full {
  width: 100%;
}
.min-w-\\[70\\%\\] {
  min-width: 70%;
}
.min-w-full {
  min-width: 100%;
}
.-translate-x-1\\/2 {
  --tw-translate-x: -50%;
  transform: translate(-50%, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-translate-y-1\\/2 {
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), -50%) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-x-1\\/2 {
  --tw-translate-x: 50%;
  transform: translate(50%, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-x-\\[-40vw\\] {
  --tw-translate-x: -40vw;
  transform: translate(-40vw, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rotate-90 {
  --tw-rotate: 90deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(90deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
@keyframes bounce-chevron-down {

  0%, 100% {
    transform: translateX(-50%) translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }

  50% {
    transform: translateX(-50%) translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}
.animate-chevron-down {
  animation: bounce-chevron-down 1s infinite;
}
@keyframes bounce-chevron-right {

  0%, 100% {
    transform: translateY(-50%) rotate(-90deg) translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }

  50% {
    transform: translateY(-50%) rotate(-90deg) translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}
.animate-chevron-right {
  animation: bounce-chevron-right 1s infinite;
}
@keyframes slide-up {

  0% {
    transform: translateY(100%);
  }

  100% {
    transform: translateY(0);
  }
}
.animate-hello {
  animation: slide-up 1s 1;
}
@keyframes bounce-menu {

  0%, 100% {
    transform: translateY(-50%) rotate(-90deg) translateY(0);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }

  50% {
    transform: translateY(-50%) rotate(-90deg) translateY(25%);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}
.animate-menu {
  animation: bounce-menu 1.5s infinite;
}
.flex-row {
  flex-direction: row;
}
.flex-col {
  flex-direction: column;
}
.items-center {
  align-items: center;
}
.justify-center {
  justify-content: center;
}
.justify-between {
  justify-content: space-between;
}
.justify-evenly {
  justify-content: space-evenly;
}
.gap-2 {
  gap: 0.5rem;
}
.gap-3 {
  gap: 0.75rem;
}
.gap-5 {
  gap: 1.25rem;
}
.overflow-hidden {
  overflow: hidden;
}
.overflow-x-hidden {
  overflow-x: hidden;
}
.text-pretty {
  text-wrap: pretty;
}
.px-14 {
  padding-left: 3.5rem;
  padding-right: 3.5rem;
}
.pl-0 {
  padding-left: 0px;
}
.pl-7 {
  padding-left: 1.75rem;
}
.text-justify {
  text-align: justify;
}
.text-start {
  text-align: left;
}
.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}
.text-4xl {
  font-size: 2.25rem;
  line-height: 2.5rem;
}
.text-6xl {
  font-size: 3.75rem;
  line-height: 1;
}
.text-9xl {
  font-size: 8rem;
  line-height: 1;
}
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}
.font-bold {
  font-weight: 700;
}
.font-extrabold {
  font-weight: 800;
}
.font-semibold {
  font-weight: 600;
}
.uppercase {
  text-transform: uppercase;
}
.italic {
  font-style: italic;
}
.underline {
  text-decoration-line: underline;
}
.opacity-0 {
  opacity: 0;
}
main,
  aside,
  #btn-menu-l,
  #btn-menu-l-close,
  #btn-menu-l-close > div {
    transition: transform 500ms ease;
  }
main.move {
  --tw-translate-x: 40vw;
  transform: translate(40vw, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
aside.move {
  --tw-translate-x: 0px;
  transform: translate(0px, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
#btn-menu-l.show {
  --tw-translate-y: 200px;
  transform: translate(var(--tw-translate-x), 200px) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
#btn-menu-l-close.show {
  --tw-translate-x: 200px;
  transform: translate(200px, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
#btn-menu-l-close:hover > div {
  --tw-rotate: 180deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(180deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
/* Menu dot */
button:disabled > div > span {
  opacity: 1;
}
.after\\:bg-theme-1::after {
    content: var(--tw-content);
    --tw-bg-opacity: 1;
    background-color: rgba(248, 113, 113, 1);
    background-color: rgba(248, 113, 113, var(--tw-bg-opacity));
  }
.after\\:bg-theme-2::after {
    content: var(--tw-content);
    --tw-bg-opacity: 1;
    background-color: rgba(250, 204, 21, 1);
    background-color: rgba(250, 204, 21, var(--tw-bg-opacity));
  }
.after\\:bg-theme-3::after {
    content: var(--tw-content);
    --tw-bg-opacity: 1;
    background-color: rgba(14, 165, 233, 1);
    background-color: rgba(14, 165, 233, var(--tw-bg-opacity));
  }
.dark\\:bg-theme-2:where(.dark, .dark *) {
  --tw-bg-opacity: 1;
  background-color: rgba(250, 204, 21, 1);
  background-color: rgba(250, 204, 21, var(--tw-bg-opacity));
}
.dark\\:bg-light:where(.dark, .dark *) {
  --tw-bg-opacity: 1;
  background-color: rgba(241, 245, 249, 1);
  background-color: rgba(241, 245, 249, var(--tw-bg-opacity));
}
.dark\\:bg-dark:where(.dark, .dark *) {
  --tw-bg-opacity: 1;
  background-color: rgba(39, 39, 42, 1);
  background-color: rgba(39, 39, 42, var(--tw-bg-opacity));
}
.dark\\:text-theme-2:where(.dark, .dark *) {
  --tw-text-opacity: 1;
  color: rgba(250, 204, 21, 1);
  color: rgba(250, 204, 21, var(--tw-text-opacity));
}
.dark\\:text-dark:where(.dark, .dark *) {
  --tw-text-opacity: 1;
  color: rgba(241, 245, 249, 1);
  color: rgba(241, 245, 249, var(--tw-text-opacity));
}
.hover\\:scale-110:hover {
  --tw-scale-x: 1.1;
  --tw-scale-y: 1.1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(1.1) scaleY(1.1);
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
@media (min-width: 768px) {

  .md\\:pl-14 {
    padding-left: 3.5rem;
  }

  .md\\:text-2xl {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  .md\\:text-lg {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
}
@media (orientation: portrait) {

  .portrait\\:hidden {
    display: none;
  }
}
.dark\\:bg-transparent:where(.dark, .dark *) {
  background-color: transparent;
}
`, "",{"version":3,"sources":["webpack://./src/style.css","<no source>"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  /* https://fonts.google.com/specimen/Montserrat */\n  font-family: \"Montserrat\";\n  src: url(./font/Montserrat-VariableFont_wght.ttf) format(\"TrueType\");\n}\n\n@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n@layer base {\n  /* Hide scrollbar for IE, Edge and Firefox */\n  main,\n  section {\n    -ms-overflow-style: none; /* IE and Edge */\n    scrollbar-width: none; /* Firefox */\n  }\n\n  /* Hide scrollbar for Chrome, Safari and Opera */\n  main::-webkit-scrollbar,\n  section::-webkit-scrollbar {\n    @apply hidden;\n  }\n\n  body {\n    @apply bg-light dark:bg-dark text-light dark:text-dark;\n  }\n\n  body * {\n    @apply transition-colors duration-75;\n  }\n\n  header,\n  footer {\n    @apply h-14 w-full px-7 md:px-14 bg-light dark:bg-dark z-50;\n  }\n\n  aside {\n    @apply h-[calc(100vh-2*56px)] mt-14 pl-[200px];\n  }\n\n  main {\n    @apply h-[calc(100vh-2*56px)] w-full mt-14 overflow-y-scroll snap-y scroll-smooth;\n  }\n\n  section {\n    @apply h-[calc(100vh-2*56px)] px-7 md:px-14 overflow-x-scroll snap-center scroll-smooth;\n  }\n\n  h1 {\n    @apply text-[10vw] portrait:text-[15vw] leading-[0.8] font-extrabold;\n  }\n\n  h2 {\n    @apply text-6xl md:text-7xl leading-[0.8] font-extrabold;\n  }\n\n  a {\n    transition: transform 500ms ease;\n  }\n\n  button:disabled {\n    @apply text-disabled;\n    pointer-events: none;\n  }\n}\n\n@layer components {\n  .montserrat {\n    font-family: \"Montserrat\", sans-serif;\n    font-optical-sizing: auto;\n    font-style: normal;\n  }\n\n  .bg-theme-1 {\n    @apply bg-red-400;\n  }\n\n  .bg-theme-2 {\n    @apply bg-yellow-400;\n  }\n\n  .bg-theme-3 {\n    @apply bg-sky-500;\n  }\n\n  .bg-light {\n    @apply bg-slate-100;\n  }\n\n  .bg-dark {\n    @apply bg-zinc-800;\n  }\n\n  .text-theme-1 {\n    @apply text-red-400;\n  }\n\n  .text-theme-2 {\n    @apply text-yellow-400;\n  }\n\n  .text-theme-3 {\n    @apply text-sky-500;\n  }\n\n  .text-light {\n    @apply text-zinc-800;\n  }\n\n  .text-dark {\n    @apply text-slate-100;\n  }\n\n  .text-disabled {\n    @apply text-zinc-400 dark:text-zinc-500;\n  }\n\n  .btn-dark-mode {\n    @apply h-5 md:h-6 aspect-[2] rounded-md shadow-inner;\n    transition: background-color 500ms ease;\n  }\n\n  .btn-dark-mode.theme-1:hover {\n    @apply bg-theme-1;\n  }\n\n  .btn-dark-mode.theme-2:hover {\n    @apply bg-theme-2;\n  }\n\n  .btn-dark-mode.theme-3:hover {\n    @apply bg-theme-3;\n  }\n\n  .dark-mode-ball {\n    @apply h-[calc(100%-4px)] aspect-square mx-0.5 bg-light dark:bg-dark rounded-md;\n  }\n\n  .dark-mode-ball {\n    transition: transform 750ms ease;\n  }\n\n  .dark-mode-ball.dark {\n    @apply translate-x-[calc(100%+4px)];\n  }\n\n  .icon-mode-dark,\n  .icon-mode {\n    transition: opacity 75ms ease;\n  }\n\n  .icon-mode-dark {\n    @apply opacity-0 dark:opacity-100 absolute;\n  }\n\n  .icon-mode {\n    @apply opacity-100 dark:opacity-0 absolute;\n  }\n\n  .icon-contact-link {\n    @apply h-[30px] sm:h-[40px] text-[30px] sm:text-[40px] aspect-square;\n  }\n\n  .icon-next {\n    @apply h-[70px] aspect-square;\n    transition: transform 500ms ease;\n  }\n\n  button:hover .icon-next {\n    @apply scale-110;\n  }\n\n  .underline-h,\n  .highlight-h {\n    @apply relative;\n  }\n\n  .underline-h:after {\n    @apply h-0.5 w-0 bg-dark dark:bg-light rounded-full absolute left-0 bottom-0.5;\n    content: \"\";\n    transition: width 500ms ease;\n  }\n\n  button:hover .underline-h:after {\n    @apply w-full;\n  }\n\n  .highlight-h:after {\n    @apply h-[50%] w-0 opacity-80 absolute top-[25%] left-[-15px] -z-10;\n    content: \"\";\n    transition: width 500ms ease;\n  }\n\n  button:hover .highlight-h:after {\n    @apply w-[calc(100%+30px)];\n  }\n\n  /* Animation */\n  [class^=\"animate-\"] {\n    will-change: animation;\n  }\n}\n\n@layer utilities {\n  main,\n  aside,\n  #btn-menu-l,\n  #btn-menu-l-close,\n  #btn-menu-l-close > div {\n    transition: transform 500ms ease;\n  }\n\n  main.move {\n    @apply translate-x-[40vw];\n  }\n\n  aside.move {\n    @apply translate-x-0;\n  }\n\n  #btn-menu-l.show {\n    @apply translate-y-[200px];\n  }\n\n  #btn-menu-l-close.show {\n    @apply translate-x-[200px];\n  }\n\n  #btn-menu-l-close:hover > div {\n    @apply rotate-180;\n  }\n\n  /* Menu dot */\n  button:disabled > div > span {\n    @apply opacity-100;\n  }\n}\n",null],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/dark-mode.js":
/*!*****************************!*\
  !*** ./src/js/dark-mode.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   darkMode: () => (/* binding */ darkMode)
/* harmony export */ });
const darkMode = (() => {
  const btns = document.querySelectorAll(".btn-dark-mode");
  const balls = document.querySelectorAll(".dark-mode-ball");
  const html = document.documentElement;

  function init() {
    _detectDarkMode();
    btns.forEach((btn) => {
      btn.onclick = _toggle;
    });
  }

  function _detectDarkMode() {
    if (Boolean(localStorage.theme)) {
      if (localStorage.theme === "dark") {
        _toggle();
      }
      return;
    }

    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      localStorage.setItem("theme", "dark");
      _toggle();
    } else localStorage.setItem("theme", "light");
  }

  function _toggle() {
    html.classList.toggle("dark");
    balls.forEach((ball) => {
      ball.classList.toggle("dark");
    });

    if (!html.classList.contains("dark"))
      localStorage.setItem("theme", "light");
    else localStorage.setItem("theme", "dark");
  }

  return { init };
})();




/***/ }),

/***/ "./src/js/image.js":
/*!*************************!*\
  !*** ./src/js/image.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_icons_favicon_32w_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/icons/favicon-32w.png */ "./src/img/icons/favicon-32w.png");
/* harmony import */ var _img_icons_menu_50w_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/icons/menu-50w.png */ "./src/img/icons/menu-50w.png");
/* harmony import */ var _img_icons_menu_w_50w_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/icons/menu-w-50w.png */ "./src/img/icons/menu-w-50w.png");
/* harmony import */ var _img_icons_close_50w_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/icons/close-50w.png */ "./src/img/icons/close-50w.png");
/* harmony import */ var _img_icons_close_w_50w_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/icons/close-w-50w.png */ "./src/img/icons/close-w-50w.png");
/* harmony import */ var _img_icons_chevron_100w_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/icons/chevron-100w.png */ "./src/img/icons/chevron-100w.png");
/* harmony import */ var _img_icons_chevron_w_100w_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/icons/chevron-w-100w.png */ "./src/img/icons/chevron-w-100w.png");
/* harmony import */ var _img_profile_p_1000w_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/profile-p-1000w.jpg */ "./src/img/profile-p-1000w.jpg");









const imgNextDark = document.querySelectorAll(".img-next-dark");
const imgNext = document.querySelectorAll(".img-next");

imgNextDark.forEach((img) => {
  img.src = _img_icons_chevron_w_100w_png__WEBPACK_IMPORTED_MODULE_6__;
});

imgNext.forEach((img) => {
  img.src = _img_icons_chevron_100w_png__WEBPACK_IMPORTED_MODULE_5__;
});


/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menu: () => (/* binding */ menu)
/* harmony export */ });
const menu = (() => {
  const btnMenuL = document.querySelector("#btn-menu-l");
  const btnMenuLClose = document.querySelector("#btn-menu-l-close");

  const aside = document.querySelector("aside");
  const main = document.querySelector("main");

  const btnHomeL = document.querySelector("#btn-home-l");
  const btnAboutL = document.querySelector("#btn-about-l");
  const btnAboutMoreL = document.querySelector("#btn-about-more-l");
  const btnProjectsL = document.querySelector("#btn-projects-l");

  const home = document.querySelector("#home");
  const about = document.querySelector("#about");
  const articleAbout = document.querySelector("#article-about");
  const articleAboutMore = document.querySelector("#article-about-more");
  const projects = document.querySelector("#projects");

  let isOpenAboutMore = 0;

  function init() {
    _initBtnMenuL();
    _initBtnNavL();
    _initBtnAboutMoreL();

    // For testing
    btnMenuL.click();
    btnAboutL.click();
  }

  function _initBtnAboutMoreL() {
    btnAboutMoreL.onclick = () => {
      if (isOpenAboutMore === 1) articleAbout.scrollIntoView();
      else articleAboutMore.scrollIntoView();
      isOpenAboutMore = +!isOpenAboutMore;
    };
  }

  function _initBtnMenuL() {
    btnMenuL.onclick = () => {
      _toggleMenuL();
    };

    btnMenuLClose.onclick = () => {
      _toggleMenuL();
    };
  }

  function _toggleMenuL() {
    btnMenuL.classList.toggle("show");
    btnMenuLClose.classList.toggle("show");
    aside.classList.toggle("move");
    main.classList.toggle("move");
  }

  function _initBtnNavL() {
    btnHomeL.onclick = () => {
      btnMenuLClose.click();
      setTimeout(() => {
        home.scrollIntoView();
      }, 500);
    };

    btnAboutL.onclick = () => {
      btnMenuLClose.click();
      setTimeout(() => {
        about.scrollIntoView();
      }, 500);
    };

    btnProjectsL.onclick = () => {
      btnMenuLClose.click();
      setTimeout(() => {
        projects.scrollIntoView();
      }, 500);
    };
  }

  return { init };
})();




/***/ }),

/***/ "./src/js/scroll.js":
/*!**************************!*\
  !*** ./src/js/scroll.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scroll: () => (/* binding */ scroll)
/* harmony export */ });
const scroll = (() => {
  const main = document.querySelector("main");
  const home = document.querySelector("#home");

  const btnDarkMode = document.querySelectorAll(".btn-dark-mode");
  const spanMenu = document.querySelector("#menu-text > span");
  const spanContact = document.querySelector("#contact-text > span");

  const btnsMenuL = [
    document.querySelector("#btn-home-l"),
    document.querySelector("#btn-about-l"),
    document.querySelector("#btn-projects-l"),
  ];

  const marginTop = 56;
  let heightSection = 0;
  let scrollHeightSection = 0;
  let currentTheme = 1;

  function init() {
    _getScrollHeightSection();

    window.onresize = () => {
      _getScrollHeightSection();
    };

    main.onscrollend = () => {
      const scroll = main.scrollTop;
      if (scroll >= 0 && scroll < scrollHeightSection) {
        _changeTheme(1);
        _disableBtn(1);
      } else if (
        scroll >= scrollHeightSection &&
        scroll < scrollHeightSection * 2
      ) {
        _changeTheme(2);
        _disableBtn(2);
      } else {
        _changeTheme(3);
        _disableBtn(3);
      }
    };
  }

  function _getScrollHeightSection() {
    heightSection = home.clientHeight;
    scrollHeightSection = heightSection + marginTop;
  }

  function _changeTheme(theme) {
    spanMenu.classList.remove(`text-theme-${currentTheme}`);
    spanContact.classList.remove(`text-theme-${currentTheme}`);

    btnDarkMode.forEach((btn) => {
      btn.classList.remove(`theme-${currentTheme}`);
      btn.classList.add(`theme-${theme}`);
    });

    spanMenu.classList.add(`text-theme-${theme}`);
    spanContact.classList.add(`text-theme-${theme}`);

    currentTheme = theme;
  }

  function _disableBtn(n) {
    const index = n - 1;
    const length = btnsMenuL.length;
    for (let i = 0; i < length; i++) {
      if (i === index) btnsMenuL[i].disabled = true;
      else btnsMenuL[i].disabled = false;
    }
  }

  return { init };
})();




/***/ }),

/***/ "./src/font/Montserrat-VariableFont_wght.ttf":
/*!***************************************************!*\
  !*** ./src/font/Montserrat-VariableFont_wght.ttf ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7e687123cd4528224ce5.ttf";

/***/ }),

/***/ "./src/img/icons/chevron-100w.png":
/*!****************************************!*\
  !*** ./src/img/icons/chevron-100w.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8d43e0481e790ecacd50.png";

/***/ }),

/***/ "./src/img/icons/chevron-w-100w.png":
/*!******************************************!*\
  !*** ./src/img/icons/chevron-w-100w.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8550cc9ed27d939488ff.png";

/***/ }),

/***/ "./src/img/icons/close-50w.png":
/*!*************************************!*\
  !*** ./src/img/icons/close-50w.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "374c99d734a5edb033d5.png";

/***/ }),

/***/ "./src/img/icons/close-w-50w.png":
/*!***************************************!*\
  !*** ./src/img/icons/close-w-50w.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "30385db2f1e6e679c9a3.png";

/***/ }),

/***/ "./src/img/icons/favicon-32w.png":
/*!***************************************!*\
  !*** ./src/img/icons/favicon-32w.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "873f3c305999838ffcd7.png";

/***/ }),

/***/ "./src/img/icons/menu-50w.png":
/*!************************************!*\
  !*** ./src/img/icons/menu-50w.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5f0b7a27840f468f6fcd.png";

/***/ }),

/***/ "./src/img/icons/menu-w-50w.png":
/*!**************************************!*\
  !*** ./src/img/icons/menu-w-50w.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "411474f5f58f97694d9f.png";

/***/ }),

/***/ "./src/img/profile-p-1000w.jpg":
/*!*************************************!*\
  !*** ./src/img/profile-p-1000w.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e10112625a73d7322ecc.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _js_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/image */ "./src/js/image.js");
/* harmony import */ var _js_dark_mode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/dark-mode */ "./src/js/dark-mode.js");
/* harmony import */ var _js_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/menu */ "./src/js/menu.js");
/* harmony import */ var _js_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/scroll */ "./src/js/scroll.js");






_js_dark_mode__WEBPACK_IMPORTED_MODULE_2__.darkMode.init();
_js_menu__WEBPACK_IMPORTED_MODULE_3__.menu.init();
_js_scroll__WEBPACK_IMPORTED_MODULE_4__.scroll.init();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjO0FBQ2Qsa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Qsa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQiwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUIsMkJBQTJCO0FBQzNCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLDhGQUE4RixZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksT0FBTyxNQUFNLE9BQU8scUJBQXFCLG9CQUFvQixxQkFBcUIscUJBQXFCLE1BQU0sTUFBTSxXQUFXLE1BQU0sWUFBWSxNQUFNLE1BQU0scUJBQXFCLHFCQUFxQixxQkFBcUIsVUFBVSxvQkFBb0IscUJBQXFCLHFCQUFxQixxQkFBcUIscUJBQXFCLE1BQU0sT0FBTyxNQUFNLEtBQUssb0JBQW9CLHFCQUFxQixNQUFNLFFBQVEsTUFBTSxLQUFLLG9CQUFvQixvQkFBb0IscUJBQXFCLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sU0FBUyxNQUFNLFFBQVEscUJBQXFCLHFCQUFxQixxQkFBcUIsb0JBQW9CLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxRQUFRLE1BQU0sS0FBSyxvQkFBb0IscUJBQXFCLHFCQUFxQixNQUFNLFFBQVEsTUFBTSxTQUFTLHFCQUFxQixxQkFBcUIscUJBQXFCLG9CQUFvQixxQkFBcUIscUJBQXFCLHFCQUFxQixvQkFBb0Isb0JBQW9CLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxPQUFPLE1BQU0sUUFBUSxxQkFBcUIscUJBQXFCLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxPQUFPLE1BQU0sS0FBSyxxQkFBcUIscUJBQXFCLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE9BQU8sTUFBTSxLQUFLLHFCQUFxQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLGlCQUFpQixVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxPQUFPLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxPQUFPLE1BQU0sS0FBSyxvQkFBb0Isb0JBQW9CLE1BQU0sTUFBTSxvQkFBb0Isb0JBQW9CLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxRQUFRLE1BQU0sWUFBWSxvQkFBb0IscUJBQXFCLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sWUFBWSxLQUFLLFVBQVUsTUFBTSxZQUFZLE1BQU0sc0JBQXNCLHFCQUFxQixNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxLQUFLLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLEtBQUssTUFBTSxNQUFNLFdBQVcsV0FBVyxLQUFLLE1BQU0sTUFBTSxNQUFNLFdBQVcsS0FBSyxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sTUFBTSxLQUFLLFdBQVcsS0FBSyxLQUFLLE1BQU0sS0FBSyxVQUFVLFdBQVcsS0FBSyxNQUFNLE1BQU0sS0FBSyxLQUFLLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxLQUFLLE1BQU0sTUFBTSxLQUFLLFdBQVcsS0FBSyxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLE1BQU0sWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxPQUFPLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLFlBQVksTUFBTSxNQUFNLE9BQU8sS0FBSyxXQUFXLE1BQU0sTUFBTSxLQUFLLE1BQU0sWUFBWSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxPQUFPLEtBQUssS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsWUFBWSxhQUFhLGFBQWEsWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sVUFBVSxZQUFZLE1BQU0sS0FBSyxLQUFLLEtBQUssS0FBSyxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFdBQVcsS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLFdBQVcsS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sT0FBTyxLQUFLLFlBQVksTUFBTSxPQUFPLE1BQU0sWUFBWSxNQUFNLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxPQUFPLEtBQUssWUFBWSxNQUFNLE9BQU8sTUFBTSxZQUFZLE1BQU0sTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxPQUFPLEtBQUssWUFBWSxNQUFNLE9BQU8sTUFBTSxZQUFZLE1BQU0sTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFB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QUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDRDtBQUNzQjtBQUNUO0FBQ0k7O0FBRXJDLG1EQUFRO0FBQ1IsMENBQUk7QUFDSiw4Q0FBTSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9zdHlsZS5jc3M/OTAxMSIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9qcy9kYXJrLW1vZGUuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2pzL2ltYWdlLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9qcy9tZW51LmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9qcy9zY3JvbGwuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udC9Nb250c2VycmF0LVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIC8qIGh0dHBzOi8vZm9udHMuZ29vZ2xlLmNvbS9zcGVjaW1lbi9Nb250c2VycmF0ICovXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwiVHJ1ZVR5cGVcIik7XG59XG5cbi8qICEgdGFpbHdpbmRjc3MgdjMuNC40IHwgTUlUIExpY2Vuc2UgfCBodHRwczovL3RhaWx3aW5kY3NzLmNvbSAqL1xuXG4vKlxuMS4gUHJldmVudCBwYWRkaW5nIGFuZCBib3JkZXIgZnJvbSBhZmZlY3RpbmcgZWxlbWVudCB3aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvNClcbjIuIEFsbG93IGFkZGluZyBhIGJvcmRlciB0byBhbiBlbGVtZW50IGJ5IGp1c3QgYWRkaW5nIGEgYm9yZGVyLXdpZHRoLiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kY3NzL3RhaWx3aW5kY3NzL3B1bGwvMTE2KVxuKi9cblxuKixcbjo6YmVmb3JlLFxuOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cbiAgYm9yZGVyLXdpZHRoOiAwOyAvKiAyICovXG4gIGJvcmRlci1zdHlsZTogc29saWQ7IC8qIDIgKi9cbiAgYm9yZGVyLWNvbG9yOiAjZTVlN2ViOyAvKiAyICovXG59XG5cbjo6YmVmb3JlLFxuOjphZnRlciB7XG4gIC0tdHctY29udGVudDogJyc7XG59XG5cbi8qXG4xLiBVc2UgYSBjb25zaXN0ZW50IHNlbnNpYmxlIGxpbmUtaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cbjIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxuMy4gVXNlIGEgbW9yZSByZWFkYWJsZSB0YWIgc2l6ZS5cbjQuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgc2Fuc1xcYCBmb250LWZhbWlseSBieSBkZWZhdWx0LlxuNS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBzYW5zXFxgIGZvbnQtZmVhdHVyZS1zZXR0aW5ncyBieSBkZWZhdWx0LlxuNi4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBzYW5zXFxgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzIGJ5IGRlZmF1bHQuXG43LiBEaXNhYmxlIHRhcCBoaWdobGlnaHRzIG9uIGlPU1xuKi9cblxuaHRtbCxcbjpob3N0IHtcbiAgbGluZS1oZWlnaHQ6IDEuNTsgLyogMSAqL1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cbiAgLW1vei10YWItc2l6ZTogNDsgLyogMyAqL1xuICAtby10YWItc2l6ZTogNDtcbiAgICAgdGFiLXNpemU6IDQ7IC8qIDMgKi9cbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgU2Vnb2UgVUksIFJvYm90bywgVWJ1bnR1LCBDYW50YXJlbGwsIE5vdG8gU2Fucywgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiOyAvKiA0ICovXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogbm9ybWFsOyAvKiA1ICovXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBub3JtYWw7IC8qIDYgKi9cbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDsgLyogNyAqL1xufVxuXG4vKlxuMS4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxuMi4gSW5oZXJpdCBsaW5lLWhlaWdodCBmcm9tIFxcYGh0bWxcXGAgc28gdXNlcnMgY2FuIHNldCB0aGVtIGFzIGEgY2xhc3MgZGlyZWN0bHkgb24gdGhlIFxcYGh0bWxcXGAgZWxlbWVudC5cbiovXG5cbmJvZHkge1xuICBtYXJnaW46IDA7IC8qIDEgKi9cbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IC8qIDIgKi9cbn1cblxuLypcbjEuIEFkZCB0aGUgY29ycmVjdCBoZWlnaHQgaW4gRmlyZWZveC5cbjIuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIG9mIGJvcmRlciBjb2xvciBpbiBGaXJlZm94LiAoaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTkwNjU1KVxuMy4gRW5zdXJlIGhvcml6b250YWwgcnVsZXMgYXJlIHZpc2libGUgYnkgZGVmYXVsdC5cbiovXG5cbmhyIHtcbiAgaGVpZ2h0OiAwOyAvKiAxICovXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDsgLyogMyAqL1xufVxuXG4vKlxuQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXG4qL1xuXG5hYmJyOndoZXJlKFt0aXRsZV0pIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcbn1cblxuLypcblJlbW92ZSB0aGUgZGVmYXVsdCBmb250IHNpemUgYW5kIHdlaWdodCBmb3IgaGVhZGluZ3MuXG4qL1xuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xufVxuXG4vKlxuUmVzZXQgbGlua3MgdG8gb3B0aW1pemUgZm9yIG9wdC1pbiBzdHlsaW5nIGluc3RlYWQgb2Ygb3B0LW91dC5cbiovXG5cbmEge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xufVxuXG4vKlxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIEVkZ2UgYW5kIFNhZmFyaS5cbiovXG5cbmIsXG5zdHJvbmcge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4vKlxuMS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBtb25vXFxgIGZvbnQtZmFtaWx5IGJ5IGRlZmF1bHQuXG4yLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYG1vbm9cXGAgZm9udC1mZWF0dXJlLXNldHRpbmdzIGJ5IGRlZmF1bHQuXG4zLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYG1vbm9cXGAgZm9udC12YXJpYXRpb24tc2V0dGluZ3MgYnkgZGVmYXVsdC5cbjQuIENvcnJlY3QgdGhlIG9kZCBcXGBlbVxcYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXG4qL1xuXG5jb2RlLFxua2JkLFxuc2FtcCxcbnByZSB7XG4gIGZvbnQtZmFtaWx5OiB1aS1tb25vc3BhY2UsIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIiwgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7IC8qIDEgKi9cbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBub3JtYWw7IC8qIDIgKi9cbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IG5vcm1hbDsgLyogMyAqL1xuICBmb250LXNpemU6IDFlbTsgLyogNCAqL1xufVxuXG4vKlxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4qL1xuXG5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogODAlO1xufVxuXG4vKlxuUHJldmVudCBcXGBzdWJcXGAgYW5kIFxcYHN1cFxcYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxuKi9cblxuc3ViLFxuc3VwIHtcbiAgZm9udC1zaXplOiA3NSU7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuc3ViIHtcbiAgYm90dG9tOiAtMC4yNWVtO1xufVxuXG5zdXAge1xuICB0b3A6IC0wLjVlbTtcbn1cblxuLypcbjEuIFJlbW92ZSB0ZXh0IGluZGVudGF0aW9uIGZyb20gdGFibGUgY29udGVudHMgaW4gQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05OTkwODgsIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yMDEyOTcpXG4yLiBDb3JyZWN0IHRhYmxlIGJvcmRlciBjb2xvciBpbmhlcml0YW5jZSBpbiBhbGwgQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05MzU3MjksIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTUwMTYpXG4zLiBSZW1vdmUgZ2FwcyBiZXR3ZWVuIHRhYmxlIGJvcmRlcnMgYnkgZGVmYXVsdC5cbiovXG5cbnRhYmxlIHtcbiAgdGV4dC1pbmRlbnQ6IDA7IC8qIDEgKi9cbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0OyAvKiAyICovXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IC8qIDMgKi9cbn1cblxuLypcbjEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxuMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxuMy4gUmVtb3ZlIGRlZmF1bHQgcGFkZGluZyBpbiBhbGwgYnJvd3NlcnMuXG4qL1xuXG5idXR0b24sXG5pbnB1dCxcbm9wdGdyb3VwLFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IGluaGVyaXQ7IC8qIDEgKi9cbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IGluaGVyaXQ7IC8qIDEgKi9cbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0OyAvKiAxICovXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyAvKiAxICovXG4gIGxldHRlci1zcGFjaW5nOiBpbmhlcml0OyAvKiAxICovXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAxICovXG4gIG1hcmdpbjogMDsgLyogMiAqL1xuICBwYWRkaW5nOiAwOyAvKiAzICovXG59XG5cbi8qXG5SZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UgYW5kIEZpcmVmb3guXG4qL1xuXG5idXR0b24sXG5zZWxlY3Qge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLypcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4yLiBSZW1vdmUgZGVmYXVsdCBidXR0b24gc3R5bGVzLlxuKi9cblxuYnV0dG9uLFxuaW5wdXQ6d2hlcmUoW3R5cGU9J2J1dHRvbiddKSxcbmlucHV0OndoZXJlKFt0eXBlPSdyZXNldCddKSxcbmlucHV0OndoZXJlKFt0eXBlPSdzdWJtaXQnXSkge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgLyogMiAqL1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lOyAvKiAyICovXG59XG5cbi8qXG5Vc2UgdGhlIG1vZGVybiBGaXJlZm94IGZvY3VzIHN0eWxlIGZvciBhbGwgZm9jdXNhYmxlIGVsZW1lbnRzLlxuKi9cblxuOi1tb3otZm9jdXNyaW5nIHtcbiAgb3V0bGluZTogYXV0bztcbn1cblxuLypcblJlbW92ZSB0aGUgYWRkaXRpb25hbCBcXGA6aW52YWxpZFxcYCBzdHlsZXMgaW4gRmlyZWZveC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL2dlY2tvLWRldi9ibG9iLzJmOWVhY2Q5ZDNkOTk1YzkzN2I0MjUxYTU1NTdkOTVkNDk0YzliZTEvbGF5b3V0L3N0eWxlL3Jlcy9mb3Jtcy5jc3MjTDcyOC1MNzM3KVxuKi9cblxuOi1tb3otdWktaW52YWxpZCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSBhbmQgRmlyZWZveC5cbiovXG5cbnByb2dyZXNzIHtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG4vKlxuQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gU2FmYXJpLlxuKi9cblxuOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vKlxuMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXG4yLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cbiovXG5cblt0eXBlPSdzZWFyY2gnXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXG59XG5cbi8qXG5SZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXG4qL1xuXG46Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi8qXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBcXGBpbmhlcml0XFxgIGluIFNhZmFyaS5cbiovXG5cbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xuICBmb250OiBpbmhlcml0OyAvKiAyICovXG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cbiovXG5cbnN1bW1hcnkge1xuICBkaXNwbGF5OiBsaXN0LWl0ZW07XG59XG5cbi8qXG5SZW1vdmVzIHRoZSBkZWZhdWx0IHNwYWNpbmcgYW5kIGJvcmRlciBmb3IgYXBwcm9wcmlhdGUgZWxlbWVudHMuXG4qL1xuXG5ibG9ja3F1b3RlLFxuZGwsXG5kZCxcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbmhyLFxuZmlndXJlLFxucCxcbnByZSB7XG4gIG1hcmdpbjogMDtcbn1cblxuZmllbGRzZXQge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmxlZ2VuZCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbm9sLFxudWwsXG5tZW51IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4vKlxuUmVzZXQgZGVmYXVsdCBzdHlsaW5nIGZvciBkaWFsb2dzLlxuKi9cblxuZGlhbG9nIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLypcblByZXZlbnQgcmVzaXppbmcgdGV4dGFyZWFzIGhvcml6b250YWxseSBieSBkZWZhdWx0LlxuKi9cblxudGV4dGFyZWEge1xuICByZXNpemU6IHZlcnRpY2FsO1xufVxuXG4vKlxuMS4gUmVzZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgb3BhY2l0eSBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kbGFicy90YWlsd2luZGNzcy9pc3N1ZXMvMzMwMClcbjIuIFNldCB0aGUgZGVmYXVsdCBwbGFjZWhvbGRlciBjb2xvciB0byB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgZ3JheSA0MDAgY29sb3IuXG4qL1xuXG5pbnB1dDo6LW1vei1wbGFjZWhvbGRlciwgdGV4dGFyZWE6Oi1tb3otcGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAxOyAvKiAxICovXG4gIGNvbG9yOiAjOWNhM2FmOyAvKiAyICovXG59XG5cbmlucHV0OjpwbGFjZWhvbGRlcixcbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cbiAgY29sb3I6ICM5Y2EzYWY7IC8qIDIgKi9cbn1cblxuLypcblNldCB0aGUgZGVmYXVsdCBjdXJzb3IgZm9yIGJ1dHRvbnMuXG4qL1xuXG5idXR0b24sXG5bcm9sZT1cImJ1dHRvblwiXSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLypcbk1ha2Ugc3VyZSBkaXNhYmxlZCBidXR0b25zIGRvbid0IGdldCB0aGUgcG9pbnRlciBjdXJzb3IuXG4qL1xuXG46ZGlzYWJsZWQge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi8qXG4xLiBNYWtlIHJlcGxhY2VkIGVsZW1lbnRzIFxcYGRpc3BsYXk6IGJsb2NrXFxgIGJ5IGRlZmF1bHQuIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxuMi4gQWRkIFxcYHZlcnRpY2FsLWFsaWduOiBtaWRkbGVcXGAgdG8gYWxpZ24gcmVwbGFjZWQgZWxlbWVudHMgbW9yZSBzZW5zaWJseSBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL2plbnNpbW1vbnMvY3NzcmVtZWR5L2lzc3Vlcy8xNCNpc3N1ZWNvbW1lbnQtNjM0OTM0MjEwKVxuICAgVGhpcyBjYW4gdHJpZ2dlciBhIHBvb3JseSBjb25zaWRlcmVkIGxpbnQgZXJyb3IgaW4gc29tZSB0b29scyBidXQgaXMgaW5jbHVkZWQgYnkgZGVzaWduLlxuKi9cblxuaW1nLFxuc3ZnLFxudmlkZW8sXG5jYW52YXMsXG5hdWRpbyxcbmlmcmFtZSxcbmVtYmVkLFxub2JqZWN0IHtcbiAgZGlzcGxheTogYmxvY2s7IC8qIDEgKi9cbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgLyogMiAqL1xufVxuXG4vKlxuQ29uc3RyYWluIGltYWdlcyBhbmQgdmlkZW9zIHRvIHRoZSBwYXJlbnQgd2lkdGggYW5kIHByZXNlcnZlIHRoZWlyIGludHJpbnNpYyBhc3BlY3QgcmF0aW8uIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxuKi9cblxuaW1nLFxudmlkZW8ge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLyogTWFrZSBlbGVtZW50cyB3aXRoIHRoZSBIVE1MIGhpZGRlbiBhdHRyaWJ1dGUgc3RheSBoaWRkZW4gYnkgZGVmYXVsdCAqL1xuXG5baGlkZGVuXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIEhpZGUgc2Nyb2xsYmFyIGZvciBJRSwgRWRnZSBhbmQgRmlyZWZveCAqL1xuXG5tYWluLFxuICBzZWN0aW9uIHtcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IC8qIElFIGFuZCBFZGdlICovXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAvKiBGaXJlZm94ICovXG4gIH1cblxuLyogSGlkZSBzY3JvbGxiYXIgZm9yIENocm9tZSwgU2FmYXJpIGFuZCBPcGVyYSAqL1xuXG5tYWluOjotd2Via2l0LXNjcm9sbGJhcixcbiAgc2VjdGlvbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5ib2R5IHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIDEpO1xuICBjb2xvcjogcmdiYSgzOSwgMzksIDQyLCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cblxuYm9keTp3aGVyZSguZGFyaywgLmRhcmsgKikge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgMSk7XG4gIGNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuXG5ib2R5ICoge1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvciwgYmFja2dyb3VuZC1jb2xvciwgYm9yZGVyLWNvbG9yLCB0ZXh0LWRlY29yYXRpb24tY29sb3IsIGZpbGwsIHN0cm9rZTtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDc1bXM7XG59XG5cbmhlYWRlcixcbiAgZm9vdGVyIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbiAgei1pbmRleDogNTA7XG4gIGhlaWdodDogMy41cmVtO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAxLjc1cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxLjc1cmVtO1xufVxuXG5oZWFkZXI6d2hlcmUoLmRhcmssIC5kYXJrICopLFxuICBmb290ZXI6d2hlcmUoLmRhcmssIC5kYXJrICopIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG5cbiAgaGVhZGVyLFxuICBmb290ZXIge1xuICAgIHBhZGRpbmctbGVmdDogMy41cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDMuNXJlbTtcbiAgfVxufVxuXG5hc2lkZSB7XG4gIG1hcmdpbi10b3A6IDMuNXJlbTtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMiAqIDU2cHgpO1xuICBwYWRkaW5nLWxlZnQ6IDIwMHB4O1xufVxuXG5tYWluIHtcbiAgbWFyZ2luLXRvcDogMy41cmVtO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyICogNTZweCk7XG4gIHdpZHRoOiAxMDAlO1xuICBzY3JvbGwtc25hcC10eXBlOiB5IHZhcigtLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3MpO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG5zZWN0aW9uIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMiAqIDU2cHgpO1xuICBzY3JvbGwtc25hcC1hbGlnbjogY2VudGVyO1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xuICBwYWRkaW5nLWxlZnQ6IDEuNzVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDEuNzVyZW07XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuXG4gIHNlY3Rpb24ge1xuICAgIHBhZGRpbmctbGVmdDogMy41cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDMuNXJlbTtcbiAgfVxufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMTB2dztcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbGluZS1oZWlnaHQ6IDAuODtcbn1cblxuQG1lZGlhIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcblxuICBoMSB7XG4gICAgZm9udC1zaXplOiAxNXZ3O1xuICB9XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAzLjc1cmVtO1xuICBmb250LXdlaWdodDogODAwO1xuICBsaW5lLWhlaWdodDogMC44O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcblxuICBoMiB7XG4gICAgZm9udC1zaXplOiA0LjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gIH1cbn1cblxuYSB7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDUwMG1zIGVhc2U7XG4gIH1cblxuYnV0dG9uOmRpc2FibGVkIHtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2JhKDE2MSwgMTYxLCAxNzAsIDEpO1xuICBjb2xvcjogcmdiYSgxNjEsIDE2MSwgMTcwLCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cblxuYnV0dG9uOmRpc2FibGVkOndoZXJlKC5kYXJrLCAuZGFyayAqKSB7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiYSgxMTMsIDExMywgMTIyLCAxKTtcbiAgY29sb3I6IHJnYmEoMTEzLCAxMTMsIDEyMiwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG5cbmJ1dHRvbjpkaXNhYmxlZCB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cblxuKiwgOjpiZWZvcmUsIDo6YWZ0ZXIge1xuICAtLXR3LWJvcmRlci1zcGFjaW5nLXg6IDA7XG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteTogMDtcbiAgLS10dy10cmFuc2xhdGUteDogMDtcbiAgLS10dy10cmFuc2xhdGUteTogMDtcbiAgLS10dy1yb3RhdGU6IDA7XG4gIC0tdHctc2tldy14OiAwO1xuICAtLXR3LXNrZXcteTogMDtcbiAgLS10dy1zY2FsZS14OiAxO1xuICAtLXR3LXNjYWxlLXk6IDE7XG4gIC0tdHctcGFuLXg6ICA7XG4gIC0tdHctcGFuLXk6ICA7XG4gIC0tdHctcGluY2gtem9vbTogIDtcbiAgLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzOiBwcm94aW1pdHk7XG4gIC0tdHctZ3JhZGllbnQtZnJvbS1wb3NpdGlvbjogIDtcbiAgLS10dy1ncmFkaWVudC12aWEtcG9zaXRpb246ICA7XG4gIC0tdHctZ3JhZGllbnQtdG8tcG9zaXRpb246ICA7XG4gIC0tdHctb3JkaW5hbDogIDtcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XG4gIC0tdHctbnVtZXJpYy1maWd1cmU6ICA7XG4gIC0tdHctbnVtZXJpYy1zcGFjaW5nOiAgO1xuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XG4gIC0tdHctcmluZy1pbnNldDogIDtcbiAgLS10dy1yaW5nLW9mZnNldC13aWR0aDogMHB4O1xuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xuICAtLXR3LXJpbmctY29sb3I6IHJnYmEoNTksIDEzMCwgMjQ2LCAwLjUpO1xuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XG4gIC0tdHctcmluZy1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xuICAtLXR3LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMCByZ2JhKDAsMCwwLDApO1xuICAtLXR3LWJsdXI6ICA7XG4gIC0tdHctYnJpZ2h0bmVzczogIDtcbiAgLS10dy1jb250cmFzdDogIDtcbiAgLS10dy1ncmF5c2NhbGU6ICA7XG4gIC0tdHctaHVlLXJvdGF0ZTogIDtcbiAgLS10dy1pbnZlcnQ6ICA7XG4gIC0tdHctc2F0dXJhdGU6ICA7XG4gIC0tdHctc2VwaWE6ICA7XG4gIC0tdHctZHJvcC1zaGFkb3c6ICA7XG4gIC0tdHctYmFja2Ryb3AtYmx1cjogIDtcbiAgLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzOiAgO1xuICAtLXR3LWJhY2tkcm9wLWNvbnRyYXN0OiAgO1xuICAtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZTogIDtcbiAgLS10dy1iYWNrZHJvcC1odWUtcm90YXRlOiAgO1xuICAtLXR3LWJhY2tkcm9wLWludmVydDogIDtcbiAgLS10dy1iYWNrZHJvcC1vcGFjaXR5OiAgO1xuICAtLXR3LWJhY2tkcm9wLXNhdHVyYXRlOiAgO1xuICAtLXR3LWJhY2tkcm9wLXNlcGlhOiAgO1xuICAtLXR3LWNvbnRhaW4tc2l6ZTogIDtcbiAgLS10dy1jb250YWluLWxheW91dDogIDtcbiAgLS10dy1jb250YWluLXBhaW50OiAgO1xuICAtLXR3LWNvbnRhaW4tc3R5bGU6ICA7XG59XG5cbjo6YmFja2Ryb3Age1xuICAtLXR3LWJvcmRlci1zcGFjaW5nLXg6IDA7XG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteTogMDtcbiAgLS10dy10cmFuc2xhdGUteDogMDtcbiAgLS10dy10cmFuc2xhdGUteTogMDtcbiAgLS10dy1yb3RhdGU6IDA7XG4gIC0tdHctc2tldy14OiAwO1xuICAtLXR3LXNrZXcteTogMDtcbiAgLS10dy1zY2FsZS14OiAxO1xuICAtLXR3LXNjYWxlLXk6IDE7XG4gIC0tdHctcGFuLXg6ICA7XG4gIC0tdHctcGFuLXk6ICA7XG4gIC0tdHctcGluY2gtem9vbTogIDtcbiAgLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzOiBwcm94aW1pdHk7XG4gIC0tdHctZ3JhZGllbnQtZnJvbS1wb3NpdGlvbjogIDtcbiAgLS10dy1ncmFkaWVudC12aWEtcG9zaXRpb246ICA7XG4gIC0tdHctZ3JhZGllbnQtdG8tcG9zaXRpb246ICA7XG4gIC0tdHctb3JkaW5hbDogIDtcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XG4gIC0tdHctbnVtZXJpYy1maWd1cmU6ICA7XG4gIC0tdHctbnVtZXJpYy1zcGFjaW5nOiAgO1xuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XG4gIC0tdHctcmluZy1pbnNldDogIDtcbiAgLS10dy1yaW5nLW9mZnNldC13aWR0aDogMHB4O1xuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xuICAtLXR3LXJpbmctY29sb3I6IHJnYmEoNTksIDEzMCwgMjQ2LCAwLjUpO1xuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XG4gIC0tdHctcmluZy1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xuICAtLXR3LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMCByZ2JhKDAsMCwwLDApO1xuICAtLXR3LWJsdXI6ICA7XG4gIC0tdHctYnJpZ2h0bmVzczogIDtcbiAgLS10dy1jb250cmFzdDogIDtcbiAgLS10dy1ncmF5c2NhbGU6ICA7XG4gIC0tdHctaHVlLXJvdGF0ZTogIDtcbiAgLS10dy1pbnZlcnQ6ICA7XG4gIC0tdHctc2F0dXJhdGU6ICA7XG4gIC0tdHctc2VwaWE6ICA7XG4gIC0tdHctZHJvcC1zaGFkb3c6ICA7XG4gIC0tdHctYmFja2Ryb3AtYmx1cjogIDtcbiAgLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzOiAgO1xuICAtLXR3LWJhY2tkcm9wLWNvbnRyYXN0OiAgO1xuICAtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZTogIDtcbiAgLS10dy1iYWNrZHJvcC1odWUtcm90YXRlOiAgO1xuICAtLXR3LWJhY2tkcm9wLWludmVydDogIDtcbiAgLS10dy1iYWNrZHJvcC1vcGFjaXR5OiAgO1xuICAtLXR3LWJhY2tkcm9wLXNhdHVyYXRlOiAgO1xuICAtLXR3LWJhY2tkcm9wLXNlcGlhOiAgO1xuICAtLXR3LWNvbnRhaW4tc2l6ZTogIDtcbiAgLS10dy1jb250YWluLWxheW91dDogIDtcbiAgLS10dy1jb250YWluLXBhaW50OiAgO1xuICAtLXR3LWNvbnRhaW4tc3R5bGU6ICA7XG59XG4ubW9udHNlcnJhdCB7XG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtb3B0aWNhbC1zaXppbmc6IGF1dG87XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICB9XG4uYmctdGhlbWUtMSB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDgsIDExMywgMTEzLCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDgsIDExMywgMTEzLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4uYmctdGhlbWUtMiB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsIDIwNCwgMjEsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MCwgMjA0LCAyMSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLmJnLXRoZW1lLTMge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQsIDE2NSwgMjMzLCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNCwgMTY1LCAyMzMsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5iZy1saWdodCB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4uYmctZGFyayB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMzksIDQyLCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMzksIDQyLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4udGV4dC10aGVtZS0xIHtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2JhKDI0OCwgMTEzLCAxMTMsIDEpO1xuICBjb2xvcjogcmdiYSgyNDgsIDExMywgMTEzLCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cbi50ZXh0LXRoZW1lLTIge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoMjUwLCAyMDQsIDIxLCAxKTtcbiAgY29sb3I6IHJnYmEoMjUwLCAyMDQsIDIxLCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cbi50ZXh0LXRoZW1lLTMge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoMTQsIDE2NSwgMjMzLCAxKTtcbiAgY29sb3I6IHJnYmEoMTQsIDE2NSwgMjMzLCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cbi50ZXh0LWxpZ2h0IHtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIDEpO1xuICBjb2xvcjogcmdiYSgzOSwgMzksIDQyLCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cbi50ZXh0LWRhcmsge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgMSk7XG4gIGNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuLmJ0bi1kYXJrLW1vZGUge1xuICBhc3BlY3QtcmF0aW86IDI7XG4gIGhlaWdodDogMS4yNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG4gIC0tdHctc2hhZG93OiBpbnNldCAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiBpbnNldCAwIDJweCA0cHggMCB2YXIoLS10dy1zaGFkb3ctY29sb3IpO1xuICBib3gtc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKSwgMCAwIHJnYmEoMCwwLDAsMCksIGluc2V0IDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwIHJnYmEoMCwwLDAsMCkpLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwIHJnYmEoMCwwLDAsMCkpLCB2YXIoLS10dy1zaGFkb3cpO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG5cbiAgLmJ0bi1kYXJrLW1vZGUge1xuICAgIGhlaWdodDogMS41cmVtO1xuICB9XG59XG4uYnRuLWRhcmstbW9kZSB7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciA1MDBtcyBlYXNlO1xuICB9XG4uYnRuLWRhcmstbW9kZS50aGVtZS0xOmhvdmVyIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0OCwgMTEzLCAxMTMsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0OCwgMTEzLCAxMTMsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5idG4tZGFyay1tb2RlLnRoZW1lLTI6aG92ZXIge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUwLCAyMDQsIDIxLCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsIDIwNCwgMjEsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5idG4tZGFyay1tb2RlLnRoZW1lLTM6aG92ZXIge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQsIDE2NSwgMjMzLCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNCwgMTY1LCAyMzMsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5kYXJrLW1vZGUtYmFsbCB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG4gIG1hcmdpbi1sZWZ0OiAwLjEyNXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjEyNXJlbTtcbiAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0cHgpO1xuICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcbn1cbi5kYXJrLW1vZGUtYmFsbDp3aGVyZSguZGFyaywgLmRhcmsgKikge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLmRhcmstbW9kZS1iYWxsIHtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNzUwbXMgZWFzZTtcbiAgfVxuLmRhcmstbW9kZS1iYWxsLmRhcmsge1xuICAtLXR3LXRyYW5zbGF0ZS14OiBjYWxjKDEwMCUgKyA0cHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZShjYWxjKDEwMCUgKyA0cHgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuLmljb24tbW9kZS1kYXJrLFxuICAuaWNvbi1tb2RlIHtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDc1bXMgZWFzZTtcbiAgfVxuLmljb24tbW9kZS1kYXJrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xufVxuLmljb24tbW9kZS1kYXJrOndoZXJlKC5kYXJrLCAuZGFyayAqKSB7XG4gIG9wYWNpdHk6IDE7XG59XG4uaWNvbi1tb2RlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAxO1xufVxuLmljb24tbW9kZTp3aGVyZSguZGFyaywgLmRhcmsgKikge1xuICBvcGFjaXR5OiAwO1xufVxuLmljb24tY29udGFjdC1saW5rIHtcbiAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBmb250LXNpemU6IDMwcHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcblxuICAuaWNvbi1jb250YWN0LWxpbmsge1xuICAgIGhlaWdodDogNDBweDtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gIH1cbn1cbi5pY29uLW5leHQge1xuICBhc3BlY3QtcmF0aW86IDEgLyAxO1xuICBoZWlnaHQ6IDcwcHg7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDUwMG1zIGVhc2U7XG59XG5idXR0b246aG92ZXIgLmljb24tbmV4dCB7XG4gIC0tdHctc2NhbGUteDogMS4xO1xuICAtLXR3LXNjYWxlLXk6IDEuMTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgoMS4xKSBzY2FsZVkoMS4xKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG4udW5kZXJsaW5lLWgsXG4gIC5oaWdobGlnaHQtaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi51bmRlcmxpbmUtaDphZnRlciB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMzksIDQyLCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMzksIDQyLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICBib3R0b206IDAuMTI1cmVtO1xuICBoZWlnaHQ6IDAuMTI1cmVtO1xuICB3aWR0aDogMHB4O1xuICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG59XG4udW5kZXJsaW5lLWg6d2hlcmUoLmRhcmssIC5kYXJrICopOmFmdGVyIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi51bmRlcmxpbmUtaDphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCA1MDBtcyBlYXNlO1xuICB9XG5idXR0b246aG92ZXIgLnVuZGVybGluZS1oOmFmdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaGlnaGxpZ2h0LWg6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjUlO1xuICBsZWZ0OiAtMTVweDtcbiAgei1pbmRleDogLTEwO1xuICBoZWlnaHQ6IDUwJTtcbiAgd2lkdGg6IDBweDtcbiAgb3BhY2l0eTogMC44O1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgdHJhbnNpdGlvbjogd2lkdGggNTAwbXMgZWFzZTtcbn1cbmJ1dHRvbjpob3ZlciAuaGlnaGxpZ2h0LWg6YWZ0ZXIge1xuICB3aWR0aDogY2FsYygxMDAlICsgMzBweCk7XG59XG4vKiBBbmltYXRpb24gKi9cbltjbGFzc149XCJhbmltYXRlLVwiXSB7XG4gICAgd2lsbC1jaGFuZ2U6IGFuaW1hdGlvbjtcbiAgfVxuLmZpeGVkIHtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuLmFic29sdXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLnJlbGF0aXZlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmJvdHRvbS0wIHtcbiAgYm90dG9tOiAwcHg7XG59XG4ubGVmdC0xXFxcXC8yIHtcbiAgbGVmdDogNTAlO1xufVxuLmxlZnQtXFxcXFstMTIwcHhcXFxcXSB7XG4gIGxlZnQ6IC0xMjBweDtcbn1cbi5sZWZ0LVxcXFxbLTE1NnB4XFxcXF0ge1xuICBsZWZ0OiAtMTU2cHg7XG59XG4ucmlnaHQtMCB7XG4gIHJpZ2h0OiAwcHg7XG59XG4ucmlnaHQtMTQge1xuICByaWdodDogMy41cmVtO1xufVxuLnRvcC0wIHtcbiAgdG9wOiAwcHg7XG59XG4udG9wLTFcXFxcLzIge1xuICB0b3A6IDUwJTtcbn1cbi50b3AtXFxcXFs1MHZoXFxcXF0ge1xuICB0b3A6IDUwdmg7XG59XG4uei00MCB7XG4gIHotaW5kZXg6IDQwO1xufVxuLnotNTAge1xuICB6LWluZGV4OiA1MDtcbn1cbi5tdC0xNCB7XG4gIG1hcmdpbi10b3A6IDMuNXJlbTtcbn1cbi5tdC0yIHtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xufVxuLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmFzcGVjdC1zcXVhcmUge1xuICBhc3BlY3QtcmF0aW86IDEgLyAxO1xufVxuLmgtMTAge1xuICBoZWlnaHQ6IDIuNXJlbTtcbn1cbi5oLVxcXFxbY2FsY1xcXFwoMjB2d1xcXFwqMFxcXFwuOFxcXFwpXFxcXF0ge1xuICBoZWlnaHQ6IGNhbGMoMjB2dyAqIDAuOCk7XG59XG4uaC1maXQge1xuICBoZWlnaHQ6IC1tb3otZml0LWNvbnRlbnQ7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG59XG4uaC1mdWxsIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnctXFxcXFs0MFxcXFwlXFxcXF0ge1xuICB3aWR0aDogNDAlO1xufVxuLnctZml0IHtcbiAgd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbn1cbi53LWZ1bGwge1xuICB3aWR0aDogMTAwJTtcbn1cbi5taW4tdy1cXFxcWzcwXFxcXCVcXFxcXSB7XG4gIG1pbi13aWR0aDogNzAlO1xufVxuLm1pbi13LWZ1bGwge1xuICBtaW4td2lkdGg6IDEwMCU7XG59XG4uLXRyYW5zbGF0ZS14LTFcXFxcLzIge1xuICAtLXR3LXRyYW5zbGF0ZS14OiAtNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuLi10cmFuc2xhdGUteS0xXFxcXC8yIHtcbiAgLS10dy10cmFuc2xhdGUteTogLTUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCAtNTAlKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbi50cmFuc2xhdGUteC0xXFxcXC8yIHtcbiAgLS10dy10cmFuc2xhdGUteDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG4udHJhbnNsYXRlLXgtXFxcXFstNDB2d1xcXFxdIHtcbiAgLS10dy10cmFuc2xhdGUteDogLTQwdnc7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC00MHZ3LCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuLnJvdGF0ZS05MCB7XG4gIC0tdHctcm90YXRlOiA5MGRlZztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSg5MGRlZykgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbkBrZXlmcmFtZXMgYm91bmNlLWNoZXZyb24tZG93biB7XG5cbiAgMCUsIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC0yNSUpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjgsIDAsIDEsIDEpO1xuICB9XG5cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgwKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbiAgfVxufVxuLmFuaW1hdGUtY2hldnJvbi1kb3duIHtcbiAgYW5pbWF0aW9uOiBib3VuY2UtY2hldnJvbi1kb3duIDFzIGluZmluaXRlO1xufVxuQGtleWZyYW1lcyBib3VuY2UtY2hldnJvbi1yaWdodCB7XG5cbiAgMCUsIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoLTkwZGVnKSB0cmFuc2xhdGVZKC0yNSUpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjgsIDAsIDEsIDEpO1xuICB9XG5cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKC05MGRlZykgdHJhbnNsYXRlWSgwKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbiAgfVxufVxuLmFuaW1hdGUtY2hldnJvbi1yaWdodCB7XG4gIGFuaW1hdGlvbjogYm91bmNlLWNoZXZyb24tcmlnaHQgMXMgaW5maW5pdGU7XG59XG5Aa2V5ZnJhbWVzIHNsaWRlLXVwIHtcblxuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG4uYW5pbWF0ZS1oZWxsbyB7XG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMXMgMTtcbn1cbkBrZXlmcmFtZXMgYm91bmNlLW1lbnUge1xuXG4gIDAlLCAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKC05MGRlZykgdHJhbnNsYXRlWSgwKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC44LCAwLCAxLCAxKTtcbiAgfVxuXG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSgtOTBkZWcpIHRyYW5zbGF0ZVkoMjUlKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbiAgfVxufVxuLmFuaW1hdGUtbWVudSB7XG4gIGFuaW1hdGlvbjogYm91bmNlLW1lbnUgMS41cyBpbmZpbml0ZTtcbn1cbi5mbGV4LXJvdyB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4uZmxleC1jb2wge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLml0ZW1zLWNlbnRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uanVzdGlmeS1jZW50ZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5qdXN0aWZ5LWJldHdlZW4ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uanVzdGlmeS1ldmVubHkge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cbi5nYXAtMiB7XG4gIGdhcDogMC41cmVtO1xufVxuLmdhcC0zIHtcbiAgZ2FwOiAwLjc1cmVtO1xufVxuLmdhcC01IHtcbiAgZ2FwOiAxLjI1cmVtO1xufVxuLm92ZXJmbG93LWhpZGRlbiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ub3ZlcmZsb3cteC1oaWRkZW4ge1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG4udGV4dC1wcmV0dHkge1xuICB0ZXh0LXdyYXA6IHByZXR0eTtcbn1cbi5weC0xNCB7XG4gIHBhZGRpbmctbGVmdDogMy41cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAzLjVyZW07XG59XG4ucGwtMCB7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xufVxuLnBsLTcge1xuICBwYWRkaW5nLWxlZnQ6IDEuNzVyZW07XG59XG4udGV4dC1qdXN0aWZ5IHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbi50ZXh0LXN0YXJ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi50ZXh0LTJ4bCB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBsaW5lLWhlaWdodDogMnJlbTtcbn1cbi50ZXh0LTR4bCB7XG4gIGZvbnQtc2l6ZTogMi4yNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcbn1cbi50ZXh0LTZ4bCB7XG4gIGZvbnQtc2l6ZTogMy43NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG4udGV4dC05eGwge1xuICBmb250LXNpemU6IDhyZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuLnRleHQtc20ge1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBsaW5lLWhlaWdodDogMS4yNXJlbTtcbn1cbi50ZXh0LXhsIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBsaW5lLWhlaWdodDogMS43NXJlbTtcbn1cbi5mb250LWJvbGQge1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLmZvbnQtZXh0cmFib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cbi5mb250LXNlbWlib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi51cHBlcmNhc2Uge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLml0YWxpYyB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi51bmRlcmxpbmUge1xuICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xufVxuLm9wYWNpdHktMCB7XG4gIG9wYWNpdHk6IDA7XG59XG5tYWluLFxuICBhc2lkZSxcbiAgI2J0bi1tZW51LWwsXG4gICNidG4tbWVudS1sLWNsb3NlLFxuICAjYnRuLW1lbnUtbC1jbG9zZSA+IGRpdiB7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDUwMG1zIGVhc2U7XG4gIH1cbm1haW4ubW92ZSB7XG4gIC0tdHctdHJhbnNsYXRlLXg6IDQwdnc7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDQwdncsIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG5hc2lkZS5tb3ZlIHtcbiAgLS10dy10cmFuc2xhdGUteDogMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG4jYnRuLW1lbnUtbC5zaG93IHtcbiAgLS10dy10cmFuc2xhdGUteTogMjAwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgMjAwcHgpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuI2J0bi1tZW51LWwtY2xvc2Uuc2hvdyB7XG4gIC0tdHctdHJhbnNsYXRlLXg6IDIwMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMDBweCwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbiNidG4tbWVudS1sLWNsb3NlOmhvdmVyID4gZGl2IHtcbiAgLS10dy1yb3RhdGU6IDE4MGRlZztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSgxODBkZWcpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG4vKiBNZW51IGRvdCAqL1xuYnV0dG9uOmRpc2FibGVkID4gZGl2ID4gc3BhbiB7XG4gIG9wYWNpdHk6IDE7XG59XG4uYWZ0ZXJcXFxcOmJnLXRoZW1lLTE6OmFmdGVyIHtcbiAgICBjb250ZW50OiB2YXIoLS10dy1jb250ZW50KTtcbiAgICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDgsIDExMywgMTEzLCAxKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0OCwgMTEzLCAxMTMsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbiAgfVxuLmFmdGVyXFxcXDpiZy10aGVtZS0yOjphZnRlciB7XG4gICAgY29udGVudDogdmFyKC0tdHctY29udGVudCk7XG4gICAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUwLCAyMDQsIDIxLCAxKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MCwgMjA0LCAyMSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xuICB9XG4uYWZ0ZXJcXFxcOmJnLXRoZW1lLTM6OmFmdGVyIHtcbiAgICBjb250ZW50OiB2YXIoLS10dy1jb250ZW50KTtcbiAgICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNCwgMTY1LCAyMzMsIDEpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQsIDE2NSwgMjMzLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG4gIH1cbi5kYXJrXFxcXDpiZy10aGVtZS0yOndoZXJlKC5kYXJrLCAuZGFyayAqKSB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsIDIwNCwgMjEsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MCwgMjA0LCAyMSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLmRhcmtcXFxcOmJnLWxpZ2h0OndoZXJlKC5kYXJrLCAuZGFyayAqKSB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4uZGFya1xcXFw6YmctZGFyazp3aGVyZSguZGFyaywgLmRhcmsgKikge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLmRhcmtcXFxcOnRleHQtdGhlbWUtMjp3aGVyZSguZGFyaywgLmRhcmsgKikge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoMjUwLCAyMDQsIDIxLCAxKTtcbiAgY29sb3I6IHJnYmEoMjUwLCAyMDQsIDIxLCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cbi5kYXJrXFxcXDp0ZXh0LWRhcms6d2hlcmUoLmRhcmssIC5kYXJrICopIHtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIDEpO1xuICBjb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cbi5ob3ZlclxcXFw6c2NhbGUtMTEwOmhvdmVyIHtcbiAgLS10dy1zY2FsZS14OiAxLjE7XG4gIC0tdHctc2NhbGUteTogMS4xO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCgxLjEpIHNjYWxlWSgxLjEpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuXG4gIC5tZFxcXFw6cGwtMTQge1xuICAgIHBhZGRpbmctbGVmdDogMy41cmVtO1xuICB9XG5cbiAgLm1kXFxcXDp0ZXh0LTJ4bCB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XG4gIH1cblxuICAubWRcXFxcOnRleHQtbGcge1xuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG5cbiAgLnBvcnRyYWl0XFxcXDpoaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5kYXJrXFxcXDpiZy10cmFuc3BhcmVudDp3aGVyZSguZGFyaywgLmRhcmsgKikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiLFwiPG5vIHNvdXJjZT5cIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxpREFB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QTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsd0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLHVCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLHNCQUFtQjtFQUFuQiw4S0FBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxzQkFBbUI7RUFBbkIsOEtBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEscUJBQW1CO0VBQW5CLDZLQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLHVCQUFtQjtFQUFuQiwrS0FBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkIsb0xBQW1CO0VBQW5CO0FBQW1CO0FBQW5COztFQUFBO0lBQUEsNENBQW1CO0lBQW5CO0VBQW1COztFQUFuQjtJQUFBLHlDQUFtQjtJQUFuQjtFQUFtQjtBQUFBO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7O0VBQUE7SUFBQSwyREFBbUI7SUFBbkI7RUFBbUI7O0VBQW5CO0lBQUEsd0RBQW1CO0lBQW5CO0VBQW1CO0FBQUE7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjs7RUFBQTtJQUFBO0VBQW1COztFQUFuQjtJQUFBO0VBQW1CO0FBQUE7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjs7RUFBQTtJQUFBLHdEQUFtQjtJQUFuQjtFQUFtQjs7RUFBbkI7SUFBQSwwREFBbUI7SUFBbkI7RUFBbUI7QUFBQTtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxpQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxlQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG1CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBcU1qQjs7Ozs7SUFLRSxnQ0FBZ0M7RUFDbEM7QUFHRTtFQUFBLHNCQUF5QjtFQUF6Qiw4S0FBeUI7RUFBekI7QUFBeUI7QUFJekI7RUFBQSxxQkFBb0I7RUFBcEIsNktBQW9CO0VBQXBCO0FBQW9CO0FBSXBCO0VBQUEsdUJBQTBCO0VBQTFCLCtLQUEwQjtFQUExQjtBQUEwQjtBQUkxQjtFQUFBLHVCQUEwQjtFQUExQiwrS0FBMEI7RUFBMUI7QUFBMEI7QUFJMUI7RUFBQSxtQkFBaUI7RUFBakIscUxBQWlCO0VBQWpCO0FBQWlCO0FBR25CLGFBQWE7QUFFWDtFQUFBO0FBQWtCO0FBaktwQjtJQzFFRiwyQkFBQTtJRDJFSSxrQkFBaUI7SUFBakIsd0NBQWlCO0lBQWpCLDJEQUFpQjtFQUNuQjtBQUVBO0lDOUVGLDJCQUFBO0lEK0VJLGtCQUFvQjtJQUFwQix1Q0FBb0I7SUFBcEIsMERBQW9CO0VBQ3RCO0FBRUE7SUNsRkYsMkJBQUE7SURtRkksa0JBQWlCO0lBQWpCLHVDQUFpQjtJQUFqQiwwREFBaUI7RUFDbkI7QUFMRTtFQUFBLGtCQUFvQjtFQUFwQix1Q0FBb0I7RUFBcEI7QUFBb0I7QUFRcEI7RUFBQSxrQkFBbUI7RUFBbkIsd0NBQW1CO0VBQW5CO0FBQW1CO0FBSW5CO0VBQUEsa0JBQWtCO0VBQWxCLHFDQUFrQjtFQUFsQjtBQUFrQjtBQVFsQjtFQUFBLG9CQUFzQjtFQUF0Qiw0QkFBc0I7RUFBdEI7QUFBc0I7QUFZdEI7RUFBQSxvQkFBcUI7RUFBckIsNkJBQXFCO0VBQXJCO0FBQXFCO0FBL0d6QjtFQUFBLGlCQThPQTtFQTlPQSxpQkE4T0E7RUE5T0EsbUtBOE9BO0VBOU9BO0FBOE9BO0FBOU9BOztFQUFBO0lBQUE7RUE4T0E7O0VBOU9BO0lBQUEsaUJBOE9BO0lBOU9BO0VBOE9BOztFQTlPQTtJQUFBLG1CQThPQTtJQTlPQTtFQThPQTtBQUFBO0FBOU9BOztFQUFBO0lBQUE7RUE4T0E7QUFBQTtBQTlPQTtFQUFBO0FBOE9BXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgLyogaHR0cHM6Ly9mb250cy5nb29nbGUuY29tL3NwZWNpbWVuL01vbnRzZXJyYXQgKi9cXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCI7XFxuICBzcmM6IHVybCguL2ZvbnQvTW9udHNlcnJhdC1WYXJpYWJsZUZvbnRfd2dodC50dGYpIGZvcm1hdChcXFwiVHJ1ZVR5cGVcXFwiKTtcXG59XFxuXFxuQHRhaWx3aW5kIGJhc2U7XFxuQHRhaWx3aW5kIGNvbXBvbmVudHM7XFxuQHRhaWx3aW5kIHV0aWxpdGllcztcXG5cXG5AbGF5ZXIgYmFzZSB7XFxuICAvKiBIaWRlIHNjcm9sbGJhciBmb3IgSUUsIEVkZ2UgYW5kIEZpcmVmb3ggKi9cXG4gIG1haW4sXFxuICBzZWN0aW9uIHtcXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAvKiBJRSBhbmQgRWRnZSAqL1xcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7IC8qIEZpcmVmb3ggKi9cXG4gIH1cXG5cXG4gIC8qIEhpZGUgc2Nyb2xsYmFyIGZvciBDaHJvbWUsIFNhZmFyaSBhbmQgT3BlcmEgKi9cXG4gIG1haW46Oi13ZWJraXQtc2Nyb2xsYmFyLFxcbiAgc2VjdGlvbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICBAYXBwbHkgaGlkZGVuO1xcbiAgfVxcblxcbiAgYm9keSB7XFxuICAgIEBhcHBseSBiZy1saWdodCBkYXJrOmJnLWRhcmsgdGV4dC1saWdodCBkYXJrOnRleHQtZGFyaztcXG4gIH1cXG5cXG4gIGJvZHkgKiB7XFxuICAgIEBhcHBseSB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi03NTtcXG4gIH1cXG5cXG4gIGhlYWRlcixcXG4gIGZvb3RlciB7XFxuICAgIEBhcHBseSBoLTE0IHctZnVsbCBweC03IG1kOnB4LTE0IGJnLWxpZ2h0IGRhcms6YmctZGFyayB6LTUwO1xcbiAgfVxcblxcbiAgYXNpZGUge1xcbiAgICBAYXBwbHkgaC1bY2FsYygxMDB2aC0yKjU2cHgpXSBtdC0xNCBwbC1bMjAwcHhdO1xcbiAgfVxcblxcbiAgbWFpbiB7XFxuICAgIEBhcHBseSBoLVtjYWxjKDEwMHZoLTIqNTZweCldIHctZnVsbCBtdC0xNCBvdmVyZmxvdy15LXNjcm9sbCBzbmFwLXkgc2Nyb2xsLXNtb290aDtcXG4gIH1cXG5cXG4gIHNlY3Rpb24ge1xcbiAgICBAYXBwbHkgaC1bY2FsYygxMDB2aC0yKjU2cHgpXSBweC03IG1kOnB4LTE0IG92ZXJmbG93LXgtc2Nyb2xsIHNuYXAtY2VudGVyIHNjcm9sbC1zbW9vdGg7XFxuICB9XFxuXFxuICBoMSB7XFxuICAgIEBhcHBseSB0ZXh0LVsxMHZ3XSBwb3J0cmFpdDp0ZXh0LVsxNXZ3XSBsZWFkaW5nLVswLjhdIGZvbnQtZXh0cmFib2xkO1xcbiAgfVxcblxcbiAgaDIge1xcbiAgICBAYXBwbHkgdGV4dC02eGwgbWQ6dGV4dC03eGwgbGVhZGluZy1bMC44XSBmb250LWV4dHJhYm9sZDtcXG4gIH1cXG5cXG4gIGEge1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNTAwbXMgZWFzZTtcXG4gIH1cXG5cXG4gIGJ1dHRvbjpkaXNhYmxlZCB7XFxuICAgIEBhcHBseSB0ZXh0LWRpc2FibGVkO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIH1cXG59XFxuXFxuQGxheWVyIGNvbXBvbmVudHMge1xcbiAgLm1vbnRzZXJyYXQge1xcbiAgICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LW9wdGljYWwtc2l6aW5nOiBhdXRvO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICB9XFxuXFxuICAuYmctdGhlbWUtMSB7XFxuICAgIEBhcHBseSBiZy1yZWQtNDAwO1xcbiAgfVxcblxcbiAgLmJnLXRoZW1lLTIge1xcbiAgICBAYXBwbHkgYmcteWVsbG93LTQwMDtcXG4gIH1cXG5cXG4gIC5iZy10aGVtZS0zIHtcXG4gICAgQGFwcGx5IGJnLXNreS01MDA7XFxuICB9XFxuXFxuICAuYmctbGlnaHQge1xcbiAgICBAYXBwbHkgYmctc2xhdGUtMTAwO1xcbiAgfVxcblxcbiAgLmJnLWRhcmsge1xcbiAgICBAYXBwbHkgYmctemluYy04MDA7XFxuICB9XFxuXFxuICAudGV4dC10aGVtZS0xIHtcXG4gICAgQGFwcGx5IHRleHQtcmVkLTQwMDtcXG4gIH1cXG5cXG4gIC50ZXh0LXRoZW1lLTIge1xcbiAgICBAYXBwbHkgdGV4dC15ZWxsb3ctNDAwO1xcbiAgfVxcblxcbiAgLnRleHQtdGhlbWUtMyB7XFxuICAgIEBhcHBseSB0ZXh0LXNreS01MDA7XFxuICB9XFxuXFxuICAudGV4dC1saWdodCB7XFxuICAgIEBhcHBseSB0ZXh0LXppbmMtODAwO1xcbiAgfVxcblxcbiAgLnRleHQtZGFyayB7XFxuICAgIEBhcHBseSB0ZXh0LXNsYXRlLTEwMDtcXG4gIH1cXG5cXG4gIC50ZXh0LWRpc2FibGVkIHtcXG4gICAgQGFwcGx5IHRleHQtemluYy00MDAgZGFyazp0ZXh0LXppbmMtNTAwO1xcbiAgfVxcblxcbiAgLmJ0bi1kYXJrLW1vZGUge1xcbiAgICBAYXBwbHkgaC01IG1kOmgtNiBhc3BlY3QtWzJdIHJvdW5kZWQtbWQgc2hhZG93LWlubmVyO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDUwMG1zIGVhc2U7XFxuICB9XFxuXFxuICAuYnRuLWRhcmstbW9kZS50aGVtZS0xOmhvdmVyIHtcXG4gICAgQGFwcGx5IGJnLXRoZW1lLTE7XFxuICB9XFxuXFxuICAuYnRuLWRhcmstbW9kZS50aGVtZS0yOmhvdmVyIHtcXG4gICAgQGFwcGx5IGJnLXRoZW1lLTI7XFxuICB9XFxuXFxuICAuYnRuLWRhcmstbW9kZS50aGVtZS0zOmhvdmVyIHtcXG4gICAgQGFwcGx5IGJnLXRoZW1lLTM7XFxuICB9XFxuXFxuICAuZGFyay1tb2RlLWJhbGwge1xcbiAgICBAYXBwbHkgaC1bY2FsYygxMDAlLTRweCldIGFzcGVjdC1zcXVhcmUgbXgtMC41IGJnLWxpZ2h0IGRhcms6YmctZGFyayByb3VuZGVkLW1kO1xcbiAgfVxcblxcbiAgLmRhcmstbW9kZS1iYWxsIHtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDc1MG1zIGVhc2U7XFxuICB9XFxuXFxuICAuZGFyay1tb2RlLWJhbGwuZGFyayB7XFxuICAgIEBhcHBseSB0cmFuc2xhdGUteC1bY2FsYygxMDAlKzRweCldO1xcbiAgfVxcblxcbiAgLmljb24tbW9kZS1kYXJrLFxcbiAgLmljb24tbW9kZSB7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgNzVtcyBlYXNlO1xcbiAgfVxcblxcbiAgLmljb24tbW9kZS1kYXJrIHtcXG4gICAgQGFwcGx5IG9wYWNpdHktMCBkYXJrOm9wYWNpdHktMTAwIGFic29sdXRlO1xcbiAgfVxcblxcbiAgLmljb24tbW9kZSB7XFxuICAgIEBhcHBseSBvcGFjaXR5LTEwMCBkYXJrOm9wYWNpdHktMCBhYnNvbHV0ZTtcXG4gIH1cXG5cXG4gIC5pY29uLWNvbnRhY3QtbGluayB7XFxuICAgIEBhcHBseSBoLVszMHB4XSBzbTpoLVs0MHB4XSB0ZXh0LVszMHB4XSBzbTp0ZXh0LVs0MHB4XSBhc3BlY3Qtc3F1YXJlO1xcbiAgfVxcblxcbiAgLmljb24tbmV4dCB7XFxuICAgIEBhcHBseSBoLVs3MHB4XSBhc3BlY3Qtc3F1YXJlO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNTAwbXMgZWFzZTtcXG4gIH1cXG5cXG4gIGJ1dHRvbjpob3ZlciAuaWNvbi1uZXh0IHtcXG4gICAgQGFwcGx5IHNjYWxlLTExMDtcXG4gIH1cXG5cXG4gIC51bmRlcmxpbmUtaCxcXG4gIC5oaWdobGlnaHQtaCB7XFxuICAgIEBhcHBseSByZWxhdGl2ZTtcXG4gIH1cXG5cXG4gIC51bmRlcmxpbmUtaDphZnRlciB7XFxuICAgIEBhcHBseSBoLTAuNSB3LTAgYmctZGFyayBkYXJrOmJnLWxpZ2h0IHJvdW5kZWQtZnVsbCBhYnNvbHV0ZSBsZWZ0LTAgYm90dG9tLTAuNTtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHRyYW5zaXRpb246IHdpZHRoIDUwMG1zIGVhc2U7XFxuICB9XFxuXFxuICBidXR0b246aG92ZXIgLnVuZGVybGluZS1oOmFmdGVyIHtcXG4gICAgQGFwcGx5IHctZnVsbDtcXG4gIH1cXG5cXG4gIC5oaWdobGlnaHQtaDphZnRlciB7XFxuICAgIEBhcHBseSBoLVs1MCVdIHctMCBvcGFjaXR5LTgwIGFic29sdXRlIHRvcC1bMjUlXSBsZWZ0LVstMTVweF0gLXotMTA7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCA1MDBtcyBlYXNlO1xcbiAgfVxcblxcbiAgYnV0dG9uOmhvdmVyIC5oaWdobGlnaHQtaDphZnRlciB7XFxuICAgIEBhcHBseSB3LVtjYWxjKDEwMCUrMzBweCldO1xcbiAgfVxcblxcbiAgLyogQW5pbWF0aW9uICovXFxuICBbY2xhc3NePVxcXCJhbmltYXRlLVxcXCJdIHtcXG4gICAgd2lsbC1jaGFuZ2U6IGFuaW1hdGlvbjtcXG4gIH1cXG59XFxuXFxuQGxheWVyIHV0aWxpdGllcyB7XFxuICBtYWluLFxcbiAgYXNpZGUsXFxuICAjYnRuLW1lbnUtbCxcXG4gICNidG4tbWVudS1sLWNsb3NlLFxcbiAgI2J0bi1tZW51LWwtY2xvc2UgPiBkaXYge1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNTAwbXMgZWFzZTtcXG4gIH1cXG5cXG4gIG1haW4ubW92ZSB7XFxuICAgIEBhcHBseSB0cmFuc2xhdGUteC1bNDB2d107XFxuICB9XFxuXFxuICBhc2lkZS5tb3ZlIHtcXG4gICAgQGFwcGx5IHRyYW5zbGF0ZS14LTA7XFxuICB9XFxuXFxuICAjYnRuLW1lbnUtbC5zaG93IHtcXG4gICAgQGFwcGx5IHRyYW5zbGF0ZS15LVsyMDBweF07XFxuICB9XFxuXFxuICAjYnRuLW1lbnUtbC1jbG9zZS5zaG93IHtcXG4gICAgQGFwcGx5IHRyYW5zbGF0ZS14LVsyMDBweF07XFxuICB9XFxuXFxuICAjYnRuLW1lbnUtbC1jbG9zZTpob3ZlciA+IGRpdiB7XFxuICAgIEBhcHBseSByb3RhdGUtMTgwO1xcbiAgfVxcblxcbiAgLyogTWVudSBkb3QgKi9cXG4gIGJ1dHRvbjpkaXNhYmxlZCA+IGRpdiA+IHNwYW4ge1xcbiAgICBAYXBwbHkgb3BhY2l0eS0xMDA7XFxuICB9XFxufVxcblwiLG51bGxdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBkYXJrTW9kZSA9ICgoKSA9PiB7XG4gIGNvbnN0IGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ0bi1kYXJrLW1vZGVcIik7XG4gIGNvbnN0IGJhbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kYXJrLW1vZGUtYmFsbFwiKTtcbiAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIF9kZXRlY3REYXJrTW9kZSgpO1xuICAgIGJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICBidG4ub25jbGljayA9IF90b2dnbGU7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBfZGV0ZWN0RGFya01vZGUoKSB7XG4gICAgaWYgKEJvb2xlYW4obG9jYWxTdG9yYWdlLnRoZW1lKSkge1xuICAgICAgaWYgKGxvY2FsU3RvcmFnZS50aGVtZSA9PT0gXCJkYXJrXCIpIHtcbiAgICAgICAgX3RvZ2dsZSgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHdpbmRvdy5tYXRjaE1lZGlhICYmXG4gICAgICB3aW5kb3cubWF0Y2hNZWRpYShcIihwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaylcIikubWF0Y2hlc1xuICAgICkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCBcImRhcmtcIik7XG4gICAgICBfdG9nZ2xlKCk7XG4gICAgfSBlbHNlIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgXCJsaWdodFwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF90b2dnbGUoKSB7XG4gICAgaHRtbC5jbGFzc0xpc3QudG9nZ2xlKFwiZGFya1wiKTtcbiAgICBiYWxscy5mb3JFYWNoKChiYWxsKSA9PiB7XG4gICAgICBiYWxsLmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrXCIpO1xuICAgIH0pO1xuXG4gICAgaWYgKCFodG1sLmNsYXNzTGlzdC5jb250YWlucyhcImRhcmtcIikpXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIFwibGlnaHRcIik7XG4gICAgZWxzZSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIFwiZGFya1wiKTtcbiAgfVxuXG4gIHJldHVybiB7IGluaXQgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IGRhcmtNb2RlIH07XG4iLCJpbXBvcnQgZmF2aWNvbjMydyBmcm9tIFwiLi4vaW1nL2ljb25zL2Zhdmljb24tMzJ3LnBuZ1wiO1xuaW1wb3J0IG1lbnU1MHcgZnJvbSBcIi4uL2ltZy9pY29ucy9tZW51LTUwdy5wbmdcIjtcbmltcG9ydCBtZW51VzUwdyBmcm9tIFwiLi4vaW1nL2ljb25zL21lbnUtdy01MHcucG5nXCI7XG5pbXBvcnQgY2xvc2U1MHcgZnJvbSBcIi4uL2ltZy9pY29ucy9jbG9zZS01MHcucG5nXCI7XG5pbXBvcnQgY2xvc2VXNTB3IGZyb20gXCIuLi9pbWcvaWNvbnMvY2xvc2Utdy01MHcucG5nXCI7XG5pbXBvcnQgY2hldnJvbjEwMHcgZnJvbSBcIi4uL2ltZy9pY29ucy9jaGV2cm9uLTEwMHcucG5nXCI7XG5pbXBvcnQgY2hldnJvblcxMDB3IGZyb20gXCIuLi9pbWcvaWNvbnMvY2hldnJvbi13LTEwMHcucG5nXCI7XG5pbXBvcnQgcHJvZmlsZVAxMDAwdyBmcm9tIFwiLi4vaW1nL3Byb2ZpbGUtcC0xMDAwdy5qcGdcIjtcblxuY29uc3QgaW1nTmV4dERhcmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmltZy1uZXh0LWRhcmtcIik7XG5jb25zdCBpbWdOZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbWctbmV4dFwiKTtcblxuaW1nTmV4dERhcmsuZm9yRWFjaCgoaW1nKSA9PiB7XG4gIGltZy5zcmMgPSBjaGV2cm9uVzEwMHc7XG59KTtcblxuaW1nTmV4dC5mb3JFYWNoKChpbWcpID0+IHtcbiAgaW1nLnNyYyA9IGNoZXZyb24xMDB3O1xufSk7XG4iLCJjb25zdCBtZW51ID0gKCgpID0+IHtcbiAgY29uc3QgYnRuTWVudUwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1tZW51LWxcIik7XG4gIGNvbnN0IGJ0bk1lbnVMQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1tZW51LWwtY2xvc2VcIik7XG5cbiAgY29uc3QgYXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYXNpZGVcIik7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcblxuICBjb25zdCBidG5Ib21lTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLWhvbWUtbFwiKTtcbiAgY29uc3QgYnRuQWJvdXRMID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tYWJvdXQtbFwiKTtcbiAgY29uc3QgYnRuQWJvdXRNb3JlTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLWFib3V0LW1vcmUtbFwiKTtcbiAgY29uc3QgYnRuUHJvamVjdHNMID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tcHJvamVjdHMtbFwiKTtcblxuICBjb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNob21lXCIpO1xuICBjb25zdCBhYm91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWJvdXRcIik7XG4gIGNvbnN0IGFydGljbGVBYm91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXJ0aWNsZS1hYm91dFwiKTtcbiAgY29uc3QgYXJ0aWNsZUFib3V0TW9yZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXJ0aWNsZS1hYm91dC1tb3JlXCIpO1xuICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHNcIik7XG5cbiAgbGV0IGlzT3BlbkFib3V0TW9yZSA9IDA7XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBfaW5pdEJ0bk1lbnVMKCk7XG4gICAgX2luaXRCdG5OYXZMKCk7XG4gICAgX2luaXRCdG5BYm91dE1vcmVMKCk7XG5cbiAgICAvLyBGb3IgdGVzdGluZ1xuICAgIGJ0bk1lbnVMLmNsaWNrKCk7XG4gICAgYnRuQWJvdXRMLmNsaWNrKCk7XG4gIH1cblxuICBmdW5jdGlvbiBfaW5pdEJ0bkFib3V0TW9yZUwoKSB7XG4gICAgYnRuQWJvdXRNb3JlTC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgaWYgKGlzT3BlbkFib3V0TW9yZSA9PT0gMSkgYXJ0aWNsZUFib3V0LnNjcm9sbEludG9WaWV3KCk7XG4gICAgICBlbHNlIGFydGljbGVBYm91dE1vcmUuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgIGlzT3BlbkFib3V0TW9yZSA9ICshaXNPcGVuQWJvdXRNb3JlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBfaW5pdEJ0bk1lbnVMKCkge1xuICAgIGJ0bk1lbnVMLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBfdG9nZ2xlTWVudUwoKTtcbiAgICB9O1xuXG4gICAgYnRuTWVudUxDbG9zZS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgX3RvZ2dsZU1lbnVMKCk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF90b2dnbGVNZW51TCgpIHtcbiAgICBidG5NZW51TC5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcbiAgICBidG5NZW51TENsb3NlLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xuICAgIGFzaWRlLmNsYXNzTGlzdC50b2dnbGUoXCJtb3ZlXCIpO1xuICAgIG1haW4uY2xhc3NMaXN0LnRvZ2dsZShcIm1vdmVcIik7XG4gIH1cblxuICBmdW5jdGlvbiBfaW5pdEJ0bk5hdkwoKSB7XG4gICAgYnRuSG9tZUwub25jbGljayA9ICgpID0+IHtcbiAgICAgIGJ0bk1lbnVMQ2xvc2UuY2xpY2soKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBob21lLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICB9LCA1MDApO1xuICAgIH07XG5cbiAgICBidG5BYm91dEwub25jbGljayA9ICgpID0+IHtcbiAgICAgIGJ0bk1lbnVMQ2xvc2UuY2xpY2soKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBhYm91dC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgfSwgNTAwKTtcbiAgICB9O1xuXG4gICAgYnRuUHJvamVjdHNMLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBidG5NZW51TENsb3NlLmNsaWNrKCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcHJvamVjdHMuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgIH0sIDUwMCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7IGluaXQgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IG1lbnUgfTtcbiIsImNvbnN0IHNjcm9sbCA9ICgoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaG9tZVwiKTtcblxuICBjb25zdCBidG5EYXJrTW9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnRuLWRhcmstbW9kZVwiKTtcbiAgY29uc3Qgc3Bhbk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnUtdGV4dCA+IHNwYW5cIik7XG4gIGNvbnN0IHNwYW5Db250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0LXRleHQgPiBzcGFuXCIpO1xuXG4gIGNvbnN0IGJ0bnNNZW51TCA9IFtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1ob21lLWxcIiksXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tYWJvdXQtbFwiKSxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1wcm9qZWN0cy1sXCIpLFxuICBdO1xuXG4gIGNvbnN0IG1hcmdpblRvcCA9IDU2O1xuICBsZXQgaGVpZ2h0U2VjdGlvbiA9IDA7XG4gIGxldCBzY3JvbGxIZWlnaHRTZWN0aW9uID0gMDtcbiAgbGV0IGN1cnJlbnRUaGVtZSA9IDE7XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBfZ2V0U2Nyb2xsSGVpZ2h0U2VjdGlvbigpO1xuXG4gICAgd2luZG93Lm9ucmVzaXplID0gKCkgPT4ge1xuICAgICAgX2dldFNjcm9sbEhlaWdodFNlY3Rpb24oKTtcbiAgICB9O1xuXG4gICAgbWFpbi5vbnNjcm9sbGVuZCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHNjcm9sbCA9IG1haW4uc2Nyb2xsVG9wO1xuICAgICAgaWYgKHNjcm9sbCA+PSAwICYmIHNjcm9sbCA8IHNjcm9sbEhlaWdodFNlY3Rpb24pIHtcbiAgICAgICAgX2NoYW5nZVRoZW1lKDEpO1xuICAgICAgICBfZGlzYWJsZUJ0bigxKTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIHNjcm9sbCA+PSBzY3JvbGxIZWlnaHRTZWN0aW9uICYmXG4gICAgICAgIHNjcm9sbCA8IHNjcm9sbEhlaWdodFNlY3Rpb24gKiAyXG4gICAgICApIHtcbiAgICAgICAgX2NoYW5nZVRoZW1lKDIpO1xuICAgICAgICBfZGlzYWJsZUJ0bigyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF9jaGFuZ2VUaGVtZSgzKTtcbiAgICAgICAgX2Rpc2FibGVCdG4oMyk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9nZXRTY3JvbGxIZWlnaHRTZWN0aW9uKCkge1xuICAgIGhlaWdodFNlY3Rpb24gPSBob21lLmNsaWVudEhlaWdodDtcbiAgICBzY3JvbGxIZWlnaHRTZWN0aW9uID0gaGVpZ2h0U2VjdGlvbiArIG1hcmdpblRvcDtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9jaGFuZ2VUaGVtZSh0aGVtZSkge1xuICAgIHNwYW5NZW51LmNsYXNzTGlzdC5yZW1vdmUoYHRleHQtdGhlbWUtJHtjdXJyZW50VGhlbWV9YCk7XG4gICAgc3BhbkNvbnRhY3QuY2xhc3NMaXN0LnJlbW92ZShgdGV4dC10aGVtZS0ke2N1cnJlbnRUaGVtZX1gKTtcblxuICAgIGJ0bkRhcmtNb2RlLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoYHRoZW1lLSR7Y3VycmVudFRoZW1lfWApO1xuICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoYHRoZW1lLSR7dGhlbWV9YCk7XG4gICAgfSk7XG5cbiAgICBzcGFuTWVudS5jbGFzc0xpc3QuYWRkKGB0ZXh0LXRoZW1lLSR7dGhlbWV9YCk7XG4gICAgc3BhbkNvbnRhY3QuY2xhc3NMaXN0LmFkZChgdGV4dC10aGVtZS0ke3RoZW1lfWApO1xuXG4gICAgY3VycmVudFRoZW1lID0gdGhlbWU7XG4gIH1cblxuICBmdW5jdGlvbiBfZGlzYWJsZUJ0bihuKSB7XG4gICAgY29uc3QgaW5kZXggPSBuIC0gMTtcbiAgICBjb25zdCBsZW5ndGggPSBidG5zTWVudUwubGVuZ3RoO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChpID09PSBpbmRleCkgYnRuc01lbnVMW2ldLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIGVsc2UgYnRuc01lbnVMW2ldLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHsgaW5pdCB9O1xufSkoKTtcblxuZXhwb3J0IHsgc2Nyb2xsIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBcIi4vanMvaW1hZ2VcIjtcbmltcG9ydCB7IGRhcmtNb2RlIH0gZnJvbSBcIi4vanMvZGFyay1tb2RlXCI7XG5pbXBvcnQgeyBtZW51IH0gZnJvbSBcIi4vanMvbWVudVwiO1xuaW1wb3J0IHsgc2Nyb2xsIH0gZnJvbSBcIi4vanMvc2Nyb2xsXCI7XG5cbmRhcmtNb2RlLmluaXQoKTtcbm1lbnUuaW5pdCgpO1xuc2Nyb2xsLmluaXQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==