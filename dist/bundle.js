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
}

@media (orientation: portrait) {

  aside {
    width: 60vw;
    padding-right: 1.75rem;
  }

  @media (min-width: 768px) {

    aside {
      padding-right: 3.5rem;
    }
  }
}

@media (orientation: landscape) {

  aside {
    padding-left: 200px;
  }
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
  padding-left: 1.75rem;
  padding-right: 1.75rem;
}

@media (min-width: 768px) {

  section {
    padding-left: 3.5rem;
    padding-right: 3.5rem;
  }
}

@media (orientation: portrait) {

  section {
    padding-left: 0px;
    padding-right: 0px;
  }
}

@media (orientation: landscape) {

  section {
    scroll-snap-align: center;
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
.text-title {
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 800;
  line-height: 0.8;
}
@media (min-width: 768px) {

  .text-title {
    font-size: 3rem;
    line-height: 1;
  }
}
.text-disabled {
  --tw-text-opacity: 1;
  color: rgba(161, 161, 170, 1);
  color: rgba(161, 161, 170, var(--tw-text-opacity));
}
.text-disabled:where(.dark, .dark *) {
  --tw-text-opacity: 1;
  color: rgba(113, 113, 122, 1);
  color: rgba(113, 113, 122, var(--tw-text-opacity));
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
.icon-side-link {
  aspect-ratio: 1 / 1;
  height: 20px;
  font-size: 20px;
}
@media (min-width: 640px) {

  .icon-side-link {
    height: 30px;
    font-size: 30px;
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
  --tw-bg-opacity: 0.5;
}
@media (orientation: portrait) {

  .btn-mini-tab {
    --tw-border-opacity: 1;
    border-color: rgba(14, 165, 233, 1);
    border-color: rgba(14, 165, 233, var(--tw-border-opacity));
  }
}
@media (orientation: landscape) {

  .btn-mini-tab:hover {
    --tw-bg-opacity: 1;
    background-color: rgba(241, 245, 249, 1);
    background-color: rgba(241, 245, 249, var(--tw-bg-opacity));
  }
}
.btn-mini-tab:where(.dark, .dark *) {
  --tw-border-opacity: 1;
  border-color: rgba(14, 165, 233, 1);
  border-color: rgba(14, 165, 233, var(--tw-border-opacity));
}
.btn-mini-tab:where(.dark, .dark *):hover {
  --tw-bg-opacity: 0.5;
}
@media (orientation: landscape) {

  .btn-mini-tab:where(.dark, .dark *):hover {
    --tw-bg-opacity: 1;
    background-color: rgba(14, 165, 233, 1);
    background-color: rgba(14, 165, 233, var(--tw-bg-opacity));
  }
}
.btn-mini-tab {
    transition: background-color 500ms ease;
  }
.btn-mini-tab.active {
  --tw-bg-opacity: 1;
  background-color: rgba(241, 245, 249, 1);
  background-color: rgba(241, 245, 249, var(--tw-bg-opacity));
}
@media (orientation: portrait) {

  .btn-mini-tab.active {
    --tw-bg-opacity: 1;
    background-color: rgba(14, 165, 233, 1);
    background-color: rgba(14, 165, 233, var(--tw-bg-opacity));
  }
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
  border-width: 2px;
  --tw-border-opacity: 1;
  border-color: rgba(241, 245, 249, 1);
  border-color: rgba(241, 245, 249, var(--tw-border-opacity));
  padding: 1rem;
}
@media (orientation: portrait) {

  .project-card-outer-wrapper {
    --tw-border-opacity: 1;
    border-color: rgba(14, 165, 233, 1);
    border-color: rgba(14, 165, 233, var(--tw-border-opacity));
  }
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
}
.project-card {
  position: relative;
  display: flex;
  min-width: 100%;
  scroll-snap-align: center;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  --tw-bg-opacity: 1;
  background-color: rgba(241, 245, 249, 1);
  background-color: rgba(241, 245, 249, var(--tw-bg-opacity));
}
.project-card:where(.dark, .dark *) {
  --tw-bg-opacity: 1;
  background-color: rgba(39, 39, 42, 1);
  background-color: rgba(39, 39, 42, var(--tw-bg-opacity));
}
.project-card-info {
  display: flex;
  height: 100%;
  align-items: center;
}
.project-card-image {
  width: 100%;
  border-radius: 0.375rem;
  opacity: 0.5;
}
.project-card-index {
  position: absolute;
  top: 0px;
  left: 0px;
  font-size: 3.75rem;
  font-weight: 800;
  line-height: 0.8;
}
@media (min-width: 768px) {

  .project-card-index {
    font-size: 6rem;
    line-height: 1;
  }
}
.project-card-name {
  position: absolute;
  top: 50%;
  width: 100%;
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), -50%) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  text-align: center;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
}
@media (min-width: 768px) {

  .project-card-name {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
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
.project-card-expand {
  position: absolute;
  bottom: 0px;
  display: flex;
  width: 100%;
  justify-content: center;
  border-bottom-right-radius: 0.375rem;
  border-bottom-left-radius: 0.375rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-weight: 600;
  opacity: 0.5;
    transition:
      background-color 500ms ease, opacity 500ms ease;
}
.project-card-expand:hover {
  background-color: rgba(39, 39, 42, 0.25);
  background-color: rgba(39, 39, 42, var(--tw-bg-opacity));
  --tw-bg-opacity: 0.25;
  opacity: 1;
}
.project-card-expand:hover:where(.dark, .dark *) {
  --tw-bg-opacity: 0.5;
}
.img-arrow-down-wrapper,
  .img-open-wrapper {
  position: relative;
  aspect-ratio: 1 / 1;
  height: 20px;
}
.project-detail-tool-wrapper {
  display: flex;
  gap: 0.5rem;
}
.project-detail-link-wrapper {
  display: flex;
  justify-content: flex-end;
  gap: 1.25rem;
  font-weight: 600;
}
.project-detail-link-wrapper > a:not([disabled]):hover {
  --tw-scale-x: 1.1;
  --tw-scale-y: 1.1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(1.1) scaleY(1.1);
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
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
.project-card-info:hover .project-card-index {
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
}
@media (orientation: portrait) {

  .project-detail {
    gap: 1.25rem;
  }
}
.project-detail {
    transition: opacity 1s 1s ease;
  }
.project-detail.active {
  opacity: 1;
}
.scroll-wrapper {
  position: absolute;
  bottom: 1rem;
  right: 0.75rem;
  display: flex;
  --tw-translate-y: -100%;
  --tw-translate-x: 33.333333%;
  --tw-rotate: -90deg;
  transform: translate(33.333333%, -100%) rotate(-90deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  align-items: center;
  gap: 0.5rem;
}
.top-wrapper {
  position: absolute;
  bottom: 0.75rem;
  left: 1rem;
  --tw-translate-y: -100%;
  --tw-translate-x: -33.333333%;
  --tw-rotate: 90deg;
  transform: translate(-33.333333%, -100%) rotate(90deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.top-wrapper-p {
  position: absolute;
  bottom: 1rem;
  right: 0.75rem;
  --tw-translate-y: -100%;
  --tw-rotate: 90deg;
  transform: translate(var(--tw-translate-x), -100%) rotate(90deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.top-wrapper > div,
  .top-wrapper-p > div {
    transition: transform 500ms ease;
  }
.top-wrapper:hover > div,
  .top-wrapper-p:hover > div {
  --tw-translate-x: -0.75rem;
  transform: translate(-0.75rem, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
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
}
@media (orientation: portrait) {

  .highlight-h:after {
    left: -10px;
  }
}
.highlight-h:after {
    content: "";
    transition: width 500ms ease;
  }
button:hover .highlight-h:after {
  width: calc(100% + 30px);
}
@media (orientation: portrait) {

  button:hover .highlight-h:after {
    width: calc(100% + 10px);
  }
}
.about-span {
  --tw-text-opacity: 1;
  color: rgba(241, 245, 249, 1);
  color: rgba(241, 245, 249, var(--tw-text-opacity));
}
@media (orientation: portrait) {

  .about-span {
    --tw-text-opacity: 1;
    color: rgba(250, 204, 21, 1);
    color: rgba(250, 204, 21, var(--tw-text-opacity));
  }
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
.bottom-\\[-20px\\] {
  bottom: -20px;
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
.left-\\[15px\\] {
  left: 15px;
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
.z-\\[1\\] {
  z-index: 1;
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
.grid {
  display: grid;
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
.h-7 {
  height: 1.75rem;
}
.h-\\[calc\\(100\\%-30px\\)\\] {
  height: calc(100% - 30px);
}
.h-\\[calc\\(20vw\\*0\\.8\\)\\] {
  height: calc(20vw * 0.8);
}
.h-full {
  height: 100%;
}
.w-7 {
  width: 1.75rem;
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
.w-\\[calc\\(100\\%-30px\\)\\] {
  width: calc(100% - 30px);
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
@keyframes appear-cycle {

  0%, 40% {
    opacity: 1;
  }

  60%, 100% {
    opacity: 0;
  }
}
.animate-appear-cycle {
  animation: appear-cycle 10s infinite alternate;
}
@keyframes appear-cycle {

  0%, 40% {
    opacity: 1;
  }

  60%, 100% {
    opacity: 0;
  }
}
.animate-appear-cycle-r {
  animation: appear-cycle 10s infinite alternate-reverse;
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
.grid-cols-repeat-auto-30 {
  grid-template-columns: repeat(auto-fill, 30px);
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
.self-start {
  align-self: flex-start;
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
.bg-opacity-90 {
  --tw-bg-opacity: 0.9;
}
.px-0 {
  padding-left: 0px;
  padding-right: 0px;
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
.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
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
.font-medium {
  font-weight: 500;
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
main {
    transition:
      transform 500ms ease, opacity 500ms ease;
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
main.move-p {
  --tw-translate-x: -60vw;
  transform: translate(-60vw, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
aside.move-p {
  --tw-translate-x: -100%;
  transform: translate(-100%, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
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
#article-about {
    transition: opacity 500ms ease;
  }
#project-card-detail-wrapper {
    transition: transform 1s ease;
  }
#project-card-detail-wrapper.active {
  --tw-translate-y: calc(-100% - 15px);
  transform: translate(var(--tw-translate-x), calc(-100% - 15px)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
@media (orientation: portrait) {

  #project-card-detail-wrapper.active {
    --tw-translate-y: -100%;
    transform: translate(var(--tw-translate-x), -100%) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}
/* Menu dot */
button:disabled > div > span {
  opacity: 1;
}
@media (orientation: portrait) {

  .portrait\\:text-title {
    font-size: 2.25rem;
    line-height: 2.5rem;
    font-weight: 800;
    line-height: 0.8;
  }

  @media (min-width: 768px) {

    .portrait\\:text-title {
      font-size: 3rem;
      line-height: 1;
    }
  }
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

  .md\\:h-8 {
    height: 2rem;
  }

  .md\\:w-14 {
    width: 3.5rem;
  }

  .md\\:grid-cols-repeat-auto-40 {
    grid-template-columns: repeat(auto-fill, 40px);
  }

  .md\\:px-14 {
    padding-left: 3.5rem;
    padding-right: 3.5rem;
  }

  .md\\:text-2xl {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  .md\\:text-4xl {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }

  .md\\:text-6xl {
    font-size: 3.75rem;
    line-height: 1;
  }

  .md\\:text-lg {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
}
@media (orientation: portrait) {

  .portrait\\:bottom-1 {
    bottom: 0.25rem;
  }

  .portrait\\:bottom-4 {
    bottom: 1rem;
  }

  .portrait\\:left-0 {
    left: 0px;
  }

  .portrait\\:left-full {
    left: 100%;
  }

  .portrait\\:right-7 {
    right: 1.75rem;
  }

  .portrait\\:flex {
    display: flex;
  }

  .portrait\\:hidden {
    display: none;
  }

  .portrait\\:h-\\[500px\\] {
    height: 500px;
  }

  .portrait\\:h-\\[calc\\(100\\%-20px\\)\\] {
    height: calc(100% - 20px);
  }

  .portrait\\:h-fit {
    height: -moz-fit-content;
    height: fit-content;
  }

  .portrait\\:h-full {
    height: 100%;
  }

  .portrait\\:w-\\[75\\%\\] {
    width: 75%;
  }

  .portrait\\:w-full {
    width: 100%;
  }

  .portrait\\:w-screen {
    width: 100vw;
  }

  @keyframes bounce-scroll {

    0%, 100% {
      transform: translateY(-150%) translateX(33%) rotate(-90deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }

    50% {
      transform: translateY(-100%) translateX(33%) rotate(-90deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }

  .portrait\\:animate-bounce-scroll {
    animation: bounce-scroll 1s infinite;
  }

  .portrait\\:flex-col {
    flex-direction: column;
  }

  .portrait\\:flex-col-reverse {
    flex-direction: column-reverse;
  }

  .portrait\\:items-end {
    align-items: flex-end;
  }

  .portrait\\:gap-10 {
    gap: 2.5rem;
  }

  .portrait\\:gap-5 {
    gap: 1.25rem;
  }

  .portrait\\:self-start {
    align-self: flex-start;
  }

  .portrait\\:bg-theme-3 {
    --tw-bg-opacity: 1;
    background-color: rgba(14, 165, 233, 1);
    background-color: rgba(14, 165, 233, var(--tw-bg-opacity));
  }

  .portrait\\:px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .portrait\\:px-7 {
    padding-left: 1.75rem;
    padding-right: 1.75rem;
  }

  .portrait\\:py-10 {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }

  .portrait\\:py-4 {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .portrait\\:text-end {
    text-align: right;
  }

  @media (min-width: 768px) {

    .portrait\\:md\\:right-14 {
      right: 3.5rem;
    }

    .portrait\\:md\\:w-\\[50\\%\\] {
      width: 50%;
    }

    .portrait\\:md\\:px-14 {
      padding-left: 3.5rem;
      padding-right: 3.5rem;
    }
  }
}
@media (orientation: landscape) {

  .landscape\\:top-1\\/2 {
    top: 50%;
  }

  .landscape\\:hidden {
    display: none;
  }

  .landscape\\:-translate-y-1\\/2 {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), -50%) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .landscape\\:translate-x-\\[-40vw\\] {
    --tw-translate-x: -40vw;
    transform: translate(-40vw, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .landscape\\:bg-theme-3 {
    --tw-bg-opacity: 1;
    background-color: rgba(14, 165, 233, 1);
    background-color: rgba(14, 165, 233, var(--tw-bg-opacity));
  }

  .landscape\\:p-8 {
    padding: 2rem;
  }

  .landscape\\:px-14 {
    padding-left: 3.5rem;
    padding-right: 3.5rem;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  /* https://fonts.google.com/specimen/Montserrat */\n  font-family: \"Montserrat\";\n  src: url(./font/Montserrat-VariableFont_wght.ttf) format(\"TrueType\");\n}\n\n@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n@layer base {\n  /* Hide scrollbar for IE, Edge and Firefox */\n  main,\n  section,\n  .project-card-wrapper {\n    -ms-overflow-style: none; /* IE and Edge */\n    scrollbar-width: none; /* Firefox */\n  }\n\n  /* Hide scrollbar for Chrome, Safari and Opera */\n  main::-webkit-scrollbar,\n  section::-webkit-scrollbar,\n  .project-card-wrapper::-webkit-scrollbar {\n    @apply hidden;\n  }\n\n  body {\n    @apply bg-light dark:bg-dark text-dark dark:text-light;\n  }\n\n  body * {\n    @apply transition-colors duration-75;\n  }\n\n  header,\n  footer {\n    @apply h-14 w-full px-7 md:px-14 bg-light dark:bg-dark z-50;\n  }\n\n  aside {\n    @apply h-[calc(100vh-2*56px)] portrait:w-[60vw] mt-14 landscape:pl-[200px] portrait:pr-7 portrait:md:pr-14;\n  }\n\n  main {\n    @apply h-[calc(100vh-2*56px)] w-full mt-14 overflow-y-scroll snap-y scroll-smooth;\n  }\n\n  section {\n    @apply h-[calc(100vh-2*56px)] px-7 portrait:px-0 md:px-14 landscape:snap-center;\n  }\n\n  a {\n    transition: transform 500ms ease;\n  }\n\n  button:disabled {\n    @apply text-disabled;\n    pointer-events: none;\n  }\n\n  h1 {\n    @apply text-xl md:text-3xl;\n  }\n}\n\n@layer components {\n  .montserrat {\n    font-family: \"Montserrat\", sans-serif;\n    font-optical-sizing: auto;\n    font-style: normal;\n  }\n\n  .text-hello {\n    @apply text-[10vw] portrait:text-[15vw] leading-[0.8] font-extrabold;\n  }\n\n  .text-big {\n    @apply text-6xl md:text-7xl leading-[0.8] font-extrabold;\n  }\n\n  .text-title {\n    @apply text-4xl md:text-5xl leading-[0.8] font-extrabold;\n  }\n\n  .text-disabled {\n    @apply text-zinc-400 dark:text-zinc-500;\n  }\n\n  .btn-dark-mode {\n    @apply h-5 md:h-6 aspect-[2] rounded-md shadow-inner;\n    transition: background-color 500ms ease;\n  }\n\n  .btn-dark-mode.theme-1:hover {\n    @apply bg-theme-1;\n  }\n\n  .btn-dark-mode.theme-2:hover {\n    @apply bg-theme-2;\n  }\n\n  .btn-dark-mode.theme-3:hover {\n    @apply bg-theme-3;\n  }\n\n  .dark-mode-ball {\n    @apply h-[calc(100%-4px)] aspect-square mx-0.5 bg-light dark:bg-dark rounded-md;\n  }\n\n  .dark-mode-ball {\n    transition: transform 750ms ease;\n  }\n\n  .dark-mode-ball.dark {\n    @apply translate-x-[calc(100%+4px)];\n  }\n\n  .icon-mode-dark,\n  .icon-mode {\n    transition: opacity 75ms ease;\n  }\n\n  .icon-mode-dark {\n    @apply opacity-0 dark:opacity-100 absolute;\n  }\n\n  .icon-mode {\n    @apply opacity-100 dark:opacity-0 absolute;\n  }\n\n  .icon-about-tool,\n  .icon-contact-link {\n    @apply h-[30px] sm:h-[40px] text-[30px] sm:text-[40px] aspect-square;\n  }\n\n  .icon-side-link {\n    @apply h-[20px] sm:h-[30px] text-[20px] sm:text-[30px] aspect-square;\n  }\n\n  .icon-next {\n    @apply h-[70px] aspect-square;\n    transition: transform 500ms ease;\n  }\n\n  button:hover .icon-next {\n    @apply scale-110;\n  }\n\n  .btn-mini-tab {\n    @apply h-3 aspect-[4] border border-light portrait:border-theme-3 dark:border-theme-3 landscape:hover:bg-light landscape:hover:dark:bg-theme-3 hover:bg-opacity-50 hover:dark:bg-opacity-50 rounded-md;\n    transition: background-color 500ms ease;\n  }\n\n  .btn-mini-tab.active {\n    @apply bg-light portrait:bg-theme-3 dark:bg-theme-3;\n  }\n\n  .project-card-outer-wrapper {\n    @apply w-[60%] p-4 border-2 border-light portrait:border-theme-3 dark:border-theme-3 rounded-md relative overflow-y-hidden;\n  }\n\n  .project-card-wrapper {\n    @apply flex gap-4 overflow-x-scroll snap-x scroll-smooth relative;\n  }\n\n  .project-card {\n    @apply min-w-full bg-light dark:bg-dark rounded-md flex justify-center items-center snap-center relative;\n  }\n\n  .project-card-info {\n    @apply h-full flex items-center;\n  }\n\n  .project-card-image {\n    @apply w-full rounded-md opacity-50;\n  }\n\n  .project-card-index {\n    @apply text-6xl md:text-8xl leading-[0.8] font-extrabold absolute top-0 left-0;\n  }\n\n  .project-card-name {\n    @apply w-full text-2xl md:text-4xl font-bold text-center absolute top-1/2 -translate-y-1/2;\n  }\n\n  .project-card-type {\n    @apply w-full font-bold text-center absolute top-2/3 -translate-y-1/2;\n  }\n\n  .project-card-expand {\n    @apply w-full py-2 px-4 font-semibold rounded-b-md flex justify-center absolute bottom-0 opacity-50;\n    transition:\n      background-color 500ms ease,\n      opacity 500ms ease;\n  }\n\n  .project-card-expand:hover {\n    @apply bg-dark bg-opacity-25 dark:bg-opacity-50 opacity-100;\n  }\n\n  .img-arrow-down-wrapper,\n  .img-open-wrapper {\n    @apply h-[20px] aspect-square relative;\n  }\n\n  .project-detail-tool-wrapper {\n    @apply flex gap-2;\n  }\n\n  .project-detail-link-wrapper {\n    @apply font-semibold flex justify-end gap-5;\n  }\n\n  .project-detail-link-wrapper > a:not([disabled]) {\n    @apply hover:scale-110;\n  }\n\n  .btn-project-card-next {\n    @apply h-14 aspect-square bg-dark dark:bg-light bg-opacity-50 -rotate-90 opacity-50 absolute top-[calc(50%-28px)] right-4;\n  }\n\n  .btn-project-card-prev {\n    @apply h-14 aspect-square bg-dark dark:bg-light bg-opacity-50 rotate-90 opacity-50 absolute top-[calc(50%-28px)] left-4;\n  }\n\n  .project-card-image,\n  .project-card-index,\n  .project-card-name,\n  .project-card-type,\n  .btn-project-card-next,\n  .btn-project-card-prev {\n    transition: opacity 500ms ease;\n  }\n\n  .project-card-info:hover .project-card-image,\n  .btn-project-card-next:hover,\n  .btn-project-card-prev:hover {\n    @apply opacity-100;\n  }\n\n  .project-card-info:hover .project-card-index {\n    @apply opacity-50;\n  }\n\n  .project-card-info:hover .project-card-name,\n  .project-card-info:hover .project-card-type {\n    @apply opacity-0;\n  }\n\n  .project-detail {\n    @apply flex flex-col justify-center gap-10 portrait:gap-5 opacity-0;\n    transition: opacity 1s 1s ease;\n  }\n\n  .project-detail.active {\n    @apply opacity-100;\n  }\n\n  .scroll-wrapper {\n    @apply flex items-center gap-2 absolute bottom-4 right-3 -translate-y-full translate-x-1/3 -rotate-90;\n  }\n\n  .top-wrapper {\n    @apply absolute bottom-3 left-4 -translate-y-full -translate-x-1/3 rotate-90;\n  }\n\n  .top-wrapper-p {\n    @apply absolute bottom-4 right-3 -translate-y-full rotate-90;\n  }\n\n  .top-wrapper > div,\n  .top-wrapper-p > div {\n    transition: transform 500ms ease;\n  }\n\n  .top-wrapper:hover > div,\n  .top-wrapper-p:hover > div {\n    @apply -translate-x-3;\n  }\n\n  .underline-h,\n  .highlight-h {\n    @apply relative;\n  }\n\n  .underline-h:after {\n    @apply h-0.5 w-0 bg-dark dark:bg-light rounded-full absolute left-0 bottom-0.5;\n    content: \"\";\n    transition: width 500ms ease;\n  }\n\n  button:hover .underline-h:after {\n    @apply w-full;\n  }\n\n  .highlight-h:after {\n    @apply h-[50%] w-0 opacity-80 absolute top-[25%] left-[-15px] portrait:left-[-10px] -z-10;\n    content: \"\";\n    transition: width 500ms ease;\n  }\n\n  button:hover .highlight-h:after {\n    @apply w-[calc(100%+30px)] portrait:w-[calc(100%+10px)];\n  }\n\n  .about-span {\n    @apply text-light portrait:text-theme-2 dark:text-theme-2;\n  }\n\n  .tool:hover .icon-about-tool {\n    @apply block;\n  }\n\n  /* Animation */\n  [class^=\"animate-\"] {\n    will-change: animation;\n  }\n}\n\n@layer utilities {\n  main {\n    transition:\n      transform 500ms ease,\n      opacity 500ms ease;\n  }\n\n  aside,\n  #btn-menu-l,\n  #btn-menu-l-close,\n  #btn-menu-l-close > div,\n  #btn-project-detail-close {\n    transition: transform 500ms ease;\n  }\n\n  main.move {\n    @apply translate-x-[40vw];\n  }\n\n  aside.move {\n    @apply translate-x-0;\n  }\n\n  main.move-p {\n    @apply translate-x-[-60vw];\n  }\n\n  aside.move-p {\n    @apply -translate-x-full;\n  }\n\n  #btn-menu-l.show {\n    @apply translate-y-[200px];\n  }\n\n  #btn-menu-l-close.show {\n    @apply translate-x-[200px];\n  }\n\n  #btn-menu-l-close:hover > div {\n    @apply rotate-180;\n  }\n\n  #article-about {\n    transition: opacity 500ms ease;\n  }\n\n  #project-card-detail-wrapper {\n    transition: transform 1s ease;\n  }\n\n  #project-card-detail-wrapper.active {\n    @apply translate-y-[calc(-100%-15px)] portrait:-translate-y-full;\n  }\n\n  /* Menu dot */\n  button:disabled > div > span {\n    @apply opacity-100;\n  }\n}\n"],"sourceRoot":""}]);
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
  const projectCard3 = document.querySelector("#project-card-3");

  const gap = 16;
  let scrollWidthProjectCard1 = 0;
  let scrollWidthProjectCard2 = 0;
  let scrollWidthProjectCard3 = 0;
  let scrollWidthProjectCards = [];

  let i = 1;
  let iPrev = 0;

  function init() {
    getScrollWidthProjectCard();

    btnProjectNext.onclick = () => {
      iPrev = i;
      if (i === 4) {
        projectCardWrapper.scrollTo(0, 0);
        i = 1;
      } else {
        projectCardWrapper.scrollTo(scrollWidthProjectCards[i], 0);
        i += 1;
      }
      document
        .querySelector(`#btn-mini-tab-${iPrev}`)
        .classList.toggle("active");
      document.querySelector(`#btn-mini-tab-${i}`).classList.toggle("active");
    };

    btnProjectPrev.onclick = () => {
      iPrev = i;
      if (i === 1) {
        projectCardWrapper.scrollTo(scrollWidthProjectCard3, 0);
        i = 4;
      } else {
        projectCardWrapper.scrollTo(scrollWidthProjectCards[i - 2], 0);
        i -= 1;
      }
      document
        .querySelector(`#btn-mini-tab-${iPrev}`)
        .classList.toggle("active");
      document.querySelector(`#btn-mini-tab-${i}`).classList.toggle("active");
    };

    projectCardWrapper.onscrollend = () => {
      iPrev = i;
      const scroll = projectCardWrapper.scrollLeft;
      if (scroll >= 0 && scroll < scrollWidthProjectCard1) i = 1;
      else if (
        scroll >= scrollWidthProjectCard1 &&
        scroll < scrollWidthProjectCard2
      )
        i = 2;
      else if (
        scroll >= scrollWidthProjectCard2 &&
        scroll < scrollWidthProjectCard3
      )
        i = 3;
      else i = 4;
      document
        .querySelector(`#btn-mini-tab-${iPrev}`)
        .classList.toggle("active");
      document.querySelector(`#btn-mini-tab-${i}`).classList.toggle("active");
    };

    btnMiniTabs.forEach((btn) => {
      btn.onclick = () => {
        iPrev = i;
        i = +btn.id.slice(-1);
        projectCardWrapper.scrollTo(scrollWidthProjectCards[i - 1], 0);
        document
          .querySelector(`#btn-mini-tab-${iPrev}`)
          .classList.toggle("active");
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
    scrollWidthProjectCard3 =
      projectCard3.clientWidth + gap + scrollWidthProjectCard2;
    scrollWidthProjectCards = [
      0,
      scrollWidthProjectCard1,
      scrollWidthProjectCard2,
      scrollWidthProjectCard3,
    ];
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
/* harmony import */ var _img_projects_portfolio_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../img/projects/portfolio.png */ "./src/img/projects/portfolio.png");
/* harmony import */ var _img_projects_portfolio_d_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../img/projects/portfolio-d.png */ "./src/img/projects/portfolio-d.png");
/* harmony import */ var _img_icons_arrow_down_50w_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../img/icons/arrow-down-50w.png */ "./src/img/icons/arrow-down-50w.png");
/* harmony import */ var _img_icons_arrow_down_w_50w_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../img/icons/arrow-down-w-50w.png */ "./src/img/icons/arrow-down-w-50w.png");

















const imgNextDark = document.querySelectorAll(".img-next-dark");
const imgNext = document.querySelectorAll(".img-next");
const imgOpenDark = document.querySelectorAll(".img-open-dark");
const imgOpen = document.querySelectorAll(".img-open");
const imgArrowDownDark = document.querySelectorAll(".img-arrow-down-dark");
const imgArrowDown = document.querySelectorAll(".img-arrow-down");

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

imgArrowDownDark.forEach((img) => {
  img.src = _img_icons_arrow_down_w_50w_png__WEBPACK_IMPORTED_MODULE_15__;
});

imgArrowDown.forEach((img) => {
  img.src = _img_icons_arrow_down_50w_png__WEBPACK_IMPORTED_MODULE_14__;
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
  const btnProjectsL = document.querySelector("#btn-projects-l");

  const btnsProjectCardExpand = document.querySelectorAll(
    ".project-card-expand",
  );
  const btnProjectDetailClose = document.querySelector(
    "#btn-project-detail-close",
  );

  const projectCardDetailWrapper = document.querySelector(
    "#project-card-detail-wrapper",
  );

  const btnMenuP = document.querySelector("#btn-menu-p");
  const iconMenuOpenP = document.querySelector("#icon-menu-open-p");
  const iconMenuCloseP = document.querySelector("#icon-menu-close-p");

  let isOpenProjectCard = 0;
  let activeProjectCard = 0;
  let isPortrait = 0;

  function init() {
    getIsPortrait();
    _initBtnMenuL();
    _initBtnNavL();
    _initBtnProjectCardExpands();
    _initBtnMenuP();
  }

  function getIsPortrait() {
    if (window.innerHeight > window.innerWidth) isPortrait = 1;
    else isPortrait = 0;
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

  function _initBtnMenuL() {
    btnMenuL.onclick = () => {
      main.classList.toggle("opacity-50");
      btnMenuL.classList.toggle("show");
      btnMenuLClose.classList.toggle("show");
      aside.classList.toggle("move");
      main.classList.toggle("move");
    };

    btnMenuLClose.onclick = () => {
      btnMenuL.click();
    };
  }

  function _initBtnMenuP() {
    btnMenuP.onclick = () => {
      main.classList.toggle("opacity-50");
      iconMenuOpenP.classList.toggle("hidden");
      iconMenuCloseP.classList.toggle("hidden");
      aside.classList.toggle("move-p");
      main.classList.toggle("move-p");
    };
  }

  function _initBtnNavL() {
    btnHomeL.onclick = () => {
      if (isPortrait === 0) btnMenuLClose.click();
      else btnMenuP.click();

      setTimeout(() => {
        main.scrollTo(0, 0);
      }, 500);
    };

    btnAboutL.onclick = () => {
      if (isPortrait === 0) btnMenuLClose.click();
      else btnMenuP.click();

      setTimeout(() => {
        _scroll__WEBPACK_IMPORTED_MODULE_0__.scroll.scrollTo(1);
      }, 500);
    };

    btnProjectsL.onclick = () => {
      if (isPortrait === 0) btnMenuLClose.click();
      else btnMenuP.click();

      setTimeout(() => {
        _scroll__WEBPACK_IMPORTED_MODULE_0__.scroll.scrollTo(2);
      }, 500);
    };
  }

  return { init, getIsPortrait };
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
  const articleAbout = document.querySelector("#article-about");
  const articleAboutMore = document.querySelector("#article-about-more");

  const btnDarkMode = document.querySelectorAll(".btn-dark-mode");
  const spanMenu = document.querySelector("#menu-text > span");
  const spanContact = document.querySelector("#contact-text > span");

  const btnsMenuL = [
    document.querySelector("#btn-home-l"),
    document.querySelector("#btn-about-l"),
    document.querySelector("#btn-projects-l"),
  ];

  const btnsTop = document.querySelectorAll(".btn-top");
  const btnAboutMoreL = document.querySelector("#btn-about-more-l");

  const marginTop = 56;
  let scrollHeightHome = 0;
  let scrollHeightAbout = 0;
  let currentTheme = 1;
  let isOpenAboutMore = 0;
  let scrollWidthArticleAboutMore = 0;

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

    btnAboutMoreL.onclick = () => {
      if (isOpenAboutMore === 1) about.scrollTo(0, 0);
      else about.scrollTo(articleAbout.clientWidth, 0);
    };

    about.onscrollend = () => {
      const scroll = about.scrollLeft;
      const wasOpen = isOpenAboutMore;

      if (scroll >= 0 && scroll < scrollWidthArticleAboutMore / 2) {
        if (isOpenAboutMore === 1) {
          btnAboutMoreL.querySelector("div").textContent = "MORE";
          isOpenAboutMore = 0;
        }
      } else {
        if (isOpenAboutMore === 0) {
          btnAboutMoreL.querySelector("div").textContent = "BACK";
          isOpenAboutMore = 1;
        }
      }

      if (isOpenAboutMore !== wasOpen) {
        articleAbout.classList.toggle("opacity-50");
        btnAboutMoreL.classList.toggle("animate-chevron-right");
        btnAboutMoreL.classList.toggle("animate-chevron-left");
      }
    };

    btnsTop.forEach((btn) => {
      btn.onclick = () => {
        main.scrollTo(0, 0);
      };
    });
  }

  function getScrollHeightSection() {
    scrollHeightHome = home.clientHeight + marginTop;
    scrollHeightAbout = about.clientHeight + marginTop + scrollHeightHome;
    scrollWidthArticleAboutMore = articleAboutMore.clientWidth;
  }

  function scrollTo(section) {
    if (section === 1) main.scrollTo(0, scrollHeightHome);
    else if (section === 2) main.scrollTo(0, scrollHeightAbout);
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
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/js/menu.js");




const windowResize = (() => {
  function init() {
    window.onresize = () => {
      _scroll__WEBPACK_IMPORTED_MODULE_0__.scroll.getScrollHeightSection();
      _carousel__WEBPACK_IMPORTED_MODULE_1__.carousel.getScrollWidthProjectCard();
      _menu__WEBPACK_IMPORTED_MODULE_2__.menu.getIsPortrait();
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

/***/ "./src/img/icons/arrow-down-50w.png":
/*!******************************************!*\
  !*** ./src/img/icons/arrow-down-50w.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e99396f1626457a49f98.png";

/***/ }),

/***/ "./src/img/icons/arrow-down-w-50w.png":
/*!********************************************!*\
  !*** ./src/img/icons/arrow-down-w-50w.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8fb9d59de6449196cb93.png";

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

/***/ "./src/img/projects/portfolio-d.png":
/*!******************************************!*\
  !*** ./src/img/projects/portfolio-d.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c2df9e3d0cd7be928f2c.png";

/***/ }),

/***/ "./src/img/projects/portfolio.png":
/*!****************************************!*\
  !*** ./src/img/projects/portfolio.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "009677c176d35368bc83.png";

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








window.onload = () => {
  _js_dark_mode__WEBPACK_IMPORTED_MODULE_2__.darkMode.init();
  _js_menu__WEBPACK_IMPORTED_MODULE_3__.menu.init();
  _js_scroll__WEBPACK_IMPORTED_MODULE_4__.scroll.init();
  _js_carousel__WEBPACK_IMPORTED_MODULE_5__.carousel.init();
  _js_window_resize__WEBPACK_IMPORTED_MODULE_6__.windowResize.init();
};

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjO0FBQ2Qsa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Qsa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQiwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QiwyQkFBMkI7QUFDM0I7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxPQUFPLE1BQU0sT0FBTyxxQkFBcUIsb0JBQW9CLHFCQUFxQixxQkFBcUIsTUFBTSxNQUFNLFdBQVcsTUFBTSxZQUFZLE1BQU0sTUFBTSxxQkFBcUIscUJBQXFCLHFCQUFxQixVQUFVLG9CQUFvQixxQkFBcUIscUJBQXFCLHFCQUFxQixxQkFBcUIsTUFBTSxPQUFPLE1BQU0sS0FBSyxvQkFBb0IscUJBQXFCLE1BQU0sUUFBUSxNQUFNLEtBQUssb0JBQW9CLG9CQUFvQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxTQUFTLE1BQU0sUUFBUSxxQkFBcUIscUJBQXFCLHFCQUFxQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLFFBQVEsTUFBTSxLQUFLLG9CQUFvQixxQkFBcUIscUJBQXFCLE1BQU0sUUFBUSxNQUFNLFNBQVMscUJBQXFCLHFCQUFxQixxQkFBcUIsb0JBQW9CLHFCQUFxQixxQkFBcUIscUJBQXFCLG9CQUFvQixvQkFBb0Isb0JBQW9CLE1BQU0sTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE9BQU8sTUFBTSxRQUFRLHFCQUFxQixxQkFBcUIscUJBQXFCLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE9BQU8sTUFBTSxLQUFLLHFCQUFxQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sT0FBTyxNQUFNLEtBQUsscUJBQXFCLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0saUJBQWlCLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE9BQU8sV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE9BQU8sTUFBTSxLQUFLLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLFFBQVEsTUFBTSxZQUFZLG9CQUFvQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxZQUFZLEtBQUssVUFBVSxNQUFNLFlBQVksT0FBTyxzQkFBc0IscUJBQXFCLE1BQU0sWUFBWSxPQUFPLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLEtBQUssTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLE1BQU0sTUFBTSxXQUFXLEtBQUssS0FBSyxNQUFNLE1BQU0sV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsS0FBSyxNQUFNLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxNQUFNLEtBQUssS0FBSyxLQUFLLEtBQUssTUFBTSxNQUFNLEtBQUssS0FBSyxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLEtBQUssTUFBTSxNQUFNLEtBQUssV0FBVyxLQUFLLEtBQUssTUFBTSxNQUFNLEtBQUssV0FBVyxLQUFLLEtBQUssTUFBTSxNQUFNLEtBQUssS0FBSyxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsS0FBSyxNQUFNLE1BQU0sS0FBSyxXQUFXLEtBQUssS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssTUFBTSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssV0FBVyxhQUFhLE1BQU0sTUFBTSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLE1BQU0sWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLE9BQU8sS0FBSyxXQUFXLE1BQU0sTUFBTSxLQUFLLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxPQUFPLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sT0FBTyxZQUFZLFlBQVksTUFBTSxNQUFNLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxLQUFLLE1BQU0sWUFBWSxZQUFZLE1BQU0sTUFBTSxPQUFPLEtBQUssV0FBVyxNQUFNLE1BQU0sS0FBSyxNQUFNLFlBQVksWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sTUFBTSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLFlBQVksYUFBYSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxZQUFZLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFdBQVcsWUFBWSxNQUFNLE1BQU0sTUFBTSxXQUFXLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxZQUFZLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxPQUFPLEtBQUssV0FBVyxNQUFNLE1BQU0sS0FBSyxNQUFNLFlBQVksWUFBWSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxNQUFNLFlBQVksWUFBWSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxZQUFZLFlBQVksWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsWUFBWSxPQUFPLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sT0FBTyxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLGFBQWEsWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsWUFBWSxhQUFhLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxZQUFZLGFBQWEsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLFdBQVcsWUFBWSxNQUFNLE9BQU8sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE9BQU8sS0FBSyxNQUFNLE1BQU0sV0FBVyxhQUFhLGFBQWEsWUFBWSxNQUFNLE1BQU0sT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sWUFBWSxZQUFZLFlBQVksWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLFlBQVksWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksWUFBWSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxPQUFPLFlBQVksTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sT0FBTyxLQUFLLEtBQUssS0FBSyxZQUFZLFlBQVksYUFBYSxhQUFhLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFVBQVUsWUFBWSxNQUFNLEtBQUssS0FBSyxLQUFLLEtBQUssWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksTUFBTSxNQUFNLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxNQUFNLFVBQVUsWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxPQUFPLEtBQUssWUFBWSxNQUFNLE9BQU8sTUFBTSxZQUFZLE1BQU0sTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLE9BQU8sS0FBSyxZQUFZLE1BQU0sT0FBTyxNQUFNLFlBQVksTUFBTSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLE9BQU8sS0FBSyxZQUFZLE1BQU0sT0FBTyxNQUFNLFlBQVksTUFBTSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE9BQU8sS0FBSyxPQUFPLE1BQU0sU0FBUyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLFdBQVcsS0FBSyxLQUFLLE1BQU0sUUFBUSxNQUFNLFlBQVksYUFBYSxhQUFhLE1BQU0sT0FBTyxPQUFPLEtBQUssV0FBVyxNQUFNLE1BQU0sS0FBSyxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sS0FBSyxPQUFPLE1BQU0sS0FBSyxPQUFPLE1BQU0sWUFBWSxNQUFNLE9BQU8sTUFBTSxZQUFZLE1BQU0sT0FBTyxNQUFNLFlBQVksTUFBTSxPQUFPLE1BQU0sWUFBWSxNQUFNLE9BQU8sTUFBTSxZQUFZLE1BQU0sTUFBTSxLQUFLLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxZQUFZLE1BQU0sT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxPQUFPLEtBQUssWUFBWSxNQUFNLE9BQU8sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLE1BQU0sS0FBSyxPQUFPLE1BQU0sS0FBSyxPQUFPLE1BQU0sS0FBSyxPQUFPLE1BQU0sS0FBSyxPQUFPLE1BQU0sS0FBSyxPQUFPLE1BQU0sS0FBSyxPQUFPLE1BQU0sS0FBSyxPQUFPLE1BQU0sWUFBWSxhQUFhLE1BQU0sT0FBTyxNQUFNLFlBQVksTUFBTSxPQUFPLE1BQU0sWUFBWSxNQUFNLE9BQU8sTUFBTSxZQUFZLE1BQU0sT0FBTyxNQUFNLFlBQVksTUFBTSxPQUFPLE1BQU0sS0FBSyxPQUFPLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLFlBQVksYUFBYSxNQUFNLE9BQU8sTUFBTSxZQUFZLGFBQWEsTUFBTSxPQUFPLE1BQU0sWUFBWSxhQUFhLE1BQU0sT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLFlBQVksTUFBTSxNQUFNLEtBQUssTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxN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QUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDRDtBQUNzQjtBQUNUO0FBQ0k7QUFDSTtBQUNTOztBQUVsRDtBQUNBLEVBQUUsbURBQVE7QUFDVixFQUFFLDBDQUFJO0FBQ04sRUFBRSw4Q0FBTTtBQUNSLEVBQUUsa0RBQVE7QUFDVixFQUFFLDJEQUFZO0FBQ2QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvc3R5bGUuY3NzPzkwMTEiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvanMvY2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2pzL2RhcmstbW9kZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvanMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2pzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2pzL3Njcm9sbC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvanMvd2luZG93LXJlc2l6ZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250L01vbnRzZXJyYXQtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgLyogaHR0cHM6Ly9mb250cy5nb29nbGUuY29tL3NwZWNpbWVuL01vbnRzZXJyYXQgKi9cbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoXCJUcnVlVHlwZVwiKTtcbn1cblxuLyogISB0YWlsd2luZGNzcyB2My40LjQgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tICovXG5cbi8qXG4xLiBQcmV2ZW50IHBhZGRpbmcgYW5kIGJvcmRlciBmcm9tIGFmZmVjdGluZyBlbGVtZW50IHdpZHRoLiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy80KVxuMi4gQWxsb3cgYWRkaW5nIGEgYm9yZGVyIHRvIGFuIGVsZW1lbnQgYnkganVzdCBhZGRpbmcgYSBib3JkZXItd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3MvcHVsbC8xMTYpXG4qL1xuXG4qLFxuOjpiZWZvcmUsXG46OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xuICBib3JkZXItd2lkdGg6IDA7IC8qIDIgKi9cbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDsgLyogMiAqL1xuICBib3JkZXItY29sb3I6ICNlNWU3ZWI7IC8qIDIgKi9cbn1cblxuOjpiZWZvcmUsXG46OmFmdGVyIHtcbiAgLS10dy1jb250ZW50OiAnJztcbn1cblxuLypcbjEuIFVzZSBhIGNvbnNpc3RlbnQgc2Vuc2libGUgbGluZS1oZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxuMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXG4zLiBVc2UgYSBtb3JlIHJlYWRhYmxlIHRhYiBzaXplLlxuNC4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBzYW5zXFxgIGZvbnQtZmFtaWx5IGJ5IGRlZmF1bHQuXG41LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYHNhbnNcXGAgZm9udC1mZWF0dXJlLXNldHRpbmdzIGJ5IGRlZmF1bHQuXG42LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYHNhbnNcXGAgZm9udC12YXJpYXRpb24tc2V0dGluZ3MgYnkgZGVmYXVsdC5cbjcuIERpc2FibGUgdGFwIGhpZ2hsaWdodHMgb24gaU9TXG4qL1xuXG5odG1sLFxuOmhvc3Qge1xuICBsaW5lLWhlaWdodDogMS41OyAvKiAxICovXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xuICAtbW96LXRhYi1zaXplOiA0OyAvKiAzICovXG4gIC1vLXRhYi1zaXplOiA0O1xuICAgICB0YWItc2l6ZTogNDsgLyogMyAqL1xuICBmb250LWZhbWlseTogdWktc2Fucy1zZXJpZiwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBTZWdvZSBVSSwgUm9ib3RvLCBVYnVudHUsIENhbnRhcmVsbCwgTm90byBTYW5zLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgXCJOb3RvIENvbG9yIEVtb2ppXCI7IC8qIDQgKi9cbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBub3JtYWw7IC8qIDUgKi9cbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IG5vcm1hbDsgLyogNiAqL1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiA3ICovXG59XG5cbi8qXG4xLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXG4yLiBJbmhlcml0IGxpbmUtaGVpZ2h0IGZyb20gXFxgaHRtbFxcYCBzbyB1c2VycyBjYW4gc2V0IHRoZW0gYXMgYSBjbGFzcyBkaXJlY3RseSBvbiB0aGUgXFxgaHRtbFxcYCBlbGVtZW50LlxuKi9cblxuYm9keSB7XG4gIG1hcmdpbjogMDsgLyogMSAqL1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgLyogMiAqL1xufVxuXG4vKlxuMS4gQWRkIHRoZSBjb3JyZWN0IGhlaWdodCBpbiBGaXJlZm94LlxuMi4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2Ugb2YgYm9yZGVyIGNvbG9yIGluIEZpcmVmb3guIChodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTA2NTUpXG4zLiBFbnN1cmUgaG9yaXpvbnRhbCBydWxlcyBhcmUgdmlzaWJsZSBieSBkZWZhdWx0LlxuKi9cblxuaHIge1xuICBoZWlnaHQ6IDA7IC8qIDEgKi9cbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4OyAvKiAzICovXG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cbiovXG5cbmFiYnI6d2hlcmUoW3RpdGxlXSkge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xufVxuXG4vKlxuUmVtb3ZlIHRoZSBkZWZhdWx0IGZvbnQgc2l6ZSBhbmQgd2VpZ2h0IGZvciBoZWFkaW5ncy5cbiovXG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG59XG5cbi8qXG5SZXNldCBsaW5rcyB0byBvcHRpbWl6ZSBmb3Igb3B0LWluIHN0eWxpbmcgaW5zdGVhZCBvZiBvcHQtb3V0LlxuKi9cblxuYSB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gRWRnZSBhbmQgU2FmYXJpLlxuKi9cblxuYixcbnN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi8qXG4xLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYG1vbm9cXGAgZm9udC1mYW1pbHkgYnkgZGVmYXVsdC5cbjIuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgbW9ub1xcYCBmb250LWZlYXR1cmUtc2V0dGluZ3MgYnkgZGVmYXVsdC5cbjMuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgbW9ub1xcYCBmb250LXZhcmlhdGlvbi1zZXR0aW5ncyBieSBkZWZhdWx0LlxuNC4gQ29ycmVjdCB0aGUgb2RkIFxcYGVtXFxgIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cbiovXG5cbmNvZGUsXG5rYmQsXG5zYW1wLFxucHJlIHtcbiAgZm9udC1mYW1pbHk6IHVpLW1vbm9zcGFjZSwgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcIkxpYmVyYXRpb24gTW9ub1wiLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTsgLyogMSAqL1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IG5vcm1hbDsgLyogMiAqL1xuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogbm9ybWFsOyAvKiAzICovXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiA0ICovXG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiovXG5cbnNtYWxsIHtcbiAgZm9udC1zaXplOiA4MCU7XG59XG5cbi8qXG5QcmV2ZW50IFxcYHN1YlxcYCBhbmQgXFxgc3VwXFxgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXG4qL1xuXG5zdWIsXG5zdXAge1xuICBmb250LXNpemU6IDc1JTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG5zdWIge1xuICBib3R0b206IC0wLjI1ZW07XG59XG5cbnN1cCB7XG4gIHRvcDogLTAuNWVtO1xufVxuXG4vKlxuMS4gUmVtb3ZlIHRleHQgaW5kZW50YXRpb24gZnJvbSB0YWJsZSBjb250ZW50cyBpbiBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTk5OTA4OCwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIwMTI5NylcbjIuIENvcnJlY3QgdGFibGUgYm9yZGVyIGNvbG9yIGluaGVyaXRhbmNlIGluIGFsbCBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTkzNTcyOSwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE5NTAxNilcbjMuIFJlbW92ZSBnYXBzIGJldHdlZW4gdGFibGUgYm9yZGVycyBieSBkZWZhdWx0LlxuKi9cblxudGFibGUge1xuICB0ZXh0LWluZGVudDogMDsgLyogMSAqL1xuICBib3JkZXItY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgLyogMyAqL1xufVxuXG4vKlxuMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXG4yLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXG4zLiBSZW1vdmUgZGVmYXVsdCBwYWRkaW5nIGluIGFsbCBicm93c2Vycy5cbiovXG5cbmJ1dHRvbixcbmlucHV0LFxub3B0Z3JvdXAsXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogaW5oZXJpdDsgLyogMSAqL1xuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogaW5oZXJpdDsgLyogMSAqL1xuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7IC8qIDEgKi9cbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IC8qIDEgKi9cbiAgbGV0dGVyLXNwYWNpbmc6IGluaGVyaXQ7IC8qIDEgKi9cbiAgY29sb3I6IGluaGVyaXQ7IC8qIDEgKi9cbiAgbWFyZ2luOiAwOyAvKiAyICovXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cbn1cblxuLypcblJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSBhbmQgRmlyZWZveC5cbiovXG5cbmJ1dHRvbixcbnNlbGVjdCB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4vKlxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cbjIuIFJlbW92ZSBkZWZhdWx0IGJ1dHRvbiBzdHlsZXMuXG4qL1xuXG5idXR0b24sXG5pbnB1dDp3aGVyZShbdHlwZT0nYnV0dG9uJ10pLFxuaW5wdXQ6d2hlcmUoW3R5cGU9J3Jlc2V0J10pLFxuaW5wdXQ6d2hlcmUoW3R5cGU9J3N1Ym1pdCddKSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiAyICovXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7IC8qIDIgKi9cbn1cblxuLypcblVzZSB0aGUgbW9kZXJuIEZpcmVmb3ggZm9jdXMgc3R5bGUgZm9yIGFsbCBmb2N1c2FibGUgZWxlbWVudHMuXG4qL1xuXG46LW1vei1mb2N1c3Jpbmcge1xuICBvdXRsaW5lOiBhdXRvO1xufVxuXG4vKlxuUmVtb3ZlIHRoZSBhZGRpdGlvbmFsIFxcYDppbnZhbGlkXFxgIHN0eWxlcyBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvZ2Vja28tZGV2L2Jsb2IvMmY5ZWFjZDlkM2Q5OTVjOTM3YjQyNTFhNTU1N2Q5NWQ0OTRjOWJlMS9sYXlvdXQvc3R5bGUvcmVzL2Zvcm1zLmNzcyNMNzI4LUw3MzcpXG4qL1xuXG46LW1vei11aS1pbnZhbGlkIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLypcbkFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lIGFuZCBGaXJlZm94LlxuKi9cblxucHJvZ3Jlc3Mge1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbi8qXG5Db3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBTYWZhcmkuXG4qL1xuXG46Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG46Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qXG4xLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cbjIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxuKi9cblxuW3R5cGU9J3NlYXJjaCddIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cbn1cblxuLypcblJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cbiovXG5cbjo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLypcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4yLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIFxcYGluaGVyaXRcXGAgaW4gU2FmYXJpLlxuKi9cblxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cbn1cblxuLypcbkFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIENocm9tZSBhbmQgU2FmYXJpLlxuKi9cblxuc3VtbWFyeSB7XG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcbn1cblxuLypcblJlbW92ZXMgdGhlIGRlZmF1bHQgc3BhY2luZyBhbmQgYm9yZGVyIGZvciBhcHByb3ByaWF0ZSBlbGVtZW50cy5cbiovXG5cbmJsb2NrcXVvdGUsXG5kbCxcbmRkLFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxuaHIsXG5maWd1cmUsXG5wLFxucHJlIHtcbiAgbWFyZ2luOiAwO1xufVxuXG5maWVsZHNldCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxubGVnZW5kIHtcbiAgcGFkZGluZzogMDtcbn1cblxub2wsXG51bCxcbm1lbnUge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi8qXG5SZXNldCBkZWZhdWx0IHN0eWxpbmcgZm9yIGRpYWxvZ3MuXG4qL1xuXG5kaWFsb2cge1xuICBwYWRkaW5nOiAwO1xufVxuXG4vKlxuUHJldmVudCByZXNpemluZyB0ZXh0YXJlYXMgaG9yaXpvbnRhbGx5IGJ5IGRlZmF1bHQuXG4qL1xuXG50ZXh0YXJlYSB7XG4gIHJlc2l6ZTogdmVydGljYWw7XG59XG5cbi8qXG4xLiBSZXNldCB0aGUgZGVmYXVsdCBwbGFjZWhvbGRlciBvcGFjaXR5IGluIEZpcmVmb3guIChodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRsYWJzL3RhaWx3aW5kY3NzL2lzc3Vlcy8zMzAwKVxuMi4gU2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIGNvbG9yIHRvIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBncmF5IDQwMCBjb2xvci5cbiovXG5cbmlucHV0OjotbW96LXBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cbiAgY29sb3I6ICM5Y2EzYWY7IC8qIDIgKi9cbn1cblxuaW5wdXQ6OnBsYWNlaG9sZGVyLFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMTsgLyogMSAqL1xuICBjb2xvcjogIzljYTNhZjsgLyogMiAqL1xufVxuXG4vKlxuU2V0IHRoZSBkZWZhdWx0IGN1cnNvciBmb3IgYnV0dG9ucy5cbiovXG5cbmJ1dHRvbixcbltyb2xlPVwiYnV0dG9uXCJdIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKlxuTWFrZSBzdXJlIGRpc2FibGVkIGJ1dHRvbnMgZG9uJ3QgZ2V0IHRoZSBwb2ludGVyIGN1cnNvci5cbiovXG5cbjpkaXNhYmxlZCB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLypcbjEuIE1ha2UgcmVwbGFjZWQgZWxlbWVudHMgXFxgZGlzcGxheTogYmxvY2tcXGAgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTQpXG4yLiBBZGQgXFxgdmVydGljYWwtYWxpZ246IG1pZGRsZVxcYCB0byBhbGlnbiByZXBsYWNlZCBlbGVtZW50cyBtb3JlIHNlbnNpYmx5IGJ5IGRlZmF1bHQuIChodHRwczovL2dpdGh1Yi5jb20vamVuc2ltbW9ucy9jc3NyZW1lZHkvaXNzdWVzLzE0I2lzc3VlY29tbWVudC02MzQ5MzQyMTApXG4gICBUaGlzIGNhbiB0cmlnZ2VyIGEgcG9vcmx5IGNvbnNpZGVyZWQgbGludCBlcnJvciBpbiBzb21lIHRvb2xzIGJ1dCBpcyBpbmNsdWRlZCBieSBkZXNpZ24uXG4qL1xuXG5pbWcsXG5zdmcsXG52aWRlbyxcbmNhbnZhcyxcbmF1ZGlvLFxuaWZyYW1lLFxuZW1iZWQsXG5vYmplY3Qge1xuICBkaXNwbGF5OiBibG9jazsgLyogMSAqL1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAvKiAyICovXG59XG5cbi8qXG5Db25zdHJhaW4gaW1hZ2VzIGFuZCB2aWRlb3MgdG8gdGhlIHBhcmVudCB3aWR0aCBhbmQgcHJlc2VydmUgdGhlaXIgaW50cmluc2ljIGFzcGVjdCByYXRpby4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTQpXG4qL1xuXG5pbWcsXG52aWRlbyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vKiBNYWtlIGVsZW1lbnRzIHdpdGggdGhlIEhUTUwgaGlkZGVuIGF0dHJpYnV0ZSBzdGF5IGhpZGRlbiBieSBkZWZhdWx0ICovXG5cbltoaWRkZW5dIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogSGlkZSBzY3JvbGxiYXIgZm9yIElFLCBFZGdlIGFuZCBGaXJlZm94ICovXG5cbm1haW4sXG4gIHNlY3Rpb24sXG4gIC5wcm9qZWN0LWNhcmQtd3JhcHBlciB7XG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAvKiBJRSBhbmQgRWRnZSAqL1xuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTsgLyogRmlyZWZveCAqL1xuICB9XG5cbi8qIEhpZGUgc2Nyb2xsYmFyIGZvciBDaHJvbWUsIFNhZmFyaSBhbmQgT3BlcmEgKi9cblxubWFpbjo6LXdlYmtpdC1zY3JvbGxiYXIsXG4gIHNlY3Rpb246Oi13ZWJraXQtc2Nyb2xsYmFyLFxuICAucHJvamVjdC1jYXJkLXdyYXBwZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuYm9keSB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiYSgzOSwgMzksIDQyLCAxKTtcbiAgY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG5cbmJvZHk6d2hlcmUoLmRhcmssIC5kYXJrICopIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIDEpO1xuICBjb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cblxuYm9keSAqIHtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIGJhY2tncm91bmQtY29sb3IsIGJvcmRlci1jb2xvciwgdGV4dC1kZWNvcmF0aW9uLWNvbG9yLCBmaWxsLCBzdHJva2U7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA3NW1zO1xufVxuXG5oZWFkZXIsXG4gIGZvb3RlciB7XG4gIHotaW5kZXg6IDUwO1xuICBoZWlnaHQ6IDMuNXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG4gIHBhZGRpbmctbGVmdDogMS43NXJlbTtcbiAgcGFkZGluZy1yaWdodDogMS43NXJlbTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG5cbiAgaGVhZGVyLFxuICBmb290ZXIge1xuICAgIHBhZGRpbmctbGVmdDogMy41cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDMuNXJlbTtcbiAgfVxufVxuXG5oZWFkZXI6d2hlcmUoLmRhcmssIC5kYXJrICopLFxuICBmb290ZXI6d2hlcmUoLmRhcmssIC5kYXJrICopIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cblxuYXNpZGUge1xuICBtYXJnaW4tdG9wOiAzLjVyZW07XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDIgKiA1NnB4KTtcbn1cblxuQG1lZGlhIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcblxuICBhc2lkZSB7XG4gICAgd2lkdGg6IDYwdnc7XG4gICAgcGFkZGluZy1yaWdodDogMS43NXJlbTtcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuXG4gICAgYXNpZGUge1xuICAgICAgcGFkZGluZy1yaWdodDogMy41cmVtO1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcblxuICBhc2lkZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMDBweDtcbiAgfVxufVxuXG5tYWluIHtcbiAgbWFyZ2luLXRvcDogMy41cmVtO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyICogNTZweCk7XG4gIHdpZHRoOiAxMDAlO1xuICBzY3JvbGwtc25hcC10eXBlOiB5IHZhcigtLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3MpO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG5zZWN0aW9uIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMiAqIDU2cHgpO1xuICBwYWRkaW5nLWxlZnQ6IDEuNzVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDEuNzVyZW07XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuXG4gIHNlY3Rpb24ge1xuICAgIHBhZGRpbmctbGVmdDogMy41cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDMuNXJlbTtcbiAgfVxufVxuXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuXG4gIHNlY3Rpb24ge1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgfVxufVxuXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcblxuICBzZWN0aW9uIHtcbiAgICBzY3JvbGwtc25hcC1hbGlnbjogY2VudGVyO1xuICB9XG59XG5cbmEge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA1MDBtcyBlYXNlO1xuICB9XG5cbmJ1dHRvbjpkaXNhYmxlZCB7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiYSgxNjEsIDE2MSwgMTcwLCAxKTtcbiAgY29sb3I6IHJnYmEoMTYxLCAxNjEsIDE3MCwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG5cbmJ1dHRvbjpkaXNhYmxlZDp3aGVyZSguZGFyaywgLmRhcmsgKikge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoMTEzLCAxMTMsIDEyMiwgMSk7XG4gIGNvbG9yOiByZ2JhKDExMywgMTEzLCAxMjIsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuXG5idXR0b246ZGlzYWJsZWQge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5cbmgxIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBsaW5lLWhlaWdodDogMS43NXJlbTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG5cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMS44NzVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDIuMjVyZW07XG4gIH1cbn1cblxuKiwgOjpiZWZvcmUsIDo6YWZ0ZXIge1xuICAtLXR3LWJvcmRlci1zcGFjaW5nLXg6IDA7XG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteTogMDtcbiAgLS10dy10cmFuc2xhdGUteDogMDtcbiAgLS10dy10cmFuc2xhdGUteTogMDtcbiAgLS10dy1yb3RhdGU6IDA7XG4gIC0tdHctc2tldy14OiAwO1xuICAtLXR3LXNrZXcteTogMDtcbiAgLS10dy1zY2FsZS14OiAxO1xuICAtLXR3LXNjYWxlLXk6IDE7XG4gIC0tdHctcGFuLXg6ICA7XG4gIC0tdHctcGFuLXk6ICA7XG4gIC0tdHctcGluY2gtem9vbTogIDtcbiAgLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzOiBwcm94aW1pdHk7XG4gIC0tdHctZ3JhZGllbnQtZnJvbS1wb3NpdGlvbjogIDtcbiAgLS10dy1ncmFkaWVudC12aWEtcG9zaXRpb246ICA7XG4gIC0tdHctZ3JhZGllbnQtdG8tcG9zaXRpb246ICA7XG4gIC0tdHctb3JkaW5hbDogIDtcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XG4gIC0tdHctbnVtZXJpYy1maWd1cmU6ICA7XG4gIC0tdHctbnVtZXJpYy1zcGFjaW5nOiAgO1xuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XG4gIC0tdHctcmluZy1pbnNldDogIDtcbiAgLS10dy1yaW5nLW9mZnNldC13aWR0aDogMHB4O1xuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xuICAtLXR3LXJpbmctY29sb3I6IHJnYmEoNTksIDEzMCwgMjQ2LCAwLjUpO1xuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XG4gIC0tdHctcmluZy1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xuICAtLXR3LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMCByZ2JhKDAsMCwwLDApO1xuICAtLXR3LWJsdXI6ICA7XG4gIC0tdHctYnJpZ2h0bmVzczogIDtcbiAgLS10dy1jb250cmFzdDogIDtcbiAgLS10dy1ncmF5c2NhbGU6ICA7XG4gIC0tdHctaHVlLXJvdGF0ZTogIDtcbiAgLS10dy1pbnZlcnQ6ICA7XG4gIC0tdHctc2F0dXJhdGU6ICA7XG4gIC0tdHctc2VwaWE6ICA7XG4gIC0tdHctZHJvcC1zaGFkb3c6ICA7XG4gIC0tdHctYmFja2Ryb3AtYmx1cjogIDtcbiAgLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzOiAgO1xuICAtLXR3LWJhY2tkcm9wLWNvbnRyYXN0OiAgO1xuICAtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZTogIDtcbiAgLS10dy1iYWNrZHJvcC1odWUtcm90YXRlOiAgO1xuICAtLXR3LWJhY2tkcm9wLWludmVydDogIDtcbiAgLS10dy1iYWNrZHJvcC1vcGFjaXR5OiAgO1xuICAtLXR3LWJhY2tkcm9wLXNhdHVyYXRlOiAgO1xuICAtLXR3LWJhY2tkcm9wLXNlcGlhOiAgO1xuICAtLXR3LWNvbnRhaW4tc2l6ZTogIDtcbiAgLS10dy1jb250YWluLWxheW91dDogIDtcbiAgLS10dy1jb250YWluLXBhaW50OiAgO1xuICAtLXR3LWNvbnRhaW4tc3R5bGU6ICA7XG59XG5cbjo6YmFja2Ryb3Age1xuICAtLXR3LWJvcmRlci1zcGFjaW5nLXg6IDA7XG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteTogMDtcbiAgLS10dy10cmFuc2xhdGUteDogMDtcbiAgLS10dy10cmFuc2xhdGUteTogMDtcbiAgLS10dy1yb3RhdGU6IDA7XG4gIC0tdHctc2tldy14OiAwO1xuICAtLXR3LXNrZXcteTogMDtcbiAgLS10dy1zY2FsZS14OiAxO1xuICAtLXR3LXNjYWxlLXk6IDE7XG4gIC0tdHctcGFuLXg6ICA7XG4gIC0tdHctcGFuLXk6ICA7XG4gIC0tdHctcGluY2gtem9vbTogIDtcbiAgLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzOiBwcm94aW1pdHk7XG4gIC0tdHctZ3JhZGllbnQtZnJvbS1wb3NpdGlvbjogIDtcbiAgLS10dy1ncmFkaWVudC12aWEtcG9zaXRpb246ICA7XG4gIC0tdHctZ3JhZGllbnQtdG8tcG9zaXRpb246ICA7XG4gIC0tdHctb3JkaW5hbDogIDtcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XG4gIC0tdHctbnVtZXJpYy1maWd1cmU6ICA7XG4gIC0tdHctbnVtZXJpYy1zcGFjaW5nOiAgO1xuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XG4gIC0tdHctcmluZy1pbnNldDogIDtcbiAgLS10dy1yaW5nLW9mZnNldC13aWR0aDogMHB4O1xuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xuICAtLXR3LXJpbmctY29sb3I6IHJnYmEoNTksIDEzMCwgMjQ2LCAwLjUpO1xuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XG4gIC0tdHctcmluZy1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xuICAtLXR3LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMCByZ2JhKDAsMCwwLDApO1xuICAtLXR3LWJsdXI6ICA7XG4gIC0tdHctYnJpZ2h0bmVzczogIDtcbiAgLS10dy1jb250cmFzdDogIDtcbiAgLS10dy1ncmF5c2NhbGU6ICA7XG4gIC0tdHctaHVlLXJvdGF0ZTogIDtcbiAgLS10dy1pbnZlcnQ6ICA7XG4gIC0tdHctc2F0dXJhdGU6ICA7XG4gIC0tdHctc2VwaWE6ICA7XG4gIC0tdHctZHJvcC1zaGFkb3c6ICA7XG4gIC0tdHctYmFja2Ryb3AtYmx1cjogIDtcbiAgLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzOiAgO1xuICAtLXR3LWJhY2tkcm9wLWNvbnRyYXN0OiAgO1xuICAtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZTogIDtcbiAgLS10dy1iYWNrZHJvcC1odWUtcm90YXRlOiAgO1xuICAtLXR3LWJhY2tkcm9wLWludmVydDogIDtcbiAgLS10dy1iYWNrZHJvcC1vcGFjaXR5OiAgO1xuICAtLXR3LWJhY2tkcm9wLXNhdHVyYXRlOiAgO1xuICAtLXR3LWJhY2tkcm9wLXNlcGlhOiAgO1xuICAtLXR3LWNvbnRhaW4tc2l6ZTogIDtcbiAgLS10dy1jb250YWluLWxheW91dDogIDtcbiAgLS10dy1jb250YWluLXBhaW50OiAgO1xuICAtLXR3LWNvbnRhaW4tc3R5bGU6ICA7XG59XG4ubW9udHNlcnJhdCB7XG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtb3B0aWNhbC1zaXppbmc6IGF1dG87XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICB9XG4udGV4dC1oZWxsbyB7XG4gIGZvbnQtc2l6ZTogMTB2dztcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbGluZS1oZWlnaHQ6IDAuODtcbn1cbkBtZWRpYSAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG5cbiAgLnRleHQtaGVsbG8ge1xuICAgIGZvbnQtc2l6ZTogMTV2dztcbiAgfVxufVxuLnRleHQtYmlnIHtcbiAgZm9udC1zaXplOiAzLjc1cmVtO1xuICBmb250LXdlaWdodDogODAwO1xuICBsaW5lLWhlaWdodDogMC44O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG5cbiAgLnRleHQtYmlnIHtcbiAgICBmb250LXNpemU6IDQuNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgfVxufVxuLnRleHQtdGl0bGUge1xuICBmb250LXNpemU6IDIuMjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAyLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGxpbmUtaGVpZ2h0OiAwLjg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcblxuICAudGV4dC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICB9XG59XG4udGV4dC1kaXNhYmxlZCB7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiYSgxNjEsIDE2MSwgMTcwLCAxKTtcbiAgY29sb3I6IHJnYmEoMTYxLCAxNjEsIDE3MCwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG4udGV4dC1kaXNhYmxlZDp3aGVyZSguZGFyaywgLmRhcmsgKikge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoMTEzLCAxMTMsIDEyMiwgMSk7XG4gIGNvbG9yOiByZ2JhKDExMywgMTEzLCAxMjIsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuLmJ0bi1kYXJrLW1vZGUge1xuICBhc3BlY3QtcmF0aW86IDI7XG4gIGhlaWdodDogMS4yNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG4gIC0tdHctc2hhZG93OiBpbnNldCAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiBpbnNldCAwIDJweCA0cHggMCB2YXIoLS10dy1zaGFkb3ctY29sb3IpO1xuICBib3gtc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKSwgMCAwIHJnYmEoMCwwLDAsMCksIGluc2V0IDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwIHJnYmEoMCwwLDAsMCkpLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwIHJnYmEoMCwwLDAsMCkpLCB2YXIoLS10dy1zaGFkb3cpO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG5cbiAgLmJ0bi1kYXJrLW1vZGUge1xuICAgIGhlaWdodDogMS41cmVtO1xuICB9XG59XG4uYnRuLWRhcmstbW9kZSB7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciA1MDBtcyBlYXNlO1xuICB9XG4uYnRuLWRhcmstbW9kZS50aGVtZS0xOmhvdmVyIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0OCwgMTEzLCAxMTMsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0OCwgMTEzLCAxMTMsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5idG4tZGFyay1tb2RlLnRoZW1lLTI6aG92ZXIge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUwLCAyMDQsIDIxLCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsIDIwNCwgMjEsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5idG4tZGFyay1tb2RlLnRoZW1lLTM6aG92ZXIge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQsIDE2NSwgMjMzLCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNCwgMTY1LCAyMzMsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5kYXJrLW1vZGUtYmFsbCB7XG4gIG1hcmdpbi1sZWZ0OiAwLjEyNXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjEyNXJlbTtcbiAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0cHgpO1xuICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5kYXJrLW1vZGUtYmFsbDp3aGVyZSguZGFyaywgLmRhcmsgKikge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLmRhcmstbW9kZS1iYWxsIHtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNzUwbXMgZWFzZTtcbiAgfVxuLmRhcmstbW9kZS1iYWxsLmRhcmsge1xuICAtLXR3LXRyYW5zbGF0ZS14OiBjYWxjKDEwMCUgKyA0cHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZShjYWxjKDEwMCUgKyA0cHgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuLmljb24tbW9kZS1kYXJrLFxuICAuaWNvbi1tb2RlIHtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDc1bXMgZWFzZTtcbiAgfVxuLmljb24tbW9kZS1kYXJrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xufVxuLmljb24tbW9kZS1kYXJrOndoZXJlKC5kYXJrLCAuZGFyayAqKSB7XG4gIG9wYWNpdHk6IDE7XG59XG4uaWNvbi1tb2RlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAxO1xufVxuLmljb24tbW9kZTp3aGVyZSguZGFyaywgLmRhcmsgKikge1xuICBvcGFjaXR5OiAwO1xufVxuLmljb24tYWJvdXQtdG9vbCxcbiAgLmljb24tY29udGFjdC1saW5rIHtcbiAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBmb250LXNpemU6IDMwcHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcblxuICAuaWNvbi1hYm91dC10b29sLFxuICAuaWNvbi1jb250YWN0LWxpbmsge1xuICAgIGhlaWdodDogNDBweDtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gIH1cbn1cbi5pY29uLXNpZGUtbGluayB7XG4gIGFzcGVjdC1yYXRpbzogMSAvIDE7XG4gIGhlaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XG5cbiAgLmljb24tc2lkZS1saW5rIHtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICB9XG59XG4uaWNvbi1uZXh0IHtcbiAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcbiAgaGVpZ2h0OiA3MHB4O1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA1MDBtcyBlYXNlO1xufVxuYnV0dG9uOmhvdmVyIC5pY29uLW5leHQge1xuICAtLXR3LXNjYWxlLXg6IDEuMTtcbiAgLS10dy1zY2FsZS15OiAxLjE7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKDEuMSkgc2NhbGVZKDEuMSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuLmJ0bi1taW5pLXRhYiB7XG4gIGFzcGVjdC1yYXRpbzogNDtcbiAgaGVpZ2h0OiAwLjc1cmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCAxKTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XG59XG4uYnRuLW1pbmktdGFiOmhvdmVyIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAwLjU7XG59XG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuXG4gIC5idG4tbWluaS10YWIge1xuICAgIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDE0LCAxNjUsIDIzMywgMSk7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDE0LCAxNjUsIDIzMywgdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcbiAgfVxufVxuQG1lZGlhIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG5cbiAgLmJ0bi1taW5pLXRhYjpob3ZlciB7XG4gICAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgMSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG4gIH1cbn1cbi5idG4tbWluaS10YWI6d2hlcmUoLmRhcmssIC5kYXJrICopIHtcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDE0LCAxNjUsIDIzMywgMSk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgxNCwgMTY1LCAyMzMsIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XG59XG4uYnRuLW1pbmktdGFiOndoZXJlKC5kYXJrLCAuZGFyayAqKTpob3ZlciB7XG4gIC0tdHctYmctb3BhY2l0eTogMC41O1xufVxuQG1lZGlhIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG5cbiAgLmJ0bi1taW5pLXRhYjp3aGVyZSguZGFyaywgLmRhcmsgKik6aG92ZXIge1xuICAgIC0tdHctYmctb3BhY2l0eTogMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0LCAxNjUsIDIzMywgMSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNCwgMTY1LCAyMzMsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbiAgfVxufVxuLmJ0bi1taW5pLXRhYiB7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciA1MDBtcyBlYXNlO1xuICB9XG4uYnRuLW1pbmktdGFiLmFjdGl2ZSB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuXG4gIC5idG4tbWluaS10YWIuYWN0aXZlIHtcbiAgICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNCwgMTY1LCAyMzMsIDEpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQsIDE2NSwgMjMzLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG4gIH1cbn1cbi5idG4tbWluaS10YWIuYWN0aXZlOndoZXJlKC5kYXJrLCAuZGFyayAqKSB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNCwgMTY1LCAyMzMsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0LCAxNjUsIDIzMywgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLnByb2plY3QtY2FyZC1vdXRlci13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNjAlO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIDEpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcbiAgcGFkZGluZzogMXJlbTtcbn1cbkBtZWRpYSAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG5cbiAgLnByb2plY3QtY2FyZC1vdXRlci13cmFwcGVyIHtcbiAgICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgxNCwgMTY1LCAyMzMsIDEpO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgxNCwgMTY1LCAyMzMsIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XG4gIH1cbn1cbi5wcm9qZWN0LWNhcmQtb3V0ZXItd3JhcHBlcjp3aGVyZSguZGFyaywgLmRhcmsgKikge1xuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xuICBib3JkZXItY29sb3I6IHJnYmEoMTQsIDE2NSwgMjMzLCAxKTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDE0LCAxNjUsIDIzMywgdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcbn1cbi5wcm9qZWN0LWNhcmQtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgc2Nyb2xsLXNuYXAtdHlwZTogeCB2YXIoLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzKTtcbiAgZ2FwOiAxcmVtO1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuLnByb2plY3QtY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBzY3JvbGwtc25hcC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4ucHJvamVjdC1jYXJkOndoZXJlKC5kYXJrLCAuZGFyayAqKSB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMzksIDQyLCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMzksIDQyLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4ucHJvamVjdC1jYXJkLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucHJvamVjdC1jYXJkLWltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xuICBvcGFjaXR5OiAwLjU7XG59XG4ucHJvamVjdC1jYXJkLWluZGV4IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICBmb250LXNpemU6IDMuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGxpbmUtaGVpZ2h0OiAwLjg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcblxuICAucHJvamVjdC1jYXJkLWluZGV4IHtcbiAgICBmb250LXNpemU6IDZyZW07XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gIH1cbn1cbi5wcm9qZWN0LWNhcmQtbmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHdpZHRoOiAxMDAlO1xuICAtLXR3LXRyYW5zbGF0ZS15OiAtNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIC01MCUpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBsaW5lLWhlaWdodDogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuXG4gIC5wcm9qZWN0LWNhcmQtbmFtZSB7XG4gICAgZm9udC1zaXplOiAyLjI1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAyLjVyZW07XG4gIH1cbn1cbi5wcm9qZWN0LWNhcmQtdHlwZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2Ni42NjY2NjclO1xuICB3aWR0aDogMTAwJTtcbiAgLS10dy10cmFuc2xhdGUteTogLTUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCAtNTAlKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLnByb2plY3QtY2FyZC1leHBhbmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjM3NXJlbTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC4zNzVyZW07XG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG4gIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgb3BhY2l0eTogMC41O1xuICAgIHRyYW5zaXRpb246XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yIDUwMG1zIGVhc2UsIG9wYWNpdHkgNTAwbXMgZWFzZTtcbn1cbi5wcm9qZWN0LWNhcmQtZXhwYW5kOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMzksIDQyLCAwLjI1KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMzksIDQyLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG4gIC0tdHctYmctb3BhY2l0eTogMC4yNTtcbiAgb3BhY2l0eTogMTtcbn1cbi5wcm9qZWN0LWNhcmQtZXhwYW5kOmhvdmVyOndoZXJlKC5kYXJrLCAuZGFyayAqKSB7XG4gIC0tdHctYmctb3BhY2l0eTogMC41O1xufVxuLmltZy1hcnJvdy1kb3duLXdyYXBwZXIsXG4gIC5pbWctb3Blbi13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBhc3BlY3QtcmF0aW86IDEgLyAxO1xuICBoZWlnaHQ6IDIwcHg7XG59XG4ucHJvamVjdC1kZXRhaWwtdG9vbC13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjVyZW07XG59XG4ucHJvamVjdC1kZXRhaWwtbGluay13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZ2FwOiAxLjI1cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLnByb2plY3QtZGV0YWlsLWxpbmstd3JhcHBlciA+IGE6bm90KFtkaXNhYmxlZF0pOmhvdmVyIHtcbiAgLS10dy1zY2FsZS14OiAxLjE7XG4gIC0tdHctc2NhbGUteTogMS4xO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCgxLjEpIHNjYWxlWSgxLjEpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbi5idG4tcHJvamVjdC1jYXJkLW5leHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogY2FsYyg1MCUgLSAyOHB4KTtcbiAgcmlnaHQ6IDFyZW07XG4gIGFzcGVjdC1yYXRpbzogMSAvIDE7XG4gIGhlaWdodDogMy41cmVtO1xuICAtLXR3LXJvdGF0ZTogLTkwZGVnO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKC05MGRlZykgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMzksIDQyLCAwLjUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbiAgLS10dy1iZy1vcGFjaXR5OiAwLjU7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5idG4tcHJvamVjdC1jYXJkLW5leHQ6d2hlcmUoLmRhcmssIC5kYXJrICopIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5idG4tcHJvamVjdC1jYXJkLXByZXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogY2FsYyg1MCUgLSAyOHB4KTtcbiAgbGVmdDogMXJlbTtcbiAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcbiAgaGVpZ2h0OiAzLjVyZW07XG4gIC0tdHctcm90YXRlOiA5MGRlZztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSg5MGRlZykgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMzksIDQyLCAwLjUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbiAgLS10dy1iZy1vcGFjaXR5OiAwLjU7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5idG4tcHJvamVjdC1jYXJkLXByZXY6d2hlcmUoLmRhcmssIC5kYXJrICopIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5wcm9qZWN0LWNhcmQtaW1hZ2UsXG4gIC5wcm9qZWN0LWNhcmQtaW5kZXgsXG4gIC5wcm9qZWN0LWNhcmQtbmFtZSxcbiAgLnByb2plY3QtY2FyZC10eXBlLFxuICAuYnRuLXByb2plY3QtY2FyZC1uZXh0LFxuICAuYnRuLXByb2plY3QtY2FyZC1wcmV2IHtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDUwMG1zIGVhc2U7XG4gIH1cbi5wcm9qZWN0LWNhcmQtaW5mbzpob3ZlciAucHJvamVjdC1jYXJkLWltYWdlLFxuICAuYnRuLXByb2plY3QtY2FyZC1uZXh0OmhvdmVyLFxuICAuYnRuLXByb2plY3QtY2FyZC1wcmV2OmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5wcm9qZWN0LWNhcmQtaW5mbzpob3ZlciAucHJvamVjdC1jYXJkLWluZGV4IHtcbiAgb3BhY2l0eTogMC41O1xufVxuLnByb2plY3QtY2FyZC1pbmZvOmhvdmVyIC5wcm9qZWN0LWNhcmQtbmFtZSxcbiAgLnByb2plY3QtY2FyZC1pbmZvOmhvdmVyIC5wcm9qZWN0LWNhcmQtdHlwZSB7XG4gIG9wYWNpdHk6IDA7XG59XG4ucHJvamVjdC1kZXRhaWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAyLjVyZW07XG4gIG9wYWNpdHk6IDA7XG59XG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuXG4gIC5wcm9qZWN0LWRldGFpbCB7XG4gICAgZ2FwOiAxLjI1cmVtO1xuICB9XG59XG4ucHJvamVjdC1kZXRhaWwge1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgMXMgZWFzZTtcbiAgfVxuLnByb2plY3QtZGV0YWlsLmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG59XG4uc2Nyb2xsLXdyYXBwZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMXJlbTtcbiAgcmlnaHQ6IDAuNzVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC0tdHctdHJhbnNsYXRlLXk6IC0xMDAlO1xuICAtLXR3LXRyYW5zbGF0ZS14OiAzMy4zMzMzMzMlO1xuICAtLXR3LXJvdGF0ZTogLTkwZGVnO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMy4zMzMzMzMlLCAtMTAwJSkgcm90YXRlKC05MGRlZykgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG59XG4udG9wLXdyYXBwZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMC43NXJlbTtcbiAgbGVmdDogMXJlbTtcbiAgLS10dy10cmFuc2xhdGUteTogLTEwMCU7XG4gIC0tdHctdHJhbnNsYXRlLXg6IC0zMy4zMzMzMzMlO1xuICAtLXR3LXJvdGF0ZTogOTBkZWc7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zMy4zMzMzMzMlLCAtMTAwJSkgcm90YXRlKDkwZGVnKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuLnRvcC13cmFwcGVyLXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMXJlbTtcbiAgcmlnaHQ6IDAuNzVyZW07XG4gIC0tdHctdHJhbnNsYXRlLXk6IC0xMDAlO1xuICAtLXR3LXJvdGF0ZTogOTBkZWc7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgLTEwMCUpIHJvdGF0ZSg5MGRlZykgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbi50b3Atd3JhcHBlciA+IGRpdixcbiAgLnRvcC13cmFwcGVyLXAgPiBkaXYge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA1MDBtcyBlYXNlO1xuICB9XG4udG9wLXdyYXBwZXI6aG92ZXIgPiBkaXYsXG4gIC50b3Atd3JhcHBlci1wOmhvdmVyID4gZGl2IHtcbiAgLS10dy10cmFuc2xhdGUteDogLTAuNzVyZW07XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0wLjc1cmVtLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuLnVuZGVybGluZS1oLFxuICAuaGlnaGxpZ2h0LWgge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4udW5kZXJsaW5lLWg6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgYm90dG9tOiAwLjEyNXJlbTtcbiAgaGVpZ2h0OiAwLjEyNXJlbTtcbiAgd2lkdGg6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLnVuZGVybGluZS1oOndoZXJlKC5kYXJrLCAuZGFyayAqKTphZnRlciB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4udW5kZXJsaW5lLWg6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgdHJhbnNpdGlvbjogd2lkdGggNTAwbXMgZWFzZTtcbiAgfVxuYnV0dG9uOmhvdmVyIC51bmRlcmxpbmUtaDphZnRlciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmhpZ2hsaWdodC1oOmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI1JTtcbiAgbGVmdDogLTE1cHg7XG4gIHotaW5kZXg6IC0xMDtcbiAgaGVpZ2h0OiA1MCU7XG4gIHdpZHRoOiAwcHg7XG4gIG9wYWNpdHk6IDAuODtcbn1cbkBtZWRpYSAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG5cbiAgLmhpZ2hsaWdodC1oOmFmdGVyIHtcbiAgICBsZWZ0OiAtMTBweDtcbiAgfVxufVxuLmhpZ2hsaWdodC1oOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHRyYW5zaXRpb246IHdpZHRoIDUwMG1zIGVhc2U7XG4gIH1cbmJ1dHRvbjpob3ZlciAuaGlnaGxpZ2h0LWg6YWZ0ZXIge1xuICB3aWR0aDogY2FsYygxMDAlICsgMzBweCk7XG59XG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuXG4gIGJ1dHRvbjpob3ZlciAuaGlnaGxpZ2h0LWg6YWZ0ZXIge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAxMHB4KTtcbiAgfVxufVxuLmFib3V0LXNwYW4ge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgMSk7XG4gIGNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuQG1lZGlhIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcblxuICAuYWJvdXQtc3BhbiB7XG4gICAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gICAgY29sb3I6IHJnYmEoMjUwLCAyMDQsIDIxLCAxKTtcbiAgICBjb2xvcjogcmdiYSgyNTAsIDIwNCwgMjEsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xuICB9XG59XG4uYWJvdXQtc3Bhbjp3aGVyZSguZGFyaywgLmRhcmsgKikge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoMjUwLCAyMDQsIDIxLCAxKTtcbiAgY29sb3I6IHJnYmEoMjUwLCAyMDQsIDIxLCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cbi50b29sOmhvdmVyIC5pY29uLWFib3V0LXRvb2wge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi8qIEFuaW1hdGlvbiAqL1xuW2NsYXNzXj1cImFuaW1hdGUtXCJdIHtcbiAgICB3aWxsLWNoYW5nZTogYW5pbWF0aW9uO1xuICB9XG4uZml4ZWQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG4uYWJzb2x1dGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4ucmVsYXRpdmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYm90dG9tLVxcXFxbLTIwcHhcXFxcXSB7XG4gIGJvdHRvbTogLTIwcHg7XG59XG4ubGVmdC0xXFxcXC8yIHtcbiAgbGVmdDogNTAlO1xufVxuLmxlZnQtXFxcXFstMTIwcHhcXFxcXSB7XG4gIGxlZnQ6IC0xMjBweDtcbn1cbi5sZWZ0LVxcXFxbLTE1NnB4XFxcXF0ge1xuICBsZWZ0OiAtMTU2cHg7XG59XG4ubGVmdC1cXFxcWzE1cHhcXFxcXSB7XG4gIGxlZnQ6IDE1cHg7XG59XG4ubGVmdC1cXFxcW2NhbGNcXFxcKDUwXFxcXCUtMjBweFxcXFwpXFxcXF0ge1xuICBsZWZ0OiBjYWxjKDUwJSAtIDIwcHgpO1xufVxuLnJpZ2h0LTAge1xuICByaWdodDogMHB4O1xufVxuLnJpZ2h0LTE0IHtcbiAgcmlnaHQ6IDMuNXJlbTtcbn1cbi50b3AtMCB7XG4gIHRvcDogMHB4O1xufVxuLnRvcC0xXFxcXC8yIHtcbiAgdG9wOiA1MCU7XG59XG4udG9wLVxcXFxbNTB2aFxcXFxdIHtcbiAgdG9wOiA1MHZoO1xufVxuLnRvcC1mdWxsIHtcbiAgdG9wOiAxMDAlO1xufVxuLnotNDAge1xuICB6LWluZGV4OiA0MDtcbn1cbi56LTUwIHtcbiAgei1pbmRleDogNTA7XG59XG4uei1cXFxcWzFcXFxcXSB7XG4gIHotaW5kZXg6IDE7XG59XG4ubXQtMTQge1xuICBtYXJnaW4tdG9wOiAzLjVyZW07XG59XG4ubXQtMiB7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbn1cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmFzcGVjdC1zcXVhcmUge1xuICBhc3BlY3QtcmF0aW86IDEgLyAxO1xufVxuLmgtMSB7XG4gIGhlaWdodDogMC4yNXJlbTtcbn1cbi5oLTEwIHtcbiAgaGVpZ2h0OiAyLjVyZW07XG59XG4uaC03IHtcbiAgaGVpZ2h0OiAxLjc1cmVtO1xufVxuLmgtXFxcXFtjYWxjXFxcXCgxMDBcXFxcJS0zMHB4XFxcXClcXFxcXSB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMzBweCk7XG59XG4uaC1cXFxcW2NhbGNcXFxcKDIwdndcXFxcKjBcXFxcLjhcXFxcKVxcXFxdIHtcbiAgaGVpZ2h0OiBjYWxjKDIwdncgKiAwLjgpO1xufVxuLmgtZnVsbCB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi53LTcge1xuICB3aWR0aDogMS43NXJlbTtcbn1cbi53LVxcXFxbMTY4cHhcXFxcXSB7XG4gIHdpZHRoOiAxNjhweDtcbn1cbi53LVxcXFxbMjBcXFxcJVxcXFxdIHtcbiAgd2lkdGg6IDIwJTtcbn1cbi53LVxcXFxbNDBcXFxcJVxcXFxdIHtcbiAgd2lkdGg6IDQwJTtcbn1cbi53LVxcXFxbY2FsY1xcXFwoMTAwXFxcXCUtMTZweFxcXFwpXFxcXF0ge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTZweCk7XG59XG4udy1cXFxcW2NhbGNcXFxcKDEwMFxcXFwlLTMwcHhcXFxcKVxcXFxdIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xufVxuLnctZml0IHtcbiAgd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbn1cbi53LWZ1bGwge1xuICB3aWR0aDogMTAwJTtcbn1cbi5taW4tdy1cXFxcWzMwXFxcXCVcXFxcXSB7XG4gIG1pbi13aWR0aDogMzAlO1xufVxuLm1pbi13LVxcXFxbNzBcXFxcJVxcXFxdIHtcbiAgbWluLXdpZHRoOiA3MCU7XG59XG4ubWluLXctZnVsbCB7XG4gIG1pbi13aWR0aDogMTAwJTtcbn1cbi4tdHJhbnNsYXRlLXgtMVxcXFwvMiB7XG4gIC0tdHctdHJhbnNsYXRlLXg6IC01MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG4uLXRyYW5zbGF0ZS15LTFcXFxcLzIge1xuICAtLXR3LXRyYW5zbGF0ZS15OiAtNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIC01MCUpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuLnRyYW5zbGF0ZS14LTFcXFxcLzIge1xuICAtLXR3LXRyYW5zbGF0ZS14OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbi5yb3RhdGUtMTgwIHtcbiAgLS10dy1yb3RhdGU6IDE4MGRlZztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSgxODBkZWcpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG4ucm90YXRlLTkwIHtcbiAgLS10dy1yb3RhdGU6IDkwZGVnO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKDkwZGVnKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuQGtleWZyYW1lcyBhcHBlYXItY3ljbGUge1xuXG4gIDAlLCA0MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICA2MCUsIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbi5hbmltYXRlLWFwcGVhci1jeWNsZSB7XG4gIGFuaW1hdGlvbjogYXBwZWFyLWN5Y2xlIDEwcyBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG5Aa2V5ZnJhbWVzIGFwcGVhci1jeWNsZSB7XG5cbiAgMCUsIDQwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIDYwJSwgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuLmFuaW1hdGUtYXBwZWFyLWN5Y2xlLXIge1xuICBhbmltYXRpb246IGFwcGVhci1jeWNsZSAxMHMgaW5maW5pdGUgYWx0ZXJuYXRlLXJldmVyc2U7XG59XG5Aa2V5ZnJhbWVzIGJvdW5jZS1jaGV2cm9uLWxlZnQge1xuXG4gIDAlLCAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKDkwZGVnKSB0cmFuc2xhdGVZKDApO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjgsIDAsIDEsIDEpO1xuICB9XG5cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKDkwZGVnKSB0cmFuc2xhdGVZKDI1JSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG4gIH1cbn1cbi5hbmltYXRlLWNoZXZyb24tbGVmdCB7XG4gIGFuaW1hdGlvbjogYm91bmNlLWNoZXZyb24tbGVmdCAxcyBpbmZpbml0ZTtcbn1cbkBrZXlmcmFtZXMgYm91bmNlLWNoZXZyb24tcmlnaHQge1xuXG4gIDAlLCAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKC05MGRlZykgdHJhbnNsYXRlWSgtMjUlKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC44LCAwLCAxLCAxKTtcbiAgfVxuXG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSgtOTBkZWcpIHRyYW5zbGF0ZVkoMCk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG4gIH1cbn1cbi5hbmltYXRlLWNoZXZyb24tcmlnaHQge1xuICBhbmltYXRpb246IGJvdW5jZS1jaGV2cm9uLXJpZ2h0IDFzIGluZmluaXRlO1xufVxuQGtleWZyYW1lcyBzbGlkZS11cCB7XG5cbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuLmFuaW1hdGUtaGVsbG8ge1xuICBhbmltYXRpb246IHNsaWRlLXVwIDFzIDE7XG59XG5Aa2V5ZnJhbWVzIGJvdW5jZS1tZW51IHtcblxuICAwJSwgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSgtOTBkZWcpIHRyYW5zbGF0ZVkoMCk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuOCwgMCwgMSwgMSk7XG4gIH1cblxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoLTkwZGVnKSB0cmFuc2xhdGVZKDI1JSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG4gIH1cbn1cbi5hbmltYXRlLW1lbnUge1xuICBhbmltYXRpb246IGJvdW5jZS1tZW51IDEuNXMgaW5maW5pdGU7XG59XG5Aa2V5ZnJhbWVzIHNocmluay13aWR0aCB7XG5cbiAgMCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAxMDAlIHtcbiAgICB3aWR0aDogMDtcbiAgfVxufVxuLmFuaW1hdGUtc2hyaW5rLXdpZHRoIHtcbiAgYW5pbWF0aW9uOiBzaHJpbmstd2lkdGggMTBzIGxpbmVhciBpbmZpbml0ZTtcbn1cbi5zbmFwLXgge1xuICBzY3JvbGwtc25hcC10eXBlOiB4IHZhcigtLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3MpO1xufVxuLnNuYXAtY2VudGVyIHtcbiAgc2Nyb2xsLXNuYXAtYWxpZ246IGNlbnRlcjtcbn1cbi5ncmlkLWNvbHMtcmVwZWF0LWF1dG8tMzAge1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIDMwcHgpO1xufVxuLmZsZXgtcm93IHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5mbGV4LXJvdy1yZXZlcnNlIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xufVxuLmZsZXgtY29sIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5pdGVtcy1jZW50ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmp1c3RpZnktY2VudGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uanVzdGlmeS1iZXR3ZWVuIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmp1c3RpZnktZXZlbmx5IHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG4uZ2FwLTEge1xuICBnYXA6IDAuMjVyZW07XG59XG4uZ2FwLTE0IHtcbiAgZ2FwOiAzLjVyZW07XG59XG4uZ2FwLTIge1xuICBnYXA6IDAuNXJlbTtcbn1cbi5nYXAtMyB7XG4gIGdhcDogMC43NXJlbTtcbn1cbi5nYXAtNSB7XG4gIGdhcDogMS4yNXJlbTtcbn1cbi5zZWxmLXN0YXJ0IHtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbn1cbi5vdmVyZmxvdy1oaWRkZW4ge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm92ZXJmbG93LXgtaGlkZGVuIHtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuLm92ZXJmbG93LXgtc2Nyb2xsIHtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xufVxuLnNjcm9sbC1zbW9vdGgge1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cbi50ZXh0LXByZXR0eSB7XG4gIHRleHQtd3JhcDogcHJldHR5O1xufVxuLnJvdW5kZWQtZnVsbCB7XG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbn1cbi5yb3VuZGVkLW1kIHtcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG59XG4uYm9yZGVyLTIge1xuICBib3JkZXItd2lkdGg6IDJweDtcbn1cbi5ib3JkZXIteS0yIHtcbiAgYm9yZGVyLXRvcC13aWR0aDogMnB4O1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XG59XG4uYm9yZGVyLXRoZW1lLTIge1xuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjUwLCAyMDQsIDIxLCAxKTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1MCwgMjA0LCAyMSwgdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcbn1cbi5iZy1kYXJrIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgNDIsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5iZy1saWdodCB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4uYmctdGhlbWUtMSB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDgsIDExMywgMTEzLCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDgsIDExMywgMTEzLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4uYmctdGhlbWUtMiB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsIDIwNCwgMjEsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MCwgMjA0LCAyMSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLmJnLW9wYWNpdHktOTAge1xuICAtLXR3LWJnLW9wYWNpdHk6IDAuOTtcbn1cbi5weC0wIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cbi5weC03IHtcbiAgcGFkZGluZy1sZWZ0OiAxLjc1cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxLjc1cmVtO1xufVxuLnB5LTE0IHtcbiAgcGFkZGluZy10b3A6IDMuNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDMuNXJlbTtcbn1cbi50ZXh0LWp1c3RpZnkge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuLnRleHQtc3RhcnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnRleHQtMnhsIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xufVxuLnRleHQtNHhsIHtcbiAgZm9udC1zaXplOiAyLjI1cmVtO1xuICBsaW5lLWhlaWdodDogMi41cmVtO1xufVxuLnRleHQtbGcge1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xuICBsaW5lLWhlaWdodDogMS43NXJlbTtcbn1cbi50ZXh0LXNtIHtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XG59XG4udGV4dC14bCB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XG59XG4uZm9udC1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5mb250LWV4dHJhYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG4uZm9udC1tZWRpdW0ge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmZvbnQtc2VtaWJvbGQge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLnVwcGVyY2FzZSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uaXRhbGljIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuLnRleHQtbGlnaHQge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoMjQxLCAyNDUsIDI0OSwgMSk7XG4gIGNvbG9yOiByZ2JhKDI0MSwgMjQ1LCAyNDksIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuLnRleHQtdGhlbWUtMSB7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiYSgyNDgsIDExMywgMTEzLCAxKTtcbiAgY29sb3I6IHJnYmEoMjQ4LCAxMTMsIDExMywgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG4udGV4dC10aGVtZS0yIHtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2JhKDI1MCwgMjA0LCAyMSwgMSk7XG4gIGNvbG9yOiByZ2JhKDI1MCwgMjA0LCAyMSwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG4udGV4dC10aGVtZS0zIHtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2JhKDE0LCAxNjUsIDIzMywgMSk7XG4gIGNvbG9yOiByZ2JhKDE0LCAxNjUsIDIzMywgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG4udW5kZXJsaW5lIHtcbiAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcbn1cbi5vcGFjaXR5LTAge1xuICBvcGFjaXR5OiAwO1xufVxuLm9wYWNpdHktNTAge1xuICBvcGFjaXR5OiAwLjU7XG59XG5tYWluIHtcbiAgICB0cmFuc2l0aW9uOlxuICAgICAgdHJhbnNmb3JtIDUwMG1zIGVhc2UsIG9wYWNpdHkgNTAwbXMgZWFzZTtcbiAgfVxuYXNpZGUsXG4gICNidG4tbWVudS1sLFxuICAjYnRuLW1lbnUtbC1jbG9zZSxcbiAgI2J0bi1tZW51LWwtY2xvc2UgPiBkaXYsXG4gICNidG4tcHJvamVjdC1kZXRhaWwtY2xvc2Uge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA1MDBtcyBlYXNlO1xuICB9XG5tYWluLm1vdmUge1xuICAtLXR3LXRyYW5zbGF0ZS14OiA0MHZ3O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg0MHZ3LCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuYXNpZGUubW92ZSB7XG4gIC0tdHctdHJhbnNsYXRlLXg6IDBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxubWFpbi5tb3ZlLXAge1xuICAtLXR3LXRyYW5zbGF0ZS14OiAtNjB2dztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTYwdncsIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG5hc2lkZS5tb3ZlLXAge1xuICAtLXR3LXRyYW5zbGF0ZS14OiAtMTAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG4jYnRuLW1lbnUtbC5zaG93IHtcbiAgLS10dy10cmFuc2xhdGUteTogMjAwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgMjAwcHgpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufVxuI2J0bi1tZW51LWwtY2xvc2Uuc2hvdyB7XG4gIC0tdHctdHJhbnNsYXRlLXg6IDIwMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMDBweCwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbiNidG4tbWVudS1sLWNsb3NlOmhvdmVyID4gZGl2IHtcbiAgLS10dy1yb3RhdGU6IDE4MGRlZztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSgxODBkZWcpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG4jYXJ0aWNsZS1hYm91dCB7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSA1MDBtcyBlYXNlO1xuICB9XG4jcHJvamVjdC1jYXJkLWRldGFpbC13cmFwcGVyIHtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcbiAgfVxuI3Byb2plY3QtY2FyZC1kZXRhaWwtd3JhcHBlci5hY3RpdmUge1xuICAtLXR3LXRyYW5zbGF0ZS15OiBjYWxjKC0xMDAlIC0gMTVweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgY2FsYygtMTAwJSAtIDE1cHgpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbkBtZWRpYSAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG5cbiAgI3Byb2plY3QtY2FyZC1kZXRhaWwtd3JhcHBlci5hY3RpdmUge1xuICAgIC0tdHctdHJhbnNsYXRlLXk6IC0xMDAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgLTEwMCUpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIH1cbn1cbi8qIE1lbnUgZG90ICovXG5idXR0b246ZGlzYWJsZWQgPiBkaXYgPiBzcGFuIHtcbiAgb3BhY2l0eTogMTtcbn1cbkBtZWRpYSAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG5cbiAgLnBvcnRyYWl0XFxcXDp0ZXh0LXRpdGxlIHtcbiAgICBmb250LXNpemU6IDIuMjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGxpbmUtaGVpZ2h0OiAwLjg7XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcblxuICAgIC5wb3J0cmFpdFxcXFw6dGV4dC10aXRsZSB7XG4gICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICBsaW5lLWhlaWdodDogMTtcbiAgICB9XG4gIH1cbn1cbi5hZnRlclxcXFw6YmctdGhlbWUtMTo6YWZ0ZXIge1xuICBjb250ZW50OiB2YXIoLS10dy1jb250ZW50KTtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0OCwgMTEzLCAxMTMsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0OCwgMTEzLCAxMTMsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5hZnRlclxcXFw6YmctdGhlbWUtMjo6YWZ0ZXIge1xuICBjb250ZW50OiB2YXIoLS10dy1jb250ZW50KTtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MCwgMjA0LCAyMSwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUwLCAyMDQsIDIxLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4uYWZ0ZXJcXFxcOmJnLXRoZW1lLTM6OmFmdGVyIHtcbiAgY29udGVudDogdmFyKC0tdHctY29udGVudCk7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNCwgMTY1LCAyMzMsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0LCAxNjUsIDIzMywgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLmhvdmVyXFxcXDpyb3RhdGUtMTgwOmhvdmVyIHtcbiAgLS10dy1yb3RhdGU6IDE4MGRlZztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSgxODBkZWcpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG4uaG92ZXJcXFxcOnNjYWxlLTExMDpob3ZlciB7XG4gIC0tdHctc2NhbGUteDogMS4xO1xuICAtLXR3LXNjYWxlLXk6IDEuMTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgoMS4xKSBzY2FsZVkoMS4xKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcblxuICAubWRcXFxcOmgtOCB7XG4gICAgaGVpZ2h0OiAycmVtO1xuICB9XG5cbiAgLm1kXFxcXDp3LTE0IHtcbiAgICB3aWR0aDogMy41cmVtO1xuICB9XG5cbiAgLm1kXFxcXDpncmlkLWNvbHMtcmVwZWF0LWF1dG8tNDAge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgNDBweCk7XG4gIH1cblxuICAubWRcXFxcOnB4LTE0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMuNXJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzLjVyZW07XG4gIH1cblxuICAubWRcXFxcOnRleHQtMnhsIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgfVxuXG4gIC5tZFxcXFw6dGV4dC00eGwge1xuICAgIGZvbnQtc2l6ZTogMi4yNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMi41cmVtO1xuICB9XG5cbiAgLm1kXFxcXDp0ZXh0LTZ4bCB7XG4gICAgZm9udC1zaXplOiAzLjc1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICB9XG5cbiAgLm1kXFxcXDp0ZXh0LWxnIHtcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuXG4gIC5wb3J0cmFpdFxcXFw6Ym90dG9tLTEge1xuICAgIGJvdHRvbTogMC4yNXJlbTtcbiAgfVxuXG4gIC5wb3J0cmFpdFxcXFw6Ym90dG9tLTQge1xuICAgIGJvdHRvbTogMXJlbTtcbiAgfVxuXG4gIC5wb3J0cmFpdFxcXFw6bGVmdC0wIHtcbiAgICBsZWZ0OiAwcHg7XG4gIH1cblxuICAucG9ydHJhaXRcXFxcOmxlZnQtZnVsbCB7XG4gICAgbGVmdDogMTAwJTtcbiAgfVxuXG4gIC5wb3J0cmFpdFxcXFw6cmlnaHQtNyB7XG4gICAgcmlnaHQ6IDEuNzVyZW07XG4gIH1cblxuICAucG9ydHJhaXRcXFxcOmZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cblxuICAucG9ydHJhaXRcXFxcOmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5wb3J0cmFpdFxcXFw6aC1cXFxcWzUwMHB4XFxcXF0ge1xuICAgIGhlaWdodDogNTAwcHg7XG4gIH1cblxuICAucG9ydHJhaXRcXFxcOmgtXFxcXFtjYWxjXFxcXCgxMDBcXFxcJS0yMHB4XFxcXClcXFxcXSB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgfVxuXG4gIC5wb3J0cmFpdFxcXFw6aC1maXQge1xuICAgIGhlaWdodDogLW1vei1maXQtY29udGVudDtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICB9XG5cbiAgLnBvcnRyYWl0XFxcXDpoLWZ1bGwge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5wb3J0cmFpdFxcXFw6dy1cXFxcWzc1XFxcXCVcXFxcXSB7XG4gICAgd2lkdGg6IDc1JTtcbiAgfVxuXG4gIC5wb3J0cmFpdFxcXFw6dy1mdWxsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5wb3J0cmFpdFxcXFw6dy1zY3JlZW4ge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgfVxuXG4gIEBrZXlmcmFtZXMgYm91bmNlLXNjcm9sbCB7XG5cbiAgICAwJSwgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1MCUpIHRyYW5zbGF0ZVgoMzMlKSByb3RhdGUoLTkwZGVnKTtcbiAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjgsIDAsIDEsIDEpO1xuICAgIH1cblxuICAgIDUwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpIHRyYW5zbGF0ZVgoMzMlKSByb3RhdGUoLTkwZGVnKTtcbiAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICAgIH1cbiAgfVxuXG4gIC5wb3J0cmFpdFxcXFw6YW5pbWF0ZS1ib3VuY2Utc2Nyb2xsIHtcbiAgICBhbmltYXRpb246IGJvdW5jZS1zY3JvbGwgMXMgaW5maW5pdGU7XG4gIH1cblxuICAucG9ydHJhaXRcXFxcOmZsZXgtY29sIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLnBvcnRyYWl0XFxcXDpmbGV4LWNvbC1yZXZlcnNlIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gIH1cblxuICAucG9ydHJhaXRcXFxcOml0ZW1zLWVuZCB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICB9XG5cbiAgLnBvcnRyYWl0XFxcXDpnYXAtMTAge1xuICAgIGdhcDogMi41cmVtO1xuICB9XG5cbiAgLnBvcnRyYWl0XFxcXDpnYXAtNSB7XG4gICAgZ2FwOiAxLjI1cmVtO1xuICB9XG5cbiAgLnBvcnRyYWl0XFxcXDpzZWxmLXN0YXJ0IHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICB9XG5cbiAgLnBvcnRyYWl0XFxcXDpiZy10aGVtZS0zIHtcbiAgICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNCwgMTY1LCAyMzMsIDEpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQsIDE2NSwgMjMzLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG4gIH1cblxuICAucG9ydHJhaXRcXFxcOnB4LTQge1xuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICB9XG5cbiAgLnBvcnRyYWl0XFxcXDpweC03IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNzVyZW07XG4gICAgcGFkZGluZy1yaWdodDogMS43NXJlbTtcbiAgfVxuXG4gIC5wb3J0cmFpdFxcXFw6cHktMTAge1xuICAgIHBhZGRpbmctdG9wOiAyLjVyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDIuNXJlbTtcbiAgfVxuXG4gIC5wb3J0cmFpdFxcXFw6cHktNCB7XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIH1cblxuICAucG9ydHJhaXRcXFxcOnRleHQtZW5kIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuXG4gICAgLnBvcnRyYWl0XFxcXDptZFxcXFw6cmlnaHQtMTQge1xuICAgICAgcmlnaHQ6IDMuNXJlbTtcbiAgICB9XG5cbiAgICAucG9ydHJhaXRcXFxcOm1kXFxcXDp3LVxcXFxbNTBcXFxcJVxcXFxdIHtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxuXG4gICAgLnBvcnRyYWl0XFxcXDptZFxcXFw6cHgtMTQge1xuICAgICAgcGFkZGluZy1sZWZ0OiAzLjVyZW07XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAzLjVyZW07XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcblxuICAubGFuZHNjYXBlXFxcXDp0b3AtMVxcXFwvMiB7XG4gICAgdG9wOiA1MCU7XG4gIH1cblxuICAubGFuZHNjYXBlXFxcXDpoaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubGFuZHNjYXBlXFxcXDotdHJhbnNsYXRlLXktMVxcXFwvMiB7XG4gICAgLS10dy10cmFuc2xhdGUteTogLTUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIC01MCUpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIH1cblxuICAubGFuZHNjYXBlXFxcXDp0cmFuc2xhdGUteC1cXFxcWy00MHZ3XFxcXF0ge1xuICAgIC0tdHctdHJhbnNsYXRlLXg6IC00MHZ3O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC00MHZ3LCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIH1cblxuICAubGFuZHNjYXBlXFxcXDpiZy10aGVtZS0zIHtcbiAgICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNCwgMTY1LCAyMzMsIDEpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQsIDE2NSwgMjMzLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG4gIH1cblxuICAubGFuZHNjYXBlXFxcXDpwLTgge1xuICAgIHBhZGRpbmc6IDJyZW07XG4gIH1cblxuICAubGFuZHNjYXBlXFxcXDpweC0xNCB7XG4gICAgcGFkZGluZy1sZWZ0OiAzLjVyZW07XG4gICAgcGFkZGluZy1yaWdodDogMy41cmVtO1xuICB9XG59XG4uZGFya1xcXFw6YmctZGFyazp3aGVyZSguZGFyaywgLmRhcmsgKikge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDM5LCA0MiwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLmRhcmtcXFxcOmJnLWxpZ2h0OndoZXJlKC5kYXJrLCAuZGFyayAqKSB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0NSwgMjQ5LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4uZGFya1xcXFw6YmctdGhlbWUtMjp3aGVyZSguZGFyaywgLmRhcmsgKikge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUwLCAyMDQsIDIxLCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsIDIwNCwgMjEsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5kYXJrXFxcXDpiZy10aGVtZS0zOndoZXJlKC5kYXJrLCAuZGFyayAqKSB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNCwgMTY1LCAyMzMsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0LCAxNjUsIDIzMywgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLmRhcmtcXFxcOmJnLXRyYW5zcGFyZW50OndoZXJlKC5kYXJrLCAuZGFyayAqKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLmRhcmtcXFxcOmJnLW9wYWNpdHktOTA6d2hlcmUoLmRhcmssIC5kYXJrICopIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAwLjk7XG59XG4uZGFya1xcXFw6dGV4dC10aGVtZS0yOndoZXJlKC5kYXJrLCAuZGFyayAqKSB7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiYSgyNTAsIDIwNCwgMjEsIDEpO1xuICBjb2xvcjogcmdiYSgyNTAsIDIwNCwgMjEsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuLmRhcmtcXFxcOnRleHQtdGhlbWUtMzp3aGVyZSguZGFyaywgLmRhcmsgKikge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoMTQsIDE2NSwgMjMzLCAxKTtcbiAgY29sb3I6IHJnYmEoMTQsIDE2NSwgMjMzLCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGlEQUFpRDtFQUNqRCx5QkFBeUI7RUFDekIsK0RBQW9FO0FBQ3RFOztBQUVBLGlFQUFjOztBQUFkOzs7Q0FBYzs7QUFBZDs7O0VBQUEsc0JBQWMsRUFBZCxNQUFjO0VBQWQsZUFBYyxFQUFkLE1BQWM7RUFBZCxtQkFBYyxFQUFkLE1BQWM7RUFBZCxxQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7RUFBQSxnQkFBYztBQUFBOztBQUFkOzs7Ozs7OztDQUFjOztBQUFkOztFQUFBLGdCQUFjLEVBQWQsTUFBYztFQUFkLDhCQUFjLEVBQWQsTUFBYztFQUFkLGdCQUFjLEVBQWQsTUFBYztFQUFkLGNBQWM7S0FBZCxXQUFjLEVBQWQsTUFBYztFQUFkLDhMQUFjLEVBQWQsTUFBYztFQUFkLDZCQUFjLEVBQWQsTUFBYztFQUFkLCtCQUFjLEVBQWQsTUFBYztFQUFkLHdDQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDtFQUFBLFNBQWMsRUFBZCxNQUFjO0VBQWQsb0JBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7Ozs7Q0FBYzs7QUFBZDtFQUFBLFNBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7RUFBZCxxQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLDBCQUFjO0VBQWQseUNBQWM7VUFBZCxpQ0FBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOzs7Ozs7RUFBQSxrQkFBYztFQUFkLG9CQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxjQUFjO0VBQWQsd0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxtQkFBYztBQUFBOztBQUFkOzs7OztDQUFjOztBQUFkOzs7O0VBQUEsK0dBQWMsRUFBZCxNQUFjO0VBQWQsNkJBQWMsRUFBZCxNQUFjO0VBQWQsK0JBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGNBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxjQUFjO0VBQWQsY0FBYztFQUFkLGtCQUFjO0VBQWQsd0JBQWM7QUFBQTs7QUFBZDtFQUFBLGVBQWM7QUFBQTs7QUFBZDtFQUFBLFdBQWM7QUFBQTs7QUFBZDs7OztDQUFjOztBQUFkO0VBQUEsY0FBYyxFQUFkLE1BQWM7RUFBZCxxQkFBYyxFQUFkLE1BQWM7RUFBZCx5QkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7OztDQUFjOztBQUFkOzs7OztFQUFBLG9CQUFjLEVBQWQsTUFBYztFQUFkLDhCQUFjLEVBQWQsTUFBYztFQUFkLGdDQUFjLEVBQWQsTUFBYztFQUFkLGVBQWMsRUFBZCxNQUFjO0VBQWQsb0JBQWMsRUFBZCxNQUFjO0VBQWQsb0JBQWMsRUFBZCxNQUFjO0VBQWQsdUJBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7RUFBZCxTQUFjLEVBQWQsTUFBYztFQUFkLFVBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsb0JBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7Ozs7RUFBQSwwQkFBYyxFQUFkLE1BQWM7RUFBZCw2QkFBYyxFQUFkLE1BQWM7RUFBZCxzQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGFBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGdCQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSx3QkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLFlBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSw2QkFBYyxFQUFkLE1BQWM7RUFBZCxvQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLHdCQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkO0VBQUEsMEJBQWMsRUFBZCxNQUFjO0VBQWQsYUFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGtCQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7Ozs7Ozs7Ozs7Ozs7RUFBQSxTQUFjO0FBQUE7O0FBQWQ7RUFBQSxTQUFjO0VBQWQsVUFBYztBQUFBOztBQUFkO0VBQUEsVUFBYztBQUFBOztBQUFkOzs7RUFBQSxnQkFBYztFQUFkLFNBQWM7RUFBZCxVQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxVQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxnQkFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDtFQUFBLFVBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7RUFBQSxVQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsZUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsZUFBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7Ozs7Ozs7O0VBQUEsY0FB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QUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSx1QkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLHNCQUFtQjtFQUFuQiw4S0FBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxzQkFBbUI7RUFBbkIsOEtBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEscUJBQW1CO0VBQW5CLDZLQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG1CQUFtQjtFQUFuQixxTEFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkIsb0xBQW1CO0VBQW5CO0FBQW1CO0FBQW5COztFQUFBO0lBQUE7RUFBbUI7O0VBQW5CO0lBQUE7RUFBbUI7QUFBQTtBQUFuQjtFQUFBO0FBQW1CO0FBQW5COztFQUFBO0lBQUE7RUFBbUI7O0VBQW5CO0lBQUE7RUFBbUI7QUFBQTtBQUFuQjtFQUFBO0FBQW1CO0FBQW5COztFQUFBO0lBQUEsdURBQW1CO0lBQW5CO0VBQW1COztFQUFuQjtJQUFBLHlEQUFtQjtJQUFuQjtFQUFtQjtBQUFBO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7O0VBQUE7SUFBQSwyREFBbUI7SUFBbkI7RUFBbUI7O0VBQW5CO0lBQUEsd0RBQW1CO0lBQW5CO0VBQW1CO0FBQUE7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjs7RUFBQTtJQUFBO0VBQW1COztFQUFuQjtJQUFBO0VBQW1CO0FBQUE7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjs7RUFBQTtJQUFBLHdEQUFtQjtJQUFuQjtFQUFtQjs7RUFBbkI7SUFBQSwwREFBbUI7SUFBbkI7RUFBbUI7QUFBQTtBQUFuQjtFQUFBO0FBQW1CO0FBQW5COztFQUFBO0lBQUE7RUFBbUI7O0VBQW5CO0lBQUE7RUFBbUI7QUFBQTtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEscUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsc0JBQW1CO0VBQW5CLG1DQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQixxQ0FBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkIsd0NBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CLHdDQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQix1Q0FBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLGlCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLHFCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG1CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxpQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxtQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxtQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkIsNkJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CLDZCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQiw0QkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkIsNEJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBd1RqQjtJQUNFOzhDQUVvQjtFQUN0QjtBQUVBOzs7OztJQUtFLGdDQUFnQztFQUNsQztBQUdFO0VBQUEsc0JBQXlCO0VBQXpCLDhLQUF5QjtFQUF6QjtBQUF5QjtBQUl6QjtFQUFBLHFCQUFvQjtFQUFwQiw2S0FBb0I7RUFBcEI7QUFBb0I7QUFJcEI7RUFBQSx1QkFBMEI7RUFBMUIsK0tBQTBCO0VBQTFCO0FBQTBCO0FBSTFCO0VBQUEsdUJBQXdCO0VBQXhCLCtLQUF3QjtFQUF4QjtBQUF3QjtBQUl4QjtFQUFBLHVCQUEwQjtFQUExQiwrS0FBMEI7RUFBMUI7QUFBMEI7QUFJMUI7RUFBQSx1QkFBMEI7RUFBMUIsK0tBQTBCO0VBQTFCO0FBQTBCO0FBSTFCO0VBQUEsbUJBQWlCO0VBQWpCLHFMQUFpQjtFQUFqQjtBQUFpQjtBQUduQjtJQUNFLDhCQUE4QjtFQUNoQztBQUVBO0lBQ0UsNkJBQTZCO0VBQy9CO0FBR0U7RUFBQSxvQ0FBZ0U7RUFBaEUsNExBQWdFO0VBQWhFO0FBQWdFO0FBQWhFOztFQUFBO0lBQUEsdUJBQWdFO0lBQWhFLCtLQUFnRTtJQUFoRTtFQUFnRTtBQUFBO0FBR2xFLGFBQWE7QUFFWDtFQUFBO0FBQWtCO0FBeFh0Qjs7RUFpRkk7SUFBQSxrQkFBd0Q7SUFBeEQsbUJBQXdEO0lBQXhELGdCQUF3RDtJQUF4RDtFQUF3RDs7RUFBeEQ7O0lBQUE7TUFBQSxlQUF3RDtNQUF4RDtJQUF3RDtFQUFBO0FBMFM1RDtBQTNYQTtFQUFBLDBCQTJYQTtFQTNYQSxrQkEyWEE7RUEzWEEsd0NBMlhBO0VBM1hBO0FBMlhBO0FBM1hBO0VBQUEsMEJBMlhBO0VBM1hBLGtCQTJYQTtFQTNYQSx1Q0EyWEE7RUEzWEE7QUEyWEE7QUEzWEE7RUFBQSwwQkEyWEE7RUEzWEEsa0JBMlhBO0VBM1hBLHVDQTJYQTtFQTNYQTtBQTJYQTtBQTNYQTtFQUFBLG1CQTJYQTtFQTNYQSxxTEEyWEE7RUEzWEE7QUEyWEE7QUEzWEE7RUFBQSxpQkEyWEE7RUEzWEEsaUJBMlhBO0VBM1hBLG1LQTJYQTtFQTNYQTtBQTJYQTtBQTNYQTs7RUFBQTtJQUFBO0VBMlhBOztFQTNYQTtJQUFBO0VBMlhBOztFQTNYQTtJQUFBO0VBMlhBOztFQTNYQTtJQUFBLG9CQTJYQTtJQTNYQTtFQTJYQTs7RUEzWEE7SUFBQSxpQkEyWEE7SUEzWEE7RUEyWEE7O0VBM1hBO0lBQUEsa0JBMlhBO0lBM1hBO0VBMlhBOztFQTNYQTtJQUFBLGtCQTJYQTtJQTNYQTtFQTJYQTs7RUEzWEE7SUFBQSxtQkEyWEE7SUEzWEE7RUEyWEE7QUFBQTtBQTNYQTs7RUFBQTtJQUFBO0VBMlhBOztFQTNYQTtJQUFBO0VBMlhBOztFQTNYQTtJQUFBO0VBMlhBOztFQTNYQTtJQUFBO0VBMlhBOztFQTNYQTtJQUFBO0VBMlhBOztFQTNYQTtJQUFBO0VBMlhBOztFQTNYQTtJQUFBO0VBMlhBOztFQTNYQTtJQUFBO0VBMlhBOztFQTNYQTtJQUFBO0VBMlhBOztFQTNYQTtJQUFBLHdCQTJYQTtJQTNYQTtFQTJYQTs7RUEzWEE7SUFBQTtFQTJYQTs7RUEzWEE7SUFBQTtFQTJYQTs7RUEzWEE7SUFBQTtFQTJYQTs7RUEzWEE7SUFBQTtFQTJYQTs7RUEzWEE7O0lBQUE7TUFBQSwyREEyWEE7TUEzWEE7SUEyWEE7O0lBM1hBO01BQUEsMkRBMlhBO01BM1hBO0lBMlhBO0VBQUE7O0VBM1hBO0lBQUE7RUEyWEE7O0VBM1hBO0lBQUE7RUEyWEE7O0VBM1hBO0lBQUE7RUEyWEE7O0VBM1hBO0lBQUE7RUEyWEE7O0VBM1hBO0lBQUE7RUEyWEE7O0VBM1hBO0lBQUE7RUEyWEE7O0VBM1hBO0lBQUE7RUEyWEE7O0VBM1hBO0lBQUEsa0JBMlhBO0lBM1hBLHVDQTJYQTtJQTNYQTtFQTJYQTs7RUEzWEE7SUFBQSxrQkEyWEE7SUEzWEE7RUEyWEE7O0VBM1hBO0lBQUEscUJBMlhBO0lBM1hBO0VBMlhBOztFQTNYQTtJQUFBLG1CQTJYQTtJQTNYQTtFQTJYQTs7RUEzWEE7SUFBQSxpQkEyWEE7SUEzWEE7RUEyWEE7O0VBM1hBO0lBQUE7RUEyWEE7O0VBM1hBOztJQUFBO01BQUE7SUEyWEE7O0lBM1hBO01BQUE7SUEyWEE7O0lBM1hBO01BQUEsb0JBMlhBO01BM1hBO0lBMlhBO0VBQUE7QUFBQTtBQTNYQTs7RUFBQTtJQUFBO0VBMlhBOztFQTNYQTtJQUFBO0VBMlhBOztFQTNYQTtJQUFBLHNCQTJYQTtJQTNYQSw4S0EyWEE7SUEzWEE7RUEyWEE7O0VBM1hBO0lBQUEsdUJBMlhBO0lBM1hBLCtLQTJYQTtJQTNYQTtFQTJYQTs7RUEzWEE7SUFBQSxrQkEyWEE7SUEzWEEsdUNBMlhBO0lBM1hBO0VBMlhBOztFQTNYQTtJQUFBO0VBMlhBOztFQTNYQTtJQUFBLG9CQTJYQTtJQTNYQTtFQTJYQTtBQUFBO0FBM1hBO0VBQUEsa0JBMlhBO0VBM1hBLHFDQTJYQTtFQTNYQTtBQTJYQTtBQTNYQTtFQUFBLGtCQTJYQTtFQTNYQSx3Q0EyWEE7RUEzWEE7QUEyWEE7QUEzWEE7RUFBQSxrQkEyWEE7RUEzWEEsdUNBMlhBO0VBM1hBO0FBMlhBO0FBM1hBO0VBQUEsa0JBMlhBO0VBM1hBLHVDQTJYQTtFQTNYQTtBQTJYQTtBQTNYQTtFQUFBO0FBMlhBO0FBM1hBO0VBQUE7QUEyWEE7QUEzWEE7RUFBQSxvQkEyWEE7RUEzWEEsNEJBMlhBO0VBM1hBO0FBMlhBO0FBM1hBO0VBQUEsb0JBMlhBO0VBM1hBLDRCQTJYQTtFQTNYQTtBQTJYQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIC8qIGh0dHBzOi8vZm9udHMuZ29vZ2xlLmNvbS9zcGVjaW1lbi9Nb250c2VycmF0ICovXFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiO1xcbiAgc3JjOiB1cmwoLi9mb250L01vbnRzZXJyYXQtVmFyaWFibGVGb250X3dnaHQudHRmKSBmb3JtYXQoXFxcIlRydWVUeXBlXFxcIik7XFxufVxcblxcbkB0YWlsd2luZCBiYXNlO1xcbkB0YWlsd2luZCBjb21wb25lbnRzO1xcbkB0YWlsd2luZCB1dGlsaXRpZXM7XFxuXFxuQGxheWVyIGJhc2Uge1xcbiAgLyogSGlkZSBzY3JvbGxiYXIgZm9yIElFLCBFZGdlIGFuZCBGaXJlZm94ICovXFxuICBtYWluLFxcbiAgc2VjdGlvbixcXG4gIC5wcm9qZWN0LWNhcmQtd3JhcHBlciB7XFxuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgLyogSUUgYW5kIEVkZ2UgKi9cXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAvKiBGaXJlZm94ICovXFxuICB9XFxuXFxuICAvKiBIaWRlIHNjcm9sbGJhciBmb3IgQ2hyb21lLCBTYWZhcmkgYW5kIE9wZXJhICovXFxuICBtYWluOjotd2Via2l0LXNjcm9sbGJhcixcXG4gIHNlY3Rpb246Oi13ZWJraXQtc2Nyb2xsYmFyLFxcbiAgLnByb2plY3QtY2FyZC13cmFwcGVyOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIEBhcHBseSBoaWRkZW47XFxuICB9XFxuXFxuICBib2R5IHtcXG4gICAgQGFwcGx5IGJnLWxpZ2h0IGRhcms6YmctZGFyayB0ZXh0LWRhcmsgZGFyazp0ZXh0LWxpZ2h0O1xcbiAgfVxcblxcbiAgYm9keSAqIHtcXG4gICAgQGFwcGx5IHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTc1O1xcbiAgfVxcblxcbiAgaGVhZGVyLFxcbiAgZm9vdGVyIHtcXG4gICAgQGFwcGx5IGgtMTQgdy1mdWxsIHB4LTcgbWQ6cHgtMTQgYmctbGlnaHQgZGFyazpiZy1kYXJrIHotNTA7XFxuICB9XFxuXFxuICBhc2lkZSB7XFxuICAgIEBhcHBseSBoLVtjYWxjKDEwMHZoLTIqNTZweCldIHBvcnRyYWl0OnctWzYwdnddIG10LTE0IGxhbmRzY2FwZTpwbC1bMjAwcHhdIHBvcnRyYWl0OnByLTcgcG9ydHJhaXQ6bWQ6cHItMTQ7XFxuICB9XFxuXFxuICBtYWluIHtcXG4gICAgQGFwcGx5IGgtW2NhbGMoMTAwdmgtMio1NnB4KV0gdy1mdWxsIG10LTE0IG92ZXJmbG93LXktc2Nyb2xsIHNuYXAteSBzY3JvbGwtc21vb3RoO1xcbiAgfVxcblxcbiAgc2VjdGlvbiB7XFxuICAgIEBhcHBseSBoLVtjYWxjKDEwMHZoLTIqNTZweCldIHB4LTcgcG9ydHJhaXQ6cHgtMCBtZDpweC0xNCBsYW5kc2NhcGU6c25hcC1jZW50ZXI7XFxuICB9XFxuXFxuICBhIHtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDUwMG1zIGVhc2U7XFxuICB9XFxuXFxuICBidXR0b246ZGlzYWJsZWQge1xcbiAgICBAYXBwbHkgdGV4dC1kaXNhYmxlZDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB9XFxuXFxuICBoMSB7XFxuICAgIEBhcHBseSB0ZXh0LXhsIG1kOnRleHQtM3hsO1xcbiAgfVxcbn1cXG5cXG5AbGF5ZXIgY29tcG9uZW50cyB7XFxuICAubW9udHNlcnJhdCB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtb3B0aWNhbC1zaXppbmc6IGF1dG87XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIH1cXG5cXG4gIC50ZXh0LWhlbGxvIHtcXG4gICAgQGFwcGx5IHRleHQtWzEwdnddIHBvcnRyYWl0OnRleHQtWzE1dnddIGxlYWRpbmctWzAuOF0gZm9udC1leHRyYWJvbGQ7XFxuICB9XFxuXFxuICAudGV4dC1iaWcge1xcbiAgICBAYXBwbHkgdGV4dC02eGwgbWQ6dGV4dC03eGwgbGVhZGluZy1bMC44XSBmb250LWV4dHJhYm9sZDtcXG4gIH1cXG5cXG4gIC50ZXh0LXRpdGxlIHtcXG4gICAgQGFwcGx5IHRleHQtNHhsIG1kOnRleHQtNXhsIGxlYWRpbmctWzAuOF0gZm9udC1leHRyYWJvbGQ7XFxuICB9XFxuXFxuICAudGV4dC1kaXNhYmxlZCB7XFxuICAgIEBhcHBseSB0ZXh0LXppbmMtNDAwIGRhcms6dGV4dC16aW5jLTUwMDtcXG4gIH1cXG5cXG4gIC5idG4tZGFyay1tb2RlIHtcXG4gICAgQGFwcGx5IGgtNSBtZDpoLTYgYXNwZWN0LVsyXSByb3VuZGVkLW1kIHNoYWRvdy1pbm5lcjtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciA1MDBtcyBlYXNlO1xcbiAgfVxcblxcbiAgLmJ0bi1kYXJrLW1vZGUudGhlbWUtMTpob3ZlciB7XFxuICAgIEBhcHBseSBiZy10aGVtZS0xO1xcbiAgfVxcblxcbiAgLmJ0bi1kYXJrLW1vZGUudGhlbWUtMjpob3ZlciB7XFxuICAgIEBhcHBseSBiZy10aGVtZS0yO1xcbiAgfVxcblxcbiAgLmJ0bi1kYXJrLW1vZGUudGhlbWUtMzpob3ZlciB7XFxuICAgIEBhcHBseSBiZy10aGVtZS0zO1xcbiAgfVxcblxcbiAgLmRhcmstbW9kZS1iYWxsIHtcXG4gICAgQGFwcGx5IGgtW2NhbGMoMTAwJS00cHgpXSBhc3BlY3Qtc3F1YXJlIG14LTAuNSBiZy1saWdodCBkYXJrOmJnLWRhcmsgcm91bmRlZC1tZDtcXG4gIH1cXG5cXG4gIC5kYXJrLW1vZGUtYmFsbCB7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA3NTBtcyBlYXNlO1xcbiAgfVxcblxcbiAgLmRhcmstbW9kZS1iYWxsLmRhcmsge1xcbiAgICBAYXBwbHkgdHJhbnNsYXRlLXgtW2NhbGMoMTAwJSs0cHgpXTtcXG4gIH1cXG5cXG4gIC5pY29uLW1vZGUtZGFyayxcXG4gIC5pY29uLW1vZGUge1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDc1bXMgZWFzZTtcXG4gIH1cXG5cXG4gIC5pY29uLW1vZGUtZGFyayB7XFxuICAgIEBhcHBseSBvcGFjaXR5LTAgZGFyazpvcGFjaXR5LTEwMCBhYnNvbHV0ZTtcXG4gIH1cXG5cXG4gIC5pY29uLW1vZGUge1xcbiAgICBAYXBwbHkgb3BhY2l0eS0xMDAgZGFyazpvcGFjaXR5LTAgYWJzb2x1dGU7XFxuICB9XFxuXFxuICAuaWNvbi1hYm91dC10b29sLFxcbiAgLmljb24tY29udGFjdC1saW5rIHtcXG4gICAgQGFwcGx5IGgtWzMwcHhdIHNtOmgtWzQwcHhdIHRleHQtWzMwcHhdIHNtOnRleHQtWzQwcHhdIGFzcGVjdC1zcXVhcmU7XFxuICB9XFxuXFxuICAuaWNvbi1zaWRlLWxpbmsge1xcbiAgICBAYXBwbHkgaC1bMjBweF0gc206aC1bMzBweF0gdGV4dC1bMjBweF0gc206dGV4dC1bMzBweF0gYXNwZWN0LXNxdWFyZTtcXG4gIH1cXG5cXG4gIC5pY29uLW5leHQge1xcbiAgICBAYXBwbHkgaC1bNzBweF0gYXNwZWN0LXNxdWFyZTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDUwMG1zIGVhc2U7XFxuICB9XFxuXFxuICBidXR0b246aG92ZXIgLmljb24tbmV4dCB7XFxuICAgIEBhcHBseSBzY2FsZS0xMTA7XFxuICB9XFxuXFxuICAuYnRuLW1pbmktdGFiIHtcXG4gICAgQGFwcGx5IGgtMyBhc3BlY3QtWzRdIGJvcmRlciBib3JkZXItbGlnaHQgcG9ydHJhaXQ6Ym9yZGVyLXRoZW1lLTMgZGFyazpib3JkZXItdGhlbWUtMyBsYW5kc2NhcGU6aG92ZXI6YmctbGlnaHQgbGFuZHNjYXBlOmhvdmVyOmRhcms6YmctdGhlbWUtMyBob3ZlcjpiZy1vcGFjaXR5LTUwIGhvdmVyOmRhcms6Ymctb3BhY2l0eS01MCByb3VuZGVkLW1kO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDUwMG1zIGVhc2U7XFxuICB9XFxuXFxuICAuYnRuLW1pbmktdGFiLmFjdGl2ZSB7XFxuICAgIEBhcHBseSBiZy1saWdodCBwb3J0cmFpdDpiZy10aGVtZS0zIGRhcms6YmctdGhlbWUtMztcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LWNhcmQtb3V0ZXItd3JhcHBlciB7XFxuICAgIEBhcHBseSB3LVs2MCVdIHAtNCBib3JkZXItMiBib3JkZXItbGlnaHQgcG9ydHJhaXQ6Ym9yZGVyLXRoZW1lLTMgZGFyazpib3JkZXItdGhlbWUtMyByb3VuZGVkLW1kIHJlbGF0aXZlIG92ZXJmbG93LXktaGlkZGVuO1xcbiAgfVxcblxcbiAgLnByb2plY3QtY2FyZC13cmFwcGVyIHtcXG4gICAgQGFwcGx5IGZsZXggZ2FwLTQgb3ZlcmZsb3cteC1zY3JvbGwgc25hcC14IHNjcm9sbC1zbW9vdGggcmVsYXRpdmU7XFxuICB9XFxuXFxuICAucHJvamVjdC1jYXJkIHtcXG4gICAgQGFwcGx5IG1pbi13LWZ1bGwgYmctbGlnaHQgZGFyazpiZy1kYXJrIHJvdW5kZWQtbWQgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgc25hcC1jZW50ZXIgcmVsYXRpdmU7XFxuICB9XFxuXFxuICAucHJvamVjdC1jYXJkLWluZm8ge1xcbiAgICBAYXBwbHkgaC1mdWxsIGZsZXggaXRlbXMtY2VudGVyO1xcbiAgfVxcblxcbiAgLnByb2plY3QtY2FyZC1pbWFnZSB7XFxuICAgIEBhcHBseSB3LWZ1bGwgcm91bmRlZC1tZCBvcGFjaXR5LTUwO1xcbiAgfVxcblxcbiAgLnByb2plY3QtY2FyZC1pbmRleCB7XFxuICAgIEBhcHBseSB0ZXh0LTZ4bCBtZDp0ZXh0LTh4bCBsZWFkaW5nLVswLjhdIGZvbnQtZXh0cmFib2xkIGFic29sdXRlIHRvcC0wIGxlZnQtMDtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LWNhcmQtbmFtZSB7XFxuICAgIEBhcHBseSB3LWZ1bGwgdGV4dC0yeGwgbWQ6dGV4dC00eGwgZm9udC1ib2xkIHRleHQtY2VudGVyIGFic29sdXRlIHRvcC0xLzIgLXRyYW5zbGF0ZS15LTEvMjtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LWNhcmQtdHlwZSB7XFxuICAgIEBhcHBseSB3LWZ1bGwgZm9udC1ib2xkIHRleHQtY2VudGVyIGFic29sdXRlIHRvcC0yLzMgLXRyYW5zbGF0ZS15LTEvMjtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LWNhcmQtZXhwYW5kIHtcXG4gICAgQGFwcGx5IHctZnVsbCBweS0yIHB4LTQgZm9udC1zZW1pYm9sZCByb3VuZGVkLWItbWQgZmxleCBqdXN0aWZ5LWNlbnRlciBhYnNvbHV0ZSBib3R0b20tMCBvcGFjaXR5LTUwO1xcbiAgICB0cmFuc2l0aW9uOlxcbiAgICAgIGJhY2tncm91bmQtY29sb3IgNTAwbXMgZWFzZSxcXG4gICAgICBvcGFjaXR5IDUwMG1zIGVhc2U7XFxuICB9XFxuXFxuICAucHJvamVjdC1jYXJkLWV4cGFuZDpob3ZlciB7XFxuICAgIEBhcHBseSBiZy1kYXJrIGJnLW9wYWNpdHktMjUgZGFyazpiZy1vcGFjaXR5LTUwIG9wYWNpdHktMTAwO1xcbiAgfVxcblxcbiAgLmltZy1hcnJvdy1kb3duLXdyYXBwZXIsXFxuICAuaW1nLW9wZW4td3JhcHBlciB7XFxuICAgIEBhcHBseSBoLVsyMHB4XSBhc3BlY3Qtc3F1YXJlIHJlbGF0aXZlO1xcbiAgfVxcblxcbiAgLnByb2plY3QtZGV0YWlsLXRvb2wtd3JhcHBlciB7XFxuICAgIEBhcHBseSBmbGV4IGdhcC0yO1xcbiAgfVxcblxcbiAgLnByb2plY3QtZGV0YWlsLWxpbmstd3JhcHBlciB7XFxuICAgIEBhcHBseSBmb250LXNlbWlib2xkIGZsZXgganVzdGlmeS1lbmQgZ2FwLTU7XFxuICB9XFxuXFxuICAucHJvamVjdC1kZXRhaWwtbGluay13cmFwcGVyID4gYTpub3QoW2Rpc2FibGVkXSkge1xcbiAgICBAYXBwbHkgaG92ZXI6c2NhbGUtMTEwO1xcbiAgfVxcblxcbiAgLmJ0bi1wcm9qZWN0LWNhcmQtbmV4dCB7XFxuICAgIEBhcHBseSBoLTE0IGFzcGVjdC1zcXVhcmUgYmctZGFyayBkYXJrOmJnLWxpZ2h0IGJnLW9wYWNpdHktNTAgLXJvdGF0ZS05MCBvcGFjaXR5LTUwIGFic29sdXRlIHRvcC1bY2FsYyg1MCUtMjhweCldIHJpZ2h0LTQ7XFxuICB9XFxuXFxuICAuYnRuLXByb2plY3QtY2FyZC1wcmV2IHtcXG4gICAgQGFwcGx5IGgtMTQgYXNwZWN0LXNxdWFyZSBiZy1kYXJrIGRhcms6YmctbGlnaHQgYmctb3BhY2l0eS01MCByb3RhdGUtOTAgb3BhY2l0eS01MCBhYnNvbHV0ZSB0b3AtW2NhbGMoNTAlLTI4cHgpXSBsZWZ0LTQ7XFxuICB9XFxuXFxuICAucHJvamVjdC1jYXJkLWltYWdlLFxcbiAgLnByb2plY3QtY2FyZC1pbmRleCxcXG4gIC5wcm9qZWN0LWNhcmQtbmFtZSxcXG4gIC5wcm9qZWN0LWNhcmQtdHlwZSxcXG4gIC5idG4tcHJvamVjdC1jYXJkLW5leHQsXFxuICAuYnRuLXByb2plY3QtY2FyZC1wcmV2IHtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSA1MDBtcyBlYXNlO1xcbiAgfVxcblxcbiAgLnByb2plY3QtY2FyZC1pbmZvOmhvdmVyIC5wcm9qZWN0LWNhcmQtaW1hZ2UsXFxuICAuYnRuLXByb2plY3QtY2FyZC1uZXh0OmhvdmVyLFxcbiAgLmJ0bi1wcm9qZWN0LWNhcmQtcHJldjpob3ZlciB7XFxuICAgIEBhcHBseSBvcGFjaXR5LTEwMDtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LWNhcmQtaW5mbzpob3ZlciAucHJvamVjdC1jYXJkLWluZGV4IHtcXG4gICAgQGFwcGx5IG9wYWNpdHktNTA7XFxuICB9XFxuXFxuICAucHJvamVjdC1jYXJkLWluZm86aG92ZXIgLnByb2plY3QtY2FyZC1uYW1lLFxcbiAgLnByb2plY3QtY2FyZC1pbmZvOmhvdmVyIC5wcm9qZWN0LWNhcmQtdHlwZSB7XFxuICAgIEBhcHBseSBvcGFjaXR5LTA7XFxuICB9XFxuXFxuICAucHJvamVjdC1kZXRhaWwge1xcbiAgICBAYXBwbHkgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBnYXAtMTAgcG9ydHJhaXQ6Z2FwLTUgb3BhY2l0eS0wO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIDFzIGVhc2U7XFxuICB9XFxuXFxuICAucHJvamVjdC1kZXRhaWwuYWN0aXZlIHtcXG4gICAgQGFwcGx5IG9wYWNpdHktMTAwO1xcbiAgfVxcblxcbiAgLnNjcm9sbC13cmFwcGVyIHtcXG4gICAgQGFwcGx5IGZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGFic29sdXRlIGJvdHRvbS00IHJpZ2h0LTMgLXRyYW5zbGF0ZS15LWZ1bGwgdHJhbnNsYXRlLXgtMS8zIC1yb3RhdGUtOTA7XFxuICB9XFxuXFxuICAudG9wLXdyYXBwZXIge1xcbiAgICBAYXBwbHkgYWJzb2x1dGUgYm90dG9tLTMgbGVmdC00IC10cmFuc2xhdGUteS1mdWxsIC10cmFuc2xhdGUteC0xLzMgcm90YXRlLTkwO1xcbiAgfVxcblxcbiAgLnRvcC13cmFwcGVyLXAge1xcbiAgICBAYXBwbHkgYWJzb2x1dGUgYm90dG9tLTQgcmlnaHQtMyAtdHJhbnNsYXRlLXktZnVsbCByb3RhdGUtOTA7XFxuICB9XFxuXFxuICAudG9wLXdyYXBwZXIgPiBkaXYsXFxuICAudG9wLXdyYXBwZXItcCA+IGRpdiB7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA1MDBtcyBlYXNlO1xcbiAgfVxcblxcbiAgLnRvcC13cmFwcGVyOmhvdmVyID4gZGl2LFxcbiAgLnRvcC13cmFwcGVyLXA6aG92ZXIgPiBkaXYge1xcbiAgICBAYXBwbHkgLXRyYW5zbGF0ZS14LTM7XFxuICB9XFxuXFxuICAudW5kZXJsaW5lLWgsXFxuICAuaGlnaGxpZ2h0LWgge1xcbiAgICBAYXBwbHkgcmVsYXRpdmU7XFxuICB9XFxuXFxuICAudW5kZXJsaW5lLWg6YWZ0ZXIge1xcbiAgICBAYXBwbHkgaC0wLjUgdy0wIGJnLWRhcmsgZGFyazpiZy1saWdodCByb3VuZGVkLWZ1bGwgYWJzb2x1dGUgbGVmdC0wIGJvdHRvbS0wLjU7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCA1MDBtcyBlYXNlO1xcbiAgfVxcblxcbiAgYnV0dG9uOmhvdmVyIC51bmRlcmxpbmUtaDphZnRlciB7XFxuICAgIEBhcHBseSB3LWZ1bGw7XFxuICB9XFxuXFxuICAuaGlnaGxpZ2h0LWg6YWZ0ZXIge1xcbiAgICBAYXBwbHkgaC1bNTAlXSB3LTAgb3BhY2l0eS04MCBhYnNvbHV0ZSB0b3AtWzI1JV0gbGVmdC1bLTE1cHhdIHBvcnRyYWl0OmxlZnQtWy0xMHB4XSAtei0xMDtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHRyYW5zaXRpb246IHdpZHRoIDUwMG1zIGVhc2U7XFxuICB9XFxuXFxuICBidXR0b246aG92ZXIgLmhpZ2hsaWdodC1oOmFmdGVyIHtcXG4gICAgQGFwcGx5IHctW2NhbGMoMTAwJSszMHB4KV0gcG9ydHJhaXQ6dy1bY2FsYygxMDAlKzEwcHgpXTtcXG4gIH1cXG5cXG4gIC5hYm91dC1zcGFuIHtcXG4gICAgQGFwcGx5IHRleHQtbGlnaHQgcG9ydHJhaXQ6dGV4dC10aGVtZS0yIGRhcms6dGV4dC10aGVtZS0yO1xcbiAgfVxcblxcbiAgLnRvb2w6aG92ZXIgLmljb24tYWJvdXQtdG9vbCB7XFxuICAgIEBhcHBseSBibG9jaztcXG4gIH1cXG5cXG4gIC8qIEFuaW1hdGlvbiAqL1xcbiAgW2NsYXNzXj1cXFwiYW5pbWF0ZS1cXFwiXSB7XFxuICAgIHdpbGwtY2hhbmdlOiBhbmltYXRpb247XFxuICB9XFxufVxcblxcbkBsYXllciB1dGlsaXRpZXMge1xcbiAgbWFpbiB7XFxuICAgIHRyYW5zaXRpb246XFxuICAgICAgdHJhbnNmb3JtIDUwMG1zIGVhc2UsXFxuICAgICAgb3BhY2l0eSA1MDBtcyBlYXNlO1xcbiAgfVxcblxcbiAgYXNpZGUsXFxuICAjYnRuLW1lbnUtbCxcXG4gICNidG4tbWVudS1sLWNsb3NlLFxcbiAgI2J0bi1tZW51LWwtY2xvc2UgPiBkaXYsXFxuICAjYnRuLXByb2plY3QtZGV0YWlsLWNsb3NlIHtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDUwMG1zIGVhc2U7XFxuICB9XFxuXFxuICBtYWluLm1vdmUge1xcbiAgICBAYXBwbHkgdHJhbnNsYXRlLXgtWzQwdnddO1xcbiAgfVxcblxcbiAgYXNpZGUubW92ZSB7XFxuICAgIEBhcHBseSB0cmFuc2xhdGUteC0wO1xcbiAgfVxcblxcbiAgbWFpbi5tb3ZlLXAge1xcbiAgICBAYXBwbHkgdHJhbnNsYXRlLXgtWy02MHZ3XTtcXG4gIH1cXG5cXG4gIGFzaWRlLm1vdmUtcCB7XFxuICAgIEBhcHBseSAtdHJhbnNsYXRlLXgtZnVsbDtcXG4gIH1cXG5cXG4gICNidG4tbWVudS1sLnNob3cge1xcbiAgICBAYXBwbHkgdHJhbnNsYXRlLXktWzIwMHB4XTtcXG4gIH1cXG5cXG4gICNidG4tbWVudS1sLWNsb3NlLnNob3cge1xcbiAgICBAYXBwbHkgdHJhbnNsYXRlLXgtWzIwMHB4XTtcXG4gIH1cXG5cXG4gICNidG4tbWVudS1sLWNsb3NlOmhvdmVyID4gZGl2IHtcXG4gICAgQGFwcGx5IHJvdGF0ZS0xODA7XFxuICB9XFxuXFxuICAjYXJ0aWNsZS1hYm91dCB7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgNTAwbXMgZWFzZTtcXG4gIH1cXG5cXG4gICNwcm9qZWN0LWNhcmQtZGV0YWlsLXdyYXBwZXIge1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcXG4gIH1cXG5cXG4gICNwcm9qZWN0LWNhcmQtZGV0YWlsLXdyYXBwZXIuYWN0aXZlIHtcXG4gICAgQGFwcGx5IHRyYW5zbGF0ZS15LVtjYWxjKC0xMDAlLTE1cHgpXSBwb3J0cmFpdDotdHJhbnNsYXRlLXktZnVsbDtcXG4gIH1cXG5cXG4gIC8qIE1lbnUgZG90ICovXFxuICBidXR0b246ZGlzYWJsZWQgPiBkaXYgPiBzcGFuIHtcXG4gICAgQGFwcGx5IG9wYWNpdHktMTAwO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGNhcm91c2VsID0gKCgpID0+IHtcbiAgY29uc3QgYnRuUHJvamVjdE5leHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1wcm9qZWN0LWNhcmQtbmV4dFwiKTtcbiAgY29uc3QgYnRuUHJvamVjdFByZXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1wcm9qZWN0LWNhcmQtcHJldlwiKTtcblxuICBjb25zdCBwcm9qZWN0Q2FyZFdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY2FyZC13cmFwcGVyXCIpO1xuICBjb25zdCBidG5NaW5pVGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnRuLW1pbmktdGFiXCIpO1xuXG4gIGNvbnN0IHByb2plY3RDYXJkMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1jYXJkLTFcIik7XG4gIGNvbnN0IHByb2plY3RDYXJkMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1jYXJkLTJcIik7XG4gIGNvbnN0IHByb2plY3RDYXJkMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1jYXJkLTNcIik7XG5cbiAgY29uc3QgZ2FwID0gMTY7XG4gIGxldCBzY3JvbGxXaWR0aFByb2plY3RDYXJkMSA9IDA7XG4gIGxldCBzY3JvbGxXaWR0aFByb2plY3RDYXJkMiA9IDA7XG4gIGxldCBzY3JvbGxXaWR0aFByb2plY3RDYXJkMyA9IDA7XG4gIGxldCBzY3JvbGxXaWR0aFByb2plY3RDYXJkcyA9IFtdO1xuXG4gIGxldCBpID0gMTtcbiAgbGV0IGlQcmV2ID0gMDtcblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIGdldFNjcm9sbFdpZHRoUHJvamVjdENhcmQoKTtcblxuICAgIGJ0blByb2plY3ROZXh0Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBpUHJldiA9IGk7XG4gICAgICBpZiAoaSA9PT0gNCkge1xuICAgICAgICBwcm9qZWN0Q2FyZFdyYXBwZXIuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgIGkgPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvamVjdENhcmRXcmFwcGVyLnNjcm9sbFRvKHNjcm9sbFdpZHRoUHJvamVjdENhcmRzW2ldLCAwKTtcbiAgICAgICAgaSArPSAxO1xuICAgICAgfVxuICAgICAgZG9jdW1lbnRcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYCNidG4tbWluaS10YWItJHtpUHJldn1gKVxuICAgICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNidG4tbWluaS10YWItJHtpfWApLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgfTtcblxuICAgIGJ0blByb2plY3RQcmV2Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBpUHJldiA9IGk7XG4gICAgICBpZiAoaSA9PT0gMSkge1xuICAgICAgICBwcm9qZWN0Q2FyZFdyYXBwZXIuc2Nyb2xsVG8oc2Nyb2xsV2lkdGhQcm9qZWN0Q2FyZDMsIDApO1xuICAgICAgICBpID0gNDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2plY3RDYXJkV3JhcHBlci5zY3JvbGxUbyhzY3JvbGxXaWR0aFByb2plY3RDYXJkc1tpIC0gMl0sIDApO1xuICAgICAgICBpIC09IDE7XG4gICAgICB9XG4gICAgICBkb2N1bWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvcihgI2J0bi1taW5pLXRhYi0ke2lQcmV2fWApXG4gICAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2J0bi1taW5pLXRhYi0ke2l9YCkuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICB9O1xuXG4gICAgcHJvamVjdENhcmRXcmFwcGVyLm9uc2Nyb2xsZW5kID0gKCkgPT4ge1xuICAgICAgaVByZXYgPSBpO1xuICAgICAgY29uc3Qgc2Nyb2xsID0gcHJvamVjdENhcmRXcmFwcGVyLnNjcm9sbExlZnQ7XG4gICAgICBpZiAoc2Nyb2xsID49IDAgJiYgc2Nyb2xsIDwgc2Nyb2xsV2lkdGhQcm9qZWN0Q2FyZDEpIGkgPSAxO1xuICAgICAgZWxzZSBpZiAoXG4gICAgICAgIHNjcm9sbCA+PSBzY3JvbGxXaWR0aFByb2plY3RDYXJkMSAmJlxuICAgICAgICBzY3JvbGwgPCBzY3JvbGxXaWR0aFByb2plY3RDYXJkMlxuICAgICAgKVxuICAgICAgICBpID0gMjtcbiAgICAgIGVsc2UgaWYgKFxuICAgICAgICBzY3JvbGwgPj0gc2Nyb2xsV2lkdGhQcm9qZWN0Q2FyZDIgJiZcbiAgICAgICAgc2Nyb2xsIDwgc2Nyb2xsV2lkdGhQcm9qZWN0Q2FyZDNcbiAgICAgIClcbiAgICAgICAgaSA9IDM7XG4gICAgICBlbHNlIGkgPSA0O1xuICAgICAgZG9jdW1lbnRcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYCNidG4tbWluaS10YWItJHtpUHJldn1gKVxuICAgICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNidG4tbWluaS10YWItJHtpfWApLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgfTtcblxuICAgIGJ0bk1pbmlUYWJzLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgYnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGlQcmV2ID0gaTtcbiAgICAgICAgaSA9ICtidG4uaWQuc2xpY2UoLTEpO1xuICAgICAgICBwcm9qZWN0Q2FyZFdyYXBwZXIuc2Nyb2xsVG8oc2Nyb2xsV2lkdGhQcm9qZWN0Q2FyZHNbaSAtIDFdLCAwKTtcbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAucXVlcnlTZWxlY3RvcihgI2J0bi1taW5pLXRhYi0ke2lQcmV2fWApXG4gICAgICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNidG4tbWluaS10YWItJHtpfWApLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgYnRuUHJvamVjdE5leHQuY2xpY2soKTtcbiAgICB9LCAxMDAwMCk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTY3JvbGxXaWR0aFByb2plY3RDYXJkKCkge1xuICAgIHNjcm9sbFdpZHRoUHJvamVjdENhcmQxID0gcHJvamVjdENhcmQxLmNsaWVudFdpZHRoICsgZ2FwO1xuICAgIHNjcm9sbFdpZHRoUHJvamVjdENhcmQyID1cbiAgICAgIHByb2plY3RDYXJkMi5jbGllbnRXaWR0aCArIGdhcCArIHNjcm9sbFdpZHRoUHJvamVjdENhcmQxO1xuICAgIHNjcm9sbFdpZHRoUHJvamVjdENhcmQzID1cbiAgICAgIHByb2plY3RDYXJkMy5jbGllbnRXaWR0aCArIGdhcCArIHNjcm9sbFdpZHRoUHJvamVjdENhcmQyO1xuICAgIHNjcm9sbFdpZHRoUHJvamVjdENhcmRzID0gW1xuICAgICAgMCxcbiAgICAgIHNjcm9sbFdpZHRoUHJvamVjdENhcmQxLFxuICAgICAgc2Nyb2xsV2lkdGhQcm9qZWN0Q2FyZDIsXG4gICAgICBzY3JvbGxXaWR0aFByb2plY3RDYXJkMyxcbiAgICBdO1xuICB9XG5cbiAgcmV0dXJuIHsgaW5pdCwgZ2V0U2Nyb2xsV2lkdGhQcm9qZWN0Q2FyZCB9O1xufSkoKTtcblxuZXhwb3J0IHsgY2Fyb3VzZWwgfTtcbiIsImNvbnN0IGRhcmtNb2RlID0gKCgpID0+IHtcbiAgY29uc3QgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnRuLWRhcmstbW9kZVwiKTtcbiAgY29uc3QgYmFsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRhcmstbW9kZS1iYWxsXCIpO1xuICBjb25zdCBodG1sID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgX2RldGVjdERhcmtNb2RlKCk7XG4gICAgYnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgIGJ0bi5vbmNsaWNrID0gX3RvZ2dsZTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9kZXRlY3REYXJrTW9kZSgpIHtcbiAgICBpZiAoQm9vbGVhbihsb2NhbFN0b3JhZ2UudGhlbWUpKSB7XG4gICAgICBpZiAobG9jYWxTdG9yYWdlLnRoZW1lID09PSBcImRhcmtcIikge1xuICAgICAgICBfdG9nZ2xlKCk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgd2luZG93Lm1hdGNoTWVkaWEgJiZcbiAgICAgIHdpbmRvdy5tYXRjaE1lZGlhKFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiKS5tYXRjaGVzXG4gICAgKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIFwiZGFya1wiKTtcbiAgICAgIF90b2dnbGUoKTtcbiAgICB9IGVsc2UgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCBcImxpZ2h0XCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gX3RvZ2dsZSgpIHtcbiAgICBodG1sLmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrXCIpO1xuICAgIGJhbGxzLmZvckVhY2goKGJhbGwpID0+IHtcbiAgICAgIGJhbGwuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmtcIik7XG4gICAgfSk7XG5cbiAgICBpZiAoIWh0bWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGFya1wiKSlcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgXCJsaWdodFwiKTtcbiAgICBlbHNlIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgXCJkYXJrXCIpO1xuICB9XG5cbiAgcmV0dXJuIHsgaW5pdCB9O1xufSkoKTtcblxuZXhwb3J0IHsgZGFya01vZGUgfTtcbiIsImltcG9ydCBmYXZpY29uMzJ3IGZyb20gXCIuLi9pbWcvaWNvbnMvZmF2aWNvbi0zMncucG5nXCI7XG5pbXBvcnQgbWVudTUwdyBmcm9tIFwiLi4vaW1nL2ljb25zL21lbnUtNTB3LnBuZ1wiO1xuaW1wb3J0IG1lbnVXNTB3IGZyb20gXCIuLi9pbWcvaWNvbnMvbWVudS13LTUwdy5wbmdcIjtcbmltcG9ydCBjbG9zZTUwdyBmcm9tIFwiLi4vaW1nL2ljb25zL2Nsb3NlLTUwdy5wbmdcIjtcbmltcG9ydCBjbG9zZVc1MHcgZnJvbSBcIi4uL2ltZy9pY29ucy9jbG9zZS13LTUwdy5wbmdcIjtcbmltcG9ydCBjaGV2cm9uMTAwdyBmcm9tIFwiLi4vaW1nL2ljb25zL2NoZXZyb24tMTAwdy5wbmdcIjtcbmltcG9ydCBjaGV2cm9uVzEwMHcgZnJvbSBcIi4uL2ltZy9pY29ucy9jaGV2cm9uLXctMTAwdy5wbmdcIjtcbmltcG9ydCBvcGVuNTB3IGZyb20gXCIuLi9pbWcvaWNvbnMvb3Blbi01MHcucG5nXCI7XG5pbXBvcnQgb3Blblc1MHcgZnJvbSBcIi4uL2ltZy9pY29ucy9vcGVuLXctNTB3LnBuZ1wiO1xuaW1wb3J0IHByb2ZpbGUxMDAwdyBmcm9tIFwiLi4vaW1nL3Byb2ZpbGUtMTAwMHcuanBnXCI7XG5pbXBvcnQgeXBldCBmcm9tIFwiLi4vaW1nL3Byb2plY3RzL3lwZXQucG5nXCI7XG5pbXBvcnQgd2VhdGhlckFwcCBmcm9tIFwiLi4vaW1nL3Byb2plY3RzL3dlYXRoZXIucG5nXCI7XG5pbXBvcnQgcG9ydGZvbGlvIGZyb20gXCIuLi9pbWcvcHJvamVjdHMvcG9ydGZvbGlvLnBuZ1wiO1xuaW1wb3J0IHBvcnRmb2xpb0QgZnJvbSBcIi4uL2ltZy9wcm9qZWN0cy9wb3J0Zm9saW8tZC5wbmdcIjtcbmltcG9ydCBhcnJvd0Rvd241MHcgZnJvbSBcIi4uL2ltZy9pY29ucy9hcnJvdy1kb3duLTUwdy5wbmdcIjtcbmltcG9ydCBhcnJvd0Rvd25XNTB3IGZyb20gXCIuLi9pbWcvaWNvbnMvYXJyb3ctZG93bi13LTUwdy5wbmdcIjtcblxuY29uc3QgaW1nTmV4dERhcmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmltZy1uZXh0LWRhcmtcIik7XG5jb25zdCBpbWdOZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbWctbmV4dFwiKTtcbmNvbnN0IGltZ09wZW5EYXJrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbWctb3Blbi1kYXJrXCIpO1xuY29uc3QgaW1nT3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW1nLW9wZW5cIik7XG5jb25zdCBpbWdBcnJvd0Rvd25EYXJrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbWctYXJyb3ctZG93bi1kYXJrXCIpO1xuY29uc3QgaW1nQXJyb3dEb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbWctYXJyb3ctZG93blwiKTtcblxuaW1nTmV4dERhcmsuZm9yRWFjaCgoaW1nKSA9PiB7XG4gIGltZy5zcmMgPSBjaGV2cm9uVzEwMHc7XG59KTtcblxuaW1nTmV4dC5mb3JFYWNoKChpbWcpID0+IHtcbiAgaW1nLnNyYyA9IGNoZXZyb24xMDB3O1xufSk7XG5cbmltZ09wZW5EYXJrLmZvckVhY2goKGltZykgPT4ge1xuICBpbWcuc3JjID0gb3Blblc1MHc7XG59KTtcblxuaW1nT3Blbi5mb3JFYWNoKChpbWcpID0+IHtcbiAgaW1nLnNyYyA9IG9wZW41MHc7XG59KTtcblxuaW1nQXJyb3dEb3duRGFyay5mb3JFYWNoKChpbWcpID0+IHtcbiAgaW1nLnNyYyA9IGFycm93RG93blc1MHc7XG59KTtcblxuaW1nQXJyb3dEb3duLmZvckVhY2goKGltZykgPT4ge1xuICBpbWcuc3JjID0gYXJyb3dEb3duNTB3O1xufSk7XG4iLCJpbXBvcnQgeyBzY3JvbGwgfSBmcm9tIFwiLi9zY3JvbGxcIjtcblxuY29uc3QgbWVudSA9ICgoKSA9PiB7XG4gIGNvbnN0IGJ0bk1lbnVMID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tbWVudS1sXCIpO1xuICBjb25zdCBidG5NZW51TENsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tbWVudS1sLWNsb3NlXCIpO1xuXG4gIGNvbnN0IGFzaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImFzaWRlXCIpO1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG5cbiAgY29uc3QgYnRuSG9tZUwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1ob21lLWxcIik7XG4gIGNvbnN0IGJ0bkFib3V0TCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLWFib3V0LWxcIik7XG4gIGNvbnN0IGJ0blByb2plY3RzTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLXByb2plY3RzLWxcIik7XG5cbiAgY29uc3QgYnRuc1Byb2plY3RDYXJkRXhwYW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICBcIi5wcm9qZWN0LWNhcmQtZXhwYW5kXCIsXG4gICk7XG4gIGNvbnN0IGJ0blByb2plY3REZXRhaWxDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIjYnRuLXByb2plY3QtZGV0YWlsLWNsb3NlXCIsXG4gICk7XG5cbiAgY29uc3QgcHJvamVjdENhcmREZXRhaWxXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIiNwcm9qZWN0LWNhcmQtZGV0YWlsLXdyYXBwZXJcIixcbiAgKTtcblxuICBjb25zdCBidG5NZW51UCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLW1lbnUtcFwiKTtcbiAgY29uc3QgaWNvbk1lbnVPcGVuUCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaWNvbi1tZW51LW9wZW4tcFwiKTtcbiAgY29uc3QgaWNvbk1lbnVDbG9zZVAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ljb24tbWVudS1jbG9zZS1wXCIpO1xuXG4gIGxldCBpc09wZW5Qcm9qZWN0Q2FyZCA9IDA7XG4gIGxldCBhY3RpdmVQcm9qZWN0Q2FyZCA9IDA7XG4gIGxldCBpc1BvcnRyYWl0ID0gMDtcblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIGdldElzUG9ydHJhaXQoKTtcbiAgICBfaW5pdEJ0bk1lbnVMKCk7XG4gICAgX2luaXRCdG5OYXZMKCk7XG4gICAgX2luaXRCdG5Qcm9qZWN0Q2FyZEV4cGFuZHMoKTtcbiAgICBfaW5pdEJ0bk1lbnVQKCk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRJc1BvcnRyYWl0KCkge1xuICAgIGlmICh3aW5kb3cuaW5uZXJIZWlnaHQgPiB3aW5kb3cuaW5uZXJXaWR0aCkgaXNQb3J0cmFpdCA9IDE7XG4gICAgZWxzZSBpc1BvcnRyYWl0ID0gMDtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9pbml0QnRuUHJvamVjdENhcmRFeHBhbmRzKCkge1xuICAgIGJ0bnNQcm9qZWN0Q2FyZEV4cGFuZC5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgIGJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBwcm9qZWN0Q2FyZERldGFpbFdyYXBwZXIuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgICAgYWN0aXZlUHJvamVjdENhcmQgPSArYnRuLmlkLnNsaWNlKC0xKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0RGV0YWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgI3Byb2plY3QtZGV0YWlsLSR7YWN0aXZlUHJvamVjdENhcmR9YCxcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGlzT3BlblByb2plY3RDYXJkID09PSAxKVxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdERldGFpbC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgcHJvamVjdERldGFpbC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBwcm9qZWN0RGV0YWlsLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIHByb2plY3REZXRhaWwuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlzT3BlblByb2plY3RDYXJkID0gMTtcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICBidG5Qcm9qZWN0RGV0YWlsQ2xvc2Uub25jbGljayA9ICgpID0+IHtcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKGAjYnRuLXByb2plY3QtY2FyZC1leHBhbmQtJHthY3RpdmVQcm9qZWN0Q2FyZH1gKVxuICAgICAgICAuY2xpY2soKTtcbiAgICAgIGlzT3BlblByb2plY3RDYXJkID0gMDtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gX2luaXRCdG5NZW51TCgpIHtcbiAgICBidG5NZW51TC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgbWFpbi5jbGFzc0xpc3QudG9nZ2xlKFwib3BhY2l0eS01MFwiKTtcbiAgICAgIGJ0bk1lbnVMLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xuICAgICAgYnRuTWVudUxDbG9zZS5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcbiAgICAgIGFzaWRlLmNsYXNzTGlzdC50b2dnbGUoXCJtb3ZlXCIpO1xuICAgICAgbWFpbi5jbGFzc0xpc3QudG9nZ2xlKFwibW92ZVwiKTtcbiAgICB9O1xuXG4gICAgYnRuTWVudUxDbG9zZS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgYnRuTWVudUwuY2xpY2soKTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gX2luaXRCdG5NZW51UCgpIHtcbiAgICBidG5NZW51UC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgbWFpbi5jbGFzc0xpc3QudG9nZ2xlKFwib3BhY2l0eS01MFwiKTtcbiAgICAgIGljb25NZW51T3BlblAuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICAgIGljb25NZW51Q2xvc2VQLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgICBhc2lkZS5jbGFzc0xpc3QudG9nZ2xlKFwibW92ZS1wXCIpO1xuICAgICAgbWFpbi5jbGFzc0xpc3QudG9nZ2xlKFwibW92ZS1wXCIpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBfaW5pdEJ0bk5hdkwoKSB7XG4gICAgYnRuSG9tZUwub25jbGljayA9ICgpID0+IHtcbiAgICAgIGlmIChpc1BvcnRyYWl0ID09PSAwKSBidG5NZW51TENsb3NlLmNsaWNrKCk7XG4gICAgICBlbHNlIGJ0bk1lbnVQLmNsaWNrKCk7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBtYWluLnNjcm9sbFRvKDAsIDApO1xuICAgICAgfSwgNTAwKTtcbiAgICB9O1xuXG4gICAgYnRuQWJvdXRMLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBpZiAoaXNQb3J0cmFpdCA9PT0gMCkgYnRuTWVudUxDbG9zZS5jbGljaygpO1xuICAgICAgZWxzZSBidG5NZW51UC5jbGljaygpO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2Nyb2xsLnNjcm9sbFRvKDEpO1xuICAgICAgfSwgNTAwKTtcbiAgICB9O1xuXG4gICAgYnRuUHJvamVjdHNMLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBpZiAoaXNQb3J0cmFpdCA9PT0gMCkgYnRuTWVudUxDbG9zZS5jbGljaygpO1xuICAgICAgZWxzZSBidG5NZW51UC5jbGljaygpO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2Nyb2xsLnNjcm9sbFRvKDIpO1xuICAgICAgfSwgNTAwKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHsgaW5pdCwgZ2V0SXNQb3J0cmFpdCB9O1xufSkoKTtcblxuZXhwb3J0IHsgbWVudSB9O1xuIiwiY29uc3Qgc2Nyb2xsID0gKCgpID0+IHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICBjb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNob21lXCIpO1xuICBjb25zdCBhYm91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWJvdXRcIik7XG4gIGNvbnN0IGFydGljbGVBYm91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXJ0aWNsZS1hYm91dFwiKTtcbiAgY29uc3QgYXJ0aWNsZUFib3V0TW9yZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXJ0aWNsZS1hYm91dC1tb3JlXCIpO1xuXG4gIGNvbnN0IGJ0bkRhcmtNb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5idG4tZGFyay1tb2RlXCIpO1xuICBjb25zdCBzcGFuTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudS10ZXh0ID4gc3BhblwiKTtcbiAgY29uc3Qgc3BhbkNvbnRhY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3QtdGV4dCA+IHNwYW5cIik7XG5cbiAgY29uc3QgYnRuc01lbnVMID0gW1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLWhvbWUtbFwiKSxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1hYm91dC1sXCIpLFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLXByb2plY3RzLWxcIiksXG4gIF07XG5cbiAgY29uc3QgYnRuc1RvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnRuLXRvcFwiKTtcbiAgY29uc3QgYnRuQWJvdXRNb3JlTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLWFib3V0LW1vcmUtbFwiKTtcblxuICBjb25zdCBtYXJnaW5Ub3AgPSA1NjtcbiAgbGV0IHNjcm9sbEhlaWdodEhvbWUgPSAwO1xuICBsZXQgc2Nyb2xsSGVpZ2h0QWJvdXQgPSAwO1xuICBsZXQgY3VycmVudFRoZW1lID0gMTtcbiAgbGV0IGlzT3BlbkFib3V0TW9yZSA9IDA7XG4gIGxldCBzY3JvbGxXaWR0aEFydGljbGVBYm91dE1vcmUgPSAwO1xuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgZ2V0U2Nyb2xsSGVpZ2h0U2VjdGlvbigpO1xuXG4gICAgbWFpbi5vbnNjcm9sbGVuZCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHNjcm9sbCA9IG1haW4uc2Nyb2xsVG9wO1xuICAgICAgaWYgKHNjcm9sbCA+PSAwICYmIHNjcm9sbCA8IHNjcm9sbEhlaWdodEhvbWUpIHtcbiAgICAgICAgX2NoYW5nZVRoZW1lKDEpO1xuICAgICAgICBfZGlzYWJsZUJ0bigxKTtcbiAgICAgIH0gZWxzZSBpZiAoc2Nyb2xsID49IHNjcm9sbEhlaWdodEhvbWUgJiYgc2Nyb2xsIDwgc2Nyb2xsSGVpZ2h0QWJvdXQpIHtcbiAgICAgICAgX2NoYW5nZVRoZW1lKDIpO1xuICAgICAgICBfZGlzYWJsZUJ0bigyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF9jaGFuZ2VUaGVtZSgzKTtcbiAgICAgICAgX2Rpc2FibGVCdG4oMyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGJ0bkFib3V0TW9yZUwub25jbGljayA9ICgpID0+IHtcbiAgICAgIGlmIChpc09wZW5BYm91dE1vcmUgPT09IDEpIGFib3V0LnNjcm9sbFRvKDAsIDApO1xuICAgICAgZWxzZSBhYm91dC5zY3JvbGxUbyhhcnRpY2xlQWJvdXQuY2xpZW50V2lkdGgsIDApO1xuICAgIH07XG5cbiAgICBhYm91dC5vbnNjcm9sbGVuZCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHNjcm9sbCA9IGFib3V0LnNjcm9sbExlZnQ7XG4gICAgICBjb25zdCB3YXNPcGVuID0gaXNPcGVuQWJvdXRNb3JlO1xuXG4gICAgICBpZiAoc2Nyb2xsID49IDAgJiYgc2Nyb2xsIDwgc2Nyb2xsV2lkdGhBcnRpY2xlQWJvdXRNb3JlIC8gMikge1xuICAgICAgICBpZiAoaXNPcGVuQWJvdXRNb3JlID09PSAxKSB7XG4gICAgICAgICAgYnRuQWJvdXRNb3JlTC5xdWVyeVNlbGVjdG9yKFwiZGl2XCIpLnRleHRDb250ZW50ID0gXCJNT1JFXCI7XG4gICAgICAgICAgaXNPcGVuQWJvdXRNb3JlID0gMDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGlzT3BlbkFib3V0TW9yZSA9PT0gMCkge1xuICAgICAgICAgIGJ0bkFib3V0TW9yZUwucXVlcnlTZWxlY3RvcihcImRpdlwiKS50ZXh0Q29udGVudCA9IFwiQkFDS1wiO1xuICAgICAgICAgIGlzT3BlbkFib3V0TW9yZSA9IDE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGlzT3BlbkFib3V0TW9yZSAhPT0gd2FzT3Blbikge1xuICAgICAgICBhcnRpY2xlQWJvdXQuY2xhc3NMaXN0LnRvZ2dsZShcIm9wYWNpdHktNTBcIik7XG4gICAgICAgIGJ0bkFib3V0TW9yZUwuY2xhc3NMaXN0LnRvZ2dsZShcImFuaW1hdGUtY2hldnJvbi1yaWdodFwiKTtcbiAgICAgICAgYnRuQWJvdXRNb3JlTC5jbGFzc0xpc3QudG9nZ2xlKFwiYW5pbWF0ZS1jaGV2cm9uLWxlZnRcIik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGJ0bnNUb3AuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICBidG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgbWFpbi5zY3JvbGxUbygwLCAwKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTY3JvbGxIZWlnaHRTZWN0aW9uKCkge1xuICAgIHNjcm9sbEhlaWdodEhvbWUgPSBob21lLmNsaWVudEhlaWdodCArIG1hcmdpblRvcDtcbiAgICBzY3JvbGxIZWlnaHRBYm91dCA9IGFib3V0LmNsaWVudEhlaWdodCArIG1hcmdpblRvcCArIHNjcm9sbEhlaWdodEhvbWU7XG4gICAgc2Nyb2xsV2lkdGhBcnRpY2xlQWJvdXRNb3JlID0gYXJ0aWNsZUFib3V0TW9yZS5jbGllbnRXaWR0aDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNjcm9sbFRvKHNlY3Rpb24pIHtcbiAgICBpZiAoc2VjdGlvbiA9PT0gMSkgbWFpbi5zY3JvbGxUbygwLCBzY3JvbGxIZWlnaHRIb21lKTtcbiAgICBlbHNlIGlmIChzZWN0aW9uID09PSAyKSBtYWluLnNjcm9sbFRvKDAsIHNjcm9sbEhlaWdodEFib3V0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9jaGFuZ2VUaGVtZSh0aGVtZSkge1xuICAgIHNwYW5NZW51LmNsYXNzTGlzdC5yZW1vdmUoYHRleHQtdGhlbWUtJHtjdXJyZW50VGhlbWV9YCk7XG4gICAgc3BhbkNvbnRhY3QuY2xhc3NMaXN0LnJlbW92ZShgdGV4dC10aGVtZS0ke2N1cnJlbnRUaGVtZX1gKTtcblxuICAgIGJ0bkRhcmtNb2RlLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoYHRoZW1lLSR7Y3VycmVudFRoZW1lfWApO1xuICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoYHRoZW1lLSR7dGhlbWV9YCk7XG4gICAgfSk7XG5cbiAgICBzcGFuTWVudS5jbGFzc0xpc3QuYWRkKGB0ZXh0LXRoZW1lLSR7dGhlbWV9YCk7XG4gICAgc3BhbkNvbnRhY3QuY2xhc3NMaXN0LmFkZChgdGV4dC10aGVtZS0ke3RoZW1lfWApO1xuXG4gICAgY3VycmVudFRoZW1lID0gdGhlbWU7XG4gIH1cblxuICBmdW5jdGlvbiBfZGlzYWJsZUJ0bihuKSB7XG4gICAgY29uc3QgaW5kZXggPSBuIC0gMTtcbiAgICBjb25zdCBsZW5ndGggPSBidG5zTWVudUwubGVuZ3RoO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChpID09PSBpbmRleCkgYnRuc01lbnVMW2ldLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIGVsc2UgYnRuc01lbnVMW2ldLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHsgaW5pdCwgZ2V0U2Nyb2xsSGVpZ2h0U2VjdGlvbiwgc2Nyb2xsVG8gfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHNjcm9sbCB9O1xuIiwiaW1wb3J0IHsgc2Nyb2xsIH0gZnJvbSBcIi4vc2Nyb2xsXCI7XG5pbXBvcnQgeyBjYXJvdXNlbCB9IGZyb20gXCIuL2Nhcm91c2VsXCI7XG5pbXBvcnQgeyBtZW51IH0gZnJvbSBcIi4vbWVudVwiO1xuXG5jb25zdCB3aW5kb3dSZXNpemUgPSAoKCkgPT4ge1xuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIHdpbmRvdy5vbnJlc2l6ZSA9ICgpID0+IHtcbiAgICAgIHNjcm9sbC5nZXRTY3JvbGxIZWlnaHRTZWN0aW9uKCk7XG4gICAgICBjYXJvdXNlbC5nZXRTY3JvbGxXaWR0aFByb2plY3RDYXJkKCk7XG4gICAgICBtZW51LmdldElzUG9ydHJhaXQoKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHsgaW5pdCB9O1xufSkoKTtcblxuZXhwb3J0IHsgd2luZG93UmVzaXplIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBcIi4vanMvaW1hZ2VcIjtcbmltcG9ydCB7IGRhcmtNb2RlIH0gZnJvbSBcIi4vanMvZGFyay1tb2RlXCI7XG5pbXBvcnQgeyBtZW51IH0gZnJvbSBcIi4vanMvbWVudVwiO1xuaW1wb3J0IHsgc2Nyb2xsIH0gZnJvbSBcIi4vanMvc2Nyb2xsXCI7XG5pbXBvcnQgeyBjYXJvdXNlbCB9IGZyb20gXCIuL2pzL2Nhcm91c2VsXCI7XG5pbXBvcnQgeyB3aW5kb3dSZXNpemUgfSBmcm9tIFwiLi9qcy93aW5kb3ctcmVzaXplXCI7XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gIGRhcmtNb2RlLmluaXQoKTtcbiAgbWVudS5pbml0KCk7XG4gIHNjcm9sbC5pbml0KCk7XG4gIGNhcm91c2VsLmluaXQoKTtcbiAgd2luZG93UmVzaXplLmluaXQoKTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=