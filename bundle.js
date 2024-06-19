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
  section,
  .project-card-wrapper {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

/* Hide scrollbar for Chrome, Safari and Opera */

main::-webkit-scrollbar,
  section::-webkit-scrollbar,
  .project-card-wrapper::-webkit-scrollbar {
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
  z-index: 50;
  height: 3.5rem;
  width: 100%;
  --tw-bg-opacity: 1;
  background-color: rgba(241, 245, 249, 1);
  background-color: rgba(241, 245, 249, var(--tw-bg-opacity));
  padding-left: 1.75rem;
  padding-right: 1.75rem;
}

@media (min-width: 768px) {

  header,
  footer {
    padding-left: 3.5rem;
    padding-right: 3.5rem;
  }
}

header:where(.dark, .dark *),
  footer:where(.dark, .dark *) {
  --tw-bg-opacity: 1;
  background-color: rgba(39, 39, 42, 1);
  background-color: rgba(39, 39, 42, var(--tw-bg-opacity));
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
  padding-left: 1.75rem;
  padding-right: 1.75rem;
}

@media (min-width: 768px) {

  section {
    padding-left: 3.5rem;
    padding-right: 3.5rem;
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
.text-hello {
  font-size: 10vw;
  font-weight: 800;
  line-height: 0.8;
}
@media (orientation: portrait) {

  .text-hello {
    font-size: 15vw;
  }
}
.text-big {
  font-size: 3.75rem;
  font-weight: 800;
  line-height: 0.8;
}
@media (min-width: 768px) {

  .text-big {
    font-size: 4.5rem;
    line-height: 1;
  }
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
  margin-left: 0.125rem;
  margin-right: 0.125rem;
  aspect-ratio: 1 / 1;
  height: calc(100% - 4px);
  border-radius: 0.375rem;
  --tw-bg-opacity: 1;
  background-color: rgba(241, 245, 249, 1);
  background-color: rgba(241, 245, 249, var(--tw-bg-opacity));
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
.icon-about-tool,
  .icon-contact-link {
  aspect-ratio: 1 / 1;
  height: 30px;
  font-size: 30px;
}
@media (min-width: 640px) {

  .icon-about-tool,
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
.btn-mini-tab {
  aspect-ratio: 4;
  height: 0.75rem;
  border-radius: 0.375rem;
  border-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgba(241, 245, 249, 1);
  border-color: rgba(241, 245, 249, var(--tw-border-opacity));
}
.btn-mini-tab:where(.dark, .dark *) {
  --tw-border-opacity: 1;
  border-color: rgba(14, 165, 233, 1);
  border-color: rgba(14, 165, 233, var(--tw-border-opacity));
}
.btn-mini-tab {
    transition: background-color 500ms ease;
  }
.btn-mini-tab.active {
  --tw-bg-opacity: 1;
  background-color: rgba(241, 245, 249, 1);
  background-color: rgba(241, 245, 249, var(--tw-bg-opacity));
}
.btn-mini-tab.active:where(.dark, .dark *) {
  --tw-bg-opacity: 1;
  background-color: rgba(14, 165, 233, 1);
  background-color: rgba(14, 165, 233, var(--tw-bg-opacity));
}
.project-card-outer-wrapper {
  position: relative;
  width: 60%;
  border-radius: 0.375rem;
  border-width: 1px;
  --tw-bg-opacity: 1;
  background-color: rgba(241, 245, 249, 1);
  background-color: rgba(241, 245, 249, var(--tw-bg-opacity));
  padding: 1rem;
}
.project-card-outer-wrapper:where(.dark, .dark *) {
  --tw-border-opacity: 1;
  border-color: rgba(14, 165, 233, 1);
  border-color: rgba(14, 165, 233, var(--tw-border-opacity));
  background-color: transparent;
}
.project-card-wrapper {
  position: relative;
  display: flex;
  scroll-snap-type: x var(--tw-scroll-snap-strictness);
  gap: 1rem;
  overflow-x: scroll;
  scroll-behavior: smooth;
}
.project-card {
  position: relative;
  display: flex;
  min-width: 100%;
  scroll-snap-align: center;
  align-items: center;
  justify-content: center;
}
.project-card-image {
  border-radius: 0.375rem;
  opacity: 0.5;
}
.project-card-index {
  position: absolute;
  top: 0px;
  left: 0px;
  font-size: 6rem;
  font-weight: 800;
  line-height: 0.8;
}
.project-card-name {
  position: absolute;
  top: 50%;
  width: 100%;
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), -50%) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  text-align: center;
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 700;
}
.project-card-type {
  position: absolute;
  top: 75%;
  width: 100%;
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), -50%) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  text-align: center;
  font-weight: 700;
}
.project-card-expand {
  position: absolute;
  top: 1rem;
  right: 1rem;
  aspect-ratio: 1 / 1;
  height: 50px;
  background-color: rgba(39, 39, 42, 0.5);
  background-color: rgba(39, 39, 42, var(--tw-bg-opacity));
  --tw-bg-opacity: 0.5;
  opacity: 0.5;
}
.project-card-expand:where(.dark, .dark *) {
  --tw-bg-opacity: 1;
  background-color: rgba(241, 245, 249, 1);
  background-color: rgba(241, 245, 249, var(--tw-bg-opacity));
}
.btn-project-card-next {
  position: absolute;
  top: calc(50% - 28px);
  right: 1rem;
  aspect-ratio: 1 / 1;
  height: 3.5rem;
  --tw-rotate: -90deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(-90deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  background-color: rgba(39, 39, 42, 0.5);
  background-color: rgba(39, 39, 42, var(--tw-bg-opacity));
  --tw-bg-opacity: 0.5;
  opacity: 0.5;
}
.btn-project-card-next:where(.dark, .dark *) {
  --tw-bg-opacity: 1;
  background-color: rgba(241, 245, 249, 1);
  background-color: rgba(241, 245, 249, var(--tw-bg-opacity));
}
.btn-project-card-prev {
  position: absolute;
  top: calc(50% - 28px);
  left: 1rem;
  aspect-ratio: 1 / 1;
  height: 3.5rem;
  --tw-rotate: 90deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(90deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  background-color: rgba(39, 39, 42, 0.5);
  background-color: rgba(39, 39, 42, var(--tw-bg-opacity));
  --tw-bg-opacity: 0.5;
  opacity: 0.5;
}
.btn-project-card-prev:where(.dark, .dark *) {
  --tw-bg-opacity: 1;
  background-color: rgba(241, 245, 249, 1);
  background-color: rgba(241, 245, 249, var(--tw-bg-opacity));
}
.project-card-image,
  .project-card > div,
  .project-card-expand,
  .btn-project-card-next,
  .btn-project-card-prev {
    transition: opacity 500ms ease;
  }
.project-card-wrapper:hover .project-card-image,
  .project-card-outer-wrapper:hover .project-card-expand:hover,
  .btn-project-card-next:hover,
  .btn-project-card-prev:hover {
  opacity: 1;
}
.project-card-wrapper:hover .project-card-index {
  opacity: 0.5;
}
.project-card-wrapper:hover .project-card-name,
  .project-card-wrapper:hover .project-card-type {
  opacity: 0;
}
.underline-h,
  .highlight-h {
  position: relative;
}
.underline-h:after {
  position: absolute;
  left: 0px;
  bottom: 0.125rem;
  height: 0.125rem;
  width: 0px;
  border-radius: 9999px;
  --tw-bg-opacity: 1;
  background-color: rgba(39, 39, 42, 1);
  background-color: rgba(39, 39, 42, var(--tw-bg-opacity));
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
.about-span {
  --tw-text-opacity: 1;
  color: rgba(241, 245, 249, 1);
  color: rgba(241, 245, 249, var(--tw-text-opacity));
}
.about-span:where(.dark, .dark *) {
  --tw-text-opacity: 1;
  color: rgba(250, 204, 21, 1);
  color: rgba(250, 204, 21, var(--tw-text-opacity));
}
.tool:hover .icon-about-tool {
  display: block;
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
.h-full {
  height: 100%;
}
.w-\\[20\\%\\] {
  width: 20%;
}
.w-\\[40\\%\\] {
  width: 40%;
}
.w-\\[calc\\(100\\%-16px\\)\\] {
  width: calc(100% - 16px);
}
.w-fit {
  width: -moz-fit-content;
  width: fit-content;
}
.w-full {
  width: 100%;
}
.min-w-\\[30\\%\\] {
  min-width: 30%;
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
.rotate-180 {
  --tw-rotate: 180deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(180deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
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
@keyframes bounce-chevron-left {

  0%, 100% {
    transform: translateY(-50%) rotate(90deg) translateY(0);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }

  50% {
    transform: translateY(-50%) rotate(90deg) translateY(25%);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}
.animate-chevron-left {
  animation: bounce-chevron-left 1s infinite;
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
.snap-x {
  scroll-snap-type: x var(--tw-scroll-snap-strictness);
}
.snap-center {
  scroll-snap-align: center;
}
.flex-row {
  flex-direction: row;
}
.flex-row-reverse {
  flex-direction: row-reverse;
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
.gap-1 {
  gap: 0.25rem;
}
.gap-14 {
  gap: 3.5rem;
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
.overflow-x-scroll {
  overflow-x: scroll;
}
.scroll-smooth {
  scroll-behavior: smooth;
}
.text-pretty {
  text-wrap: pretty;
}
.rounded-full {
  border-radius: 9999px;
}
.border-2 {
  border-width: 2px;
}
.border-y-2 {
  border-top-width: 2px;
  border-bottom-width: 2px;
}
.border-theme-2 {
  --tw-border-opacity: 1;
  border-color: rgba(250, 204, 21, 1);
  border-color: rgba(250, 204, 21, var(--tw-border-opacity));
}
.bg-dark {
  --tw-bg-opacity: 1;
  background-color: rgba(39, 39, 42, 1);
  background-color: rgba(39, 39, 42, var(--tw-bg-opacity));
}
.bg-light {
  --tw-bg-opacity: 1;
  background-color: rgba(241, 245, 249, 1);
  background-color: rgba(241, 245, 249, var(--tw-bg-opacity));
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
.px-0 {
  padding-left: 0px;
  padding-right: 0px;
}
.px-14 {
  padding-left: 3.5rem;
  padding-right: 3.5rem;
}
.px-7 {
  padding-left: 1.75rem;
  padding-right: 1.75rem;
}
.py-14 {
  padding-top: 3.5rem;
  padding-bottom: 3.5rem;
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
.text-light {
  --tw-text-opacity: 1;
  color: rgba(241, 245, 249, 1);
  color: rgba(241, 245, 249, var(--tw-text-opacity));
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
.underline {
  text-decoration-line: underline;
}
.opacity-0 {
  opacity: 0;
}
.opacity-50 {
  opacity: 0.5;
}
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
main {
    transition:
      transform 500ms ease, opacity 500ms ease;
  }
#article-about {
    transition: opacity 500ms ease;
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
.hover\\:scale-110:hover {
  --tw-scale-x: 1.1;
  --tw-scale-y: 1.1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(1.1) scaleY(1.1);
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
@media (min-width: 768px) {

  .md\\:px-14 {
    padding-left: 3.5rem;
    padding-right: 3.5rem;
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
.dark\\:bg-dark:where(.dark, .dark *) {
  --tw-bg-opacity: 1;
  background-color: rgba(39, 39, 42, 1);
  background-color: rgba(39, 39, 42, var(--tw-bg-opacity));
}
.dark\\:bg-light:where(.dark, .dark *) {
  --tw-bg-opacity: 1;
  background-color: rgba(241, 245, 249, 1);
  background-color: rgba(241, 245, 249, var(--tw-bg-opacity));
}
.dark\\:bg-theme-2:where(.dark, .dark *) {
  --tw-bg-opacity: 1;
  background-color: rgba(250, 204, 21, 1);
  background-color: rgba(250, 204, 21, var(--tw-bg-opacity));
}
.dark\\:bg-theme-3:where(.dark, .dark *) {
  --tw-bg-opacity: 1;
  background-color: rgba(14, 165, 233, 1);
  background-color: rgba(14, 165, 233, var(--tw-bg-opacity));
}
.dark\\:bg-transparent:where(.dark, .dark *) {
  background-color: transparent;
}
.dark\\:text-theme-2:where(.dark, .dark *) {
  --tw-text-opacity: 1;
  color: rgba(250, 204, 21, 1);
  color: rgba(250, 204, 21, var(--tw-text-opacity));
}
.dark\\:text-theme-3:where(.dark, .dark *) {
  --tw-text-opacity: 1;
  color: rgba(14, 165, 233, 1);
  color: rgba(14, 165, 233, var(--tw-text-opacity));
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  /* https://fonts.google.com/specimen/Montserrat */\n  font-family: \"Montserrat\";\n  src: url(./font/Montserrat-VariableFont_wght.ttf) format(\"TrueType\");\n}\n\n@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n@layer base {\n  /* Hide scrollbar for IE, Edge and Firefox */\n  main,\n  section,\n  .project-card-wrapper {\n    -ms-overflow-style: none; /* IE and Edge */\n    scrollbar-width: none; /* Firefox */\n  }\n\n  /* Hide scrollbar for Chrome, Safari and Opera */\n  main::-webkit-scrollbar,\n  section::-webkit-scrollbar,\n  .project-card-wrapper::-webkit-scrollbar {\n    @apply hidden;\n  }\n\n  body {\n    @apply bg-light dark:bg-dark text-dark dark:text-light;\n  }\n\n  body * {\n    @apply transition-colors duration-75;\n  }\n\n  header,\n  footer {\n    @apply h-14 w-full px-7 md:px-14 bg-light dark:bg-dark z-50;\n  }\n\n  aside {\n    @apply h-[calc(100vh-2*56px)] mt-14 pl-[200px];\n  }\n\n  main {\n    @apply h-[calc(100vh-2*56px)] w-full mt-14 overflow-y-scroll snap-y scroll-smooth;\n  }\n\n  section {\n    @apply h-[calc(100vh-2*56px)] px-7 md:px-14 snap-center;\n  }\n\n  a {\n    transition: transform 500ms ease;\n  }\n\n  button:disabled {\n    @apply text-disabled;\n    pointer-events: none;\n  }\n}\n\n@layer components {\n  .montserrat {\n    font-family: \"Montserrat\", sans-serif;\n    font-optical-sizing: auto;\n    font-style: normal;\n  }\n\n  .text-hello {\n    @apply text-[10vw] portrait:text-[15vw] leading-[0.8] font-extrabold;\n  }\n\n  .text-big {\n    @apply text-6xl md:text-7xl leading-[0.8] font-extrabold;\n  }\n\n  .text-disabled {\n    @apply text-zinc-400 dark:text-zinc-500;\n  }\n\n  .btn-dark-mode {\n    @apply h-5 md:h-6 aspect-[2] rounded-md shadow-inner;\n    transition: background-color 500ms ease;\n  }\n\n  .btn-dark-mode.theme-1:hover {\n    @apply bg-theme-1;\n  }\n\n  .btn-dark-mode.theme-2:hover {\n    @apply bg-theme-2;\n  }\n\n  .btn-dark-mode.theme-3:hover {\n    @apply bg-theme-3;\n  }\n\n  .dark-mode-ball {\n    @apply h-[calc(100%-4px)] aspect-square mx-0.5 bg-light dark:bg-dark rounded-md;\n  }\n\n  .dark-mode-ball {\n    transition: transform 750ms ease;\n  }\n\n  .dark-mode-ball.dark {\n    @apply translate-x-[calc(100%+4px)];\n  }\n\n  .icon-mode-dark,\n  .icon-mode {\n    transition: opacity 75ms ease;\n  }\n\n  .icon-mode-dark {\n    @apply opacity-0 dark:opacity-100 absolute;\n  }\n\n  .icon-mode {\n    @apply opacity-100 dark:opacity-0 absolute;\n  }\n\n  .icon-about-tool,\n  .icon-contact-link {\n    @apply h-[30px] sm:h-[40px] text-[30px] sm:text-[40px] aspect-square;\n  }\n\n  .icon-next {\n    @apply h-[70px] aspect-square;\n    transition: transform 500ms ease;\n  }\n\n  button:hover .icon-next {\n    @apply scale-110;\n  }\n\n  .btn-mini-tab {\n    @apply h-3 aspect-[4] border border-light dark:border-theme-3 rounded-md;\n    transition: background-color 500ms ease;\n  }\n\n  .btn-mini-tab.active {\n    @apply bg-light dark:bg-theme-3;\n  }\n\n  .project-card-outer-wrapper {\n    @apply w-[60%] p-4 bg-light dark:bg-transparent border dark:border-theme-3 rounded-md relative;\n  }\n\n  .project-card-wrapper {\n    @apply flex gap-4 overflow-x-scroll snap-x scroll-smooth relative;\n  }\n\n  .project-card {\n    @apply min-w-full flex justify-center items-center snap-center relative;\n  }\n\n  .project-card-image {\n    @apply rounded-md opacity-50;\n  }\n\n  .project-card-index {\n    @apply text-8xl leading-[0.8] font-extrabold absolute top-0 left-0;\n  }\n\n  .project-card-name {\n    @apply w-full text-4xl font-bold text-center absolute top-1/2 -translate-y-1/2;\n  }\n\n  .project-card-type {\n    @apply w-full font-bold text-center absolute top-3/4 -translate-y-1/2;\n  }\n\n  .project-card-expand {\n    @apply h-[50px] aspect-square bg-dark dark:bg-light bg-opacity-50 opacity-50 absolute top-4 right-4;\n  }\n\n  .btn-project-card-next {\n    @apply h-14 aspect-square bg-dark dark:bg-light bg-opacity-50 -rotate-90 opacity-50 absolute top-[calc(50%-28px)] right-4;\n  }\n\n  .btn-project-card-prev {\n    @apply h-14 aspect-square bg-dark dark:bg-light bg-opacity-50 rotate-90 opacity-50 absolute top-[calc(50%-28px)] left-4;\n  }\n\n  .project-card-image,\n  .project-card > div,\n  .project-card-expand,\n  .btn-project-card-next,\n  .btn-project-card-prev {\n    transition: opacity 500ms ease;\n  }\n\n  .project-card-wrapper:hover .project-card-image,\n  .project-card-outer-wrapper:hover .project-card-expand:hover,\n  .btn-project-card-next:hover,\n  .btn-project-card-prev:hover {\n    @apply opacity-100;\n  }\n\n  .project-card-wrapper:hover .project-card-index {\n    @apply opacity-50;\n  }\n\n  .project-card-wrapper:hover .project-card-name,\n  .project-card-wrapper:hover .project-card-type {\n    @apply opacity-0;\n  }\n\n  .underline-h,\n  .highlight-h {\n    @apply relative;\n  }\n\n  .underline-h:after {\n    @apply h-0.5 w-0 bg-dark dark:bg-light rounded-full absolute left-0 bottom-0.5;\n    content: \"\";\n    transition: width 500ms ease;\n  }\n\n  button:hover .underline-h:after {\n    @apply w-full;\n  }\n\n  .highlight-h:after {\n    @apply h-[50%] w-0 opacity-80 absolute top-[25%] left-[-15px] -z-10;\n    content: \"\";\n    transition: width 500ms ease;\n  }\n\n  button:hover .highlight-h:after {\n    @apply w-[calc(100%+30px)];\n  }\n\n  .about-span {\n    @apply text-light dark:text-theme-2;\n  }\n\n  .tool:hover .icon-about-tool {\n    @apply block;\n  }\n\n  /* Animation */\n  [class^=\"animate-\"] {\n    will-change: animation;\n  }\n}\n\n@layer utilities {\n  aside,\n  #btn-menu-l,\n  #btn-menu-l-close,\n  #btn-menu-l-close > div {\n    transition: transform 500ms ease;\n  }\n\n  main.move {\n    @apply translate-x-[40vw];\n  }\n\n  aside.move {\n    @apply translate-x-0;\n  }\n\n  #btn-menu-l.show {\n    @apply translate-y-[200px];\n  }\n\n  #btn-menu-l-close.show {\n    @apply translate-x-[200px];\n  }\n\n  #btn-menu-l-close:hover > div {\n    @apply rotate-180;\n  }\n\n  main {\n    transition:\n      transform 500ms ease,\n      opacity 500ms ease;\n  }\n\n  #article-about {\n    transition: opacity 500ms ease;\n  }\n\n  /* Menu dot */\n  button:disabled > div > span {\n    @apply opacity-100;\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/js/carousel.js":
/*!****************************!*\
  !*** ./src/js/carousel.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   carousel: () => (/* binding */ carousel)
/* harmony export */ });
const carousel = (() => {
  const btnProjectNext = document.querySelector(".btn-project-card-next");
  const btnProjectPrev = document.querySelector(".btn-project-card-prev");

  const projectCardWrapper = document.querySelector(".project-card-wrapper");
  const btnMiniTabs = document.querySelectorAll(".btn-mini-tab");

  const projectCard1 = document.querySelector("#project-card-1");
  const projectCard2 = document.querySelector("#project-card-2");

  const gap = 16;
  let scrollWidthProjectCard1 = 0;
  let scrollWidthProjectCard2 = 0;

  let i = 1;

  function init() {
    _getScrollWidthProjectCard();

    btnProjectNext.onclick = () => {
      document.querySelector(`#btn-mini-tab-${i}`).classList.toggle("active");
      if (i === 3) i = 1;
      else i += 1;
      document.querySelector(`#project-card-${i}`).scrollIntoView();
      document.querySelector(`#btn-mini-tab-${i}`).classList.toggle("active");
    };

    btnProjectPrev.onclick = () => {
      document.querySelector(`#btn-mini-tab-${i}`).classList.toggle("active");
      if (i === 1) i = 3;
      else i -= 1;
      document.querySelector(`#project-card-${i}`).scrollIntoView();
      document.querySelector(`#btn-mini-tab-${i}`).classList.toggle("active");
    };

    projectCardWrapper.onscrollend = () => {
      document.querySelector(`#btn-mini-tab-${i}`).classList.toggle("active");
      const scroll = projectCardWrapper.scrollLeft;
      if (scroll >= 0 && scroll < scrollWidthProjectCard1) i = 1;
      else if (
        scroll >= scrollWidthProjectCard1 &&
        scroll < scrollWidthProjectCard2
      )
        i = 2;
      else i = 3;
      document.querySelector(`#btn-mini-tab-${i}`).classList.toggle("active");
    };

    btnMiniTabs.forEach((btn) => {
      btn.onclick = () => {
        document.querySelector(`#btn-mini-tab-${i}`).classList.toggle("active");
        i = btn.id.slice(-1);
        document.querySelector(`#project-card-${i}`).scrollIntoView();
        document.querySelector(`#btn-mini-tab-${i}`).classList.toggle("active");
      };
    });
  }

  function _getScrollWidthProjectCard() {
    scrollWidthProjectCard1 = projectCard1.clientWidth + gap;
    scrollWidthProjectCard2 =
      projectCard2.clientWidth + gap + scrollWidthProjectCard1;
  }

  return { init };
})();




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
/* harmony import */ var _img_profile_1000w_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/profile-1000w.jpg */ "./src/img/profile-1000w.jpg");
/* harmony import */ var _img_projects_ypet_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/projects/ypet.png */ "./src/img/projects/ypet.png");
/* harmony import */ var _img_projects_weather_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/projects/weather.png */ "./src/img/projects/weather.png");
/* harmony import */ var _img_projects_homepage_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/projects/homepage.png */ "./src/img/projects/homepage.png");
/* harmony import */ var _img_icons_expand_100w_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/icons/expand-100w.png */ "./src/img/icons/expand-100w.png");
/* harmony import */ var _img_icons_expand_w_100w_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../img/icons/expand-w-100w.png */ "./src/img/icons/expand-w-100w.png");














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
    btnProjectsL.click();
  }

  function _initBtnAboutMoreL() {
    btnAboutMoreL.onclick = () => {
      if (isOpenAboutMore === 1) {
        articleAbout.classList.toggle("opacity-50");
        about.scrollTo(0, 0);
        btnAboutMoreL.querySelector("div").textContent = "MORE";
      } else {
        articleAbout.classList.toggle("opacity-50");
        about.scrollTo(articleAbout.clientWidth + 1, 0);
        btnAboutMoreL.querySelector("div").textContent = "BACK";
      }
      btnAboutMoreL.classList.toggle("animate-chevron-right");
      btnAboutMoreL.classList.toggle("animate-chevron-left");
      isOpenAboutMore = +!isOpenAboutMore;
    };
  }

  function _initBtnMenuL() {
    btnMenuL.onclick = () => {
      main.classList.toggle("opacity-50");
      _toggleMenuL();
    };

    btnMenuLClose.onclick = () => {
      main.classList.toggle("opacity-50");
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
  const about = document.querySelector("#about");
  const projects = document.querySelector("#projects");

  const btnDarkMode = document.querySelectorAll(".btn-dark-mode");
  const spanMenu = document.querySelector("#menu-text > span");
  const spanContact = document.querySelector("#contact-text > span");

  const btnsMenuL = [
    document.querySelector("#btn-home-l"),
    document.querySelector("#btn-about-l"),
    document.querySelector("#btn-projects-l"),
  ];

  const marginTop = 56;
  let scrollHeightHome = 0;
  let scrollHeightAbout = 0;
  let currentTheme = 1;

  function init() {
    _getScrollHeightSection();

    window.onresize = () => {
      _getScrollHeightSection();
    };

    main.onscrollend = () => {
      const scroll = main.scrollTop;
      if (scroll >= 0 && scroll < scrollHeightHome) {
        _changeTheme(1);
        _disableBtn(1);
      } else if (scroll >= scrollHeightHome && scroll < scrollHeightAbout) {
        _changeTheme(2);
        _disableBtn(2);
      } else {
        _changeTheme(3);
        _disableBtn(3);
      }
    };
  }

  function _getScrollHeightSection() {
    scrollHeightHome = home.clientHeight + marginTop;
    scrollHeightAbout = about.clientHeight + marginTop + scrollHeightHome;
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

/***/ "./src/img/icons/expand-100w.png":
/*!***************************************!*\
  !*** ./src/img/icons/expand-100w.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "35d1f636acb8b7824d6d.png";

/***/ }),

/***/ "./src/img/icons/expand-w-100w.png":
/*!*****************************************!*\
  !*** ./src/img/icons/expand-w-100w.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eee61ef56877df7c42c9.png";

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

/***/ "./src/img/profile-1000w.jpg":
/*!***********************************!*\
  !*** ./src/img/profile-1000w.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0575d19b2088e83eb7ce.jpg";

/***/ }),

/***/ "./src/img/projects/homepage.png":
/*!***************************************!*\
  !*** ./src/img/projects/homepage.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9fc0e11067e75e008e11.png";

/***/ }),

/***/ "./src/img/projects/weather.png":
/*!**************************************!*\
  !*** ./src/img/projects/weather.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c94210ae721539184bb7.png";

/***/ }),

/***/ "./src/img/projects/ypet.png":
/*!***********************************!*\
  !*** ./src/img/projects/ypet.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e96583a17bd8e335c774.png";

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
/* harmony import */ var _js_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/carousel */ "./src/js/carousel.js");







_js_dark_mode__WEBPACK_IMPORTED_MODULE_2__.darkMode.init();
_js_menu__WEBPACK_IMPORTED_MODULE_3__.menu.init();
_js_scroll__WEBPACK_IMPORTED_MODULE_4__.scroll.init();
_js_carousel__WEBPACK_IMPORTED_MODULE_5__.carousel.init();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjO0FBQ2Qsa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Qsa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQiwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QiwyQkFBMkI7QUFDM0I7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksT0FBTyxNQUFNLE9BQU8scUJBQXFCLG9CQUFvQixxQkFBcUIscUJBQXFCLE1BQU0sTUFBTSxXQUFXLE1BQU0sWUFBWSxNQUFNLE1BQU0scUJBQXFCLHFCQUFxQixxQkFBcUIsVUFBVSxvQkFBb0IscUJBQXFCLHFCQUFxQixxQkFBcUIscUJBQXFCLE1BQU0sT0FBTyxNQUFNLEtBQUssb0JBQW9CLHFCQUFxQixNQUFNLFFBQVEsTUFBTSxLQUFLLG9CQUFvQixvQkFBb0IscUJBQXFCLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sU0FBUyxNQUFNLFFBQVEscUJBQXFCLHFCQUFxQixxQkFBcUIsb0JBQW9CLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxRQUFRLE1BQU0sS0FBSyxvQkFBb0IscUJBQXFCLHFCQUFxQixNQUFNLFFBQVEsTUFBTSxTQUFTLHFCQUFxQixxQkFBcUIscUJBQXFCLG9CQUFvQixxQkFBcUIscUJBQXFCLHFCQUFxQixvQkFBb0Isb0JBQW9CLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxPQUFPLE1BQU0sUUFBUSxxQkFBcUIscUJBQXFCLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxPQUFPLE1BQU0sS0FBSyxxQkFBcUIscUJBQXFCLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE9BQU8sTUFBTSxLQUFLLHFCQUFxQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLGlCQUFpQixVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxPQUFPLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxPQUFPLE1BQU0sS0FBSyxvQkFBb0Isb0JBQW9CLE1BQU0sTUFBTSxvQkFBb0Isb0JBQW9CLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxRQUFRLE1BQU0sWUFBWSxvQkFBb0IscUJBQXFCLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sWUFBWSxLQUFLLFVBQVUsTUFBTSxZQUFZLE9BQU8sc0JBQXNCLHFCQUFxQixNQUFNLFlBQVksT0FBTyxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxLQUFLLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxNQUFNLE1BQU0sV0FBVyxLQUFLLEtBQUssTUFBTSxNQUFNLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxNQUFNLEtBQUssV0FBVyxLQUFLLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssTUFBTSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssV0FBVyxhQUFhLE1BQU0sTUFBTSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLE1BQU0sV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxNQUFNLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sT0FBTyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE9BQU8sWUFBWSxZQUFZLE1BQU0sTUFBTSxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sS0FBSyxNQUFNLFlBQVksWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sTUFBTSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksWUFBWSxhQUFhLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLFlBQVksWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLFlBQVksWUFBWSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxZQUFZLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxZQUFZLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLFlBQVksWUFBWSxhQUFhLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxZQUFZLGFBQWEsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLFlBQVksYUFBYSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sVUFBVSxZQUFZLE1BQU0sUUFBUSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sT0FBTyxLQUFLLE1BQU0sT0FBTyxLQUFLLEtBQUssS0FBSyxZQUFZLFlBQVksYUFBYSxhQUFhLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFVBQVUsWUFBWSxNQUFNLEtBQUssS0FBSyxLQUFLLEtBQUssWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxXQUFXLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxPQUFPLEtBQUssWUFBWSxNQUFNLE9BQU8sTUFBTSxZQUFZLE1BQU0sTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLE9BQU8sS0FBSyxZQUFZLE1BQU0sT0FBTyxNQUFNLFlBQVksTUFBTSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sT0FBTyxLQUFLLFlBQVksTUFBTSxPQUFPLE1BQU0sWUFBWSxNQUFNLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sT0FBTyxLQUFLLFlBQVksTUFBTSxPQUFPLE1BQU0sWUFBWSxNQUFNLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sS0FBSyxPQUFPLE1BQU0sS0FBSyxZQUFZLE1BQU0sVUFBVSxLQUFLLEtBQUssTUFBTSxPQUFPLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVks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LGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDRDtBQUNzQjtBQUNUO0FBQ0k7QUFDSTs7QUFFekMsbURBQVE7QUFDUiwwQ0FBSTtBQUNKLDhDQUFNO0FBQ04sa0RBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvc3R5bGUuY3NzPzkwMTEiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvanMvY2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2pzL2RhcmstbW9kZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvanMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2pzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2pzL3Njcm9sbC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250L01vbnRzZXJyYXQtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgLyogaHR0cHM6Ly9mb250cy5nb29nbGUuY29tL3NwZWNpbWVuL01vbnRzZXJyYXQgKi9cbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoXCJUcnVlVHlwZVwiKTtcbn1cblxuLyogISB0YWlsd2luZGNzcyB2My40LjQgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tICovXG5cbi8qXG4xLiBQcmV2ZW50IHBhZGRpbmcgYW5kIGJvcmRlciBmcm9tIGFmZmVjdGluZyBlbGVtZW50IHdpZHRoLiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy80KVxuMi4gQWxsb3cgYWRkaW5nIGEgYm9yZGVyIHRvIGFuIGVsZW1lbnQgYnkganVzdCBhZGRpbmcgYSBib3JkZXItd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3MvcHVsbC8xMTYpXG4qL1xuXG4qLFxuOjpiZWZvcmUsXG46OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xuICBib3JkZXItd2lkdGg6IDA7IC8qIDIgKi9cbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDsgLyogMiAqL1xuICBib3JkZXItY29sb3I6ICNlNWU3ZWI7IC8qIDIgKi9cbn1cblxuOjpiZWZvcmUsXG46OmFmdGVyIHtcbiAgLS10dy1jb250ZW50OiAnJztcbn1cblxuLypcbjEuIFVzZSBhIGNvbnNpc3RlbnQgc2Vuc2libGUgbGluZS1oZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxuMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXG4zLiBVc2UgYSBtb3JlIHJlYWRhYmxlIHRhYiBzaXplLlxuNC4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBzYW5zXFxgIGZvbnQtZmFtaWx5IGJ5IGRlZmF1bHQuXG41LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYHNhbnNcXGAgZm9udC1mZWF0dXJlLXNldHRpbmdzIGJ5IGRlZmF1bHQuXG42LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYHNhbnNcXGAgZm9udC12YXJpYXRpb24tc2V0dGluZ3MgYnkgZGVmYXVsdC5cbjcuIERpc2FibGUgdGFwIGhpZ2hsaWdodHMgb24gaU9TXG4qL1xuXG5odG1sLFxuOmhvc3Qge1xuICBsaW5lLWhlaWdodDogMS41OyAvKiAxICovXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xuICAtbW96LXRhYi1zaXplOiA0OyAvKiAzICovXG4gIC1vLXRhYi1zaXplOiA0O1xuICAgICB0YWItc2l6ZTogNDsgLyogMyAqL1xuICBmb250LWZhbWlseTogdWktc2Fucy1zZXJpZiwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBTZWdvZSBVSSwgUm9ib3RvLCBVYnVudHUsIENhbnRhcmVsbCwgTm90byBTYW5zLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgXCJOb3RvIENvbG9yIEVtb2ppXCI7IC8qIDQgKi9cbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBub3JtYWw7IC8qIDUgKi9cbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IG5vcm1hbDsgLyogNiAqL1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiA3ICovXG59XG5cbi8qXG4xLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXG4yLiBJbmhlcml0IGxpbmUtaGVpZ2h0IGZyb20gXFxgaHRtbFxcYCBzbyB1c2VycyBjYW4gc2V0IHRoZW0gYXMgYSBjbGFzcyBkaXJlY3RseSBvbiB0aGUgXFxgaHRtbFxcYCBlbGVtZW50LlxuKi9cblxuYm9keSB7XG4gIG1hcmdpbjogMDsgLyogMSAqL1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgLyogMiAqL1xufVxuXG4vKlxuMS4gQWRkIHRoZSBjb3JyZWN0IGhlaWdodCBpbiBGaXJlZm94LlxuMi4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2Ugb2YgYm9yZGVyIGNvbG9yIGluIEZpcmVmb3guIChodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTA2NTUpXG4zLiBFbnN1cmUgaG9yaXpvbnRhbCBydWxlcyBhcmUgdmlzaWJsZSBieSBkZWZhdWx0LlxuKi9cblxuaHIge1xuICBoZWlnaHQ6IDA7IC8qIDEgKi9cbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4OyAvKiAzICovXG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cbiovXG5cbmFiYnI6d2hlcmUoW3RpdGxlXSkge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xufVxuXG4vKlxuUmVtb3ZlIHRoZSBkZWZhdWx0IGZvbnQgc2l6ZSBhbmQgd2VpZ2h0IGZvciBoZWFkaW5ncy5cbiovXG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG59XG5cbi8qXG5SZXNldCBsaW5rcyB0byBvcHRpbWl6ZSBmb3Igb3B0LWluIHN0eWxpbmcgaW5zdGVhZCBvZiBvcHQtb3V0LlxuKi9cblxuYSB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gRWRnZSBhbmQgU2FmYXJpLlxuKi9cblxuYixcbnN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi8qXG4xLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYG1vbm9cXGAgZm9udC1mYW1pbHkgYnkgZGVmYXVsdC5cbjIuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgbW9ub1xcYCBmb250LWZlYXR1cmUtc2V0dGluZ3MgYnkgZGVmYXVsdC5cbjMuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgbW9ub1xcYCBmb250LXZhcmlhdGlvbi1zZXR0aW5ncyBieSBkZWZhdWx0LlxuNC4gQ29ycmVjdCB0aGUgb2RkIFxcYGVtXFxgIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cbiovXG5cbmNvZGUsXG5rYmQsXG5zYW1wLFxucHJlIHtcbiAgZm9udC1mYW1pbHk6IHVpLW1vbm9zcGFjZSwgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcIkxpYmVyYXRpb24gTW9ub1wiLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTsgLyogMSAqL1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IG5vcm1hbDsgLyogMiAqL1xuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogbm9ybWFsOyAvKiAzICovXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiA0ICovXG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiovXG5cbnNtYWxsIHtcbiAgZm9udC1zaXplOiA4MCU7XG59XG5cbi8qXG5QcmV2ZW50IFxcYHN1YlxcYCBhbmQgXFxgc3VwXFxgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXG4qL1xuXG5zdWIsXG5zdXAge1xuICBmb250LXNpemU6IDc1JTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG5zdWIge1xuICBib3R0b206IC0wLjI1ZW07XG59XG5cbnN1cCB7XG4gIHRvcDogLTAuNWVtO1xufVxuXG4vKlxuMS4gUmVtb3ZlIHRleHQgaW5kZW50YXRpb24gZnJvbSB0YWJsZSBjb250ZW50cyBpbiBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTk5OTA4OCwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIwMTI5NylcbjIuIENvcnJlY3QgdGFibGUgYm9yZGVyIGNvbG9yIGluaGVyaXRhbmNlIGluIGFsbCBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTkzNTcyOSwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE5NTAxNilcbjMuIFJlbW92ZSBnYXBzIGJldHdlZW4gdGFibGUgYm9yZGVycyBieSBkZWZhdWx0LlxuKi9cblxudGFibGUge1xuICB0ZXh0LWluZGVudDogMDsgLyogMSAqL1xuICBib3JkZXItY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgLyogMyAqL1xufVxuXG4vKlxuMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXG4yLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXG4zLiBSZW1vdmUgZGVmYXVsdCBwYWRkaW5nIGluIGFsbCBicm93c2Vycy5cbiovXG5cbmJ1dHRvbixcbmlucHV0LFxub3B0Z3JvdXAsXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogaW5oZXJpdDsgLyogMSAqL1xuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogaW5oZXJpdDsgLyogMSAqL1xuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7IC8qIDEgKi9cbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IC8qIDEgKi9cbiAgbGV0dGVyLXNwYWNpbmc6IGluaGVyaXQ7IC8qIDEgKi9cbiAgY29sb3I6IGluaGVyaXQ7IC8qIDEgKi9cbiAgbWFyZ2luOiAwOyAvKiAyICovXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cbn1cblxuLypcblJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSBhbmQgRmlyZWZveC5cbiovXG5cbmJ1dHRvbixcbnNlbGVjdCB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4vKlxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cbjIuIFJlbW92ZSBkZWZhdWx0IGJ1dHRvbiBzdHlsZXMuXG4qL1xuXG5idXR0b24sXG5pbnB1dDp3aGVyZShbdHlwZT0nYnV0dG9uJ10pLFxuaW5wdXQ6d2hlcmUoW3R5cGU9J3Jlc2V0J10pLFxuaW5wdXQ6d2hlcmUoW3R5cGU9J3N1Ym1pdCddKSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiAyICovXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7IC8qIDIgKi9cbn1cblxuLypcblVzZSB0aGUgbW9kZXJuIEZpcmVmb3ggZm9jdXMgc3R5bGUgZm9yIGFsbCBmb2N1c2FibGUgZWxlbWVudHMuXG4qL1xuXG46LW1vei1mb2N1c3Jpbmcge1xuICBvdXRsaW5lOiBhdXRvO1xufVxuXG4vKlxuUmVtb3ZlIHRoZSBhZGRpdGlvbmFsIFxcYDppbnZhbGlkXFxgIHN0eWxlcyBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvZ2Vja28tZGV2L2Jsb2IvMmY5ZWFjZDlkM2Q5OTVjOTM3YjQyNTFhNTU1N2Q5NWQ0OTRjOWJlMS9sYXlvdXQvc3R5bGUvcmVzL2Zvcm1zLmNzcyNMNzI4LUw3MzcpXG4qL1xuXG46LW1vei11aS1pbnZhbGlkIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLypcbkFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lIGFuZCBGaXJlZm94LlxuKi9cblxucHJvZ3Jlc3Mge1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbi8qXG5Db3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBTYWZhcmkuXG4qL1xuXG46Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG46Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qXG4xLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cbjIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxuKi9cblxuW3R5cGU9J3NlYXJjaCddIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cbn1cblxuLypcblJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cbiovXG5cbjo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLypcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4yLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIFxcYGluaGVyaXRcXGAgaW4gU2FmYXJpLlxuKi9cblxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cbn1cblxuLypcbkFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIENocm9tZSBhbmQgU2FmYXJpLlxuKi9cblxuc3VtbWFyeSB7XG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcbn1cblxuLypcblJlbW92ZXMgdGhlIGRlZmF1bHQgc3BhY2luZyBhbmQgYm9yZGVyIGZvciBhcHByb3ByaWF0ZSBlbGVtZW50cy5cbiovXG5cbmJsb2NrcXVvdGUsXG5kbCxcbmRkLFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxuaHIsXG5maWd1cmUsXG5wLFxucHJlIHtcbiAgbWFyZ2luOiAwO1xufVxuXG5maWVsZHNldCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxubGVnZW5kIHtcbiAgcGFkZGluZzogMDtcbn1cblxub2wsXG51bCxcbm1lbnUge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi8qXG5SZXNldCBkZWZhdWx0IHN0eWxpbmcgZm9yIGRpYWxvZ3MuXG4qL1xuXG5kaWFsb2cge1xuICBwYWRkaW5nOiAwO1xufVxuXG4vKlxuUHJldmVudCByZXNpemluZyB0ZXh0YXJlYXMgaG9yaXpvbnRhbGx5IGJ5IGRlZmF1bHQuXG4qL1xuXG50ZXh0YXJlYSB7XG4gIHJlc2l6ZTogdmVydGljYWw7XG59XG5cbi8qXG4xLiBSZXNldCB0aGUgZGVmYXVsdCBwbGFjZWhvbGRlciBvcGFjaXR5IGluIEZpcmVmb3guIChodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRsYWJzL3RhaWx3aW5kY3NzL2lzc3Vlcy8zMzAwKVxuMi4gU2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIGNvbG9yIHRvIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBncmF5IDQwMCBjb2xvci5cbiovXG5cbmlucHV0OjotbW96LXBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cbiAgY29sb3I6ICM5Y2EzYWY7IC8qIDIgKi9cbn1cblxuaW5wdXQ6OnBsYWNlaG9sZGVyLFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMTsgLyogMSAqL1xuICBjb2xvcjogIzljYTNhZjsgLyogMiAqL1xufVxuXG4vKlxuU2V0IHRoZSBkZWZhdWx0IGN1cnNvciBmb3IgYnV0dG9ucy5cbiovXG5cbmJ1dHRvbixcbltyb2xlPVwiYnV0dG9uXCJdIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKlxuTWFrZSBzdXJlIGRpc2FibGVkIGJ1dHRvbnMgZG9uJ3QgZ2V0IHRoZSBwb2ludGVyIGN1cnNvci5cbiovXG5cbjpkaXNhYmxlZCB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLypcbjEuIE1ha2UgcmVwbGFjZWQgZWxlbWVudHMgXFxgZGlzcGxheTogYmxvY2tcXGAgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTQpXG4yLiBBZGQgXFxgdmVydGljYWwtYWxpZ246IG1pZGRsZVxcYCB0byBhbGlnbiByZXBsYWNlZCBlbGVtZW50cyBtb3JlIHNlbnNpYmx5IGJ5IGRlZmF1bHQuIChodHRwczovL2dpdGh1Yi5jb20vamVuc2ltbW9ucy9jc3NyZW1lZHkvaXNzdWVzLzE0I2lzc3VlY29tbWVudC02MzQ5MzQyMTApXG4gICBUaGlzIGNhbiB0cmlnZ2VyIGEgcG9vcmx5IGNvbnNpZGVyZWQgbGludCBlcnJvciBpbiBzb21lIHRvb2xzIGJ1dCBpcyBpbmNsdWRlZCBieSBkZXNpZ24uXG4qL1xuXG5pbWcsXG5zdmcsXG52aWRlbyxcbmNhbnZhcyxcbmF1ZGlvLFxuaWZyYW1lLFxuZW1iZWQsXG5vYmplY3Qge1xuICBkaXNwbGF5OiBibG9jazsgLyogMSAqL1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAvKiAyICovXG59XG5cbi8qXG5Db25zdHJhaW4gaW1hZ2VzIGFuZCB2aWRlb3MgdG8gdGhlIHBhcmVudCB3aWR0aCBhbmQgcHJlc2VydmUgdGhlaXIgaW50cmluc2ljIGFzcGVjdCByYXRpby4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTQpXG4qL1xuXG5pbWcsXG52aWRlbyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vKiBNYWtlIGVsZW1lbnRzIHdpdGggdGhlIEhUTUwgaGlkZGVuIGF0dHJpYnV0ZSBzdGF5IGhpZGRlbiBieSBkZWZhdWx0ICovXG5cbltoaWRkZW5dIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogSGlkZSBzY3JvbGxiYXIgZm9yIElFLCBFZGdlIGFuZCBGaXJlZm94ICovXG5cbm1haW4sXG4gIHNlY3Rpb24sXG4gIC5wcm9qZWN0LWNhcmQtd3JhcHBlciB7XG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAvKiBJRSBhbmQgRWRnZSAqL1xuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTsgLyogRmlyZWZveCAqL1xuICB9XG5cbi8qIEhpZGUgc2Nyb2xsYmFyIGZvciBDaHJvbWUsIFNhZmFyaSBhbmQgT3BlcmEgKi9cblxubWFpbjo6LXdlYmtpdC1zY3JvbGxiYXIsXG4gIHNlY3Rpb246Oi13ZWJraXQtc2Nyb2xsYmFyLFxuICAucHJvamVjdC1jYXJkLXdyYXBwZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuYm9keSB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiYSgzOSwgMzksIDQyLCAxKTtcbiAgY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG5cbmJvZHk6d2hlcmUoLmRhcmssIC5kYXJrICopIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIDEpO1xuICBjb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cblxuYm9keSAqIHtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIGJhY2tncm91bmQtY29sb3IsIGJvcmRlci1jb2xvciwgdGV4dC1kZWNvcmF0aW9uLWNvbG9yLCBmaWxsLCBzdHJva2U7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA3NW1zO1xufVxuXG5oZWFkZXIsXG4gIGZvb3RlciB7XG4gIHotaW5kZXg6IDUwO1xuICBoZWlnaHQ6IDMuNXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG4gIHBhZGRpbmctbGVmdDogMS43NXJlbTtcbiAgcGFkZGluZy1yaWdodDogMS43NXJlbTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG5cbiAgaGVhZGVyLFxuICBmb290ZXIge1xuICAgIHBhZGRpbmctbGVmdDogMy41cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDMuNXJlbTtcbiAgfVxufVxuXG5oZWFkZXI6d2hlcmUoLmRhcmssIC5kYXJrICopLFxuICBmb290ZXI6d2hlcmUoLmRhcmssIC5kYXJrICopIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cblxuYXNpZGUge1xuICBtYXJnaW4tdG9wOiAzLjVyZW07XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDIgKiA1NnB4KTtcbiAgcGFkZGluZy1sZWZ0OiAyMDBweDtcbn1cblxubWFpbiB7XG4gIG1hcmdpbi10b3A6IDMuNXJlbTtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMiAqIDU2cHgpO1xuICB3aWR0aDogMTAwJTtcbiAgc2Nyb2xsLXNuYXAtdHlwZTogeSB2YXIoLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzKTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuc2VjdGlvbiB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDIgKiA1NnB4KTtcbiAgc2Nyb2xsLXNuYXAtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAxLjc1cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxLjc1cmVtO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcblxuICBzZWN0aW9uIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMuNXJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzLjVyZW07XG4gIH1cbn1cblxuYSB7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDUwMG1zIGVhc2U7XG4gIH1cblxuYnV0dG9uOmRpc2FibGVkIHtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2JhKDE2MSwgMTYxLCAxNzAsIDEpO1xuICBjb2xvcjogcmdiYSgxNjEsIDE2MSwgMTcwLCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cblxuYnV0dG9uOmRpc2FibGVkOndoZXJlKC5kYXJrLCAuZGFyayAqKSB7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiYSgxMTMsIDExMywgMTIyLCAxKTtcbiAgY29sb3I6IHJnYmEoMTEzLCAxMTMsIDEyMiwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG5cbmJ1dHRvbjpkaXNhYmxlZCB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cblxuKiwgOjpiZWZvcmUsIDo6YWZ0ZXIge1xuICAtLXR3LWJvcmRlci1zcGFjaW5nLXg6IDA7XG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteTogMDtcbiAgLS10dy10cmFuc2xhdGUteDogMDtcbiAgLS10dy10cmFuc2xhdGUteTogMDtcbiAgLS10dy1yb3RhdGU6IDA7XG4gIC0tdHctc2tldy14OiAwO1xuICAtLXR3LXNrZXcteTogMDtcbiAgLS10dy1zY2FsZS14OiAxO1xuICAtLXR3LXNjYWxlLXk6IDE7XG4gIC0tdHctcGFuLXg6ICA7XG4gIC0tdHctcGFuLXk6ICA7XG4gIC0tdHctcGluY2gtem9vbTogIDtcbiAgLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzOiBwcm94aW1pdHk7XG4gIC0tdHctZ3JhZGllbnQtZnJvbS1wb3NpdGlvbjogIDtcbiAgLS10dy1ncmFkaWVudC12aWEtcG9zaXRpb246ICA7XG4gIC0tdHctZ3JhZGllbnQtdG8tcG9zaXRpb246ICA7XG4gIC0tdHctb3JkaW5hbDogIDtcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XG4gIC0tdHctbnVtZXJpYy1maWd1cmU6ICA7XG4gIC0tdHctbnVtZXJpYy1zcGFjaW5nOiAgO1xuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XG4gIC0tdHctcmluZy1pbnNldDogIDtcbiAgLS10dy1yaW5nLW9mZnNldC13aWR0aDogMHB4O1xuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xuICAtLXR3LXJpbmctY29sb3I6IHJnYmEoNTksIDEzMCwgMjQ2LCAwLjUpO1xuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XG4gIC0tdHctcmluZy1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xuICAtLXR3LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMCByZ2JhKDAsMCwwLDApO1xuICAtLXR3LWJsdXI6ICA7XG4gIC0tdHctYnJpZ2h0bmVzczogIDtcbiAgLS10dy1jb250cmFzdDogIDtcbiAgLS10dy1ncmF5c2NhbGU6ICA7XG4gIC0tdHctaHVlLXJvdGF0ZTogIDtcbiAgLS10dy1pbnZlcnQ6ICA7XG4gIC0tdHctc2F0dXJhdGU6ICA7XG4gIC0tdHctc2VwaWE6ICA7XG4gIC0tdHctZHJvcC1zaGFkb3c6ICA7XG4gIC0tdHctYmFja2Ryb3AtYmx1cjogIDtcbiAgLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzOiAgO1xuICAtLXR3LWJhY2tkcm9wLWNvbnRyYXN0OiAgO1xuICAtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZTogIDtcbiAgLS10dy1iYWNrZHJvcC1odWUtcm90YXRlOiAgO1xuICAtLXR3LWJhY2tkcm9wLWludmVydDogIDtcbiAgLS10dy1iYWNrZHJvcC1vcGFjaXR5OiAgO1xuICAtLXR3LWJhY2tkcm9wLXNhdHVyYXRlOiAgO1xuICAtLXR3LWJhY2tkcm9wLXNlcGlhOiAgO1xuICAtLXR3LWNvbnRhaW4tc2l6ZTogIDtcbiAgLS10dy1jb250YWluLWxheW91dDogIDtcbiAgLS10dy1jb250YWluLXBhaW50OiAgO1xuICAtLXR3LWNvbnRhaW4tc3R5bGU6ICA7XG59XG5cbjo6YmFja2Ryb3Age1xuICAtLXR3LWJvcmRlci1zcGFjaW5nLXg6IDA7XG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteTogMDtcbiAgLS10dy10cmFuc2xhdGUteDogMDtcbiAgLS10dy10cmFuc2xhdGUteTogMDtcbiAgLS10dy1yb3RhdGU6IDA7XG4gIC0tdHctc2tldy14OiAwO1xuICAtLXR3LXNrZXcteTogMDtcbiAgLS10dy1zY2FsZS14OiAxO1xuICAtLXR3LXNjYWxlLXk6IDE7XG4gIC0tdHctcGFuLXg6ICA7XG4gIC0tdHctcGFuLXk6ICA7XG4gIC0tdHctcGluY2gtem9vbTogIDtcbiAgLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzOiBwcm94aW1pdHk7XG4gIC0tdHctZ3JhZGllbnQtZnJvbS1wb3NpdGlvbjogIDtcbiAgLS10dy1ncmFkaWVudC12aWEtcG9zaXRpb246ICA7XG4gIC0tdHctZ3JhZGllbnQtdG8tcG9zaXRpb246ICA7XG4gIC0tdHctb3JkaW5hbDogIDtcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XG4gIC0tdHctbnVtZXJpYy1maWd1cmU6ICA7XG4gIC0tdHctbnVtZXJpYy1zcGFjaW5nOiAgO1xuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XG4gIC0tdHctcmluZy1pbnNldDogIDtcbiAgLS10dy1yaW5nLW9mZnNldC13aWR0aDogMHB4O1xuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xuICAtLXR3LXJpbmctY29sb3I6IHJnYmEoNTksIDEzMCwgMjQ2LCAwLjUpO1xuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XG4gIC0tdHctcmluZy1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xuICAtLXR3LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMCByZ2JhKDAsMCwwLDApO1xuICAtLXR3LWJsdXI6ICA7XG4gIC0tdHctYnJpZ2h0bmVzczogIDtcbiAgLS10dy1jb250cmFzdDogIDtcbiAgLS10dy1ncmF5c2NhbGU6ICA7XG4gIC0tdHctaHVlLXJvdGF0ZTogIDtcbiAgLS10dy1pbnZlcnQ6ICA7XG4gIC0tdHctc2F0dXJhdGU6ICA7XG4gIC0tdHctc2VwaWE6ICA7XG4gIC0tdHctZHJvcC1zaGFkb3c6ICA7XG4gIC0tdHctYmFja2Ryb3AtYmx1cjogIDtcbiAgLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzOiAgO1xuICAtLXR3LWJhY2tkcm9wLWNvbnRyYXN0OiAgO1xuICAtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZTogIDtcbiAgLS10dy1iYWNrZHJvcC1odWUtcm90YXRlOiAgO1xuICAtLXR3LWJhY2tkcm9wLWludmVydDogIDtcbiAgLS10dy1iYWNrZHJvcC1vcGFjaXR5OiAgO1xuICAtLXR3LWJhY2tkcm9wLXNhdHVyYXRlOiAgO1xuICAtLXR3LWJhY2tkcm9wLXNlcGlhOiAgO1xuICAtLXR3LWNvbnRhaW4tc2l6ZTogIDtcbiAgLS10dy1jb250YWluLWxheW91dDogIDtcbiAgLS10dy1jb250YWluLXBhaW50OiAgO1xuICAtLXR3LWNvbnRhaW4tc3R5bGU6ICA7XG59XG4ubW9udHNlcnJhdCB7XG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtb3B0aWNhbC1zaXppbmc6IGF1dG87XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICB9XG4udGV4dC1oZWxsbyB7XG4gIGZvbnQtc2l6ZTogMTB2dztcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbGluZS1oZWlnaHQ6IDAuODtcbn1cbkBtZWRpYSAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG5cbiAgLnRleHQtaGVsbG8ge1xuICAgIGZvbnQtc2l6ZTogMTV2dztcbiAgfVxufVxuLnRleHQtYmlnIHtcbiAgZm9udC1zaXplOiAzLjc1cmVtO1xuICBmb250LXdlaWdodDogODAwO1xuICBsaW5lLWhlaWdodDogMC44O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG5cbiAgLnRleHQtYmlnIHtcbiAgICBmb250LXNpemU6IDQuNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgfVxufVxuLmJ0bi1kYXJrLW1vZGUge1xuICBhc3BlY3QtcmF0aW86IDI7XG4gIGhlaWdodDogMS4yNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG4gIC0tdHctc2hhZG93OiBpbnNldCAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiBpbnNldCAwIDJweCA0cHggMCB2YXIoLS10dy1zaGFkb3ctY29sb3IpO1xuICBib3gtc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKSwgMCAwIHJnYmEoMCwwLDAsMCksIGluc2V0IDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwIHJnYmEoMCwwLDAsMCkpLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwIHJnYmEoMCwwLDAsMCkpLCB2YXIoLS10dy1zaGFkb3cpO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG5cbiAgLmJ0bi1kYXJrLW1vZGUge1xuICAgIGhlaWdodDogMS41cmVtO1xuICB9XG59XG4uYnRuLWRhcmstbW9kZSB7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciA1MDBtcyBlYXNlO1xuICB9XG4uYnRuLWRhcmstbW9kZS50aGVtZS0xOmhvdmVyIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0OCwgMTEzLCAxMTMsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0OCwgMTEzLCAxMTMsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5idG4tZGFyay1tb2RlLnRoZW1lLTI6aG92ZXIge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUwLCAyMDQsIDIxLCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsIDIwNCwgMjEsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5idG4tZGFyay1tb2RlLnRoZW1lLTM6aG92ZXIge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQsIDE2NSwgMjMzLCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNCwgMTY1LCAyMzMsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5kYXJrLW1vZGUtYmFsbCB7XG4gIG1hcmdpbi1sZWZ0OiAwLjEyNXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjEyNXJlbTtcbiAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0cHgpO1xuICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5kYXJrLW1vZGUtYmFsbDp3aGVyZSguZGFyaywgLmRhcmsgKikge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLmRhcmstbW9kZS1iYWxsIHtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNzUwbXMgZWFzZTtcbiAgfVxuLmRhcmstbW9kZS1iYWxsLmRhcmsge1xuICAtLXR3LXRyYW5zbGF0ZS14OiBjYWxjKDEwMCUgKyA0cHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZShjYWxjKDEwMCUgKyA0cHgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuLmljb24tbW9kZS1kYXJrLFxuICAuaWNvbi1tb2RlIHtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDc1bXMgZWFzZTtcbiAgfVxuLmljb24tbW9kZS1kYXJrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xufVxuLmljb24tbW9kZS1kYXJrOndoZXJlKC5kYXJrLCAuZGFyayAqKSB7XG4gIG9wYWNpdHk6IDE7XG59XG4uaWNvbi1tb2RlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAxO1xufVxuLmljb24tbW9kZTp3aGVyZSguZGFyaywgLmRhcmsgKikge1xuICBvcGFjaXR5OiAwO1xufVxuLmljb24tYWJvdXQtdG9vbCxcbiAgLmljb24tY29udGFjdC1saW5rIHtcbiAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBmb250LXNpemU6IDMwcHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcblxuICAuaWNvbi1hYm91dC10b29sLFxuICAuaWNvbi1jb250YWN0LWxpbmsge1xuICAgIGhlaWdodDogNDBweDtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gIH1cbn1cbi5pY29uLW5leHQge1xuICBhc3BlY3QtcmF0aW86IDEgLyAxO1xuICBoZWlnaHQ6IDcwcHg7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDUwMG1zIGVhc2U7XG59XG5idXR0b246aG92ZXIgLmljb24tbmV4dCB7XG4gIC0tdHctc2NhbGUteDogMS4xO1xuICAtLXR3LXNjYWxlLXk6IDEuMTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgoMS4xKSBzY2FsZVkoMS4xKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG4uYnRuLW1pbmktdGFiIHtcbiAgYXNwZWN0LXJhdGlvOiA0O1xuICBoZWlnaHQ6IDAuNzVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIDEpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcbn1cbi5idG4tbWluaS10YWI6d2hlcmUoLmRhcmssIC5kYXJrICopIHtcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDE0LCAxNjUsIDIzMywgMSk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgxNCwgMTY1LCAyMzMsIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XG59XG4uYnRuLW1pbmktdGFiIHtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDUwMG1zIGVhc2U7XG4gIH1cbi5idG4tbWluaS10YWIuYWN0aXZlIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5idG4tbWluaS10YWIuYWN0aXZlOndoZXJlKC5kYXJrLCAuZGFyayAqKSB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNCwgMTY1LCAyMzMsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0LCAxNjUsIDIzMywgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLnByb2plY3QtY2FyZC1vdXRlci13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNjAlO1xuICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG4gIHBhZGRpbmc6IDFyZW07XG59XG4ucHJvamVjdC1jYXJkLW91dGVyLXdyYXBwZXI6d2hlcmUoLmRhcmssIC5kYXJrICopIHtcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDE0LCAxNjUsIDIzMywgMSk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgxNCwgMTY1LCAyMzMsIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLnByb2plY3QtY2FyZC13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBzY3JvbGwtc25hcC10eXBlOiB4IHZhcigtLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3MpO1xuICBnYXA6IDFyZW07XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG4ucHJvamVjdC1jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIHNjcm9sbC1zbmFwLWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnByb2plY3QtY2FyZC1pbWFnZSB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xuICBvcGFjaXR5OiAwLjU7XG59XG4ucHJvamVjdC1jYXJkLWluZGV4IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICBmb250LXNpemU6IDZyZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGxpbmUtaGVpZ2h0OiAwLjg7XG59XG4ucHJvamVjdC1jYXJkLW5hbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB3aWR0aDogMTAwJTtcbiAgLS10dy10cmFuc2xhdGUteTogLTUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCAtNTAlKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIuMjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAyLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4ucHJvamVjdC1jYXJkLXR5cGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNzUlO1xuICB3aWR0aDogMTAwJTtcbiAgLS10dy10cmFuc2xhdGUteTogLTUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCAtNTAlKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLnByb2plY3QtY2FyZC1leHBhbmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMXJlbTtcbiAgcmlnaHQ6IDFyZW07XG4gIGFzcGVjdC1yYXRpbzogMSAvIDE7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMzksIDQyLCAwLjUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbiAgLS10dy1iZy1vcGFjaXR5OiAwLjU7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5wcm9qZWN0LWNhcmQtZXhwYW5kOndoZXJlKC5kYXJrLCAuZGFyayAqKSB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4uYnRuLXByb2plY3QtY2FyZC1uZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IGNhbGMoNTAlIC0gMjhweCk7XG4gIHJpZ2h0OiAxcmVtO1xuICBhc3BlY3QtcmF0aW86IDEgLyAxO1xuICBoZWlnaHQ6IDMuNXJlbTtcbiAgLS10dy1yb3RhdGU6IC05MGRlZztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSgtOTBkZWcpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgMC41KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMzksIDQyLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG4gIC0tdHctYmctb3BhY2l0eTogMC41O1xuICBvcGFjaXR5OiAwLjU7XG59XG4uYnRuLXByb2plY3QtY2FyZC1uZXh0OndoZXJlKC5kYXJrLCAuZGFyayAqKSB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4uYnRuLXByb2plY3QtY2FyZC1wcmV2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IGNhbGMoNTAlIC0gMjhweCk7XG4gIGxlZnQ6IDFyZW07XG4gIGFzcGVjdC1yYXRpbzogMSAvIDE7XG4gIGhlaWdodDogMy41cmVtO1xuICAtLXR3LXJvdGF0ZTogOTBkZWc7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUoOTBkZWcpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgMC41KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMzksIDQyLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG4gIC0tdHctYmctb3BhY2l0eTogMC41O1xuICBvcGFjaXR5OiAwLjU7XG59XG4uYnRuLXByb2plY3QtY2FyZC1wcmV2OndoZXJlKC5kYXJrLCAuZGFyayAqKSB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4ucHJvamVjdC1jYXJkLWltYWdlLFxuICAucHJvamVjdC1jYXJkID4gZGl2LFxuICAucHJvamVjdC1jYXJkLWV4cGFuZCxcbiAgLmJ0bi1wcm9qZWN0LWNhcmQtbmV4dCxcbiAgLmJ0bi1wcm9qZWN0LWNhcmQtcHJldiB7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSA1MDBtcyBlYXNlO1xuICB9XG4ucHJvamVjdC1jYXJkLXdyYXBwZXI6aG92ZXIgLnByb2plY3QtY2FyZC1pbWFnZSxcbiAgLnByb2plY3QtY2FyZC1vdXRlci13cmFwcGVyOmhvdmVyIC5wcm9qZWN0LWNhcmQtZXhwYW5kOmhvdmVyLFxuICAuYnRuLXByb2plY3QtY2FyZC1uZXh0OmhvdmVyLFxuICAuYnRuLXByb2plY3QtY2FyZC1wcmV2OmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5wcm9qZWN0LWNhcmQtd3JhcHBlcjpob3ZlciAucHJvamVjdC1jYXJkLWluZGV4IHtcbiAgb3BhY2l0eTogMC41O1xufVxuLnByb2plY3QtY2FyZC13cmFwcGVyOmhvdmVyIC5wcm9qZWN0LWNhcmQtbmFtZSxcbiAgLnByb2plY3QtY2FyZC13cmFwcGVyOmhvdmVyIC5wcm9qZWN0LWNhcmQtdHlwZSB7XG4gIG9wYWNpdHk6IDA7XG59XG4udW5kZXJsaW5lLWgsXG4gIC5oaWdobGlnaHQtaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi51bmRlcmxpbmUtaDphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICBib3R0b206IDAuMTI1cmVtO1xuICBoZWlnaHQ6IDAuMTI1cmVtO1xuICB3aWR0aDogMHB4O1xuICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMzksIDQyLCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMzksIDQyLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4udW5kZXJsaW5lLWg6d2hlcmUoLmRhcmssIC5kYXJrICopOmFmdGVyIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi51bmRlcmxpbmUtaDphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCA1MDBtcyBlYXNlO1xuICB9XG5idXR0b246aG92ZXIgLnVuZGVybGluZS1oOmFmdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaGlnaGxpZ2h0LWg6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjUlO1xuICBsZWZ0OiAtMTVweDtcbiAgei1pbmRleDogLTEwO1xuICBoZWlnaHQ6IDUwJTtcbiAgd2lkdGg6IDBweDtcbiAgb3BhY2l0eTogMC44O1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgdHJhbnNpdGlvbjogd2lkdGggNTAwbXMgZWFzZTtcbn1cbmJ1dHRvbjpob3ZlciAuaGlnaGxpZ2h0LWg6YWZ0ZXIge1xuICB3aWR0aDogY2FsYygxMDAlICsgMzBweCk7XG59XG4uYWJvdXQtc3BhbiB7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCAxKTtcbiAgY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG4uYWJvdXQtc3Bhbjp3aGVyZSguZGFyaywgLmRhcmsgKikge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoMjUwLCAyMDQsIDIxLCAxKTtcbiAgY29sb3I6IHJnYmEoMjUwLCAyMDQsIDIxLCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cbi50b29sOmhvdmVyIC5pY29uLWFib3V0LXRvb2wge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi8qIEFuaW1hdGlvbiAqL1xuW2NsYXNzXj1cImFuaW1hdGUtXCJdIHtcbiAgICB3aWxsLWNoYW5nZTogYW5pbWF0aW9uO1xuICB9XG4uZml4ZWQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG4uYWJzb2x1dGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4ucmVsYXRpdmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYm90dG9tLTAge1xuICBib3R0b206IDBweDtcbn1cbi5sZWZ0LTFcXFxcLzIge1xuICBsZWZ0OiA1MCU7XG59XG4ubGVmdC1cXFxcWy0xMjBweFxcXFxdIHtcbiAgbGVmdDogLTEyMHB4O1xufVxuLmxlZnQtXFxcXFstMTU2cHhcXFxcXSB7XG4gIGxlZnQ6IC0xNTZweDtcbn1cbi5yaWdodC0wIHtcbiAgcmlnaHQ6IDBweDtcbn1cbi5yaWdodC0xNCB7XG4gIHJpZ2h0OiAzLjVyZW07XG59XG4udG9wLTAge1xuICB0b3A6IDBweDtcbn1cbi50b3AtMVxcXFwvMiB7XG4gIHRvcDogNTAlO1xufVxuLnRvcC1cXFxcWzUwdmhcXFxcXSB7XG4gIHRvcDogNTB2aDtcbn1cbi56LTQwIHtcbiAgei1pbmRleDogNDA7XG59XG4uei01MCB7XG4gIHotaW5kZXg6IDUwO1xufVxuLm10LTE0IHtcbiAgbWFyZ2luLXRvcDogMy41cmVtO1xufVxuLm10LTIge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG59XG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uYXNwZWN0LXNxdWFyZSB7XG4gIGFzcGVjdC1yYXRpbzogMSAvIDE7XG59XG4uaC0xMCB7XG4gIGhlaWdodDogMi41cmVtO1xufVxuLmgtXFxcXFtjYWxjXFxcXCgyMHZ3XFxcXCowXFxcXC44XFxcXClcXFxcXSB7XG4gIGhlaWdodDogY2FsYygyMHZ3ICogMC44KTtcbn1cbi5oLWZ1bGwge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4udy1cXFxcWzIwXFxcXCVcXFxcXSB7XG4gIHdpZHRoOiAyMCU7XG59XG4udy1cXFxcWzQwXFxcXCVcXFxcXSB7XG4gIHdpZHRoOiA0MCU7XG59XG4udy1cXFxcW2NhbGNcXFxcKDEwMFxcXFwlLTE2cHhcXFxcKVxcXFxdIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDE2cHgpO1xufVxuLnctZml0IHtcbiAgd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbn1cbi53LWZ1bGwge1xuICB3aWR0aDogMTAwJTtcbn1cbi5taW4tdy1cXFxcWzMwXFxcXCVcXFxcXSB7XG4gIG1pbi13aWR0aDogMzAlO1xufVxuLm1pbi13LVxcXFxbNzBcXFxcJVxcXFxdIHtcbiAgbWluLXdpZHRoOiA3MCU7XG59XG4ubWluLXctZnVsbCB7XG4gIG1pbi13aWR0aDogMTAwJTtcbn1cbi4tdHJhbnNsYXRlLXgtMVxcXFwvMiB7XG4gIC0tdHctdHJhbnNsYXRlLXg6IC01MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG4uLXRyYW5zbGF0ZS15LTFcXFxcLzIge1xuICAtLXR3LXRyYW5zbGF0ZS15OiAtNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIC01MCUpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuLnRyYW5zbGF0ZS14LTFcXFxcLzIge1xuICAtLXR3LXRyYW5zbGF0ZS14OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbi50cmFuc2xhdGUteC1cXFxcWy00MHZ3XFxcXF0ge1xuICAtLXR3LXRyYW5zbGF0ZS14OiAtNDB2dztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQwdncsIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG4ucm90YXRlLTE4MCB7XG4gIC0tdHctcm90YXRlOiAxODBkZWc7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUoMTgwZGVnKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuLnJvdGF0ZS05MCB7XG4gIC0tdHctcm90YXRlOiA5MGRlZztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSg5MGRlZykgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbkBrZXlmcmFtZXMgYm91bmNlLWNoZXZyb24tZG93biB7XG5cbiAgMCUsIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC0yNSUpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjgsIDAsIDEsIDEpO1xuICB9XG5cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgwKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbiAgfVxufVxuLmFuaW1hdGUtY2hldnJvbi1kb3duIHtcbiAgYW5pbWF0aW9uOiBib3VuY2UtY2hldnJvbi1kb3duIDFzIGluZmluaXRlO1xufVxuQGtleWZyYW1lcyBib3VuY2UtY2hldnJvbi1sZWZ0IHtcblxuICAwJSwgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSg5MGRlZykgdHJhbnNsYXRlWSgwKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC44LCAwLCAxLCAxKTtcbiAgfVxuXG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSg5MGRlZykgdHJhbnNsYXRlWSgyNSUpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICB9XG59XG4uYW5pbWF0ZS1jaGV2cm9uLWxlZnQge1xuICBhbmltYXRpb246IGJvdW5jZS1jaGV2cm9uLWxlZnQgMXMgaW5maW5pdGU7XG59XG5Aa2V5ZnJhbWVzIGJvdW5jZS1jaGV2cm9uLXJpZ2h0IHtcblxuICAwJSwgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSgtOTBkZWcpIHRyYW5zbGF0ZVkoLTI1JSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuOCwgMCwgMSwgMSk7XG4gIH1cblxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoLTkwZGVnKSB0cmFuc2xhdGVZKDApO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICB9XG59XG4uYW5pbWF0ZS1jaGV2cm9uLXJpZ2h0IHtcbiAgYW5pbWF0aW9uOiBib3VuY2UtY2hldnJvbi1yaWdodCAxcyBpbmZpbml0ZTtcbn1cbkBrZXlmcmFtZXMgc2xpZGUtdXAge1xuXG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbi5hbmltYXRlLWhlbGxvIHtcbiAgYW5pbWF0aW9uOiBzbGlkZS11cCAxcyAxO1xufVxuQGtleWZyYW1lcyBib3VuY2UtbWVudSB7XG5cbiAgMCUsIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoLTkwZGVnKSB0cmFuc2xhdGVZKDApO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjgsIDAsIDEsIDEpO1xuICB9XG5cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKC05MGRlZykgdHJhbnNsYXRlWSgyNSUpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICB9XG59XG4uYW5pbWF0ZS1tZW51IHtcbiAgYW5pbWF0aW9uOiBib3VuY2UtbWVudSAxLjVzIGluZmluaXRlO1xufVxuLnNuYXAteCB7XG4gIHNjcm9sbC1zbmFwLXR5cGU6IHggdmFyKC0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzcyk7XG59XG4uc25hcC1jZW50ZXIge1xuICBzY3JvbGwtc25hcC1hbGlnbjogY2VudGVyO1xufVxuLmZsZXgtcm93IHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5mbGV4LXJvdy1yZXZlcnNlIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xufVxuLmZsZXgtY29sIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5pdGVtcy1jZW50ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmp1c3RpZnktY2VudGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uanVzdGlmeS1iZXR3ZWVuIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmp1c3RpZnktZXZlbmx5IHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG4uZ2FwLTEge1xuICBnYXA6IDAuMjVyZW07XG59XG4uZ2FwLTE0IHtcbiAgZ2FwOiAzLjVyZW07XG59XG4uZ2FwLTIge1xuICBnYXA6IDAuNXJlbTtcbn1cbi5nYXAtMyB7XG4gIGdhcDogMC43NXJlbTtcbn1cbi5nYXAtNSB7XG4gIGdhcDogMS4yNXJlbTtcbn1cbi5vdmVyZmxvdy1oaWRkZW4ge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm92ZXJmbG93LXgtaGlkZGVuIHtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuLm92ZXJmbG93LXgtc2Nyb2xsIHtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xufVxuLnNjcm9sbC1zbW9vdGgge1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cbi50ZXh0LXByZXR0eSB7XG4gIHRleHQtd3JhcDogcHJldHR5O1xufVxuLnJvdW5kZWQtZnVsbCB7XG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbn1cbi5ib3JkZXItMiB7XG4gIGJvcmRlci13aWR0aDogMnB4O1xufVxuLmJvcmRlci15LTIge1xuICBib3JkZXItdG9wLXdpZHRoOiAycHg7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcbn1cbi5ib3JkZXItdGhlbWUtMiB7XG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTAsIDIwNCwgMjEsIDEpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjUwLCAyMDQsIDIxLCB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xufVxuLmJnLWRhcmsge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLmJnLWxpZ2h0IHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5iZy10aGVtZS0xIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0OCwgMTEzLCAxMTMsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0OCwgMTEzLCAxMTMsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5iZy10aGVtZS0yIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MCwgMjA0LCAyMSwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUwLCAyMDQsIDIxLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4uYmctdGhlbWUtMyB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNCwgMTY1LCAyMzMsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0LCAxNjUsIDIzMywgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLnB4LTAge1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgcGFkZGluZy1yaWdodDogMHB4O1xufVxuLnB4LTE0IHtcbiAgcGFkZGluZy1sZWZ0OiAzLjVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDMuNXJlbTtcbn1cbi5weC03IHtcbiAgcGFkZGluZy1sZWZ0OiAxLjc1cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxLjc1cmVtO1xufVxuLnB5LTE0IHtcbiAgcGFkZGluZy10b3A6IDMuNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDMuNXJlbTtcbn1cbi50ZXh0LWp1c3RpZnkge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuLnRleHQtc3RhcnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnRleHQtMnhsIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xufVxuLnRleHQtNHhsIHtcbiAgZm9udC1zaXplOiAyLjI1cmVtO1xuICBsaW5lLWhlaWdodDogMi41cmVtO1xufVxuLnRleHQtNnhsIHtcbiAgZm9udC1zaXplOiAzLjc1cmVtO1xuICBsaW5lLWhlaWdodDogMTtcbn1cbi50ZXh0LXNtIHtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XG59XG4udGV4dC14bCB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XG59XG4uZm9udC1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5mb250LWV4dHJhYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG4uZm9udC1zZW1pYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4udXBwZXJjYXNlIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5pdGFsaWMge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4udGV4dC1saWdodCB7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCAxKTtcbiAgY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG4udGV4dC10aGVtZS0xIHtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2JhKDI0OCwgMTEzLCAxMTMsIDEpO1xuICBjb2xvcjogcmdiYSgyNDgsIDExMywgMTEzLCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cbi50ZXh0LXRoZW1lLTIge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoMjUwLCAyMDQsIDIxLCAxKTtcbiAgY29sb3I6IHJnYmEoMjUwLCAyMDQsIDIxLCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cbi50ZXh0LXRoZW1lLTMge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoMTQsIDE2NSwgMjMzLCAxKTtcbiAgY29sb3I6IHJnYmEoMTQsIDE2NSwgMjMzLCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cbi51bmRlcmxpbmUge1xuICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xufVxuLm9wYWNpdHktMCB7XG4gIG9wYWNpdHk6IDA7XG59XG4ub3BhY2l0eS01MCB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbmFzaWRlLFxuICAjYnRuLW1lbnUtbCxcbiAgI2J0bi1tZW51LWwtY2xvc2UsXG4gICNidG4tbWVudS1sLWNsb3NlID4gZGl2IHtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNTAwbXMgZWFzZTtcbiAgfVxubWFpbi5tb3ZlIHtcbiAgLS10dy10cmFuc2xhdGUteDogNDB2dztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNDB2dywgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbmFzaWRlLm1vdmUge1xuICAtLXR3LXRyYW5zbGF0ZS14OiAwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbiNidG4tbWVudS1sLnNob3cge1xuICAtLXR3LXRyYW5zbGF0ZS15OiAyMDBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCAyMDBweCkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG4jYnRuLW1lbnUtbC1jbG9zZS5zaG93IHtcbiAgLS10dy10cmFuc2xhdGUteDogMjAwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIwMHB4LCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuI2J0bi1tZW51LWwtY2xvc2U6aG92ZXIgPiBkaXYge1xuICAtLXR3LXJvdGF0ZTogMTgwZGVnO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKDE4MGRlZykgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbm1haW4ge1xuICAgIHRyYW5zaXRpb246XG4gICAgICB0cmFuc2Zvcm0gNTAwbXMgZWFzZSwgb3BhY2l0eSA1MDBtcyBlYXNlO1xuICB9XG4jYXJ0aWNsZS1hYm91dCB7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSA1MDBtcyBlYXNlO1xuICB9XG4vKiBNZW51IGRvdCAqL1xuYnV0dG9uOmRpc2FibGVkID4gZGl2ID4gc3BhbiB7XG4gIG9wYWNpdHk6IDE7XG59XG4uYWZ0ZXJcXFxcOmJnLXRoZW1lLTE6OmFmdGVyIHtcbiAgY29udGVudDogdmFyKC0tdHctY29udGVudCk7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDgsIDExMywgMTEzLCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDgsIDExMywgMTEzLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4uYWZ0ZXJcXFxcOmJnLXRoZW1lLTI6OmFmdGVyIHtcbiAgY29udGVudDogdmFyKC0tdHctY29udGVudCk7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsIDIwNCwgMjEsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MCwgMjA0LCAyMSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLmFmdGVyXFxcXDpiZy10aGVtZS0zOjphZnRlciB7XG4gIGNvbnRlbnQ6IHZhcigtLXR3LWNvbnRlbnQpO1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQsIDE2NSwgMjMzLCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNCwgMTY1LCAyMzMsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5ob3ZlclxcXFw6c2NhbGUtMTEwOmhvdmVyIHtcbiAgLS10dy1zY2FsZS14OiAxLjE7XG4gIC0tdHctc2NhbGUteTogMS4xO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCgxLjEpIHNjYWxlWSgxLjEpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuXG4gIC5tZFxcXFw6cHgtMTQge1xuICAgIHBhZGRpbmctbGVmdDogMy41cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDMuNXJlbTtcbiAgfVxuXG4gIC5tZFxcXFw6dGV4dC0yeGwge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xuICB9XG5cbiAgLm1kXFxcXDp0ZXh0LWxnIHtcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuXG4gIC5wb3J0cmFpdFxcXFw6aGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4uZGFya1xcXFw6YmctZGFyazp3aGVyZSguZGFyaywgLmRhcmsgKikge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLmRhcmtcXFxcOmJnLWxpZ2h0OndoZXJlKC5kYXJrLCAuZGFyayAqKSB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4uZGFya1xcXFw6YmctdGhlbWUtMjp3aGVyZSguZGFyaywgLmRhcmsgKikge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUwLCAyMDQsIDIxLCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsIDIwNCwgMjEsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5kYXJrXFxcXDpiZy10aGVtZS0zOndoZXJlKC5kYXJrLCAuZGFyayAqKSB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNCwgMTY1LCAyMzMsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0LCAxNjUsIDIzMywgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLmRhcmtcXFxcOmJnLXRyYW5zcGFyZW50OndoZXJlKC5kYXJrLCAuZGFyayAqKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLmRhcmtcXFxcOnRleHQtdGhlbWUtMjp3aGVyZSguZGFyaywgLmRhcmsgKikge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoMjUwLCAyMDQsIDIxLCAxKTtcbiAgY29sb3I6IHJnYmEoMjUwLCAyMDQsIDIxLCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cbi5kYXJrXFxcXDp0ZXh0LXRoZW1lLTM6d2hlcmUoLmRhcmssIC5kYXJrICopIHtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2JhKDE0LCAxNjUsIDIzMywgMSk7XG4gIGNvbG9yOiByZ2JhKDE0LCAxNjUsIDIzMywgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxpREFBaUQ7RUFDakQseUJBQXlCO0VBQ3pCLCtEQUFvRTtBQUN0RTs7QUFFQSxpRUFBYzs7QUFBZDs7O0NBQWM7O0FBQWQ7OztFQUFBLHNCQUFjLEVBQWQsTUFBYztFQUFkLGVBQWMsRUFBZCxNQUFjO0VBQWQsbUJBQWMsRUFBZCxNQUFjO0VBQWQscUJBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0VBQUEsZ0JBQWM7QUFBQTs7QUFBZDs7Ozs7Ozs7Q0FBYzs7QUFBZDs7RUFBQSxnQkFBYyxFQUFkLE1BQWM7RUFBZCw4QkFBYyxFQUFkLE1BQWM7RUFBZCxnQkFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjO0tBQWQsV0FBYyxFQUFkLE1BQWM7RUFBZCw4TEFBYyxFQUFkLE1BQWM7RUFBZCw2QkFBYyxFQUFkLE1BQWM7RUFBZCwrQkFBYyxFQUFkLE1BQWM7RUFBZCx3Q0FBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSxTQUFjLEVBQWQsTUFBYztFQUFkLG9CQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7RUFBQSxTQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0VBQWQscUJBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSwwQkFBYztFQUFkLHlDQUFjO1VBQWQsaUNBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7Ozs7O0VBQUEsa0JBQWM7RUFBZCxvQkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsY0FBYztFQUFkLHdCQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsbUJBQWM7QUFBQTs7QUFBZDs7Ozs7Q0FBYzs7QUFBZDs7OztFQUFBLCtHQUFjLEVBQWQsTUFBYztFQUFkLDZCQUFjLEVBQWQsTUFBYztFQUFkLCtCQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxjQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsY0FBYztFQUFkLGNBQWM7RUFBZCxrQkFBYztFQUFkLHdCQUFjO0FBQUE7O0FBQWQ7RUFBQSxlQUFjO0FBQUE7O0FBQWQ7RUFBQSxXQUFjO0FBQUE7O0FBQWQ7Ozs7Q0FBYzs7QUFBZDtFQUFBLGNBQWMsRUFBZCxNQUFjO0VBQWQscUJBQWMsRUFBZCxNQUFjO0VBQWQseUJBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7Ozs7Q0FBYzs7QUFBZDs7Ozs7RUFBQSxvQkFBYyxFQUFkLE1BQWM7RUFBZCw4QkFBYyxFQUFkLE1BQWM7RUFBZCxnQ0FBYyxFQUFkLE1BQWM7RUFBZCxlQUFjLEVBQWQsTUFBYztFQUFkLG9CQUFjLEVBQWQsTUFBYztFQUFkLG9CQUFjLEVBQWQsTUFBYztFQUFkLHVCQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0VBQWQsU0FBYyxFQUFkLE1BQWM7RUFBZCxVQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLG9CQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkOzs7O0VBQUEsMEJBQWMsRUFBZCxNQUFjO0VBQWQsNkJBQWMsRUFBZCxNQUFjO0VBQWQsc0JBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxhQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxnQkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsd0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxZQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkO0VBQUEsNkJBQWMsRUFBZCxNQUFjO0VBQWQsb0JBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSx3QkFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDtFQUFBLDBCQUFjLEVBQWQsTUFBYztFQUFkLGFBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxrQkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOzs7Ozs7Ozs7Ozs7O0VBQUEsU0FBYztBQUFBOztBQUFkO0VBQUEsU0FBYztFQUFkLFVBQWM7QUFBQTs7QUFBZDtFQUFBLFVBQWM7QUFBQTs7QUFBZDs7O0VBQUEsZ0JBQWM7RUFBZCxTQUFjO0VBQWQsVUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsVUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsZ0JBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSxVQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0VBQUEsVUFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLGVBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGVBQWM7QUFBQTs7QUFBZDs7OztDQUFjOztBQUFkOzs7Ozs7OztFQUFBLGNBQWMsRUFBZCxNQUFjO0VBQWQs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QW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEscUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsc0JBQW1CO0VBQW5CLG1DQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQixxQ0FBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkIsd0NBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CLHdDQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQix1Q0FBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkIsdUNBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsaUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEscUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsbUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLGlCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG1CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkIsNkJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CLDZCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQiw0QkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkIsNEJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBaVBqQjs7OztJQUlFLGdDQUFnQztFQUNsQztBQUdFO0VBQUEsc0JBQXlCO0VBQXpCLDhLQUF5QjtFQUF6QjtBQUF5QjtBQUl6QjtFQUFBLHFCQUFvQjtFQUFwQiw2S0FBb0I7RUFBcEI7QUFBb0I7QUFJcEI7RUFBQSx1QkFBMEI7RUFBMUIsK0tBQTBCO0VBQTFCO0FBQTBCO0FBSTFCO0VBQUEsdUJBQTBCO0VBQTFCLCtLQUEwQjtFQUExQjtBQUEwQjtBQUkxQjtFQUFBLG1CQUFpQjtFQUFqQixxTEFBaUI7RUFBakI7QUFBaUI7QUFHbkI7SUFDRTs4Q0FFb0I7RUFDdEI7QUFFQTtJQUNFLDhCQUE4QjtFQUNoQztBQUVBLGFBQWE7QUFFWDtFQUFBO0FBQWtCO0FBaFN0QjtFQUFBLDBCQW1TQTtFQW5TQSxrQkFtU0E7RUFuU0Esd0NBbVNBO0VBblNBO0FBbVNBO0FBblNBO0VBQUEsMEJBbVNBO0VBblNBLGtCQW1TQTtFQW5TQSx1Q0FtU0E7RUFuU0E7QUFtU0E7QUFuU0E7RUFBQSwwQkFtU0E7RUFuU0Esa0JBbVNBO0VBblNBLHVDQW1TQTtFQW5TQTtBQW1TQTtBQW5TQTtFQUFBLGlCQW1TQTtFQW5TQSxpQkFtU0E7RUFuU0EsbUtBbVNBO0VBblNBO0FBbVNBO0FBblNBOztFQUFBO0lBQUEsb0JBbVNBO0lBblNBO0VBbVNBOztFQW5TQTtJQUFBLGlCQW1TQTtJQW5TQTtFQW1TQTs7RUFuU0E7SUFBQSxtQkFtU0E7SUFuU0E7RUFtU0E7QUFBQTtBQW5TQTs7RUFBQTtJQUFBO0VBbVNBO0FBQUE7QUFuU0E7RUFBQSxrQkFtU0E7RUFuU0EscUNBbVNBO0VBblNBO0FBbVNBO0FBblNBO0VBQUEsa0JBbVNBO0VBblNBLHdDQW1TQTtFQW5TQTtBQW1TQTtBQW5TQTtFQUFBLGtCQW1TQTtFQW5TQSx1Q0FtU0E7RUFuU0E7QUFtU0E7QUFuU0E7RUFBQSxrQkFtU0E7RUFuU0EsdUNBbVNBO0VBblNBO0FBbVNBO0FBblNBO0VBQUE7QUFtU0E7QUFuU0E7RUFBQSxvQkFtU0E7RUFuU0EsNEJBbVNBO0VBblNBO0FBbVNBO0FBblNBO0VBQUEsb0JBbVNBO0VBblNBLDRCQW1TQTtFQW5TQTtBQW1TQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIC8qIGh0dHBzOi8vZm9udHMuZ29vZ2xlLmNvbS9zcGVjaW1lbi9Nb250c2VycmF0ICovXFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiO1xcbiAgc3JjOiB1cmwoLi9mb250L01vbnRzZXJyYXQtVmFyaWFibGVGb250X3dnaHQudHRmKSBmb3JtYXQoXFxcIlRydWVUeXBlXFxcIik7XFxufVxcblxcbkB0YWlsd2luZCBiYXNlO1xcbkB0YWlsd2luZCBjb21wb25lbnRzO1xcbkB0YWlsd2luZCB1dGlsaXRpZXM7XFxuXFxuQGxheWVyIGJhc2Uge1xcbiAgLyogSGlkZSBzY3JvbGxiYXIgZm9yIElFLCBFZGdlIGFuZCBGaXJlZm94ICovXFxuICBtYWluLFxcbiAgc2VjdGlvbixcXG4gIC5wcm9qZWN0LWNhcmQtd3JhcHBlciB7XFxuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgLyogSUUgYW5kIEVkZ2UgKi9cXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAvKiBGaXJlZm94ICovXFxuICB9XFxuXFxuICAvKiBIaWRlIHNjcm9sbGJhciBmb3IgQ2hyb21lLCBTYWZhcmkgYW5kIE9wZXJhICovXFxuICBtYWluOjotd2Via2l0LXNjcm9sbGJhcixcXG4gIHNlY3Rpb246Oi13ZWJraXQtc2Nyb2xsYmFyLFxcbiAgLnByb2plY3QtY2FyZC13cmFwcGVyOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIEBhcHBseSBoaWRkZW47XFxuICB9XFxuXFxuICBib2R5IHtcXG4gICAgQGFwcGx5IGJnLWxpZ2h0IGRhcms6YmctZGFyayB0ZXh0LWRhcmsgZGFyazp0ZXh0LWxpZ2h0O1xcbiAgfVxcblxcbiAgYm9keSAqIHtcXG4gICAgQGFwcGx5IHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTc1O1xcbiAgfVxcblxcbiAgaGVhZGVyLFxcbiAgZm9vdGVyIHtcXG4gICAgQGFwcGx5IGgtMTQgdy1mdWxsIHB4LTcgbWQ6cHgtMTQgYmctbGlnaHQgZGFyazpiZy1kYXJrIHotNTA7XFxuICB9XFxuXFxuICBhc2lkZSB7XFxuICAgIEBhcHBseSBoLVtjYWxjKDEwMHZoLTIqNTZweCldIG10LTE0IHBsLVsyMDBweF07XFxuICB9XFxuXFxuICBtYWluIHtcXG4gICAgQGFwcGx5IGgtW2NhbGMoMTAwdmgtMio1NnB4KV0gdy1mdWxsIG10LTE0IG92ZXJmbG93LXktc2Nyb2xsIHNuYXAteSBzY3JvbGwtc21vb3RoO1xcbiAgfVxcblxcbiAgc2VjdGlvbiB7XFxuICAgIEBhcHBseSBoLVtjYWxjKDEwMHZoLTIqNTZweCldIHB4LTcgbWQ6cHgtMTQgc25hcC1jZW50ZXI7XFxuICB9XFxuXFxuICBhIHtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDUwMG1zIGVhc2U7XFxuICB9XFxuXFxuICBidXR0b246ZGlzYWJsZWQge1xcbiAgICBAYXBwbHkgdGV4dC1kaXNhYmxlZDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB9XFxufVxcblxcbkBsYXllciBjb21wb25lbnRzIHtcXG4gIC5tb250c2VycmF0IHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1vcHRpY2FsLXNpemluZzogYXV0bztcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgfVxcblxcbiAgLnRleHQtaGVsbG8ge1xcbiAgICBAYXBwbHkgdGV4dC1bMTB2d10gcG9ydHJhaXQ6dGV4dC1bMTV2d10gbGVhZGluZy1bMC44XSBmb250LWV4dHJhYm9sZDtcXG4gIH1cXG5cXG4gIC50ZXh0LWJpZyB7XFxuICAgIEBhcHBseSB0ZXh0LTZ4bCBtZDp0ZXh0LTd4bCBsZWFkaW5nLVswLjhdIGZvbnQtZXh0cmFib2xkO1xcbiAgfVxcblxcbiAgLnRleHQtZGlzYWJsZWQge1xcbiAgICBAYXBwbHkgdGV4dC16aW5jLTQwMCBkYXJrOnRleHQtemluYy01MDA7XFxuICB9XFxuXFxuICAuYnRuLWRhcmstbW9kZSB7XFxuICAgIEBhcHBseSBoLTUgbWQ6aC02IGFzcGVjdC1bMl0gcm91bmRlZC1tZCBzaGFkb3ctaW5uZXI7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNTAwbXMgZWFzZTtcXG4gIH1cXG5cXG4gIC5idG4tZGFyay1tb2RlLnRoZW1lLTE6aG92ZXIge1xcbiAgICBAYXBwbHkgYmctdGhlbWUtMTtcXG4gIH1cXG5cXG4gIC5idG4tZGFyay1tb2RlLnRoZW1lLTI6aG92ZXIge1xcbiAgICBAYXBwbHkgYmctdGhlbWUtMjtcXG4gIH1cXG5cXG4gIC5idG4tZGFyay1tb2RlLnRoZW1lLTM6aG92ZXIge1xcbiAgICBAYXBwbHkgYmctdGhlbWUtMztcXG4gIH1cXG5cXG4gIC5kYXJrLW1vZGUtYmFsbCB7XFxuICAgIEBhcHBseSBoLVtjYWxjKDEwMCUtNHB4KV0gYXNwZWN0LXNxdWFyZSBteC0wLjUgYmctbGlnaHQgZGFyazpiZy1kYXJrIHJvdW5kZWQtbWQ7XFxuICB9XFxuXFxuICAuZGFyay1tb2RlLWJhbGwge1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNzUwbXMgZWFzZTtcXG4gIH1cXG5cXG4gIC5kYXJrLW1vZGUtYmFsbC5kYXJrIHtcXG4gICAgQGFwcGx5IHRyYW5zbGF0ZS14LVtjYWxjKDEwMCUrNHB4KV07XFxuICB9XFxuXFxuICAuaWNvbi1tb2RlLWRhcmssXFxuICAuaWNvbi1tb2RlIHtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSA3NW1zIGVhc2U7XFxuICB9XFxuXFxuICAuaWNvbi1tb2RlLWRhcmsge1xcbiAgICBAYXBwbHkgb3BhY2l0eS0wIGRhcms6b3BhY2l0eS0xMDAgYWJzb2x1dGU7XFxuICB9XFxuXFxuICAuaWNvbi1tb2RlIHtcXG4gICAgQGFwcGx5IG9wYWNpdHktMTAwIGRhcms6b3BhY2l0eS0wIGFic29sdXRlO1xcbiAgfVxcblxcbiAgLmljb24tYWJvdXQtdG9vbCxcXG4gIC5pY29uLWNvbnRhY3QtbGluayB7XFxuICAgIEBhcHBseSBoLVszMHB4XSBzbTpoLVs0MHB4XSB0ZXh0LVszMHB4XSBzbTp0ZXh0LVs0MHB4XSBhc3BlY3Qtc3F1YXJlO1xcbiAgfVxcblxcbiAgLmljb24tbmV4dCB7XFxuICAgIEBhcHBseSBoLVs3MHB4XSBhc3BlY3Qtc3F1YXJlO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNTAwbXMgZWFzZTtcXG4gIH1cXG5cXG4gIGJ1dHRvbjpob3ZlciAuaWNvbi1uZXh0IHtcXG4gICAgQGFwcGx5IHNjYWxlLTExMDtcXG4gIH1cXG5cXG4gIC5idG4tbWluaS10YWIge1xcbiAgICBAYXBwbHkgaC0zIGFzcGVjdC1bNF0gYm9yZGVyIGJvcmRlci1saWdodCBkYXJrOmJvcmRlci10aGVtZS0zIHJvdW5kZWQtbWQ7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNTAwbXMgZWFzZTtcXG4gIH1cXG5cXG4gIC5idG4tbWluaS10YWIuYWN0aXZlIHtcXG4gICAgQGFwcGx5IGJnLWxpZ2h0IGRhcms6YmctdGhlbWUtMztcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LWNhcmQtb3V0ZXItd3JhcHBlciB7XFxuICAgIEBhcHBseSB3LVs2MCVdIHAtNCBiZy1saWdodCBkYXJrOmJnLXRyYW5zcGFyZW50IGJvcmRlciBkYXJrOmJvcmRlci10aGVtZS0zIHJvdW5kZWQtbWQgcmVsYXRpdmU7XFxuICB9XFxuXFxuICAucHJvamVjdC1jYXJkLXdyYXBwZXIge1xcbiAgICBAYXBwbHkgZmxleCBnYXAtNCBvdmVyZmxvdy14LXNjcm9sbCBzbmFwLXggc2Nyb2xsLXNtb290aCByZWxhdGl2ZTtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LWNhcmQge1xcbiAgICBAYXBwbHkgbWluLXctZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBzbmFwLWNlbnRlciByZWxhdGl2ZTtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LWNhcmQtaW1hZ2Uge1xcbiAgICBAYXBwbHkgcm91bmRlZC1tZCBvcGFjaXR5LTUwO1xcbiAgfVxcblxcbiAgLnByb2plY3QtY2FyZC1pbmRleCB7XFxuICAgIEBhcHBseSB0ZXh0LTh4bCBsZWFkaW5nLVswLjhdIGZvbnQtZXh0cmFib2xkIGFic29sdXRlIHRvcC0wIGxlZnQtMDtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LWNhcmQtbmFtZSB7XFxuICAgIEBhcHBseSB3LWZ1bGwgdGV4dC00eGwgZm9udC1ib2xkIHRleHQtY2VudGVyIGFic29sdXRlIHRvcC0xLzIgLXRyYW5zbGF0ZS15LTEvMjtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LWNhcmQtdHlwZSB7XFxuICAgIEBhcHBseSB3LWZ1bGwgZm9udC1ib2xkIHRleHQtY2VudGVyIGFic29sdXRlIHRvcC0zLzQgLXRyYW5zbGF0ZS15LTEvMjtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LWNhcmQtZXhwYW5kIHtcXG4gICAgQGFwcGx5IGgtWzUwcHhdIGFzcGVjdC1zcXVhcmUgYmctZGFyayBkYXJrOmJnLWxpZ2h0IGJnLW9wYWNpdHktNTAgb3BhY2l0eS01MCBhYnNvbHV0ZSB0b3AtNCByaWdodC00O1xcbiAgfVxcblxcbiAgLmJ0bi1wcm9qZWN0LWNhcmQtbmV4dCB7XFxuICAgIEBhcHBseSBoLTE0IGFzcGVjdC1zcXVhcmUgYmctZGFyayBkYXJrOmJnLWxpZ2h0IGJnLW9wYWNpdHktNTAgLXJvdGF0ZS05MCBvcGFjaXR5LTUwIGFic29sdXRlIHRvcC1bY2FsYyg1MCUtMjhweCldIHJpZ2h0LTQ7XFxuICB9XFxuXFxuICAuYnRuLXByb2plY3QtY2FyZC1wcmV2IHtcXG4gICAgQGFwcGx5IGgtMTQgYXNwZWN0LXNxdWFyZSBiZy1kYXJrIGRhcms6YmctbGlnaHQgYmctb3BhY2l0eS01MCByb3RhdGUtOTAgb3BhY2l0eS01MCBhYnNvbHV0ZSB0b3AtW2NhbGMoNTAlLTI4cHgpXSBsZWZ0LTQ7XFxuICB9XFxuXFxuICAucHJvamVjdC1jYXJkLWltYWdlLFxcbiAgLnByb2plY3QtY2FyZCA+IGRpdixcXG4gIC5wcm9qZWN0LWNhcmQtZXhwYW5kLFxcbiAgLmJ0bi1wcm9qZWN0LWNhcmQtbmV4dCxcXG4gIC5idG4tcHJvamVjdC1jYXJkLXByZXYge1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDUwMG1zIGVhc2U7XFxuICB9XFxuXFxuICAucHJvamVjdC1jYXJkLXdyYXBwZXI6aG92ZXIgLnByb2plY3QtY2FyZC1pbWFnZSxcXG4gIC5wcm9qZWN0LWNhcmQtb3V0ZXItd3JhcHBlcjpob3ZlciAucHJvamVjdC1jYXJkLWV4cGFuZDpob3ZlcixcXG4gIC5idG4tcHJvamVjdC1jYXJkLW5leHQ6aG92ZXIsXFxuICAuYnRuLXByb2plY3QtY2FyZC1wcmV2OmhvdmVyIHtcXG4gICAgQGFwcGx5IG9wYWNpdHktMTAwO1xcbiAgfVxcblxcbiAgLnByb2plY3QtY2FyZC13cmFwcGVyOmhvdmVyIC5wcm9qZWN0LWNhcmQtaW5kZXgge1xcbiAgICBAYXBwbHkgb3BhY2l0eS01MDtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LWNhcmQtd3JhcHBlcjpob3ZlciAucHJvamVjdC1jYXJkLW5hbWUsXFxuICAucHJvamVjdC1jYXJkLXdyYXBwZXI6aG92ZXIgLnByb2plY3QtY2FyZC10eXBlIHtcXG4gICAgQGFwcGx5IG9wYWNpdHktMDtcXG4gIH1cXG5cXG4gIC51bmRlcmxpbmUtaCxcXG4gIC5oaWdobGlnaHQtaCB7XFxuICAgIEBhcHBseSByZWxhdGl2ZTtcXG4gIH1cXG5cXG4gIC51bmRlcmxpbmUtaDphZnRlciB7XFxuICAgIEBhcHBseSBoLTAuNSB3LTAgYmctZGFyayBkYXJrOmJnLWxpZ2h0IHJvdW5kZWQtZnVsbCBhYnNvbHV0ZSBsZWZ0LTAgYm90dG9tLTAuNTtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHRyYW5zaXRpb246IHdpZHRoIDUwMG1zIGVhc2U7XFxuICB9XFxuXFxuICBidXR0b246aG92ZXIgLnVuZGVybGluZS1oOmFmdGVyIHtcXG4gICAgQGFwcGx5IHctZnVsbDtcXG4gIH1cXG5cXG4gIC5oaWdobGlnaHQtaDphZnRlciB7XFxuICAgIEBhcHBseSBoLVs1MCVdIHctMCBvcGFjaXR5LTgwIGFic29sdXRlIHRvcC1bMjUlXSBsZWZ0LVstMTVweF0gLXotMTA7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCA1MDBtcyBlYXNlO1xcbiAgfVxcblxcbiAgYnV0dG9uOmhvdmVyIC5oaWdobGlnaHQtaDphZnRlciB7XFxuICAgIEBhcHBseSB3LVtjYWxjKDEwMCUrMzBweCldO1xcbiAgfVxcblxcbiAgLmFib3V0LXNwYW4ge1xcbiAgICBAYXBwbHkgdGV4dC1saWdodCBkYXJrOnRleHQtdGhlbWUtMjtcXG4gIH1cXG5cXG4gIC50b29sOmhvdmVyIC5pY29uLWFib3V0LXRvb2wge1xcbiAgICBAYXBwbHkgYmxvY2s7XFxuICB9XFxuXFxuICAvKiBBbmltYXRpb24gKi9cXG4gIFtjbGFzc149XFxcImFuaW1hdGUtXFxcIl0ge1xcbiAgICB3aWxsLWNoYW5nZTogYW5pbWF0aW9uO1xcbiAgfVxcbn1cXG5cXG5AbGF5ZXIgdXRpbGl0aWVzIHtcXG4gIGFzaWRlLFxcbiAgI2J0bi1tZW51LWwsXFxuICAjYnRuLW1lbnUtbC1jbG9zZSxcXG4gICNidG4tbWVudS1sLWNsb3NlID4gZGl2IHtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDUwMG1zIGVhc2U7XFxuICB9XFxuXFxuICBtYWluLm1vdmUge1xcbiAgICBAYXBwbHkgdHJhbnNsYXRlLXgtWzQwdnddO1xcbiAgfVxcblxcbiAgYXNpZGUubW92ZSB7XFxuICAgIEBhcHBseSB0cmFuc2xhdGUteC0wO1xcbiAgfVxcblxcbiAgI2J0bi1tZW51LWwuc2hvdyB7XFxuICAgIEBhcHBseSB0cmFuc2xhdGUteS1bMjAwcHhdO1xcbiAgfVxcblxcbiAgI2J0bi1tZW51LWwtY2xvc2Uuc2hvdyB7XFxuICAgIEBhcHBseSB0cmFuc2xhdGUteC1bMjAwcHhdO1xcbiAgfVxcblxcbiAgI2J0bi1tZW51LWwtY2xvc2U6aG92ZXIgPiBkaXYge1xcbiAgICBAYXBwbHkgcm90YXRlLTE4MDtcXG4gIH1cXG5cXG4gIG1haW4ge1xcbiAgICB0cmFuc2l0aW9uOlxcbiAgICAgIHRyYW5zZm9ybSA1MDBtcyBlYXNlLFxcbiAgICAgIG9wYWNpdHkgNTAwbXMgZWFzZTtcXG4gIH1cXG5cXG4gICNhcnRpY2xlLWFib3V0IHtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSA1MDBtcyBlYXNlO1xcbiAgfVxcblxcbiAgLyogTWVudSBkb3QgKi9cXG4gIGJ1dHRvbjpkaXNhYmxlZCA+IGRpdiA+IHNwYW4ge1xcbiAgICBAYXBwbHkgb3BhY2l0eS0xMDA7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgY2Fyb3VzZWwgPSAoKCkgPT4ge1xuICBjb25zdCBidG5Qcm9qZWN0TmV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLXByb2plY3QtY2FyZC1uZXh0XCIpO1xuICBjb25zdCBidG5Qcm9qZWN0UHJldiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLXByb2plY3QtY2FyZC1wcmV2XCIpO1xuXG4gIGNvbnN0IHByb2plY3RDYXJkV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jYXJkLXdyYXBwZXJcIik7XG4gIGNvbnN0IGJ0bk1pbmlUYWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5idG4tbWluaS10YWJcIik7XG5cbiAgY29uc3QgcHJvamVjdENhcmQxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWNhcmQtMVwiKTtcbiAgY29uc3QgcHJvamVjdENhcmQyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWNhcmQtMlwiKTtcblxuICBjb25zdCBnYXAgPSAxNjtcbiAgbGV0IHNjcm9sbFdpZHRoUHJvamVjdENhcmQxID0gMDtcbiAgbGV0IHNjcm9sbFdpZHRoUHJvamVjdENhcmQyID0gMDtcblxuICBsZXQgaSA9IDE7XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBfZ2V0U2Nyb2xsV2lkdGhQcm9qZWN0Q2FyZCgpO1xuXG4gICAgYnRuUHJvamVjdE5leHQub25jbGljayA9ICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNidG4tbWluaS10YWItJHtpfWApLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICBpZiAoaSA9PT0gMykgaSA9IDE7XG4gICAgICBlbHNlIGkgKz0gMTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwcm9qZWN0LWNhcmQtJHtpfWApLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjYnRuLW1pbmktdGFiLSR7aX1gKS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIH07XG5cbiAgICBidG5Qcm9qZWN0UHJldi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2J0bi1taW5pLXRhYi0ke2l9YCkuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgIGlmIChpID09PSAxKSBpID0gMztcbiAgICAgIGVsc2UgaSAtPSAxO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Byb2plY3QtY2FyZC0ke2l9YCkuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNidG4tbWluaS10YWItJHtpfWApLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgfTtcblxuICAgIHByb2plY3RDYXJkV3JhcHBlci5vbnNjcm9sbGVuZCA9ICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNidG4tbWluaS10YWItJHtpfWApLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICBjb25zdCBzY3JvbGwgPSBwcm9qZWN0Q2FyZFdyYXBwZXIuc2Nyb2xsTGVmdDtcbiAgICAgIGlmIChzY3JvbGwgPj0gMCAmJiBzY3JvbGwgPCBzY3JvbGxXaWR0aFByb2plY3RDYXJkMSkgaSA9IDE7XG4gICAgICBlbHNlIGlmIChcbiAgICAgICAgc2Nyb2xsID49IHNjcm9sbFdpZHRoUHJvamVjdENhcmQxICYmXG4gICAgICAgIHNjcm9sbCA8IHNjcm9sbFdpZHRoUHJvamVjdENhcmQyXG4gICAgICApXG4gICAgICAgIGkgPSAyO1xuICAgICAgZWxzZSBpID0gMztcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNidG4tbWluaS10YWItJHtpfWApLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgfTtcblxuICAgIGJ0bk1pbmlUYWJzLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgYnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNidG4tbWluaS10YWItJHtpfWApLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICAgIGkgPSBidG4uaWQuc2xpY2UoLTEpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcHJvamVjdC1jYXJkLSR7aX1gKS5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjYnRuLW1pbmktdGFiLSR7aX1gKS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9nZXRTY3JvbGxXaWR0aFByb2plY3RDYXJkKCkge1xuICAgIHNjcm9sbFdpZHRoUHJvamVjdENhcmQxID0gcHJvamVjdENhcmQxLmNsaWVudFdpZHRoICsgZ2FwO1xuICAgIHNjcm9sbFdpZHRoUHJvamVjdENhcmQyID1cbiAgICAgIHByb2plY3RDYXJkMi5jbGllbnRXaWR0aCArIGdhcCArIHNjcm9sbFdpZHRoUHJvamVjdENhcmQxO1xuICB9XG5cbiAgcmV0dXJuIHsgaW5pdCB9O1xufSkoKTtcblxuZXhwb3J0IHsgY2Fyb3VzZWwgfTtcbiIsImNvbnN0IGRhcmtNb2RlID0gKCgpID0+IHtcbiAgY29uc3QgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnRuLWRhcmstbW9kZVwiKTtcbiAgY29uc3QgYmFsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRhcmstbW9kZS1iYWxsXCIpO1xuICBjb25zdCBodG1sID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgX2RldGVjdERhcmtNb2RlKCk7XG4gICAgYnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgIGJ0bi5vbmNsaWNrID0gX3RvZ2dsZTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9kZXRlY3REYXJrTW9kZSgpIHtcbiAgICBpZiAoQm9vbGVhbihsb2NhbFN0b3JhZ2UudGhlbWUpKSB7XG4gICAgICBpZiAobG9jYWxTdG9yYWdlLnRoZW1lID09PSBcImRhcmtcIikge1xuICAgICAgICBfdG9nZ2xlKCk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgd2luZG93Lm1hdGNoTWVkaWEgJiZcbiAgICAgIHdpbmRvdy5tYXRjaE1lZGlhKFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiKS5tYXRjaGVzXG4gICAgKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIFwiZGFya1wiKTtcbiAgICAgIF90b2dnbGUoKTtcbiAgICB9IGVsc2UgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCBcImxpZ2h0XCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gX3RvZ2dsZSgpIHtcbiAgICBodG1sLmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrXCIpO1xuICAgIGJhbGxzLmZvckVhY2goKGJhbGwpID0+IHtcbiAgICAgIGJhbGwuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmtcIik7XG4gICAgfSk7XG5cbiAgICBpZiAoIWh0bWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGFya1wiKSlcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgXCJsaWdodFwiKTtcbiAgICBlbHNlIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgXCJkYXJrXCIpO1xuICB9XG5cbiAgcmV0dXJuIHsgaW5pdCB9O1xufSkoKTtcblxuZXhwb3J0IHsgZGFya01vZGUgfTtcbiIsImltcG9ydCBmYXZpY29uMzJ3IGZyb20gXCIuLi9pbWcvaWNvbnMvZmF2aWNvbi0zMncucG5nXCI7XG5pbXBvcnQgbWVudTUwdyBmcm9tIFwiLi4vaW1nL2ljb25zL21lbnUtNTB3LnBuZ1wiO1xuaW1wb3J0IG1lbnVXNTB3IGZyb20gXCIuLi9pbWcvaWNvbnMvbWVudS13LTUwdy5wbmdcIjtcbmltcG9ydCBjbG9zZTUwdyBmcm9tIFwiLi4vaW1nL2ljb25zL2Nsb3NlLTUwdy5wbmdcIjtcbmltcG9ydCBjbG9zZVc1MHcgZnJvbSBcIi4uL2ltZy9pY29ucy9jbG9zZS13LTUwdy5wbmdcIjtcbmltcG9ydCBjaGV2cm9uMTAwdyBmcm9tIFwiLi4vaW1nL2ljb25zL2NoZXZyb24tMTAwdy5wbmdcIjtcbmltcG9ydCBjaGV2cm9uVzEwMHcgZnJvbSBcIi4uL2ltZy9pY29ucy9jaGV2cm9uLXctMTAwdy5wbmdcIjtcbmltcG9ydCBwcm9maWxlMTAwMHcgZnJvbSBcIi4uL2ltZy9wcm9maWxlLTEwMDB3LmpwZ1wiO1xuaW1wb3J0IHlwZXQgZnJvbSBcIi4uL2ltZy9wcm9qZWN0cy95cGV0LnBuZ1wiO1xuaW1wb3J0IHdlYXRoZXJBcHAgZnJvbSBcIi4uL2ltZy9wcm9qZWN0cy93ZWF0aGVyLnBuZ1wiO1xuaW1wb3J0IGhvbWVwYWdlIGZyb20gXCIuLi9pbWcvcHJvamVjdHMvaG9tZXBhZ2UucG5nXCI7XG5pbXBvcnQgZXhwYW5kMTAwdyBmcm9tIFwiLi4vaW1nL2ljb25zL2V4cGFuZC0xMDB3LnBuZ1wiO1xuaW1wb3J0IGV4cGFuZFcxMDB3IGZyb20gXCIuLi9pbWcvaWNvbnMvZXhwYW5kLXctMTAwdy5wbmdcIjtcblxuY29uc3QgaW1nTmV4dERhcmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmltZy1uZXh0LWRhcmtcIik7XG5jb25zdCBpbWdOZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbWctbmV4dFwiKTtcblxuaW1nTmV4dERhcmsuZm9yRWFjaCgoaW1nKSA9PiB7XG4gIGltZy5zcmMgPSBjaGV2cm9uVzEwMHc7XG59KTtcblxuaW1nTmV4dC5mb3JFYWNoKChpbWcpID0+IHtcbiAgaW1nLnNyYyA9IGNoZXZyb24xMDB3O1xufSk7XG4iLCJjb25zdCBtZW51ID0gKCgpID0+IHtcbiAgY29uc3QgYnRuTWVudUwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1tZW51LWxcIik7XG4gIGNvbnN0IGJ0bk1lbnVMQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1tZW51LWwtY2xvc2VcIik7XG5cbiAgY29uc3QgYXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYXNpZGVcIik7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcblxuICBjb25zdCBidG5Ib21lTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLWhvbWUtbFwiKTtcbiAgY29uc3QgYnRuQWJvdXRMID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tYWJvdXQtbFwiKTtcbiAgY29uc3QgYnRuQWJvdXRNb3JlTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLWFib3V0LW1vcmUtbFwiKTtcbiAgY29uc3QgYnRuUHJvamVjdHNMID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tcHJvamVjdHMtbFwiKTtcblxuICBjb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNob21lXCIpO1xuICBjb25zdCBhYm91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWJvdXRcIik7XG4gIGNvbnN0IGFydGljbGVBYm91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXJ0aWNsZS1hYm91dFwiKTtcbiAgY29uc3QgYXJ0aWNsZUFib3V0TW9yZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXJ0aWNsZS1hYm91dC1tb3JlXCIpO1xuICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHNcIik7XG5cbiAgbGV0IGlzT3BlbkFib3V0TW9yZSA9IDA7XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBfaW5pdEJ0bk1lbnVMKCk7XG4gICAgX2luaXRCdG5OYXZMKCk7XG4gICAgX2luaXRCdG5BYm91dE1vcmVMKCk7XG5cbiAgICAvLyBGb3IgdGVzdGluZ1xuICAgIGJ0bk1lbnVMLmNsaWNrKCk7XG4gICAgYnRuUHJvamVjdHNMLmNsaWNrKCk7XG4gIH1cblxuICBmdW5jdGlvbiBfaW5pdEJ0bkFib3V0TW9yZUwoKSB7XG4gICAgYnRuQWJvdXRNb3JlTC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgaWYgKGlzT3BlbkFib3V0TW9yZSA9PT0gMSkge1xuICAgICAgICBhcnRpY2xlQWJvdXQuY2xhc3NMaXN0LnRvZ2dsZShcIm9wYWNpdHktNTBcIik7XG4gICAgICAgIGFib3V0LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICBidG5BYm91dE1vcmVMLnF1ZXJ5U2VsZWN0b3IoXCJkaXZcIikudGV4dENvbnRlbnQgPSBcIk1PUkVcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFydGljbGVBYm91dC5jbGFzc0xpc3QudG9nZ2xlKFwib3BhY2l0eS01MFwiKTtcbiAgICAgICAgYWJvdXQuc2Nyb2xsVG8oYXJ0aWNsZUFib3V0LmNsaWVudFdpZHRoICsgMSwgMCk7XG4gICAgICAgIGJ0bkFib3V0TW9yZUwucXVlcnlTZWxlY3RvcihcImRpdlwiKS50ZXh0Q29udGVudCA9IFwiQkFDS1wiO1xuICAgICAgfVxuICAgICAgYnRuQWJvdXRNb3JlTC5jbGFzc0xpc3QudG9nZ2xlKFwiYW5pbWF0ZS1jaGV2cm9uLXJpZ2h0XCIpO1xuICAgICAgYnRuQWJvdXRNb3JlTC5jbGFzc0xpc3QudG9nZ2xlKFwiYW5pbWF0ZS1jaGV2cm9uLWxlZnRcIik7XG4gICAgICBpc09wZW5BYm91dE1vcmUgPSArIWlzT3BlbkFib3V0TW9yZTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gX2luaXRCdG5NZW51TCgpIHtcbiAgICBidG5NZW51TC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgbWFpbi5jbGFzc0xpc3QudG9nZ2xlKFwib3BhY2l0eS01MFwiKTtcbiAgICAgIF90b2dnbGVNZW51TCgpO1xuICAgIH07XG5cbiAgICBidG5NZW51TENsb3NlLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBtYWluLmNsYXNzTGlzdC50b2dnbGUoXCJvcGFjaXR5LTUwXCIpO1xuICAgICAgX3RvZ2dsZU1lbnVMKCk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF90b2dnbGVNZW51TCgpIHtcbiAgICBidG5NZW51TC5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcbiAgICBidG5NZW51TENsb3NlLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xuICAgIGFzaWRlLmNsYXNzTGlzdC50b2dnbGUoXCJtb3ZlXCIpO1xuICAgIG1haW4uY2xhc3NMaXN0LnRvZ2dsZShcIm1vdmVcIik7XG4gIH1cblxuICBmdW5jdGlvbiBfaW5pdEJ0bk5hdkwoKSB7XG4gICAgYnRuSG9tZUwub25jbGljayA9ICgpID0+IHtcbiAgICAgIGJ0bk1lbnVMQ2xvc2UuY2xpY2soKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBob21lLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICB9LCA1MDApO1xuICAgIH07XG5cbiAgICBidG5BYm91dEwub25jbGljayA9ICgpID0+IHtcbiAgICAgIGJ0bk1lbnVMQ2xvc2UuY2xpY2soKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBhYm91dC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgfSwgNTAwKTtcbiAgICB9O1xuXG4gICAgYnRuUHJvamVjdHNMLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBidG5NZW51TENsb3NlLmNsaWNrKCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcHJvamVjdHMuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgIH0sIDUwMCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7IGluaXQgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IG1lbnUgfTtcbiIsImNvbnN0IHNjcm9sbCA9ICgoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaG9tZVwiKTtcbiAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Fib3V0XCIpO1xuICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHNcIik7XG5cbiAgY29uc3QgYnRuRGFya01vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ0bi1kYXJrLW1vZGVcIik7XG4gIGNvbnN0IHNwYW5NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51LXRleHQgPiBzcGFuXCIpO1xuICBjb25zdCBzcGFuQ29udGFjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdC10ZXh0ID4gc3BhblwiKTtcblxuICBjb25zdCBidG5zTWVudUwgPSBbXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4taG9tZS1sXCIpLFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLWFib3V0LWxcIiksXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tcHJvamVjdHMtbFwiKSxcbiAgXTtcblxuICBjb25zdCBtYXJnaW5Ub3AgPSA1NjtcbiAgbGV0IHNjcm9sbEhlaWdodEhvbWUgPSAwO1xuICBsZXQgc2Nyb2xsSGVpZ2h0QWJvdXQgPSAwO1xuICBsZXQgY3VycmVudFRoZW1lID0gMTtcblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIF9nZXRTY3JvbGxIZWlnaHRTZWN0aW9uKCk7XG5cbiAgICB3aW5kb3cub25yZXNpemUgPSAoKSA9PiB7XG4gICAgICBfZ2V0U2Nyb2xsSGVpZ2h0U2VjdGlvbigpO1xuICAgIH07XG5cbiAgICBtYWluLm9uc2Nyb2xsZW5kID0gKCkgPT4ge1xuICAgICAgY29uc3Qgc2Nyb2xsID0gbWFpbi5zY3JvbGxUb3A7XG4gICAgICBpZiAoc2Nyb2xsID49IDAgJiYgc2Nyb2xsIDwgc2Nyb2xsSGVpZ2h0SG9tZSkge1xuICAgICAgICBfY2hhbmdlVGhlbWUoMSk7XG4gICAgICAgIF9kaXNhYmxlQnRuKDEpO1xuICAgICAgfSBlbHNlIGlmIChzY3JvbGwgPj0gc2Nyb2xsSGVpZ2h0SG9tZSAmJiBzY3JvbGwgPCBzY3JvbGxIZWlnaHRBYm91dCkge1xuICAgICAgICBfY2hhbmdlVGhlbWUoMik7XG4gICAgICAgIF9kaXNhYmxlQnRuKDIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX2NoYW5nZVRoZW1lKDMpO1xuICAgICAgICBfZGlzYWJsZUJ0bigzKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gX2dldFNjcm9sbEhlaWdodFNlY3Rpb24oKSB7XG4gICAgc2Nyb2xsSGVpZ2h0SG9tZSA9IGhvbWUuY2xpZW50SGVpZ2h0ICsgbWFyZ2luVG9wO1xuICAgIHNjcm9sbEhlaWdodEFib3V0ID0gYWJvdXQuY2xpZW50SGVpZ2h0ICsgbWFyZ2luVG9wICsgc2Nyb2xsSGVpZ2h0SG9tZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9jaGFuZ2VUaGVtZSh0aGVtZSkge1xuICAgIHNwYW5NZW51LmNsYXNzTGlzdC5yZW1vdmUoYHRleHQtdGhlbWUtJHtjdXJyZW50VGhlbWV9YCk7XG4gICAgc3BhbkNvbnRhY3QuY2xhc3NMaXN0LnJlbW92ZShgdGV4dC10aGVtZS0ke2N1cnJlbnRUaGVtZX1gKTtcblxuICAgIGJ0bkRhcmtNb2RlLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoYHRoZW1lLSR7Y3VycmVudFRoZW1lfWApO1xuICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoYHRoZW1lLSR7dGhlbWV9YCk7XG4gICAgfSk7XG5cbiAgICBzcGFuTWVudS5jbGFzc0xpc3QuYWRkKGB0ZXh0LXRoZW1lLSR7dGhlbWV9YCk7XG4gICAgc3BhbkNvbnRhY3QuY2xhc3NMaXN0LmFkZChgdGV4dC10aGVtZS0ke3RoZW1lfWApO1xuXG4gICAgY3VycmVudFRoZW1lID0gdGhlbWU7XG4gIH1cblxuICBmdW5jdGlvbiBfZGlzYWJsZUJ0bihuKSB7XG4gICAgY29uc3QgaW5kZXggPSBuIC0gMTtcbiAgICBjb25zdCBsZW5ndGggPSBidG5zTWVudUwubGVuZ3RoO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChpID09PSBpbmRleCkgYnRuc01lbnVMW2ldLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIGVsc2UgYnRuc01lbnVMW2ldLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHsgaW5pdCB9O1xufSkoKTtcblxuZXhwb3J0IHsgc2Nyb2xsIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBcIi4vanMvaW1hZ2VcIjtcbmltcG9ydCB7IGRhcmtNb2RlIH0gZnJvbSBcIi4vanMvZGFyay1tb2RlXCI7XG5pbXBvcnQgeyBtZW51IH0gZnJvbSBcIi4vanMvbWVudVwiO1xuaW1wb3J0IHsgc2Nyb2xsIH0gZnJvbSBcIi4vanMvc2Nyb2xsXCI7XG5pbXBvcnQgeyBjYXJvdXNlbCB9IGZyb20gXCIuL2pzL2Nhcm91c2VsXCI7XG5cbmRhcmtNb2RlLmluaXQoKTtcbm1lbnUuaW5pdCgpO1xuc2Nyb2xsLmluaXQoKTtcbmNhcm91c2VsLmluaXQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==