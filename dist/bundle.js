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
    getScrollWidthProjectCard();

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

  function getScrollWidthProjectCard() {
    scrollWidthProjectCard1 = projectCard1.clientWidth + gap;
    scrollWidthProjectCard2 =
      projectCard2.clientWidth + gap + scrollWidthProjectCard1;
  }

  return { init, getScrollWidthProjectCard };
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
    getScrollHeightSection();

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

  function getScrollHeightSection() {
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

  return { init, getScrollHeightSection };
})();




/***/ }),

/***/ "./src/js/window-resize.js":
/*!*********************************!*\
  !*** ./src/js/window-resize.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   windowResize: () => (/* binding */ windowResize)
/* harmony export */ });
/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scroll */ "./src/js/scroll.js");
/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel */ "./src/js/carousel.js");



const windowResize = (() => {
  function init() {
    window.onresize = () => {
      _scroll__WEBPACK_IMPORTED_MODULE_0__.scroll.getScrollHeightSection();
      _carousel__WEBPACK_IMPORTED_MODULE_1__.carousel.getScrollWidthProjectCard();
    };
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
/* harmony import */ var _js_window_resize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/window-resize */ "./src/js/window-resize.js");








_js_dark_mode__WEBPACK_IMPORTED_MODULE_2__.darkMode.init();
_js_menu__WEBPACK_IMPORTED_MODULE_3__.menu.init();
_js_scroll__WEBPACK_IMPORTED_MODULE_4__.scroll.init();
_js_carousel__WEBPACK_IMPORTED_MODULE_5__.carousel.init();
_js_window_resize__WEBPACK_IMPORTED_MODULE_6__.windowResize.init();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjO0FBQ2Qsa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Qsa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQiwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QiwyQkFBMkI7QUFDM0I7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksT0FBTyxNQUFNLE9BQU8scUJBQXFCLG9CQUFvQixxQkFBcUIscUJBQXFCLE1BQU0sTUFBTSxXQUFXLE1BQU0sWUFBWSxNQUFNLE1BQU0scUJBQXFCLHFCQUFxQixxQkFBcUIsVUFBVSxvQkFBb0IscUJBQXFCLHFCQUFxQixxQkFBcUIscUJBQXFCLE1BQU0sT0FBTyxNQUFNLEtBQUssb0JBQW9CLHFCQUFxQixNQUFNLFFBQVEsTUFBTSxLQUFLLG9CQUFvQixvQkFBb0IscUJBQXFCLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sU0FBUyxNQUFNLFFBQVEscUJBQXFCLHFCQUFxQixxQkFBcUIsb0JBQW9CLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxRQUFRLE1BQU0sS0FBSyxvQkFBb0IscUJBQXFCLHFCQUFxQixNQUFNLFFBQVEsTUFBTSxTQUFTLHFCQUFxQixxQkFBcUIscUJBQXFCLG9CQUFvQixxQkFBcUIscUJBQXFCLHFCQUFxQixvQkFBb0Isb0JBQW9CLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxPQUFPLE1BQU0sUUFBUSxxQkFBcUIscUJBQXFCLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxPQUFPLE1BQU0sS0FBSyxxQkFBcUIscUJBQXFCLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE9BQU8sTUFBTSxLQUFLLHFCQUFxQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLGlCQUFpQixVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxPQUFPLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxPQUFPLE1BQU0sS0FBSyxvQkFBb0Isb0JBQW9CLE1BQU0sTUFBTSxvQkFBb0Isb0JBQW9CLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxRQUFRLE1BQU0sWUFBWSxvQkFBb0IscUJBQXFCLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sWUFBWSxLQUFLLFVBQVUsTUFBTSxZQUFZLE9BQU8sc0JBQXNCLHFCQUFxQixNQUFNLFlBQVksT0FBTyxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxLQUFLLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxNQUFNLE1BQU0sV0FBVyxLQUFLLEtBQUssTUFBTSxNQUFNLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxNQUFNLEtBQUssV0FBVyxLQUFLLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssTUFBTSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssV0FBVyxhQUFhLE1BQU0sTUFBTSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLE1BQU0sV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxNQUFNLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sT0FBTyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE9BQU8sWUFBWSxZQUFZLE1BQU0sTUFBTSxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sS0FBSyxNQUFNLFlBQVksWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sTUFBTSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksWUFBWSxhQUFhLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLFlBQVksWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLFlBQVksWUFBWSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxZQUFZLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxZQUFZLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLFlBQVksWUFBWSxhQUFhLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxZQUFZLGFBQWEsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLFlBQVksYUFBYSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sVUFBVSxZQUFZLE1BQU0sUUFBUSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sT0FBTyxLQUFLLE1BQU0sT0FBTyxLQUFLLEtBQUssS0FBSyxZQUFZLFlBQVksYUFBYSxhQUFhLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFVBQVUsWUFBWSxNQUFNLEtBQUssS0FBSyxLQUFLLEtBQUssWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxXQUFXLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxPQUFPLEtBQUssWUFBWSxNQUFNLE9BQU8sTUFBTSxZQUFZLE1BQU0sTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLE9BQU8sS0FBSyxZQUFZLE1BQU0sT0FBTyxNQUFNLFlBQVksTUFBTSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sT0FBTyxLQUFLLFlBQVksTUFBTSxPQUFPLE1BQU0sWUFBWSxNQUFNLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sT0FBTyxLQUFLLFlBQVksTUFBTSxPQUFPLE1BQU0sWUFBWSxNQUFNLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sS0FBSyxPQUFPLE1BQU0sS0FBSyxZQUFZLE1BQU0sVUFBVSxLQUFLLEtBQUssTUFBTSxPQUFPLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVks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O1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ0Q7QUFDc0I7QUFDVDtBQUNJO0FBQ0k7QUFDUzs7QUFFbEQsbURBQVE7QUFDUiwwQ0FBSTtBQUNKLDhDQUFNO0FBQ04sa0RBQVE7QUFDUiwyREFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9zdHlsZS5jc3M/OTAxMSIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9qcy9jYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvanMvZGFyay1tb2RlLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9qcy9pbWFnZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvanMvbWVudS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvanMvc2Nyb2xsLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9qcy93aW5kb3ctcmVzaXplLmpzIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnQvTW9udHNlcnJhdC1WYXJpYWJsZUZvbnRfd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICAvKiBodHRwczovL2ZvbnRzLmdvb2dsZS5jb20vc3BlY2ltZW4vTW9udHNlcnJhdCAqL1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdChcIlRydWVUeXBlXCIpO1xufVxuXG4vKiAhIHRhaWx3aW5kY3NzIHYzLjQuNCB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20gKi9cblxuLypcbjEuIFByZXZlbnQgcGFkZGluZyBhbmQgYm9yZGVyIGZyb20gYWZmZWN0aW5nIGVsZW1lbnQgd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzQpXG4yLiBBbGxvdyBhZGRpbmcgYSBib3JkZXIgdG8gYW4gZWxlbWVudCBieSBqdXN0IGFkZGluZyBhIGJvcmRlci13aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGNzcy90YWlsd2luZGNzcy9wdWxsLzExNilcbiovXG5cbiosXG46OmJlZm9yZSxcbjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXG4gIGJvcmRlci13aWR0aDogMDsgLyogMiAqL1xuICBib3JkZXItc3R5bGU6IHNvbGlkOyAvKiAyICovXG4gIGJvcmRlci1jb2xvcjogI2U1ZTdlYjsgLyogMiAqL1xufVxuXG46OmJlZm9yZSxcbjo6YWZ0ZXIge1xuICAtLXR3LWNvbnRlbnQ6ICcnO1xufVxuXG4vKlxuMS4gVXNlIGEgY29uc2lzdGVudCBzZW5zaWJsZSBsaW5lLWhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXG4yLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cbjMuIFVzZSBhIG1vcmUgcmVhZGFibGUgdGFiIHNpemUuXG40LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYHNhbnNcXGAgZm9udC1mYW1pbHkgYnkgZGVmYXVsdC5cbjUuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgc2Fuc1xcYCBmb250LWZlYXR1cmUtc2V0dGluZ3MgYnkgZGVmYXVsdC5cbjYuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgc2Fuc1xcYCBmb250LXZhcmlhdGlvbi1zZXR0aW5ncyBieSBkZWZhdWx0LlxuNy4gRGlzYWJsZSB0YXAgaGlnaGxpZ2h0cyBvbiBpT1NcbiovXG5cbmh0bWwsXG46aG9zdCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7IC8qIDEgKi9cbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXG4gIC1tb3otdGFiLXNpemU6IDQ7IC8qIDMgKi9cbiAgLW8tdGFiLXNpemU6IDQ7XG4gICAgIHRhYi1zaXplOiA0OyAvKiAzICovXG4gIGZvbnQtZmFtaWx5OiB1aS1zYW5zLXNlcmlmLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIFNlZ29lIFVJLCBSb2JvdG8sIFVidW50dSwgQ2FudGFyZWxsLCBOb3RvIFNhbnMsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCBcIk5vdG8gQ29sb3IgRW1vamlcIjsgLyogNCAqL1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IG5vcm1hbDsgLyogNSAqL1xuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogbm9ybWFsOyAvKiA2ICovXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIDcgKi9cbn1cblxuLypcbjEuIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cbjIuIEluaGVyaXQgbGluZS1oZWlnaHQgZnJvbSBcXGBodG1sXFxgIHNvIHVzZXJzIGNhbiBzZXQgdGhlbSBhcyBhIGNsYXNzIGRpcmVjdGx5IG9uIHRoZSBcXGBodG1sXFxgIGVsZW1lbnQuXG4qL1xuXG5ib2R5IHtcbiAgbWFyZ2luOiAwOyAvKiAxICovXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyAvKiAyICovXG59XG5cbi8qXG4xLiBBZGQgdGhlIGNvcnJlY3QgaGVpZ2h0IGluIEZpcmVmb3guXG4yLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBvZiBib3JkZXIgY29sb3IgaW4gRmlyZWZveC4gKGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE5MDY1NSlcbjMuIEVuc3VyZSBob3Jpem9udGFsIHJ1bGVzIGFyZSB2aXNpYmxlIGJ5IGRlZmF1bHQuXG4qL1xuXG5ociB7XG4gIGhlaWdodDogMDsgLyogMSAqL1xuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7IC8qIDMgKi9cbn1cblxuLypcbkFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxuKi9cblxuYWJicjp3aGVyZShbdGl0bGVdKSB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XG59XG5cbi8qXG5SZW1vdmUgdGhlIGRlZmF1bHQgZm9udCBzaXplIGFuZCB3ZWlnaHQgZm9yIGhlYWRpbmdzLlxuKi9cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbn1cblxuLypcblJlc2V0IGxpbmtzIHRvIG9wdGltaXplIGZvciBvcHQtaW4gc3R5bGluZyBpbnN0ZWFkIG9mIG9wdC1vdXQuXG4qL1xuXG5hIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcbn1cblxuLypcbkFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBFZGdlIGFuZCBTYWZhcmkuXG4qL1xuXG5iLFxuc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLypcbjEuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgbW9ub1xcYCBmb250LWZhbWlseSBieSBkZWZhdWx0LlxuMi4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBtb25vXFxgIGZvbnQtZmVhdHVyZS1zZXR0aW5ncyBieSBkZWZhdWx0LlxuMy4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBtb25vXFxgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzIGJ5IGRlZmF1bHQuXG40LiBDb3JyZWN0IHRoZSBvZGQgXFxgZW1cXGAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxuKi9cblxuY29kZSxcbmtiZCxcbnNhbXAsXG5wcmUge1xuICBmb250LWZhbWlseTogdWktbW9ub3NwYWNlLCBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFwiTGliZXJhdGlvbiBNb25vXCIsIFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlOyAvKiAxICovXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogbm9ybWFsOyAvKiAyICovXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBub3JtYWw7IC8qIDMgKi9cbiAgZm9udC1zaXplOiAxZW07IC8qIDQgKi9cbn1cblxuLypcbkFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuKi9cblxuc21hbGwge1xuICBmb250LXNpemU6IDgwJTtcbn1cblxuLypcblByZXZlbnQgXFxgc3ViXFxgIGFuZCBcXGBzdXBcXGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cbiovXG5cbnN1YixcbnN1cCB7XG4gIGZvbnQtc2l6ZTogNzUlO1xuICBsaW5lLWhlaWdodDogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbnN1YiB7XG4gIGJvdHRvbTogLTAuMjVlbTtcbn1cblxuc3VwIHtcbiAgdG9wOiAtMC41ZW07XG59XG5cbi8qXG4xLiBSZW1vdmUgdGV4dCBpbmRlbnRhdGlvbiBmcm9tIHRhYmxlIGNvbnRlbnRzIGluIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTk5MDg4LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjAxMjk3KVxuMi4gQ29ycmVjdCB0YWJsZSBib3JkZXIgY29sb3IgaW5oZXJpdGFuY2UgaW4gYWxsIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTM1NzI5LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTk1MDE2KVxuMy4gUmVtb3ZlIGdhcHMgYmV0d2VlbiB0YWJsZSBib3JkZXJzIGJ5IGRlZmF1bHQuXG4qL1xuXG50YWJsZSB7XG4gIHRleHQtaW5kZW50OiAwOyAvKiAxICovXG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDsgLyogMiAqL1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyAvKiAzICovXG59XG5cbi8qXG4xLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cbjIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cbjMuIFJlbW92ZSBkZWZhdWx0IHBhZGRpbmcgaW4gYWxsIGJyb3dzZXJzLlxuKi9cblxuYnV0dG9uLFxuaW5wdXQsXG5vcHRncm91cCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBpbmhlcml0OyAvKiAxICovXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBpbmhlcml0OyAvKiAxICovXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xuICBmb250LXdlaWdodDogaW5oZXJpdDsgLyogMSAqL1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgLyogMSAqL1xuICBsZXR0ZXItc3BhY2luZzogaW5oZXJpdDsgLyogMSAqL1xuICBjb2xvcjogaW5oZXJpdDsgLyogMSAqL1xuICBtYXJnaW46IDA7IC8qIDIgKi9cbiAgcGFkZGluZzogMDsgLyogMyAqL1xufVxuXG4vKlxuUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlIGFuZCBGaXJlZm94LlxuKi9cblxuYnV0dG9uLFxuc2VsZWN0IHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbi8qXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuMi4gUmVtb3ZlIGRlZmF1bHQgYnV0dG9uIHN0eWxlcy5cbiovXG5cbmJ1dHRvbixcbmlucHV0OndoZXJlKFt0eXBlPSdidXR0b24nXSksXG5pbnB1dDp3aGVyZShbdHlwZT0ncmVzZXQnXSksXG5pbnB1dDp3aGVyZShbdHlwZT0nc3VibWl0J10pIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIDIgKi9cbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTsgLyogMiAqL1xufVxuXG4vKlxuVXNlIHRoZSBtb2Rlcm4gRmlyZWZveCBmb2N1cyBzdHlsZSBmb3IgYWxsIGZvY3VzYWJsZSBlbGVtZW50cy5cbiovXG5cbjotbW96LWZvY3VzcmluZyB7XG4gIG91dGxpbmU6IGF1dG87XG59XG5cbi8qXG5SZW1vdmUgdGhlIGFkZGl0aW9uYWwgXFxgOmludmFsaWRcXGAgc3R5bGVzIGluIEZpcmVmb3guIChodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9nZWNrby1kZXYvYmxvYi8yZjllYWNkOWQzZDk5NWM5MzdiNDI1MWE1NTU3ZDk1ZDQ5NGM5YmUxL2xheW91dC9zdHlsZS9yZXMvZm9ybXMuY3NzI0w3MjgtTDczNylcbiovXG5cbjotbW96LXVpLWludmFsaWQge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4vKlxuQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUgYW5kIEZpcmVmb3guXG4qL1xuXG5wcm9ncmVzcyB7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuLypcbkNvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIFNhZmFyaS5cbiovXG5cbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLypcbjEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxuMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXG4qL1xuXG5bdHlwZT0nc2VhcmNoJ10ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xufVxuXG4vKlxuUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxuKi9cblxuOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG4vKlxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cbjIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gXFxgaW5oZXJpdFxcYCBpbiBTYWZhcmkuXG4qL1xuXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xufVxuXG4vKlxuQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXG4qL1xuXG5zdW1tYXJ5IHtcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xufVxuXG4vKlxuUmVtb3ZlcyB0aGUgZGVmYXVsdCBzcGFjaW5nIGFuZCBib3JkZXIgZm9yIGFwcHJvcHJpYXRlIGVsZW1lbnRzLlxuKi9cblxuYmxvY2txdW90ZSxcbmRsLFxuZGQsXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYsXG5ocixcbmZpZ3VyZSxcbnAsXG5wcmUge1xuICBtYXJnaW46IDA7XG59XG5cbmZpZWxkc2V0IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5sZWdlbmQge1xuICBwYWRkaW5nOiAwO1xufVxuXG5vbCxcbnVsLFxubWVudSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLypcblJlc2V0IGRlZmF1bHQgc3R5bGluZyBmb3IgZGlhbG9ncy5cbiovXG5cbmRpYWxvZyB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi8qXG5QcmV2ZW50IHJlc2l6aW5nIHRleHRhcmVhcyBob3Jpem9udGFsbHkgYnkgZGVmYXVsdC5cbiovXG5cbnRleHRhcmVhIHtcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcbn1cblxuLypcbjEuIFJlc2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIG9wYWNpdHkgaW4gRmlyZWZveC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGxhYnMvdGFpbHdpbmRjc3MvaXNzdWVzLzMzMDApXG4yLiBTZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgY29sb3IgdG8gdGhlIHVzZXIncyBjb25maWd1cmVkIGdyYXkgNDAwIGNvbG9yLlxuKi9cblxuaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIsIHRleHRhcmVhOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMTsgLyogMSAqL1xuICBjb2xvcjogIzljYTNhZjsgLyogMiAqL1xufVxuXG5pbnB1dDo6cGxhY2Vob2xkZXIsXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAxOyAvKiAxICovXG4gIGNvbG9yOiAjOWNhM2FmOyAvKiAyICovXG59XG5cbi8qXG5TZXQgdGhlIGRlZmF1bHQgY3Vyc29yIGZvciBidXR0b25zLlxuKi9cblxuYnV0dG9uLFxuW3JvbGU9XCJidXR0b25cIl0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qXG5NYWtlIHN1cmUgZGlzYWJsZWQgYnV0dG9ucyBkb24ndCBnZXQgdGhlIHBvaW50ZXIgY3Vyc29yLlxuKi9cblxuOmRpc2FibGVkIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4vKlxuMS4gTWFrZSByZXBsYWNlZCBlbGVtZW50cyBcXGBkaXNwbGF5OiBibG9ja1xcYCBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcbjIuIEFkZCBcXGB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXFxgIHRvIGFsaWduIHJlcGxhY2VkIGVsZW1lbnRzIG1vcmUgc2Vuc2libHkgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9qZW5zaW1tb25zL2Nzc3JlbWVkeS9pc3N1ZXMvMTQjaXNzdWVjb21tZW50LTYzNDkzNDIxMClcbiAgIFRoaXMgY2FuIHRyaWdnZXIgYSBwb29ybHkgY29uc2lkZXJlZCBsaW50IGVycm9yIGluIHNvbWUgdG9vbHMgYnV0IGlzIGluY2x1ZGVkIGJ5IGRlc2lnbi5cbiovXG5cbmltZyxcbnN2ZyxcbnZpZGVvLFxuY2FudmFzLFxuYXVkaW8sXG5pZnJhbWUsXG5lbWJlZCxcbm9iamVjdCB7XG4gIGRpc3BsYXk6IGJsb2NrOyAvKiAxICovXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IC8qIDIgKi9cbn1cblxuLypcbkNvbnN0cmFpbiBpbWFnZXMgYW5kIHZpZGVvcyB0byB0aGUgcGFyZW50IHdpZHRoIGFuZCBwcmVzZXJ2ZSB0aGVpciBpbnRyaW5zaWMgYXNwZWN0IHJhdGlvLiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcbiovXG5cbmltZyxcbnZpZGVvIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qIE1ha2UgZWxlbWVudHMgd2l0aCB0aGUgSFRNTCBoaWRkZW4gYXR0cmlidXRlIHN0YXkgaGlkZGVuIGJ5IGRlZmF1bHQgKi9cblxuW2hpZGRlbl0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBIaWRlIHNjcm9sbGJhciBmb3IgSUUsIEVkZ2UgYW5kIEZpcmVmb3ggKi9cblxubWFpbixcbiAgc2VjdGlvbixcbiAgLnByb2plY3QtY2FyZC13cmFwcGVyIHtcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IC8qIElFIGFuZCBFZGdlICovXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAvKiBGaXJlZm94ICovXG4gIH1cblxuLyogSGlkZSBzY3JvbGxiYXIgZm9yIENocm9tZSwgU2FmYXJpIGFuZCBPcGVyYSAqL1xuXG5tYWluOjotd2Via2l0LXNjcm9sbGJhcixcbiAgc2VjdGlvbjo6LXdlYmtpdC1zY3JvbGxiYXIsXG4gIC5wcm9qZWN0LWNhcmQtd3JhcHBlcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5ib2R5IHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIDEpO1xuICBjb2xvcjogcmdiYSgzOSwgMzksIDQyLCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cblxuYm9keTp3aGVyZSguZGFyaywgLmRhcmsgKikge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgMSk7XG4gIGNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuXG5ib2R5ICoge1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvciwgYmFja2dyb3VuZC1jb2xvciwgYm9yZGVyLWNvbG9yLCB0ZXh0LWRlY29yYXRpb24tY29sb3IsIGZpbGwsIHN0cm9rZTtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDc1bXM7XG59XG5cbmhlYWRlcixcbiAgZm9vdGVyIHtcbiAgei1pbmRleDogNTA7XG4gIGhlaWdodDogMy41cmVtO1xuICB3aWR0aDogMTAwJTtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbiAgcGFkZGluZy1sZWZ0OiAxLjc1cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxLjc1cmVtO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcblxuICBoZWFkZXIsXG4gIGZvb3RlciB7XG4gICAgcGFkZGluZy1sZWZ0OiAzLjVyZW07XG4gICAgcGFkZGluZy1yaWdodDogMy41cmVtO1xuICB9XG59XG5cbmhlYWRlcjp3aGVyZSguZGFyaywgLmRhcmsgKiksXG4gIGZvb3Rlcjp3aGVyZSguZGFyaywgLmRhcmsgKikge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuXG5hc2lkZSB7XG4gIG1hcmdpbi10b3A6IDMuNXJlbTtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMiAqIDU2cHgpO1xuICBwYWRkaW5nLWxlZnQ6IDIwMHB4O1xufVxuXG5tYWluIHtcbiAgbWFyZ2luLXRvcDogMy41cmVtO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyICogNTZweCk7XG4gIHdpZHRoOiAxMDAlO1xuICBzY3JvbGwtc25hcC10eXBlOiB5IHZhcigtLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3MpO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG5zZWN0aW9uIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMiAqIDU2cHgpO1xuICBzY3JvbGwtc25hcC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDEuNzVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDEuNzVyZW07XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuXG4gIHNlY3Rpb24ge1xuICAgIHBhZGRpbmctbGVmdDogMy41cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDMuNXJlbTtcbiAgfVxufVxuXG5hIHtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNTAwbXMgZWFzZTtcbiAgfVxuXG5idXR0b246ZGlzYWJsZWQge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoMTYxLCAxNjEsIDE3MCwgMSk7XG4gIGNvbG9yOiByZ2JhKDE2MSwgMTYxLCAxNzAsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuXG5idXR0b246ZGlzYWJsZWQ6d2hlcmUoLmRhcmssIC5kYXJrICopIHtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2JhKDExMywgMTEzLCAxMjIsIDEpO1xuICBjb2xvcjogcmdiYSgxMTMsIDExMywgMTIyLCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cblxuYnV0dG9uOmRpc2FibGVkIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuXG4qLCA6OmJlZm9yZSwgOjphZnRlciB7XG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteDogMDtcbiAgLS10dy1ib3JkZXItc3BhY2luZy15OiAwO1xuICAtLXR3LXRyYW5zbGF0ZS14OiAwO1xuICAtLXR3LXRyYW5zbGF0ZS15OiAwO1xuICAtLXR3LXJvdGF0ZTogMDtcbiAgLS10dy1za2V3LXg6IDA7XG4gIC0tdHctc2tldy15OiAwO1xuICAtLXR3LXNjYWxlLXg6IDE7XG4gIC0tdHctc2NhbGUteTogMTtcbiAgLS10dy1wYW4teDogIDtcbiAgLS10dy1wYW4teTogIDtcbiAgLS10dy1waW5jaC16b29tOiAgO1xuICAtLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3M6IHByb3hpbWl0eTtcbiAgLS10dy1ncmFkaWVudC1mcm9tLXBvc2l0aW9uOiAgO1xuICAtLXR3LWdyYWRpZW50LXZpYS1wb3NpdGlvbjogIDtcbiAgLS10dy1ncmFkaWVudC10by1wb3NpdGlvbjogIDtcbiAgLS10dy1vcmRpbmFsOiAgO1xuICAtLXR3LXNsYXNoZWQtemVybzogIDtcbiAgLS10dy1udW1lcmljLWZpZ3VyZTogIDtcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XG4gIC0tdHctbnVtZXJpYy1mcmFjdGlvbjogIDtcbiAgLS10dy1yaW5nLWluc2V0OiAgO1xuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XG4gIC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XG4gIC0tdHctcmluZy1jb2xvcjogcmdiYSg1OSwgMTMwLCAyNDYsIDAuNSk7XG4gIC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcbiAgLS10dy1yaW5nLXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XG4gIC0tdHctc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAwIHJnYmEoMCwwLDAsMCk7XG4gIC0tdHctYmx1cjogIDtcbiAgLS10dy1icmlnaHRuZXNzOiAgO1xuICAtLXR3LWNvbnRyYXN0OiAgO1xuICAtLXR3LWdyYXlzY2FsZTogIDtcbiAgLS10dy1odWUtcm90YXRlOiAgO1xuICAtLXR3LWludmVydDogIDtcbiAgLS10dy1zYXR1cmF0ZTogIDtcbiAgLS10dy1zZXBpYTogIDtcbiAgLS10dy1kcm9wLXNoYWRvdzogIDtcbiAgLS10dy1iYWNrZHJvcC1ibHVyOiAgO1xuICAtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3M6ICA7XG4gIC0tdHctYmFja2Ryb3AtY29udHJhc3Q6ICA7XG4gIC0tdHctYmFja2Ryb3AtZ3JheXNjYWxlOiAgO1xuICAtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGU6ICA7XG4gIC0tdHctYmFja2Ryb3AtaW52ZXJ0OiAgO1xuICAtLXR3LWJhY2tkcm9wLW9wYWNpdHk6ICA7XG4gIC0tdHctYmFja2Ryb3Atc2F0dXJhdGU6ICA7XG4gIC0tdHctYmFja2Ryb3Atc2VwaWE6ICA7XG4gIC0tdHctY29udGFpbi1zaXplOiAgO1xuICAtLXR3LWNvbnRhaW4tbGF5b3V0OiAgO1xuICAtLXR3LWNvbnRhaW4tcGFpbnQ6ICA7XG4gIC0tdHctY29udGFpbi1zdHlsZTogIDtcbn1cblxuOjpiYWNrZHJvcCB7XG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteDogMDtcbiAgLS10dy1ib3JkZXItc3BhY2luZy15OiAwO1xuICAtLXR3LXRyYW5zbGF0ZS14OiAwO1xuICAtLXR3LXRyYW5zbGF0ZS15OiAwO1xuICAtLXR3LXJvdGF0ZTogMDtcbiAgLS10dy1za2V3LXg6IDA7XG4gIC0tdHctc2tldy15OiAwO1xuICAtLXR3LXNjYWxlLXg6IDE7XG4gIC0tdHctc2NhbGUteTogMTtcbiAgLS10dy1wYW4teDogIDtcbiAgLS10dy1wYW4teTogIDtcbiAgLS10dy1waW5jaC16b29tOiAgO1xuICAtLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3M6IHByb3hpbWl0eTtcbiAgLS10dy1ncmFkaWVudC1mcm9tLXBvc2l0aW9uOiAgO1xuICAtLXR3LWdyYWRpZW50LXZpYS1wb3NpdGlvbjogIDtcbiAgLS10dy1ncmFkaWVudC10by1wb3NpdGlvbjogIDtcbiAgLS10dy1vcmRpbmFsOiAgO1xuICAtLXR3LXNsYXNoZWQtemVybzogIDtcbiAgLS10dy1udW1lcmljLWZpZ3VyZTogIDtcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XG4gIC0tdHctbnVtZXJpYy1mcmFjdGlvbjogIDtcbiAgLS10dy1yaW5nLWluc2V0OiAgO1xuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XG4gIC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XG4gIC0tdHctcmluZy1jb2xvcjogcmdiYSg1OSwgMTMwLCAyNDYsIDAuNSk7XG4gIC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcbiAgLS10dy1yaW5nLXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XG4gIC0tdHctc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAwIHJnYmEoMCwwLDAsMCk7XG4gIC0tdHctYmx1cjogIDtcbiAgLS10dy1icmlnaHRuZXNzOiAgO1xuICAtLXR3LWNvbnRyYXN0OiAgO1xuICAtLXR3LWdyYXlzY2FsZTogIDtcbiAgLS10dy1odWUtcm90YXRlOiAgO1xuICAtLXR3LWludmVydDogIDtcbiAgLS10dy1zYXR1cmF0ZTogIDtcbiAgLS10dy1zZXBpYTogIDtcbiAgLS10dy1kcm9wLXNoYWRvdzogIDtcbiAgLS10dy1iYWNrZHJvcC1ibHVyOiAgO1xuICAtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3M6ICA7XG4gIC0tdHctYmFja2Ryb3AtY29udHJhc3Q6ICA7XG4gIC0tdHctYmFja2Ryb3AtZ3JheXNjYWxlOiAgO1xuICAtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGU6ICA7XG4gIC0tdHctYmFja2Ryb3AtaW52ZXJ0OiAgO1xuICAtLXR3LWJhY2tkcm9wLW9wYWNpdHk6ICA7XG4gIC0tdHctYmFja2Ryb3Atc2F0dXJhdGU6ICA7XG4gIC0tdHctYmFja2Ryb3Atc2VwaWE6ICA7XG4gIC0tdHctY29udGFpbi1zaXplOiAgO1xuICAtLXR3LWNvbnRhaW4tbGF5b3V0OiAgO1xuICAtLXR3LWNvbnRhaW4tcGFpbnQ6ICA7XG4gIC0tdHctY29udGFpbi1zdHlsZTogIDtcbn1cbi5tb250c2VycmF0IHtcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1vcHRpY2FsLXNpemluZzogYXV0bztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gIH1cbi50ZXh0LWhlbGxvIHtcbiAgZm9udC1zaXplOiAxMHZ3O1xuICBmb250LXdlaWdodDogODAwO1xuICBsaW5lLWhlaWdodDogMC44O1xufVxuQG1lZGlhIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcblxuICAudGV4dC1oZWxsbyB7XG4gICAgZm9udC1zaXplOiAxNXZ3O1xuICB9XG59XG4udGV4dC1iaWcge1xuICBmb250LXNpemU6IDMuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGxpbmUtaGVpZ2h0OiAwLjg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcblxuICAudGV4dC1iaWcge1xuICAgIGZvbnQtc2l6ZTogNC41cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICB9XG59XG4uYnRuLWRhcmstbW9kZSB7XG4gIGFzcGVjdC1yYXRpbzogMjtcbiAgaGVpZ2h0OiAxLjI1cmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcbiAgLS10dy1zaGFkb3c6IGluc2V0IDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IGluc2V0IDAgMnB4IDRweCAwIHZhcigtLXR3LXNoYWRvdy1jb2xvcik7XG4gIGJveC1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApLCAwIDAgcmdiYSgwLDAsMCwwKSwgaW5zZXQgMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYm94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgcmdiYSgwLDAsMCwwKSksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgcmdiYSgwLDAsMCwwKSksIHZhcigtLXR3LXNoYWRvdyk7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcblxuICAuYnRuLWRhcmstbW9kZSB7XG4gICAgaGVpZ2h0OiAxLjVyZW07XG4gIH1cbn1cbi5idG4tZGFyay1tb2RlIHtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDUwMG1zIGVhc2U7XG4gIH1cbi5idG4tZGFyay1tb2RlLnRoZW1lLTE6aG92ZXIge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ4LCAxMTMsIDExMywgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ4LCAxMTMsIDExMywgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLmJ0bi1kYXJrLW1vZGUudGhlbWUtMjpob3ZlciB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsIDIwNCwgMjEsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MCwgMjA0LCAyMSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLmJ0bi1kYXJrLW1vZGUudGhlbWUtMzpob3ZlciB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNCwgMTY1LCAyMzMsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0LCAxNjUsIDIzMywgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLmRhcmstbW9kZS1iYWxsIHtcbiAgbWFyZ2luLWxlZnQ6IDAuMTI1cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuMTI1cmVtO1xuICBhc3BlY3QtcmF0aW86IDEgLyAxO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDRweCk7XG4gIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLmRhcmstbW9kZS1iYWxsOndoZXJlKC5kYXJrLCAuZGFyayAqKSB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMzksIDQyLCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMzksIDQyLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4uZGFyay1tb2RlLWJhbGwge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA3NTBtcyBlYXNlO1xuICB9XG4uZGFyay1tb2RlLWJhbGwuZGFyayB7XG4gIC0tdHctdHJhbnNsYXRlLXg6IGNhbGMoMTAwJSArIDRweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKGNhbGMoMTAwJSArIDRweCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG4uaWNvbi1tb2RlLWRhcmssXG4gIC5pY29uLW1vZGUge1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgNzVtcyBlYXNlO1xuICB9XG4uaWNvbi1tb2RlLWRhcmsge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG59XG4uaWNvbi1tb2RlLWRhcms6d2hlcmUoLmRhcmssIC5kYXJrICopIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5pY29uLW1vZGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDE7XG59XG4uaWNvbi1tb2RlOndoZXJlKC5kYXJrLCAuZGFyayAqKSB7XG4gIG9wYWNpdHk6IDA7XG59XG4uaWNvbi1hYm91dC10b29sLFxuICAuaWNvbi1jb250YWN0LWxpbmsge1xuICBhc3BlY3QtcmF0aW86IDEgLyAxO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xuXG4gIC5pY29uLWFib3V0LXRvb2wsXG4gIC5pY29uLWNvbnRhY3QtbGluayB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgfVxufVxuLmljb24tbmV4dCB7XG4gIGFzcGVjdC1yYXRpbzogMSAvIDE7XG4gIGhlaWdodDogNzBweDtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNTAwbXMgZWFzZTtcbn1cbmJ1dHRvbjpob3ZlciAuaWNvbi1uZXh0IHtcbiAgLS10dy1zY2FsZS14OiAxLjE7XG4gIC0tdHctc2NhbGUteTogMS4xO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCgxLjEpIHNjYWxlWSgxLjEpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbi5idG4tbWluaS10YWIge1xuICBhc3BlY3QtcmF0aW86IDQ7XG4gIGhlaWdodDogMC43NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgMSk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xufVxuLmJ0bi1taW5pLXRhYjp3aGVyZSguZGFyaywgLmRhcmsgKikge1xuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xuICBib3JkZXItY29sb3I6IHJnYmEoMTQsIDE2NSwgMjMzLCAxKTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDE0LCAxNjUsIDIzMywgdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcbn1cbi5idG4tbWluaS10YWIge1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNTAwbXMgZWFzZTtcbiAgfVxuLmJ0bi1taW5pLXRhYi5hY3RpdmUge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLmJ0bi1taW5pLXRhYi5hY3RpdmU6d2hlcmUoLmRhcmssIC5kYXJrICopIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0LCAxNjUsIDIzMywgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQsIDE2NSwgMjMzLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4ucHJvamVjdC1jYXJkLW91dGVyLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA2MCU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbiAgcGFkZGluZzogMXJlbTtcbn1cbi5wcm9qZWN0LWNhcmQtb3V0ZXItd3JhcHBlcjp3aGVyZSguZGFyaywgLmRhcmsgKikge1xuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xuICBib3JkZXItY29sb3I6IHJnYmEoMTQsIDE2NSwgMjMzLCAxKTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDE0LCAxNjUsIDIzMywgdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4ucHJvamVjdC1jYXJkLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHNjcm9sbC1zbmFwLXR5cGU6IHggdmFyKC0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzcyk7XG4gIGdhcDogMXJlbTtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cbi5wcm9qZWN0LWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgc2Nyb2xsLXNuYXAtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ucHJvamVjdC1jYXJkLWltYWdlIHtcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5wcm9qZWN0LWNhcmQtaW5kZXgge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIGZvbnQtc2l6ZTogNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbGluZS1oZWlnaHQ6IDAuODtcbn1cbi5wcm9qZWN0LWNhcmQtbmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHdpZHRoOiAxMDAlO1xuICAtLXR3LXRyYW5zbGF0ZS15OiAtNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIC01MCUpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMi4yNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5wcm9qZWN0LWNhcmQtdHlwZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA3NSU7XG4gIHdpZHRoOiAxMDAlO1xuICAtLXR3LXRyYW5zbGF0ZS15OiAtNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIC01MCUpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4ucHJvamVjdC1jYXJkLWV4cGFuZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxcmVtO1xuICByaWdodDogMXJlbTtcbiAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIDAuNSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xuICAtLXR3LWJnLW9wYWNpdHk6IDAuNTtcbiAgb3BhY2l0eTogMC41O1xufVxuLnByb2plY3QtY2FyZC1leHBhbmQ6d2hlcmUoLmRhcmssIC5kYXJrICopIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5idG4tcHJvamVjdC1jYXJkLW5leHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogY2FsYyg1MCUgLSAyOHB4KTtcbiAgcmlnaHQ6IDFyZW07XG4gIGFzcGVjdC1yYXRpbzogMSAvIDE7XG4gIGhlaWdodDogMy41cmVtO1xuICAtLXR3LXJvdGF0ZTogLTkwZGVnO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKC05MGRlZykgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMzksIDQyLCAwLjUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbiAgLS10dy1iZy1vcGFjaXR5OiAwLjU7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5idG4tcHJvamVjdC1jYXJkLW5leHQ6d2hlcmUoLmRhcmssIC5kYXJrICopIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5idG4tcHJvamVjdC1jYXJkLXByZXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogY2FsYyg1MCUgLSAyOHB4KTtcbiAgbGVmdDogMXJlbTtcbiAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcbiAgaGVpZ2h0OiAzLjVyZW07XG4gIC0tdHctcm90YXRlOiA5MGRlZztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSg5MGRlZykgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMzksIDQyLCAwLjUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbiAgLS10dy1iZy1vcGFjaXR5OiAwLjU7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5idG4tcHJvamVjdC1jYXJkLXByZXY6d2hlcmUoLmRhcmssIC5kYXJrICopIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5wcm9qZWN0LWNhcmQtaW1hZ2UsXG4gIC5wcm9qZWN0LWNhcmQgPiBkaXYsXG4gIC5wcm9qZWN0LWNhcmQtZXhwYW5kLFxuICAuYnRuLXByb2plY3QtY2FyZC1uZXh0LFxuICAuYnRuLXByb2plY3QtY2FyZC1wcmV2IHtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDUwMG1zIGVhc2U7XG4gIH1cbi5wcm9qZWN0LWNhcmQtd3JhcHBlcjpob3ZlciAucHJvamVjdC1jYXJkLWltYWdlLFxuICAucHJvamVjdC1jYXJkLW91dGVyLXdyYXBwZXI6aG92ZXIgLnByb2plY3QtY2FyZC1leHBhbmQ6aG92ZXIsXG4gIC5idG4tcHJvamVjdC1jYXJkLW5leHQ6aG92ZXIsXG4gIC5idG4tcHJvamVjdC1jYXJkLXByZXY6aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuLnByb2plY3QtY2FyZC13cmFwcGVyOmhvdmVyIC5wcm9qZWN0LWNhcmQtaW5kZXgge1xuICBvcGFjaXR5OiAwLjU7XG59XG4ucHJvamVjdC1jYXJkLXdyYXBwZXI6aG92ZXIgLnByb2plY3QtY2FyZC1uYW1lLFxuICAucHJvamVjdC1jYXJkLXdyYXBwZXI6aG92ZXIgLnByb2plY3QtY2FyZC10eXBlIHtcbiAgb3BhY2l0eTogMDtcbn1cbi51bmRlcmxpbmUtaCxcbiAgLmhpZ2hsaWdodC1oIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnVuZGVybGluZS1oOmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIGJvdHRvbTogMC4xMjVyZW07XG4gIGhlaWdodDogMC4xMjVyZW07XG4gIHdpZHRoOiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi51bmRlcmxpbmUtaDp3aGVyZSguZGFyaywgLmRhcmsgKik6YWZ0ZXIge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLnVuZGVybGluZS1oOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHRyYW5zaXRpb246IHdpZHRoIDUwMG1zIGVhc2U7XG4gIH1cbmJ1dHRvbjpob3ZlciAudW5kZXJsaW5lLWg6YWZ0ZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbi5oaWdobGlnaHQtaDphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyNSU7XG4gIGxlZnQ6IC0xNXB4O1xuICB6LWluZGV4OiAtMTA7XG4gIGhlaWdodDogNTAlO1xuICB3aWR0aDogMHB4O1xuICBvcGFjaXR5OiAwLjg7XG4gICAgY29udGVudDogXCJcIjtcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCA1MDBtcyBlYXNlO1xufVxuYnV0dG9uOmhvdmVyIC5oaWdobGlnaHQtaDphZnRlciB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyAzMHB4KTtcbn1cbi5hYm91dC1zcGFuIHtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIDEpO1xuICBjb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cbi5hYm91dC1zcGFuOndoZXJlKC5kYXJrLCAuZGFyayAqKSB7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiYSgyNTAsIDIwNCwgMjEsIDEpO1xuICBjb2xvcjogcmdiYSgyNTAsIDIwNCwgMjEsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuLnRvb2w6aG92ZXIgLmljb24tYWJvdXQtdG9vbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLyogQW5pbWF0aW9uICovXG5bY2xhc3NePVwiYW5pbWF0ZS1cIl0ge1xuICAgIHdpbGwtY2hhbmdlOiBhbmltYXRpb247XG4gIH1cbi5maXhlZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cbi5hYnNvbHV0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5yZWxhdGl2ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5ib3R0b20tMCB7XG4gIGJvdHRvbTogMHB4O1xufVxuLmxlZnQtMVxcXFwvMiB7XG4gIGxlZnQ6IDUwJTtcbn1cbi5sZWZ0LVxcXFxbLTEyMHB4XFxcXF0ge1xuICBsZWZ0OiAtMTIwcHg7XG59XG4ubGVmdC1cXFxcWy0xNTZweFxcXFxdIHtcbiAgbGVmdDogLTE1NnB4O1xufVxuLnJpZ2h0LTAge1xuICByaWdodDogMHB4O1xufVxuLnJpZ2h0LTE0IHtcbiAgcmlnaHQ6IDMuNXJlbTtcbn1cbi50b3AtMCB7XG4gIHRvcDogMHB4O1xufVxuLnRvcC0xXFxcXC8yIHtcbiAgdG9wOiA1MCU7XG59XG4udG9wLVxcXFxbNTB2aFxcXFxdIHtcbiAgdG9wOiA1MHZoO1xufVxuLnotNDAge1xuICB6LWluZGV4OiA0MDtcbn1cbi56LTUwIHtcbiAgei1pbmRleDogNTA7XG59XG4ubXQtMTQge1xuICBtYXJnaW4tdG9wOiAzLjVyZW07XG59XG4ubXQtMiB7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5hc3BlY3Qtc3F1YXJlIHtcbiAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcbn1cbi5oLTEwIHtcbiAgaGVpZ2h0OiAyLjVyZW07XG59XG4uaC1cXFxcW2NhbGNcXFxcKDIwdndcXFxcKjBcXFxcLjhcXFxcKVxcXFxdIHtcbiAgaGVpZ2h0OiBjYWxjKDIwdncgKiAwLjgpO1xufVxuLmgtZnVsbCB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi53LVxcXFxbMjBcXFxcJVxcXFxdIHtcbiAgd2lkdGg6IDIwJTtcbn1cbi53LVxcXFxbNDBcXFxcJVxcXFxdIHtcbiAgd2lkdGg6IDQwJTtcbn1cbi53LVxcXFxbY2FsY1xcXFwoMTAwXFxcXCUtMTZweFxcXFwpXFxcXF0ge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTZweCk7XG59XG4udy1maXQge1xuICB3aWR0aDogLW1vei1maXQtY29udGVudDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuLnctZnVsbCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1pbi13LVxcXFxbMzBcXFxcJVxcXFxdIHtcbiAgbWluLXdpZHRoOiAzMCU7XG59XG4ubWluLXctXFxcXFs3MFxcXFwlXFxcXF0ge1xuICBtaW4td2lkdGg6IDcwJTtcbn1cbi5taW4tdy1mdWxsIHtcbiAgbWluLXdpZHRoOiAxMDAlO1xufVxuLi10cmFuc2xhdGUteC0xXFxcXC8yIHtcbiAgLS10dy10cmFuc2xhdGUteDogLTUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbi4tdHJhbnNsYXRlLXktMVxcXFwvMiB7XG4gIC0tdHctdHJhbnNsYXRlLXk6IC01MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgLTUwJSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG4udHJhbnNsYXRlLXgtMVxcXFwvMiB7XG4gIC0tdHctdHJhbnNsYXRlLXg6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuLnRyYW5zbGF0ZS14LVxcXFxbLTQwdndcXFxcXSB7XG4gIC0tdHctdHJhbnNsYXRlLXg6IC00MHZ3O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNDB2dywgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbi5yb3RhdGUtMTgwIHtcbiAgLS10dy1yb3RhdGU6IDE4MGRlZztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSgxODBkZWcpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG4ucm90YXRlLTkwIHtcbiAgLS10dy1yb3RhdGU6IDkwZGVnO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKDkwZGVnKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuQGtleWZyYW1lcyBib3VuY2UtY2hldnJvbi1kb3duIHtcblxuICAwJSwgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTI1JSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuOCwgMCwgMSwgMSk7XG4gIH1cblxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKDApO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICB9XG59XG4uYW5pbWF0ZS1jaGV2cm9uLWRvd24ge1xuICBhbmltYXRpb246IGJvdW5jZS1jaGV2cm9uLWRvd24gMXMgaW5maW5pdGU7XG59XG5Aa2V5ZnJhbWVzIGJvdW5jZS1jaGV2cm9uLWxlZnQge1xuXG4gIDAlLCAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKDkwZGVnKSB0cmFuc2xhdGVZKDApO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjgsIDAsIDEsIDEpO1xuICB9XG5cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKDkwZGVnKSB0cmFuc2xhdGVZKDI1JSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG4gIH1cbn1cbi5hbmltYXRlLWNoZXZyb24tbGVmdCB7XG4gIGFuaW1hdGlvbjogYm91bmNlLWNoZXZyb24tbGVmdCAxcyBpbmZpbml0ZTtcbn1cbkBrZXlmcmFtZXMgYm91bmNlLWNoZXZyb24tcmlnaHQge1xuXG4gIDAlLCAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKC05MGRlZykgdHJhbnNsYXRlWSgtMjUlKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC44LCAwLCAxLCAxKTtcbiAgfVxuXG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSgtOTBkZWcpIHRyYW5zbGF0ZVkoMCk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG4gIH1cbn1cbi5hbmltYXRlLWNoZXZyb24tcmlnaHQge1xuICBhbmltYXRpb246IGJvdW5jZS1jaGV2cm9uLXJpZ2h0IDFzIGluZmluaXRlO1xufVxuQGtleWZyYW1lcyBzbGlkZS11cCB7XG5cbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuLmFuaW1hdGUtaGVsbG8ge1xuICBhbmltYXRpb246IHNsaWRlLXVwIDFzIDE7XG59XG5Aa2V5ZnJhbWVzIGJvdW5jZS1tZW51IHtcblxuICAwJSwgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSgtOTBkZWcpIHRyYW5zbGF0ZVkoMCk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuOCwgMCwgMSwgMSk7XG4gIH1cblxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoLTkwZGVnKSB0cmFuc2xhdGVZKDI1JSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG4gIH1cbn1cbi5hbmltYXRlLW1lbnUge1xuICBhbmltYXRpb246IGJvdW5jZS1tZW51IDEuNXMgaW5maW5pdGU7XG59XG4uc25hcC14IHtcbiAgc2Nyb2xsLXNuYXAtdHlwZTogeCB2YXIoLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzKTtcbn1cbi5zbmFwLWNlbnRlciB7XG4gIHNjcm9sbC1zbmFwLWFsaWduOiBjZW50ZXI7XG59XG4uZmxleC1yb3cge1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLmZsZXgtcm93LXJldmVyc2Uge1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG59XG4uZmxleC1jb2wge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLml0ZW1zLWNlbnRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uanVzdGlmeS1jZW50ZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5qdXN0aWZ5LWJldHdlZW4ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uanVzdGlmeS1ldmVubHkge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cbi5nYXAtMSB7XG4gIGdhcDogMC4yNXJlbTtcbn1cbi5nYXAtMTQge1xuICBnYXA6IDMuNXJlbTtcbn1cbi5nYXAtMiB7XG4gIGdhcDogMC41cmVtO1xufVxuLmdhcC0zIHtcbiAgZ2FwOiAwLjc1cmVtO1xufVxuLmdhcC01IHtcbiAgZ2FwOiAxLjI1cmVtO1xufVxuLm92ZXJmbG93LWhpZGRlbiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ub3ZlcmZsb3cteC1oaWRkZW4ge1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG4ub3ZlcmZsb3cteC1zY3JvbGwge1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG59XG4uc2Nyb2xsLXNtb290aCB7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuLnRleHQtcHJldHR5IHtcbiAgdGV4dC13cmFwOiBwcmV0dHk7XG59XG4ucm91bmRlZC1mdWxsIHtcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xufVxuLmJvcmRlci0yIHtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG59XG4uYm9yZGVyLXktMiB7XG4gIGJvcmRlci10b3Atd2lkdGg6IDJweDtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xufVxuLmJvcmRlci10aGVtZS0yIHtcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1MCwgMjA0LCAyMSwgMSk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTAsIDIwNCwgMjEsIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XG59XG4uYmctZGFyayB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMzksIDQyLCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMzksIDQyLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4uYmctbGlnaHQge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLmJnLXRoZW1lLTEge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ4LCAxMTMsIDExMywgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ4LCAxMTMsIDExMywgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLmJnLXRoZW1lLTIge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUwLCAyMDQsIDIxLCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsIDIwNCwgMjEsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5iZy10aGVtZS0zIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0LCAxNjUsIDIzMywgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQsIDE2NSwgMjMzLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4ucHgtMCB7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59XG4ucHgtMTQge1xuICBwYWRkaW5nLWxlZnQ6IDMuNXJlbTtcbiAgcGFkZGluZy1yaWdodDogMy41cmVtO1xufVxuLnB4LTcge1xuICBwYWRkaW5nLWxlZnQ6IDEuNzVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDEuNzVyZW07XG59XG4ucHktMTQge1xuICBwYWRkaW5nLXRvcDogMy41cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMy41cmVtO1xufVxuLnRleHQtanVzdGlmeSB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG4udGV4dC1zdGFydCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4udGV4dC0yeGwge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDJyZW07XG59XG4udGV4dC00eGwge1xuICBmb250LXNpemU6IDIuMjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAyLjVyZW07XG59XG4udGV4dC02eGwge1xuICBmb250LXNpemU6IDMuNzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuLnRleHQtc20ge1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBsaW5lLWhlaWdodDogMS4yNXJlbTtcbn1cbi50ZXh0LXhsIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBsaW5lLWhlaWdodDogMS43NXJlbTtcbn1cbi5mb250LWJvbGQge1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLmZvbnQtZXh0cmFib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cbi5mb250LXNlbWlib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi51cHBlcmNhc2Uge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLml0YWxpYyB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi50ZXh0LWxpZ2h0IHtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIDEpO1xuICBjb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cbi50ZXh0LXRoZW1lLTEge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoMjQ4LCAxMTMsIDExMywgMSk7XG4gIGNvbG9yOiByZ2JhKDI0OCwgMTEzLCAxMTMsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuLnRleHQtdGhlbWUtMiB7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiYSgyNTAsIDIwNCwgMjEsIDEpO1xuICBjb2xvcjogcmdiYSgyNTAsIDIwNCwgMjEsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuLnRleHQtdGhlbWUtMyB7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiYSgxNCwgMTY1LCAyMzMsIDEpO1xuICBjb2xvcjogcmdiYSgxNCwgMTY1LCAyMzMsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuLnVuZGVybGluZSB7XG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XG59XG4ub3BhY2l0eS0wIHtcbiAgb3BhY2l0eTogMDtcbn1cbi5vcGFjaXR5LTUwIHtcbiAgb3BhY2l0eTogMC41O1xufVxuYXNpZGUsXG4gICNidG4tbWVudS1sLFxuICAjYnRuLW1lbnUtbC1jbG9zZSxcbiAgI2J0bi1tZW51LWwtY2xvc2UgPiBkaXYge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA1MDBtcyBlYXNlO1xuICB9XG5tYWluLm1vdmUge1xuICAtLXR3LXRyYW5zbGF0ZS14OiA0MHZ3O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg0MHZ3LCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuYXNpZGUubW92ZSB7XG4gIC0tdHctdHJhbnNsYXRlLXg6IDBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuI2J0bi1tZW51LWwuc2hvdyB7XG4gIC0tdHctdHJhbnNsYXRlLXk6IDIwMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIDIwMHB4KSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbiNidG4tbWVudS1sLWNsb3NlLnNob3cge1xuICAtLXR3LXRyYW5zbGF0ZS14OiAyMDBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjAwcHgsIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG4jYnRuLW1lbnUtbC1jbG9zZTpob3ZlciA+IGRpdiB7XG4gIC0tdHctcm90YXRlOiAxODBkZWc7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUoMTgwZGVnKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxubWFpbiB7XG4gICAgdHJhbnNpdGlvbjpcbiAgICAgIHRyYW5zZm9ybSA1MDBtcyBlYXNlLCBvcGFjaXR5IDUwMG1zIGVhc2U7XG4gIH1cbiNhcnRpY2xlLWFib3V0IHtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDUwMG1zIGVhc2U7XG4gIH1cbi8qIE1lbnUgZG90ICovXG5idXR0b246ZGlzYWJsZWQgPiBkaXYgPiBzcGFuIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5hZnRlclxcXFw6YmctdGhlbWUtMTo6YWZ0ZXIge1xuICBjb250ZW50OiB2YXIoLS10dy1jb250ZW50KTtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0OCwgMTEzLCAxMTMsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0OCwgMTEzLCAxMTMsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5hZnRlclxcXFw6YmctdGhlbWUtMjo6YWZ0ZXIge1xuICBjb250ZW50OiB2YXIoLS10dy1jb250ZW50KTtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MCwgMjA0LCAyMSwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUwLCAyMDQsIDIxLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4uYWZ0ZXJcXFxcOmJnLXRoZW1lLTM6OmFmdGVyIHtcbiAgY29udGVudDogdmFyKC0tdHctY29udGVudCk7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNCwgMTY1LCAyMzMsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0LCAxNjUsIDIzMywgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLmhvdmVyXFxcXDpzY2FsZS0xMTA6aG92ZXIge1xuICAtLXR3LXNjYWxlLXg6IDEuMTtcbiAgLS10dy1zY2FsZS15OiAxLjE7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKDEuMSkgc2NhbGVZKDEuMSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG5cbiAgLm1kXFxcXDpweC0xNCB7XG4gICAgcGFkZGluZy1sZWZ0OiAzLjVyZW07XG4gICAgcGFkZGluZy1yaWdodDogMy41cmVtO1xuICB9XG5cbiAgLm1kXFxcXDp0ZXh0LTJ4bCB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XG4gIH1cblxuICAubWRcXFxcOnRleHQtbGcge1xuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG5cbiAgLnBvcnRyYWl0XFxcXDpoaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5kYXJrXFxcXDpiZy1kYXJrOndoZXJlKC5kYXJrLCAuZGFyayAqKSB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMzksIDQyLCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMzksIDQyLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4uZGFya1xcXFw6YmctbGlnaHQ6d2hlcmUoLmRhcmssIC5kYXJrICopIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5kYXJrXFxcXDpiZy10aGVtZS0yOndoZXJlKC5kYXJrLCAuZGFyayAqKSB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsIDIwNCwgMjEsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MCwgMjA0LCAyMSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLmRhcmtcXFxcOmJnLXRoZW1lLTM6d2hlcmUoLmRhcmssIC5kYXJrICopIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0LCAxNjUsIDIzMywgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQsIDE2NSwgMjMzLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4uZGFya1xcXFw6YmctdHJhbnNwYXJlbnQ6d2hlcmUoLmRhcmssIC5kYXJrICopIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uZGFya1xcXFw6dGV4dC10aGVtZS0yOndoZXJlKC5kYXJrLCAuZGFyayAqKSB7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiYSgyNTAsIDIwNCwgMjEsIDEpO1xuICBjb2xvcjogcmdiYSgyNTAsIDIwNCwgMjEsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuLmRhcmtcXFxcOnRleHQtdGhlbWUtMzp3aGVyZSguZGFyaywgLmRhcmsgKikge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoMTQsIDE2NSwgMjMzLCAxKTtcbiAgY29sb3I6IHJnYmEoMTQsIDE2NSwgMjMzLCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGlEQUFpRDtFQUNqRCx5QkFBeUI7RUFDekIsK0RBQW9FO0FBQ3RFOztBQUVBLGlFQUFjOztBQUFkOzs7Q0FBYzs7QUFBZDs7O0VBQUEsc0JBQWMsRUFBZCxNQUFjO0VBQWQsZUFBYyxFQUFkLE1BQWM7RUFBZCxtQkFBYyxFQUFkLE1BQWM7RUFBZCxxQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7RUFBQSxnQkFBYztBQUFBOztBQUFkOzs7Ozs7OztDQUFjOztBQUFkOztFQUFBLGdCQUFjLEVBQWQsTUFBYztFQUFkLDhCQUFjLEVBQWQsTUFBYztFQUFkLGdCQUFjLEVBQWQsTUFBYztFQUFkLGNBQWM7S0FBZCxXQUFjLEVBQWQsTUFBYztFQUFkLDhMQUFjLEVBQWQsTUFBYztFQUFkLDZCQUFjLEVBQWQsTUFBYztFQUFkLCtCQUFjLEVBQWQsTUFBYztFQUFkLHdDQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDtFQUFBLFNBQWMsRUFBZCxNQUFjO0VBQWQsb0JBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7Ozs7Q0FBYzs7QUFBZDtFQUFBLFNBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7RUFBZCxxQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLDBCQUFjO0VBQWQseUNBQWM7VUFBZCxpQ0FBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOzs7Ozs7RUFBQSxrQkFBYztFQUFkLG9CQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxjQUFjO0VBQWQsd0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxtQkFBYztBQUFBOztBQUFkOzs7OztDQUFjOztBQUFkOzs7O0VBQUEsK0dBQWMsRUFBZCxNQUFjO0VBQWQsNkJBQWMsRUFBZCxNQUFjO0VBQWQsK0JBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGNBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxjQUFjO0VBQWQsY0FBYztFQUFkLGtCQUFjO0VBQWQsd0JBQWM7QUFBQTs7QUFBZDtFQUFBLGVBQWM7QUFBQTs7QUFBZDtFQUFBLFdBQWM7QUFBQTs7QUFBZDs7OztDQUFjOztBQUFkO0VBQUEsY0FBYyxFQUFkLE1BQWM7RUFBZCxxQkFBYyxFQUFkLE1BQWM7RUFBZCx5QkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7OztDQUFjOztBQUFkOzs7OztFQUFBLG9CQUFjLEVBQWQsTUFBYztFQUFkLDhCQUFjLEVBQWQsTUFBYztFQUFkLGdDQUFjLEVBQWQsTUFBYztFQUFkLGVBQWMsRUFBZCxNQUFjO0VBQWQsb0JBQWMsRUFBZCxNQUFjO0VBQWQsb0JBQWMsRUFBZCxNQUFjO0VBQWQsdUJBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7RUFBZCxTQUFjLEVBQWQsTUFBYztFQUFkLFVBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsb0JBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7Ozs7RUFBQSwwQkFBYyxFQUFkLE1BQWM7RUFBZCw2QkFBYyxFQUFkLE1BQWM7RUFBZCxzQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGFBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGdCQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSx3QkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLFlBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSw2QkFBYyxFQUFkLE1BQWM7RUFBZCxvQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLHdCQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkO0VBQUEsMEJBQWMsRUFBZCxNQUFjO0VBQWQsYUFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGtCQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7Ozs7Ozs7Ozs7Ozs7RUFBQSxTQUFjO0FBQUE7O0FBQWQ7RUFBQSxTQUFjO0VBQWQsVUFBYztBQUFBOztBQUFkO0VBQUEsVUFBYztBQUFBOztBQUFkOzs7RUFBQSxnQkFBYztFQUFkLFNBQWM7RUFBZCxVQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxVQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxnQkFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDtFQUFBLFVBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7RUFBQSxV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OztFQUFuQjtJQUFBLDBEQUFtQjtJQUFuQjtFQUFtQjtBQUFBO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxxQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxzQkFBbUI7RUFBbkIsbUNBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CLHFDQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQix3Q0FBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkIsd0NBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CLHVDQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQix1Q0FBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxpQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxxQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxtQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsaUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsbUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQiw2QkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkIsNkJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CLDRCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQiw0QkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFpUGpCOzs7O0lBSUUsZ0NBQWdDO0VBQ2xDO0FBR0U7RUFBQSxzQkFBeUI7RUFBekIsOEtBQXlCO0VBQXpCO0FBQXlCO0FBSXpCO0VBQUEscUJBQW9CO0VBQXBCLDZLQUFvQjtFQUFwQjtBQUFvQjtBQUlwQjtFQUFBLHVCQUEwQjtFQUExQiwrS0FBMEI7RUFBMUI7QUFBMEI7QUFJMUI7RUFBQSx1QkFBMEI7RUFBMUIsK0tBQTBCO0VBQTFCO0FBQTBCO0FBSTFCO0VBQUEsbUJBQWlCO0VBQWpCLHFMQUFpQjtFQUFqQjtBQUFpQjtBQUduQjtJQUNFOzhDQUVvQjtFQUN0QjtBQUVBO0lBQ0UsOEJBQThCO0VBQ2hDO0FBRUEsYUFBYTtBQUVYO0VBQUE7QUFBa0I7QUFoU3RCO0VBQUEsMEJBbVNBO0VBblNBLGtCQW1TQTtFQW5TQSx3Q0FtU0E7RUFuU0E7QUFtU0E7QUFuU0E7RUFBQSwwQkFtU0E7RUFuU0Esa0JBbVNBO0VBblNBLHVDQW1TQTtFQW5TQTtBQW1TQTtBQW5TQTtFQUFBLDBCQW1TQTtFQW5TQSxrQkFtU0E7RUFuU0EsdUNBbVNBO0VBblNBO0FBbVNBO0FBblNBO0VBQUEsaUJBbVNBO0VBblNBLGlCQW1TQTtFQW5TQSxtS0FtU0E7RUFuU0E7QUFtU0E7QUFuU0E7O0VBQUE7SUFBQSxvQkFtU0E7SUFuU0E7RUFtU0E7O0VBblNBO0lBQUEsaUJBbVNBO0lBblNBO0VBbVNBOztFQW5TQTtJQUFBLG1CQW1TQTtJQW5TQTtFQW1TQTtBQUFBO0FBblNBOztFQUFBO0lBQUE7RUFtU0E7QUFBQTtBQW5TQTtFQUFBLGtCQW1TQTtFQW5TQSxxQ0FtU0E7RUFuU0E7QUFtU0E7QUFuU0E7RUFBQSxrQkFtU0E7RUFuU0Esd0NBbVNBO0VBblNBO0FBbVNBO0FBblNBO0VBQUEsa0JBbVNBO0VBblNBLHVDQW1TQTtFQW5TQTtBQW1TQTtBQW5TQTtFQUFBLGtCQW1TQTtFQW5TQSx1Q0FtU0E7RUFuU0E7QUFtU0E7QUFuU0E7RUFBQTtBQW1TQTtBQW5TQTtFQUFBLG9CQW1TQTtFQW5TQSw0QkFtU0E7RUFuU0E7QUFtU0E7QUFuU0E7RUFBQSxvQkFtU0E7RUFuU0EsNEJBbVNBO0VBblNBO0FBbVNBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgLyogaHR0cHM6Ly9mb250cy5nb29nbGUuY29tL3NwZWNpbWVuL01vbnRzZXJyYXQgKi9cXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCI7XFxuICBzcmM6IHVybCguL2ZvbnQvTW9udHNlcnJhdC1WYXJpYWJsZUZvbnRfd2dodC50dGYpIGZvcm1hdChcXFwiVHJ1ZVR5cGVcXFwiKTtcXG59XFxuXFxuQHRhaWx3aW5kIGJhc2U7XFxuQHRhaWx3aW5kIGNvbXBvbmVudHM7XFxuQHRhaWx3aW5kIHV0aWxpdGllcztcXG5cXG5AbGF5ZXIgYmFzZSB7XFxuICAvKiBIaWRlIHNjcm9sbGJhciBmb3IgSUUsIEVkZ2UgYW5kIEZpcmVmb3ggKi9cXG4gIG1haW4sXFxuICBzZWN0aW9uLFxcbiAgLnByb2plY3QtY2FyZC13cmFwcGVyIHtcXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAvKiBJRSBhbmQgRWRnZSAqL1xcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7IC8qIEZpcmVmb3ggKi9cXG4gIH1cXG5cXG4gIC8qIEhpZGUgc2Nyb2xsYmFyIGZvciBDaHJvbWUsIFNhZmFyaSBhbmQgT3BlcmEgKi9cXG4gIG1haW46Oi13ZWJraXQtc2Nyb2xsYmFyLFxcbiAgc2VjdGlvbjo6LXdlYmtpdC1zY3JvbGxiYXIsXFxuICAucHJvamVjdC1jYXJkLXdyYXBwZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgQGFwcGx5IGhpZGRlbjtcXG4gIH1cXG5cXG4gIGJvZHkge1xcbiAgICBAYXBwbHkgYmctbGlnaHQgZGFyazpiZy1kYXJrIHRleHQtZGFyayBkYXJrOnRleHQtbGlnaHQ7XFxuICB9XFxuXFxuICBib2R5ICoge1xcbiAgICBAYXBwbHkgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tNzU7XFxuICB9XFxuXFxuICBoZWFkZXIsXFxuICBmb290ZXIge1xcbiAgICBAYXBwbHkgaC0xNCB3LWZ1bGwgcHgtNyBtZDpweC0xNCBiZy1saWdodCBkYXJrOmJnLWRhcmsgei01MDtcXG4gIH1cXG5cXG4gIGFzaWRlIHtcXG4gICAgQGFwcGx5IGgtW2NhbGMoMTAwdmgtMio1NnB4KV0gbXQtMTQgcGwtWzIwMHB4XTtcXG4gIH1cXG5cXG4gIG1haW4ge1xcbiAgICBAYXBwbHkgaC1bY2FsYygxMDB2aC0yKjU2cHgpXSB3LWZ1bGwgbXQtMTQgb3ZlcmZsb3cteS1zY3JvbGwgc25hcC15IHNjcm9sbC1zbW9vdGg7XFxuICB9XFxuXFxuICBzZWN0aW9uIHtcXG4gICAgQGFwcGx5IGgtW2NhbGMoMTAwdmgtMio1NnB4KV0gcHgtNyBtZDpweC0xNCBzbmFwLWNlbnRlcjtcXG4gIH1cXG5cXG4gIGEge1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNTAwbXMgZWFzZTtcXG4gIH1cXG5cXG4gIGJ1dHRvbjpkaXNhYmxlZCB7XFxuICAgIEBhcHBseSB0ZXh0LWRpc2FibGVkO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIH1cXG59XFxuXFxuQGxheWVyIGNvbXBvbmVudHMge1xcbiAgLm1vbnRzZXJyYXQge1xcbiAgICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LW9wdGljYWwtc2l6aW5nOiBhdXRvO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICB9XFxuXFxuICAudGV4dC1oZWxsbyB7XFxuICAgIEBhcHBseSB0ZXh0LVsxMHZ3XSBwb3J0cmFpdDp0ZXh0LVsxNXZ3XSBsZWFkaW5nLVswLjhdIGZvbnQtZXh0cmFib2xkO1xcbiAgfVxcblxcbiAgLnRleHQtYmlnIHtcXG4gICAgQGFwcGx5IHRleHQtNnhsIG1kOnRleHQtN3hsIGxlYWRpbmctWzAuOF0gZm9udC1leHRyYWJvbGQ7XFxuICB9XFxuXFxuICAudGV4dC1kaXNhYmxlZCB7XFxuICAgIEBhcHBseSB0ZXh0LXppbmMtNDAwIGRhcms6dGV4dC16aW5jLTUwMDtcXG4gIH1cXG5cXG4gIC5idG4tZGFyay1tb2RlIHtcXG4gICAgQGFwcGx5IGgtNSBtZDpoLTYgYXNwZWN0LVsyXSByb3VuZGVkLW1kIHNoYWRvdy1pbm5lcjtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciA1MDBtcyBlYXNlO1xcbiAgfVxcblxcbiAgLmJ0bi1kYXJrLW1vZGUudGhlbWUtMTpob3ZlciB7XFxuICAgIEBhcHBseSBiZy10aGVtZS0xO1xcbiAgfVxcblxcbiAgLmJ0bi1kYXJrLW1vZGUudGhlbWUtMjpob3ZlciB7XFxuICAgIEBhcHBseSBiZy10aGVtZS0yO1xcbiAgfVxcblxcbiAgLmJ0bi1kYXJrLW1vZGUudGhlbWUtMzpob3ZlciB7XFxuICAgIEBhcHBseSBiZy10aGVtZS0zO1xcbiAgfVxcblxcbiAgLmRhcmstbW9kZS1iYWxsIHtcXG4gICAgQGFwcGx5IGgtW2NhbGMoMTAwJS00cHgpXSBhc3BlY3Qtc3F1YXJlIG14LTAuNSBiZy1saWdodCBkYXJrOmJnLWRhcmsgcm91bmRlZC1tZDtcXG4gIH1cXG5cXG4gIC5kYXJrLW1vZGUtYmFsbCB7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA3NTBtcyBlYXNlO1xcbiAgfVxcblxcbiAgLmRhcmstbW9kZS1iYWxsLmRhcmsge1xcbiAgICBAYXBwbHkgdHJhbnNsYXRlLXgtW2NhbGMoMTAwJSs0cHgpXTtcXG4gIH1cXG5cXG4gIC5pY29uLW1vZGUtZGFyayxcXG4gIC5pY29uLW1vZGUge1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDc1bXMgZWFzZTtcXG4gIH1cXG5cXG4gIC5pY29uLW1vZGUtZGFyayB7XFxuICAgIEBhcHBseSBvcGFjaXR5LTAgZGFyazpvcGFjaXR5LTEwMCBhYnNvbHV0ZTtcXG4gIH1cXG5cXG4gIC5pY29uLW1vZGUge1xcbiAgICBAYXBwbHkgb3BhY2l0eS0xMDAgZGFyazpvcGFjaXR5LTAgYWJzb2x1dGU7XFxuICB9XFxuXFxuICAuaWNvbi1hYm91dC10b29sLFxcbiAgLmljb24tY29udGFjdC1saW5rIHtcXG4gICAgQGFwcGx5IGgtWzMwcHhdIHNtOmgtWzQwcHhdIHRleHQtWzMwcHhdIHNtOnRleHQtWzQwcHhdIGFzcGVjdC1zcXVhcmU7XFxuICB9XFxuXFxuICAuaWNvbi1uZXh0IHtcXG4gICAgQGFwcGx5IGgtWzcwcHhdIGFzcGVjdC1zcXVhcmU7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA1MDBtcyBlYXNlO1xcbiAgfVxcblxcbiAgYnV0dG9uOmhvdmVyIC5pY29uLW5leHQge1xcbiAgICBAYXBwbHkgc2NhbGUtMTEwO1xcbiAgfVxcblxcbiAgLmJ0bi1taW5pLXRhYiB7XFxuICAgIEBhcHBseSBoLTMgYXNwZWN0LVs0XSBib3JkZXIgYm9yZGVyLWxpZ2h0IGRhcms6Ym9yZGVyLXRoZW1lLTMgcm91bmRlZC1tZDtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciA1MDBtcyBlYXNlO1xcbiAgfVxcblxcbiAgLmJ0bi1taW5pLXRhYi5hY3RpdmUge1xcbiAgICBAYXBwbHkgYmctbGlnaHQgZGFyazpiZy10aGVtZS0zO1xcbiAgfVxcblxcbiAgLnByb2plY3QtY2FyZC1vdXRlci13cmFwcGVyIHtcXG4gICAgQGFwcGx5IHctWzYwJV0gcC00IGJnLWxpZ2h0IGRhcms6YmctdHJhbnNwYXJlbnQgYm9yZGVyIGRhcms6Ym9yZGVyLXRoZW1lLTMgcm91bmRlZC1tZCByZWxhdGl2ZTtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LWNhcmQtd3JhcHBlciB7XFxuICAgIEBhcHBseSBmbGV4IGdhcC00IG92ZXJmbG93LXgtc2Nyb2xsIHNuYXAteCBzY3JvbGwtc21vb3RoIHJlbGF0aXZlO1xcbiAgfVxcblxcbiAgLnByb2plY3QtY2FyZCB7XFxuICAgIEBhcHBseSBtaW4tdy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHNuYXAtY2VudGVyIHJlbGF0aXZlO1xcbiAgfVxcblxcbiAgLnByb2plY3QtY2FyZC1pbWFnZSB7XFxuICAgIEBhcHBseSByb3VuZGVkLW1kIG9wYWNpdHktNTA7XFxuICB9XFxuXFxuICAucHJvamVjdC1jYXJkLWluZGV4IHtcXG4gICAgQGFwcGx5IHRleHQtOHhsIGxlYWRpbmctWzAuOF0gZm9udC1leHRyYWJvbGQgYWJzb2x1dGUgdG9wLTAgbGVmdC0wO1xcbiAgfVxcblxcbiAgLnByb2plY3QtY2FyZC1uYW1lIHtcXG4gICAgQGFwcGx5IHctZnVsbCB0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC1jZW50ZXIgYWJzb2x1dGUgdG9wLTEvMiAtdHJhbnNsYXRlLXktMS8yO1xcbiAgfVxcblxcbiAgLnByb2plY3QtY2FyZC10eXBlIHtcXG4gICAgQGFwcGx5IHctZnVsbCBmb250LWJvbGQgdGV4dC1jZW50ZXIgYWJzb2x1dGUgdG9wLTMvNCAtdHJhbnNsYXRlLXktMS8yO1xcbiAgfVxcblxcbiAgLnByb2plY3QtY2FyZC1leHBhbmQge1xcbiAgICBAYXBwbHkgaC1bNTBweF0gYXNwZWN0LXNxdWFyZSBiZy1kYXJrIGRhcms6YmctbGlnaHQgYmctb3BhY2l0eS01MCBvcGFjaXR5LTUwIGFic29sdXRlIHRvcC00IHJpZ2h0LTQ7XFxuICB9XFxuXFxuICAuYnRuLXByb2plY3QtY2FyZC1uZXh0IHtcXG4gICAgQGFwcGx5IGgtMTQgYXNwZWN0LXNxdWFyZSBiZy1kYXJrIGRhcms6YmctbGlnaHQgYmctb3BhY2l0eS01MCAtcm90YXRlLTkwIG9wYWNpdHktNTAgYWJzb2x1dGUgdG9wLVtjYWxjKDUwJS0yOHB4KV0gcmlnaHQtNDtcXG4gIH1cXG5cXG4gIC5idG4tcHJvamVjdC1jYXJkLXByZXYge1xcbiAgICBAYXBwbHkgaC0xNCBhc3BlY3Qtc3F1YXJlIGJnLWRhcmsgZGFyazpiZy1saWdodCBiZy1vcGFjaXR5LTUwIHJvdGF0ZS05MCBvcGFjaXR5LTUwIGFic29sdXRlIHRvcC1bY2FsYyg1MCUtMjhweCldIGxlZnQtNDtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LWNhcmQtaW1hZ2UsXFxuICAucHJvamVjdC1jYXJkID4gZGl2LFxcbiAgLnByb2plY3QtY2FyZC1leHBhbmQsXFxuICAuYnRuLXByb2plY3QtY2FyZC1uZXh0LFxcbiAgLmJ0bi1wcm9qZWN0LWNhcmQtcHJldiB7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgNTAwbXMgZWFzZTtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LWNhcmQtd3JhcHBlcjpob3ZlciAucHJvamVjdC1jYXJkLWltYWdlLFxcbiAgLnByb2plY3QtY2FyZC1vdXRlci13cmFwcGVyOmhvdmVyIC5wcm9qZWN0LWNhcmQtZXhwYW5kOmhvdmVyLFxcbiAgLmJ0bi1wcm9qZWN0LWNhcmQtbmV4dDpob3ZlcixcXG4gIC5idG4tcHJvamVjdC1jYXJkLXByZXY6aG92ZXIge1xcbiAgICBAYXBwbHkgb3BhY2l0eS0xMDA7XFxuICB9XFxuXFxuICAucHJvamVjdC1jYXJkLXdyYXBwZXI6aG92ZXIgLnByb2plY3QtY2FyZC1pbmRleCB7XFxuICAgIEBhcHBseSBvcGFjaXR5LTUwO1xcbiAgfVxcblxcbiAgLnByb2plY3QtY2FyZC13cmFwcGVyOmhvdmVyIC5wcm9qZWN0LWNhcmQtbmFtZSxcXG4gIC5wcm9qZWN0LWNhcmQtd3JhcHBlcjpob3ZlciAucHJvamVjdC1jYXJkLXR5cGUge1xcbiAgICBAYXBwbHkgb3BhY2l0eS0wO1xcbiAgfVxcblxcbiAgLnVuZGVybGluZS1oLFxcbiAgLmhpZ2hsaWdodC1oIHtcXG4gICAgQGFwcGx5IHJlbGF0aXZlO1xcbiAgfVxcblxcbiAgLnVuZGVybGluZS1oOmFmdGVyIHtcXG4gICAgQGFwcGx5IGgtMC41IHctMCBiZy1kYXJrIGRhcms6YmctbGlnaHQgcm91bmRlZC1mdWxsIGFic29sdXRlIGxlZnQtMCBib3R0b20tMC41O1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgdHJhbnNpdGlvbjogd2lkdGggNTAwbXMgZWFzZTtcXG4gIH1cXG5cXG4gIGJ1dHRvbjpob3ZlciAudW5kZXJsaW5lLWg6YWZ0ZXIge1xcbiAgICBAYXBwbHkgdy1mdWxsO1xcbiAgfVxcblxcbiAgLmhpZ2hsaWdodC1oOmFmdGVyIHtcXG4gICAgQGFwcGx5IGgtWzUwJV0gdy0wIG9wYWNpdHktODAgYWJzb2x1dGUgdG9wLVsyNSVdIGxlZnQtWy0xNXB4XSAtei0xMDtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHRyYW5zaXRpb246IHdpZHRoIDUwMG1zIGVhc2U7XFxuICB9XFxuXFxuICBidXR0b246aG92ZXIgLmhpZ2hsaWdodC1oOmFmdGVyIHtcXG4gICAgQGFwcGx5IHctW2NhbGMoMTAwJSszMHB4KV07XFxuICB9XFxuXFxuICAuYWJvdXQtc3BhbiB7XFxuICAgIEBhcHBseSB0ZXh0LWxpZ2h0IGRhcms6dGV4dC10aGVtZS0yO1xcbiAgfVxcblxcbiAgLnRvb2w6aG92ZXIgLmljb24tYWJvdXQtdG9vbCB7XFxuICAgIEBhcHBseSBibG9jaztcXG4gIH1cXG5cXG4gIC8qIEFuaW1hdGlvbiAqL1xcbiAgW2NsYXNzXj1cXFwiYW5pbWF0ZS1cXFwiXSB7XFxuICAgIHdpbGwtY2hhbmdlOiBhbmltYXRpb247XFxuICB9XFxufVxcblxcbkBsYXllciB1dGlsaXRpZXMge1xcbiAgYXNpZGUsXFxuICAjYnRuLW1lbnUtbCxcXG4gICNidG4tbWVudS1sLWNsb3NlLFxcbiAgI2J0bi1tZW51LWwtY2xvc2UgPiBkaXYge1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNTAwbXMgZWFzZTtcXG4gIH1cXG5cXG4gIG1haW4ubW92ZSB7XFxuICAgIEBhcHBseSB0cmFuc2xhdGUteC1bNDB2d107XFxuICB9XFxuXFxuICBhc2lkZS5tb3ZlIHtcXG4gICAgQGFwcGx5IHRyYW5zbGF0ZS14LTA7XFxuICB9XFxuXFxuICAjYnRuLW1lbnUtbC5zaG93IHtcXG4gICAgQGFwcGx5IHRyYW5zbGF0ZS15LVsyMDBweF07XFxuICB9XFxuXFxuICAjYnRuLW1lbnUtbC1jbG9zZS5zaG93IHtcXG4gICAgQGFwcGx5IHRyYW5zbGF0ZS14LVsyMDBweF07XFxuICB9XFxuXFxuICAjYnRuLW1lbnUtbC1jbG9zZTpob3ZlciA+IGRpdiB7XFxuICAgIEBhcHBseSByb3RhdGUtMTgwO1xcbiAgfVxcblxcbiAgbWFpbiB7XFxuICAgIHRyYW5zaXRpb246XFxuICAgICAgdHJhbnNmb3JtIDUwMG1zIGVhc2UsXFxuICAgICAgb3BhY2l0eSA1MDBtcyBlYXNlO1xcbiAgfVxcblxcbiAgI2FydGljbGUtYWJvdXQge1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDUwMG1zIGVhc2U7XFxuICB9XFxuXFxuICAvKiBNZW51IGRvdCAqL1xcbiAgYnV0dG9uOmRpc2FibGVkID4gZGl2ID4gc3BhbiB7XFxuICAgIEBhcHBseSBvcGFjaXR5LTEwMDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBjYXJvdXNlbCA9ICgoKSA9PiB7XG4gIGNvbnN0IGJ0blByb2plY3ROZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tcHJvamVjdC1jYXJkLW5leHRcIik7XG4gIGNvbnN0IGJ0blByb2plY3RQcmV2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tcHJvamVjdC1jYXJkLXByZXZcIik7XG5cbiAgY29uc3QgcHJvamVjdENhcmRXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWNhcmQtd3JhcHBlclwiKTtcbiAgY29uc3QgYnRuTWluaVRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ0bi1taW5pLXRhYlwiKTtcblxuICBjb25zdCBwcm9qZWN0Q2FyZDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtY2FyZC0xXCIpO1xuICBjb25zdCBwcm9qZWN0Q2FyZDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtY2FyZC0yXCIpO1xuXG4gIGNvbnN0IGdhcCA9IDE2O1xuICBsZXQgc2Nyb2xsV2lkdGhQcm9qZWN0Q2FyZDEgPSAwO1xuICBsZXQgc2Nyb2xsV2lkdGhQcm9qZWN0Q2FyZDIgPSAwO1xuXG4gIGxldCBpID0gMTtcblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIGdldFNjcm9sbFdpZHRoUHJvamVjdENhcmQoKTtcblxuICAgIGJ0blByb2plY3ROZXh0Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjYnRuLW1pbmktdGFiLSR7aX1gKS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgaWYgKGkgPT09IDMpIGkgPSAxO1xuICAgICAgZWxzZSBpICs9IDE7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcHJvamVjdC1jYXJkLSR7aX1gKS5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2J0bi1taW5pLXRhYi0ke2l9YCkuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICB9O1xuXG4gICAgYnRuUHJvamVjdFByZXYub25jbGljayA9ICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNidG4tbWluaS10YWItJHtpfWApLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICBpZiAoaSA9PT0gMSkgaSA9IDM7XG4gICAgICBlbHNlIGkgLT0gMTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwcm9qZWN0LWNhcmQtJHtpfWApLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjYnRuLW1pbmktdGFiLSR7aX1gKS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIH07XG5cbiAgICBwcm9qZWN0Q2FyZFdyYXBwZXIub25zY3JvbGxlbmQgPSAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjYnRuLW1pbmktdGFiLSR7aX1gKS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgY29uc3Qgc2Nyb2xsID0gcHJvamVjdENhcmRXcmFwcGVyLnNjcm9sbExlZnQ7XG4gICAgICBpZiAoc2Nyb2xsID49IDAgJiYgc2Nyb2xsIDwgc2Nyb2xsV2lkdGhQcm9qZWN0Q2FyZDEpIGkgPSAxO1xuICAgICAgZWxzZSBpZiAoXG4gICAgICAgIHNjcm9sbCA+PSBzY3JvbGxXaWR0aFByb2plY3RDYXJkMSAmJlxuICAgICAgICBzY3JvbGwgPCBzY3JvbGxXaWR0aFByb2plY3RDYXJkMlxuICAgICAgKVxuICAgICAgICBpID0gMjtcbiAgICAgIGVsc2UgaSA9IDM7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjYnRuLW1pbmktdGFiLSR7aX1gKS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIH07XG5cbiAgICBidG5NaW5pVGFicy5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgIGJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjYnRuLW1pbmktdGFiLSR7aX1gKS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgICBpID0gYnRuLmlkLnNsaWNlKC0xKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Byb2plY3QtY2FyZC0ke2l9YCkuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2J0bi1taW5pLXRhYi0ke2l9YCkuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTY3JvbGxXaWR0aFByb2plY3RDYXJkKCkge1xuICAgIHNjcm9sbFdpZHRoUHJvamVjdENhcmQxID0gcHJvamVjdENhcmQxLmNsaWVudFdpZHRoICsgZ2FwO1xuICAgIHNjcm9sbFdpZHRoUHJvamVjdENhcmQyID1cbiAgICAgIHByb2plY3RDYXJkMi5jbGllbnRXaWR0aCArIGdhcCArIHNjcm9sbFdpZHRoUHJvamVjdENhcmQxO1xuICB9XG5cbiAgcmV0dXJuIHsgaW5pdCwgZ2V0U2Nyb2xsV2lkdGhQcm9qZWN0Q2FyZCB9O1xufSkoKTtcblxuZXhwb3J0IHsgY2Fyb3VzZWwgfTtcbiIsImNvbnN0IGRhcmtNb2RlID0gKCgpID0+IHtcbiAgY29uc3QgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnRuLWRhcmstbW9kZVwiKTtcbiAgY29uc3QgYmFsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRhcmstbW9kZS1iYWxsXCIpO1xuICBjb25zdCBodG1sID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgX2RldGVjdERhcmtNb2RlKCk7XG4gICAgYnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgIGJ0bi5vbmNsaWNrID0gX3RvZ2dsZTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9kZXRlY3REYXJrTW9kZSgpIHtcbiAgICBpZiAoQm9vbGVhbihsb2NhbFN0b3JhZ2UudGhlbWUpKSB7XG4gICAgICBpZiAobG9jYWxTdG9yYWdlLnRoZW1lID09PSBcImRhcmtcIikge1xuICAgICAgICBfdG9nZ2xlKCk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgd2luZG93Lm1hdGNoTWVkaWEgJiZcbiAgICAgIHdpbmRvdy5tYXRjaE1lZGlhKFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiKS5tYXRjaGVzXG4gICAgKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIFwiZGFya1wiKTtcbiAgICAgIF90b2dnbGUoKTtcbiAgICB9IGVsc2UgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCBcImxpZ2h0XCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gX3RvZ2dsZSgpIHtcbiAgICBodG1sLmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrXCIpO1xuICAgIGJhbGxzLmZvckVhY2goKGJhbGwpID0+IHtcbiAgICAgIGJhbGwuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmtcIik7XG4gICAgfSk7XG5cbiAgICBpZiAoIWh0bWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGFya1wiKSlcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgXCJsaWdodFwiKTtcbiAgICBlbHNlIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgXCJkYXJrXCIpO1xuICB9XG5cbiAgcmV0dXJuIHsgaW5pdCB9O1xufSkoKTtcblxuZXhwb3J0IHsgZGFya01vZGUgfTtcbiIsImltcG9ydCBmYXZpY29uMzJ3IGZyb20gXCIuLi9pbWcvaWNvbnMvZmF2aWNvbi0zMncucG5nXCI7XG5pbXBvcnQgbWVudTUwdyBmcm9tIFwiLi4vaW1nL2ljb25zL21lbnUtNTB3LnBuZ1wiO1xuaW1wb3J0IG1lbnVXNTB3IGZyb20gXCIuLi9pbWcvaWNvbnMvbWVudS13LTUwdy5wbmdcIjtcbmltcG9ydCBjbG9zZTUwdyBmcm9tIFwiLi4vaW1nL2ljb25zL2Nsb3NlLTUwdy5wbmdcIjtcbmltcG9ydCBjbG9zZVc1MHcgZnJvbSBcIi4uL2ltZy9pY29ucy9jbG9zZS13LTUwdy5wbmdcIjtcbmltcG9ydCBjaGV2cm9uMTAwdyBmcm9tIFwiLi4vaW1nL2ljb25zL2NoZXZyb24tMTAwdy5wbmdcIjtcbmltcG9ydCBjaGV2cm9uVzEwMHcgZnJvbSBcIi4uL2ltZy9pY29ucy9jaGV2cm9uLXctMTAwdy5wbmdcIjtcbmltcG9ydCBwcm9maWxlMTAwMHcgZnJvbSBcIi4uL2ltZy9wcm9maWxlLTEwMDB3LmpwZ1wiO1xuaW1wb3J0IHlwZXQgZnJvbSBcIi4uL2ltZy9wcm9qZWN0cy95cGV0LnBuZ1wiO1xuaW1wb3J0IHdlYXRoZXJBcHAgZnJvbSBcIi4uL2ltZy9wcm9qZWN0cy93ZWF0aGVyLnBuZ1wiO1xuaW1wb3J0IGhvbWVwYWdlIGZyb20gXCIuLi9pbWcvcHJvamVjdHMvaG9tZXBhZ2UucG5nXCI7XG5pbXBvcnQgZXhwYW5kMTAwdyBmcm9tIFwiLi4vaW1nL2ljb25zL2V4cGFuZC0xMDB3LnBuZ1wiO1xuaW1wb3J0IGV4cGFuZFcxMDB3IGZyb20gXCIuLi9pbWcvaWNvbnMvZXhwYW5kLXctMTAwdy5wbmdcIjtcblxuY29uc3QgaW1nTmV4dERhcmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmltZy1uZXh0LWRhcmtcIik7XG5jb25zdCBpbWdOZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbWctbmV4dFwiKTtcblxuaW1nTmV4dERhcmsuZm9yRWFjaCgoaW1nKSA9PiB7XG4gIGltZy5zcmMgPSBjaGV2cm9uVzEwMHc7XG59KTtcblxuaW1nTmV4dC5mb3JFYWNoKChpbWcpID0+IHtcbiAgaW1nLnNyYyA9IGNoZXZyb24xMDB3O1xufSk7XG4iLCJjb25zdCBtZW51ID0gKCgpID0+IHtcbiAgY29uc3QgYnRuTWVudUwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1tZW51LWxcIik7XG4gIGNvbnN0IGJ0bk1lbnVMQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1tZW51LWwtY2xvc2VcIik7XG5cbiAgY29uc3QgYXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYXNpZGVcIik7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcblxuICBjb25zdCBidG5Ib21lTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLWhvbWUtbFwiKTtcbiAgY29uc3QgYnRuQWJvdXRMID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tYWJvdXQtbFwiKTtcbiAgY29uc3QgYnRuQWJvdXRNb3JlTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLWFib3V0LW1vcmUtbFwiKTtcbiAgY29uc3QgYnRuUHJvamVjdHNMID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tcHJvamVjdHMtbFwiKTtcblxuICBjb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNob21lXCIpO1xuICBjb25zdCBhYm91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWJvdXRcIik7XG4gIGNvbnN0IGFydGljbGVBYm91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXJ0aWNsZS1hYm91dFwiKTtcbiAgY29uc3QgYXJ0aWNsZUFib3V0TW9yZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXJ0aWNsZS1hYm91dC1tb3JlXCIpO1xuICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHNcIik7XG5cbiAgbGV0IGlzT3BlbkFib3V0TW9yZSA9IDA7XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBfaW5pdEJ0bk1lbnVMKCk7XG4gICAgX2luaXRCdG5OYXZMKCk7XG4gICAgX2luaXRCdG5BYm91dE1vcmVMKCk7XG5cbiAgICAvLyBGb3IgdGVzdGluZ1xuICAgIGJ0bk1lbnVMLmNsaWNrKCk7XG4gICAgYnRuUHJvamVjdHNMLmNsaWNrKCk7XG4gIH1cblxuICBmdW5jdGlvbiBfaW5pdEJ0bkFib3V0TW9yZUwoKSB7XG4gICAgYnRuQWJvdXRNb3JlTC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgaWYgKGlzT3BlbkFib3V0TW9yZSA9PT0gMSkge1xuICAgICAgICBhcnRpY2xlQWJvdXQuY2xhc3NMaXN0LnRvZ2dsZShcIm9wYWNpdHktNTBcIik7XG4gICAgICAgIGFib3V0LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICBidG5BYm91dE1vcmVMLnF1ZXJ5U2VsZWN0b3IoXCJkaXZcIikudGV4dENvbnRlbnQgPSBcIk1PUkVcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFydGljbGVBYm91dC5jbGFzc0xpc3QudG9nZ2xlKFwib3BhY2l0eS01MFwiKTtcbiAgICAgICAgYWJvdXQuc2Nyb2xsVG8oYXJ0aWNsZUFib3V0LmNsaWVudFdpZHRoICsgMSwgMCk7XG4gICAgICAgIGJ0bkFib3V0TW9yZUwucXVlcnlTZWxlY3RvcihcImRpdlwiKS50ZXh0Q29udGVudCA9IFwiQkFDS1wiO1xuICAgICAgfVxuICAgICAgYnRuQWJvdXRNb3JlTC5jbGFzc0xpc3QudG9nZ2xlKFwiYW5pbWF0ZS1jaGV2cm9uLXJpZ2h0XCIpO1xuICAgICAgYnRuQWJvdXRNb3JlTC5jbGFzc0xpc3QudG9nZ2xlKFwiYW5pbWF0ZS1jaGV2cm9uLWxlZnRcIik7XG4gICAgICBpc09wZW5BYm91dE1vcmUgPSArIWlzT3BlbkFib3V0TW9yZTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gX2luaXRCdG5NZW51TCgpIHtcbiAgICBidG5NZW51TC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgbWFpbi5jbGFzc0xpc3QudG9nZ2xlKFwib3BhY2l0eS01MFwiKTtcbiAgICAgIF90b2dnbGVNZW51TCgpO1xuICAgIH07XG5cbiAgICBidG5NZW51TENsb3NlLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBtYWluLmNsYXNzTGlzdC50b2dnbGUoXCJvcGFjaXR5LTUwXCIpO1xuICAgICAgX3RvZ2dsZU1lbnVMKCk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF90b2dnbGVNZW51TCgpIHtcbiAgICBidG5NZW51TC5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcbiAgICBidG5NZW51TENsb3NlLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xuICAgIGFzaWRlLmNsYXNzTGlzdC50b2dnbGUoXCJtb3ZlXCIpO1xuICAgIG1haW4uY2xhc3NMaXN0LnRvZ2dsZShcIm1vdmVcIik7XG4gIH1cblxuICBmdW5jdGlvbiBfaW5pdEJ0bk5hdkwoKSB7XG4gICAgYnRuSG9tZUwub25jbGljayA9ICgpID0+IHtcbiAgICAgIGJ0bk1lbnVMQ2xvc2UuY2xpY2soKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBob21lLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICB9LCA1MDApO1xuICAgIH07XG5cbiAgICBidG5BYm91dEwub25jbGljayA9ICgpID0+IHtcbiAgICAgIGJ0bk1lbnVMQ2xvc2UuY2xpY2soKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBhYm91dC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgfSwgNTAwKTtcbiAgICB9O1xuXG4gICAgYnRuUHJvamVjdHNMLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBidG5NZW51TENsb3NlLmNsaWNrKCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcHJvamVjdHMuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgIH0sIDUwMCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7IGluaXQgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IG1lbnUgfTtcbiIsImNvbnN0IHNjcm9sbCA9ICgoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaG9tZVwiKTtcbiAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Fib3V0XCIpO1xuXG4gIGNvbnN0IGJ0bkRhcmtNb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5idG4tZGFyay1tb2RlXCIpO1xuICBjb25zdCBzcGFuTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudS10ZXh0ID4gc3BhblwiKTtcbiAgY29uc3Qgc3BhbkNvbnRhY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3QtdGV4dCA+IHNwYW5cIik7XG5cbiAgY29uc3QgYnRuc01lbnVMID0gW1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLWhvbWUtbFwiKSxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1hYm91dC1sXCIpLFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLXByb2plY3RzLWxcIiksXG4gIF07XG5cbiAgY29uc3QgbWFyZ2luVG9wID0gNTY7XG4gIGxldCBzY3JvbGxIZWlnaHRIb21lID0gMDtcbiAgbGV0IHNjcm9sbEhlaWdodEFib3V0ID0gMDtcbiAgbGV0IGN1cnJlbnRUaGVtZSA9IDE7XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBnZXRTY3JvbGxIZWlnaHRTZWN0aW9uKCk7XG5cbiAgICBtYWluLm9uc2Nyb2xsZW5kID0gKCkgPT4ge1xuICAgICAgY29uc3Qgc2Nyb2xsID0gbWFpbi5zY3JvbGxUb3A7XG4gICAgICBpZiAoc2Nyb2xsID49IDAgJiYgc2Nyb2xsIDwgc2Nyb2xsSGVpZ2h0SG9tZSkge1xuICAgICAgICBfY2hhbmdlVGhlbWUoMSk7XG4gICAgICAgIF9kaXNhYmxlQnRuKDEpO1xuICAgICAgfSBlbHNlIGlmIChzY3JvbGwgPj0gc2Nyb2xsSGVpZ2h0SG9tZSAmJiBzY3JvbGwgPCBzY3JvbGxIZWlnaHRBYm91dCkge1xuICAgICAgICBfY2hhbmdlVGhlbWUoMik7XG4gICAgICAgIF9kaXNhYmxlQnRuKDIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX2NoYW5nZVRoZW1lKDMpO1xuICAgICAgICBfZGlzYWJsZUJ0bigzKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U2Nyb2xsSGVpZ2h0U2VjdGlvbigpIHtcbiAgICBzY3JvbGxIZWlnaHRIb21lID0gaG9tZS5jbGllbnRIZWlnaHQgKyBtYXJnaW5Ub3A7XG4gICAgc2Nyb2xsSGVpZ2h0QWJvdXQgPSBhYm91dC5jbGllbnRIZWlnaHQgKyBtYXJnaW5Ub3AgKyBzY3JvbGxIZWlnaHRIb21lO1xuICB9XG5cbiAgZnVuY3Rpb24gX2NoYW5nZVRoZW1lKHRoZW1lKSB7XG4gICAgc3Bhbk1lbnUuY2xhc3NMaXN0LnJlbW92ZShgdGV4dC10aGVtZS0ke2N1cnJlbnRUaGVtZX1gKTtcbiAgICBzcGFuQ29udGFjdC5jbGFzc0xpc3QucmVtb3ZlKGB0ZXh0LXRoZW1lLSR7Y3VycmVudFRoZW1lfWApO1xuXG4gICAgYnRuRGFya01vZGUuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZShgdGhlbWUtJHtjdXJyZW50VGhlbWV9YCk7XG4gICAgICBidG4uY2xhc3NMaXN0LmFkZChgdGhlbWUtJHt0aGVtZX1gKTtcbiAgICB9KTtcblxuICAgIHNwYW5NZW51LmNsYXNzTGlzdC5hZGQoYHRleHQtdGhlbWUtJHt0aGVtZX1gKTtcbiAgICBzcGFuQ29udGFjdC5jbGFzc0xpc3QuYWRkKGB0ZXh0LXRoZW1lLSR7dGhlbWV9YCk7XG5cbiAgICBjdXJyZW50VGhlbWUgPSB0aGVtZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9kaXNhYmxlQnRuKG4pIHtcbiAgICBjb25zdCBpbmRleCA9IG4gLSAxO1xuICAgIGNvbnN0IGxlbmd0aCA9IGJ0bnNNZW51TC5sZW5ndGg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGkgPT09IGluZGV4KSBidG5zTWVudUxbaV0uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgZWxzZSBidG5zTWVudUxbaV0uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBpbml0LCBnZXRTY3JvbGxIZWlnaHRTZWN0aW9uIH07XG59KSgpO1xuXG5leHBvcnQgeyBzY3JvbGwgfTtcbiIsImltcG9ydCB7IHNjcm9sbCB9IGZyb20gXCIuL3Njcm9sbFwiO1xuaW1wb3J0IHsgY2Fyb3VzZWwgfSBmcm9tIFwiLi9jYXJvdXNlbFwiO1xuXG5jb25zdCB3aW5kb3dSZXNpemUgPSAoKCkgPT4ge1xuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIHdpbmRvdy5vbnJlc2l6ZSA9ICgpID0+IHtcbiAgICAgIHNjcm9sbC5nZXRTY3JvbGxIZWlnaHRTZWN0aW9uKCk7XG4gICAgICBjYXJvdXNlbC5nZXRTY3JvbGxXaWR0aFByb2plY3RDYXJkKCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7IGluaXQgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHdpbmRvd1Jlc2l6ZSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgXCIuL2pzL2ltYWdlXCI7XG5pbXBvcnQgeyBkYXJrTW9kZSB9IGZyb20gXCIuL2pzL2RhcmstbW9kZVwiO1xuaW1wb3J0IHsgbWVudSB9IGZyb20gXCIuL2pzL21lbnVcIjtcbmltcG9ydCB7IHNjcm9sbCB9IGZyb20gXCIuL2pzL3Njcm9sbFwiO1xuaW1wb3J0IHsgY2Fyb3VzZWwgfSBmcm9tIFwiLi9qcy9jYXJvdXNlbFwiO1xuaW1wb3J0IHsgd2luZG93UmVzaXplIH0gZnJvbSBcIi4vanMvd2luZG93LXJlc2l6ZVwiO1xuXG5kYXJrTW9kZS5pbml0KCk7XG5tZW51LmluaXQoKTtcbnNjcm9sbC5pbml0KCk7XG5jYXJvdXNlbC5pbml0KCk7XG53aW5kb3dSZXNpemUuaW5pdCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9