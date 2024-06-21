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

h1 {
  font-size: 1.25rem;
  line-height: 1.75rem;
}

@media (min-width: 768px) {

  h1 {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
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
.btn-mini-tab:hover {
  background-color: rgba(241, 245, 249, 0.5);
  background-color: rgba(241, 245, 249, var(--tw-bg-opacity));
  --tw-bg-opacity: 0.5;
}
.btn-mini-tab:where(.dark, .dark *) {
  --tw-border-opacity: 1;
  border-color: rgba(14, 165, 233, 1);
  border-color: rgba(14, 165, 233, var(--tw-border-opacity));
}
.btn-mini-tab:where(.dark, .dark *):hover {
  background-color: rgba(14, 165, 233, 0.5);
  background-color: rgba(14, 165, 233, var(--tw-bg-opacity));
  --tw-bg-opacity: 0.5;
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
  overflow-y: hidden;
  border-radius: 0.375rem;
  border-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgba(241, 245, 249, 1);
  border-color: rgba(241, 245, 249, var(--tw-border-opacity));
  padding: 1rem;
}
.project-card-outer-wrapper:where(.dark, .dark *) {
  --tw-border-opacity: 1;
  border-color: rgba(14, 165, 233, 1);
  border-color: rgba(14, 165, 233, var(--tw-border-opacity));
}
.project-card-wrapper {
  position: relative;
  display: flex;
  scroll-snap-type: x var(--tw-scroll-snap-strictness);
  gap: 1rem;
  overflow-x: scroll;
  scroll-behavior: smooth;
  border-radius: 0.375rem;
  --tw-bg-opacity: 1;
  background-color: rgba(241, 245, 249, 1);
  background-color: rgba(241, 245, 249, var(--tw-bg-opacity));
}
.project-card-wrapper:where(.dark, .dark *) {
  --tw-bg-opacity: 1;
  background-color: rgba(39, 39, 42, 1);
  background-color: rgba(39, 39, 42, var(--tw-bg-opacity));
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
  top: 66.666667%;
  width: 100%;
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), -50%) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  text-align: center;
  font-weight: 700;
}
.project-card-link-wrapper {
  position: absolute;
  bottom: 0px;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  gap: 1.25rem;
  border-bottom-right-radius: 0.375rem;
  border-bottom-left-radius: 0.375rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-weight: 600;
  opacity: 0.5;
    transition:
      background-color 500ms ease, opacity 500ms ease;
}
.project-card-link-wrapper > a:hover {
  --tw-scale-x: 1.1;
  --tw-scale-y: 1.1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(1.1) scaleY(1.1);
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.project-card-link-wrapper > a {
    transition: transform 500ms ease;
  }
.project-card-wrapper:hover .project-card-link-wrapper {
  background-color: rgba(39, 39, 42, 0.25);
  background-color: rgba(39, 39, 42, var(--tw-bg-opacity));
  --tw-bg-opacity: 0.25;
  opacity: 1;
}
.project-card-wrapper:hover .project-card-link-wrapper:where(.dark, .dark *) {
  --tw-bg-opacity: 0.5;
}
.img-open-wrapper {
  position: relative;
  aspect-ratio: 1 / 1;
  height: 20px;
}
.project-card-expand {
  position: absolute;
  bottom: 0px;
  left: 50%;
  --tw-translate-x: -50%;
  transform: translate(-50%, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
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
  .project-card-index,
  .project-card-name,
  .project-card-type,
  .btn-project-card-next,
  .btn-project-card-prev {
    transition: opacity 500ms ease;
  }
.project-card-info:hover .project-card-image,
  .btn-project-card-next:hover,
  .btn-project-card-prev:hover {
  opacity: 1;
}
.project-card-wrapper:hover .project-card-index {
  opacity: 0.5;
}
.project-card-info:hover .project-card-name,
  .project-card-info:hover .project-card-type {
  opacity: 0;
}
.project-detail {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.5rem;
  opacity: 0;
    transition: opacity 1s 1s ease;
}
.project-detail.active {
  opacity: 1;
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
.bottom-5 {
  bottom: 1.25rem;
}
.left-1\\/2 {
  left: 50%;
}
.left-4 {
  left: 1rem;
}
.left-\\[-120px\\] {
  left: -120px;
}
.left-\\[-156px\\] {
  left: -156px;
}
.left-\\[calc\\(50\\%-20px\\)\\] {
  left: calc(50% - 20px);
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
.top-full {
  top: 100%;
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
.hidden {
  display: none;
}
.aspect-square {
  aspect-ratio: 1 / 1;
}
.h-1 {
  height: 0.25rem;
}
.h-10 {
  height: 2.5rem;
}
.h-\\[calc\\(100\\%-32px\\)\\] {
  height: calc(100% - 32px);
}
.h-\\[calc\\(20vw\\*0\\.8\\)\\] {
  height: calc(20vw * 0.8);
}
.h-full {
  height: 100%;
}
.w-\\[168px\\] {
  width: 168px;
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
.w-\\[calc\\(100\\%-32px\\)\\] {
  width: calc(100% - 32px);
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
@keyframes shrink-width {

  0 {
    width: 100%;
  }

  100% {
    width: 0;
  }
}
.animate-shrink-width {
  animation: shrink-width 10s linear infinite;
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
.rounded-md {
  border-radius: 0.375rem;
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
.bg-opacity-90 {
  --tw-bg-opacity: 0.9;
}
.p-8 {
  padding: 2rem;
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
  #btn-menu-l-close > div,
  #btn-project-detail-close {
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
#project-card-detail-wrapper {
    transition: transform 1s ease;
  }
#project-card-detail-wrapper.active {
  --tw-translate-y: calc(-100% - 16px);
  transform: translate(var(--tw-translate-x), calc(-100% - 16px)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
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
.hover\\:rotate-180:hover {
  --tw-rotate: 180deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(180deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
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
.dark\\:bg-opacity-90:where(.dark, .dark *) {
  --tw-bg-opacity: 0.9;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  /* https://fonts.google.com/specimen/Montserrat */\n  font-family: \"Montserrat\";\n  src: url(./font/Montserrat-VariableFont_wght.ttf) format(\"TrueType\");\n}\n\n@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n@layer base {\n  /* Hide scrollbar for IE, Edge and Firefox */\n  main,\n  section,\n  .project-card-wrapper {\n    -ms-overflow-style: none; /* IE and Edge */\n    scrollbar-width: none; /* Firefox */\n  }\n\n  /* Hide scrollbar for Chrome, Safari and Opera */\n  main::-webkit-scrollbar,\n  section::-webkit-scrollbar,\n  .project-card-wrapper::-webkit-scrollbar {\n    @apply hidden;\n  }\n\n  body {\n    @apply bg-light dark:bg-dark text-dark dark:text-light;\n  }\n\n  body * {\n    @apply transition-colors duration-75;\n  }\n\n  header,\n  footer {\n    @apply h-14 w-full px-7 md:px-14 bg-light dark:bg-dark z-50;\n  }\n\n  aside {\n    @apply h-[calc(100vh-2*56px)] mt-14 pl-[200px];\n  }\n\n  main {\n    @apply h-[calc(100vh-2*56px)] w-full mt-14 overflow-y-scroll snap-y scroll-smooth;\n  }\n\n  section {\n    @apply h-[calc(100vh-2*56px)] px-7 md:px-14 snap-center;\n  }\n\n  a {\n    transition: transform 500ms ease;\n  }\n\n  button:disabled {\n    @apply text-disabled;\n    pointer-events: none;\n  }\n\n  h1 {\n    @apply text-xl md:text-3xl;\n  }\n}\n\n@layer components {\n  .montserrat {\n    font-family: \"Montserrat\", sans-serif;\n    font-optical-sizing: auto;\n    font-style: normal;\n  }\n\n  .text-hello {\n    @apply text-[10vw] portrait:text-[15vw] leading-[0.8] font-extrabold;\n  }\n\n  .text-big {\n    @apply text-6xl md:text-7xl leading-[0.8] font-extrabold;\n  }\n\n  .text-disabled {\n    @apply text-zinc-400 dark:text-zinc-500;\n  }\n\n  .btn-dark-mode {\n    @apply h-5 md:h-6 aspect-[2] rounded-md shadow-inner;\n    transition: background-color 500ms ease;\n  }\n\n  .btn-dark-mode.theme-1:hover {\n    @apply bg-theme-1;\n  }\n\n  .btn-dark-mode.theme-2:hover {\n    @apply bg-theme-2;\n  }\n\n  .btn-dark-mode.theme-3:hover {\n    @apply bg-theme-3;\n  }\n\n  .dark-mode-ball {\n    @apply h-[calc(100%-4px)] aspect-square mx-0.5 bg-light dark:bg-dark rounded-md;\n  }\n\n  .dark-mode-ball {\n    transition: transform 750ms ease;\n  }\n\n  .dark-mode-ball.dark {\n    @apply translate-x-[calc(100%+4px)];\n  }\n\n  .icon-mode-dark,\n  .icon-mode {\n    transition: opacity 75ms ease;\n  }\n\n  .icon-mode-dark {\n    @apply opacity-0 dark:opacity-100 absolute;\n  }\n\n  .icon-mode {\n    @apply opacity-100 dark:opacity-0 absolute;\n  }\n\n  .icon-about-tool,\n  .icon-contact-link {\n    @apply h-[30px] sm:h-[40px] text-[30px] sm:text-[40px] aspect-square;\n  }\n\n  .icon-next {\n    @apply h-[70px] aspect-square;\n    transition: transform 500ms ease;\n  }\n\n  button:hover .icon-next {\n    @apply scale-110;\n  }\n\n  .btn-mini-tab {\n    @apply h-3 aspect-[4] border border-light dark:border-theme-3 hover:bg-light hover:dark:bg-theme-3 hover:bg-opacity-50 hover:dark:bg-opacity-50 rounded-md;\n    transition: background-color 500ms ease;\n  }\n\n  .btn-mini-tab.active {\n    @apply bg-light dark:bg-theme-3;\n  }\n\n  .project-card-outer-wrapper {\n    @apply w-[60%] p-4 border border-light dark:border-theme-3 rounded-md relative overflow-y-hidden;\n  }\n\n  .project-card-wrapper {\n    @apply bg-light dark:bg-dark rounded-md flex gap-4 overflow-x-scroll snap-x scroll-smooth relative;\n  }\n\n  .project-card {\n    @apply min-w-full flex justify-center items-center snap-center relative;\n  }\n\n  .project-card-image {\n    @apply rounded-md opacity-50;\n  }\n\n  .project-card-index {\n    @apply text-8xl leading-[0.8] font-extrabold absolute top-0 left-0;\n  }\n\n  .project-card-name {\n    @apply w-full text-4xl font-bold text-center absolute top-1/2 -translate-y-1/2;\n  }\n\n  .project-card-type {\n    @apply w-full font-bold text-center absolute top-2/3 -translate-y-1/2;\n  }\n\n  .project-card-link-wrapper {\n    @apply w-full px-4 py-2 font-semibold rounded-b-md flex justify-end gap-5 absolute bottom-0 opacity-50;\n    transition:\n      background-color 500ms ease,\n      opacity 500ms ease;\n  }\n\n  .project-card-link-wrapper > a {\n    @apply hover:scale-110;\n    transition: transform 500ms ease;\n  }\n\n  .project-card-wrapper:hover .project-card-link-wrapper {\n    @apply bg-dark bg-opacity-25 dark:bg-opacity-50 opacity-100;\n  }\n\n  .img-open-wrapper {\n    @apply h-[20px] aspect-square relative;\n  }\n\n  .project-card-expand {\n    @apply px-4 py-2 absolute bottom-0 left-1/2 -translate-x-1/2;\n  }\n\n  .btn-project-card-next {\n    @apply h-14 aspect-square bg-dark dark:bg-light bg-opacity-50 -rotate-90 opacity-50 absolute top-[calc(50%-28px)] right-4;\n  }\n\n  .btn-project-card-prev {\n    @apply h-14 aspect-square bg-dark dark:bg-light bg-opacity-50 rotate-90 opacity-50 absolute top-[calc(50%-28px)] left-4;\n  }\n\n  .project-card-image,\n  .project-card-index,\n  .project-card-name,\n  .project-card-type,\n  .btn-project-card-next,\n  .btn-project-card-prev {\n    transition: opacity 500ms ease;\n  }\n\n  .project-card-info:hover .project-card-image,\n  .btn-project-card-next:hover,\n  .btn-project-card-prev:hover {\n    @apply opacity-100;\n  }\n\n  .project-card-wrapper:hover .project-card-index {\n    @apply opacity-50;\n  }\n\n  .project-card-info:hover .project-card-name,\n  .project-card-info:hover .project-card-type {\n    @apply opacity-0;\n  }\n\n  .project-detail {\n    @apply flex flex-col justify-center gap-10 opacity-0;\n    transition: opacity 1s 1s ease;\n  }\n\n  .project-detail.active {\n    @apply opacity-100;\n  }\n\n  .underline-h,\n  .highlight-h {\n    @apply relative;\n  }\n\n  .underline-h:after {\n    @apply h-0.5 w-0 bg-dark dark:bg-light rounded-full absolute left-0 bottom-0.5;\n    content: \"\";\n    transition: width 500ms ease;\n  }\n\n  button:hover .underline-h:after {\n    @apply w-full;\n  }\n\n  .highlight-h:after {\n    @apply h-[50%] w-0 opacity-80 absolute top-[25%] left-[-15px] -z-10;\n    content: \"\";\n    transition: width 500ms ease;\n  }\n\n  button:hover .highlight-h:after {\n    @apply w-[calc(100%+30px)];\n  }\n\n  .about-span {\n    @apply text-light dark:text-theme-2;\n  }\n\n  .tool:hover .icon-about-tool {\n    @apply block;\n  }\n\n  /* Animation */\n  [class^=\"animate-\"] {\n    will-change: animation;\n  }\n}\n\n@layer utilities {\n  aside,\n  #btn-menu-l,\n  #btn-menu-l-close,\n  #btn-menu-l-close > div,\n  #btn-project-detail-close {\n    transition: transform 500ms ease;\n  }\n\n  main.move {\n    @apply translate-x-[40vw];\n  }\n\n  aside.move {\n    @apply translate-x-0;\n  }\n\n  #btn-menu-l.show {\n    @apply translate-y-[200px];\n  }\n\n  #btn-menu-l-close.show {\n    @apply translate-x-[200px];\n  }\n\n  #btn-menu-l-close:hover > div {\n    @apply rotate-180;\n  }\n\n  main {\n    transition:\n      transform 500ms ease,\n      opacity 500ms ease;\n  }\n\n  #article-about {\n    transition: opacity 500ms ease;\n  }\n\n  #project-card-detail-wrapper {\n    transition: transform 1s ease;\n  }\n\n  #project-card-detail-wrapper.active {\n    @apply translate-y-[calc(-100%-16px)];\n  }\n\n  /* Menu dot */\n  button:disabled > div > span {\n    @apply opacity-100;\n  }\n}\n"],"sourceRoot":""}]);
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
      if (i === 3) {
        projectCardWrapper.scrollTo(0, 0);
        i = 1;
      } else {
        projectCardWrapper.scrollBy(scrollWidthProjectCard1, 0);
        i += 1;
      }
      document.querySelector(`#btn-mini-tab-${i}`).classList.toggle("active");
    };

    btnProjectPrev.onclick = () => {
      document.querySelector(`#btn-mini-tab-${i}`).classList.toggle("active");
      if (i === 1) {
        projectCardWrapper.scrollTo(scrollWidthProjectCard2 + 1, 0);
        i = 3;
      } else {
        projectCardWrapper.scrollBy(-scrollWidthProjectCard1, 0);
        i -= 1;
      }
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
        i = +btn.id.slice(-1);
        if (i === 1) projectCardWrapper.scrollTo(0, 0);
        else if (i === 2)
          projectCardWrapper.scrollTo(scrollWidthProjectCard1 + 1, 0);
        else projectCardWrapper.scrollTo(scrollWidthProjectCard2 + 1, 0);
        document.querySelector(`#btn-mini-tab-${i}`).classList.toggle("active");
      };
    });

    setInterval(() => {
      btnProjectNext.click();
    }, 10000);
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
/* harmony import */ var _img_icons_open_50w_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/icons/open-50w.png */ "./src/img/icons/open-50w.png");
/* harmony import */ var _img_icons_open_w_50w_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/icons/open-w-50w.png */ "./src/img/icons/open-w-50w.png");
/* harmony import */ var _img_profile_1000w_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/profile-1000w.jpg */ "./src/img/profile-1000w.jpg");
/* harmony import */ var _img_projects_ypet_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/projects/ypet.png */ "./src/img/projects/ypet.png");
/* harmony import */ var _img_projects_weather_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/projects/weather.png */ "./src/img/projects/weather.png");
/* harmony import */ var _img_projects_homepage_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../img/projects/homepage.png */ "./src/img/projects/homepage.png");














const imgNextDark = document.querySelectorAll(".img-next-dark");
const imgNext = document.querySelectorAll(".img-next");
const imgOpenDark = document.querySelectorAll(".img-open-dark");
const imgOpen = document.querySelectorAll(".img-open");

imgNextDark.forEach((img) => {
  img.src = _img_icons_chevron_w_100w_png__WEBPACK_IMPORTED_MODULE_6__;
});

imgNext.forEach((img) => {
  img.src = _img_icons_chevron_100w_png__WEBPACK_IMPORTED_MODULE_5__;
});

imgOpenDark.forEach((img) => {
  img.src = _img_icons_open_w_50w_png__WEBPACK_IMPORTED_MODULE_8__;
});

imgOpen.forEach((img) => {
  img.src = _img_icons_open_50w_png__WEBPACK_IMPORTED_MODULE_7__;
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
/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scroll */ "./src/js/scroll.js");


const menu = (() => {
  const btnMenuL = document.querySelector("#btn-menu-l");
  const btnMenuLClose = document.querySelector("#btn-menu-l-close");

  const aside = document.querySelector("aside");
  const main = document.querySelector("main");

  const btnHomeL = document.querySelector("#btn-home-l");
  const btnAboutL = document.querySelector("#btn-about-l");
  const btnAboutMoreL = document.querySelector("#btn-about-more-l");
  const btnProjectsL = document.querySelector("#btn-projects-l");

  const about = document.querySelector("#about");
  const articleAbout = document.querySelector("#article-about");

  const btnsProjectCardExpand = document.querySelectorAll(
    ".project-card-expand",
  );
  const btnProjectDetailClose = document.querySelector(
    "#btn-project-detail-close",
  );

  const projectCardDetailWrapper = document.querySelector(
    "#project-card-detail-wrapper",
  );

  let isOpenAboutMore = 0;
  let isOpenProjectCard = 0;
  let activeProjectCard = 0;

  function init() {
    _initBtnMenuL();
    _initBtnNavL();
    _initBtnAboutMoreL();
    _initBtnProjectCardExpands();

    // For testing
    btnMenuL.click();
    btnProjectsL.click();
  }

  function _initBtnProjectCardExpands() {
    btnsProjectCardExpand.forEach((btn) => {
      btn.onclick = () => {
        projectCardDetailWrapper.classList.toggle("active");
        activeProjectCard = +btn.id.slice(-1);

        const projectDetail = document.querySelector(
          `#project-detail-${activeProjectCard}`,
        );
        if (isOpenProjectCard === 1)
          setTimeout(() => {
            projectDetail.classList.toggle("active");
            projectDetail.classList.toggle("hidden");
          }, 1000);
        else {
          projectDetail.classList.toggle("hidden");
          requestAnimationFrame(() => {
            projectDetail.classList.toggle("active");
          });
        }

        isOpenProjectCard = 1;
      };
    });

    btnProjectDetailClose.onclick = () => {
      document
        .querySelector(`#btn-project-card-expand-${activeProjectCard}`)
        .click();
      isOpenProjectCard = 0;
    };
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
        main.scrollTo(0, 0);
      }, 500);
    };

    btnAboutL.onclick = () => {
      btnMenuLClose.click();
      setTimeout(() => {
        _scroll__WEBPACK_IMPORTED_MODULE_0__.scroll.scrollTo(1);
      }, 500);
    };

    btnProjectsL.onclick = () => {
      btnMenuLClose.click();
      setTimeout(() => {
        _scroll__WEBPACK_IMPORTED_MODULE_0__.scroll.scrollTo(2);
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

  function scrollTo(section) {
    if (section === 1) main.scrollTo(0, scrollHeightHome + 1);
    else if (section === 2) main.scrollTo(0, scrollHeightAbout + 1);
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

  return { init, getScrollHeightSection, scrollTo };
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

/***/ "./src/img/icons/open-50w.png":
/*!************************************!*\
  !*** ./src/img/icons/open-50w.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e875fb0a158ceec2b831.png";

/***/ }),

/***/ "./src/img/icons/open-w-50w.png":
/*!**************************************!*\
  !*** ./src/img/icons/open-w-50w.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ef74e2761c3898237855.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjO0FBQ2Qsa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Qsa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQiwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QiwyQkFBMkI7QUFDM0I7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxPQUFPLE1BQU0sT0FBTyxxQkFBcUIsb0JBQW9CLHFCQUFxQixxQkFBcUIsTUFBTSxNQUFNLFdBQVcsTUFBTSxZQUFZLE1BQU0sTUFBTSxxQkFBcUIscUJBQXFCLHFCQUFxQixVQUFVLG9CQUFvQixxQkFBcUIscUJBQXFCLHFCQUFxQixxQkFBcUIsTUFBTSxPQUFPLE1BQU0sS0FBSyxvQkFBb0IscUJBQXFCLE1BQU0sUUFBUSxNQUFNLEtBQUssb0JBQW9CLG9CQUFvQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxTQUFTLE1BQU0sUUFBUSxxQkFBcUIscUJBQXFCLHFCQUFxQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLFFBQVEsTUFBTSxLQUFLLG9CQUFvQixxQkFBcUIscUJBQXFCLE1BQU0sUUFBUSxNQUFNLFNBQVMscUJBQXFCLHFCQUFxQixxQkFBcUIsb0JBQW9CLHFCQUFxQixxQkFBcUIscUJBQXFCLG9CQUFvQixvQkFBb0Isb0JBQW9CLE1BQU0sTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE9BQU8sTUFBTSxRQUFRLHFCQUFxQixxQkFBcUIscUJBQXFCLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE9BQU8sTUFBTSxLQUFLLHFCQUFxQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sT0FBTyxNQUFNLEtBQUsscUJBQXFCLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0saUJBQWlCLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE9BQU8sV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE9BQU8sTUFBTSxLQUFLLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLFFBQVEsTUFBTSxZQUFZLG9CQUFvQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxZQUFZLEtBQUssVUFBVSxNQUFNLFlBQVksT0FBTyxzQkFBc0IscUJBQXFCLE1BQU0sWUFBWSxPQUFPLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLEtBQUssTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLE1BQU0sTUFBTSxXQUFXLEtBQUssS0FBSyxNQUFNLE1BQU0sV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLE1BQU0sS0FBSyxXQUFXLEtBQUssS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLEtBQUssTUFBTSxNQUFNLEtBQUssV0FBVyxLQUFLLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLE1BQU0sWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFdBQVcsYUFBYSxNQUFNLE1BQU0sT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxNQUFNLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLE9BQU8sWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxPQUFPLFlBQVksWUFBWSxNQUFNLE1BQU0sT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLEtBQUssTUFBTSxZQUFZLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLE1BQU0sV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksWUFBWSxhQUFhLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLFlBQVksWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLFlBQVksWUFBWSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxZQUFZLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxZQUFZLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLFlBQVksWUFBWSxZQUFZLGFBQWEsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFlBQVksT0FBTyxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksWUFBWSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxZQUFZLGFBQWEsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLFlBQVksYUFBYSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sV0FBVyxZQUFZLE1BQU0sT0FBTyxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sT0FBTyxLQUFLLE1BQU0sTUFBTSxXQUFXLGFBQWEsYUFBYSxZQUFZLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE9BQU8sS0FBSyxLQUFLLEtBQUssWUFBWSxZQUFZLGFBQWEsYUFBYSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxVQUFVLFlBQVksTUFBTSxLQUFLLEtBQUssS0FBSyxLQUFLLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksV0FBVyxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sT0FBTyxLQUFLLFlBQVksTUFBTSxPQUFPLE1BQU0sWUFBWSxNQUFNLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxPQUFPLEtBQUssWUFBWSxNQUFNLE9BQU8sTUFBTSxZQUFZLE1BQU0sTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLE9BQU8sS0FBSyxZQUFZLE1BQU0sT0FBTyxNQUFNLFlBQVksTUFBTSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLE9BQU8sS0FBSyxZQUFZLE1BQU0sT0FBTyxNQUFNLFlBQVksTUFBTSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0s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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNEO0FBQ3NCO0FBQ1Q7QUFDSTtBQUNJO0FBQ1M7O0FBRWxELG1EQUFRO0FBQ1IsMENBQUk7QUFDSiw4Q0FBTTtBQUNOLGtEQUFRO0FBQ1IsMkRBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvc3R5bGUuY3NzPzkwMTEiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvanMvY2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2pzL2RhcmstbW9kZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvanMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2pzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2pzL3Njcm9sbC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvanMvd2luZG93LXJlc2l6ZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250L01vbnRzZXJyYXQtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgLyogaHR0cHM6Ly9mb250cy5nb29nbGUuY29tL3NwZWNpbWVuL01vbnRzZXJyYXQgKi9cbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoXCJUcnVlVHlwZVwiKTtcbn1cblxuLyogISB0YWlsd2luZGNzcyB2My40LjQgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tICovXG5cbi8qXG4xLiBQcmV2ZW50IHBhZGRpbmcgYW5kIGJvcmRlciBmcm9tIGFmZmVjdGluZyBlbGVtZW50IHdpZHRoLiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy80KVxuMi4gQWxsb3cgYWRkaW5nIGEgYm9yZGVyIHRvIGFuIGVsZW1lbnQgYnkganVzdCBhZGRpbmcgYSBib3JkZXItd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3MvcHVsbC8xMTYpXG4qL1xuXG4qLFxuOjpiZWZvcmUsXG46OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xuICBib3JkZXItd2lkdGg6IDA7IC8qIDIgKi9cbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDsgLyogMiAqL1xuICBib3JkZXItY29sb3I6ICNlNWU3ZWI7IC8qIDIgKi9cbn1cblxuOjpiZWZvcmUsXG46OmFmdGVyIHtcbiAgLS10dy1jb250ZW50OiAnJztcbn1cblxuLypcbjEuIFVzZSBhIGNvbnNpc3RlbnQgc2Vuc2libGUgbGluZS1oZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxuMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXG4zLiBVc2UgYSBtb3JlIHJlYWRhYmxlIHRhYiBzaXplLlxuNC4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBzYW5zXFxgIGZvbnQtZmFtaWx5IGJ5IGRlZmF1bHQuXG41LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYHNhbnNcXGAgZm9udC1mZWF0dXJlLXNldHRpbmdzIGJ5IGRlZmF1bHQuXG42LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYHNhbnNcXGAgZm9udC12YXJpYXRpb24tc2V0dGluZ3MgYnkgZGVmYXVsdC5cbjcuIERpc2FibGUgdGFwIGhpZ2hsaWdodHMgb24gaU9TXG4qL1xuXG5odG1sLFxuOmhvc3Qge1xuICBsaW5lLWhlaWdodDogMS41OyAvKiAxICovXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xuICAtbW96LXRhYi1zaXplOiA0OyAvKiAzICovXG4gIC1vLXRhYi1zaXplOiA0O1xuICAgICB0YWItc2l6ZTogNDsgLyogMyAqL1xuICBmb250LWZhbWlseTogdWktc2Fucy1zZXJpZiwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBTZWdvZSBVSSwgUm9ib3RvLCBVYnVudHUsIENhbnRhcmVsbCwgTm90byBTYW5zLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgXCJOb3RvIENvbG9yIEVtb2ppXCI7IC8qIDQgKi9cbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBub3JtYWw7IC8qIDUgKi9cbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IG5vcm1hbDsgLyogNiAqL1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiA3ICovXG59XG5cbi8qXG4xLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXG4yLiBJbmhlcml0IGxpbmUtaGVpZ2h0IGZyb20gXFxgaHRtbFxcYCBzbyB1c2VycyBjYW4gc2V0IHRoZW0gYXMgYSBjbGFzcyBkaXJlY3RseSBvbiB0aGUgXFxgaHRtbFxcYCBlbGVtZW50LlxuKi9cblxuYm9keSB7XG4gIG1hcmdpbjogMDsgLyogMSAqL1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgLyogMiAqL1xufVxuXG4vKlxuMS4gQWRkIHRoZSBjb3JyZWN0IGhlaWdodCBpbiBGaXJlZm94LlxuMi4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2Ugb2YgYm9yZGVyIGNvbG9yIGluIEZpcmVmb3guIChodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTA2NTUpXG4zLiBFbnN1cmUgaG9yaXpvbnRhbCBydWxlcyBhcmUgdmlzaWJsZSBieSBkZWZhdWx0LlxuKi9cblxuaHIge1xuICBoZWlnaHQ6IDA7IC8qIDEgKi9cbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4OyAvKiAzICovXG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cbiovXG5cbmFiYnI6d2hlcmUoW3RpdGxlXSkge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xufVxuXG4vKlxuUmVtb3ZlIHRoZSBkZWZhdWx0IGZvbnQgc2l6ZSBhbmQgd2VpZ2h0IGZvciBoZWFkaW5ncy5cbiovXG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG59XG5cbi8qXG5SZXNldCBsaW5rcyB0byBvcHRpbWl6ZSBmb3Igb3B0LWluIHN0eWxpbmcgaW5zdGVhZCBvZiBvcHQtb3V0LlxuKi9cblxuYSB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gRWRnZSBhbmQgU2FmYXJpLlxuKi9cblxuYixcbnN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi8qXG4xLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYG1vbm9cXGAgZm9udC1mYW1pbHkgYnkgZGVmYXVsdC5cbjIuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgbW9ub1xcYCBmb250LWZlYXR1cmUtc2V0dGluZ3MgYnkgZGVmYXVsdC5cbjMuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgbW9ub1xcYCBmb250LXZhcmlhdGlvbi1zZXR0aW5ncyBieSBkZWZhdWx0LlxuNC4gQ29ycmVjdCB0aGUgb2RkIFxcYGVtXFxgIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cbiovXG5cbmNvZGUsXG5rYmQsXG5zYW1wLFxucHJlIHtcbiAgZm9udC1mYW1pbHk6IHVpLW1vbm9zcGFjZSwgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcIkxpYmVyYXRpb24gTW9ub1wiLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTsgLyogMSAqL1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IG5vcm1hbDsgLyogMiAqL1xuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogbm9ybWFsOyAvKiAzICovXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiA0ICovXG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiovXG5cbnNtYWxsIHtcbiAgZm9udC1zaXplOiA4MCU7XG59XG5cbi8qXG5QcmV2ZW50IFxcYHN1YlxcYCBhbmQgXFxgc3VwXFxgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXG4qL1xuXG5zdWIsXG5zdXAge1xuICBmb250LXNpemU6IDc1JTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG5zdWIge1xuICBib3R0b206IC0wLjI1ZW07XG59XG5cbnN1cCB7XG4gIHRvcDogLTAuNWVtO1xufVxuXG4vKlxuMS4gUmVtb3ZlIHRleHQgaW5kZW50YXRpb24gZnJvbSB0YWJsZSBjb250ZW50cyBpbiBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTk5OTA4OCwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIwMTI5NylcbjIuIENvcnJlY3QgdGFibGUgYm9yZGVyIGNvbG9yIGluaGVyaXRhbmNlIGluIGFsbCBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTkzNTcyOSwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE5NTAxNilcbjMuIFJlbW92ZSBnYXBzIGJldHdlZW4gdGFibGUgYm9yZGVycyBieSBkZWZhdWx0LlxuKi9cblxudGFibGUge1xuICB0ZXh0LWluZGVudDogMDsgLyogMSAqL1xuICBib3JkZXItY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgLyogMyAqL1xufVxuXG4vKlxuMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXG4yLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXG4zLiBSZW1vdmUgZGVmYXVsdCBwYWRkaW5nIGluIGFsbCBicm93c2Vycy5cbiovXG5cbmJ1dHRvbixcbmlucHV0LFxub3B0Z3JvdXAsXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogaW5oZXJpdDsgLyogMSAqL1xuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogaW5oZXJpdDsgLyogMSAqL1xuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7IC8qIDEgKi9cbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IC8qIDEgKi9cbiAgbGV0dGVyLXNwYWNpbmc6IGluaGVyaXQ7IC8qIDEgKi9cbiAgY29sb3I6IGluaGVyaXQ7IC8qIDEgKi9cbiAgbWFyZ2luOiAwOyAvKiAyICovXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cbn1cblxuLypcblJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSBhbmQgRmlyZWZveC5cbiovXG5cbmJ1dHRvbixcbnNlbGVjdCB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4vKlxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cbjIuIFJlbW92ZSBkZWZhdWx0IGJ1dHRvbiBzdHlsZXMuXG4qL1xuXG5idXR0b24sXG5pbnB1dDp3aGVyZShbdHlwZT0nYnV0dG9uJ10pLFxuaW5wdXQ6d2hlcmUoW3R5cGU9J3Jlc2V0J10pLFxuaW5wdXQ6d2hlcmUoW3R5cGU9J3N1Ym1pdCddKSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiAyICovXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7IC8qIDIgKi9cbn1cblxuLypcblVzZSB0aGUgbW9kZXJuIEZpcmVmb3ggZm9jdXMgc3R5bGUgZm9yIGFsbCBmb2N1c2FibGUgZWxlbWVudHMuXG4qL1xuXG46LW1vei1mb2N1c3Jpbmcge1xuICBvdXRsaW5lOiBhdXRvO1xufVxuXG4vKlxuUmVtb3ZlIHRoZSBhZGRpdGlvbmFsIFxcYDppbnZhbGlkXFxgIHN0eWxlcyBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvZ2Vja28tZGV2L2Jsb2IvMmY5ZWFjZDlkM2Q5OTVjOTM3YjQyNTFhNTU1N2Q5NWQ0OTRjOWJlMS9sYXlvdXQvc3R5bGUvcmVzL2Zvcm1zLmNzcyNMNzI4LUw3MzcpXG4qL1xuXG46LW1vei11aS1pbnZhbGlkIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLypcbkFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lIGFuZCBGaXJlZm94LlxuKi9cblxucHJvZ3Jlc3Mge1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbi8qXG5Db3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBTYWZhcmkuXG4qL1xuXG46Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG46Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qXG4xLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cbjIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxuKi9cblxuW3R5cGU9J3NlYXJjaCddIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cbn1cblxuLypcblJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cbiovXG5cbjo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLypcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4yLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIFxcYGluaGVyaXRcXGAgaW4gU2FmYXJpLlxuKi9cblxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cbn1cblxuLypcbkFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIENocm9tZSBhbmQgU2FmYXJpLlxuKi9cblxuc3VtbWFyeSB7XG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcbn1cblxuLypcblJlbW92ZXMgdGhlIGRlZmF1bHQgc3BhY2luZyBhbmQgYm9yZGVyIGZvciBhcHByb3ByaWF0ZSBlbGVtZW50cy5cbiovXG5cbmJsb2NrcXVvdGUsXG5kbCxcbmRkLFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxuaHIsXG5maWd1cmUsXG5wLFxucHJlIHtcbiAgbWFyZ2luOiAwO1xufVxuXG5maWVsZHNldCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxubGVnZW5kIHtcbiAgcGFkZGluZzogMDtcbn1cblxub2wsXG51bCxcbm1lbnUge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi8qXG5SZXNldCBkZWZhdWx0IHN0eWxpbmcgZm9yIGRpYWxvZ3MuXG4qL1xuXG5kaWFsb2cge1xuICBwYWRkaW5nOiAwO1xufVxuXG4vKlxuUHJldmVudCByZXNpemluZyB0ZXh0YXJlYXMgaG9yaXpvbnRhbGx5IGJ5IGRlZmF1bHQuXG4qL1xuXG50ZXh0YXJlYSB7XG4gIHJlc2l6ZTogdmVydGljYWw7XG59XG5cbi8qXG4xLiBSZXNldCB0aGUgZGVmYXVsdCBwbGFjZWhvbGRlciBvcGFjaXR5IGluIEZpcmVmb3guIChodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRsYWJzL3RhaWx3aW5kY3NzL2lzc3Vlcy8zMzAwKVxuMi4gU2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIGNvbG9yIHRvIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBncmF5IDQwMCBjb2xvci5cbiovXG5cbmlucHV0OjotbW96LXBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cbiAgY29sb3I6ICM5Y2EzYWY7IC8qIDIgKi9cbn1cblxuaW5wdXQ6OnBsYWNlaG9sZGVyLFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMTsgLyogMSAqL1xuICBjb2xvcjogIzljYTNhZjsgLyogMiAqL1xufVxuXG4vKlxuU2V0IHRoZSBkZWZhdWx0IGN1cnNvciBmb3IgYnV0dG9ucy5cbiovXG5cbmJ1dHRvbixcbltyb2xlPVwiYnV0dG9uXCJdIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKlxuTWFrZSBzdXJlIGRpc2FibGVkIGJ1dHRvbnMgZG9uJ3QgZ2V0IHRoZSBwb2ludGVyIGN1cnNvci5cbiovXG5cbjpkaXNhYmxlZCB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLypcbjEuIE1ha2UgcmVwbGFjZWQgZWxlbWVudHMgXFxgZGlzcGxheTogYmxvY2tcXGAgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTQpXG4yLiBBZGQgXFxgdmVydGljYWwtYWxpZ246IG1pZGRsZVxcYCB0byBhbGlnbiByZXBsYWNlZCBlbGVtZW50cyBtb3JlIHNlbnNpYmx5IGJ5IGRlZmF1bHQuIChodHRwczovL2dpdGh1Yi5jb20vamVuc2ltbW9ucy9jc3NyZW1lZHkvaXNzdWVzLzE0I2lzc3VlY29tbWVudC02MzQ5MzQyMTApXG4gICBUaGlzIGNhbiB0cmlnZ2VyIGEgcG9vcmx5IGNvbnNpZGVyZWQgbGludCBlcnJvciBpbiBzb21lIHRvb2xzIGJ1dCBpcyBpbmNsdWRlZCBieSBkZXNpZ24uXG4qL1xuXG5pbWcsXG5zdmcsXG52aWRlbyxcbmNhbnZhcyxcbmF1ZGlvLFxuaWZyYW1lLFxuZW1iZWQsXG5vYmplY3Qge1xuICBkaXNwbGF5OiBibG9jazsgLyogMSAqL1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAvKiAyICovXG59XG5cbi8qXG5Db25zdHJhaW4gaW1hZ2VzIGFuZCB2aWRlb3MgdG8gdGhlIHBhcmVudCB3aWR0aCBhbmQgcHJlc2VydmUgdGhlaXIgaW50cmluc2ljIGFzcGVjdCByYXRpby4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTQpXG4qL1xuXG5pbWcsXG52aWRlbyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vKiBNYWtlIGVsZW1lbnRzIHdpdGggdGhlIEhUTUwgaGlkZGVuIGF0dHJpYnV0ZSBzdGF5IGhpZGRlbiBieSBkZWZhdWx0ICovXG5cbltoaWRkZW5dIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogSGlkZSBzY3JvbGxiYXIgZm9yIElFLCBFZGdlIGFuZCBGaXJlZm94ICovXG5cbm1haW4sXG4gIHNlY3Rpb24sXG4gIC5wcm9qZWN0LWNhcmQtd3JhcHBlciB7XG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAvKiBJRSBhbmQgRWRnZSAqL1xuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTsgLyogRmlyZWZveCAqL1xuICB9XG5cbi8qIEhpZGUgc2Nyb2xsYmFyIGZvciBDaHJvbWUsIFNhZmFyaSBhbmQgT3BlcmEgKi9cblxubWFpbjo6LXdlYmtpdC1zY3JvbGxiYXIsXG4gIHNlY3Rpb246Oi13ZWJraXQtc2Nyb2xsYmFyLFxuICAucHJvamVjdC1jYXJkLXdyYXBwZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuYm9keSB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiYSgzOSwgMzksIDQyLCAxKTtcbiAgY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG5cbmJvZHk6d2hlcmUoLmRhcmssIC5kYXJrICopIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIDEpO1xuICBjb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cblxuYm9keSAqIHtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIGJhY2tncm91bmQtY29sb3IsIGJvcmRlci1jb2xvciwgdGV4dC1kZWNvcmF0aW9uLWNvbG9yLCBmaWxsLCBzdHJva2U7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA3NW1zO1xufVxuXG5oZWFkZXIsXG4gIGZvb3RlciB7XG4gIHotaW5kZXg6IDUwO1xuICBoZWlnaHQ6IDMuNXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG4gIHBhZGRpbmctbGVmdDogMS43NXJlbTtcbiAgcGFkZGluZy1yaWdodDogMS43NXJlbTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG5cbiAgaGVhZGVyLFxuICBmb290ZXIge1xuICAgIHBhZGRpbmctbGVmdDogMy41cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDMuNXJlbTtcbiAgfVxufVxuXG5oZWFkZXI6d2hlcmUoLmRhcmssIC5kYXJrICopLFxuICBmb290ZXI6d2hlcmUoLmRhcmssIC5kYXJrICopIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cblxuYXNpZGUge1xuICBtYXJnaW4tdG9wOiAzLjVyZW07XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDIgKiA1NnB4KTtcbiAgcGFkZGluZy1sZWZ0OiAyMDBweDtcbn1cblxubWFpbiB7XG4gIG1hcmdpbi10b3A6IDMuNXJlbTtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMiAqIDU2cHgpO1xuICB3aWR0aDogMTAwJTtcbiAgc2Nyb2xsLXNuYXAtdHlwZTogeSB2YXIoLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzKTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuc2VjdGlvbiB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDIgKiA1NnB4KTtcbiAgc2Nyb2xsLXNuYXAtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAxLjc1cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxLjc1cmVtO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcblxuICBzZWN0aW9uIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMuNXJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzLjVyZW07XG4gIH1cbn1cblxuYSB7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDUwMG1zIGVhc2U7XG4gIH1cblxuYnV0dG9uOmRpc2FibGVkIHtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2JhKDE2MSwgMTYxLCAxNzAsIDEpO1xuICBjb2xvcjogcmdiYSgxNjEsIDE2MSwgMTcwLCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cblxuYnV0dG9uOmRpc2FibGVkOndoZXJlKC5kYXJrLCAuZGFyayAqKSB7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiYSgxMTMsIDExMywgMTIyLCAxKTtcbiAgY29sb3I6IHJnYmEoMTEzLCAxMTMsIDEyMiwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG5cbmJ1dHRvbjpkaXNhYmxlZCB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cblxuaDEge1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcblxuICBoMSB7XG4gICAgZm9udC1zaXplOiAxLjg3NXJlbTtcbiAgICBsaW5lLWhlaWdodDogMi4yNXJlbTtcbiAgfVxufVxuXG4qLCA6OmJlZm9yZSwgOjphZnRlciB7XG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteDogMDtcbiAgLS10dy1ib3JkZXItc3BhY2luZy15OiAwO1xuICAtLXR3LXRyYW5zbGF0ZS14OiAwO1xuICAtLXR3LXRyYW5zbGF0ZS15OiAwO1xuICAtLXR3LXJvdGF0ZTogMDtcbiAgLS10dy1za2V3LXg6IDA7XG4gIC0tdHctc2tldy15OiAwO1xuICAtLXR3LXNjYWxlLXg6IDE7XG4gIC0tdHctc2NhbGUteTogMTtcbiAgLS10dy1wYW4teDogIDtcbiAgLS10dy1wYW4teTogIDtcbiAgLS10dy1waW5jaC16b29tOiAgO1xuICAtLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3M6IHByb3hpbWl0eTtcbiAgLS10dy1ncmFkaWVudC1mcm9tLXBvc2l0aW9uOiAgO1xuICAtLXR3LWdyYWRpZW50LXZpYS1wb3NpdGlvbjogIDtcbiAgLS10dy1ncmFkaWVudC10by1wb3NpdGlvbjogIDtcbiAgLS10dy1vcmRpbmFsOiAgO1xuICAtLXR3LXNsYXNoZWQtemVybzogIDtcbiAgLS10dy1udW1lcmljLWZpZ3VyZTogIDtcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XG4gIC0tdHctbnVtZXJpYy1mcmFjdGlvbjogIDtcbiAgLS10dy1yaW5nLWluc2V0OiAgO1xuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XG4gIC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XG4gIC0tdHctcmluZy1jb2xvcjogcmdiYSg1OSwgMTMwLCAyNDYsIDAuNSk7XG4gIC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcbiAgLS10dy1yaW5nLXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XG4gIC0tdHctc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAwIHJnYmEoMCwwLDAsMCk7XG4gIC0tdHctYmx1cjogIDtcbiAgLS10dy1icmlnaHRuZXNzOiAgO1xuICAtLXR3LWNvbnRyYXN0OiAgO1xuICAtLXR3LWdyYXlzY2FsZTogIDtcbiAgLS10dy1odWUtcm90YXRlOiAgO1xuICAtLXR3LWludmVydDogIDtcbiAgLS10dy1zYXR1cmF0ZTogIDtcbiAgLS10dy1zZXBpYTogIDtcbiAgLS10dy1kcm9wLXNoYWRvdzogIDtcbiAgLS10dy1iYWNrZHJvcC1ibHVyOiAgO1xuICAtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3M6ICA7XG4gIC0tdHctYmFja2Ryb3AtY29udHJhc3Q6ICA7XG4gIC0tdHctYmFja2Ryb3AtZ3JheXNjYWxlOiAgO1xuICAtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGU6ICA7XG4gIC0tdHctYmFja2Ryb3AtaW52ZXJ0OiAgO1xuICAtLXR3LWJhY2tkcm9wLW9wYWNpdHk6ICA7XG4gIC0tdHctYmFja2Ryb3Atc2F0dXJhdGU6ICA7XG4gIC0tdHctYmFja2Ryb3Atc2VwaWE6ICA7XG4gIC0tdHctY29udGFpbi1zaXplOiAgO1xuICAtLXR3LWNvbnRhaW4tbGF5b3V0OiAgO1xuICAtLXR3LWNvbnRhaW4tcGFpbnQ6ICA7XG4gIC0tdHctY29udGFpbi1zdHlsZTogIDtcbn1cblxuOjpiYWNrZHJvcCB7XG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteDogMDtcbiAgLS10dy1ib3JkZXItc3BhY2luZy15OiAwO1xuICAtLXR3LXRyYW5zbGF0ZS14OiAwO1xuICAtLXR3LXRyYW5zbGF0ZS15OiAwO1xuICAtLXR3LXJvdGF0ZTogMDtcbiAgLS10dy1za2V3LXg6IDA7XG4gIC0tdHctc2tldy15OiAwO1xuICAtLXR3LXNjYWxlLXg6IDE7XG4gIC0tdHctc2NhbGUteTogMTtcbiAgLS10dy1wYW4teDogIDtcbiAgLS10dy1wYW4teTogIDtcbiAgLS10dy1waW5jaC16b29tOiAgO1xuICAtLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3M6IHByb3hpbWl0eTtcbiAgLS10dy1ncmFkaWVudC1mcm9tLXBvc2l0aW9uOiAgO1xuICAtLXR3LWdyYWRpZW50LXZpYS1wb3NpdGlvbjogIDtcbiAgLS10dy1ncmFkaWVudC10by1wb3NpdGlvbjogIDtcbiAgLS10dy1vcmRpbmFsOiAgO1xuICAtLXR3LXNsYXNoZWQtemVybzogIDtcbiAgLS10dy1udW1lcmljLWZpZ3VyZTogIDtcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XG4gIC0tdHctbnVtZXJpYy1mcmFjdGlvbjogIDtcbiAgLS10dy1yaW5nLWluc2V0OiAgO1xuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XG4gIC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XG4gIC0tdHctcmluZy1jb2xvcjogcmdiYSg1OSwgMTMwLCAyNDYsIDAuNSk7XG4gIC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcbiAgLS10dy1yaW5nLXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XG4gIC0tdHctc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAwIHJnYmEoMCwwLDAsMCk7XG4gIC0tdHctYmx1cjogIDtcbiAgLS10dy1icmlnaHRuZXNzOiAgO1xuICAtLXR3LWNvbnRyYXN0OiAgO1xuICAtLXR3LWdyYXlzY2FsZTogIDtcbiAgLS10dy1odWUtcm90YXRlOiAgO1xuICAtLXR3LWludmVydDogIDtcbiAgLS10dy1zYXR1cmF0ZTogIDtcbiAgLS10dy1zZXBpYTogIDtcbiAgLS10dy1kcm9wLXNoYWRvdzogIDtcbiAgLS10dy1iYWNrZHJvcC1ibHVyOiAgO1xuICAtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3M6ICA7XG4gIC0tdHctYmFja2Ryb3AtY29udHJhc3Q6ICA7XG4gIC0tdHctYmFja2Ryb3AtZ3JheXNjYWxlOiAgO1xuICAtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGU6ICA7XG4gIC0tdHctYmFja2Ryb3AtaW52ZXJ0OiAgO1xuICAtLXR3LWJhY2tkcm9wLW9wYWNpdHk6ICA7XG4gIC0tdHctYmFja2Ryb3Atc2F0dXJhdGU6ICA7XG4gIC0tdHctYmFja2Ryb3Atc2VwaWE6ICA7XG4gIC0tdHctY29udGFpbi1zaXplOiAgO1xuICAtLXR3LWNvbnRhaW4tbGF5b3V0OiAgO1xuICAtLXR3LWNvbnRhaW4tcGFpbnQ6ICA7XG4gIC0tdHctY29udGFpbi1zdHlsZTogIDtcbn1cbi5tb250c2VycmF0IHtcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1vcHRpY2FsLXNpemluZzogYXV0bztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gIH1cbi50ZXh0LWhlbGxvIHtcbiAgZm9udC1zaXplOiAxMHZ3O1xuICBmb250LXdlaWdodDogODAwO1xuICBsaW5lLWhlaWdodDogMC44O1xufVxuQG1lZGlhIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcblxuICAudGV4dC1oZWxsbyB7XG4gICAgZm9udC1zaXplOiAxNXZ3O1xuICB9XG59XG4udGV4dC1iaWcge1xuICBmb250LXNpemU6IDMuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGxpbmUtaGVpZ2h0OiAwLjg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcblxuICAudGV4dC1iaWcge1xuICAgIGZvbnQtc2l6ZTogNC41cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICB9XG59XG4uYnRuLWRhcmstbW9kZSB7XG4gIGFzcGVjdC1yYXRpbzogMjtcbiAgaGVpZ2h0OiAxLjI1cmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcbiAgLS10dy1zaGFkb3c6IGluc2V0IDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IGluc2V0IDAgMnB4IDRweCAwIHZhcigtLXR3LXNoYWRvdy1jb2xvcik7XG4gIGJveC1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApLCAwIDAgcmdiYSgwLDAsMCwwKSwgaW5zZXQgMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYm94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgcmdiYSgwLDAsMCwwKSksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgcmdiYSgwLDAsMCwwKSksIHZhcigtLXR3LXNoYWRvdyk7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcblxuICAuYnRuLWRhcmstbW9kZSB7XG4gICAgaGVpZ2h0OiAxLjVyZW07XG4gIH1cbn1cbi5idG4tZGFyay1tb2RlIHtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDUwMG1zIGVhc2U7XG4gIH1cbi5idG4tZGFyay1tb2RlLnRoZW1lLTE6aG92ZXIge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ4LCAxMTMsIDExMywgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ4LCAxMTMsIDExMywgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLmJ0bi1kYXJrLW1vZGUudGhlbWUtMjpob3ZlciB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsIDIwNCwgMjEsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MCwgMjA0LCAyMSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLmJ0bi1kYXJrLW1vZGUudGhlbWUtMzpob3ZlciB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNCwgMTY1LCAyMzMsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0LCAxNjUsIDIzMywgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLmRhcmstbW9kZS1iYWxsIHtcbiAgbWFyZ2luLWxlZnQ6IDAuMTI1cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuMTI1cmVtO1xuICBhc3BlY3QtcmF0aW86IDEgLyAxO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDRweCk7XG4gIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLmRhcmstbW9kZS1iYWxsOndoZXJlKC5kYXJrLCAuZGFyayAqKSB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMzksIDQyLCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMzksIDQyLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4uZGFyay1tb2RlLWJhbGwge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA3NTBtcyBlYXNlO1xuICB9XG4uZGFyay1tb2RlLWJhbGwuZGFyayB7XG4gIC0tdHctdHJhbnNsYXRlLXg6IGNhbGMoMTAwJSArIDRweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKGNhbGMoMTAwJSArIDRweCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG4uaWNvbi1tb2RlLWRhcmssXG4gIC5pY29uLW1vZGUge1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgNzVtcyBlYXNlO1xuICB9XG4uaWNvbi1tb2RlLWRhcmsge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG59XG4uaWNvbi1tb2RlLWRhcms6d2hlcmUoLmRhcmssIC5kYXJrICopIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5pY29uLW1vZGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDE7XG59XG4uaWNvbi1tb2RlOndoZXJlKC5kYXJrLCAuZGFyayAqKSB7XG4gIG9wYWNpdHk6IDA7XG59XG4uaWNvbi1hYm91dC10b29sLFxuICAuaWNvbi1jb250YWN0LWxpbmsge1xuICBhc3BlY3QtcmF0aW86IDEgLyAxO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xuXG4gIC5pY29uLWFib3V0LXRvb2wsXG4gIC5pY29uLWNvbnRhY3QtbGluayB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgfVxufVxuLmljb24tbmV4dCB7XG4gIGFzcGVjdC1yYXRpbzogMSAvIDE7XG4gIGhlaWdodDogNzBweDtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNTAwbXMgZWFzZTtcbn1cbmJ1dHRvbjpob3ZlciAuaWNvbi1uZXh0IHtcbiAgLS10dy1zY2FsZS14OiAxLjE7XG4gIC0tdHctc2NhbGUteTogMS4xO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCgxLjEpIHNjYWxlWSgxLjEpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbi5idG4tbWluaS10YWIge1xuICBhc3BlY3QtcmF0aW86IDQ7XG4gIGhlaWdodDogMC43NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgMSk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xufVxuLmJ0bi1taW5pLXRhYjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgMC41KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG4gIC0tdHctYmctb3BhY2l0eTogMC41O1xufVxuLmJ0bi1taW5pLXRhYjp3aGVyZSguZGFyaywgLmRhcmsgKikge1xuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xuICBib3JkZXItY29sb3I6IHJnYmEoMTQsIDE2NSwgMjMzLCAxKTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDE0LCAxNjUsIDIzMywgdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcbn1cbi5idG4tbWluaS10YWI6d2hlcmUoLmRhcmssIC5kYXJrICopOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNCwgMTY1LCAyMzMsIDAuNSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQsIDE2NSwgMjMzLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG4gIC0tdHctYmctb3BhY2l0eTogMC41O1xufVxuLmJ0bi1taW5pLXRhYiB7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciA1MDBtcyBlYXNlO1xuICB9XG4uYnRuLW1pbmktdGFiLmFjdGl2ZSB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4uYnRuLW1pbmktdGFiLmFjdGl2ZTp3aGVyZSguZGFyaywgLmRhcmsgKikge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQsIDE2NSwgMjMzLCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNCwgMTY1LCAyMzMsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5wcm9qZWN0LWNhcmQtb3V0ZXItd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDYwJTtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCAxKTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XG4gIHBhZGRpbmc6IDFyZW07XG59XG4ucHJvamVjdC1jYXJkLW91dGVyLXdyYXBwZXI6d2hlcmUoLmRhcmssIC5kYXJrICopIHtcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDE0LCAxNjUsIDIzMywgMSk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgxNCwgMTY1LCAyMzMsIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XG59XG4ucHJvamVjdC1jYXJkLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHNjcm9sbC1zbmFwLXR5cGU6IHggdmFyKC0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzcyk7XG4gIGdhcDogMXJlbTtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4ucHJvamVjdC1jYXJkLXdyYXBwZXI6d2hlcmUoLmRhcmssIC5kYXJrICopIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5wcm9qZWN0LWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgc2Nyb2xsLXNuYXAtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ucHJvamVjdC1jYXJkLWltYWdlIHtcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5wcm9qZWN0LWNhcmQtaW5kZXgge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIGZvbnQtc2l6ZTogNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbGluZS1oZWlnaHQ6IDAuODtcbn1cbi5wcm9qZWN0LWNhcmQtbmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHdpZHRoOiAxMDAlO1xuICAtLXR3LXRyYW5zbGF0ZS15OiAtNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIC01MCUpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMi4yNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5wcm9qZWN0LWNhcmQtdHlwZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2Ni42NjY2NjclO1xuICB3aWR0aDogMTAwJTtcbiAgLS10dy10cmFuc2xhdGUteTogLTUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCAtNTAlKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLnByb2plY3QtY2FyZC1saW5rLXdyYXBwZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZ2FwOiAxLjI1cmVtO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC4zNzVyZW07XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuMzc1cmVtO1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG9wYWNpdHk6IDAuNTtcbiAgICB0cmFuc2l0aW9uOlxuICAgICAgYmFja2dyb3VuZC1jb2xvciA1MDBtcyBlYXNlLCBvcGFjaXR5IDUwMG1zIGVhc2U7XG59XG4ucHJvamVjdC1jYXJkLWxpbmstd3JhcHBlciA+IGE6aG92ZXIge1xuICAtLXR3LXNjYWxlLXg6IDEuMTtcbiAgLS10dy1zY2FsZS15OiAxLjE7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKDEuMSkgc2NhbGVZKDEuMSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuLnByb2plY3QtY2FyZC1saW5rLXdyYXBwZXIgPiBhIHtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNTAwbXMgZWFzZTtcbiAgfVxuLnByb2plY3QtY2FyZC13cmFwcGVyOmhvdmVyIC5wcm9qZWN0LWNhcmQtbGluay13cmFwcGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMzksIDQyLCAwLjI1KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMzksIDQyLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG4gIC0tdHctYmctb3BhY2l0eTogMC4yNTtcbiAgb3BhY2l0eTogMTtcbn1cbi5wcm9qZWN0LWNhcmQtd3JhcHBlcjpob3ZlciAucHJvamVjdC1jYXJkLWxpbmstd3JhcHBlcjp3aGVyZSguZGFyaywgLmRhcmsgKikge1xuICAtLXR3LWJnLW9wYWNpdHk6IDAuNTtcbn1cbi5pbWctb3Blbi13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBhc3BlY3QtcmF0aW86IDEgLyAxO1xuICBoZWlnaHQ6IDIwcHg7XG59XG4ucHJvamVjdC1jYXJkLWV4cGFuZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgLS10dy10cmFuc2xhdGUteDogLTUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICBwYWRkaW5nLXRvcDogMC41cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xufVxuLmJ0bi1wcm9qZWN0LWNhcmQtbmV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiBjYWxjKDUwJSAtIDI4cHgpO1xuICByaWdodDogMXJlbTtcbiAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcbiAgaGVpZ2h0OiAzLjVyZW07XG4gIC0tdHctcm90YXRlOiAtOTBkZWc7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUoLTkwZGVnKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIDAuNSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xuICAtLXR3LWJnLW9wYWNpdHk6IDAuNTtcbiAgb3BhY2l0eTogMC41O1xufVxuLmJ0bi1wcm9qZWN0LWNhcmQtbmV4dDp3aGVyZSguZGFyaywgLmRhcmsgKikge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLmJ0bi1wcm9qZWN0LWNhcmQtcHJldiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiBjYWxjKDUwJSAtIDI4cHgpO1xuICBsZWZ0OiAxcmVtO1xuICBhc3BlY3QtcmF0aW86IDEgLyAxO1xuICBoZWlnaHQ6IDMuNXJlbTtcbiAgLS10dy1yb3RhdGU6IDkwZGVnO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKDkwZGVnKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIDAuNSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xuICAtLXR3LWJnLW9wYWNpdHk6IDAuNTtcbiAgb3BhY2l0eTogMC41O1xufVxuLmJ0bi1wcm9qZWN0LWNhcmQtcHJldjp3aGVyZSguZGFyaywgLmRhcmsgKikge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLnByb2plY3QtY2FyZC1pbWFnZSxcbiAgLnByb2plY3QtY2FyZC1pbmRleCxcbiAgLnByb2plY3QtY2FyZC1uYW1lLFxuICAucHJvamVjdC1jYXJkLXR5cGUsXG4gIC5idG4tcHJvamVjdC1jYXJkLW5leHQsXG4gIC5idG4tcHJvamVjdC1jYXJkLXByZXYge1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgNTAwbXMgZWFzZTtcbiAgfVxuLnByb2plY3QtY2FyZC1pbmZvOmhvdmVyIC5wcm9qZWN0LWNhcmQtaW1hZ2UsXG4gIC5idG4tcHJvamVjdC1jYXJkLW5leHQ6aG92ZXIsXG4gIC5idG4tcHJvamVjdC1jYXJkLXByZXY6aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuLnByb2plY3QtY2FyZC13cmFwcGVyOmhvdmVyIC5wcm9qZWN0LWNhcmQtaW5kZXgge1xuICBvcGFjaXR5OiAwLjU7XG59XG4ucHJvamVjdC1jYXJkLWluZm86aG92ZXIgLnByb2plY3QtY2FyZC1uYW1lLFxuICAucHJvamVjdC1jYXJkLWluZm86aG92ZXIgLnByb2plY3QtY2FyZC10eXBlIHtcbiAgb3BhY2l0eTogMDtcbn1cbi5wcm9qZWN0LWRldGFpbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDIuNXJlbTtcbiAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIDFzIGVhc2U7XG59XG4ucHJvamVjdC1kZXRhaWwuYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbn1cbi51bmRlcmxpbmUtaCxcbiAgLmhpZ2hsaWdodC1oIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnVuZGVybGluZS1oOmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIGJvdHRvbTogMC4xMjVyZW07XG4gIGhlaWdodDogMC4xMjVyZW07XG4gIHdpZHRoOiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi51bmRlcmxpbmUtaDp3aGVyZSguZGFyaywgLmRhcmsgKik6YWZ0ZXIge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLnVuZGVybGluZS1oOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHRyYW5zaXRpb246IHdpZHRoIDUwMG1zIGVhc2U7XG4gIH1cbmJ1dHRvbjpob3ZlciAudW5kZXJsaW5lLWg6YWZ0ZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbi5oaWdobGlnaHQtaDphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyNSU7XG4gIGxlZnQ6IC0xNXB4O1xuICB6LWluZGV4OiAtMTA7XG4gIGhlaWdodDogNTAlO1xuICB3aWR0aDogMHB4O1xuICBvcGFjaXR5OiAwLjg7XG4gICAgY29udGVudDogXCJcIjtcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCA1MDBtcyBlYXNlO1xufVxuYnV0dG9uOmhvdmVyIC5oaWdobGlnaHQtaDphZnRlciB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyAzMHB4KTtcbn1cbi5hYm91dC1zcGFuIHtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIDEpO1xuICBjb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cbi5hYm91dC1zcGFuOndoZXJlKC5kYXJrLCAuZGFyayAqKSB7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiYSgyNTAsIDIwNCwgMjEsIDEpO1xuICBjb2xvcjogcmdiYSgyNTAsIDIwNCwgMjEsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuLnRvb2w6aG92ZXIgLmljb24tYWJvdXQtdG9vbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLyogQW5pbWF0aW9uICovXG5bY2xhc3NePVwiYW5pbWF0ZS1cIl0ge1xuICAgIHdpbGwtY2hhbmdlOiBhbmltYXRpb247XG4gIH1cbi5maXhlZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cbi5hYnNvbHV0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5yZWxhdGl2ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5ib3R0b20tMCB7XG4gIGJvdHRvbTogMHB4O1xufVxuLmJvdHRvbS01IHtcbiAgYm90dG9tOiAxLjI1cmVtO1xufVxuLmxlZnQtMVxcXFwvMiB7XG4gIGxlZnQ6IDUwJTtcbn1cbi5sZWZ0LTQge1xuICBsZWZ0OiAxcmVtO1xufVxuLmxlZnQtXFxcXFstMTIwcHhcXFxcXSB7XG4gIGxlZnQ6IC0xMjBweDtcbn1cbi5sZWZ0LVxcXFxbLTE1NnB4XFxcXF0ge1xuICBsZWZ0OiAtMTU2cHg7XG59XG4ubGVmdC1cXFxcW2NhbGNcXFxcKDUwXFxcXCUtMjBweFxcXFwpXFxcXF0ge1xuICBsZWZ0OiBjYWxjKDUwJSAtIDIwcHgpO1xufVxuLnJpZ2h0LTAge1xuICByaWdodDogMHB4O1xufVxuLnJpZ2h0LTE0IHtcbiAgcmlnaHQ6IDMuNXJlbTtcbn1cbi50b3AtMCB7XG4gIHRvcDogMHB4O1xufVxuLnRvcC0xXFxcXC8yIHtcbiAgdG9wOiA1MCU7XG59XG4udG9wLVxcXFxbNTB2aFxcXFxdIHtcbiAgdG9wOiA1MHZoO1xufVxuLnRvcC1mdWxsIHtcbiAgdG9wOiAxMDAlO1xufVxuLnotNDAge1xuICB6LWluZGV4OiA0MDtcbn1cbi56LTUwIHtcbiAgei1pbmRleDogNTA7XG59XG4ubXQtMTQge1xuICBtYXJnaW4tdG9wOiAzLjVyZW07XG59XG4ubXQtMiB7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmFzcGVjdC1zcXVhcmUge1xuICBhc3BlY3QtcmF0aW86IDEgLyAxO1xufVxuLmgtMSB7XG4gIGhlaWdodDogMC4yNXJlbTtcbn1cbi5oLTEwIHtcbiAgaGVpZ2h0OiAyLjVyZW07XG59XG4uaC1cXFxcW2NhbGNcXFxcKDEwMFxcXFwlLTMycHhcXFxcKVxcXFxdIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzMnB4KTtcbn1cbi5oLVxcXFxbY2FsY1xcXFwoMjB2d1xcXFwqMFxcXFwuOFxcXFwpXFxcXF0ge1xuICBoZWlnaHQ6IGNhbGMoMjB2dyAqIDAuOCk7XG59XG4uaC1mdWxsIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnctXFxcXFsxNjhweFxcXFxdIHtcbiAgd2lkdGg6IDE2OHB4O1xufVxuLnctXFxcXFsyMFxcXFwlXFxcXF0ge1xuICB3aWR0aDogMjAlO1xufVxuLnctXFxcXFs0MFxcXFwlXFxcXF0ge1xuICB3aWR0aDogNDAlO1xufVxuLnctXFxcXFtjYWxjXFxcXCgxMDBcXFxcJS0xNnB4XFxcXClcXFxcXSB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxNnB4KTtcbn1cbi53LVxcXFxbY2FsY1xcXFwoMTAwXFxcXCUtMzJweFxcXFwpXFxcXF0ge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMzJweCk7XG59XG4udy1maXQge1xuICB3aWR0aDogLW1vei1maXQtY29udGVudDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuLnctZnVsbCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1pbi13LVxcXFxbMzBcXFxcJVxcXFxdIHtcbiAgbWluLXdpZHRoOiAzMCU7XG59XG4ubWluLXctXFxcXFs3MFxcXFwlXFxcXF0ge1xuICBtaW4td2lkdGg6IDcwJTtcbn1cbi5taW4tdy1mdWxsIHtcbiAgbWluLXdpZHRoOiAxMDAlO1xufVxuLi10cmFuc2xhdGUteC0xXFxcXC8yIHtcbiAgLS10dy10cmFuc2xhdGUteDogLTUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbi4tdHJhbnNsYXRlLXktMVxcXFwvMiB7XG4gIC0tdHctdHJhbnNsYXRlLXk6IC01MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgLTUwJSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG4udHJhbnNsYXRlLXgtMVxcXFwvMiB7XG4gIC0tdHctdHJhbnNsYXRlLXg6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuLnRyYW5zbGF0ZS14LVxcXFxbLTQwdndcXFxcXSB7XG4gIC0tdHctdHJhbnNsYXRlLXg6IC00MHZ3O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNDB2dywgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbi5yb3RhdGUtMTgwIHtcbiAgLS10dy1yb3RhdGU6IDE4MGRlZztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSgxODBkZWcpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG4ucm90YXRlLTkwIHtcbiAgLS10dy1yb3RhdGU6IDkwZGVnO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKDkwZGVnKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuQGtleWZyYW1lcyBib3VuY2UtY2hldnJvbi1kb3duIHtcblxuICAwJSwgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTI1JSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuOCwgMCwgMSwgMSk7XG4gIH1cblxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKDApO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICB9XG59XG4uYW5pbWF0ZS1jaGV2cm9uLWRvd24ge1xuICBhbmltYXRpb246IGJvdW5jZS1jaGV2cm9uLWRvd24gMXMgaW5maW5pdGU7XG59XG5Aa2V5ZnJhbWVzIGJvdW5jZS1jaGV2cm9uLWxlZnQge1xuXG4gIDAlLCAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKDkwZGVnKSB0cmFuc2xhdGVZKDApO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjgsIDAsIDEsIDEpO1xuICB9XG5cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKDkwZGVnKSB0cmFuc2xhdGVZKDI1JSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG4gIH1cbn1cbi5hbmltYXRlLWNoZXZyb24tbGVmdCB7XG4gIGFuaW1hdGlvbjogYm91bmNlLWNoZXZyb24tbGVmdCAxcyBpbmZpbml0ZTtcbn1cbkBrZXlmcmFtZXMgYm91bmNlLWNoZXZyb24tcmlnaHQge1xuXG4gIDAlLCAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKC05MGRlZykgdHJhbnNsYXRlWSgtMjUlKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC44LCAwLCAxLCAxKTtcbiAgfVxuXG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSgtOTBkZWcpIHRyYW5zbGF0ZVkoMCk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG4gIH1cbn1cbi5hbmltYXRlLWNoZXZyb24tcmlnaHQge1xuICBhbmltYXRpb246IGJvdW5jZS1jaGV2cm9uLXJpZ2h0IDFzIGluZmluaXRlO1xufVxuQGtleWZyYW1lcyBzbGlkZS11cCB7XG5cbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuLmFuaW1hdGUtaGVsbG8ge1xuICBhbmltYXRpb246IHNsaWRlLXVwIDFzIDE7XG59XG5Aa2V5ZnJhbWVzIGJvdW5jZS1tZW51IHtcblxuICAwJSwgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSgtOTBkZWcpIHRyYW5zbGF0ZVkoMCk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuOCwgMCwgMSwgMSk7XG4gIH1cblxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoLTkwZGVnKSB0cmFuc2xhdGVZKDI1JSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG4gIH1cbn1cbi5hbmltYXRlLW1lbnUge1xuICBhbmltYXRpb246IGJvdW5jZS1tZW51IDEuNXMgaW5maW5pdGU7XG59XG5Aa2V5ZnJhbWVzIHNocmluay13aWR0aCB7XG5cbiAgMCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAxMDAlIHtcbiAgICB3aWR0aDogMDtcbiAgfVxufVxuLmFuaW1hdGUtc2hyaW5rLXdpZHRoIHtcbiAgYW5pbWF0aW9uOiBzaHJpbmstd2lkdGggMTBzIGxpbmVhciBpbmZpbml0ZTtcbn1cbi5zbmFwLXgge1xuICBzY3JvbGwtc25hcC10eXBlOiB4IHZhcigtLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3MpO1xufVxuLnNuYXAtY2VudGVyIHtcbiAgc2Nyb2xsLXNuYXAtYWxpZ246IGNlbnRlcjtcbn1cbi5mbGV4LXJvdyB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4uZmxleC1yb3ctcmV2ZXJzZSB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbn1cbi5mbGV4LWNvbCB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uaXRlbXMtY2VudGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5qdXN0aWZ5LWNlbnRlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmp1c3RpZnktYmV0d2VlbiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5qdXN0aWZ5LWV2ZW5seSB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuLmdhcC0xIHtcbiAgZ2FwOiAwLjI1cmVtO1xufVxuLmdhcC0xNCB7XG4gIGdhcDogMy41cmVtO1xufVxuLmdhcC0yIHtcbiAgZ2FwOiAwLjVyZW07XG59XG4uZ2FwLTMge1xuICBnYXA6IDAuNzVyZW07XG59XG4uZ2FwLTUge1xuICBnYXA6IDEuMjVyZW07XG59XG4ub3ZlcmZsb3ctaGlkZGVuIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5vdmVyZmxvdy14LWhpZGRlbiB7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cbi5vdmVyZmxvdy14LXNjcm9sbCB7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbn1cbi5zY3JvbGwtc21vb3RoIHtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG4udGV4dC1wcmV0dHkge1xuICB0ZXh0LXdyYXA6IHByZXR0eTtcbn1cbi5yb3VuZGVkLWZ1bGwge1xuICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG59XG4ucm91bmRlZC1tZCB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xufVxuLmJvcmRlci0yIHtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG59XG4uYm9yZGVyLXktMiB7XG4gIGJvcmRlci10b3Atd2lkdGg6IDJweDtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xufVxuLmJvcmRlci10aGVtZS0yIHtcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1MCwgMjA0LCAyMSwgMSk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTAsIDIwNCwgMjEsIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XG59XG4uYmctZGFyayB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMzksIDQyLCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMzksIDQyLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4uYmctbGlnaHQge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLmJnLXRoZW1lLTEge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ4LCAxMTMsIDExMywgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ4LCAxMTMsIDExMywgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLmJnLXRoZW1lLTIge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUwLCAyMDQsIDIxLCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsIDIwNCwgMjEsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5iZy10aGVtZS0zIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0LCAxNjUsIDIzMywgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQsIDE2NSwgMjMzLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4uYmctb3BhY2l0eS05MCB7XG4gIC0tdHctYmctb3BhY2l0eTogMC45O1xufVxuLnAtOCB7XG4gIHBhZGRpbmc6IDJyZW07XG59XG4ucHgtMCB7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59XG4ucHgtMTQge1xuICBwYWRkaW5nLWxlZnQ6IDMuNXJlbTtcbiAgcGFkZGluZy1yaWdodDogMy41cmVtO1xufVxuLnB4LTcge1xuICBwYWRkaW5nLWxlZnQ6IDEuNzVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDEuNzVyZW07XG59XG4ucHktMTQge1xuICBwYWRkaW5nLXRvcDogMy41cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMy41cmVtO1xufVxuLnRleHQtanVzdGlmeSB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG4udGV4dC1zdGFydCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4udGV4dC0yeGwge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDJyZW07XG59XG4udGV4dC00eGwge1xuICBmb250LXNpemU6IDIuMjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAyLjVyZW07XG59XG4udGV4dC02eGwge1xuICBmb250LXNpemU6IDMuNzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuLnRleHQtc20ge1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBsaW5lLWhlaWdodDogMS4yNXJlbTtcbn1cbi50ZXh0LXhsIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBsaW5lLWhlaWdodDogMS43NXJlbTtcbn1cbi5mb250LWJvbGQge1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLmZvbnQtZXh0cmFib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cbi5mb250LXNlbWlib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi51cHBlcmNhc2Uge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLml0YWxpYyB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi50ZXh0LWxpZ2h0IHtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIDEpO1xuICBjb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cbi50ZXh0LXRoZW1lLTEge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoMjQ4LCAxMTMsIDExMywgMSk7XG4gIGNvbG9yOiByZ2JhKDI0OCwgMTEzLCAxMTMsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuLnRleHQtdGhlbWUtMiB7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiYSgyNTAsIDIwNCwgMjEsIDEpO1xuICBjb2xvcjogcmdiYSgyNTAsIDIwNCwgMjEsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuLnRleHQtdGhlbWUtMyB7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiYSgxNCwgMTY1LCAyMzMsIDEpO1xuICBjb2xvcjogcmdiYSgxNCwgMTY1LCAyMzMsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuLnVuZGVybGluZSB7XG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XG59XG4ub3BhY2l0eS0wIHtcbiAgb3BhY2l0eTogMDtcbn1cbi5vcGFjaXR5LTUwIHtcbiAgb3BhY2l0eTogMC41O1xufVxuYXNpZGUsXG4gICNidG4tbWVudS1sLFxuICAjYnRuLW1lbnUtbC1jbG9zZSxcbiAgI2J0bi1tZW51LWwtY2xvc2UgPiBkaXYsXG4gICNidG4tcHJvamVjdC1kZXRhaWwtY2xvc2Uge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA1MDBtcyBlYXNlO1xuICB9XG5tYWluLm1vdmUge1xuICAtLXR3LXRyYW5zbGF0ZS14OiA0MHZ3O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg0MHZ3LCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuYXNpZGUubW92ZSB7XG4gIC0tdHctdHJhbnNsYXRlLXg6IDBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuI2J0bi1tZW51LWwuc2hvdyB7XG4gIC0tdHctdHJhbnNsYXRlLXk6IDIwMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIDIwMHB4KSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbiNidG4tbWVudS1sLWNsb3NlLnNob3cge1xuICAtLXR3LXRyYW5zbGF0ZS14OiAyMDBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjAwcHgsIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG4jYnRuLW1lbnUtbC1jbG9zZTpob3ZlciA+IGRpdiB7XG4gIC0tdHctcm90YXRlOiAxODBkZWc7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUoMTgwZGVnKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxubWFpbiB7XG4gICAgdHJhbnNpdGlvbjpcbiAgICAgIHRyYW5zZm9ybSA1MDBtcyBlYXNlLCBvcGFjaXR5IDUwMG1zIGVhc2U7XG4gIH1cbiNhcnRpY2xlLWFib3V0IHtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDUwMG1zIGVhc2U7XG4gIH1cbiNwcm9qZWN0LWNhcmQtZGV0YWlsLXdyYXBwZXIge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlO1xuICB9XG4jcHJvamVjdC1jYXJkLWRldGFpbC13cmFwcGVyLmFjdGl2ZSB7XG4gIC0tdHctdHJhbnNsYXRlLXk6IGNhbGMoLTEwMCUgLSAxNnB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCBjYWxjKC0xMDAlIC0gMTZweCkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuLyogTWVudSBkb3QgKi9cbmJ1dHRvbjpkaXNhYmxlZCA+IGRpdiA+IHNwYW4ge1xuICBvcGFjaXR5OiAxO1xufVxuLmFmdGVyXFxcXDpiZy10aGVtZS0xOjphZnRlciB7XG4gIGNvbnRlbnQ6IHZhcigtLXR3LWNvbnRlbnQpO1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ4LCAxMTMsIDExMywgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ4LCAxMTMsIDExMywgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLmFmdGVyXFxcXDpiZy10aGVtZS0yOjphZnRlciB7XG4gIGNvbnRlbnQ6IHZhcigtLXR3LWNvbnRlbnQpO1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUwLCAyMDQsIDIxLCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsIDIwNCwgMjEsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5hZnRlclxcXFw6YmctdGhlbWUtMzo6YWZ0ZXIge1xuICBjb250ZW50OiB2YXIoLS10dy1jb250ZW50KTtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0LCAxNjUsIDIzMywgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQsIDE2NSwgMjMzLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4uaG92ZXJcXFxcOnJvdGF0ZS0xODA6aG92ZXIge1xuICAtLXR3LXJvdGF0ZTogMTgwZGVnO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKDE4MGRlZykgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbi5ob3ZlclxcXFw6c2NhbGUtMTEwOmhvdmVyIHtcbiAgLS10dy1zY2FsZS14OiAxLjE7XG4gIC0tdHctc2NhbGUteTogMS4xO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCgxLjEpIHNjYWxlWSgxLjEpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuXG4gIC5tZFxcXFw6cHgtMTQge1xuICAgIHBhZGRpbmctbGVmdDogMy41cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDMuNXJlbTtcbiAgfVxuXG4gIC5tZFxcXFw6dGV4dC0yeGwge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xuICB9XG5cbiAgLm1kXFxcXDp0ZXh0LWxnIHtcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuXG4gIC5wb3J0cmFpdFxcXFw6aGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4uZGFya1xcXFw6YmctZGFyazp3aGVyZSguZGFyaywgLmRhcmsgKikge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLmRhcmtcXFxcOmJnLWxpZ2h0OndoZXJlKC5kYXJrLCAuZGFyayAqKSB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4uZGFya1xcXFw6YmctdGhlbWUtMjp3aGVyZSguZGFyaywgLmRhcmsgKikge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUwLCAyMDQsIDIxLCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsIDIwNCwgMjEsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5kYXJrXFxcXDpiZy10aGVtZS0zOndoZXJlKC5kYXJrLCAuZGFyayAqKSB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNCwgMTY1LCAyMzMsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0LCAxNjUsIDIzMywgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLmRhcmtcXFxcOmJnLXRyYW5zcGFyZW50OndoZXJlKC5kYXJrLCAuZGFyayAqKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLmRhcmtcXFxcOmJnLW9wYWNpdHktOTA6d2hlcmUoLmRhcmssIC5kYXJrICopIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAwLjk7XG59XG4uZGFya1xcXFw6dGV4dC10aGVtZS0yOndoZXJlKC5kYXJrLCAuZGFyayAqKSB7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiYSgyNTAsIDIwNCwgMjEsIDEpO1xuICBjb2xvcjogcmdiYSgyNTAsIDIwNCwgMjEsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuLmRhcmtcXFxcOnRleHQtdGhlbWUtMzp3aGVyZSguZGFyaywgLmRhcmsgKikge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoMTQsIDE2NSwgMjMzLCAxKTtcbiAgY29sb3I6IHJnYmEoMTQsIDE2NSwgMjMzLCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGlEQUFpRDtFQUNqRCx5QkFBeUI7RUFDekIsK0RBQW9FO0FBQ3RFOztBQUVBLGlFQUFjOztBQUFkOzs7Q0FBYzs7QUFBZDs7O0VBQUEsc0JBQWMsRUFBZCxNQUFjO0VBQWQsZUFBYyxFQUFkLE1BQWM7RUFBZCxtQkFBYyxFQUFkLE1BQWM7RUFBZCxxQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7RUFBQSxnQkFBYztBQUFBOztBQUFkOzs7Ozs7OztDQUFjOztBQUFkOztFQUFBLGdCQUFjLEVBQWQsTUFBYztFQUFkLDhCQUFjLEVBQWQsTUFBYztFQUFkLGdCQUFjLEVBQWQsTUFBYztFQUFkLGNBQWM7S0FBZCxXQUFjLEVBQWQsTUFBYztFQUFkLDhMQUFjLEVBQWQsTUFBYztFQUFkLDZCQUFjLEVBQWQsTUFBYztFQUFkLCtCQUFjLEVBQWQsTUFBYztFQUFkLHdDQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDtFQUFBLFNBQWMsRUFBZCxNQUFjO0VBQWQsb0JBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7Ozs7Q0FBYzs7QUFBZDtFQUFBLFNBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7RUFBZCxxQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLDBCQUFjO0VBQWQseUNBQWM7VUFBZCxpQ0FBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOzs7Ozs7RUFBQSxrQkFBYztFQUFkLG9CQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxjQUFjO0VBQWQsd0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxtQkFBYztBQUFBOztBQUFkOzs7OztDQUFjOztBQUFkOzs7O0VBQUEsK0dBQWMsRUFBZCxNQUFjO0VBQWQsNkJBQWMsRUFBZCxNQUFjO0VBQWQsK0JBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGNBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxjQUFjO0VBQWQsY0FBYztFQUFkLGtCQUFjO0VBQWQsd0JBQWM7QUFBQTs7QUFBZDtFQUFBLGVBQWM7QUFBQTs7QUFBZDtFQUFBLFdBQWM7QUFBQTs7QUFBZDs7OztDQUFjOztBQUFkO0VBQUEsY0FBYyxFQUFkLE1BQWM7RUFBZCxxQkFBYyxFQUFkLE1BQWM7RUFBZCx5QkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7OztDQUFjOztBQUFkOzs7OztFQUFBLG9CQUFjLEVBQWQsTUFBYztFQUFkLDhCQUFjLEVBQWQsTUFBYztFQUFkLGdDQUFjLEVBQWQsTUFBYztFQUFkLGVBQWMsRUFBZCxNQUFjO0VBQWQsb0JBQWMsRUFBZCxNQUFjO0VBQWQsb0JBQWMsRUFBZCxNQUFjO0VBQWQsdUJBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7RUFBZCxTQUFjLEVBQWQsTUFBYztFQUFkLFVBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsb0JBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7Ozs7RUFBQSwwQkFBYyxFQUFkLE1BQWM7RUFBZCw2QkFBYyxFQUFkLE1BQWM7RUFBZCxzQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGFBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGdCQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSx3QkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLFlBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSw2QkFBYyxFQUFkLE1BQWM7RUFBZCxvQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLHdCQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkO0VBQUEsMEJBQWMsRUFBZCxNQUFjO0VBQWQsYUFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGtCQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7Ozs7Ozs7Ozs7Ozs7RUFBQSxTQUFjO0FBQUE7O0FBQWQ7RUFBQSxTQUFjO0VBQWQsVUFBYztBQUFBOztBQUFkO0VBQUEsVUFBYztBQUFBOztBQUFkOzs7RUFBQSxnQkFBYztFQUFkLFNBQWM7RUFBZCxVQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxVQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxnQkFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDtFQUFBLFVBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1B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bkI7RUFBbUI7QUFBQTtBQUFuQjtFQUFBO0FBQW1CO0FBQW5COztFQUFBO0lBQUE7RUFBbUI7O0VBQW5CO0lBQUE7RUFBbUI7QUFBQTtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxxQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxzQkFBbUI7RUFBbkIsbUNBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CLHFDQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQix3Q0FBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkIsd0NBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CLHVDQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQix1Q0FBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsaUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEscUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsbUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLGlCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG1CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkIsNkJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CLDZCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQiw0QkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkIsNEJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBa1JqQjs7Ozs7SUFLRSxnQ0FBZ0M7RUFDbEM7QUFHRTtFQUFBLHNCQUF5QjtFQUF6Qiw4S0FBeUI7RUFBekI7QUFBeUI7QUFJekI7RUFBQSxxQkFBb0I7RUFBcEIsNktBQW9CO0VBQXBCO0FBQW9CO0FBSXBCO0VBQUEsdUJBQTBCO0VBQTFCLCtLQUEwQjtFQUExQjtBQUEwQjtBQUkxQjtFQUFBLHVCQUEwQjtFQUExQiwrS0FBMEI7RUFBMUI7QUFBMEI7QUFJMUI7RUFBQSxtQkFBaUI7RUFBakIscUxBQWlCO0VBQWpCO0FBQWlCO0FBR25CO0lBQ0U7OENBRW9CO0VBQ3RCO0FBRUE7SUFDRSw4QkFBOEI7RUFDaEM7QUFFQTtJQUNFLDZCQUE2QjtFQUMvQjtBQUdFO0VBQUEsb0NBQXFDO0VBQXJDLDRMQUFxQztFQUFyQztBQUFxQztBQUd2QyxhQUFhO0FBRVg7RUFBQTtBQUFrQjtBQTFVdEI7RUFBQSwwQkE2VUE7RUE3VUEsa0JBNlVBO0VBN1VBLHdDQTZVQTtFQTdVQTtBQTZVQTtBQTdVQTtFQUFBLDBCQTZVQTtFQTdVQSxrQkE2VUE7RUE3VUEsdUNBNlVBO0VBN1VBO0FBNlVBO0FBN1VBO0VBQUEsMEJBNlVBO0VBN1VBLGtCQTZVQTtFQTdVQSx1Q0E2VUE7RUE3VUE7QUE2VUE7QUE3VUE7RUFBQSxtQkE2VUE7RUE3VUEscUxBNlVBO0VBN1VBO0FBNlVBO0FBN1VBO0VBQUEsaUJBNlVBO0VBN1VBLGlCQTZVQTtFQTdVQSxtS0E2VUE7RUE3VUE7QUE2VUE7QUE3VUE7O0VBQUE7SUFBQSxvQkE2VUE7SUE3VUE7RUE2VUE7O0VBN1VBO0lBQUEsaUJBNlVBO0lBN1VBO0VBNlVBOztFQTdVQTtJQUFBLG1CQTZVQTtJQTdVQTtFQTZVQTtBQUFBO0FBN1VBOztFQUFBO0lBQUE7RUE2VUE7QUFBQTtBQTdVQTtFQUFBLGtCQTZVQTtFQTdVQSxxQ0E2VUE7RUE3VUE7QUE2VUE7QUE3VUE7RUFBQSxrQkE2VUE7RUE3VUEsd0NBNlVBO0VBN1VBO0FBNlVBO0FBN1VBO0VBQUEsa0JBNlVBO0VBN1VBLHVDQTZVQTtFQTdVQTtBQTZVQTtBQTdVQTtFQUFBLGtCQTZVQTtFQTdVQSx1Q0E2VUE7RUE3VUE7QUE2VUE7QUE3VUE7RUFBQTtBQTZVQTtBQTdVQTtFQUFBO0FBNlVBO0FBN1VBO0VBQUEsb0JBNlVBO0VBN1VBLDRCQTZVQTtFQTdVQTtBQTZVQTtBQTdVQTtFQUFBLG9CQTZVQTtFQTdVQSw0QkE2VUE7RUE3VUE7QUE2VUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAvKiBodHRwczovL2ZvbnRzLmdvb2dsZS5jb20vc3BlY2ltZW4vTW9udHNlcnJhdCAqL1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIjtcXG4gIHNyYzogdXJsKC4vZm9udC9Nb250c2VycmF0LVZhcmlhYmxlRm9udF93Z2h0LnR0ZikgZm9ybWF0KFxcXCJUcnVlVHlwZVxcXCIpO1xcbn1cXG5cXG5AdGFpbHdpbmQgYmFzZTtcXG5AdGFpbHdpbmQgY29tcG9uZW50cztcXG5AdGFpbHdpbmQgdXRpbGl0aWVzO1xcblxcbkBsYXllciBiYXNlIHtcXG4gIC8qIEhpZGUgc2Nyb2xsYmFyIGZvciBJRSwgRWRnZSBhbmQgRmlyZWZveCAqL1xcbiAgbWFpbixcXG4gIHNlY3Rpb24sXFxuICAucHJvamVjdC1jYXJkLXdyYXBwZXIge1xcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IC8qIElFIGFuZCBFZGdlICovXFxuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTsgLyogRmlyZWZveCAqL1xcbiAgfVxcblxcbiAgLyogSGlkZSBzY3JvbGxiYXIgZm9yIENocm9tZSwgU2FmYXJpIGFuZCBPcGVyYSAqL1xcbiAgbWFpbjo6LXdlYmtpdC1zY3JvbGxiYXIsXFxuICBzZWN0aW9uOjotd2Via2l0LXNjcm9sbGJhcixcXG4gIC5wcm9qZWN0LWNhcmQtd3JhcHBlcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICBAYXBwbHkgaGlkZGVuO1xcbiAgfVxcblxcbiAgYm9keSB7XFxuICAgIEBhcHBseSBiZy1saWdodCBkYXJrOmJnLWRhcmsgdGV4dC1kYXJrIGRhcms6dGV4dC1saWdodDtcXG4gIH1cXG5cXG4gIGJvZHkgKiB7XFxuICAgIEBhcHBseSB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi03NTtcXG4gIH1cXG5cXG4gIGhlYWRlcixcXG4gIGZvb3RlciB7XFxuICAgIEBhcHBseSBoLTE0IHctZnVsbCBweC03IG1kOnB4LTE0IGJnLWxpZ2h0IGRhcms6YmctZGFyayB6LTUwO1xcbiAgfVxcblxcbiAgYXNpZGUge1xcbiAgICBAYXBwbHkgaC1bY2FsYygxMDB2aC0yKjU2cHgpXSBtdC0xNCBwbC1bMjAwcHhdO1xcbiAgfVxcblxcbiAgbWFpbiB7XFxuICAgIEBhcHBseSBoLVtjYWxjKDEwMHZoLTIqNTZweCldIHctZnVsbCBtdC0xNCBvdmVyZmxvdy15LXNjcm9sbCBzbmFwLXkgc2Nyb2xsLXNtb290aDtcXG4gIH1cXG5cXG4gIHNlY3Rpb24ge1xcbiAgICBAYXBwbHkgaC1bY2FsYygxMDB2aC0yKjU2cHgpXSBweC03IG1kOnB4LTE0IHNuYXAtY2VudGVyO1xcbiAgfVxcblxcbiAgYSB7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA1MDBtcyBlYXNlO1xcbiAgfVxcblxcbiAgYnV0dG9uOmRpc2FibGVkIHtcXG4gICAgQGFwcGx5IHRleHQtZGlzYWJsZWQ7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgfVxcblxcbiAgaDEge1xcbiAgICBAYXBwbHkgdGV4dC14bCBtZDp0ZXh0LTN4bDtcXG4gIH1cXG59XFxuXFxuQGxheWVyIGNvbXBvbmVudHMge1xcbiAgLm1vbnRzZXJyYXQge1xcbiAgICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LW9wdGljYWwtc2l6aW5nOiBhdXRvO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICB9XFxuXFxuICAudGV4dC1oZWxsbyB7XFxuICAgIEBhcHBseSB0ZXh0LVsxMHZ3XSBwb3J0cmFpdDp0ZXh0LVsxNXZ3XSBsZWFkaW5nLVswLjhdIGZvbnQtZXh0cmFib2xkO1xcbiAgfVxcblxcbiAgLnRleHQtYmlnIHtcXG4gICAgQGFwcGx5IHRleHQtNnhsIG1kOnRleHQtN3hsIGxlYWRpbmctWzAuOF0gZm9udC1leHRyYWJvbGQ7XFxuICB9XFxuXFxuICAudGV4dC1kaXNhYmxlZCB7XFxuICAgIEBhcHBseSB0ZXh0LXppbmMtNDAwIGRhcms6dGV4dC16aW5jLTUwMDtcXG4gIH1cXG5cXG4gIC5idG4tZGFyay1tb2RlIHtcXG4gICAgQGFwcGx5IGgtNSBtZDpoLTYgYXNwZWN0LVsyXSByb3VuZGVkLW1kIHNoYWRvdy1pbm5lcjtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciA1MDBtcyBlYXNlO1xcbiAgfVxcblxcbiAgLmJ0bi1kYXJrLW1vZGUudGhlbWUtMTpob3ZlciB7XFxuICAgIEBhcHBseSBiZy10aGVtZS0xO1xcbiAgfVxcblxcbiAgLmJ0bi1kYXJrLW1vZGUudGhlbWUtMjpob3ZlciB7XFxuICAgIEBhcHBseSBiZy10aGVtZS0yO1xcbiAgfVxcblxcbiAgLmJ0bi1kYXJrLW1vZGUudGhlbWUtMzpob3ZlciB7XFxuICAgIEBhcHBseSBiZy10aGVtZS0zO1xcbiAgfVxcblxcbiAgLmRhcmstbW9kZS1iYWxsIHtcXG4gICAgQGFwcGx5IGgtW2NhbGMoMTAwJS00cHgpXSBhc3BlY3Qtc3F1YXJlIG14LTAuNSBiZy1saWdodCBkYXJrOmJnLWRhcmsgcm91bmRlZC1tZDtcXG4gIH1cXG5cXG4gIC5kYXJrLW1vZGUtYmFsbCB7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA3NTBtcyBlYXNlO1xcbiAgfVxcblxcbiAgLmRhcmstbW9kZS1iYWxsLmRhcmsge1xcbiAgICBAYXBwbHkgdHJhbnNsYXRlLXgtW2NhbGMoMTAwJSs0cHgpXTtcXG4gIH1cXG5cXG4gIC5pY29uLW1vZGUtZGFyayxcXG4gIC5pY29uLW1vZGUge1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDc1bXMgZWFzZTtcXG4gIH1cXG5cXG4gIC5pY29uLW1vZGUtZGFyayB7XFxuICAgIEBhcHBseSBvcGFjaXR5LTAgZGFyazpvcGFjaXR5LTEwMCBhYnNvbHV0ZTtcXG4gIH1cXG5cXG4gIC5pY29uLW1vZGUge1xcbiAgICBAYXBwbHkgb3BhY2l0eS0xMDAgZGFyazpvcGFjaXR5LTAgYWJzb2x1dGU7XFxuICB9XFxuXFxuICAuaWNvbi1hYm91dC10b29sLFxcbiAgLmljb24tY29udGFjdC1saW5rIHtcXG4gICAgQGFwcGx5IGgtWzMwcHhdIHNtOmgtWzQwcHhdIHRleHQtWzMwcHhdIHNtOnRleHQtWzQwcHhdIGFzcGVjdC1zcXVhcmU7XFxuICB9XFxuXFxuICAuaWNvbi1uZXh0IHtcXG4gICAgQGFwcGx5IGgtWzcwcHhdIGFzcGVjdC1zcXVhcmU7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA1MDBtcyBlYXNlO1xcbiAgfVxcblxcbiAgYnV0dG9uOmhvdmVyIC5pY29uLW5leHQge1xcbiAgICBAYXBwbHkgc2NhbGUtMTEwO1xcbiAgfVxcblxcbiAgLmJ0bi1taW5pLXRhYiB7XFxuICAgIEBhcHBseSBoLTMgYXNwZWN0LVs0XSBib3JkZXIgYm9yZGVyLWxpZ2h0IGRhcms6Ym9yZGVyLXRoZW1lLTMgaG92ZXI6YmctbGlnaHQgaG92ZXI6ZGFyazpiZy10aGVtZS0zIGhvdmVyOmJnLW9wYWNpdHktNTAgaG92ZXI6ZGFyazpiZy1vcGFjaXR5LTUwIHJvdW5kZWQtbWQ7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNTAwbXMgZWFzZTtcXG4gIH1cXG5cXG4gIC5idG4tbWluaS10YWIuYWN0aXZlIHtcXG4gICAgQGFwcGx5IGJnLWxpZ2h0IGRhcms6YmctdGhlbWUtMztcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LWNhcmQtb3V0ZXItd3JhcHBlciB7XFxuICAgIEBhcHBseSB3LVs2MCVdIHAtNCBib3JkZXIgYm9yZGVyLWxpZ2h0IGRhcms6Ym9yZGVyLXRoZW1lLTMgcm91bmRlZC1tZCByZWxhdGl2ZSBvdmVyZmxvdy15LWhpZGRlbjtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LWNhcmQtd3JhcHBlciB7XFxuICAgIEBhcHBseSBiZy1saWdodCBkYXJrOmJnLWRhcmsgcm91bmRlZC1tZCBmbGV4IGdhcC00IG92ZXJmbG93LXgtc2Nyb2xsIHNuYXAteCBzY3JvbGwtc21vb3RoIHJlbGF0aXZlO1xcbiAgfVxcblxcbiAgLnByb2plY3QtY2FyZCB7XFxuICAgIEBhcHBseSBtaW4tdy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHNuYXAtY2VudGVyIHJlbGF0aXZlO1xcbiAgfVxcblxcbiAgLnByb2plY3QtY2FyZC1pbWFnZSB7XFxuICAgIEBhcHBseSByb3VuZGVkLW1kIG9wYWNpdHktNTA7XFxuICB9XFxuXFxuICAucHJvamVjdC1jYXJkLWluZGV4IHtcXG4gICAgQGFwcGx5IHRleHQtOHhsIGxlYWRpbmctWzAuOF0gZm9udC1leHRyYWJvbGQgYWJzb2x1dGUgdG9wLTAgbGVmdC0wO1xcbiAgfVxcblxcbiAgLnByb2plY3QtY2FyZC1uYW1lIHtcXG4gICAgQGFwcGx5IHctZnVsbCB0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC1jZW50ZXIgYWJzb2x1dGUgdG9wLTEvMiAtdHJhbnNsYXRlLXktMS8yO1xcbiAgfVxcblxcbiAgLnByb2plY3QtY2FyZC10eXBlIHtcXG4gICAgQGFwcGx5IHctZnVsbCBmb250LWJvbGQgdGV4dC1jZW50ZXIgYWJzb2x1dGUgdG9wLTIvMyAtdHJhbnNsYXRlLXktMS8yO1xcbiAgfVxcblxcbiAgLnByb2plY3QtY2FyZC1saW5rLXdyYXBwZXIge1xcbiAgICBAYXBwbHkgdy1mdWxsIHB4LTQgcHktMiBmb250LXNlbWlib2xkIHJvdW5kZWQtYi1tZCBmbGV4IGp1c3RpZnktZW5kIGdhcC01IGFic29sdXRlIGJvdHRvbS0wIG9wYWNpdHktNTA7XFxuICAgIHRyYW5zaXRpb246XFxuICAgICAgYmFja2dyb3VuZC1jb2xvciA1MDBtcyBlYXNlLFxcbiAgICAgIG9wYWNpdHkgNTAwbXMgZWFzZTtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LWNhcmQtbGluay13cmFwcGVyID4gYSB7XFxuICAgIEBhcHBseSBob3ZlcjpzY2FsZS0xMTA7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA1MDBtcyBlYXNlO1xcbiAgfVxcblxcbiAgLnByb2plY3QtY2FyZC13cmFwcGVyOmhvdmVyIC5wcm9qZWN0LWNhcmQtbGluay13cmFwcGVyIHtcXG4gICAgQGFwcGx5IGJnLWRhcmsgYmctb3BhY2l0eS0yNSBkYXJrOmJnLW9wYWNpdHktNTAgb3BhY2l0eS0xMDA7XFxuICB9XFxuXFxuICAuaW1nLW9wZW4td3JhcHBlciB7XFxuICAgIEBhcHBseSBoLVsyMHB4XSBhc3BlY3Qtc3F1YXJlIHJlbGF0aXZlO1xcbiAgfVxcblxcbiAgLnByb2plY3QtY2FyZC1leHBhbmQge1xcbiAgICBAYXBwbHkgcHgtNCBweS0yIGFic29sdXRlIGJvdHRvbS0wIGxlZnQtMS8yIC10cmFuc2xhdGUteC0xLzI7XFxuICB9XFxuXFxuICAuYnRuLXByb2plY3QtY2FyZC1uZXh0IHtcXG4gICAgQGFwcGx5IGgtMTQgYXNwZWN0LXNxdWFyZSBiZy1kYXJrIGRhcms6YmctbGlnaHQgYmctb3BhY2l0eS01MCAtcm90YXRlLTkwIG9wYWNpdHktNTAgYWJzb2x1dGUgdG9wLVtjYWxjKDUwJS0yOHB4KV0gcmlnaHQtNDtcXG4gIH1cXG5cXG4gIC5idG4tcHJvamVjdC1jYXJkLXByZXYge1xcbiAgICBAYXBwbHkgaC0xNCBhc3BlY3Qtc3F1YXJlIGJnLWRhcmsgZGFyazpiZy1saWdodCBiZy1vcGFjaXR5LTUwIHJvdGF0ZS05MCBvcGFjaXR5LTUwIGFic29sdXRlIHRvcC1bY2FsYyg1MCUtMjhweCldIGxlZnQtNDtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LWNhcmQtaW1hZ2UsXFxuICAucHJvamVjdC1jYXJkLWluZGV4LFxcbiAgLnByb2plY3QtY2FyZC1uYW1lLFxcbiAgLnByb2plY3QtY2FyZC10eXBlLFxcbiAgLmJ0bi1wcm9qZWN0LWNhcmQtbmV4dCxcXG4gIC5idG4tcHJvamVjdC1jYXJkLXByZXYge1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDUwMG1zIGVhc2U7XFxuICB9XFxuXFxuICAucHJvamVjdC1jYXJkLWluZm86aG92ZXIgLnByb2plY3QtY2FyZC1pbWFnZSxcXG4gIC5idG4tcHJvamVjdC1jYXJkLW5leHQ6aG92ZXIsXFxuICAuYnRuLXByb2plY3QtY2FyZC1wcmV2OmhvdmVyIHtcXG4gICAgQGFwcGx5IG9wYWNpdHktMTAwO1xcbiAgfVxcblxcbiAgLnByb2plY3QtY2FyZC13cmFwcGVyOmhvdmVyIC5wcm9qZWN0LWNhcmQtaW5kZXgge1xcbiAgICBAYXBwbHkgb3BhY2l0eS01MDtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LWNhcmQtaW5mbzpob3ZlciAucHJvamVjdC1jYXJkLW5hbWUsXFxuICAucHJvamVjdC1jYXJkLWluZm86aG92ZXIgLnByb2plY3QtY2FyZC10eXBlIHtcXG4gICAgQGFwcGx5IG9wYWNpdHktMDtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LWRldGFpbCB7XFxuICAgIEBhcHBseSBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGdhcC0xMCBvcGFjaXR5LTA7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgMXMgZWFzZTtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LWRldGFpbC5hY3RpdmUge1xcbiAgICBAYXBwbHkgb3BhY2l0eS0xMDA7XFxuICB9XFxuXFxuICAudW5kZXJsaW5lLWgsXFxuICAuaGlnaGxpZ2h0LWgge1xcbiAgICBAYXBwbHkgcmVsYXRpdmU7XFxuICB9XFxuXFxuICAudW5kZXJsaW5lLWg6YWZ0ZXIge1xcbiAgICBAYXBwbHkgaC0wLjUgdy0wIGJnLWRhcmsgZGFyazpiZy1saWdodCByb3VuZGVkLWZ1bGwgYWJzb2x1dGUgbGVmdC0wIGJvdHRvbS0wLjU7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCA1MDBtcyBlYXNlO1xcbiAgfVxcblxcbiAgYnV0dG9uOmhvdmVyIC51bmRlcmxpbmUtaDphZnRlciB7XFxuICAgIEBhcHBseSB3LWZ1bGw7XFxuICB9XFxuXFxuICAuaGlnaGxpZ2h0LWg6YWZ0ZXIge1xcbiAgICBAYXBwbHkgaC1bNTAlXSB3LTAgb3BhY2l0eS04MCBhYnNvbHV0ZSB0b3AtWzI1JV0gbGVmdC1bLTE1cHhdIC16LTEwO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgdHJhbnNpdGlvbjogd2lkdGggNTAwbXMgZWFzZTtcXG4gIH1cXG5cXG4gIGJ1dHRvbjpob3ZlciAuaGlnaGxpZ2h0LWg6YWZ0ZXIge1xcbiAgICBAYXBwbHkgdy1bY2FsYygxMDAlKzMwcHgpXTtcXG4gIH1cXG5cXG4gIC5hYm91dC1zcGFuIHtcXG4gICAgQGFwcGx5IHRleHQtbGlnaHQgZGFyazp0ZXh0LXRoZW1lLTI7XFxuICB9XFxuXFxuICAudG9vbDpob3ZlciAuaWNvbi1hYm91dC10b29sIHtcXG4gICAgQGFwcGx5IGJsb2NrO1xcbiAgfVxcblxcbiAgLyogQW5pbWF0aW9uICovXFxuICBbY2xhc3NePVxcXCJhbmltYXRlLVxcXCJdIHtcXG4gICAgd2lsbC1jaGFuZ2U6IGFuaW1hdGlvbjtcXG4gIH1cXG59XFxuXFxuQGxheWVyIHV0aWxpdGllcyB7XFxuICBhc2lkZSxcXG4gICNidG4tbWVudS1sLFxcbiAgI2J0bi1tZW51LWwtY2xvc2UsXFxuICAjYnRuLW1lbnUtbC1jbG9zZSA+IGRpdixcXG4gICNidG4tcHJvamVjdC1kZXRhaWwtY2xvc2Uge1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNTAwbXMgZWFzZTtcXG4gIH1cXG5cXG4gIG1haW4ubW92ZSB7XFxuICAgIEBhcHBseSB0cmFuc2xhdGUteC1bNDB2d107XFxuICB9XFxuXFxuICBhc2lkZS5tb3ZlIHtcXG4gICAgQGFwcGx5IHRyYW5zbGF0ZS14LTA7XFxuICB9XFxuXFxuICAjYnRuLW1lbnUtbC5zaG93IHtcXG4gICAgQGFwcGx5IHRyYW5zbGF0ZS15LVsyMDBweF07XFxuICB9XFxuXFxuICAjYnRuLW1lbnUtbC1jbG9zZS5zaG93IHtcXG4gICAgQGFwcGx5IHRyYW5zbGF0ZS14LVsyMDBweF07XFxuICB9XFxuXFxuICAjYnRuLW1lbnUtbC1jbG9zZTpob3ZlciA+IGRpdiB7XFxuICAgIEBhcHBseSByb3RhdGUtMTgwO1xcbiAgfVxcblxcbiAgbWFpbiB7XFxuICAgIHRyYW5zaXRpb246XFxuICAgICAgdHJhbnNmb3JtIDUwMG1zIGVhc2UsXFxuICAgICAgb3BhY2l0eSA1MDBtcyBlYXNlO1xcbiAgfVxcblxcbiAgI2FydGljbGUtYWJvdXQge1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDUwMG1zIGVhc2U7XFxuICB9XFxuXFxuICAjcHJvamVjdC1jYXJkLWRldGFpbC13cmFwcGVyIHtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7XFxuICB9XFxuXFxuICAjcHJvamVjdC1jYXJkLWRldGFpbC13cmFwcGVyLmFjdGl2ZSB7XFxuICAgIEBhcHBseSB0cmFuc2xhdGUteS1bY2FsYygtMTAwJS0xNnB4KV07XFxuICB9XFxuXFxuICAvKiBNZW51IGRvdCAqL1xcbiAgYnV0dG9uOmRpc2FibGVkID4gZGl2ID4gc3BhbiB7XFxuICAgIEBhcHBseSBvcGFjaXR5LTEwMDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBjYXJvdXNlbCA9ICgoKSA9PiB7XG4gIGNvbnN0IGJ0blByb2plY3ROZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tcHJvamVjdC1jYXJkLW5leHRcIik7XG4gIGNvbnN0IGJ0blByb2plY3RQcmV2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tcHJvamVjdC1jYXJkLXByZXZcIik7XG5cbiAgY29uc3QgcHJvamVjdENhcmRXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWNhcmQtd3JhcHBlclwiKTtcbiAgY29uc3QgYnRuTWluaVRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ0bi1taW5pLXRhYlwiKTtcblxuICBjb25zdCBwcm9qZWN0Q2FyZDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtY2FyZC0xXCIpO1xuICBjb25zdCBwcm9qZWN0Q2FyZDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtY2FyZC0yXCIpO1xuXG4gIGNvbnN0IGdhcCA9IDE2O1xuICBsZXQgc2Nyb2xsV2lkdGhQcm9qZWN0Q2FyZDEgPSAwO1xuICBsZXQgc2Nyb2xsV2lkdGhQcm9qZWN0Q2FyZDIgPSAwO1xuXG4gIGxldCBpID0gMTtcblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIGdldFNjcm9sbFdpZHRoUHJvamVjdENhcmQoKTtcblxuICAgIGJ0blByb2plY3ROZXh0Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjYnRuLW1pbmktdGFiLSR7aX1gKS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgaWYgKGkgPT09IDMpIHtcbiAgICAgICAgcHJvamVjdENhcmRXcmFwcGVyLnNjcm9sbFRvKDAsIDApO1xuICAgICAgICBpID0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2plY3RDYXJkV3JhcHBlci5zY3JvbGxCeShzY3JvbGxXaWR0aFByb2plY3RDYXJkMSwgMCk7XG4gICAgICAgIGkgKz0gMTtcbiAgICAgIH1cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNidG4tbWluaS10YWItJHtpfWApLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgfTtcblxuICAgIGJ0blByb2plY3RQcmV2Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjYnRuLW1pbmktdGFiLSR7aX1gKS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgaWYgKGkgPT09IDEpIHtcbiAgICAgICAgcHJvamVjdENhcmRXcmFwcGVyLnNjcm9sbFRvKHNjcm9sbFdpZHRoUHJvamVjdENhcmQyICsgMSwgMCk7XG4gICAgICAgIGkgPSAzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvamVjdENhcmRXcmFwcGVyLnNjcm9sbEJ5KC1zY3JvbGxXaWR0aFByb2plY3RDYXJkMSwgMCk7XG4gICAgICAgIGkgLT0gMTtcbiAgICAgIH1cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNidG4tbWluaS10YWItJHtpfWApLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgfTtcblxuICAgIHByb2plY3RDYXJkV3JhcHBlci5vbnNjcm9sbGVuZCA9ICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNidG4tbWluaS10YWItJHtpfWApLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICBjb25zdCBzY3JvbGwgPSBwcm9qZWN0Q2FyZFdyYXBwZXIuc2Nyb2xsTGVmdDtcbiAgICAgIGlmIChzY3JvbGwgPj0gMCAmJiBzY3JvbGwgPCBzY3JvbGxXaWR0aFByb2plY3RDYXJkMSkgaSA9IDE7XG4gICAgICBlbHNlIGlmIChcbiAgICAgICAgc2Nyb2xsID49IHNjcm9sbFdpZHRoUHJvamVjdENhcmQxICYmXG4gICAgICAgIHNjcm9sbCA8IHNjcm9sbFdpZHRoUHJvamVjdENhcmQyXG4gICAgICApXG4gICAgICAgIGkgPSAyO1xuICAgICAgZWxzZSBpID0gMztcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNidG4tbWluaS10YWItJHtpfWApLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgfTtcblxuICAgIGJ0bk1pbmlUYWJzLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgYnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNidG4tbWluaS10YWItJHtpfWApLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICAgIGkgPSArYnRuLmlkLnNsaWNlKC0xKTtcbiAgICAgICAgaWYgKGkgPT09IDEpIHByb2plY3RDYXJkV3JhcHBlci5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgZWxzZSBpZiAoaSA9PT0gMilcbiAgICAgICAgICBwcm9qZWN0Q2FyZFdyYXBwZXIuc2Nyb2xsVG8oc2Nyb2xsV2lkdGhQcm9qZWN0Q2FyZDEgKyAxLCAwKTtcbiAgICAgICAgZWxzZSBwcm9qZWN0Q2FyZFdyYXBwZXIuc2Nyb2xsVG8oc2Nyb2xsV2lkdGhQcm9qZWN0Q2FyZDIgKyAxLCAwKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2J0bi1taW5pLXRhYi0ke2l9YCkuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBidG5Qcm9qZWN0TmV4dC5jbGljaygpO1xuICAgIH0sIDEwMDAwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFNjcm9sbFdpZHRoUHJvamVjdENhcmQoKSB7XG4gICAgc2Nyb2xsV2lkdGhQcm9qZWN0Q2FyZDEgPSBwcm9qZWN0Q2FyZDEuY2xpZW50V2lkdGggKyBnYXA7XG4gICAgc2Nyb2xsV2lkdGhQcm9qZWN0Q2FyZDIgPVxuICAgICAgcHJvamVjdENhcmQyLmNsaWVudFdpZHRoICsgZ2FwICsgc2Nyb2xsV2lkdGhQcm9qZWN0Q2FyZDE7XG4gIH1cblxuICByZXR1cm4geyBpbml0LCBnZXRTY3JvbGxXaWR0aFByb2plY3RDYXJkIH07XG59KSgpO1xuXG5leHBvcnQgeyBjYXJvdXNlbCB9O1xuIiwiY29uc3QgZGFya01vZGUgPSAoKCkgPT4ge1xuICBjb25zdCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5idG4tZGFyay1tb2RlXCIpO1xuICBjb25zdCBiYWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGFyay1tb2RlLWJhbGxcIik7XG4gIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBfZGV0ZWN0RGFya01vZGUoKTtcbiAgICBidG5zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgYnRuLm9uY2xpY2sgPSBfdG9nZ2xlO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gX2RldGVjdERhcmtNb2RlKCkge1xuICAgIGlmIChCb29sZWFuKGxvY2FsU3RvcmFnZS50aGVtZSkpIHtcbiAgICAgIGlmIChsb2NhbFN0b3JhZ2UudGhlbWUgPT09IFwiZGFya1wiKSB7XG4gICAgICAgIF90b2dnbGUoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICB3aW5kb3cubWF0Y2hNZWRpYSAmJlxuICAgICAgd2luZG93Lm1hdGNoTWVkaWEoXCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspXCIpLm1hdGNoZXNcbiAgICApIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgXCJkYXJrXCIpO1xuICAgICAgX3RvZ2dsZSgpO1xuICAgIH0gZWxzZSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIFwibGlnaHRcIik7XG4gIH1cblxuICBmdW5jdGlvbiBfdG9nZ2xlKCkge1xuICAgIGh0bWwuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmtcIik7XG4gICAgYmFsbHMuZm9yRWFjaCgoYmFsbCkgPT4ge1xuICAgICAgYmFsbC5jbGFzc0xpc3QudG9nZ2xlKFwiZGFya1wiKTtcbiAgICB9KTtcblxuICAgIGlmICghaHRtbC5jbGFzc0xpc3QuY29udGFpbnMoXCJkYXJrXCIpKVxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCBcImxpZ2h0XCIpO1xuICAgIGVsc2UgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCBcImRhcmtcIik7XG4gIH1cblxuICByZXR1cm4geyBpbml0IH07XG59KSgpO1xuXG5leHBvcnQgeyBkYXJrTW9kZSB9O1xuIiwiaW1wb3J0IGZhdmljb24zMncgZnJvbSBcIi4uL2ltZy9pY29ucy9mYXZpY29uLTMydy5wbmdcIjtcbmltcG9ydCBtZW51NTB3IGZyb20gXCIuLi9pbWcvaWNvbnMvbWVudS01MHcucG5nXCI7XG5pbXBvcnQgbWVudVc1MHcgZnJvbSBcIi4uL2ltZy9pY29ucy9tZW51LXctNTB3LnBuZ1wiO1xuaW1wb3J0IGNsb3NlNTB3IGZyb20gXCIuLi9pbWcvaWNvbnMvY2xvc2UtNTB3LnBuZ1wiO1xuaW1wb3J0IGNsb3NlVzUwdyBmcm9tIFwiLi4vaW1nL2ljb25zL2Nsb3NlLXctNTB3LnBuZ1wiO1xuaW1wb3J0IGNoZXZyb24xMDB3IGZyb20gXCIuLi9pbWcvaWNvbnMvY2hldnJvbi0xMDB3LnBuZ1wiO1xuaW1wb3J0IGNoZXZyb25XMTAwdyBmcm9tIFwiLi4vaW1nL2ljb25zL2NoZXZyb24tdy0xMDB3LnBuZ1wiO1xuaW1wb3J0IG9wZW41MHcgZnJvbSBcIi4uL2ltZy9pY29ucy9vcGVuLTUwdy5wbmdcIjtcbmltcG9ydCBvcGVuVzUwdyBmcm9tIFwiLi4vaW1nL2ljb25zL29wZW4tdy01MHcucG5nXCI7XG5pbXBvcnQgcHJvZmlsZTEwMDB3IGZyb20gXCIuLi9pbWcvcHJvZmlsZS0xMDAwdy5qcGdcIjtcbmltcG9ydCB5cGV0IGZyb20gXCIuLi9pbWcvcHJvamVjdHMveXBldC5wbmdcIjtcbmltcG9ydCB3ZWF0aGVyQXBwIGZyb20gXCIuLi9pbWcvcHJvamVjdHMvd2VhdGhlci5wbmdcIjtcbmltcG9ydCBob21lcGFnZSBmcm9tIFwiLi4vaW1nL3Byb2plY3RzL2hvbWVwYWdlLnBuZ1wiO1xuXG5jb25zdCBpbWdOZXh0RGFyayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW1nLW5leHQtZGFya1wiKTtcbmNvbnN0IGltZ05leHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmltZy1uZXh0XCIpO1xuY29uc3QgaW1nT3BlbkRhcmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmltZy1vcGVuLWRhcmtcIik7XG5jb25zdCBpbWdPcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbWctb3BlblwiKTtcblxuaW1nTmV4dERhcmsuZm9yRWFjaCgoaW1nKSA9PiB7XG4gIGltZy5zcmMgPSBjaGV2cm9uVzEwMHc7XG59KTtcblxuaW1nTmV4dC5mb3JFYWNoKChpbWcpID0+IHtcbiAgaW1nLnNyYyA9IGNoZXZyb24xMDB3O1xufSk7XG5cbmltZ09wZW5EYXJrLmZvckVhY2goKGltZykgPT4ge1xuICBpbWcuc3JjID0gb3Blblc1MHc7XG59KTtcblxuaW1nT3Blbi5mb3JFYWNoKChpbWcpID0+IHtcbiAgaW1nLnNyYyA9IG9wZW41MHc7XG59KTtcbiIsImltcG9ydCB7IHNjcm9sbCB9IGZyb20gXCIuL3Njcm9sbFwiO1xuXG5jb25zdCBtZW51ID0gKCgpID0+IHtcbiAgY29uc3QgYnRuTWVudUwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1tZW51LWxcIik7XG4gIGNvbnN0IGJ0bk1lbnVMQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1tZW51LWwtY2xvc2VcIik7XG5cbiAgY29uc3QgYXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYXNpZGVcIik7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcblxuICBjb25zdCBidG5Ib21lTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLWhvbWUtbFwiKTtcbiAgY29uc3QgYnRuQWJvdXRMID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tYWJvdXQtbFwiKTtcbiAgY29uc3QgYnRuQWJvdXRNb3JlTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLWFib3V0LW1vcmUtbFwiKTtcbiAgY29uc3QgYnRuUHJvamVjdHNMID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tcHJvamVjdHMtbFwiKTtcblxuICBjb25zdCBhYm91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWJvdXRcIik7XG4gIGNvbnN0IGFydGljbGVBYm91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXJ0aWNsZS1hYm91dFwiKTtcblxuICBjb25zdCBidG5zUHJvamVjdENhcmRFeHBhbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgIFwiLnByb2plY3QtY2FyZC1leHBhbmRcIixcbiAgKTtcbiAgY29uc3QgYnRuUHJvamVjdERldGFpbENsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIiNidG4tcHJvamVjdC1kZXRhaWwtY2xvc2VcIixcbiAgKTtcblxuICBjb25zdCBwcm9qZWN0Q2FyZERldGFpbFdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiI3Byb2plY3QtY2FyZC1kZXRhaWwtd3JhcHBlclwiLFxuICApO1xuXG4gIGxldCBpc09wZW5BYm91dE1vcmUgPSAwO1xuICBsZXQgaXNPcGVuUHJvamVjdENhcmQgPSAwO1xuICBsZXQgYWN0aXZlUHJvamVjdENhcmQgPSAwO1xuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgX2luaXRCdG5NZW51TCgpO1xuICAgIF9pbml0QnRuTmF2TCgpO1xuICAgIF9pbml0QnRuQWJvdXRNb3JlTCgpO1xuICAgIF9pbml0QnRuUHJvamVjdENhcmRFeHBhbmRzKCk7XG5cbiAgICAvLyBGb3IgdGVzdGluZ1xuICAgIGJ0bk1lbnVMLmNsaWNrKCk7XG4gICAgYnRuUHJvamVjdHNMLmNsaWNrKCk7XG4gIH1cblxuICBmdW5jdGlvbiBfaW5pdEJ0blByb2plY3RDYXJkRXhwYW5kcygpIHtcbiAgICBidG5zUHJvamVjdENhcmRFeHBhbmQuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICBidG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgcHJvamVjdENhcmREZXRhaWxXcmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICAgIGFjdGl2ZVByb2plY3RDYXJkID0gK2J0bi5pZC5zbGljZSgtMSk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdERldGFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYCNwcm9qZWN0LWRldGFpbC0ke2FjdGl2ZVByb2plY3RDYXJkfWAsXG4gICAgICAgICk7XG4gICAgICAgIGlmIChpc09wZW5Qcm9qZWN0Q2FyZCA9PT0gMSlcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHByb2plY3REZXRhaWwuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIHByb2plY3REZXRhaWwuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgcHJvamVjdERldGFpbC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0RGV0YWlsLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpc09wZW5Qcm9qZWN0Q2FyZCA9IDE7XG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgYnRuUHJvamVjdERldGFpbENsb3NlLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBkb2N1bWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvcihgI2J0bi1wcm9qZWN0LWNhcmQtZXhwYW5kLSR7YWN0aXZlUHJvamVjdENhcmR9YClcbiAgICAgICAgLmNsaWNrKCk7XG4gICAgICBpc09wZW5Qcm9qZWN0Q2FyZCA9IDA7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9pbml0QnRuQWJvdXRNb3JlTCgpIHtcbiAgICBidG5BYm91dE1vcmVMLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBpZiAoaXNPcGVuQWJvdXRNb3JlID09PSAxKSB7XG4gICAgICAgIGFydGljbGVBYm91dC5jbGFzc0xpc3QudG9nZ2xlKFwib3BhY2l0eS01MFwiKTtcbiAgICAgICAgYWJvdXQuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgIGJ0bkFib3V0TW9yZUwucXVlcnlTZWxlY3RvcihcImRpdlwiKS50ZXh0Q29udGVudCA9IFwiTU9SRVwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXJ0aWNsZUFib3V0LmNsYXNzTGlzdC50b2dnbGUoXCJvcGFjaXR5LTUwXCIpO1xuICAgICAgICBhYm91dC5zY3JvbGxUbyhhcnRpY2xlQWJvdXQuY2xpZW50V2lkdGggKyAxLCAwKTtcbiAgICAgICAgYnRuQWJvdXRNb3JlTC5xdWVyeVNlbGVjdG9yKFwiZGl2XCIpLnRleHRDb250ZW50ID0gXCJCQUNLXCI7XG4gICAgICB9XG4gICAgICBidG5BYm91dE1vcmVMLmNsYXNzTGlzdC50b2dnbGUoXCJhbmltYXRlLWNoZXZyb24tcmlnaHRcIik7XG4gICAgICBidG5BYm91dE1vcmVMLmNsYXNzTGlzdC50b2dnbGUoXCJhbmltYXRlLWNoZXZyb24tbGVmdFwiKTtcbiAgICAgIGlzT3BlbkFib3V0TW9yZSA9ICshaXNPcGVuQWJvdXRNb3JlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBfaW5pdEJ0bk1lbnVMKCkge1xuICAgIGJ0bk1lbnVMLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBtYWluLmNsYXNzTGlzdC50b2dnbGUoXCJvcGFjaXR5LTUwXCIpO1xuICAgICAgX3RvZ2dsZU1lbnVMKCk7XG4gICAgfTtcblxuICAgIGJ0bk1lbnVMQ2xvc2Uub25jbGljayA9ICgpID0+IHtcbiAgICAgIG1haW4uY2xhc3NMaXN0LnRvZ2dsZShcIm9wYWNpdHktNTBcIik7XG4gICAgICBfdG9nZ2xlTWVudUwoKTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gX3RvZ2dsZU1lbnVMKCkge1xuICAgIGJ0bk1lbnVMLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xuICAgIGJ0bk1lbnVMQ2xvc2UuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XG4gICAgYXNpZGUuY2xhc3NMaXN0LnRvZ2dsZShcIm1vdmVcIik7XG4gICAgbWFpbi5jbGFzc0xpc3QudG9nZ2xlKFwibW92ZVwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9pbml0QnRuTmF2TCgpIHtcbiAgICBidG5Ib21lTC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgYnRuTWVudUxDbG9zZS5jbGljaygpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIG1haW4uc2Nyb2xsVG8oMCwgMCk7XG4gICAgICB9LCA1MDApO1xuICAgIH07XG5cbiAgICBidG5BYm91dEwub25jbGljayA9ICgpID0+IHtcbiAgICAgIGJ0bk1lbnVMQ2xvc2UuY2xpY2soKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzY3JvbGwuc2Nyb2xsVG8oMSk7XG4gICAgICB9LCA1MDApO1xuICAgIH07XG5cbiAgICBidG5Qcm9qZWN0c0wub25jbGljayA9ICgpID0+IHtcbiAgICAgIGJ0bk1lbnVMQ2xvc2UuY2xpY2soKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzY3JvbGwuc2Nyb2xsVG8oMik7XG4gICAgICB9LCA1MDApO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4geyBpbml0IH07XG59KSgpO1xuXG5leHBvcnQgeyBtZW51IH07XG4iLCJjb25zdCBzY3JvbGwgPSAoKCkgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hvbWVcIik7XG4gIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhYm91dFwiKTtcblxuICBjb25zdCBidG5EYXJrTW9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnRuLWRhcmstbW9kZVwiKTtcbiAgY29uc3Qgc3Bhbk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnUtdGV4dCA+IHNwYW5cIik7XG4gIGNvbnN0IHNwYW5Db250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0LXRleHQgPiBzcGFuXCIpO1xuXG4gIGNvbnN0IGJ0bnNNZW51TCA9IFtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1ob21lLWxcIiksXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tYWJvdXQtbFwiKSxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1wcm9qZWN0cy1sXCIpLFxuICBdO1xuXG4gIGNvbnN0IG1hcmdpblRvcCA9IDU2O1xuICBsZXQgc2Nyb2xsSGVpZ2h0SG9tZSA9IDA7XG4gIGxldCBzY3JvbGxIZWlnaHRBYm91dCA9IDA7XG4gIGxldCBjdXJyZW50VGhlbWUgPSAxO1xuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgZ2V0U2Nyb2xsSGVpZ2h0U2VjdGlvbigpO1xuXG4gICAgbWFpbi5vbnNjcm9sbGVuZCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHNjcm9sbCA9IG1haW4uc2Nyb2xsVG9wO1xuICAgICAgaWYgKHNjcm9sbCA+PSAwICYmIHNjcm9sbCA8IHNjcm9sbEhlaWdodEhvbWUpIHtcbiAgICAgICAgX2NoYW5nZVRoZW1lKDEpO1xuICAgICAgICBfZGlzYWJsZUJ0bigxKTtcbiAgICAgIH0gZWxzZSBpZiAoc2Nyb2xsID49IHNjcm9sbEhlaWdodEhvbWUgJiYgc2Nyb2xsIDwgc2Nyb2xsSGVpZ2h0QWJvdXQpIHtcbiAgICAgICAgX2NoYW5nZVRoZW1lKDIpO1xuICAgICAgICBfZGlzYWJsZUJ0bigyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF9jaGFuZ2VUaGVtZSgzKTtcbiAgICAgICAgX2Rpc2FibGVCdG4oMyk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFNjcm9sbEhlaWdodFNlY3Rpb24oKSB7XG4gICAgc2Nyb2xsSGVpZ2h0SG9tZSA9IGhvbWUuY2xpZW50SGVpZ2h0ICsgbWFyZ2luVG9wO1xuICAgIHNjcm9sbEhlaWdodEFib3V0ID0gYWJvdXQuY2xpZW50SGVpZ2h0ICsgbWFyZ2luVG9wICsgc2Nyb2xsSGVpZ2h0SG9tZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNjcm9sbFRvKHNlY3Rpb24pIHtcbiAgICBpZiAoc2VjdGlvbiA9PT0gMSkgbWFpbi5zY3JvbGxUbygwLCBzY3JvbGxIZWlnaHRIb21lICsgMSk7XG4gICAgZWxzZSBpZiAoc2VjdGlvbiA9PT0gMikgbWFpbi5zY3JvbGxUbygwLCBzY3JvbGxIZWlnaHRBYm91dCArIDEpO1xuICB9XG5cbiAgZnVuY3Rpb24gX2NoYW5nZVRoZW1lKHRoZW1lKSB7XG4gICAgc3Bhbk1lbnUuY2xhc3NMaXN0LnJlbW92ZShgdGV4dC10aGVtZS0ke2N1cnJlbnRUaGVtZX1gKTtcbiAgICBzcGFuQ29udGFjdC5jbGFzc0xpc3QucmVtb3ZlKGB0ZXh0LXRoZW1lLSR7Y3VycmVudFRoZW1lfWApO1xuXG4gICAgYnRuRGFya01vZGUuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZShgdGhlbWUtJHtjdXJyZW50VGhlbWV9YCk7XG4gICAgICBidG4uY2xhc3NMaXN0LmFkZChgdGhlbWUtJHt0aGVtZX1gKTtcbiAgICB9KTtcblxuICAgIHNwYW5NZW51LmNsYXNzTGlzdC5hZGQoYHRleHQtdGhlbWUtJHt0aGVtZX1gKTtcbiAgICBzcGFuQ29udGFjdC5jbGFzc0xpc3QuYWRkKGB0ZXh0LXRoZW1lLSR7dGhlbWV9YCk7XG5cbiAgICBjdXJyZW50VGhlbWUgPSB0aGVtZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9kaXNhYmxlQnRuKG4pIHtcbiAgICBjb25zdCBpbmRleCA9IG4gLSAxO1xuICAgIGNvbnN0IGxlbmd0aCA9IGJ0bnNNZW51TC5sZW5ndGg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGkgPT09IGluZGV4KSBidG5zTWVudUxbaV0uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgZWxzZSBidG5zTWVudUxbaV0uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBpbml0LCBnZXRTY3JvbGxIZWlnaHRTZWN0aW9uLCBzY3JvbGxUbyB9O1xufSkoKTtcblxuZXhwb3J0IHsgc2Nyb2xsIH07XG4iLCJpbXBvcnQgeyBzY3JvbGwgfSBmcm9tIFwiLi9zY3JvbGxcIjtcbmltcG9ydCB7IGNhcm91c2VsIH0gZnJvbSBcIi4vY2Fyb3VzZWxcIjtcblxuY29uc3Qgd2luZG93UmVzaXplID0gKCgpID0+IHtcbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICB3aW5kb3cub25yZXNpemUgPSAoKSA9PiB7XG4gICAgICBzY3JvbGwuZ2V0U2Nyb2xsSGVpZ2h0U2VjdGlvbigpO1xuICAgICAgY2Fyb3VzZWwuZ2V0U2Nyb2xsV2lkdGhQcm9qZWN0Q2FyZCgpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4geyBpbml0IH07XG59KSgpO1xuXG5leHBvcnQgeyB3aW5kb3dSZXNpemUgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IFwiLi9qcy9pbWFnZVwiO1xuaW1wb3J0IHsgZGFya01vZGUgfSBmcm9tIFwiLi9qcy9kYXJrLW1vZGVcIjtcbmltcG9ydCB7IG1lbnUgfSBmcm9tIFwiLi9qcy9tZW51XCI7XG5pbXBvcnQgeyBzY3JvbGwgfSBmcm9tIFwiLi9qcy9zY3JvbGxcIjtcbmltcG9ydCB7IGNhcm91c2VsIH0gZnJvbSBcIi4vanMvY2Fyb3VzZWxcIjtcbmltcG9ydCB7IHdpbmRvd1Jlc2l6ZSB9IGZyb20gXCIuL2pzL3dpbmRvdy1yZXNpemVcIjtcblxuZGFya01vZGUuaW5pdCgpO1xubWVudS5pbml0KCk7XG5zY3JvbGwuaW5pdCgpO1xuY2Fyb3VzZWwuaW5pdCgpO1xud2luZG93UmVzaXplLmluaXQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==