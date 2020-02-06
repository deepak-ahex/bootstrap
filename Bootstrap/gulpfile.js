
var gulp = require('gulp');
var sass = require('gulp-sass');


//Converting sass to css

gulp.task('sass',function(){
    return gulp.src('styles.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('css'))  
})

@charset 'UTF-8';

/*!
 [Table of contents]
 1. Reboot
 2. Core Bootstrap Modules
        2.1.  type
        2.2.  images
        2.3.  code
        2.4.  grid
        2.5.  code
        2.6.  tables
        2.7.  forms
        2.8.  button
        2.9.  transitions
        2.10. dropdown
        2.11. button Group
        2.12. custom Forms
        2.13. nav
        2.14. navbar
        2.15. card
        2.16. breadcrumb
        2.17. pagination
        2.18. badge
        2.19. jumbotron
        2.20. alert
        2.21. progress
        2.22. media
        2.23. list-group
        2.24. close
        2.25. toasts
        2.26. modal
        2.27. tooltip
        2.28. popover
        2.29. carousel
        2.30. spinners
        2.31. utilities
        2.32. print
 3. Altas Modules and overrides
        3.1   alert
        3.2   badge
        3.3   button
        3.4   border
        3.5   card
        3.6   close
        3.7   dropdown
        3.8   form
        3.9   modal
        3.10   table
        3.11   tab
        3.12   typography
          3.12.1 Forms
          3.12.2 floating
          3.12.3 imagebox
          3.12.4 minicheckbox
          3.12.5 switch
          3.12.6 optionbox
          3.12.7 optionbox-column
          3.12.8 optionbox-grid
          3.12.9 taginput
        3.13 accordion
        3.14 avatar
        3.15 loader
        3.16 timeline
        3.17 sidebar
        3.18 panel
        3.19 spacing
        3.20 sizing
        3.21 layout
        3.22 select2
        3.23 datepicker
        3.24 daterangepicker
        3.25 timepicker
        3.26 rangeslider
        3.27 dropzone
        3.28 summernote
        3.29 bootstrap-notify
        3.30 chart
        3.31 validate
        3.32 chat
        3.33 mail
        3.34 kanban
        3.35 guide
        3.36 background
        3.37 grid-xlg
        3.38 helper
        3.39 demo
 */

:root {
	--blue: #007bff;
	--indigo: #6610f2;
	--purple: #6f42c1;
	--pink: #e83e8c;
	--red: #dc3545;
	--orange: #fd7e14;
	--yellow: #ffc107;
	--green: #28a745;
	--teal: #20c997;
	--cyan: #17a2b8;
	--white: #fff;
	--gray: #95aac9;
	--gray-dark: #11243b;
	--primary: #4c66fb;
	--secondary: #95aac9;
	--success: #0c9;
	--info: #19b5fe;
	--warning: #f7bc06;
	--danger: #f2545b;
	--light: #f9fbfd;
	--dark: #12263f;
	--breakpoint-xs: 0;
	--breakpoint-sm: 576px;
	--breakpoint-md: 768px;
	--breakpoint-lg: 992px;
	--breakpoint-xl: 1200px;
	--font-family-sans-serif: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
	--font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace
}

*,
::after,
::before {
	box-sizing: border-box
}

html {
	font-family: sans-serif;
	line-height: 1.15;
	-webkit-text-size-adjust: 100%;
	-webkit-tap-highlight-color: transparent
}

article,
aside,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section {
	display: block
}

body {
	font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
	font-size: .9rem;
	font-weight: 400;
	line-height: 1.5;
	margin: 0;
	text-align: left;
	color: #2e384d;
	background-color: #edf2f9
}

[tabindex='-1']:focus {
	outline: 0!important
}

hr {
	overflow: visible;
	box-sizing: content-box;
	height: 0
}

h1,
h2,
h3,
h4,
h5,
h6 {
	margin-top: 0;
	margin-bottom: .5rem
}

p {
	margin-top: 0;
	margin-bottom: 1rem
}

abbr[data-original-title],
abbr[title] {
	cursor: help;
	text-decoration: underline;
	text-decoration: underline dotted;
	border-bottom: 0;
	-webkit-text-decoration: underline dotted;
	text-decoration-skip-ink: none
}

address {
	font-style: normal;
	line-height: inherit;
	margin-bottom: 1rem
}

dl,
ol,
ul {
	margin-top: 0;
	margin-bottom: 1rem
}

ol ol,
ol ul,
ul ol,
ul ul {
	margin-bottom: 0
}

dt {
	font-weight: 700
}

dd {
	margin-bottom: .5rem;
	margin-left: 0
}

blockquote {
	margin: 0 0 1rem
}

b,
strong {
	font-weight: bolder
}

small {
	font-size: 80%
}

sub,
sup {
	font-size: 75%;
	line-height: 0;
	position: relative;
	vertical-align: baseline
}

sub {
	bottom: -.25em
}

sup {
	top: -.5em
}

a {
	text-decoration: none;
	color: #4c66fb;
	background-color: transparent
}

a:hover {
	text-decoration: underline;
	color: #0529f5
}

a:not([href]):not([tabindex]) {
	text-decoration: none;
	color: inherit
}

a:not([href]):not([tabindex]):focus,
a:not([href]):not([tabindex]):hover {
	text-decoration: none;
	color: inherit
}

a:not([href]):not([tabindex]):focus {
	outline: 0
}

code,
kbd,
pre,
samp {
	font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
	font-size: 1em
}

pre {
	overflow: auto;
	margin-top: 0;
	margin-bottom: 1rem
}

figure {
	margin: 0 0 1rem
}

img {
	vertical-align: middle;
	border-style: none
}

svg {
	overflow: hidden;
	vertical-align: middle
}

table {
	border-collapse: collapse
}

caption {
	padding-top: .9375rem;
	padding-bottom: .9375rem;
	caption-side: bottom;
	text-align: left;
	color: #8492a6
}

th {
	text-align: inherit
}

label {
	display: inline-block;
	margin-bottom: .5rem
}

button {
	border-radius: 0
}

button:focus {
	outline: 1px dotted;
	outline: 5px auto -webkit-focus-ring-color
}

button,
input,
optgroup,
select,
textarea {
	font-family: inherit;
	font-size: inherit;
	line-height: inherit;
	margin: 0
}

button,
input {
	overflow: visible
}

button,
select {
	text-transform: none
}

[type=button],
[type=reset],
[type=submit],
button {
	-webkit-appearance: button
}

[type=button]::-moz-focus-inner,
[type=reset]::-moz-focus-inner,
[type=submit]::-moz-focus-inner,
button::-moz-focus-inner {
	padding: 0;
	border-style: none
}

input[type=checkbox],
input[type=radio] {
	box-sizing: border-box;
	padding: 0
}

input[type=date],
input[type=datetime-local],
input[type=month],
input[type=time] {
	-webkit-appearance: listbox
}

textarea {
	overflow: auto;
	resize: vertical
}

fieldset {
	min-width: 0;
	margin: 0;
	padding: 0;
	border: 0
}

legend {
	font-size: 1.5rem;
	line-height: inherit;
	display: block;
	width: 100%;
	max-width: 100%;
	margin-bottom: .5rem;
	padding: 0;
	white-space: normal;
	color: inherit
}

progress {
	vertical-align: baseline
}

[type=number]::-webkit-inner-spin-button,
[type=number]::-webkit-outer-spin-button {
	height: auto
}

[type=search] {
	outline-offset: -2px;
	-webkit-appearance: none
}

[type=search]::-webkit-search-decoration {
	-webkit-appearance: none
}

::-webkit-file-upload-button {
	font: inherit;
	-webkit-appearance: button
}

output {
	display: inline-block
}

summary {
	display: list-item;
	cursor: pointer
}

template {
	display: none
}

[hidden] {
	display: none!important
}

.h1,
.h2,
.h3,
.h4,
.h5,
.h6,
h1,
h2,
h3,
h4,
h5,
h6 {
	font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
	font-weight: 500;
	line-height: 1.2;
	margin-bottom: .5rem;
	color: inherit
}

.h1,
h1 {
	font-size: 2.25rem
}

.h2,
h2 {
	font-size: 1.8rem
}

.h3,
h3 {
	font-size: 1.575rem
}

.h4,
h4 {
	font-size: 1.35rem
}

.h5,
h5 {
	font-size: 1.125rem
}

.h6,
h6 {
	font-size: .9rem
}

.lead {
	font-size: 1.125rem;
	font-weight: 300
}

.display-1 {
	font-size: 6rem;
	font-weight: 300;
	line-height: 1.2
}

.display-2 {
	font-size: 5.5rem;
	font-weight: 300;
	line-height: 1.2
}

.display-3 {
	font-size: 4.5rem;
	font-weight: 300;
	line-height: 1.2
}

.display-4 {
	font-size: 3.5rem;
	font-weight: 300;
	line-height: 1.2
}

hr {
	margin-top: 1rem;
	margin-bottom: 1rem;
	border: 0;
	border-top: 1px solid rgba(0, 0, 0, .1)
}

.small,
small {
	font-size: 80%;
	font-weight: 400
}

.mark,
mark {
	padding: .2em;
	background-color: #fcf8e3
}

.list-unstyled {
	padding-left: 0;
	list-style: none
}

.list-inline {
	padding-left: 0;
	list-style: none
}

.list-inline-item {
	display: inline-block
}

.list-inline-item:not(:last-child) {
	margin-right: .5rem
}

.initialism {
	font-size: 90%;
	text-transform: uppercase
}

.blockquote {
	font-size: 1.125rem;
	margin-bottom: 1rem
}

.blockquote-footer {
	font-size: 80%;
	display: block;
	color: #95aac9
}

.blockquote-footer::before {
	content: '\2014\00A0'
}

.img-fluid {
	max-width: 100%;
	height: auto
}

.img-thumbnail {
	max-width: 100%;
	height: auto;
	padding: .25rem;
	border: 1px solid #e3ebf6;
	border-radius: .25rem;
	background-color: #edf2f9
}

.figure {
	display: inline-block
}

.figure-img {
	line-height: 1;
	margin-bottom: .5rem
}

.figure-caption {
	font-size: 90%;
	color: #95aac9
}

code {
	font-size: 87.5%;
	word-break: break-word;
	color: #e83e8c
}

a>code {
	color: inherit
}

kbd {
	font-size: 87.5%;
	padding: .2rem .4rem;
	color: #fff;
	border-radius: .2rem;
	background-color: #0d1c2f
}

kbd kbd {
	font-size: 100%;
	font-weight: 700;
	padding: 0
}

pre {
	font-size: 87.5%;
	display: block;
	color: #0d1c2f
}

pre code {
	font-size: inherit;
	word-break: normal;
	color: inherit
}

.pre-scrollable {
	overflow-y: scroll;
	max-height: 340px
}

.container {
	width: 100%;
	margin-right: auto;
	margin-left: auto;
	padding-right: 15px;
	padding-left: 15px
}

@media (min-width:576px) {
	.container {
		max-width: 540px
	}
}

@media (min-width:768px) {
	.container {
		max-width: 720px
	}
}

@media (min-width:992px) {
	.container {
		max-width: 960px
	}
}

@media (min-width:1200px) {
	.container {
		max-width: 1140px
	}
}

.container-fluid {
	width: 100%;
	margin-right: auto;
	margin-left: auto;
	padding-right: 15px;
	padding-left: 15px
}

.row {
	display: flex;
	margin-right: -15px;
	margin-left: -15px;
	flex-wrap: wrap
}

.no-gutters {
	margin-right: 0;
	margin-left: 0
}

.no-gutters>.col,
.no-gutters>[class*=col-] {
	padding-right: 0;
	padding-left: 0
}

.col,
.col-1,
.col-10,
.col-11,
.col-12,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-auto,
.col-lg,
.col-lg-1,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-lg-auto,
.col-md,
.col-md-1,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-md-auto,
.col-sm,
.col-sm-1,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-sm-auto,
.col-xl,
.col-xl-1,
.col-xl-10,
.col-xl-11,
.col-xl-12,
.col-xl-2,
.col-xl-3,
.col-xl-4,
.col-xl-5,
.col-xl-6,
.col-xl-7,
.col-xl-8,
.col-xl-9,
.col-xl-auto {
	position: relative;
	width: 100%;
	padding-right: 15px;
	padding-left: 15px
}

.col {
	max-width: 100%;
	flex-basis: 0;
	flex-grow: 1
}

.col-auto {
	width: auto;
	max-width: 100%;
	flex: 0 0 auto
}

.col-1 {
	max-width: 8.33333%;
	flex: 0 0 8.33333%
}

.col-2 {
	max-width: 16.66667%;
	flex: 0 0 16.66667%
}

.col-3 {
	max-width: 25%;
	flex: 0 0 25%
}

.col-4 {
	max-width: 33.33333%;
	flex: 0 0 33.33333%
}

.col-5 {
	max-width: 41.66667%;
	flex: 0 0 41.66667%
}

.col-6 {
	max-width: 50%;
	flex: 0 0 50%
}

.col-7 {
	max-width: 58.33333%;
	flex: 0 0 58.33333%
}

.col-8 {
	max-width: 66.66667%;
	flex: 0 0 66.66667%
}

.col-9 {
	max-width: 75%;
	flex: 0 0 75%
}

.col-10 {
	max-width: 83.33333%;
	flex: 0 0 83.33333%
}

.col-11 {
	max-width: 91.66667%;
	flex: 0 0 91.66667%
}

.col-12 {
	max-width: 100%;
	flex: 0 0 100%
}

.order-first {
	order: -1
}

.order-last {
	order: 13
}

.order-0 {
	order: 0
}

.order-1 {
	order: 1
}

.order-2 {
	order: 2
}

.order-3 {
	order: 3
}

.order-4 {
	order: 4
}

.order-5 {
	order: 5
}

.order-6 {
	order: 6
}

.order-7 {
	order: 7
}

.order-8 {
	order: 8
}

.order-9 {
	order: 9
}

.order-10 {
	order: 10
}

.order-11 {
	order: 11
}

.order-12 {
	order: 12
}

.offset-1 {
	margin-left: 8.33333%
}

.offset-2 {
	margin-left: 16.66667%
}

.offset-3 {
	margin-left: 25%
}

.offset-4 {
	margin-left: 33.33333%
}

.offset-5 {
	margin-left: 41.66667%
}

.offset-6 {
	margin-left: 50%
}

.offset-7 {
	margin-left: 58.33333%
}

.offset-8 {
	margin-left: 66.66667%
}

.offset-9 {
	margin-left: 75%
}

.offset-10 {
	margin-left: 83.33333%
}

.offset-11 {
	margin-left: 91.66667%
}

@media (min-width:576px) {
	.col-sm {
		max-width: 100%;
		flex-basis: 0;
		flex-grow: 1
	}
	.col-sm-auto {
		width: auto;
		max-width: 100%;
		flex: 0 0 auto
	}
	.col-sm-1 {
		max-width: 8.33333%;
		flex: 0 0 8.33333%
	}
	.col-sm-2 {
		max-width: 16.66667%;
		flex: 0 0 16.66667%
	}
	.col-sm-3 {
		max-width: 25%;
		flex: 0 0 25%
	}
	.col-sm-4 {
		max-width: 33.33333%;
		flex: 0 0 33.33333%
	}
	.col-sm-5 {
		max-width: 41.66667%;
		flex: 0 0 41.66667%
	}
	.col-sm-6 {
		max-width: 50%;
		flex: 0 0 50%
	}
	.col-sm-7 {
		max-width: 58.33333%;
		flex: 0 0 58.33333%
	}
	.col-sm-8 {
		max-width: 66.66667%;
		flex: 0 0 66.66667%
	}
	.col-sm-9 {
		max-width: 75%;
		flex: 0 0 75%
	}
	.col-sm-10 {
		max-width: 83.33333%;
		flex: 0 0 83.33333%
	}
	.col-sm-11 {
		max-width: 91.66667%;
		flex: 0 0 91.66667%
	}
	.col-sm-12 {
		max-width: 100%;
		flex: 0 0 100%
	}
	.order-sm-first {
		order: -1
	}
	.order-sm-last {
		order: 13
	}
	.order-sm-0 {
		order: 0
	}
	.order-sm-1 {
		order: 1
	}
	.order-sm-2 {
		order: 2
	}
	.order-sm-3 {
		order: 3
	}
	.order-sm-4 {
		order: 4
	}
	.order-sm-5 {
		order: 5
	}
	.order-sm-6 {
		order: 6
	}
	.order-sm-7 {
		order: 7
	}
	.order-sm-8 {
		order: 8
	}
	.order-sm-9 {
		order: 9
	}
	.order-sm-10 {
		order: 10
	}
	.order-sm-11 {
		order: 11
	}
	.order-sm-12 {
		order: 12
	}
	.offset-sm-0 {
		margin-left: 0
	}
	.offset-sm-1 {
		margin-left: 8.33333%
	}
	.offset-sm-2 {
		margin-left: 16.66667%
	}
	.offset-sm-3 {
		margin-left: 25%
	}
	.offset-sm-4 {
		margin-left: 33.33333%
	}
	.offset-sm-5 {
		margin-left: 41.66667%
	}
	.offset-sm-6 {
		margin-left: 50%
	}
	.offset-sm-7 {
		margin-left: 58.33333%
	}
	.offset-sm-8 {
		margin-left: 66.66667%
	}
	.offset-sm-9 {
		margin-left: 75%
	}
	.offset-sm-10 {
		margin-left: 83.33333%
	}
	.offset-sm-11 {
		margin-left: 91.66667%
	}
}

@media (min-width:768px) {
	.col-md {
		max-width: 100%;
		flex-basis: 0;
		flex-grow: 1
	}
	.col-md-auto {
		width: auto;
		max-width: 100%;
		flex: 0 0 auto
	}
	.col-md-1 {
		max-width: 8.33333%;
		flex: 0 0 8.33333%
	}
	.col-md-2 {
		max-width: 16.66667%;
		flex: 0 0 16.66667%
	}
	.col-md-3 {
		max-width: 25%;
		flex: 0 0 25%
	}
	.col-md-4 {
		max-width: 33.33333%;
		flex: 0 0 33.33333%
	}
	.col-md-5 {
		max-width: 41.66667%;
		flex: 0 0 41.66667%
	}
	.col-md-6 {
		max-width: 50%;
		flex: 0 0 50%
	}
	.col-md-7 {
		max-width: 58.33333%;
		flex: 0 0 58.33333%
	}
	.col-md-8 {
		max-width: 66.66667%;
		flex: 0 0 66.66667%
	}
	.col-md-9 {
		max-width: 75%;
		flex: 0 0 75%
	}
	.col-md-10 {
		max-width: 83.33333%;
		flex: 0 0 83.33333%
	}
	.col-md-11 {
		max-width: 91.66667%;
		flex: 0 0 91.66667%
	}
	.col-md-12 {
		max-width: 100%;
		flex: 0 0 100%
	}
	.order-md-first {
		order: -1
	}
	.order-md-last {
		order: 13
	}
	.order-md-0 {
		order: 0
	}
	.order-md-1 {
		order: 1
	}
	.order-md-2 {
		order: 2
	}
	.order-md-3 {
		order: 3
	}
	.order-md-4 {
		order: 4
	}
	.order-md-5 {
		order: 5
	}
	.order-md-6 {
		order: 6
	}
	.order-md-7 {
		order: 7
	}
	.order-md-8 {
		order: 8
	}
	.order-md-9 {
		order: 9
	}
	.order-md-10 {
		order: 10
	}
	.order-md-11 {
		order: 11
	}
	.order-md-12 {
		order: 12
	}
	.offset-md-0 {
		margin-left: 0
	}
	.offset-md-1 {
		margin-left: 8.33333%
	}
	.offset-md-2 {
		margin-left: 16.66667%
	}
	.offset-md-3 {
		margin-left: 25%
	}
	.offset-md-4 {
		margin-left: 33.33333%
	}
	.offset-md-5 {
		margin-left: 41.66667%
	}
	.offset-md-6 {
		margin-left: 50%
	}
	.offset-md-7 {
		margin-left: 58.33333%
	}
	.offset-md-8 {
		margin-left: 66.66667%
	}
	.offset-md-9 {
		margin-left: 75%
	}
	.offset-md-10 {
		margin-left: 83.33333%
	}
	.offset-md-11 {
		margin-left: 91.66667%
	}
}

@media (min-width:992px) {
	.col-lg {
		max-width: 100%;
		flex-basis: 0;
		flex-grow: 1
	}
	.col-lg-auto {
		width: auto;
		max-width: 100%;
		flex: 0 0 auto
	}
	.col-lg-1 {
		max-width: 8.33333%;
		flex: 0 0 8.33333%
	}
	.col-lg-2 {
		max-width: 16.66667%;
		flex: 0 0 16.66667%
	}
	.col-lg-3 {
		max-width: 25%;
		flex: 0 0 25%
	}
	.col-lg-4 {
		max-width: 33.33333%;
		flex: 0 0 33.33333%
	}
	.col-lg-5 {
		max-width: 41.66667%;
		flex: 0 0 41.66667%
	}
	.col-lg-6 {
		max-width: 50%;
		flex: 0 0 50%
	}
	.col-lg-7 {
		max-width: 58.33333%;
		flex: 0 0 58.33333%
	}
	.col-lg-8 {
		max-width: 66.66667%;
		flex: 0 0 66.66667%
	}
	.col-lg-9 {
		max-width: 75%;
		flex: 0 0 75%
	}
	.col-lg-10 {
		max-width: 83.33333%;
		flex: 0 0 83.33333%
	}
	.col-lg-11 {
		max-width: 91.66667%;
		flex: 0 0 91.66667%
	}
	.col-lg-12 {
		max-width: 100%;
		flex: 0 0 100%
	}
	.order-lg-first {
		order: -1
	}
	.order-lg-last {
		order: 13
	}
	.order-lg-0 {
		order: 0
	}
	.order-lg-1 {
		order: 1
	}
	.order-lg-2 {
		order: 2
	}
	.order-lg-3 {
		order: 3
	}
	.order-lg-4 {
		order: 4
	}
	.order-lg-5 {
		order: 5
	}
	.order-lg-6 {
		order: 6
	}
	.order-lg-7 {
		order: 7
	}
	.order-lg-8 {
		order: 8
	}
	.order-lg-9 {
		order: 9
	}
	.order-lg-10 {
		order: 10
	}
	.order-lg-11 {
		order: 11
	}
	.order-lg-12 {
		order: 12
	}
	.offset-lg-0 {
		margin-left: 0
	}
	.offset-lg-1 {
		margin-left: 8.33333%
	}
	.offset-lg-2 {
		margin-left: 16.66667%
	}
	.offset-lg-3 {
		margin-left: 25%
	}
	.offset-lg-4 {
		margin-left: 33.33333%
	}
	.offset-lg-5 {
		margin-left: 41.66667%
	}
	.offset-lg-6 {
		margin-left: 50%
	}
	.offset-lg-7 {
		margin-left: 58.33333%
	}
	.offset-lg-8 {
		margin-left: 66.66667%
	}
	.offset-lg-9 {
		margin-left: 75%
	}
	.offset-lg-10 {
		margin-left: 83.33333%
	}
	.offset-lg-11 {
		margin-left: 91.66667%
	}
}

@media (min-width:1200px) {
	.col-xl {
		max-width: 100%;
		flex-basis: 0;
		flex-grow: 1
	}
	.col-xl-auto {
		width: auto;
		max-width: 100%;
		flex: 0 0 auto
	}
	.col-xl-1 {
		max-width: 8.33333%;
		flex: 0 0 8.33333%
	}
	.col-xl-2 {
		max-width: 16.66667%;
		flex: 0 0 16.66667%
	}
	.col-xl-3 {
		max-width: 25%;
		flex: 0 0 25%
	}
	.col-xl-4 {
		max-width: 33.33333%;
		flex: 0 0 33.33333%
	}
	.col-xl-5 {
		max-width: 41.66667%;
		flex: 0 0 41.66667%
	}
	.col-xl-6 {
		max-width: 50%;
		flex: 0 0 50%
	}
	.col-xl-7 {
		max-width: 58.33333%;
		flex: 0 0 58.33333%
	}
	.col-xl-8 {
		max-width: 66.66667%;
		flex: 0 0 66.66667%
	}
	.col-xl-9 {
		max-width: 75%;
		flex: 0 0 75%
	}
	.col-xl-10 {
		max-width: 83.33333%;
		flex: 0 0 83.33333%
	}
	.col-xl-11 {
		max-width: 91.66667%;
		flex: 0 0 91.66667%
	}
	.col-xl-12 {
		max-width: 100%;
		flex: 0 0 100%
	}
	.order-xl-first {
		order: -1
	}
	.order-xl-last {
		order: 13
	}
	.order-xl-0 {
		order: 0
	}
	.order-xl-1 {
		order: 1
	}
	.order-xl-2 {
		order: 2
	}
	.order-xl-3 {
		order: 3
	}
	.order-xl-4 {
		order: 4
	}
	.order-xl-5 {
		order: 5
	}
	.order-xl-6 {
		order: 6
	}
	.order-xl-7 {
		order: 7
	}
	.order-xl-8 {
		order: 8
	}
	.order-xl-9 {
		order: 9
	}
	.order-xl-10 {
		order: 10
	}
	.order-xl-11 {
		order: 11
	}
	.order-xl-12 {
		order: 12
	}
	.offset-xl-0 {
		margin-left: 0
	}
	.offset-xl-1 {
		margin-left: 8.33333%
	}
	.offset-xl-2 {
		margin-left: 16.66667%
	}
	.offset-xl-3 {
		margin-left: 25%
	}
	.offset-xl-4 {
		margin-left: 33.33333%
	}
	.offset-xl-5 {
		margin-left: 41.66667%
	}
	.offset-xl-6 {
		margin-left: 50%
	}
	.offset-xl-7 {
		margin-left: 58.33333%
	}
	.offset-xl-8 {
		margin-left: 66.66667%
	}
	.offset-xl-9 {
		margin-left: 75%
	}
	.offset-xl-10 {
		margin-left: 83.33333%
	}
	.offset-xl-11 {
		margin-left: 91.66667%
	}
}

.table {
	width: 100%;
	margin-bottom: 1rem;
	background-color: transparent
}

.table td,
.table th {
	padding: .9375rem;
	vertical-align: top;
	border-top: 1px solid #edf2f9
}

.table thead th {
	vertical-align: bottom;
	border-bottom: 2px solid #edf2f9
}

.table tbody+tbody {
	border-top: 2px solid #edf2f9
}

.table .table {
	background-color: #edf2f9
}

.table-sm td,
.table-sm th {
	padding: .5rem
}

.table-bordered {
	border: 1px solid #edf2f9
}

.table-bordered td,
.table-bordered th {
	border: 1px solid #edf2f9
}

.table-bordered thead td,
.table-bordered thead th {
	border-bottom-width: 2px
}

.table-borderless tbody+tbody,
.table-borderless td,
.table-borderless th,
.table-borderless thead th {
	border: 0
}

.table-striped tbody tr:nth-of-type(odd) {
	background-color: #f9fbfd
}

.table-hover tbody tr:hover {
	background-color: #f9fbfd
}

.table-primary,
.table-primary>td,
.table-primary>th {
	background-color: #cdd4fe
}

.table-primary tbody+tbody,
.table-primary td,
.table-primary th,
.table-primary thead th {
	border-color: #a2affd
}

.table-hover .table-primary:hover {
	background-color: #b4bffe
}

.table-hover .table-primary:hover>td,
.table-hover .table-primary:hover>th {
	background-color: #b4bffe
}

.table-secondary,
.table-secondary>td,
.table-secondary>th {
	background-color: #e1e7f0
}

.table-secondary tbody+tbody,
.table-secondary td,
.table-secondary th,
.table-secondary thead th {
	border-color: #c8d3e3
}

.table-hover .table-secondary:hover {
	background-color: #d0d9e8
}

.table-hover .table-secondary:hover>td,
.table-hover .table-secondary:hover>th {
	background-color: #d0d9e8
}

.table-success,
.table-success>td,
.table-success>th {
	background-color: #b8f1e2
}

.table-success tbody+tbody,
.table-success td,
.table-success th,
.table-success thead th {
	border-color: #7ae4ca
}

.table-hover .table-success:hover {
	background-color: #a3edd9
}

.table-hover .table-success:hover>td,
.table-hover .table-success:hover>th {
	background-color: #a3edd9
}

.table-info,
.table-info>td,
.table-info>th {
	background-color: #bfeaff
}

.table-info tbody+tbody,
.table-info td,
.table-info th,
.table-info thead th {
	border-color: #87d9fe
}

.table-hover .table-info:hover {
	background-color: #a6e2ff
}

.table-hover .table-info:hover>td,
.table-hover .table-info:hover>th {
	background-color: #a6e2ff
}

.table-warning,
.table-warning>td,
.table-warning>th {
	background-color: #fdecb9
}

.table-warning tbody+tbody,
.table-warning td,
.table-warning th,
.table-warning thead th {
	border-color: #fbdc7e
}

.table-hover .table-warning:hover {
	background-color: #fce5a0
}

.table-hover .table-warning:hover>td,
.table-hover .table-warning:hover>th {
	background-color: #fce5a0
}

.table-danger,
.table-danger>td,
.table-danger>th {
	background-color: #fbcfd1
}

.table-danger tbody+tbody,
.table-danger td,
.table-danger th,
.table-danger thead th {
	border-color: #f8a6aa
}

.table-hover .table-danger:hover {
	background-color: #f9b7ba
}

.table-hover .table-danger:hover>td,
.table-hover .table-danger:hover>th {
	background-color: #f9b7ba
}

.table-light,
.table-light>td,
.table-light>th {
	background-color: #fdfefe
}

.table-light tbody+tbody,
.table-light td,
.table-light th,
.table-light thead th {
	border-color: #fcfdfe
}

.table-hover .table-light:hover {
	background-color: #ecf6f6
}

.table-hover .table-light:hover>td,
.table-hover .table-light:hover>th {
	background-color: #ecf6f6
}

.table-dark,
.table-dark>td,
.table-dark>th {
	background-color: #bdc2c9
}

.table-dark tbody+tbody,
.table-dark td,
.table-dark th,
.table-dark thead th {
	border-color: #848e9b
}

.table-hover .table-dark:hover {
	background-color: #afb5be
}

.table-hover .table-dark:hover>td,
.table-hover .table-dark:hover>th {
	background-color: #afb5be
}

.table-active,
.table-active>td,
.table-active>th {
	background-color: #f9fbfd
}

.table-hover .table-active:hover {
	background-color: #e6eef7
}

.table-hover .table-active:hover>td,
.table-hover .table-active:hover>th {
	background-color: #e6eef7
}

.table .thead-dark th {
	color: #fff;
	border-color: #162e4d;
	background-color: #0d1c2f
}

.table .thead-light th {
	color: #95aac9;
	border-color: #edf2f9;
	background-color: #f9fbfd
}

.table-dark {
	color: #fff;
	background-color: #0d1c2f
}

.table-dark td,
.table-dark th,
.table-dark thead th {
	border-color: #162e4d
}

.table-dark.table-bordered {
	border: 0
}

.table-dark.table-striped tbody tr:nth-of-type(odd) {
	background-color: rgba(255, 255, 255, .05)
}

.table-dark.table-hover tbody tr:hover {
	background-color: rgba(255, 255, 255, .075)
}

@media (max-width:575.98px) {
	.table-responsive-sm {
		display: block;
		overflow-x: auto;
		width: 100%;
		-webkit-overflow-scrolling: touch;
		-ms-overflow-style: -ms-autohiding-scrollbar
	}
	.table-responsive-sm>.table-bordered {
		border: 0
	}
}

@media (max-width:767.98px) {
	.table-responsive-md {
		display: block;
		overflow-x: auto;
		width: 100%;
		-webkit-overflow-scrolling: touch;
		-ms-overflow-style: -ms-autohiding-scrollbar
	}
	.table-responsive-md>.table-bordered {
		border: 0
	}
}

@media (max-width:991.98px) {
	.table-responsive-lg {
		display: block;
		overflow-x: auto;
		width: 100%;
		-webkit-overflow-scrolling: touch;
		-ms-overflow-style: -ms-autohiding-scrollbar
	}
	.table-responsive-lg>.table-bordered {
		border: 0
	}
}

@media (max-width:1199.98px) {
	.table-responsive-xl {
		display: block;
		overflow-x: auto;
		width: 100%;
		-webkit-overflow-scrolling: touch;
		-ms-overflow-style: -ms-autohiding-scrollbar
	}
	.table-responsive-xl>.table-bordered {
		border: 0
	}
}

.table-responsive {
	display: block;
	overflow-x: auto;
	width: 100%;
	-webkit-overflow-scrolling: touch;
	-ms-overflow-style: -ms-autohiding-scrollbar
}

.table-responsive>.table-bordered {
	border: 0
}

.form-control {
	font-size: .9rem;
	font-weight: 400;
	line-height: 1.5;
	display: block;
	width: 100%;
	height: calc(2.1rem + 2px);
	padding: .375rem .75rem;
	transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
	color: #2e384d;
	border: 1px solid #dce4ec;
	border-radius: .25rem;
	background-color: #fff;
	background-clip: padding-box
}

@media screen and (prefers-reduced-motion:reduce) {
	.form-control {
		transition: none
	}
}

.form-control::-ms-expand {
	border: 0;
	background-color: transparent
}

.form-control:focus {
	color: #2e384d;
	border-color: #95aac9;
	outline: 0;
	background-color: #fff;
	box-shadow: 0 0 0 .2rem rgba(76, 102, 251, .25)
}

.form-control::-ms-input-placeholder {
	opacity: 1;
	color: #95aac9
}

.form-control::placeholder {
	opacity: 1;
	color: #95aac9
}

.form-control:disabled,
.form-control[readonly] {
	opacity: 1;
	background-color: #edf2f9
}

select.form-control:focus::-ms-value {
	color: #2e384d;
	background-color: #fff
}

.form-control-file,
.form-control-range {
	display: block;
	width: 100%
}

.col-form-label {
	font-size: inherit;
	line-height: 1.5;
	margin-bottom: 0;
	padding-top: calc(.375rem + 1px);
	padding-bottom: calc(.375rem + 1px)
}

.col-form-label-lg {
	font-size: 1.125rem;
	line-height: 1.5;
	padding-top: calc(.5rem + 1px);
	padding-bottom: calc(.5rem + 1px)
}

.col-form-label-sm {
	font-size: .7875rem;
	line-height: 1.5;
	padding-top: calc(.25rem + 1px);
	padding-bottom: calc(.25rem + 1px)
}

.form-control-plaintext {
	line-height: 1.5;
	display: block;
	width: 100%;
	margin-bottom: 0;
	padding-top: .375rem;
	padding-bottom: .375rem;
	color: #2e384d;
	border: solid transparent;
	border-width: 1px 0;
	background-color: transparent
}

.form-control-plaintext.form-control-lg,
.form-control-plaintext.form-control-sm {
	padding-right: 0;
	padding-left: 0
}

.form-control-sm {
	font-size: .7875rem;
	line-height: 1.5;
	height: calc(1.68125rem + 2px);
	padding: .25rem .5rem;
	border-radius: .2rem
}

.form-control-lg {
	font-size: 1.125rem;
	line-height: 1.5;
	height: calc(2.6875rem + 2px);
	padding: .5rem 1rem;
	border-radius: .3rem
}

select.form-control[multiple],
select.form-control[size] {
	height: auto
}

textarea.form-control {
	height: auto
}

.form-group {
	margin-bottom: 1rem
}

.form-text {
	display: block;
	margin-top: .25rem
}

.form-row {
	display: flex;
	margin-right: -5px;
	margin-left: -5px;
	flex-wrap: wrap
}

.form-row>.col,
.form-row>[class*=col-] {
	padding-right: 5px;
	padding-left: 5px
}

.form-check {
	position: relative;
	display: block;
	padding-left: 1.25rem
}

.form-check-input {
	position: absolute;
	margin-top: .3rem;
	margin-left: -1.25rem
}

.form-check-input:disabled~.form-check-label {
	color: #8492a6
}

.form-check-label {
	margin-bottom: 0
}

.form-check-inline {
	display: inline-flex;
	margin-right: .75rem;
	padding-left: 0;
	align-items: center
}

.form-check-inline .form-check-input {
	position: static;
	margin-top: 0;
	margin-right: .3125rem;
	margin-left: 0
}

.valid-feedback {
	font-size: 80%;
	display: none;
	width: 100%;
	margin-top: .25rem;
	color: #0c9
}

.valid-tooltip {
	font-size: .7875rem;
	line-height: 1.5;
	position: absolute;
	z-index: 5;
	top: 100%;
	display: none;
	max-width: 100%;
	margin-top: .1rem;
	padding: .25rem .5rem;
	color: #fff;
	border-radius: .25rem;
	background-color: rgba(0, 204, 153, .9)
}

.form-control.is-valid,
.was-validated .form-control:valid {
	padding-right: 2.1rem;
	border-color: #0c9;
	background-image: url('data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2300CC99\' d=\'M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z\'/%3e%3c/svg%3e');
	background-repeat: no-repeat;
	background-position: center right calc(2.1rem / 4);
	background-size: calc(2.1rem / 2) calc(2.1rem / 2)
}

.form-control.is-valid:focus,
.was-validated .form-control:valid:focus {
	border-color: #0c9;
	box-shadow: 0 0 0 .2rem rgba(0, 204, 153, .25)
}

.form-control.is-valid~.valid-feedback,
.form-control.is-valid~.valid-tooltip,
.was-validated .form-control:valid~.valid-feedback,
.was-validated .form-control:valid~.valid-tooltip {
	display: block
}

.was-validated textarea.form-control:valid,
textarea.form-control.is-valid {
	padding-right: 2.1rem;
	background-position: top calc(2.1rem / 4) right calc(2.1rem / 4)
}

.custom-select.is-valid,
.was-validated .custom-select:valid {
	padding-right: 3.325rem;
	border-color: #0c9;
	background: url('data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 5\'%3e%3cpath fill=\'%2311243b\' d=\'M2 0L0 2h4zm0 5L0 3h4z\'/%3e%3c/svg%3e') no-repeat right .75rem center/8px 10px, url('data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2300CC99\' d=\'M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z\'/%3e%3c/svg%3e') no-repeat center right 1.75rem/1.05rem 1.05rem
}

.custom-select.is-valid:focus,
.was-validated .custom-select:valid:focus {
	border-color: #0c9;
	box-shadow: 0 0 0 .2rem rgba(0, 204, 153, .25)
}

.custom-select.is-valid~.valid-feedback,
.custom-select.is-valid~.valid-tooltip,
.was-validated .custom-select:valid~.valid-feedback,
.was-validated .custom-select:valid~.valid-tooltip {
	display: block
}

.form-control-file.is-valid~.valid-feedback,
.form-control-file.is-valid~.valid-tooltip,
.was-validated .form-control-file:valid~.valid-feedback,
.was-validated .form-control-file:valid~.valid-tooltip {
	display: block
}

.form-check-input.is-valid~.form-check-label,
.was-validated .form-check-input:valid~.form-check-label {
	color: #0c9
}

.form-check-input.is-valid~.valid-feedback,
.form-check-input.is-valid~.valid-tooltip,
.was-validated .form-check-input:valid~.valid-feedback,
.was-validated .form-check-input:valid~.valid-tooltip {
	display: block
}

.custom-control-input.is-valid~.custom-control-label,
.was-validated .custom-control-input:valid~.custom-control-label {
	color: #0c9
}

.custom-control-input.is-valid~.custom-control-label::before,
.was-validated .custom-control-input:valid~.custom-control-label::before {
	border-color: #0c9
}

.custom-control-input.is-valid~.valid-feedback,
.custom-control-input.is-valid~.valid-tooltip,
.was-validated .custom-control-input:valid~.valid-feedback,
.was-validated .custom-control-input:valid~.valid-tooltip {
	display: block
}

.custom-control-input.is-valid:checked~.custom-control-label::before,
.was-validated .custom-control-input:valid:checked~.custom-control-label::before {
	border-color: #00ffbf;
	background-color: #00ffbf
}

.custom-control-input.is-valid:focus~.custom-control-label::before,
.was-validated .custom-control-input:valid:focus~.custom-control-label::before {
	box-shadow: 0 0 0 .2rem rgba(0, 204, 153, .25)
}

.custom-control-input.is-valid:focus:not(:checked)~.custom-control-label::before,
.was-validated .custom-control-input:valid:focus:not(:checked)~.custom-control-label::before {
	border-color: #0c9
}

.custom-file-input.is-valid~.custom-file-label,
.was-validated .custom-file-input:valid~.custom-file-label {
	border-color: #0c9
}

.custom-file-input.is-valid~.valid-feedback,
.custom-file-input.is-valid~.valid-tooltip,
.was-validated .custom-file-input:valid~.valid-feedback,
.was-validated .custom-file-input:valid~.valid-tooltip {
	display: block
}

.custom-file-input.is-valid:focus~.custom-file-label,
.was-validated .custom-file-input:valid:focus~.custom-file-label {
	border-color: #0c9;
	box-shadow: 0 0 0 .2rem rgba(0, 204, 153, .25)
}

.invalid-feedback {
	font-size: 80%;
	display: none;
	width: 100%;
	margin-top: .25rem;
	color: #f2545b
}

.invalid-tooltip {
	font-size: .7875rem;
	line-height: 1.5;
	position: absolute;
	z-index: 5;
	top: 100%;
	display: none;
	max-width: 100%;
	margin-top: .1rem;
	padding: .25rem .5rem;
	color: #fff;
	border-radius: .25rem;
	background-color: rgba(242, 84, 91, .9)
}

.form-control.is-invalid,
.was-validated .form-control:invalid {
	padding-right: 2.1rem;
	border-color: #f2545b;
	background-image: url('data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'%23f2545b\' viewBox=\'-2 -2 7 7\'%3e%3cpath stroke=\'%23d9534f\' d=\'M0 0l3 3m0-3L0 3\'/%3e%3ccircle r=\'.5\'/%3e%3ccircle cx=\'3\' r=\'.5\'/%3e%3ccircle cy=\'3\' r=\'.5\'/%3e%3ccircle cx=\'3\' cy=\'3\' r=\'.5\'/%3e%3c/svg%3E');
	background-repeat: no-repeat;
	background-position: center right calc(2.1rem / 4);
	background-size: calc(2.1rem / 2) calc(2.1rem / 2)
}

.form-control.is-invalid:focus,
.was-validated .form-control:invalid:focus {
	border-color: #f2545b;
	box-shadow: 0 0 0 .2rem rgba(242, 84, 91, .25)
}

.form-control.is-invalid~.invalid-feedback,
.form-control.is-invalid~.invalid-tooltip,
.was-validated .form-control:invalid~.invalid-feedback,
.was-validated .form-control:invalid~.invalid-tooltip {
	display: block
}

.was-validated textarea.form-control:invalid,
textarea.form-control.is-invalid {
	padding-right: 2.1rem;
	background-position: top calc(2.1rem / 4) right calc(2.1rem / 4)
}

.custom-select.is-invalid,
.was-validated .custom-select:invalid {
	padding-right: 3.325rem;
	border-color: #f2545b;
	background: url('data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 5\'%3e%3cpath fill=\'%2311243b\' d=\'M2 0L0 2h4zm0 5L0 3h4z\'/%3e%3c/svg%3e') no-repeat right .75rem center/8px 10px, url('data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'%23f2545b\' viewBox=\'-2 -2 7 7\'%3e%3cpath stroke=\'%23d9534f\' d=\'M0 0l3 3m0-3L0 3\'/%3e%3ccircle r=\'.5\'/%3e%3ccircle cx=\'3\' r=\'.5\'/%3e%3ccircle cy=\'3\' r=\'.5\'/%3e%3ccircle cx=\'3\' cy=\'3\' r=\'.5\'/%3e%3c/svg%3E') no-repeat center right 1.75rem/1.05rem 1.05rem
}

.custom-select.is-invalid:focus,
.was-validated .custom-select:invalid:focus {
	border-color: #f2545b;
	box-shadow: 0 0 0 .2rem rgba(242, 84, 91, .25)
}

.custom-select.is-invalid~.invalid-feedback,
.custom-select.is-invalid~.invalid-tooltip,
.was-validated .custom-select:invalid~.invalid-feedback,
.was-validated .custom-select:invalid~.invalid-tooltip {
	display: block
}

.form-control-file.is-invalid~.invalid-feedback,
.form-control-file.is-invalid~.invalid-tooltip,
.was-validated .form-control-file:invalid~.invalid-feedback,
.was-validated .form-control-file:invalid~.invalid-tooltip {
	display: block
}

.form-check-input.is-invalid~.form-check-label,
.was-validated .form-check-input:invalid~.form-check-label {
	color: #f2545b
}

.form-check-input.is-invalid~.invalid-feedback,
.form-check-input.is-invalid~.invalid-tooltip,
.was-validated .form-check-input:invalid~.invalid-feedback,
.was-validated .form-check-input:invalid~.invalid-tooltip {
	display: block
}

.custom-control-input.is-invalid~.custom-control-label,
.was-validated .custom-control-input:invalid~.custom-control-label {
	color: #f2545b
}

.custom-control-input.is-invalid~.custom-control-label::before,
.was-validated .custom-control-input:invalid~.custom-control-label::before {
	border-color: #f2545b
}

.custom-control-input.is-invalid~.invalid-feedback,
.custom-control-input.is-invalid~.invalid-tooltip,
.was-validated .custom-control-input:invalid~.invalid-feedback,
.was-validated .custom-control-input:invalid~.invalid-tooltip {
	display: block
}

.custom-control-input.is-invalid:checked~.custom-control-label::before,
.was-validated .custom-control-input:invalid:checked~.custom-control-label::before {
	border-color: #f68388;
	background-color: #f68388
}

.custom-control-input.is-invalid:focus~.custom-control-label::before,
.was-validated .custom-control-input:invalid:focus~.custom-control-label::before {
	box-shadow: 0 0 0 .2rem rgba(242, 84, 91, .25)
}

.custom-control-input.is-invalid:focus:not(:checked)~.custom-control-label::before,
.was-validated .custom-control-input:invalid:focus:not(:checked)~.custom-control-label::before {
	border-color: #f2545b
}

.custom-file-input.is-invalid~.custom-file-label,
.was-validated .custom-file-input:invalid~.custom-file-label {
	border-color: #f2545b
}

.custom-file-input.is-invalid~.invalid-feedback,
.custom-file-input.is-invalid~.invalid-tooltip,
.was-validated .custom-file-input:invalid~.invalid-feedback,
.was-validated .custom-file-input:invalid~.invalid-tooltip {
	display: block
}

.custom-file-input.is-invalid:focus~.custom-file-label,
.was-validated .custom-file-input:invalid:focus~.custom-file-label {
	border-color: #f2545b;
	box-shadow: 0 0 0 .2rem rgba(242, 84, 91, .25)
}

.form-inline {
	display: flex;
	flex-flow: row wrap;
	align-items: center
}

.form-inline .form-check {
	width: 100%
}

@media (min-width:576px) {
	.form-inline label {
		display: flex;
		margin-bottom: 0;
		align-items: center;
		justify-content: center
	}
	.form-inline .form-group {
		display: flex;
		margin-bottom: 0;
		flex: 0 0 auto;
		flex-flow: row wrap;
		align-items: center
	}
	.form-inline .form-control {
		display: inline-block;
		width: auto;
		vertical-align: middle
	}
	.form-inline .form-control-plaintext {
		display: inline-block
	}
	.form-inline .custom-select,
	.form-inline .input-group {
		width: auto
	}
	.form-inline .form-check {
		display: flex;
		width: auto;
		padding-left: 0;
		align-items: center;
		justify-content: center
	}
	.form-inline .form-check-input {
		position: relative;
		margin-top: 0;
		margin-right: .25rem;
		margin-left: 0
	}
	.form-inline .custom-control {
		align-items: center;
		justify-content: center
	}
	.form-inline .custom-control-label {
		margin-bottom: 0
	}
}

.btn {
	font-size: .9rem;
	font-weight: 500;
	line-height: 1.5;
	display: inline-block;
	padding: .375rem .75rem;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
	text-align: center;
	vertical-align: middle;
	color: #2e384d;
	border: 1px solid transparent;
	border-radius: .25rem;
	background-color: transparent
}

@media screen and (prefers-reduced-motion:reduce) {
	.btn {
		transition: none
	}
}

.btn:hover {
	text-decoration: none;
	color: #2e384d
}

.btn.focus,
.btn:focus {
	outline: 0;
	box-shadow: 0 0 0 .2rem rgba(76, 102, 251, .25)
}

.btn.disabled,
.btn:disabled {
	opacity: .65
}

.btn:not(:disabled):not(.disabled) {
	cursor: pointer
}

a.btn.disabled,
fieldset:disabled a.btn {
	pointer-events: none
}

.btn-primary {
	color: #fff;
	border-color: #4c66fb;
	background-color: #4c66fb
}

.btn-primary:hover {
	color: #fff;
	border-color: #1a3bfa;
	background-color: #2746fa
}

.btn-primary.focus,
.btn-primary:focus {
	box-shadow: 0 0 0 .2rem rgba(103, 125, 252, .5)
}

.btn-primary.disabled,
.btn-primary:disabled {
	color: #fff;
	border-color: #4c66fb;
	background-color: #4c66fb
}

.btn-primary:not(:disabled):not(.disabled).active,
.btn-primary:not(:disabled):not(.disabled):active,
.show>.btn-primary.dropdown-toggle {
	color: #fff;
	border-color: #0e31fa;
	background-color: #1a3bfa
}

.btn-primary:not(:disabled):not(.disabled).active:focus,
.btn-primary:not(:disabled):not(.disabled):active:focus,
.show>.btn-primary.dropdown-toggle:focus {
	box-shadow: 0 0 0 .2rem rgba(103, 125, 252, .5)
}

.btn-secondary {
	color: #fff;
	border-color: #95aac9;
	background-color: #95aac9
}

.btn-secondary:hover {
	color: #fff;
	border-color: #738fb8;
	background-color: #7c96bc
}

.btn-secondary.focus,
.btn-secondary:focus {
	box-shadow: 0 0 0 .2rem rgba(165, 183, 209, .5)
}

.btn-secondary.disabled,
.btn-secondary:disabled {
	color: #fff;
	border-color: #95aac9;
	background-color: #95aac9
}

.btn-secondary:not(:disabled):not(.disabled).active,
.btn-secondary:not(:disabled):not(.disabled):active,
.show>.btn-secondary.dropdown-toggle {
	color: #fff;
	border-color: #6b88b3;
	background-color: #738fb8
}

.btn-secondary:not(:disabled):not(.disabled).active:focus,
.btn-secondary:not(:disabled):not(.disabled):active:focus,
.show>.btn-secondary.dropdown-toggle:focus {
	box-shadow: 0 0 0 .2rem rgba(165, 183, 209, .5)
}

.btn-success {
	color: #fff;
	border-color: #0c9;
	background-color: #0c9
}

.btn-success:hover {
	color: #fff;
	border-color: #009973;
	background-color: #00a67c
}

.btn-success.focus,
.btn-success:focus {
	box-shadow: 0 0 0 .2rem rgba(38, 212, 168, .5)
}

.btn-success.disabled,
.btn-success:disabled {
	color: #fff;
	border-color: #0c9;
	background-color: #0c9
}

.btn-success:not(:disabled):not(.disabled).active,
.btn-success:not(:disabled):not(.disabled):active,
.show>.btn-success.dropdown-toggle {
	color: #fff;
	border-color: #008c69;
	background-color: #009973
}

.btn-success:not(:disabled):not(.disabled).active:focus,
.btn-success:not(:disabled):not(.disabled):active:focus,
.show>.btn-success.dropdown-toggle:focus {
	box-shadow: 0 0 0 .2rem rgba(38, 212, 168, .5)
}

.btn-info {
	color: #fff;
	border-color: #19b5fe;
	background-color: #19b5fe
}

.btn-info:hover {
	color: #fff;
	border-color: #019be3;
	background-color: #01a4f0
}

.btn-info.focus,
.btn-info:focus {
	box-shadow: 0 0 0 .2rem rgba(60, 192, 254, .5)
}

.btn-info.disabled,
.btn-info:disabled {
	color: #fff;
	border-color: #19b5fe;
	background-color: #19b5fe
}

.btn-info:not(:disabled):not(.disabled).active,
.btn-info:not(:disabled):not(.disabled):active,
.show>.btn-info.dropdown-toggle {
	color: #fff;
	border-color: #0192d6;
	background-color: #019be3
}

.btn-info:not(:disabled):not(.disabled).active:focus,
.btn-info:not(:disabled):not(.disabled):active:focus,
.show>.btn-info.dropdown-toggle:focus {
	box-shadow: 0 0 0 .2rem rgba(60, 192, 254, .5)
}

.btn-warning {
	color: #fff;
	border-color: #f7bc06;
	background-color: #f7bc06
}

.btn-warning:hover {
	color: #fff;
	border-color: #c59605;
	background-color: #d2a005
}

.btn-warning.focus,
.btn-warning:focus {
	box-shadow: 0 0 0 .2rem rgba(248, 198, 43, .5)
}

.btn-warning.disabled,
.btn-warning:disabled {
	color: #fff;
	border-color: #f7bc06;
	background-color: #f7bc06
}

.btn-warning:not(:disabled):not(.disabled).active,
.btn-warning:not(:disabled):not(.disabled):active,
.show>.btn-warning.dropdown-toggle {
	color: #fff;
	border-color: #b98d04;
	background-color: #c59605
}

.btn-warning:not(:disabled):not(.disabled).active:focus,
.btn-warning:not(:disabled):not(.disabled):active:focus,
.show>.btn-warning.dropdown-toggle:focus {
	box-shadow: 0 0 0 .2rem rgba(248, 198, 43, .5)
}

.btn-danger {
	color: #fff;
	border-color: #f2545b;
	background-color: #f2545b
}

.btn-danger:hover {
	color: #fff;
	border-color: #ee252e;
	background-color: #ef3039
}

.btn-danger.focus,
.btn-danger:focus {
	box-shadow: 0 0 0 .2rem rgba(244, 110, 116, .5)
}

.btn-danger.disabled,
.btn-danger:disabled {
	color: #fff;
	border-color: #f2545b;
	background-color: #f2545b
}

.btn-danger:not(:disabled):not(.disabled).active,
.btn-danger:not(:disabled):not(.disabled):active,
.show>.btn-danger.dropdown-toggle {
	color: #fff;
	border-color: #ed1922;
	background-color: #ee252e
}

.btn-danger:not(:disabled):not(.disabled).active:focus,
.btn-danger:not(:disabled):not(.disabled):active:focus,
.show>.btn-danger.dropdown-toggle:focus {
	box-shadow: 0 0 0 .2rem rgba(244, 110, 116, .5)
}

.btn-light {
	color: #0d1c2f;
	border-color: #f9fbfd;
	background-color: #f9fbfd
}

.btn-light:hover {
	color: #0d1c2f;
	border-color: #d3e2f0;
	background-color: #dce8f3
}

.btn-light.focus,
.btn-light:focus {
	box-shadow: 0 0 0 .2rem rgba(214, 218, 222, .5)
}

.btn-light.disabled,
.btn-light:disabled {
	color: #0d1c2f;
	border-color: #f9fbfd;
	background-color: #f9fbfd
}

.btn-light:not(:disabled):not(.disabled).active,
.btn-light:not(:disabled):not(.disabled):active,
.show>.btn-light.dropdown-toggle {
	color: #0d1c2f;
	border-color: #c9dbed;
	background-color: #d3e2f0
}

.btn-light:not(:disabled):not(.disabled).active:focus,
.btn-light:not(:disabled):not(.disabled):active:focus,
.show>.btn-light.dropdown-toggle:focus {
	box-shadow: 0 0 0 .2rem rgba(214, 218, 222, .5)
}

.btn-dark {
	color: #fff;
	border-color: #12263f;
	background-color: #12263f
}

.btn-dark:hover {
	color: #fff;
	border-color: #070e17;
	background-color: #0a1421
}

.btn-dark.focus,
.btn-dark:focus {
	box-shadow: 0 0 0 .2rem rgba(54, 71, 92, .5)
}

.btn-dark.disabled,
.btn-dark:disabled {
	color: #fff;
	border-color: #12263f;
	background-color: #12263f
}

.btn-dark:not(:disabled):not(.disabled).active,
.btn-dark:not(:disabled):not(.disabled):active,
.show>.btn-dark.dropdown-toggle {
	color: #fff;
	border-color: #04080d;
	background-color: #070e17
}

.btn-dark:not(:disabled):not(.disabled).active:focus,
.btn-dark:not(:disabled):not(.disabled):active:focus,
.show>.btn-dark.dropdown-toggle:focus {
	box-shadow: 0 0 0 .2rem rgba(54, 71, 92, .5)
}

.btn-outline-primary {
	color: #4c66fb;
	border-color: #4c66fb
}

.btn-outline-primary:hover {
	color: #fff;
	border-color: #4c66fb;
	background-color: #4c66fb
}

.btn-outline-primary.focus,
.btn-outline-primary:focus {
	box-shadow: 0 0 0 .2rem rgba(76, 102, 251, .5)
}

.btn-outline-primary.disabled,
.btn-outline-primary:disabled {
	color: #4c66fb;
	background-color: transparent
}

.btn-outline-primary:not(:disabled):not(.disabled).active,
.btn-outline-primary:not(:disabled):not(.disabled):active,
.show>.btn-outline-primary.dropdown-toggle {
	color: #fff;
	border-color: #4c66fb;
	background-color: #4c66fb
}

.btn-outline-primary:not(:disabled):not(.disabled).active:focus,
.btn-outline-primary:not(:disabled):not(.disabled):active:focus,
.show>.btn-outline-primary.dropdown-toggle:focus {
	box-shadow: 0 0 0 .2rem rgba(76, 102, 251, .5)
}

.btn-outline-secondary {
	color: #95aac9;
	border-color: #95aac9
}

.btn-outline-secondary:hover {
	color: #fff;
	border-color: #95aac9;
	background-color: #95aac9
}

.btn-outline-secondary.focus,
.btn-outline-secondary:focus {
	box-shadow: 0 0 0 .2rem rgba(149, 170, 201, .5)
}

.btn-outline-secondary.disabled,
.btn-outline-secondary:disabled {
	color: #95aac9;
	background-color: transparent
}

.btn-outline-secondary:not(:disabled):not(.disabled).active,
.btn-outline-secondary:not(:disabled):not(.disabled):active,
.show>.btn-outline-secondary.dropdown-toggle {
	color: #fff;
	border-color: #95aac9;
	background-color: #95aac9
}

.btn-outline-secondary:not(:disabled):not(.disabled).active:focus,
.btn-outline-secondary:not(:disabled):not(.disabled):active:focus,
.show>.btn-outline-secondary.dropdown-toggle:focus {
	box-shadow: 0 0 0 .2rem rgba(149, 170, 201, .5)
}

.btn-outline-success {
	color: #0c9;
	border-color: #0c9
}

.btn-outline-success:hover {
	color: #fff;
	border-color: #0c9;
	background-color: #0c9
}

.btn-outline-success.focus,
.btn-outline-success:focus {
	box-shadow: 0 0 0 .2rem rgba(0, 204, 153, .5)
}

.btn-outline-success.disabled,
.btn-outline-success:disabled {
	color: #0c9;
	background-color: transparent
}

.btn-outline-success:not(:disabled):not(.disabled).active,
.btn-outline-success:not(:disabled):not(.disabled):active,
.show>.btn-outline-success.dropdown-toggle {
	color: #fff;
	border-color: #0c9;
	background-color: #0c9
}

.btn-outline-success:not(:disabled):not(.disabled).active:focus,
.btn-outline-success:not(:disabled):not(.disabled):active:focus,
.show>.btn-outline-success.dropdown-toggle:focus {
	box-shadow: 0 0 0 .2rem rgba(0, 204, 153, .5)
}

.btn-outline-info {
	color: #19b5fe;
	border-color: #19b5fe
}

.btn-outline-info:hover {
	color: #fff;
	border-color: #19b5fe;
	background-color: #19b5fe
}

.btn-outline-info.focus,
.btn-outline-info:focus {
	box-shadow: 0 0 0 .2rem rgba(25, 181, 254, .5)
}

.btn-outline-info.disabled,
.btn-outline-info:disabled {
	color: #19b5fe;
	background-color: transparent
}

.btn-outline-info:not(:disabled):not(.disabled).active,
.btn-outline-info:not(:disabled):not(.disabled):active,
.show>.btn-outline-info.dropdown-toggle {
	color: #fff;
	border-color: #19b5fe;
	background-color: #19b5fe
}

.btn-outline-info:not(:disabled):not(.disabled).active:focus,
.btn-outline-info:not(:disabled):not(.disabled):active:focus,
.show>.btn-outline-info.dropdown-toggle:focus {
	box-shadow: 0 0 0 .2rem rgba(25, 181, 254, .5)
}

.btn-outline-warning {
	color: #f7bc06;
	border-color: #f7bc06
}

.btn-outline-warning:hover {
	color: #fff;
	border-color: #f7bc06;
	background-color: #f7bc06
}

.btn-outline-warning.focus,
.btn-outline-warning:focus {
	box-shadow: 0 0 0 .2rem rgba(247, 188, 6, .5)
}

.btn-outline-warning.disabled,
.btn-outline-warning:disabled {
	color: #f7bc06;
	background-color: transparent
}

.btn-outline-warning:not(:disabled):not(.disabled).active,
.btn-outline-warning:not(:disabled):not(.disabled):active,
.show>.btn-outline-warning.dropdown-toggle {
	color: #fff;
	border-color: #f7bc06;
	background-color: #f7bc06
}

.btn-outline-warning:not(:disabled):not(.disabled).active:focus,
.btn-outline-warning:not(:disabled):not(.disabled):active:focus,
.show>.btn-outline-warning.dropdown-toggle:focus {
	box-shadow: 0 0 0 .2rem rgba(247, 188, 6, .5)
}

.btn-outline-danger {
	color: #f2545b;
	border-color: #f2545b
}

.btn-outline-danger:hover {
	color: #fff;
	border-color: #f2545b;
	background-color: #f2545b
}

.btn-outline-danger.focus,
.btn-outline-danger:focus {
	box-shadow: 0 0 0 .2rem rgba(242, 84, 91, .5)
}

.btn-outline-danger.disabled,
.btn-outline-danger:disabled {
	color: #f2545b;
	background-color: transparent
}

.btn-outline-danger:not(:disabled):not(.disabled).active,
.btn-outline-danger:not(:disabled):not(.disabled):active,
.show>.btn-outline-danger.dropdown-toggle {
	color: #fff;
	border-color: #f2545b;
	background-color: #f2545b
}

.btn-outline-danger:not(:disabled):not(.disabled).active:focus,
.btn-outline-danger:not(:disabled):not(.disabled):active:focus,
.show>.btn-outline-danger.dropdown-toggle:focus {
	box-shadow: 0 0 0 .2rem rgba(242, 84, 91, .5)
}

.btn-outline-light {
	color: #f9fbfd;
	border-color: #f9fbfd
}

.btn-outline-light:hover {
	color: #0d1c2f;
	border-color: #f9fbfd;
	background-color: #f9fbfd
}

.btn-outline-light.focus,
.btn-outline-light:focus {
	box-shadow: 0 0 0 .2rem rgba(249, 251, 253, .5)
}

.btn-outline-light.disabled,
.btn-outline-light:disabled {
	color: #f9fbfd;
	background-color: transparent
}

.btn-outline-light:not(:disabled):not(.disabled).active,
.btn-outline-light:not(:disabled):not(.disabled):active,
.show>.btn-outline-light.dropdown-toggle {
	color: #0d1c2f;
	border-color: #f9fbfd;
	background-color: #f9fbfd
}

.btn-outline-light:not(:disabled):not(.disabled).active:focus,
.btn-outline-light:not(:disabled):not(.disabled):active:focus,
.show>.btn-outline-light.dropdown-toggle:focus {
	box-shadow: 0 0 0 .2rem rgba(249, 251, 253, .5)
}

.btn-outline-dark {
	color: #12263f;
	border-color: #12263f
}

.btn-outline-dark:hover {
	color: #fff;
	border-color: #12263f;
	background-color: #12263f
}

.btn-outline-dark.focus,
.btn-outline-dark:focus {
	box-shadow: 0 0 0 .2rem rgba(18, 38, 63, .5)
}

.btn-outline-dark.disabled,
.btn-outline-dark:disabled {
	color: #12263f;
	background-color: transparent
}

.btn-outline-dark:not(:disabled):not(.disabled).active,
.btn-outline-dark:not(:disabled):not(.disabled):active,
.show>.btn-outline-dark.dropdown-toggle {
	color: #fff;
	border-color: #12263f;
	background-color: #12263f
}

.btn-outline-dark:not(:disabled):not(.disabled).active:focus,
.btn-outline-dark:not(:disabled):not(.disabled):active:focus,
.show>.btn-outline-dark.dropdown-toggle:focus {
	box-shadow: 0 0 0 .2rem rgba(18, 38, 63, .5)
}

.btn-link {
	font-weight: 400;
	color: #4c66fb
}

.btn-link:hover {
	text-decoration: underline;
	color: #0529f5
}

.btn-link.focus,
.btn-link:focus {
	text-decoration: underline;
	box-shadow: none
}

.btn-link.disabled,
.btn-link:disabled {
	pointer-events: none;
	color: #95aac9
}

.btn-group-lg>.btn,
.btn-lg {
	font-size: 1.125rem;
	line-height: 1.5;
	padding: .5rem 1rem;
	border-radius: .3rem
}

.btn-group-sm>.btn,
.btn-sm {
	font-size: .7875rem;
	line-height: 1.5;
	padding: .25rem .5rem;
	border-radius: .2rem
}

.btn-block {
	display: block;
	width: 100%
}

.btn-block+.btn-block {
	margin-top: .5rem
}

input[type=button].btn-block,
input[type=reset].btn-block,
input[type=submit].btn-block {
	width: 100%
}

.fade {
	transition: opacity .15s linear
}

@media screen and (prefers-reduced-motion:reduce) {
	.fade {
		transition: none
	}
}

.fade:not(.show) {
	opacity: 0
}

.collapse:not(.show) {
	display: none
}

.collapsing {
	position: relative;
	overflow: hidden;
	height: 0;
	transition: height .35s ease
}

@media screen and (prefers-reduced-motion:reduce) {
	.collapsing {
		transition: none
	}
}

.dropdown,
.dropleft,
.dropright,
.dropup {
	position: relative
}

.dropdown-toggle::after {
	display: inline-block;
	margin-left: .255em;
	content: '';
	vertical-align: .255em;
	border-top: .3em solid;
	border-right: .3em solid transparent;
	border-bottom: 0;
	border-left: .3em solid transparent
}

.dropdown-toggle:empty::after {
	margin-left: 0
}

.dropdown-menu {
	font-size: .9rem;
	position: absolute;
	z-index: 1000;
	top: 100%;
	left: 0;
	display: none;
	float: left;
	min-width: 10rem;
	margin: .125rem 0 0;
	padding: .5rem 0;
	list-style: none;
	text-align: left;
	color: #2e384d;
	border: 1px solid rgba(0, 0, 0, .15);
	border-radius: .25rem;
	background-color: #fff;
	background-clip: padding-box
}

.dropdown-menu-right {
	right: 0;
	left: auto
}

@media (min-width:576px) {
	.dropdown-menu-sm-right {
		right: 0;
		left: auto
	}
}

@media (min-width:768px) {
	.dropdown-menu-md-right {
		right: 0;
		left: auto
	}
}

@media (min-width:992px) {
	.dropdown-menu-lg-right {
		right: 0;
		left: auto
	}
}

@media (min-width:1200px) {
	.dropdown-menu-xl-right {
		right: 0;
		left: auto
	}
}

.dropdown-menu-left {
	right: auto;
	left: 0
}

@media (min-width:576px) {
	.dropdown-menu-sm-left {
		right: auto;
		left: 0
	}
}

@media (min-width:768px) {
	.dropdown-menu-md-left {
		right: auto;
		left: 0
	}
}

@media (min-width:992px) {
	.dropdown-menu-lg-left {
		right: auto;
		left: 0
	}
}

@media (min-width:1200px) {
	.dropdown-menu-xl-left {
		right: auto;
		left: 0
	}
}

.dropup .dropdown-menu {
	top: auto;
	bottom: 100%;
	margin-top: 0;
	margin-bottom: .125rem
}

.dropup .dropdown-toggle::after {
	display: inline-block;
	margin-left: .255em;
	content: '';
	vertical-align: .255em;
	border-top: 0;
	border-right: .3em solid transparent;
	border-bottom: .3em solid;
	border-left: .3em solid transparent
}

.dropup .dropdown-toggle:empty::after {
	margin-left: 0
}

.dropright .dropdown-menu {
	top: 0;
	right: auto;
	left: 100%;
	margin-top: 0;
	margin-left: .125rem
}

.dropright .dropdown-toggle::after {
	display: inline-block;
	margin-left: .255em;
	content: '';
	vertical-align: .255em;
	border-top: .3em solid transparent;
	border-right: 0;
	border-bottom: .3em solid transparent;
	border-left: .3em solid
}

.dropright .dropdown-toggle:empty::after {
	margin-left: 0
}

.dropright .dropdown-toggle::after {
	vertical-align: 0
}

.dropleft .dropdown-menu {
	top: 0;
	right: 100%;
	left: auto;
	margin-top: 0;
	margin-right: .125rem
}

.dropleft .dropdown-toggle::after {
	display: inline-block;
	margin-left: .255em;
	content: '';
	vertical-align: .255em
}

.dropleft .dropdown-toggle::after {
	display: none
}

.dropleft .dropdown-toggle::before {
	display: inline-block;
	margin-right: .255em;
	content: '';
	vertical-align: .255em;
	border-top: .3em solid transparent;
	border-right: .3em solid;
	border-bottom: .3em solid transparent
}

.dropleft .dropdown-toggle:empty::after {
	margin-left: 0
}

.dropleft .dropdown-toggle::before {
	vertical-align: 0
}

.dropdown-menu[x-placement^=bottom],
.dropdown-menu[x-placement^=left],
.dropdown-menu[x-placement^=right],
.dropdown-menu[x-placement^=top] {
	right: auto;
	bottom: auto
}

.dropdown-divider {
	overflow: hidden;
	height: 0;
	margin: .5rem 0;
	border-top: 1px solid #edf2f9
}

.dropdown-item {
	font-weight: 400;
	display: block;
	clear: both;
	width: 100%;
	padding: .25rem 1.5rem;
	text-align: inherit;
	white-space: nowrap;
	color: #0d1c2f;
	border: 0;
	background-color: transparent
}

.dropdown-item:first-child {
	border-top-left-radius: calc(.25rem - 1px);
	border-top-right-radius: calc(.25rem - 1px)
}

.dropdown-item:last-child {
	border-bottom-right-radius: calc(.25rem - 1px);
	border-bottom-left-radius: calc(.25rem - 1px)
}

.dropdown-item:focus,
.dropdown-item:hover {
	text-decoration: none;
	color: #08101b;
	background-color: #f9fbfd
}

.dropdown-item.active,
.dropdown-item:active {
	text-decoration: none;
	color: #fff;
	background-color: #4c66fb
}

.dropdown-item.disabled,
.dropdown-item:disabled {
	pointer-events: none;
	color: #95aac9;
	background-color: transparent
}

.dropdown-menu.show {
	display: block
}

.dropdown-header {
	font-size: .7875rem;
	display: block;
	margin-bottom: 0;
	padding: .5rem 1.5rem;
	white-space: nowrap;
	color: #95aac9
}

.dropdown-item-text {
	display: block;
	padding: .25rem 1.5rem;
	color: #0d1c2f
}

.btn-group,
.btn-group-vertical {
	position: relative;
	display: inline-flex;
	vertical-align: middle
}

.btn-group-vertical>.btn,
.btn-group>.btn {
	position: relative;
	flex: 1 1 auto
}

.btn-group-vertical>.btn:hover,
.btn-group>.btn:hover {
	z-index: 1
}

.btn-group-vertical>.btn.active,
.btn-group-vertical>.btn:active,
.btn-group-vertical>.btn:focus,
.btn-group>.btn.active,
.btn-group>.btn:active,
.btn-group>.btn:focus {
	z-index: 1
}

.btn-toolbar {
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start
}

.btn-toolbar .input-group {
	width: auto
}

.btn-group>.btn-group:not(:first-child),
.btn-group>.btn:not(:first-child) {
	margin-left: -1px
}

.btn-group>.btn-group:not(:last-child)>.btn,
.btn-group>.btn:not(:last-child):not(.dropdown-toggle) {
	border-top-right-radius: 0;
	border-bottom-right-radius: 0
}

.btn-group>.btn-group:not(:first-child)>.btn,
.btn-group>.btn:not(:first-child) {
	border-top-left-radius: 0;
	border-bottom-left-radius: 0
}

.dropdown-toggle-split {
	padding-right: .5625rem;
	padding-left: .5625rem
}

.dropdown-toggle-split::after,
.dropright .dropdown-toggle-split::after,
.dropup .dropdown-toggle-split::after {
	margin-left: 0
}

.dropleft .dropdown-toggle-split::before {
	margin-right: 0
}

.btn-group-sm>.btn+.dropdown-toggle-split,
.btn-sm+.dropdown-toggle-split {
	padding-right: .375rem;
	padding-left: .375rem
}

.btn-group-lg>.btn+.dropdown-toggle-split,
.btn-lg+.dropdown-toggle-split {
	padding-right: .75rem;
	padding-left: .75rem
}

.btn-group-vertical {
	flex-direction: column;
	align-items: flex-start;
	justify-content: center
}

.btn-group-vertical>.btn,
.btn-group-vertical>.btn-group {
	width: 100%
}

.btn-group-vertical>.btn-group:not(:first-child),
.btn-group-vertical>.btn:not(:first-child) {
	margin-top: -1px
}

.btn-group-vertical>.btn-group:not(:last-child)>.btn,
.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle) {
	border-bottom-right-radius: 0;
	border-bottom-left-radius: 0
}

.btn-group-vertical>.btn-group:not(:first-child)>.btn,
.btn-group-vertical>.btn:not(:first-child) {
	border-top-left-radius: 0;
	border-top-right-radius: 0
}

.btn-group-toggle>.btn,
.btn-group-toggle>.btn-group>.btn {
	margin-bottom: 0
}

.btn-group-toggle>.btn input[type=checkbox],
.btn-group-toggle>.btn input[type=radio],
.btn-group-toggle>.btn-group>.btn input[type=checkbox],
.btn-group-toggle>.btn-group>.btn input[type=radio] {
	position: absolute;
	clip: rect(0, 0, 0, 0);
	pointer-events: none
}

.input-group {
	position: relative;
	display: flex;
	width: 100%;
	flex-wrap: wrap;
	align-items: stretch
}

.input-group>.custom-file,
.input-group>.custom-select,
.input-group>.form-control,
.input-group>.form-control-plaintext {
	position: relative;
	width: 1%;
	margin-bottom: 0;
	flex: 1 1 auto
}

.input-group>.custom-file+.custom-file,
.input-group>.custom-file+.custom-select,
.input-group>.custom-file+.form-control,
.input-group>.custom-select+.custom-file,
.input-group>.custom-select+.custom-select,
.input-group>.custom-select+.form-control,
.input-group>.form-control+.custom-file,
.input-group>.form-control+.custom-select,
.input-group>.form-control+.form-control,
.input-group>.form-control-plaintext+.custom-file,
.input-group>.form-control-plaintext+.custom-select,
.input-group>.form-control-plaintext+.form-control {
	margin-left: -1px
}

.input-group>.custom-file .custom-file-input:focus~.custom-file-label,
.input-group>.custom-select:focus,
.input-group>.form-control:focus {
	z-index: 3
}

.input-group>.custom-file .custom-file-input:focus {
	z-index: 4
}

.input-group>.custom-select:not(:last-child),
.input-group>.form-control:not(:last-child) {
	border-top-right-radius: 0;
	border-bottom-right-radius: 0
}

.input-group>.custom-select:not(:first-child),
.input-group>.form-control:not(:first-child) {
	border-top-left-radius: 0;
	border-bottom-left-radius: 0
}

.input-group>.custom-file {
	display: flex;
	align-items: center
}

.input-group>.custom-file:not(:last-child) .custom-file-label,
.input-group>.custom-file:not(:last-child) .custom-file-label::after {
	border-top-right-radius: 0;
	border-bottom-right-radius: 0
}

.input-group>.custom-file:not(:first-child) .custom-file-label {
	border-top-left-radius: 0;
	border-bottom-left-radius: 0
}

.input-group-append,
.input-group-prepend {
	display: flex
}

.input-group-append .btn,
.input-group-prepend .btn {
	position: relative;
	z-index: 2
}

.input-group-append .btn:focus,
.input-group-prepend .btn:focus {
	z-index: 3
}

.input-group-append .btn+.btn,
.input-group-append .btn+.input-group-text,
.input-group-append .input-group-text+.btn,
.input-group-append .input-group-text+.input-group-text,
.input-group-prepend .btn+.btn,
.input-group-prepend .btn+.input-group-text,
.input-group-prepend .input-group-text+.btn,
.input-group-prepend .input-group-text+.input-group-text {
	margin-left: -1px
}

.input-group-prepend {
	margin-right: -1px
}

.input-group-append {
	margin-left: -1px
}

.input-group-text {
	font-size: .9rem;
	font-weight: 400;
	line-height: 1.5;
	display: flex;
	margin-bottom: 0;
	padding: .375rem .75rem;
	text-align: center;
	white-space: nowrap;
	color: #2e384d;
	border: 1px solid #dce4ec;
	border-radius: .25rem;
	background-color: #fff;
	align-items: center
}

.input-group-text input[type=checkbox],
.input-group-text input[type=radio] {
	margin-top: 0
}

.input-group-lg>.custom-select,
.input-group-lg>.form-control:not(textarea) {
	height: calc(2.6875rem + 2px)
}

.input-group-lg>.custom-select,
.input-group-lg>.form-control,
.input-group-lg>.input-group-append>.btn,
.input-group-lg>.input-group-append>.input-group-text,
.input-group-lg>.input-group-prepend>.btn,
.input-group-lg>.input-group-prepend>.input-group-text {
	font-size: 1.125rem;
	line-height: 1.5;
	padding: .5rem 1rem;
	border-radius: .3rem
}

.input-group-sm>.custom-select,
.input-group-sm>.form-control:not(textarea) {
	height: calc(1.68125rem + 2px)
}

.input-group-sm>.custom-select,
.input-group-sm>.form-control,
.input-group-sm>.input-group-append>.btn,
.input-group-sm>.input-group-append>.input-group-text,
.input-group-sm>.input-group-prepend>.btn,
.input-group-sm>.input-group-prepend>.input-group-text {
	font-size: .7875rem;
	line-height: 1.5;
	padding: .25rem .5rem;
	border-radius: .2rem
}

.input-group-lg>.custom-select,
.input-group-sm>.custom-select {
	padding-right: 1.75rem
}

.input-group>.input-group-append:last-child>.btn:not(:last-child):not(.dropdown-toggle),
.input-group>.input-group-append:last-child>.input-group-text:not(:last-child),
.input-group>.input-group-append:not(:last-child)>.btn,
.input-group>.input-group-append:not(:last-child)>.input-group-text,
.input-group>.input-group-prepend>.btn,
.input-group>.input-group-prepend>.input-group-text {
	border-top-right-radius: 0;
	border-bottom-right-radius: 0
}

.input-group>.input-group-append>.btn,
.input-group>.input-group-append>.input-group-text,
.input-group>.input-group-prepend:first-child>.btn:not(:first-child),
.input-group>.input-group-prepend:first-child>.input-group-text:not(:first-child),
.input-group>.input-group-prepend:not(:first-child)>.btn,
.input-group>.input-group-prepend:not(:first-child)>.input-group-text {
	border-top-left-radius: 0;
	border-bottom-left-radius: 0
}

.custom-control {
	position: relative;
	display: block;
	min-height: 1.35rem;
	padding-left: 1.5rem
}

.custom-control-inline {
	display: inline-flex;
	margin-right: 1rem
}

.custom-control-input {
	position: absolute;
	z-index: -1;
	opacity: 0
}

.custom-control-input:checked~.custom-control-label::before {
	color: #fff;
	border-color: #4c66fb;
	background-color: #4c66fb
}

.custom-control-input:focus~.custom-control-label::before {
	box-shadow: 0 0 0 .2rem rgba(76, 102, 251, .25)
}

.custom-control-input:focus:not(:checked)~.custom-control-label::before {
	border-color: #95aac9
}

.custom-control-input:not(:disabled):active~.custom-control-label::before {
	color: #fff;
	border-color: #b1c2d9;
	background-color: #b1c2d9
}

.custom-control-input:disabled~.custom-control-label {
	color: #95aac9
}

.custom-control-input:disabled~.custom-control-label::before {
	background-color: #edf2f9
}

.custom-control-label {
	position: relative;
	margin-bottom: 0;
	vertical-align: top
}

.custom-control-label::before {
	position: absolute;
	top: .175rem;
	left: -1.5rem;
	display: block;
	width: 1rem;
	height: 1rem;
	content: '';
	pointer-events: none;
	border: #b1c2d9 solid 1px;
	background-color: #fff
}

.custom-control-label::after {
	position: absolute;
	top: .175rem;
	left: -1.5rem;
	display: block;
	width: 1rem;
	height: 1rem;
	content: '';
	background-repeat: no-repeat;
	background-position: center center;
	background-size: 50% 50%
}

.custom-checkbox .custom-control-label::before {
	border-radius: .25rem
}

.custom-checkbox .custom-control-input:checked~.custom-control-label::after {
	background-image: url('data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%23FFFFFF\' d=\'M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z\'/%3e%3c/svg%3e')
}

.custom-checkbox .custom-control-input:indeterminate~.custom-control-label::before {
	border-color: #4c66fb;
	background-color: #4c66fb
}

.custom-checkbox .custom-control-input:indeterminate~.custom-control-label::after {
	background-image: url('data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 4\'%3e%3cpath stroke=\'%23FFFFFF\' d=\'M0 2h4\'/%3e%3c/svg%3e')
}

.custom-checkbox .custom-control-input:disabled:checked~.custom-control-label::before {
	background-color: rgba(76, 102, 251, .5)
}

.custom-checkbox .custom-control-input:disabled:indeterminate~.custom-control-label::before {
	background-color: rgba(76, 102, 251, .5)
}

.custom-radio .custom-control-label::before {
	border-radius: 50%
}

.custom-radio .custom-control-input:checked~.custom-control-label::after {
	background-image: url('data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'%23FFFFFF\'/%3e%3c/svg%3e')
}

.custom-radio .custom-control-input:disabled:checked~.custom-control-label::before {
	background-color: rgba(76, 102, 251, .5)
}

.custom-switch {
	padding-left: 2.25rem
}

.custom-switch .custom-control-label::before {
	left: -2.25rem;
	width: 1.75rem;
	pointer-events: all;
	border-radius: .5rem
}

.custom-switch .custom-control-label::after {
	top: calc(.175rem + 2px);
	left: calc(-2.25rem + 2px);
	width: calc(1rem - 4px);
	height: calc(1rem - 4px);
	transition: transform .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
	border-radius: .5rem;
	background-color: #b1c2d9
}

@media screen and (prefers-reduced-motion:reduce) {
	.custom-switch .custom-control-label::after {
		transition: none
	}
}

.custom-switch .custom-control-input:checked~.custom-control-label::after {
	transform: translateX(.75rem);
	background-color: #fff
}

.custom-switch .custom-control-input:disabled:checked~.custom-control-label::before {
	background-color: rgba(76, 102, 251, .5)
}

.custom-select {
	font-weight: 400;
	line-height: 1.5;
	display: inline-block;
	width: 100%;
	height: calc(2.1rem + 2px);
	padding: .375rem 1.75rem .375rem .75rem;
	vertical-align: middle;
	color: #2e384d;
	border: 1px solid #dce4ec;
	border-radius: .25rem;
	background: url('data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 5\'%3e%3cpath fill=\'%2311243b\' d=\'M2 0L0 2h4zm0 5L0 3h4z\'/%3e%3c/svg%3e') no-repeat right .75rem center/8px 10px;
	background-color: #fff;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none
}

.custom-select:focus {
	border-color: #95aac9;
	outline: 0;
	box-shadow: 0 0 0 .2rem rgba(149, 170, 201, .5)
}

.custom-select:focus::-ms-value {
	color: #2e384d;
	background-color: #fff
}

.custom-select[multiple],
.custom-select[size]:not([size='1']) {
	height: auto;
	padding-right: .75rem;
	background-image: none
}

.custom-select:disabled {
	color: #95aac9;
	background-color: #edf2f9
}

.custom-select::-ms-expand {
	opacity: 0
}

.custom-select-sm {
	font-size: .7875rem;
	height: calc(1.68125rem + 2px);
	padding-top: .25rem;
	padding-bottom: .25rem;
	padding-left: .5rem
}

.custom-select-lg {
	font-size: 1.125rem;
	height: calc(2.6875rem + 2px);
	padding-top: .5rem;
	padding-bottom: .5rem;
	padding-left: 1rem
}

.custom-file {
	position: relative;
	display: inline-block;
	width: 100%;
	height: calc(2.1rem + 2px);
	margin-bottom: 0
}

.custom-file-input {
	position: relative;
	z-index: 2;
	width: 100%;
	height: calc(2.1rem + 2px);
	margin: 0;
	opacity: 0
}

.custom-file-input:focus~.custom-file-label {
	border-color: #95aac9;
	box-shadow: 0 0 0 .2rem rgba(76, 102, 251, .25)
}

.custom-file-input:disabled~.custom-file-label {
	background-color: #edf2f9
}

.custom-file-input:lang(en)~.custom-file-label::after {
	content: 'Browse'
}

.custom-file-input~.custom-file-label[data-browse]::after {
	content: attr(data-browse)
}

.custom-file-label {
	font-weight: 400;
	line-height: 1.5;
	position: absolute;
	z-index: 1;
	top: 0;
	right: 0;
	left: 0;
	height: calc(2.1rem + 2px);
	padding: .375rem .75rem;
	color: #2e384d;
	border: 1px solid #e3ebf6;
	border-radius: .25rem;
	background-color: #fff
}

.custom-file-label::after {
	line-height: 1.5;
	position: absolute;
	z-index: 3;
	top: 0;
	right: 0;
	bottom: 0;
	display: block;
	height: 2.1rem;
	padding: .375rem .75rem;
	content: 'Browse';
	color: #2e384d;
	border-left: inherit;
	border-radius: 0 .25rem .25rem 0;
	background-color: #fff
}

.custom-range {
	width: 100%;
	height: calc(1rem + .4rem);
	padding: 0;
	background-color: transparent;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none
}

.custom-range:focus {
	outline: 0
}

.custom-range:focus::-webkit-slider-thumb {
	box-shadow: 0 0 0 1px #edf2f9, 0 0 0 .2rem rgba(76, 102, 251, .25)
}

.custom-range:focus::-moz-range-thumb {
	box-shadow: 0 0 0 1px #edf2f9, 0 0 0 .2rem rgba(76, 102, 251, .25)
}

.custom-range:focus::-ms-thumb {
	box-shadow: 0 0 0 1px #edf2f9, 0 0 0 .2rem rgba(76, 102, 251, .25)
}

.custom-range::-moz-focus-outer {
	border: 0
}

.custom-range::-webkit-slider-thumb {
	width: 1rem;
	height: 1rem;
	margin-top: -.25rem;
	transition: background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
	border: 0;
	border-radius: 1rem;
	background-color: #4c66fb;
	-webkit-appearance: none;
	appearance: none
}

@media screen and (prefers-reduced-motion:reduce) {
	.custom-range::-webkit-slider-thumb {
		transition: none
	}
}

.custom-range::-webkit-slider-thumb:active {
	background-color: #fbfbff
}

.custom-range::-webkit-slider-runnable-track {
	width: 100%;
	height: .5rem;
	cursor: pointer;
	color: transparent;
	border-color: transparent;
	border-radius: 1rem;
	background-color: #e3ebf6
}

.custom-range::-moz-range-thumb {
	width: 1rem;
	height: 1rem;
	transition: background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
	border: 0;
	border-radius: 1rem;
	background-color: #4c66fb;
	-moz-appearance: none;
	appearance: none
}

@media screen and (prefers-reduced-motion:reduce) {
	.custom-range::-moz-range-thumb {
		transition: none
	}
}

.custom-range::-moz-range-thumb:active {
	background-color: #fbfbff
}

.custom-range::-moz-range-track {
	width: 100%;
	height: .5rem;
	cursor: pointer;
	color: transparent;
	border-color: transparent;
	border-radius: 1rem;
	background-color: #e3ebf6
}

.custom-range::-ms-thumb {
	width: 1rem;
	height: 1rem;
	margin-top: 0;
	margin-right: .2rem;
	margin-left: .2rem;
	transition: background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
	border: 0;
	border-radius: 1rem;
	background-color: #4c66fb;
	appearance: none
}

@media screen and (prefers-reduced-motion:reduce) {
	.custom-range::-ms-thumb {
		transition: none
	}
}

.custom-range::-ms-thumb:active {
	background-color: #fbfbff
}

.custom-range::-ms-track {
	width: 100%;
	height: .5rem;
	cursor: pointer;
	color: transparent;
	border-width: .5rem;
	border-color: transparent;
	background-color: transparent
}

.custom-range::-ms-fill-lower {
	border-radius: 1rem;
	background-color: #e3ebf6
}

.custom-range::-ms-fill-upper {
	margin-right: 15px;
	border-radius: 1rem;
	background-color: #e3ebf6
}

.custom-range:disabled::-webkit-slider-thumb {
	background-color: #b1c2d9
}

.custom-range:disabled::-webkit-slider-runnable-track {
	cursor: default
}

.custom-range:disabled::-moz-range-thumb {
	background-color: #b1c2d9
}

.custom-range:disabled::-moz-range-track {
	cursor: default
}

.custom-range:disabled::-ms-thumb {
	background-color: #b1c2d9
}

.custom-control-label::before,
.custom-file-label,
.custom-select {
	transition: background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out
}

@media screen and (prefers-reduced-motion:reduce) {
	.custom-control-label::before,
	.custom-file-label,
	.custom-select {
		transition: none
	}
}

.nav {
	display: flex;
	margin-bottom: 0;
	padding-left: 0;
	list-style: none;
	flex-wrap: wrap
}

.nav-link {
	display: block;
	padding: .5rem 1rem
}

.nav-link:focus,
.nav-link:hover {
	text-decoration: none
}

.nav-link.disabled {
	cursor: default;
	pointer-events: none;
	color: #95aac9
}

.nav-tabs {
	border-bottom: 1px solid #e3ebf6
}

.nav-tabs .nav-item {
	margin-bottom: -1px
}

.nav-tabs .nav-link {
	border: 1px solid transparent;
	border-top-left-radius: .25rem;
	border-top-right-radius: .25rem
}

.nav-tabs .nav-link:focus,
.nav-tabs .nav-link:hover {
	border-color: #edf2f9 #edf2f9 #e3ebf6
}

.nav-tabs .nav-link.disabled {
	color: #95aac9;
	border-color: transparent;
	background-color: transparent
}

.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
	color: #12263f;
	border-color: #e3ebf6 #e3ebf6 #edf2f9;
	background-color: #edf2f9
}

.nav-tabs .dropdown-menu {
	margin-top: -1px;
	border-top-left-radius: 0;
	border-top-right-radius: 0
}

.nav-pills .nav-link {
	border-radius: .25rem
}

.nav-pills .nav-link.active,
.nav-pills .show>.nav-link {
	color: #fff;
	background-color: #4c66fb
}

.nav-fill .nav-item {
	text-align: center;
	flex: 1 1 auto
}

.nav-justified .nav-item {
	text-align: center;
	flex-basis: 0;
	flex-grow: 1
}

.tab-content>.tab-pane {
	display: none
}

.tab-content>.active {
	display: block
}

.navbar {
	position: relative;
	display: flex;
	padding: .5rem 1rem;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between
}

.navbar>.container,
.navbar>.container-fluid {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between
}

.navbar-brand {
	font-size: 1.125rem;
	line-height: inherit;
	display: inline-block;
	margin-right: 1rem;
	padding-top: .33125rem;
	padding-bottom: .33125rem;
	white-space: nowrap
}

.navbar-brand:focus,
.navbar-brand:hover {
	text-decoration: none
}

.navbar-nav {
	display: flex;
	flex-direction: column;
	margin-bottom: 0;
	padding-left: 0;
	list-style: none
}

.navbar-nav .nav-link {
	padding-right: 0;
	padding-left: 0
}

.navbar-nav .dropdown-menu {
	position: static;
	float: none
}

.navbar-text {
	display: inline-block;
	padding-top: .5rem;
	padding-bottom: .5rem
}

.navbar-collapse {
	flex-basis: 100%;
	flex-grow: 1;
	align-items: center
}

.navbar-toggler {
	font-size: 1.125rem;
	line-height: 1;
	padding: .25rem .75rem;
	border: 1px solid transparent;
	border-radius: .25rem;
	background-color: transparent
}

.navbar-toggler:focus,
.navbar-toggler:hover {
	text-decoration: none
}

.navbar-toggler:not(:disabled):not(.disabled) {
	cursor: pointer
}

.navbar-toggler-icon {
	display: inline-block;
	width: 1.5em;
	height: 1.5em;
	content: '';
	vertical-align: middle;
	background: no-repeat center center;
	background-size: 100% 100%
}

@media (max-width:575.98px) {
	.navbar-expand-sm>.container,
	.navbar-expand-sm>.container-fluid {
		padding-right: 0;
		padding-left: 0
	}
}

@media (min-width:576px) {
	.navbar-expand-sm {
		flex-flow: row nowrap;
		justify-content: flex-start
	}
	.navbar-expand-sm .navbar-nav {
		flex-direction: row
	}
	.navbar-expand-sm .navbar-nav .dropdown-menu {
		position: absolute
	}
	.navbar-expand-sm .navbar-nav .nav-link {
		padding-right: .5rem;
		padding-left: .5rem
	}
	.navbar-expand-sm>.container,
	.navbar-expand-sm>.container-fluid {
		flex-wrap: nowrap
	}
	.navbar-expand-sm .navbar-collapse {
		display: flex!important;
		flex-basis: auto
	}
	.navbar-expand-sm .navbar-toggler {
		display: none
	}
}

@media (max-width:767.98px) {
	.navbar-expand-md>.container,
	.navbar-expand-md>.container-fluid {
		padding-right: 0;
		padding-left: 0
	}
}

@media (min-width:768px) {
	.navbar-expand-md {
		flex-flow: row nowrap;
		justify-content: flex-start
	}
	.navbar-expand-md .navbar-nav {
		flex-direction: row
	}
	.navbar-expand-md .navbar-nav .dropdown-menu {
		position: absolute
	}
	.navbar-expand-md .navbar-nav .nav-link {
		padding-right: .5rem;
		padding-left: .5rem
	}
	.navbar-expand-md>.container,
	.navbar-expand-md>.container-fluid {
		flex-wrap: nowrap
	}
	.navbar-expand-md .navbar-collapse {
		display: flex!important;
		flex-basis: auto
	}
	.navbar-expand-md .navbar-toggler {
		display: none
	}
}

@media (max-width:991.98px) {
	.navbar-expand-lg>.container,
	.navbar-expand-lg>.container-fluid {
		padding-right: 0;
		padding-left: 0
	}
}

@media (min-width:992px) {
	.navbar-expand-lg {
		flex-flow: row nowrap;
		justify-content: flex-start
	}
	.navbar-expand-lg .navbar-nav {
		flex-direction: row
	}
	.navbar-expand-lg .navbar-nav .dropdown-menu {
		position: absolute
	}
	.navbar-expand-lg .navbar-nav .nav-link {
		padding-right: .5rem;
		padding-left: .5rem
	}
	.navbar-expand-lg>.container,
	.navbar-expand-lg>.container-fluid {
		flex-wrap: nowrap
	}
	.navbar-expand-lg .navbar-collapse {
		display: flex!important;
		flex-basis: auto
	}
	.navbar-expand-lg .navbar-toggler {
		display: none
	}
}

@media (max-width:1199.98px) {
	.navbar-expand-xl>.container,
	.navbar-expand-xl>.container-fluid {
		padding-right: 0;
		padding-left: 0
	}
}

@media (min-width:1200px) {
	.navbar-expand-xl {
		flex-flow: row nowrap;
		justify-content: flex-start
	}
	.navbar-expand-xl .navbar-nav {
		flex-direction: row
	}
	.navbar-expand-xl .navbar-nav .dropdown-menu {
		position: absolute
	}
	.navbar-expand-xl .navbar-nav .nav-link {
		padding-right: .5rem;
		padding-left: .5rem
	}
	.navbar-expand-xl>.container,
	.navbar-expand-xl>.container-fluid {
		flex-wrap: nowrap
	}
	.navbar-expand-xl .navbar-collapse {
		display: flex!important;
		flex-basis: auto
	}
	.navbar-expand-xl .navbar-toggler {
		display: none
	}
}

.navbar-expand {
	flex-flow: row nowrap;
	justify-content: flex-start
}

.navbar-expand>.container,
.navbar-expand>.container-fluid {
	padding-right: 0;
	padding-left: 0
}

.navbar-expand .navbar-nav {
	flex-direction: row
}

.navbar-expand .navbar-nav .dropdown-menu {
	position: absolute
}

.navbar-expand .navbar-nav .nav-link {
	padding-right: .5rem;
	padding-left: .5rem
}

.navbar-expand>.container,
.navbar-expand>.container-fluid {
	flex-wrap: nowrap
}

.navbar-expand .navbar-collapse {
	display: flex!important;
	flex-basis: auto
}

.navbar-expand .navbar-toggler {
	display: none
}

.navbar-light .navbar-brand {
	color: rgba(0, 0, 0, .9)
}

.navbar-light .navbar-brand:focus,
.navbar-light .navbar-brand:hover {
	color: rgba(0, 0, 0, .9)
}

.navbar-light .navbar-nav .nav-link {
	color: rgba(0, 0, 0, .5)
}

.navbar-light .navbar-nav .nav-link:focus,
.navbar-light .navbar-nav .nav-link:hover {
	color: rgba(0, 0, 0, .7)
}

.navbar-light .navbar-nav .nav-link.disabled {
	color: rgba(0, 0, 0, .3)
}

.navbar-light .navbar-nav .active>.nav-link,
.navbar-light .navbar-nav .nav-link.active,
.navbar-light .navbar-nav .nav-link.show,
.navbar-light .navbar-nav .show>.nav-link {
	color: rgba(0, 0, 0, .9)
}

.navbar-light .navbar-toggler {
	color: rgba(0, 0, 0, .5);
	border-color: rgba(0, 0, 0, .1)
}

.navbar-light .navbar-toggler-icon {
	background-image: url('data:image/svg+xml,%3csvg viewBox=\'0 0 30 30\' xmlns=\'http://www.w3.org/2000/svg\'%3e%3cpath stroke=\'rgba(0, 0, 0, 0.5)\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-miterlimit=\'10\' d=\'M4 7h22M4 15h22M4 23h22\'/%3e%3c/svg%3e')
}

.navbar-light .navbar-text {
	color: rgba(0, 0, 0, .5)
}

.navbar-light .navbar-text a {
	color: rgba(0, 0, 0, .9)
}

.navbar-light .navbar-text a:focus,
.navbar-light .navbar-text a:hover {
	color: rgba(0, 0, 0, .9)
}

.navbar-dark .navbar-brand {
	color: #fff
}

.navbar-dark .navbar-brand:focus,
.navbar-dark .navbar-brand:hover {
	color: #fff
}

.navbar-dark .navbar-nav .nav-link {
	color: rgba(255, 255, 255, .5)
}

.navbar-dark .navbar-nav .nav-link:focus,
.navbar-dark .navbar-nav .nav-link:hover {
	color: rgba(255, 255, 255, .75)
}

.navbar-dark .navbar-nav .nav-link.disabled {
	color: rgba(255, 255, 255, .25)
}

.navbar-dark .navbar-nav .active>.nav-link,
.navbar-dark .navbar-nav .nav-link.active,
.navbar-dark .navbar-nav .nav-link.show,
.navbar-dark .navbar-nav .show>.nav-link {
	color: #fff
}

.navbar-dark .navbar-toggler {
	color: rgba(255, 255, 255, .5);
	border-color: rgba(255, 255, 255, .1)
}

.navbar-dark .navbar-toggler-icon {
	background-image: url('data:image/svg+xml,%3csvg viewBox=\'0 0 30 30\' xmlns=\'http://www.w3.org/2000/svg\'%3e%3cpath stroke=\'rgba(255, 255, 255, 0.5)\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-miterlimit=\'10\' d=\'M4 7h22M4 15h22M4 23h22\'/%3e%3c/svg%3e')
}

.navbar-dark .navbar-text {
	color: rgba(255, 255, 255, .5)
}

.navbar-dark .navbar-text a {
	color: #fff
}

.navbar-dark .navbar-text a:focus,
.navbar-dark .navbar-text a:hover {
	color: #fff
}

.card {
	position: relative;
	display: flex;
	flex-direction: column;
	min-width: 0;
	word-wrap: break-word;
	border: 0 solid rgba(0, 0, 0, .125);
	border-radius: .25rem;
	background-color: #fff;
	background-clip: border-box
}

.card>hr {
	margin-right: 0;
	margin-left: 0
}

.card>.list-group:first-child .list-group-item:first-child {
	border-top-left-radius: .25rem;
	border-top-right-radius: .25rem
}

.card>.list-group:last-child .list-group-item:last-child {
	border-bottom-right-radius: .25rem;
	border-bottom-left-radius: .25rem
}

.card-body {
	padding: 1.25rem;
	flex: 1 1 auto
}

.card-title {
	margin-bottom: .75rem
}

.card-subtitle {
	margin-top: -.375rem;
	margin-bottom: 0
}

.card-text:last-child {
	margin-bottom: 0
}

.card-link:hover {
	text-decoration: none
}

.card-link+.card-link {
	margin-left: 1.25rem
}

.card-header {
	margin-bottom: 0;
	padding: .75rem 1.25rem;
	color: inherit;
	border-bottom: 0 solid rgba(0, 0, 0, .125);
	background-color: transparent
}

.card-header:first-child {
	border-radius: calc(.25rem - 0) calc(.25rem - 0) 0 0
}

.card-header+.list-group .list-group-item:first-child {
	border-top: 0
}

.card-footer {
	padding: .75rem 1.25rem;
	border-top: 0 solid rgba(0, 0, 0, .125);
	background-color: transparent
}

.card-footer:last-child {
	border-radius: 0 0 calc(.25rem - 0) calc(.25rem - 0)
}

.card-header-tabs {
	margin-right: -.625rem;
	margin-bottom: -.75rem;
	margin-left: -.625rem;
	border-bottom: 0
}

.card-header-pills {
	margin-right: -.625rem;
	margin-left: -.625rem
}

.card-img-overlay {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	padding: 1.25rem
}

.card-img {
	width: 100%;
	border-radius: calc(.25rem - 0)
}

.card-img-top {
	width: 100%;
	border-top-left-radius: calc(.25rem - 0);
	border-top-right-radius: calc(.25rem - 0)
}

.card-img-bottom {
	width: 100%;
	border-bottom-right-radius: calc(.25rem - 0);
	border-bottom-left-radius: calc(.25rem - 0)
}

.card-deck {
	display: flex;
	flex-direction: column
}

.card-deck .card {
	margin-bottom: 15px
}

@media (min-width:576px) {
	.card-deck {
		margin-right: -15px;
		margin-left: -15px;
		flex-flow: row wrap
	}
	.card-deck .card {
		display: flex;
		flex-direction: column;
		margin-right: 15px;
		margin-bottom: 0;
		margin-left: 15px;
		flex: 1 0
	}
}

.card-group {
	display: flex;
	flex-direction: column
}

.card-group>.card {
	margin-bottom: 15px
}

@media (min-width:576px) {
	.card-group {
		flex-flow: row wrap
	}
	.card-group>.card {
		margin-bottom: 0;
		flex: 1 0
	}
	.card-group>.card+.card {
		margin-left: 0;
		border-left: 0
	}
	.card-group>.card:first-child {
		border-top-right-radius: 0;
		border-bottom-right-radius: 0
	}
	.card-group>.card:first-child .card-header,
	.card-group>.card:first-child .card-img-top {
		border-top-right-radius: 0
	}
	.card-group>.card:first-child .card-footer,
	.card-group>.card:first-child .card-img-bottom {
		border-bottom-right-radius: 0
	}
	.card-group>.card:last-child {
		border-top-left-radius: 0;
		border-bottom-left-radius: 0
	}
	.card-group>.card:last-child .card-header,
	.card-group>.card:last-child .card-img-top {
		border-top-left-radius: 0
	}
	.card-group>.card:last-child .card-footer,
	.card-group>.card:last-child .card-img-bottom {
		border-bottom-left-radius: 0
	}
	.card-group>.card:only-child {
		border-radius: .25rem
	}
	.card-group>.card:only-child .card-header,
	.card-group>.card:only-child .card-img-top {
		border-top-left-radius: .25rem;
		border-top-right-radius: .25rem
	}
	.card-group>.card:only-child .card-footer,
	.card-group>.card:only-child .card-img-bottom {
		border-bottom-right-radius: .25rem;
		border-bottom-left-radius: .25rem
	}
	.card-group>.card:not(:first-child):not(:last-child):not(:only-child) {
		border-radius: 0
	}
	.card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-footer,
	.card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-header,
	.card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-img-bottom,
	.card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-img-top {
		border-radius: 0
	}
}

.card-columns .card {
	margin-bottom: .75rem
}

@media (min-width:576px) {
	.card-columns {
		column-count: 3;
		column-gap: 1.25rem;
		orphans: 1;
		widows: 1
	}
	.card-columns .card {
		display: inline-block;
		width: 100%
	}
}

.accordion .card {
	overflow: hidden
}

.accordion .card:not(:first-of-type) .card-header:first-child {
	border-radius: 0
}

.accordion .card:not(:first-of-type):not(:last-of-type) {
	border-bottom: 0;
	border-radius: 0
}

.accordion .card:first-of-type {
	border-bottom: 0;
	border-bottom-right-radius: 0;
	border-bottom-left-radius: 0
}

.accordion .card:last-of-type {
	border-top-left-radius: 0;
	border-top-right-radius: 0
}

.accordion .card .card-header {
	margin-bottom: 0
}

.breadcrumb {
	display: flex;
	margin-bottom: 1rem;
	padding: .75rem 1rem;
	list-style: none;
	border-radius: .25rem;
	background-color: #edf2f9;
	flex-wrap: wrap
}

.breadcrumb-item+.breadcrumb-item {
	padding-left: .5rem
}

.breadcrumb-item+.breadcrumb-item::before {
	display: inline-block;
	padding-right: .5rem;
	content: '/';
	color: #95aac9
}

.breadcrumb-item+.breadcrumb-item:hover::before {
	text-decoration: underline
}

.breadcrumb-item+.breadcrumb-item:hover::before {
	text-decoration: none
}

.breadcrumb-item.active {
	color: #95aac9
}

.pagination {
	display: flex;
	padding-left: 0;
	list-style: none;
	border-radius: .25rem
}

.page-link {
	line-height: 1.25;
	position: relative;
	display: block;
	margin-left: -1px;
	padding: .5rem .75rem;
	color: #4c66fb;
	border: 1px solid #e3ebf6;
	background-color: #fff
}

.page-link:hover {
	z-index: 2;
	text-decoration: none;
	color: #0529f5;
	border-color: #e3ebf6;
	background-color: #edf2f9
}

.page-link:focus {
	z-index: 2;
	outline: 0;
	box-shadow: 0 0 0 .2rem rgba(76, 102, 251, .25)
}

.page-link:not(:disabled):not(.disabled) {
	cursor: pointer
}

.page-item:first-child .page-link {
	margin-left: 0;
	border-top-left-radius: .25rem;
	border-bottom-left-radius: .25rem
}

.page-item:last-child .page-link {
	border-top-right-radius: .25rem;
	border-bottom-right-radius: .25rem
}

.page-item.active .page-link {
	z-index: 1;
	color: #fff;
	border-color: #4c66fb;
	background-color: #4c66fb
}

.page-item.disabled .page-link {
	cursor: auto;
	pointer-events: none;
	color: #95aac9;
	border-color: #e3ebf6;
	background-color: #fff
}

.pagination-lg .page-link {
	font-size: 1.125rem;
	line-height: 1.5;
	padding: .75rem 1.5rem
}

.pagination-lg .page-item:first-child .page-link {
	border-top-left-radius: .3rem;
	border-bottom-left-radius: .3rem
}

.pagination-lg .page-item:last-child .page-link {
	border-top-right-radius: .3rem;
	border-bottom-right-radius: .3rem
}

.pagination-sm .page-link {
	font-size: .7875rem;
	line-height: 1.5;
	padding: .25rem .5rem
}

.pagination-sm .page-item:first-child .page-link {
	border-top-left-radius: .2rem;
	border-bottom-left-radius: .2rem
}

.pagination-sm .page-item:last-child .page-link {
	border-top-right-radius: .2rem;
	border-bottom-right-radius: .2rem
}

.badge {
	font-size: 80%;
	font-weight: 700;
	line-height: 1;
	display: inline-block;
	padding: .4rem .5rem;
	text-align: center;
	vertical-align: baseline;
	white-space: nowrap;
	border-radius: .25rem
}

a.badge:focus,
a.badge:hover {
	text-decoration: none
}

.badge:empty {
	display: none
}

.btn .badge {
	position: relative;
	top: -1px
}

.badge-pill {
	padding-right: .6em;
	padding-left: .6em;
	border-radius: 10rem
}

.badge-primary {
	color: #fff;
	background-color: #4c66fb
}

a.badge-primary:focus,
a.badge-primary:hover {
	color: #fff;
	background-color: #1a3bfa
}

.badge-secondary {
	color: #fff;
	background-color: #95aac9
}

a.badge-secondary:focus,
a.badge-secondary:hover {
	color: #fff;
	background-color: #738fb8
}

.badge-success {
	color: #fff;
	background-color: #0c9
}

a.badge-success:focus,
a.badge-success:hover {
	color: #fff;
	background-color: #009973
}

.badge-info {
	color: #fff;
	background-color: #19b5fe
}

a.badge-info:focus,
a.badge-info:hover {
	color: #fff;
	background-color: #019be3
}

.badge-warning {
	color: #fff;
	background-color: #f7bc06
}

a.badge-warning:focus,
a.badge-warning:hover {
	color: #fff;
	background-color: #c59605
}

.badge-danger {
	color: #fff;
	background-color: #f2545b
}

a.badge-danger:focus,
a.badge-danger:hover {
	color: #fff;
	background-color: #ee252e
}

.badge-light {
	color: #0d1c2f;
	background-color: #f9fbfd
}

a.badge-light:focus,
a.badge-light:hover {
	color: #0d1c2f;
	background-color: #d3e2f0
}

.badge-dark {
	color: #fff;
	background-color: #12263f
}

a.badge-dark:focus,
a.badge-dark:hover {
	color: #fff;
	background-color: #070e17
}

.jumbotron {
	margin-bottom: 2rem;
	padding: 2rem 1rem;
	border-radius: .3rem;
	background-color: #edf2f9
}

@media (min-width:576px) {
	.jumbotron {
		padding: 4rem 2rem
	}
}

.jumbotron-fluid {
	padding-right: 0;
	padding-left: 0;
	border-radius: 0
}

.alert {
	position: relative;
	margin-bottom: 1rem;
	padding: .75rem 1.25rem;
	border: 1px solid transparent;
	border-radius: .25rem
}

.alert-heading {
	color: inherit
}

.alert-link {
	font-weight: 700
}

.alert-dismissible {
	padding-right: 3.85rem
}

.alert-dismissible .close {
	position: absolute;
	top: 0;
	right: 0;
	padding: .75rem 1.25rem;
	color: inherit
}

.alert-primary {
	color: #283583;
	border-color: #cdd4fe;
	background-color: #dbe0fe
}

.alert-primary hr {
	border-top-color: #b4bffe
}

.alert-primary .alert-link {
	color: #1c255c
}

.alert-secondary {
	color: #4d5869;
	border-color: #e1e7f0;
	background-color: #eaeef4
}

.alert-secondary hr {
	border-top-color: #d0d9e8
}

.alert-secondary .alert-link {
	color: #373f4c
}

.alert-success {
	color: #006a50;
	border-color: #b8f1e2;
	background-color: #ccf5eb
}

.alert-success hr {
	border-top-color: #a3edd9
}

.alert-success .alert-link {
	color: #00372a
}

.alert-info {
	color: #0d5e84;
	border-color: #bfeaff;
	background-color: #d1f0ff
}

.alert-info hr {
	border-top-color: #a6e2ff
}

.alert-info .alert-link {
	color: #083d56
}

.alert-warning {
	color: #806203;
	border-color: #fdecb9;
	background-color: #fdf2cd
}

.alert-warning hr {
	border-top-color: #fce5a0
}

.alert-warning .alert-link {
	color: #4e3c02
}

.alert-danger {
	color: #7e2c2f;
	border-color: #fbcfd1;
	background-color: #fcddde
}

.alert-danger hr {
	border-top-color: #f9b7ba
}

.alert-danger .alert-link {
	color: #581f21
}

.alert-light {
	color: #818384;
	border-color: #fdfefe;
	background-color: #fefeff
}

.alert-light hr {
	border-top-color: #ecf6f6
}

.alert-light .alert-link {
	color: #68696a
}

.alert-dark {
	color: #091421;
	border-color: #bdc2c9;
	background-color: #d0d4d9
}

.alert-dark hr {
	border-top-color: #afb5be
}

.alert-dark .alert-link {
	color: #000
}

@keyframes progress-bar-stripes {
	from {
		background-position: 1rem 0
	}
	to {
		background-position: 0 0
	}
}

.progress {
	font-size: .675rem;
	display: flex;
	overflow: hidden;
	height: 1rem;
	border-radius: .25rem;
	background-color: #edf2f9
}

.progress-bar {
	display: flex;
	flex-direction: column;
	transition: width .6s ease;
	text-align: center;
	white-space: nowrap;
	color: #fff;
	background-color: #4c66fb;
	justify-content: center
}

@media screen and (prefers-reduced-motion:reduce) {
	.progress-bar {
		transition: none
	}
}

.progress-bar-striped {
	background-image: linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
	background-size: 1rem 1rem
}

.progress-bar-animated {
	animation: progress-bar-stripes 1s linear infinite
}

.media {
	display: flex;
	align-items: flex-start
}

.media-body {
	flex: 1 1
}

.list-group {
	display: flex;
	flex-direction: column;
	margin-bottom: 0;
	padding-left: 0
}

.list-group-item-action {
	width: 100%;
	text-align: inherit;
	color: #12263f
}

.list-group-item-action:focus,
.list-group-item-action:hover {
	text-decoration: none;
	color: #12263f;
	background-color: #f9fbfd
}

.list-group-item-action:active {
	color: #2e384d;
	background-color: #edf2f9
}

.list-group-item {
	position: relative;
	display: block;
	margin-bottom: -1px;
	padding: .75rem 1.25rem;
	border: 1px solid #dce4ec;
	background-color: #fff
}

.list-group-item:first-child {
	border-top-left-radius: .25rem;
	border-top-right-radius: .25rem
}

.list-group-item:last-child {
	margin-bottom: 0;
	border-bottom-right-radius: .25rem;
	border-bottom-left-radius: .25rem
}

.list-group-item:focus,
.list-group-item:hover {
	z-index: 1;
	text-decoration: none
}

.list-group-item.disabled,
.list-group-item:disabled {
	pointer-events: none;
	color: #95aac9;
	background-color: #fff
}

.list-group-item.active {
	z-index: 2;
	color: #fff;
	border-color: #4c66fb;
	background-color: #4c66fb
}

.list-group-flush .list-group-item {
	border-right: 0;
	border-left: 0;
	border-radius: 0
}

.list-group-flush .list-group-item:last-child {
	margin-bottom: -1px
}

.list-group-flush:first-child .list-group-item:first-child {
	border-top: 0
}

.list-group-flush:last-child .list-group-item:last-child {
	margin-bottom: 0;
	border-bottom: 0
}

.list-group-item-primary {
	color: #283583;
	background-color: #cdd4fe
}

.list-group-item-primary.list-group-item-action:focus,
.list-group-item-primary.list-group-item-action:hover {
	color: #283583;
	background-color: #b4bffe
}

.list-group-item-primary.list-group-item-action.active {
	color: #fff;
	border-color: #283583;
	background-color: #283583
}

.list-group-item-secondary {
	color: #4d5869;
	background-color: #e1e7f0
}

.list-group-item-secondary.list-group-item-action:focus,
.list-group-item-secondary.list-group-item-action:hover {
	color: #4d5869;
	background-color: #d0d9e8
}

.list-group-item-secondary.list-group-item-action.active {
	color: #fff;
	border-color: #4d5869;
	background-color: #4d5869
}

.list-group-item-success {
	color: #006a50;
	background-color: #b8f1e2
}

.list-group-item-success.list-group-item-action:focus,
.list-group-item-success.list-group-item-action:hover {
	color: #006a50;
	background-color: #a3edd9
}

.list-group-item-success.list-group-item-action.active {
	color: #fff;
	border-color: #006a50;
	background-color: #006a50
}

.list-group-item-info {
	color: #0d5e84;
	background-color: #bfeaff
}

.list-group-item-info.list-group-item-action:focus,
.list-group-item-info.list-group-item-action:hover {
	color: #0d5e84;
	background-color: #a6e2ff
}

.list-group-item-info.list-group-item-action.active {
	color: #fff;
	border-color: #0d5e84;
	background-color: #0d5e84
}

.list-group-item-warning {
	color: #806203;
	background-color: #fdecb9
}

.list-group-item-warning.list-group-item-action:focus,
.list-group-item-warning.list-group-item-action:hover {
	color: #806203;
	background-color: #fce5a0
}

.list-group-item-warning.list-group-item-action.active {
	color: #fff;
	border-color: #806203;
	background-color: #806203
}

.list-group-item-danger {
	color: #7e2c2f;
	background-color: #fbcfd1
}

.list-group-item-danger.list-group-item-action:focus,
.list-group-item-danger.list-group-item-action:hover {
	color: #7e2c2f;
	background-color: #f9b7ba
}

.list-group-item-danger.list-group-item-action.active {
	color: #fff;
	border-color: #7e2c2f;
	background-color: #7e2c2f
}

.list-group-item-light {
	color: #818384;
	background-color: #fdfefe
}

.list-group-item-light.list-group-item-action:focus,
.list-group-item-light.list-group-item-action:hover {
	color: #818384;
	background-color: #ecf6f6
}

.list-group-item-light.list-group-item-action.active {
	color: #fff;
	border-color: #818384;
	background-color: #818384
}

.list-group-item-dark {
	color: #091421;
	background-color: #bdc2c9
}

.list-group-item-dark.list-group-item-action:focus,
.list-group-item-dark.list-group-item-action:hover {
	color: #091421;
	background-color: #afb5be
}

.list-group-item-dark.list-group-item-action.active {
	color: #fff;
	border-color: #091421;
	background-color: #091421
}

.close {
	font-size: 1.35rem;
	font-weight: 700;
	line-height: 1;
	float: right;
	opacity: .5;
	color: #000;
	text-shadow: 0 1px 0 #fff
}

.close:hover {
	text-decoration: none;
	color: #000
}

.close:not(:disabled):not(.disabled) {
	cursor: pointer
}

.close:not(:disabled):not(.disabled):focus,
.close:not(:disabled):not(.disabled):hover {
	opacity: .75
}

button.close {
	padding: 0;
	border: 0;
	background-color: transparent;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none
}

a.close.disabled {
	pointer-events: none
}

.toast {
	font-size: .875rem;
	overflow: hidden;
	max-width: 350px;
	opacity: 0;
	border: 1px solid rgba(0, 0, 0, .1);
	border-radius: .25rem;
	background-color: rgba(255, 255, 255, .85);
	background-clip: padding-box;
	box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .1);
	-webkit-backdrop-filter: blur(10px);
	backdrop-filter: blur(10px)
}

.toast:not(:last-child) {
	margin-bottom: .75rem
}

.toast.showing {
	opacity: 1
}

.toast.show {
	display: block;
	opacity: 1
}

.toast.hide {
	display: none
}

.toast-header {
	display: flex;
	padding: .25rem .75rem;
	color: #95aac9;
	border-bottom: 1px solid rgba(0, 0, 0, .05);
	background-color: rgba(255, 255, 255, .85);
	background-clip: padding-box;
	align-items: center
}

.toast-body {
	padding: .75rem
}

.modal-open {
	overflow: hidden
}

.modal-open .modal {
	overflow-x: hidden;
	overflow-y: auto
}

.modal {
	position: fixed;
	z-index: 1050;
	top: 0;
	left: 0;
	display: none;
	overflow: hidden;
	width: 100%;
	height: 100%;
	outline: 0
}

.modal-dialog {
	position: relative;
	width: auto;
	margin: .5rem;
	pointer-events: none
}

.modal.fade .modal-dialog {
	transition: transform .3s ease-out;
	transform: translate(0, -50px)
}

@media screen and (prefers-reduced-motion:reduce) {
	.modal.fade .modal-dialog {
		transition: none
	}
}

.modal.show .modal-dialog {
	transform: none
}

.modal-dialog-centered {
	display: flex;
	min-height: calc(100% - (.5rem * 2));
	align-items: center
}

.modal-dialog-centered::before {
	display: block;
	height: calc(100vh - (.5rem * 2));
	content: ''
}

.modal-content {
	position: relative;
	display: flex;
	flex-direction: column;
	width: 100%;
	pointer-events: auto;
	border: 1px solid rgba(0, 0, 0, .2);
	border-radius: .3rem;
	outline: 0;
	background-color: #fff;
	background-clip: padding-box
}

.modal-backdrop {
	position: fixed;
	z-index: 1040;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: #000
}

.modal-backdrop.fade {
	opacity: 0
}

.modal-backdrop.show {
	opacity: 1
}

.modal-header {
	display: flex;
	padding: 1rem 1rem;
	border-bottom: 1px solid #edf2f9;
	border-top-left-radius: .3rem;
	border-top-right-radius: .3rem;
	align-items: flex-start;
	justify-content: space-between
}

.modal-header .close {
	margin: -1rem -1rem -1rem auto;
	padding: 1rem 1rem
}

.modal-title {
	line-height: 1.5;
	margin-bottom: 0
}

.modal-body {
	position: relative;
	padding: 1rem;
	flex: 1 1 auto
}

.modal-footer {
	display: flex;
	padding: 1rem;
	border-top: 1px solid #edf2f9;
	border-bottom-right-radius: .3rem;
	border-bottom-left-radius: .3rem;
	align-items: center;
	justify-content: flex-end
}

.modal-footer>:not(:first-child) {
	margin-left: .25rem
}

.modal-footer>:not(:last-child) {
	margin-right: .25rem
}

.modal-scrollbar-measure {
	position: absolute;
	top: -9999px;
	overflow: scroll;
	width: 50px;
	height: 50px
}

@media (min-width:576px) {
	.modal-dialog {
		max-width: 500px;
		margin: 1.75rem auto
	}
	.modal-dialog-centered {
		min-height: calc(100% - (1.75rem * 2))
	}
	.modal-dialog-centered::before {
		height: calc(100vh - (1.75rem * 2))
	}
	.modal-sm {
		max-width: 300px
	}
}

@media (min-width:992px) {
	.modal-lg,
	.modal-xl {
		max-width: 800px
	}
}

@media (min-width:1200px) {
	.modal-xl {
		max-width: 1140px
	}
}

.tooltip {
	font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
	font-size: .7875rem;
	font-weight: 400;
	font-style: normal;
	line-height: 1.5;
	position: absolute;
	z-index: 1070;
	display: block;
	margin: 0;
	text-align: left;
	text-align: start;
	white-space: normal;
	text-decoration: none;
	letter-spacing: normal;
	word-spacing: normal;
	text-transform: none;
	word-wrap: break-word;
	word-break: normal;
	opacity: 0;
	text-shadow: none;
	line-break: auto
}

.tooltip.show {
	opacity: .9
}

.tooltip .arrow {
	position: absolute;
	display: block;
	width: .8rem;
	height: .4rem
}

.tooltip .arrow::before {
	position: absolute;
	content: '';
	border-style: solid;
	border-color: transparent
}

.bs-tooltip-auto[x-placement^=top],
.bs-tooltip-top {
	padding: .4rem 0
}

.bs-tooltip-auto[x-placement^=top] .arrow,
.bs-tooltip-top .arrow {
	bottom: 0
}

.bs-tooltip-auto[x-placement^=top] .arrow::before,
.bs-tooltip-top .arrow::before {
	top: 0;
	border-width: .4rem .4rem 0;
	border-top-color: #000
}

.bs-tooltip-auto[x-placement^=right],
.bs-tooltip-right {
	padding: 0 .4rem
}

.bs-tooltip-auto[x-placement^=right] .arrow,
.bs-tooltip-right .arrow {
	left: 0;
	width: .4rem;
	height: .8rem
}

.bs-tooltip-auto[x-placement^=right] .arrow::before,
.bs-tooltip-right .arrow::before {
	right: 0;
	border-width: .4rem .4rem .4rem 0;
	border-right-color: #000
}

.bs-tooltip-auto[x-placement^=bottom],
.bs-tooltip-bottom {
	padding: .4rem 0
}

.bs-tooltip-auto[x-placement^=bottom] .arrow,
.bs-tooltip-bottom .arrow {
	top: 0
}

.bs-tooltip-auto[x-placement^=bottom] .arrow::before,
.bs-tooltip-bottom .arrow::before {
	bottom: 0;
	border-width: 0 .4rem .4rem;
	border-bottom-color: #000
}

.bs-tooltip-auto[x-placement^=left],
.bs-tooltip-left {
	padding: 0 .4rem
}

.bs-tooltip-auto[x-placement^=left] .arrow,
.bs-tooltip-left .arrow {
	right: 0;
	width: .4rem;
	height: .8rem
}

.bs-tooltip-auto[x-placement^=left] .arrow::before,
.bs-tooltip-left .arrow::before {
	left: 0;
	border-width: .4rem 0 .4rem .4rem;
	border-left-color: #000
}

.tooltip-inner {
	max-width: 200px;
	padding: .25rem .5rem;
	text-align: center;
	color: #fff;
	border-radius: .25rem;
	background-color: #000
}

.popover {
	font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
	font-size: .7875rem;
	font-weight: 400;
	font-style: normal;
	line-height: 1.5;
	position: absolute;
	z-index: 1060;
	top: 0;
	left: 0;
	display: block;
	max-width: 276px;
	text-align: left;
	text-align: start;
	white-space: normal;
	text-decoration: none;
	letter-spacing: normal;
	word-spacing: normal;
	text-transform: none;
	word-wrap: break-word;
	word-break: normal;
	border: 1px solid rgba(0, 0, 0, .2);
	border-radius: .3rem;
	background-color: #fff;
	background-clip: padding-box;
	text-shadow: none;
	line-break: auto
}

.popover .arrow {
	position: absolute;
	display: block;
	width: 1rem;
	height: .5rem;
	margin: 0 .3rem
}

.popover .arrow::after,
.popover .arrow::before {
	position: absolute;
	display: block;
	content: '';
	border-style: solid;
	border-color: transparent
}

.bs-popover-auto[x-placement^=top],
.bs-popover-top {
	margin-bottom: .5rem
}

.bs-popover-auto[x-placement^=top] .arrow,
.bs-popover-top .arrow {
	bottom: calc((.5rem + 1px) * -1)
}

.bs-popover-auto[x-placement^=top] .arrow::after,
.bs-popover-auto[x-placement^=top] .arrow::before,
.bs-popover-top .arrow::after,
.bs-popover-top .arrow::before {
	border-width: .5rem .5rem 0
}

.bs-popover-auto[x-placement^=top] .arrow::before,
.bs-popover-top .arrow::before {
	bottom: 0;
	border-top-color: rgba(0, 0, 0, .25)
}

.bs-popover-auto[x-placement^=top] .arrow::after,
.bs-popover-top .arrow::after {
	bottom: 1px;
	border-top-color: #fff
}

.bs-popover-auto[x-placement^=right],
.bs-popover-right {
	margin-left: .5rem
}

.bs-popover-auto[x-placement^=right] .arrow,
.bs-popover-right .arrow {
	left: calc((.5rem + 1px) * -1);
	width: .5rem;
	height: 1rem;
	margin: .3rem 0
}

.bs-popover-auto[x-placement^=right] .arrow::after,
.bs-popover-auto[x-placement^=right] .arrow::before,
.bs-popover-right .arrow::after,
.bs-popover-right .arrow::before {
	border-width: .5rem .5rem .5rem 0
}

.bs-popover-auto[x-placement^=right] .arrow::before,
.bs-popover-right .arrow::before {
	left: 0;
	border-right-color: rgba(0, 0, 0, .25)
}

.bs-popover-auto[x-placement^=right] .arrow::after,
.bs-popover-right .arrow::after {
	left: 1px;
	border-right-color: #fff
}

.bs-popover-auto[x-placement^=bottom],
.bs-popover-bottom {
	margin-top: .5rem
}

.bs-popover-auto[x-placement^=bottom] .arrow,
.bs-popover-bottom .arrow {
	top: calc((.5rem + 1px) * -1)
}

.bs-popover-auto[x-placement^=bottom] .arrow::after,
.bs-popover-auto[x-placement^=bottom] .arrow::before,
.bs-popover-bottom .arrow::after,
.bs-popover-bottom .arrow::before {
	border-width: 0 .5rem .5rem .5rem
}

.bs-popover-auto[x-placement^=bottom] .arrow::before,
.bs-popover-bottom .arrow::before {
	top: 0;
	border-bottom-color: rgba(0, 0, 0, .25)
}

.bs-popover-auto[x-placement^=bottom] .arrow::after,
.bs-popover-bottom .arrow::after {
	top: 1px;
	border-bottom-color: #fff
}

.bs-popover-auto[x-placement^=bottom] .popover-header::before,
.bs-popover-bottom .popover-header::before {
	position: absolute;
	top: 0;
	left: 50%;
	display: block;
	width: 1rem;
	margin-left: -.5rem;
	content: '';
	border-bottom: 1px solid #f7f7f7
}

.bs-popover-auto[x-placement^=left],
.bs-popover-left {
	margin-right: .5rem
}

.bs-popover-auto[x-placement^=left] .arrow,
.bs-popover-left .arrow {
	right: calc((.5rem + 1px) * -1);
	width: .5rem;
	height: 1rem;
	margin: .3rem 0
}

.bs-popover-auto[x-placement^=left] .arrow::after,
.bs-popover-auto[x-placement^=left] .arrow::before,
.bs-popover-left .arrow::after,
.bs-popover-left .arrow::before {
	border-width: .5rem 0 .5rem .5rem
}

.bs-popover-auto[x-placement^=left] .arrow::before,
.bs-popover-left .arrow::before {
	right: 0;
	border-left-color: rgba(0, 0, 0, .25)
}

.bs-popover-auto[x-placement^=left] .arrow::after,
.bs-popover-left .arrow::after {
	right: 1px;
	border-left-color: #fff
}

.popover-header {
	font-size: .9rem;
	margin-bottom: 0;
	padding: .5rem .75rem;
	color: inherit;
	border-bottom: 1px solid #ebebeb;
	border-top-left-radius: calc(.3rem - 1px);
	border-top-right-radius: calc(.3rem - 1px);
	background-color: #f7f7f7
}

.popover-header:empty {
	display: none
}

.popover-body {
	padding: .5rem .75rem;
	color: #2e384d
}

.carousel {
	position: relative
}

.carousel.pointer-event {
	touch-action: pan-y
}

.carousel-inner {
	position: relative;
	overflow: hidden;
	width: 100%
}

.carousel-inner::after {
	display: block;
	clear: both;
	content: ''
}

.carousel-item {
	position: relative;
	display: none;
	float: left;
	width: 100%;
	margin-right: -100%;
	transition: transform .6s ease-in-out;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden
}

@media screen and (prefers-reduced-motion:reduce) {
	.carousel-item {
		transition: none
	}
}

.carousel-item-next,
.carousel-item-prev,
.carousel-item.active {
	display: block
}

.active.carousel-item-right,
.carousel-item-next:not(.carousel-item-left) {
	transform: translateX(100%)
}

.active.carousel-item-left,
.carousel-item-prev:not(.carousel-item-right) {
	transform: translateX(-100%)
}

.carousel-fade .carousel-item {
	transition-property: opacity;
	transform: none;
	opacity: 0
}

.carousel-fade .carousel-item-next.carousel-item-left,
.carousel-fade .carousel-item-prev.carousel-item-right,
.carousel-fade .carousel-item.active {
	z-index: 1;
	opacity: 1
}

.carousel-fade .active.carousel-item-left,
.carousel-fade .active.carousel-item-right {
	z-index: 0;
	transition: 0s .6s opacity;
	opacity: 0
}

@media screen and (prefers-reduced-motion:reduce) {
	.carousel-fade .active.carousel-item-left,
	.carousel-fade .active.carousel-item-right {
		transition: none
	}
}

.carousel-control-next,
.carousel-control-prev {
	position: absolute;
	z-index: 1;
	top: 0;
	bottom: 0;
	display: flex;
	width: 15%;
	transition: opacity .15s ease;
	text-align: center;
	opacity: .5;
	color: #fff;
	align-items: center;
	justify-content: center
}

@media screen and (prefers-reduced-motion:reduce) {
	.carousel-control-next,
	.carousel-control-prev {
		transition: none
	}
}

.carousel-control-next:focus,
.carousel-control-next:hover,
.carousel-control-prev:focus,
.carousel-control-prev:hover {
	text-decoration: none;
	opacity: .9;
	color: #fff;
	outline: 0
}

.carousel-control-prev {
	left: 0
}

.carousel-control-next {
	right: 0
}

.carousel-control-next-icon,
.carousel-control-prev-icon {
	display: inline-block;
	width: 20px;
	height: 20px;
	background: transparent no-repeat center center;
	background-size: 100% 100%
}

.carousel-control-prev-icon {
	background-image: url('data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'%23FFFFFF\' viewBox=\'0 0 8 8\'%3e%3cpath d=\'M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z\'/%3e%3c/svg%3e')
}

.carousel-control-next-icon {
	background-image: url('data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'%23FFFFFF\' viewBox=\'0 0 8 8\'%3e%3cpath d=\'M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z\'/%3e%3c/svg%3e')
}

.carousel-indicators {
	position: absolute;
	z-index: 15;
	right: 0;
	bottom: 0;
	left: 0;
	display: flex;
	margin-right: 15%;
	margin-left: 15%;
	padding-left: 0;
	list-style: none;
	justify-content: center
}

.carousel-indicators li {
	box-sizing: content-box;
	width: 30px;
	height: 3px;
	margin-right: 3px;
	margin-left: 3px;
	cursor: pointer;
	transition: opacity .6s ease;
	text-indent: -999px;
	opacity: .5;
	border-top: 10px solid transparent;
	border-bottom: 10px solid transparent;
	background-color: #fff;
	background-clip: padding-box;
	flex: 0 1 auto
}

@media screen and (prefers-reduced-motion:reduce) {
	.carousel-indicators li {
		transition: none
	}
}

.carousel-indicators .active {
	opacity: 1
}

.carousel-caption {
	position: absolute;
	z-index: 10;
	right: 15%;
	bottom: 20px;
	left: 15%;
	padding-top: 20px;
	padding-bottom: 20px;
	text-align: center;
	color: #fff
}

@keyframes spinner-border {
	to {
		transform: rotate(360deg)
	}
}

.spinner-border {
	display: inline-block;
	width: 2rem;
	height: 2rem;
	animation: spinner-border .75s linear infinite;
	vertical-align: text-bottom;
	border: .25em solid currentColor;
	border-right-color: transparent;
	border-radius: 50%
}

.spinner-border-sm {
	width: 1rem;
	height: 1rem;
	border-width: .2em
}

@keyframes spinner-grow {
	0% {
		transform: scale(0)
	}
	50% {
		opacity: 1
	}
}

.spinner-grow {
	display: inline-block;
	width: 2rem;
	height: 2rem;
	animation: spinner-grow .75s linear infinite;
	vertical-align: text-bottom;
	opacity: 0;
	border-radius: 50%;
	background-color: currentColor
}

.spinner-grow-sm {
	width: 1rem;
	height: 1rem
}

.align-baseline {
	vertical-align: baseline!important
}

.align-top {
	vertical-align: top!important
}

.align-middle {
	vertical-align: middle!important
}

.align-bottom {
	vertical-align: bottom!important
}

.align-text-bottom {
	vertical-align: text-bottom!important
}

.align-text-top {
	vertical-align: text-top!important
}

.bg-primary {
	background-color: #4c66fb!important
}

a.bg-primary:focus,
a.bg-primary:hover,
button.bg-primary:focus,
button.bg-primary:hover {
	background-color: #1a3bfa!important
}

.bg-secondary {
	background-color: #95aac9!important
}

a.bg-secondary:focus,
a.bg-secondary:hover,
button.bg-secondary:focus,
button.bg-secondary:hover {
	background-color: #738fb8!important
}

.bg-success {
	background-color: #0c9!important
}

a.bg-success:focus,
a.bg-success:hover,
button.bg-success:focus,
button.bg-success:hover {
	background-color: #009973!important
}

.bg-info {
	background-color: #19b5fe!important
}

a.bg-info:focus,
a.bg-info:hover,
button.bg-info:focus,
button.bg-info:hover {
	background-color: #019be3!important
}

.bg-warning {
	background-color: #f7bc06!important
}

a.bg-warning:focus,
a.bg-warning:hover,
button.bg-warning:focus,
button.bg-warning:hover {
	background-color: #c59605!important
}

.bg-danger {
	background-color: #f2545b!important
}

a.bg-danger:focus,
a.bg-danger:hover,
button.bg-danger:focus,
button.bg-danger:hover {
	background-color: #ee252e!important
}

.bg-light {
	background-color: #f9fbfd!important
}

a.bg-light:focus,
a.bg-light:hover,
button.bg-light:focus,
button.bg-light:hover {
	background-color: #d3e2f0!important
}

.bg-dark {
	background-color: #12263f!important
}

a.bg-dark:focus,
a.bg-dark:hover,
button.bg-dark:focus,
button.bg-dark:hover {
	background-color: #070e17!important
}

.bg-white {
	background-color: #fff!important
}

.bg-transparent {
	background-color: transparent!important
}

.border {
	border: 1px solid #dce4ec!important
}

.border-top {
	border-top: 1px solid #dce4ec!important
}

.border-right {
	border-right: 1px solid #dce4ec!important
}

.border-bottom {
	border-bottom: 1px solid #dce4ec!important
}

.border-left {
	border-left: 1px solid #dce4ec!important
}

.border-0 {
	border: 0!important
}

.border-top-0 {
	border-top: 0!important
}

.border-right-0 {
	border-right: 0!important
}

.border-bottom-0 {
	border-bottom: 0!important
}

.border-left-0 {
	border-left: 0!important
}

.border-primary {
	border-color: #4c66fb!important
}

.border-secondary {
	border-color: #95aac9!important
}

.border-success {
	border-color: #0c9!important
}

.border-info {
	border-color: #19b5fe!important
}

.border-warning {
	border-color: #f7bc06!important
}

.border-danger {
	border-color: #f2545b!important
}

.border-light {
	border-color: #f9fbfd!important
}

.border-dark {
	border-color: #12263f!important
}

.border-white {
	border-color: #fff!important
}

.rounded {
	border-radius: .25rem!important
}

.rounded-top {
	border-top-left-radius: .25rem!important;
	border-top-right-radius: .25rem!important
}

.rounded-right {
	border-top-right-radius: .25rem!important;
	border-bottom-right-radius: .25rem!important
}

.rounded-bottom {
	border-bottom-right-radius: .25rem!important;
	border-bottom-left-radius: .25rem!important
}

.rounded-left {
	border-top-left-radius: .25rem!important;
	border-bottom-left-radius: .25rem!important
}

.rounded-circle {
	border-radius: 50%!important
}

.rounded-pill {
	border-radius: 50rem!important
}

.rounded-0 {
	border-radius: 0!important
}

.clearfix::after {
	display: block;
	clear: both;
	content: ''
}

.d-none {
	display: none!important
}

.d-inline {
	display: inline!important
}

.d-inline-block {
	display: inline-block!important
}

.d-block {
	display: block!important
}

.d-table {
	display: table!important
}

.d-table-row {
	display: table-row!important
}

.d-table-cell {
	display: table-cell!important
}

.d-flex {
	display: flex!important
}

.d-inline-flex {
	display: inline-flex!important
}

@media (min-width:576px) {
	.d-sm-none {
		display: none!important
	}
	.d-sm-inline {
		display: inline!important
	}
	.d-sm-inline-block {
		display: inline-block!important
	}
	.d-sm-block {
		display: block!important
	}
	.d-sm-table {
		display: table!important
	}
	.d-sm-table-row {
		display: table-row!important
	}
	.d-sm-table-cell {
		display: table-cell!important
	}
	.d-sm-flex {
		display: flex!important
	}
	.d-sm-inline-flex {
		display: inline-flex!important
	}
}

@media (min-width:768px) {
	.d-md-none {
		display: none!important
	}
	.d-md-inline {
		display: inline!important
	}
	.d-md-inline-block {
		display: inline-block!important
	}
	.d-md-block {
		display: block!important
	}
	.d-md-table {
		display: table!important
	}
	.d-md-table-row {
		display: table-row!important
	}
	.d-md-table-cell {
		display: table-cell!important
	}
	.d-md-flex {
		display: flex!important
	}
	.d-md-inline-flex {
		display: inline-flex!important
	}
}

@media (min-width:992px) {
	.d-lg-none {
		display: none!important
	}
	.d-lg-inline {
		display: inline!important
	}
	.d-lg-inline-block {
		display: inline-block!important
	}
	.d-lg-block {
		display: block!important
	}
	.d-lg-table {
		display: table!important
	}
	.d-lg-table-row {
		display: table-row!important
	}
	.d-lg-table-cell {
		display: table-cell!important
	}
	.d-lg-flex {
		display: flex!important
	}
	.d-lg-inline-flex {
		display: inline-flex!important
	}
}

@media (min-width:1200px) {
	.d-xl-none {
		display: none!important
	}
	.d-xl-inline {
		display: inline!important
	}
	.d-xl-inline-block {
		display: inline-block!important
	}
	.d-xl-block {
		display: block!important
	}
	.d-xl-table {
		display: table!important
	}
	.d-xl-table-row {
		display: table-row!important
	}
	.d-xl-table-cell {
		display: table-cell!important
	}
	.d-xl-flex {
		display: flex!important
	}
	.d-xl-inline-flex {
		display: inline-flex!important
	}
}

@media print {
	.d-print-none {
		display: none!important
	}
	.d-print-inline {
		display: inline!important
	}
	.d-print-inline-block {
		display: inline-block!important
	}
	.d-print-block {
		display: block!important
	}
	.d-print-table {
		display: table!important
	}
	.d-print-table-row {
		display: table-row!important
	}
	.d-print-table-cell {
		display: table-cell!important
	}
	.d-print-flex {
		display: flex!important
	}
	.d-print-inline-flex {
		display: inline-flex!important
	}
}

.embed-responsive {
	position: relative;
	display: block;
	overflow: hidden;
	width: 100%;
	padding: 0
}

.embed-responsive::before {
	display: block;
	content: ''
}

.embed-responsive .embed-responsive-item,
.embed-responsive embed,
.embed-responsive iframe,
.embed-responsive object,
.embed-responsive video {
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border: 0
}

.embed-responsive-21by9::before {
	padding-top: 42.85714%
}

.embed-responsive-16by9::before {
	padding-top: 56.25%
}

.embed-responsive-3by4::before {
	padding-top: 133.33333%
}

.embed-responsive-1by1::before {
	padding-top: 100%
}

.flex-row {
	flex-direction: row!important
}

.flex-column {
	flex-direction: column!important
}

.flex-row-reverse {
	flex-direction: row-reverse!important
}

.flex-column-reverse {
	flex-direction: column-reverse!important
}

.flex-wrap {
	flex-wrap: wrap!important
}

.flex-nowrap {
	flex-wrap: nowrap!important
}

.flex-wrap-reverse {
	flex-wrap: wrap-reverse!important
}

.flex-fill {
	flex: 1 1 auto!important
}

.flex-grow-0 {
	flex-grow: 0!important
}

.flex-grow-1 {
	flex-grow: 1!important
}

.flex-shrink-0 {
	flex-shrink: 0!important
}

.flex-shrink-1 {
	flex-shrink: 1!important
}

.justify-content-start {
	justify-content: flex-start!important
}

.justify-content-end {
	justify-content: flex-end!important
}

.justify-content-center {
	justify-content: center!important
}

.justify-content-between {
	justify-content: space-between!important
}

.justify-content-around {
	justify-content: space-around!important
}

.align-items-start {
	align-items: flex-start!important
}

.align-items-end {
	align-items: flex-end!important
}

.align-items-center {
	align-items: center!important
}

.align-items-baseline {
	align-items: baseline!important
}

.align-items-stretch {
	align-items: stretch!important
}

.align-content-start {
	align-content: flex-start!important
}

.align-content-end {
	align-content: flex-end!important
}

.align-content-center {
	align-content: center!important
}

.align-content-between {
	align-content: space-between!important
}

.align-content-around {
	align-content: space-around!important
}

.align-content-stretch {
	align-content: stretch!important
}

.align-self-auto {
	align-self: auto!important
}

.align-self-start {
	align-self: flex-start!important
}

.align-self-end {
	align-self: flex-end!important
}

.align-self-center {
	align-self: center!important
}

.align-self-baseline {
	align-self: baseline!important
}

.align-self-stretch {
	align-self: stretch!important
}

@media (min-width:576px) {
	.flex-sm-row {
		flex-direction: row!important
	}
	.flex-sm-column {
		flex-direction: column!important
	}
	.flex-sm-row-reverse {
		flex-direction: row-reverse!important
	}
	.flex-sm-column-reverse {
		flex-direction: column-reverse!important
	}
	.flex-sm-wrap {
		flex-wrap: wrap!important
	}
	.flex-sm-nowrap {
		flex-wrap: nowrap!important
	}
	.flex-sm-wrap-reverse {
		flex-wrap: wrap-reverse!important
	}
	.flex-sm-fill {
		flex: 1 1 auto!important
	}
	.flex-sm-grow-0 {
		flex-grow: 0!important
	}
	.flex-sm-grow-1 {
		flex-grow: 1!important
	}
	.flex-sm-shrink-0 {
		flex-shrink: 0!important
	}
	.flex-sm-shrink-1 {
		flex-shrink: 1!important
	}
	.justify-content-sm-start {
		justify-content: flex-start!important
	}
	.justify-content-sm-end {
		justify-content: flex-end!important
	}
	.justify-content-sm-center {
		justify-content: center!important
	}
	.justify-content-sm-between {
		justify-content: space-between!important
	}
	.justify-content-sm-around {
		justify-content: space-around!important
	}
	.align-items-sm-start {
		align-items: flex-start!important
	}
	.align-items-sm-end {
		align-items: flex-end!important
	}
	.align-items-sm-center {
		align-items: center!important
	}
	.align-items-sm-baseline {
		align-items: baseline!important
	}
	.align-items-sm-stretch {
		align-items: stretch!important
	}
	.align-content-sm-start {
		align-content: flex-start!important
	}
	.align-content-sm-end {
		align-content: flex-end!important
	}
	.align-content-sm-center {
		align-content: center!important
	}
	.align-content-sm-between {
		align-content: space-between!important
	}
	.align-content-sm-around {
		align-content: space-around!important
	}
	.align-content-sm-stretch {
		align-content: stretch!important
	}
	.align-self-sm-auto {
		align-self: auto!important
	}
	.align-self-sm-start {
		align-self: flex-start!important
	}
	.align-self-sm-end {
		align-self: flex-end!important
	}
	.align-self-sm-center {
		align-self: center!important
	}
	.align-self-sm-baseline {
		align-self: baseline!important
	}
	.align-self-sm-stretch {
		align-self: stretch!important
	}
}

@media (min-width:768px) {
	.flex-md-row {
		flex-direction: row!important
	}
	.flex-md-column {
		flex-direction: column!important
	}
	.flex-md-row-reverse {
		flex-direction: row-reverse!important
	}
	.flex-md-column-reverse {
		flex-direction: column-reverse!important
	}
	.flex-md-wrap {
		flex-wrap: wrap!important
	}
	.flex-md-nowrap {
		flex-wrap: nowrap!important
	}
	.flex-md-wrap-reverse {
		flex-wrap: wrap-reverse!important
	}
	.flex-md-fill {
		flex: 1 1 auto!important
	}
	.flex-md-grow-0 {
		flex-grow: 0!important
	}
	.flex-md-grow-1 {
		flex-grow: 1!important
	}
	.flex-md-shrink-0 {
		flex-shrink: 0!important
	}
	.flex-md-shrink-1 {
		flex-shrink: 1!important
	}
	.justify-content-md-start {
		justify-content: flex-start!important
	}
	.justify-content-md-end {
		justify-content: flex-end!important
	}
	.justify-content-md-center {
		justify-content: center!important
	}
	.justify-content-md-between {
		justify-content: space-between!important
	}
	.justify-content-md-around {
		justify-content: space-around!important
	}
	.align-items-md-start {
		align-items: flex-start!important
	}
	.align-items-md-end {
		align-items: flex-end!important
	}
	.align-items-md-center {
		align-items: center!important
	}
	.align-items-md-baseline {
		align-items: baseline!important
	}
	.align-items-md-stretch {
		align-items: stretch!important
	}
	.align-content-md-start {
		align-content: flex-start!important
	}
	.align-content-md-end {
		align-content: flex-end!important
	}
	.align-content-md-center {
		align-content: center!important
	}
	.align-content-md-between {
		align-content: space-between!important
	}
	.align-content-md-around {
		align-content: space-around!important
	}
	.align-content-md-stretch {
		align-content: stretch!important
	}
	.align-self-md-auto {
		align-self: auto!important
	}
	.align-self-md-start {
		align-self: flex-start!important
	}
	.align-self-md-end {
		align-self: flex-end!important
	}
	.align-self-md-center {
		align-self: center!important
	}
	.align-self-md-baseline {
		align-self: baseline!important
	}
	.align-self-md-stretch {
		align-self: stretch!important
	}
}

@media (min-width:992px) {
	.flex-lg-row {
		flex-direction: row!important
	}
	.flex-lg-column {
		flex-direction: column!important
	}
	.flex-lg-row-reverse {
		flex-direction: row-reverse!important
	}
	.flex-lg-column-reverse {
		flex-direction: column-reverse!important
	}
	.flex-lg-wrap {
		flex-wrap: wrap!important
	}
	.flex-lg-nowrap {
		flex-wrap: nowrap!important
	}
	.flex-lg-wrap-reverse {
		flex-wrap: wrap-reverse!important
	}
	.flex-lg-fill {
		flex: 1 1 auto!important
	}
	.flex-lg-grow-0 {
		flex-grow: 0!important
	}
	.flex-lg-grow-1 {
		flex-grow: 1!important
	}
	.flex-lg-shrink-0 {
		flex-shrink: 0!important
	}
	.flex-lg-shrink-1 {
		flex-shrink: 1!important
	}
	.justify-content-lg-start {
		justify-content: flex-start!important
	}
	.justify-content-lg-end {
		justify-content: flex-end!important
	}
	.justify-content-lg-center {
		justify-content: center!important
	}
	.justify-content-lg-between {
		justify-content: space-between!important
	}
	.justify-content-lg-around {
		justify-content: space-around!important
	}
	.align-items-lg-start {
		align-items: flex-start!important
	}
	.align-items-lg-end {
		align-items: flex-end!important
	}
	.align-items-lg-center {
		align-items: center!important
	}
	.align-items-lg-baseline {
		align-items: baseline!important
	}
	.align-items-lg-stretch {
		align-items: stretch!important
	}
	.align-content-lg-start {
		align-content: flex-start!important
	}
	.align-content-lg-end {
		align-content: flex-end!important
	}
	.align-content-lg-center {
		align-content: center!important
	}
	.align-content-lg-between {
		align-content: space-between!important
	}
	.align-content-lg-around {
		align-content: space-around!important
	}
	.align-content-lg-stretch {
		align-content: stretch!important
	}
	.align-self-lg-auto {
		align-self: auto!important
	}
	.align-self-lg-start {
		align-self: flex-start!important
	}
	.align-self-lg-end {
		align-self: flex-end!important
	}
	.align-self-lg-center {
		align-self: center!important
	}
	.align-self-lg-baseline {
		align-self: baseline!important
	}
	.align-self-lg-stretch {
		align-self: stretch!important
	}
}

@media (min-width:1200px) {
	.flex-xl-row {
		flex-direction: row!important
	}
	.flex-xl-column {
		flex-direction: column!important
	}
	.flex-xl-row-reverse {
		flex-direction: row-reverse!important
	}
	.flex-xl-column-reverse {
		flex-direction: column-reverse!important
	}
	.flex-xl-wrap {
		flex-wrap: wrap!important
	}
	.flex-xl-nowrap {
		flex-wrap: nowrap!important
	}
	.flex-xl-wrap-reverse {
		flex-wrap: wrap-reverse!important
	}
	.flex-xl-fill {
		flex: 1 1 auto!important
	}
	.flex-xl-grow-0 {
		flex-grow: 0!important
	}
	.flex-xl-grow-1 {
		flex-grow: 1!important
	}
	.flex-xl-shrink-0 {
		flex-shrink: 0!important
	}
	.flex-xl-shrink-1 {
		flex-shrink: 1!important
	}
	.justify-content-xl-start {
		justify-content: flex-start!important
	}
	.justify-content-xl-end {
		justify-content: flex-end!important
	}
	.justify-content-xl-center {
		justify-content: center!important
	}
	.justify-content-xl-between {
		justify-content: space-between!important
	}
	.justify-content-xl-around {
		justify-content: space-around!important
	}
	.align-items-xl-start {
		align-items: flex-start!important
	}
	.align-items-xl-end {
		align-items: flex-end!important
	}
	.align-items-xl-center {
		align-items: center!important
	}
	.align-items-xl-baseline {
		align-items: baseline!important
	}
	.align-items-xl-stretch {
		align-items: stretch!important
	}
	.align-content-xl-start {
		align-content: flex-start!important
	}
	.align-content-xl-end {
		align-content: flex-end!important
	}
	.align-content-xl-center {
		align-content: center!important
	}
	.align-content-xl-between {
		align-content: space-between!important
	}
	.align-content-xl-around {
		align-content: space-around!important
	}
	.align-content-xl-stretch {
		align-content: stretch!important
	}
	.align-self-xl-auto {
		align-self: auto!important
	}
	.align-self-xl-start {
		align-self: flex-start!important
	}
	.align-self-xl-end {
		align-self: flex-end!important
	}
	.align-self-xl-center {
		align-self: center!important
	}
	.align-self-xl-baseline {
		align-self: baseline!important
	}
	.align-self-xl-stretch {
		align-self: stretch!important
	}
}

.float-left {
	float: left!important
}

.float-right {
	float: right!important
}

.float-none {
	float: none!important
}

@media (min-width:576px) {
	.float-sm-left {
		float: left!important
	}
	.float-sm-right {
		float: right!important
	}
	.float-sm-none {
		float: none!important
	}
}

@media (min-width:768px) {
	.float-md-left {
		float: left!important
	}
	.float-md-right {
		float: right!important
	}
	.float-md-none {
		float: none!important
	}
}

@media (min-width:992px) {
	.float-lg-left {
		float: left!important
	}
	.float-lg-right {
		float: right!important
	}
	.float-lg-none {
		float: none!important
	}
}

@media (min-width:1200px) {
	.float-xl-left {
		float: left!important
	}
	.float-xl-right {
		float: right!important
	}
	.float-xl-none {
		float: none!important
	}
}

.overflow-auto {
	overflow: auto!important
}

.overflow-hidden {
	overflow: hidden!important
}

.position-static {
	position: static!important
}

.position-relative {
	position: relative!important
}

.position-absolute {
	position: absolute!important
}

.position-fixed {
	position: fixed!important
}

.position-sticky {
	position: -webkit-sticky!important;
	position: sticky!important
}

.fixed-top {
	position: fixed;
	z-index: 1030;
	top: 0;
	right: 0;
	left: 0
}

.fixed-bottom {
	position: fixed;
	z-index: 1030;
	right: 0;
	bottom: 0;
	left: 0
}

@supports ((position:-webkit-sticky) or (position:sticky)) {
	.sticky-top {
		position: -webkit-sticky;
		position: sticky;
		z-index: 1020;
		top: 0
	}
}

.sr-only {
	position: absolute;
	overflow: hidden;
	clip: rect(0, 0, 0, 0);
	width: 1px;
	height: 1px;
	padding: 0;
	white-space: nowrap;
	border: 0
}

.sr-only-focusable:active,
.sr-only-focusable:focus {
	position: static;
	overflow: visible;
	clip: auto;
	width: auto;
	height: auto;
	white-space: normal
}

.shadow-sm {
	box-shadow: 0 5px 12px rgba(126, 142, 177, .2)!important
}

.shadow {
	box-shadow: 0 2px 4px rgba(126, 142, 177, .12)!important
}

.shadow-lg {
	box-shadow: 0 18px 35px rgba(50, 50, 93, .1), -1px 0 15px rgba(0, 0, 0, .07)!important
}

.shadow-none {
	box-shadow: none!important
}

.w-25 {
	width: 25%!important
}

.w-50 {
	width: 50%!important
}

.w-75 {
	width: 75%!important
}

.w-100 {
	width: 100%!important
}

.w-auto {
	width: auto!important
}

.h-25 {
	height: 25%!important
}

.h-50 {
	height: 50%!important
}

.h-75 {
	height: 75%!important
}

.h-100 {
	height: 100%!important
}

.h-auto {
	height: auto!important
}

.mw-100 {
	max-width: 100%!important
}

.mh-100 {
	max-height: 100%!important
}

.min-vw-100 {
	min-width: 100vw!important
}

.min-vh-100 {
	min-height: 100vh!important
}

.vw-100 {
	width: 100vw!important
}

.vh-100 {
	height: 100vh!important
}

.m-0 {
	margin: 0!important
}

.mt-0,
.my-0 {
	margin-top: 0!important
}

.mr-0,
.mx-0 {
	margin-right: 0!important
}

.mb-0,
.my-0 {
	margin-bottom: 0!important
}

.ml-0,
.mx-0 {
	margin-left: 0!important
}

.m-1 {
	margin: .25rem!important
}

.mt-1,
.my-1 {
	margin-top: .25rem!important
}

.mr-1,
.mx-1 {
	margin-right: .25rem!important
}

.mb-1,
.my-1 {
	margin-bottom: .25rem!important
}

.ml-1,
.mx-1 {
	margin-left: .25rem!important
}

.m-2 {
	margin: .5rem!important
}

.mt-2,
.my-2 {
	margin-top: .5rem!important
}

.mr-2,
.mx-2 {
	margin-right: .5rem!important
}

.mb-2,
.my-2 {
	margin-bottom: .5rem!important
}

.ml-2,
.mx-2 {
	margin-left: .5rem!important
}

.m-3 {
	margin: 1rem!important
}

.mt-3,
.my-3 {
	margin-top: 1rem!important
}

.mr-3,
.mx-3 {
	margin-right: 1rem!important
}

.mb-3,
.my-3 {
	margin-bottom: 1rem!important
}

.ml-3,
.mx-3 {
	margin-left: 1rem!important
}

.m-4 {
	margin: 1.5rem!important
}

.mt-4,
.my-4 {
	margin-top: 1.5rem!important
}

.mr-4,
.mx-4 {
	margin-right: 1.5rem!important
}

.mb-4,
.my-4 {
	margin-bottom: 1.5rem!important
}

.ml-4,
.mx-4 {
	margin-left: 1.5rem!important
}

.m-5 {
	margin: 3rem!important
}

.mt-5,
.my-5 {
	margin-top: 3rem!important
}

.mr-5,
.mx-5 {
	margin-right: 3rem!important
}

.mb-5,
.my-5 {
	margin-bottom: 3rem!important
}

.ml-5,
.mx-5 {
	margin-left: 3rem!important
}

.p-0 {
	padding: 0!important
}

.pt-0,
.py-0 {
	padding-top: 0!important
}

.pr-0,
.px-0 {
	padding-right: 0!important
}

.pb-0,
.py-0 {
	padding-bottom: 0!important
}

.pl-0,
.px-0 {
	padding-left: 0!important
}

.p-1 {
	padding: .25rem!important
}

.pt-1,
.py-1 {
	padding-top: .25rem!important
}

.pr-1,
.px-1 {
	padding-right: .25rem!important
}

.pb-1,
.py-1 {
	padding-bottom: .25rem!important
}

.pl-1,
.px-1 {
	padding-left: .25rem!important
}

.p-2 {
	padding: .5rem!important
}

.pt-2,
.py-2 {
	padding-top: .5rem!important
}

.pr-2,
.px-2 {
	padding-right: .5rem!important
}

.pb-2,
.py-2 {
	padding-bottom: .5rem!important
}

.pl-2,
.px-2 {
	padding-left: .5rem!important
}

.p-3 {
	padding: 1rem!important
}

.pt-3,
.py-3 {
	padding-top: 1rem!important
}

.pr-3,
.px-3 {
	padding-right: 1rem!important
}

.pb-3,
.py-3 {
	padding-bottom: 1rem!important
}

.pl-3,
.px-3 {
	padding-left: 1rem!important
}

.p-4 {
	padding: 1.5rem!important
}

.pt-4,
.py-4 {
	padding-top: 1.5rem!important
}

.pr-4,
.px-4 {
	padding-right: 1.5rem!important
}

.pb-4,
.py-4 {
	padding-bottom: 1.5rem!important
}

.pl-4,
.px-4 {
	padding-left: 1.5rem!important
}

.p-5 {
	padding: 3rem!important
}

.pt-5,
.py-5 {
	padding-top: 3rem!important
}

.pr-5,
.px-5 {
	padding-right: 3rem!important
}

.pb-5,
.py-5 {
	padding-bottom: 3rem!important
}

.pl-5,
.px-5 {
	padding-left: 3rem!important
}

.m-n1 {
	margin: -.25rem!important
}

.mt-n1,
.my-n1 {
	margin-top: -.25rem!important
}

.mr-n1,
.mx-n1 {
	margin-right: -.25rem!important
}

.mb-n1,
.my-n1 {
	margin-bottom: -.25rem!important
}

.ml-n1,
.mx-n1 {
	margin-left: -.25rem!important
}

.m-n2 {
	margin: -.5rem!important
}

.mt-n2,
.my-n2 {
	margin-top: -.5rem!important
}

.mr-n2,
.mx-n2 {
	margin-right: -.5rem!important
}

.mb-n2,
.my-n2 {
	margin-bottom: -.5rem!important
}

.ml-n2,
.mx-n2 {
	margin-left: -.5rem!important
}

.m-n3 {
	margin: -1rem!important
}

.mt-n3,
.my-n3 {
	margin-top: -1rem!important
}

.mr-n3,
.mx-n3 {
	margin-right: -1rem!important
}

.mb-n3,
.my-n3 {
	margin-bottom: -1rem!important
}

.ml-n3,
.mx-n3 {
	margin-left: -1rem!important
}

.m-n4 {
	margin: -1.5rem!important
}

.mt-n4,
.my-n4 {
	margin-top: -1.5rem!important
}

.mr-n4,
.mx-n4 {
	margin-right: -1.5rem!important
}

.mb-n4,
.my-n4 {
	margin-bottom: -1.5rem!important
}

.ml-n4,
.mx-n4 {
	margin-left: -1.5rem!important
}

.m-n5 {
	margin: -3rem!important
}

.mt-n5,
.my-n5 {
	margin-top: -3rem!important
}

.mr-n5,
.mx-n5 {
	margin-right: -3rem!important
}

.mb-n5,
.my-n5 {
	margin-bottom: -3rem!important
}

.ml-n5,
.mx-n5 {
	margin-left: -3rem!important
}

.m-auto {
	margin: auto!important
}

.mt-auto,
.my-auto {
	margin-top: auto!important
}

.mr-auto,
.mx-auto {
	margin-right: auto!important
}

.mb-auto,
.my-auto {
	margin-bottom: auto!important
}

.ml-auto,
.mx-auto {
	margin-left: auto!important
}

@media (min-width:576px) {
	.m-sm-0 {
		margin: 0!important
	}
	.mt-sm-0,
	.my-sm-0 {
		margin-top: 0!important
	}
	.mr-sm-0,
	.mx-sm-0 {
		margin-right: 0!important
	}
	.mb-sm-0,
	.my-sm-0 {
		margin-bottom: 0!important
	}
	.ml-sm-0,
	.mx-sm-0 {
		margin-left: 0!important
	}
	.m-sm-1 {
		margin: .25rem!important
	}
	.mt-sm-1,
	.my-sm-1 {
		margin-top: .25rem!important
	}
	.mr-sm-1,
	.mx-sm-1 {
		margin-right: .25rem!important
	}
	.mb-sm-1,
	.my-sm-1 {
		margin-bottom: .25rem!important
	}
	.ml-sm-1,
	.mx-sm-1 {
		margin-left: .25rem!important
	}
	.m-sm-2 {
		margin: .5rem!important
	}
	.mt-sm-2,
	.my-sm-2 {
		margin-top: .5rem!important
	}
	.mr-sm-2,
	.mx-sm-2 {
		margin-right: .5rem!important
	}
	.mb-sm-2,
	.my-sm-2 {
		margin-bottom: .5rem!important
	}
	.ml-sm-2,
	.mx-sm-2 {
		margin-left: .5rem!important
	}
	.m-sm-3 {
		margin: 1rem!important
	}
	.mt-sm-3,
	.my-sm-3 {
		margin-top: 1rem!important
	}
	.mr-sm-3,
	.mx-sm-3 {
		margin-right: 1rem!important
	}
	.mb-sm-3,
	.my-sm-3 {
		margin-bottom: 1rem!important
	}
	.ml-sm-3,
	.mx-sm-3 {
		margin-left: 1rem!important
	}
	.m-sm-4 {
		margin: 1.5rem!important
	}
	.mt-sm-4,
	.my-sm-4 {
		margin-top: 1.5rem!important
	}
	.mr-sm-4,
	.mx-sm-4 {
		margin-right: 1.5rem!important
	}
	.mb-sm-4,
	.my-sm-4 {
		margin-bottom: 1.5rem!important
	}
	.ml-sm-4,
	.mx-sm-4 {
		margin-left: 1.5rem!important
	}
	.m-sm-5 {
		margin: 3rem!important
	}
	.mt-sm-5,
	.my-sm-5 {
		margin-top: 3rem!important
	}
	.mr-sm-5,
	.mx-sm-5 {
		margin-right: 3rem!important
	}
	.mb-sm-5,
	.my-sm-5 {
		margin-bottom: 3rem!important
	}
	.ml-sm-5,
	.mx-sm-5 {
		margin-left: 3rem!important
	}
	.p-sm-0 {
		padding: 0!important
	}
	.pt-sm-0,
	.py-sm-0 {
		padding-top: 0!important
	}
	.pr-sm-0,
	.px-sm-0 {
		padding-right: 0!important
	}
	.pb-sm-0,
	.py-sm-0 {
		padding-bottom: 0!important
	}
	.pl-sm-0,
	.px-sm-0 {
		padding-left: 0!important
	}
	.p-sm-1 {
		padding: .25rem!important
	}
	.pt-sm-1,
	.py-sm-1 {
		padding-top: .25rem!important
	}
	.pr-sm-1,
	.px-sm-1 {
		padding-right: .25rem!important
	}
	.pb-sm-1,
	.py-sm-1 {
		padding-bottom: .25rem!important
	}
	.pl-sm-1,
	.px-sm-1 {
		padding-left: .25rem!important
	}
	.p-sm-2 {
		padding: .5rem!important
	}
	.pt-sm-2,
	.py-sm-2 {
		padding-top: .5rem!important
	}
	.pr-sm-2,
	.px-sm-2 {
		padding-right: .5rem!important
	}
	.pb-sm-2,
	.py-sm-2 {
		padding-bottom: .5rem!important
	}
	.pl-sm-2,
	.px-sm-2 {
		padding-left: .5rem!important
	}
	.p-sm-3 {
		padding: 1rem!important
	}
	.pt-sm-3,
	.py-sm-3 {
		padding-top: 1rem!important
	}
	.pr-sm-3,
	.px-sm-3 {
		padding-right: 1rem!important
	}
	.pb-sm-3,
	.py-sm-3 {
		padding-bottom: 1rem!important
	}
	.pl-sm-3,
	.px-sm-3 {
		padding-left: 1rem!important
	}
	.p-sm-4 {
		padding: 1.5rem!important
	}
	.pt-sm-4,
	.py-sm-4 {
		padding-top: 1.5rem!important
	}
	.pr-sm-4,
	.px-sm-4 {
		padding-right: 1.5rem!important
	}
	.pb-sm-4,
	.py-sm-4 {
		padding-bottom: 1.5rem!important
	}
	.pl-sm-4,
	.px-sm-4 {
		padding-left: 1.5rem!important
	}
	.p-sm-5 {
		padding: 3rem!important
	}
	.pt-sm-5,
	.py-sm-5 {
		padding-top: 3rem!important
	}
	.pr-sm-5,
	.px-sm-5 {
		padding-right: 3rem!important
	}
	.pb-sm-5,
	.py-sm-5 {
		padding-bottom: 3rem!important
	}
	.pl-sm-5,
	.px-sm-5 {
		padding-left: 3rem!important
	}
	.m-sm-n1 {
		margin: -.25rem!important
	}
	.mt-sm-n1,
	.my-sm-n1 {
		margin-top: -.25rem!important
	}
	.mr-sm-n1,
	.mx-sm-n1 {
		margin-right: -.25rem!important
	}
	.mb-sm-n1,
	.my-sm-n1 {
		margin-bottom: -.25rem!important
	}
	.ml-sm-n1,
	.mx-sm-n1 {
		margin-left: -.25rem!important
	}
	.m-sm-n2 {
		margin: -.5rem!important
	}
	.mt-sm-n2,
	.my-sm-n2 {
		margin-top: -.5rem!important
	}
	.mr-sm-n2,
	.mx-sm-n2 {
		margin-right: -.5rem!important
	}
	.mb-sm-n2,
	.my-sm-n2 {
		margin-bottom: -.5rem!important
	}
	.ml-sm-n2,
	.mx-sm-n2 {
		margin-left: -.5rem!important
	}
	.m-sm-n3 {
		margin: -1rem!important
	}
	.mt-sm-n3,
	.my-sm-n3 {
		margin-top: -1rem!important
	}
	.mr-sm-n3,
	.mx-sm-n3 {
		margin-right: -1rem!important
	}
	.mb-sm-n3,
	.my-sm-n3 {
		margin-bottom: -1rem!important
	}
	.ml-sm-n3,
	.mx-sm-n3 {
		margin-left: -1rem!important
	}
	.m-sm-n4 {
		margin: -1.5rem!important
	}
	.mt-sm-n4,
	.my-sm-n4 {
		margin-top: -1.5rem!important
	}
	.mr-sm-n4,
	.mx-sm-n4 {
		margin-right: -1.5rem!important
	}
	.mb-sm-n4,
	.my-sm-n4 {
		margin-bottom: -1.5rem!important
	}
	.ml-sm-n4,
	.mx-sm-n4 {
		margin-left: -1.5rem!important
	}
	.m-sm-n5 {
		margin: -3rem!important
	}
	.mt-sm-n5,
	.my-sm-n5 {
		margin-top: -3rem!important
	}
	.mr-sm-n5,
	.mx-sm-n5 {
		margin-right: -3rem!important
	}
	.mb-sm-n5,
	.my-sm-n5 {
		margin-bottom: -3rem!important
	}
	.ml-sm-n5,
	.mx-sm-n5 {
		margin-left: -3rem!important
	}
	.m-sm-auto {
		margin: auto!important
	}
	.mt-sm-auto,
	.my-sm-auto {
		margin-top: auto!important
	}
	.mr-sm-auto,
	.mx-sm-auto {
		margin-right: auto!important
	}
	.mb-sm-auto,
	.my-sm-auto {
		margin-bottom: auto!important
	}
	.ml-sm-auto,
	.mx-sm-auto {
		margin-left: auto!important
	}
}

@media (min-width:768px) {
	.m-md-0 {
		margin: 0!important
	}
	.mt-md-0,
	.my-md-0 {
		margin-top: 0!important
	}
	.mr-md-0,
	.mx-md-0 {
		margin-right: 0!important
	}
	.mb-md-0,
	.my-md-0 {
		margin-bottom: 0!important
	}
	.ml-md-0,
	.mx-md-0 {
		margin-left: 0!important
	}
	.m-md-1 {
		margin: .25rem!important
	}
	.mt-md-1,
	.my-md-1 {
		margin-top: .25rem!important
	}
	.mr-md-1,
	.mx-md-1 {
		margin-right: .25rem!important
	}
	.mb-md-1,
	.my-md-1 {
		margin-bottom: .25rem!important
	}
	.ml-md-1,
	.mx-md-1 {
		margin-left: .25rem!important
	}
	.m-md-2 {
		margin: .5rem!important
	}
	.mt-md-2,
	.my-md-2 {
		margin-top: .5rem!important
	}
	.mr-md-2,
	.mx-md-2 {
		margin-right: .5rem!important
	}
	.mb-md-2,
	.my-md-2 {
		margin-bottom: .5rem!important
	}
	.ml-md-2,
	.mx-md-2 {
		margin-left: .5rem!important
	}
	.m-md-3 {
		margin: 1rem!important
	}
	.mt-md-3,
	.my-md-3 {
		margin-top: 1rem!important
	}
	.mr-md-3,
	.mx-md-3 {
		margin-right: 1rem!important
	}
	.mb-md-3,
	.my-md-3 {
		margin-bottom: 1rem!important
	}
	.ml-md-3,
	.mx-md-3 {
		margin-left: 1rem!important
	}
	.m-md-4 {
		margin: 1.5rem!important
	}
	.mt-md-4,
	.my-md-4 {
		margin-top: 1.5rem!important
	}
	.mr-md-4,
	.mx-md-4 {
		margin-right: 1.5rem!important
	}
	.mb-md-4,
	.my-md-4 {
		margin-bottom: 1.5rem!important
	}
	.ml-md-4,
	.mx-md-4 {
		margin-left: 1.5rem!important
	}
	.m-md-5 {
		margin: 3rem!important
	}
	.mt-md-5,
	.my-md-5 {
		margin-top: 3rem!important
	}
	.mr-md-5,
	.mx-md-5 {
		margin-right: 3rem!important
	}
	.mb-md-5,
	.my-md-5 {
		margin-bottom: 3rem!important
	}
	.ml-md-5,
	.mx-md-5 {
		margin-left: 3rem!important
	}
	.p-md-0 {
		padding: 0!important
	}
	.pt-md-0,
	.py-md-0 {
		padding-top: 0!important
	}
	.pr-md-0,
	.px-md-0 {
		padding-right: 0!important
	}
	.pb-md-0,
	.py-md-0 {
		padding-bottom: 0!important
	}
	.pl-md-0,
	.px-md-0 {
		padding-left: 0!important
	}
	.p-md-1 {
		padding: .25rem!important
	}
	.pt-md-1,
	.py-md-1 {
		padding-top: .25rem!important
	}
	.pr-md-1,
	.px-md-1 {
		padding-right: .25rem!important
	}
	.pb-md-1,
	.py-md-1 {
		padding-bottom: .25rem!important
	}
	.pl-md-1,
	.px-md-1 {
		padding-left: .25rem!important
	}
	.p-md-2 {
		padding: .5rem!important
	}
	.pt-md-2,
	.py-md-2 {
		padding-top: .5rem!important
	}
	.pr-md-2,
	.px-md-2 {
		padding-right: .5rem!important
	}
	.pb-md-2,
	.py-md-2 {
		padding-bottom: .5rem!important
	}
	.pl-md-2,
	.px-md-2 {
		padding-left: .5rem!important
	}
	.p-md-3 {
		padding: 1rem!important
	}
	.pt-md-3,
	.py-md-3 {
		padding-top: 1rem!important
	}
	.pr-md-3,
	.px-md-3 {
		padding-right: 1rem!important
	}
	.pb-md-3,
	.py-md-3 {
		padding-bottom: 1rem!important
	}
	.pl-md-3,
	.px-md-3 {
		padding-left: 1rem!important
	}
	.p-md-4 {
		padding: 1.5rem!important
	}
	.pt-md-4,
	.py-md-4 {
		padding-top: 1.5rem!important
	}
	.pr-md-4,
	.px-md-4 {
		padding-right: 1.5rem!important
	}
	.pb-md-4,
	.py-md-4 {
		padding-bottom: 1.5rem!important
	}
	.pl-md-4,
	.px-md-4 {
		padding-left: 1.5rem!important
	}
	.p-md-5 {
		padding: 3rem!important
	}
	.pt-md-5,
	.py-md-5 {
		padding-top: 3rem!important
	}
	.pr-md-5,
	.px-md-5 {
		padding-right: 3rem!important
	}
	.pb-md-5,
	.py-md-5 {
		padding-bottom: 3rem!important
	}
	.pl-md-5,
	.px-md-5 {
		padding-left: 3rem!important
	}
	.m-md-n1 {
		margin: -.25rem!important
	}
	.mt-md-n1,
	.my-md-n1 {
		margin-top: -.25rem!important
	}
	.mr-md-n1,
	.mx-md-n1 {
		margin-right: -.25rem!important
	}
	.mb-md-n1,
	.my-md-n1 {
		margin-bottom: -.25rem!important
	}
	.ml-md-n1,
	.mx-md-n1 {
		margin-left: -.25rem!important
	}
	.m-md-n2 {
		margin: -.5rem!important
	}
	.mt-md-n2,
	.my-md-n2 {
		margin-top: -.5rem!important
	}
	.mr-md-n2,
	.mx-md-n2 {
		margin-right: -.5rem!important
	}
	.mb-md-n2,
	.my-md-n2 {
		margin-bottom: -.5rem!important
	}
	.ml-md-n2,
	.mx-md-n2 {
		margin-left: -.5rem!important
	}
	.m-md-n3 {
		margin: -1rem!important
	}
	.mt-md-n3,
	.my-md-n3 {
		margin-top: -1rem!important
	}
	.mr-md-n3,
	.mx-md-n3 {
		margin-right: -1rem!important
	}
	.mb-md-n3,
	.my-md-n3 {
		margin-bottom: -1rem!important
	}
	.ml-md-n3,
	.mx-md-n3 {
		margin-left: -1rem!important
	}
	.m-md-n4 {
		margin: -1.5rem!important
	}
	.mt-md-n4,
	.my-md-n4 {
		margin-top: -1.5rem!important
	}
	.mr-md-n4,
	.mx-md-n4 {
		margin-right: -1.5rem!important
	}
	.mb-md-n4,
	.my-md-n4 {
		margin-bottom: -1.5rem!important
	}
	.ml-md-n4,
	.mx-md-n4 {
		margin-left: -1.5rem!important
	}
	.m-md-n5 {
		margin: -3rem!important
	}
	.mt-md-n5,
	.my-md-n5 {
		margin-top: -3rem!important
	}
	.mr-md-n5,
	.mx-md-n5 {
		margin-right: -3rem!important
	}
	.mb-md-n5,
	.my-md-n5 {
		margin-bottom: -3rem!important
	}
	.ml-md-n5,
	.mx-md-n5 {
		margin-left: -3rem!important
	}
	.m-md-auto {
		margin: auto!important
	}
	.mt-md-auto,
	.my-md-auto {
		margin-top: auto!important
	}
	.mr-md-auto,
	.mx-md-auto {
		margin-right: auto!important
	}
	.mb-md-auto,
	.my-md-auto {
		margin-bottom: auto!important
	}
	.ml-md-auto,
	.mx-md-auto {
		margin-left: auto!important
	}
}

@media (min-width:992px) {
	.m-lg-0 {
		margin: 0!important
	}
	.mt-lg-0,
	.my-lg-0 {
		margin-top: 0!important
	}
	.mr-lg-0,
	.mx-lg-0 {
		margin-right: 0!important
	}
	.mb-lg-0,
	.my-lg-0 {
		margin-bottom: 0!important
	}
	.ml-lg-0,
	.mx-lg-0 {
		margin-left: 0!important
	}
	.m-lg-1 {
		margin: .25rem!important
	}
	.mt-lg-1,
	.my-lg-1 {
		margin-top: .25rem!important
	}
	.mr-lg-1,
	.mx-lg-1 {
		margin-right: .25rem!important
	}
	.mb-lg-1,
	.my-lg-1 {
		margin-bottom: .25rem!important
	}
	.ml-lg-1,
	.mx-lg-1 {
		margin-left: .25rem!important
	}
	.m-lg-2 {
		margin: .5rem!important
	}
	.mt-lg-2,
	.my-lg-2 {
		margin-top: .5rem!important
	}
	.mr-lg-2,
	.mx-lg-2 {
		margin-right: .5rem!important
	}
	.mb-lg-2,
	.my-lg-2 {
		margin-bottom: .5rem!important
	}
	.ml-lg-2,
	.mx-lg-2 {
		margin-left: .5rem!important
	}
	.m-lg-3 {
		margin: 1rem!important
	}
	.mt-lg-3,
	.my-lg-3 {
		margin-top: 1rem!important
	}
	.mr-lg-3,
	.mx-lg-3 {
		margin-right: 1rem!important
	}
	.mb-lg-3,
	.my-lg-3 {
		margin-bottom: 1rem!important
	}
	.ml-lg-3,
	.mx-lg-3 {
		margin-left: 1rem!important
	}
	.m-lg-4 {
		margin: 1.5rem!important
	}
	.mt-lg-4,
	.my-lg-4 {
		margin-top: 1.5rem!important
	}
	.mr-lg-4,
	.mx-lg-4 {
		margin-right: 1.5rem!important
	}
	.mb-lg-4,
	.my-lg-4 {
		margin-bottom: 1.5rem!important
	}
	.ml-lg-4,
	.mx-lg-4 {
		margin-left: 1.5rem!important
	}
	.m-lg-5 {
		margin: 3rem!important
	}
	.mt-lg-5,
	.my-lg-5 {
		margin-top: 3rem!important
	}
	.mr-lg-5,
	.mx-lg-5 {
		margin-right: 3rem!important
	}
	.mb-lg-5,
	.my-lg-5 {
		margin-bottom: 3rem!important
	}
	.ml-lg-5,
	.mx-lg-5 {
		margin-left: 3rem!important
	}
	.p-lg-0 {
		padding: 0!important
	}
	.pt-lg-0,
	.py-lg-0 {
		padding-top: 0!important
	}
	.pr-lg-0,
	.px-lg-0 {
		padding-right: 0!important
	}
	.pb-lg-0,
	.py-lg-0 {
		padding-bottom: 0!important
	}
	.pl-lg-0,
	.px-lg-0 {
		padding-left: 0!important
	}
	.p-lg-1 {
		padding: .25rem!important
	}
	.pt-lg-1,
	.py-lg-1 {
		padding-top: .25rem!important
	}
	.pr-lg-1,
	.px-lg-1 {
		padding-right: .25rem!important
	}
	.pb-lg-1,
	.py-lg-1 {
		padding-bottom: .25rem!important
	}
	.pl-lg-1,
	.px-lg-1 {
		padding-left: .25rem!important
	}
	.p-lg-2 {
		padding: .5rem!important
	}
	.pt-lg-2,
	.py-lg-2 {
		padding-top: .5rem!important
	}
	.pr-lg-2,
	.px-lg-2 {
		padding-right: .5rem!important
	}
	.pb-lg-2,
	.py-lg-2 {
		padding-bottom: .5rem!important
	}
	.pl-lg-2,
	.px-lg-2 {
		padding-left: .5rem!important
	}
	.p-lg-3 {
		padding: 1rem!important
	}
	.pt-lg-3,
	.py-lg-3 {
		padding-top: 1rem!important
	}
	.pr-lg-3,
	.px-lg-3 {
		padding-right: 1rem!important
	}
	.pb-lg-3,
	.py-lg-3 {
		padding-bottom: 1rem!important
	}
	.pl-lg-3,
	.px-lg-3 {
		padding-left: 1rem!important
	}
	.p-lg-4 {
		padding: 1.5rem!important
	}
	.pt-lg-4,
	.py-lg-4 {
		padding-top: 1.5rem!important
	}
	.pr-lg-4,
	.px-lg-4 {
		padding-right: 1.5rem!important
	}
	.pb-lg-4,
	.py-lg-4 {
		padding-bottom: 1.5rem!important
	}
	.pl-lg-4,
	.px-lg-4 {
		padding-left: 1.5rem!important
	}
	.p-lg-5 {
		padding: 3rem!important
	}
	.pt-lg-5,
	.py-lg-5 {
		padding-top: 3rem!important
	}
	.pr-lg-5,
	.px-lg-5 {
		padding-right: 3rem!important
	}
	.pb-lg-5,
	.py-lg-5 {
		padding-bottom: 3rem!important
	}
	.pl-lg-5,
	.px-lg-5 {
		padding-left: 3rem!important
	}
	.m-lg-n1 {
		margin: -.25rem!important
	}
	.mt-lg-n1,
	.my-lg-n1 {
		margin-top: -.25rem!important
	}
	.mr-lg-n1,
	.mx-lg-n1 {
		margin-right: -.25rem!important
	}
	.mb-lg-n1,
	.my-lg-n1 {
		margin-bottom: -.25rem!important
	}
	.ml-lg-n1,
	.mx-lg-n1 {
		margin-left: -.25rem!important
	}
	.m-lg-n2 {
		margin: -.5rem!important
	}
	.mt-lg-n2,
	.my-lg-n2 {
		margin-top: -.5rem!important
	}
	.mr-lg-n2,
	.mx-lg-n2 {
		margin-right: -.5rem!important
	}
	.mb-lg-n2,
	.my-lg-n2 {
		margin-bottom: -.5rem!important
	}
	.ml-lg-n2,
	.mx-lg-n2 {
		margin-left: -.5rem!important
	}
	.m-lg-n3 {
		margin: -1rem!important
	}
	.mt-lg-n3,
	.my-lg-n3 {
		margin-top: -1rem!important
	}
	.mr-lg-n3,
	.mx-lg-n3 {
		margin-right: -1rem!important
	}
	.mb-lg-n3,
	.my-lg-n3 {
		margin-bottom: -1rem!important
	}
	.ml-lg-n3,
	.mx-lg-n3 {
		margin-left: -1rem!important
	}
	.m-lg-n4 {
		margin: -1.5rem!important
	}
	.mt-lg-n4,
	.my-lg-n4 {
		margin-top: -1.5rem!important
	}
	.mr-lg-n4,
	.mx-lg-n4 {
		margin-right: -1.5rem!important
	}
	.mb-lg-n4,
	.my-lg-n4 {
		margin-bottom: -1.5rem!important
	}
	.ml-lg-n4,
	.mx-lg-n4 {
		margin-left: -1.5rem!important
	}
	.m-lg-n5 {
		margin: -3rem!important
	}
	.mt-lg-n5,
	.my-lg-n5 {
		margin-top: -3rem!important
	}
	.mr-lg-n5,
	.mx-lg-n5 {
		margin-right: -3rem!important
	}
	.mb-lg-n5,
	.my-lg-n5 {
		margin-bottom: -3rem!important
	}
	.ml-lg-n5,
	.mx-lg-n5 {
		margin-left: -3rem!important
	}
	.m-lg-auto {
		margin: auto!important
	}
	.mt-lg-auto,
	.my-lg-auto {
		margin-top: auto!important
	}
	.mr-lg-auto,
	.mx-lg-auto {
		margin-right: auto!important
	}
	.mb-lg-auto,
	.my-lg-auto {
		margin-bottom: auto!important
	}
	.ml-lg-auto,
	.mx-lg-auto {
		margin-left: auto!important
	}
}

@media (min-width:1200px) {
	.m-xl-0 {
		margin: 0!important
	}
	.mt-xl-0,
	.my-xl-0 {
		margin-top: 0!important
	}
	.mr-xl-0,
	.mx-xl-0 {
		margin-right: 0!important
	}
	.mb-xl-0,
	.my-xl-0 {
		margin-bottom: 0!important
	}
	.ml-xl-0,
	.mx-xl-0 {
		margin-left: 0!important
	}
	.m-xl-1 {
		margin: .25rem!important
	}
	.mt-xl-1,
	.my-xl-1 {
		margin-top: .25rem!important
	}
	.mr-xl-1,
	.mx-xl-1 {
		margin-right: .25rem!important
	}
	.mb-xl-1,
	.my-xl-1 {
		margin-bottom: .25rem!important
	}
	.ml-xl-1,
	.mx-xl-1 {
		margin-left: .25rem!important
	}
	.m-xl-2 {
		margin: .5rem!important
	}
	.mt-xl-2,
	.my-xl-2 {
		margin-top: .5rem!important
	}
	.mr-xl-2,
	.mx-xl-2 {
		margin-right: .5rem!important
	}
	.mb-xl-2,
	.my-xl-2 {
		margin-bottom: .5rem!important
	}
	.ml-xl-2,
	.mx-xl-2 {
		margin-left: .5rem!important
	}
	.m-xl-3 {
		margin: 1rem!important
	}
	.mt-xl-3,
	.my-xl-3 {
		margin-top: 1rem!important
	}
	.mr-xl-3,
	.mx-xl-3 {
		margin-right: 1rem!important
	}
	.mb-xl-3,
	.my-xl-3 {
		margin-bottom: 1rem!important
	}
	.ml-xl-3,
	.mx-xl-3 {
		margin-left: 1rem!important
	}
	.m-xl-4 {
		margin: 1.5rem!important
	}
	.mt-xl-4,
	.my-xl-4 {
		margin-top: 1.5rem!important
	}
	.mr-xl-4,
	.mx-xl-4 {
		margin-right: 1.5rem!important
	}
	.mb-xl-4,
	.my-xl-4 {
		margin-bottom: 1.5rem!important
	}
	.ml-xl-4,
	.mx-xl-4 {
		margin-left: 1.5rem!important
	}
	.m-xl-5 {
		margin: 3rem!important
	}
	.mt-xl-5,
	.my-xl-5 {
		margin-top: 3rem!important
	}
	.mr-xl-5,
	.mx-xl-5 {
		margin-right: 3rem!important
	}
	.mb-xl-5,
	.my-xl-5 {
		margin-bottom: 3rem!important
	}
	.ml-xl-5,
	.mx-xl-5 {
		margin-left: 3rem!important
	}
	.p-xl-0 {
		padding: 0!important
	}
	.pt-xl-0,
	.py-xl-0 {
		padding-top: 0!important
	}
	.pr-xl-0,
	.px-xl-0 {
		padding-right: 0!important
	}
	.pb-xl-0,
	.py-xl-0 {
		padding-bottom: 0!important
	}
	.pl-xl-0,
	.px-xl-0 {
		padding-left: 0!important
	}
	.p-xl-1 {
		padding: .25rem!important
	}
	.pt-xl-1,
	.py-xl-1 {
		padding-top: .25rem!important
	}
	.pr-xl-1,
	.px-xl-1 {
		padding-right: .25rem!important
	}
	.pb-xl-1,
	.py-xl-1 {
		padding-bottom: .25rem!important
	}
	.pl-xl-1,
	.px-xl-1 {
		padding-left: .25rem!important
	}
	.p-xl-2 {
		padding: .5rem!important
	}
	.pt-xl-2,
	.py-xl-2 {
		padding-top: .5rem!important
	}
	.pr-xl-2,
	.px-xl-2 {
		padding-right: .5rem!important
	}
	.pb-xl-2,
	.py-xl-2 {
		padding-bottom: .5rem!important
	}
	.pl-xl-2,
	.px-xl-2 {
		padding-left: .5rem!important
	}
	.p-xl-3 {
		padding: 1rem!important
	}
	.pt-xl-3,
	.py-xl-3 {
		padding-top: 1rem!important
	}
	.pr-xl-3,
	.px-xl-3 {
		padding-right: 1rem!important
	}
	.pb-xl-3,
	.py-xl-3 {
		padding-bottom: 1rem!important
	}
	.pl-xl-3,
	.px-xl-3 {
		padding-left: 1rem!important
	}
	.p-xl-4 {
		padding: 1.5rem!important
	}
	.pt-xl-4,
	.py-xl-4 {
		padding-top: 1.5rem!important
	}
	.pr-xl-4,
	.px-xl-4 {
		padding-right: 1.5rem!important
	}
	.pb-xl-4,
	.py-xl-4 {
		padding-bottom: 1.5rem!important
	}
	.pl-xl-4,
	.px-xl-4 {
		padding-left: 1.5rem!important
	}
	.p-xl-5 {
		padding: 3rem!important
	}
	.pt-xl-5,
	.py-xl-5 {
		padding-top: 3rem!important
	}
	.pr-xl-5,
	.px-xl-5 {
		padding-right: 3rem!important
	}
	.pb-xl-5,
	.py-xl-5 {
		padding-bottom: 3rem!important
	}
	.pl-xl-5,
	.px-xl-5 {
		padding-left: 3rem!important
	}
	.m-xl-n1 {
		margin: -.25rem!important
	}
	.mt-xl-n1,
	.my-xl-n1 {
		margin-top: -.25rem!important
	}
	.mr-xl-n1,
	.mx-xl-n1 {
		margin-right: -.25rem!important
	}
	.mb-xl-n1,
	.my-xl-n1 {
		margin-bottom: -.25rem!important
	}
	.ml-xl-n1,
	.mx-xl-n1 {
		margin-left: -.25rem!important
	}
	.m-xl-n2 {
		margin: -.5rem!important
	}
	.mt-xl-n2,
	.my-xl-n2 {
		margin-top: -.5rem!important
	}
	.mr-xl-n2,
	.mx-xl-n2 {
		margin-right: -.5rem!important
	}
	.mb-xl-n2,
	.my-xl-n2 {
		margin-bottom: -.5rem!important
	}
	.ml-xl-n2,
	.mx-xl-n2 {
		margin-left: -.5rem!important
	}
	.m-xl-n3 {
		margin: -1rem!important
	}
	.mt-xl-n3,
	.my-xl-n3 {
		margin-top: -1rem!important
	}
	.mr-xl-n3,
	.mx-xl-n3 {
		margin-right: -1rem!important
	}
	.mb-xl-n3,
	.my-xl-n3 {
		margin-bottom: -1rem!important
	}
	.ml-xl-n3,
	.mx-xl-n3 {
		margin-left: -1rem!important
	}
	.m-xl-n4 {
		margin: -1.5rem!important
	}
	.mt-xl-n4,
	.my-xl-n4 {
		margin-top: -1.5rem!important
	}
	.mr-xl-n4,
	.mx-xl-n4 {
		margin-right: -1.5rem!important
	}
	.mb-xl-n4,
	.my-xl-n4 {
		margin-bottom: -1.5rem!important
	}
	.ml-xl-n4,
	.mx-xl-n4 {
		margin-left: -1.5rem!important
	}
	.m-xl-n5 {
		margin: -3rem!important
	}
	.mt-xl-n5,
	.my-xl-n5 {
		margin-top: -3rem!important
	}
	.mr-xl-n5,
	.mx-xl-n5 {
		margin-right: -3rem!important
	}
	.mb-xl-n5,
	.my-xl-n5 {
		margin-bottom: -3rem!important
	}
	.ml-xl-n5,
	.mx-xl-n5 {
		margin-left: -3rem!important
	}
	.m-xl-auto {
		margin: auto!important
	}
	.mt-xl-auto,
	.my-xl-auto {
		margin-top: auto!important
	}
	.mr-xl-auto,
	.mx-xl-auto {
		margin-right: auto!important
	}
	.mb-xl-auto,
	.my-xl-auto {
		margin-bottom: auto!important
	}
	.ml-xl-auto,
	.mx-xl-auto {
		margin-left: auto!important
	}
}

.text-monospace {
	font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace
}

.text-justify {
	text-align: justify!important
}

.text-wrap {
	white-space: normal!important
}

.text-nowrap {
	white-space: nowrap!important
}

.text-truncate {
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis
}

.text-left {
	text-align: left!important
}

.text-right {
	text-align: right!important
}

.text-center {
	text-align: center!important
}

@media (min-width:576px) {
	.text-sm-left {
		text-align: left!important
	}
	.text-sm-right {
		text-align: right!important
	}
	.text-sm-center {
		text-align: center!important
	}
}

@media (min-width:768px) {
	.text-md-left {
		text-align: left!important
	}
	.text-md-right {
		text-align: right!important
	}
	.text-md-center {
		text-align: center!important
	}
}

@media (min-width:992px) {
	.text-lg-left {
		text-align: left!important
	}
	.text-lg-right {
		text-align: right!important
	}
	.text-lg-center {
		text-align: center!important
	}
}

@media (min-width:1200px) {
	.text-xl-left {
		text-align: left!important
	}
	.text-xl-right {
		text-align: right!important
	}
	.text-xl-center {
		text-align: center!important
	}
}

.text-lowercase {
	text-transform: lowercase!important
}

.text-uppercase {
	text-transform: uppercase!important
}

.text-capitalize {
	text-transform: capitalize!important
}

.font-weight-light {
	font-weight: 300!important
}

.font-weight-lighter {
	font-weight: lighter!important
}

.font-weight-normal {
	font-weight: 400!important
}

.font-weight-bold {
	font-weight: 700!important
}

.font-weight-bolder {
	font-weight: bolder!important
}

.font-italic {
	font-style: italic!important
}

.text-white {
	color: #fff!important
}

.text-primary {
	color: #4c66fb!important
}

a.text-primary:focus,
a.text-primary:hover {
	color: #0529f5!important
}

.text-secondary {
	color: #95aac9!important
}

a.text-secondary:focus,
a.text-secondary:hover {
	color: #6281af!important
}

.text-success {
	color: #0c9!important
}

a.text-success:focus,
a.text-success:hover {
	color: #008060!important
}

.text-info {
	color: #19b5fe!important
}

a.text-info:focus,
a.text-info:hover {
	color: #018aca!important
}

.text-warning {
	color: #f7bc06!important
}

a.text-warning:focus,
a.text-warning:hover {
	color: #ac8304!important
}

.text-danger {
	color: #f2545b!important
}

a.text-danger:focus,
a.text-danger:hover {
	color: #e8121b!important
}

.text-light {
	color: #f9fbfd!important
}

a.text-light:focus,
a.text-light:hover {
	color: #c0d5ea!important
}

.text-dark {
	color: #12263f!important
}

a.text-dark:focus,
a.text-dark:hover {
	color: #010204!important
}

.text-body {
	color: #2e384d!important
}

.text-muted {
	color: #8492a6!important
}

.text-black-50 {
	color: rgba(0, 0, 0, .5)!important
}

.text-white-50 {
	color: rgba(255, 255, 255, .5)!important
}

.text-hide {
	font: 0/0 a;
	color: transparent;
	border: 0;
	background-color: transparent;
	text-shadow: none
}

.text-decoration-none {
	text-decoration: none!important
}

.text-reset {
	color: inherit!important
}

.visible {
	visibility: visible!important
}

.invisible {
	visibility: hidden!important
}

@media print {
	*,
	::after,
	::before {
		box-shadow: none!important;
		text-shadow: none!important
	}
	a:not(.btn) {
		text-decoration: underline
	}
	abbr[title]::after {
		content: ' (' attr(title) ')'
	}
	pre {
		white-space: pre-wrap!important
	}
	blockquote,
	pre {
		border: 1px solid #b1c2d9;
		page-break-inside: avoid
	}
	thead {
		display: table-header-group
	}
	img,
	tr {
		page-break-inside: avoid
	}
	h2,
	h3,
	p {
		orphans: 3;
		widows: 3
	}
	h2,
	h3 {
		page-break-after: avoid
	}
	@page {
		size: a3
	}
	body {
		min-width: 992px!important
	}
	.container {
		min-width: 992px!important
	}
	.navbar {
		display: none
	}
	.badge {
		border: 1px solid #000
	}
	.table {
		border-collapse: collapse!important
	}
	.table td,
	.table th {
		background-color: #fff!important
	}
	.table-bordered td,
	.table-bordered th {
		border: 1px solid #e3ebf6!important
	}
	.table-dark {
		color: inherit
	}
	.table-dark tbody+tbody,
	.table-dark td,
	.table-dark th,
	.table-dark thead th {
		border-color: #edf2f9
	}
	.table .thead-dark th {
		color: inherit;
		border-color: #edf2f9
	}
}

.alert-container {
	position: fixed;
	z-index: 9;
	top: 65px;
	right: 0;
	left: 70px
}

.alert-container .alert {
	margin-bottom: 0;
	animation: showRibbon .5s 0s cubic-bezier(.35, 1.35, .5, 1) backwards;
	opacity: 1;
	border-radius: 0
}

.sidebar-pinned .alert-container {
	left: 240px
}

@media (max-width:991.98px) {
	.alert-container {
		left: 0
	}
}

.alert-border-primary {
	border: 0;
	border-left: 4px solid #4c66fb;
	background-color: #edf2f9
}

.alert-border-primary .icon {
	font-size: 1.5rem;
	margin-left: -4px;
	padding-right: 7px;
	color: #4c66fb
}

.alert-border-secondary {
	border: 0;
	border-left: 4px solid #95aac9;
	background-color: #edf2f9
}

.alert-border-secondary .icon {
	font-size: 1.5rem;
	margin-left: -4px;
	padding-right: 7px;
	color: #95aac9
}

.alert-border-success {
	border: 0;
	border-left: 4px solid #0c9;
	background-color: #edf2f9
}

.alert-border-success .icon {
	font-size: 1.5rem;
	margin-left: -4px;
	padding-right: 7px;
	color: #0c9
}

.alert-border-info {
	border: 0;
	border-left: 4px solid #19b5fe;
	background-color: #edf2f9
}

.alert-border-info .icon {
	font-size: 1.5rem;
	margin-left: -4px;
	padding-right: 7px;
	color: #19b5fe
}

.alert-border-warning {
	border: 0;
	border-left: 4px solid #f7bc06;
	background-color: #edf2f9
}

.alert-border-warning .icon {
	font-size: 1.5rem;
	margin-left: -4px;
	padding-right: 7px;
	color: #f7bc06
}

.alert-border-danger {
	border: 0;
	border-left: 4px solid #f2545b;
	background-color: #edf2f9
}

.alert-border-danger .icon {
	font-size: 1.5rem;
	margin-left: -4px;
	padding-right: 7px;
	color: #f2545b
}

.alert-border-light {
	border: 0;
	border-left: 4px solid #f9fbfd;
	background-color: #edf2f9
}

.alert-border-light .icon {
	font-size: 1.5rem;
	margin-left: -4px;
	padding-right: 7px;
	color: #f9fbfd
}

.alert-border-dark {
	border: 0;
	border-left: 4px solid #12263f;
	background-color: #edf2f9
}

.alert-border-dark .icon {
	font-size: 1.5rem;
	margin-left: -4px;
	padding-right: 7px;
	color: #12263f
}

@keyframes showAlert {
	from {
		transform: translateY(-50px);
		opacity: 0
	}
}

.badge {
	font-weight: 400;
	vertical-align: middle
}

.btn .badge {
	top: -2px
}

span.notification-counter {
	position: absolute;
	top: 15px;
	right: 17px;
	width: 8px;
	height: 8px;
	border-radius: 50%;
	background: #f2545b
}

.badge-soft-primary {
	color: #4c66fb!important;
	background-color: #dbe0fe!important
}

.badge-soft-primary[href]:focus,
.badge-soft-primary[href]:hover {
	text-decoration: none;
	color: #4c66fb!important;
	background-color: #c2cbfd!important
}

.badge-soft-secondary {
	color: #95aac9!important;
	background-color: #eaeef4!important
}

.badge-soft-secondary[href]:focus,
.badge-soft-secondary[href]:hover {
	text-decoration: none;
	color: #95aac9!important;
	background-color: #d9e0eb!important
}

.badge-soft-success {
	color: #0c9!important;
	background-color: #ccf5eb!important
}

.badge-soft-success[href]:focus,
.badge-soft-success[href]:hover {
	text-decoration: none;
	color: #0c9!important;
	background-color: #b7f1e3!important
}

.badge-soft-info {
	color: #19b5fe!important;
	background-color: #d1f0ff!important
}

.badge-soft-info[href]:focus,
.badge-soft-info[href]:hover {
	text-decoration: none;
	color: #19b5fe!important;
	background-color: #b8e8ff!important
}

.badge-soft-warning {
	color: #f7bc06!important;
	background-color: #fdf2cd!important
}

.badge-soft-warning[href]:focus,
.badge-soft-warning[href]:hover {
	text-decoration: none;
	color: #f7bc06!important;
	background-color: #fcecb4!important
}

.badge-soft-danger {
	color: #f2545b!important;
	background-color: #fcddde!important
}

.badge-soft-danger[href]:focus,
.badge-soft-danger[href]:hover {
	text-decoration: none;
	color: #f2545b!important;
	background-color: #fac6c7!important
}

.badge-soft-light {
	color: #f9fbfd!important;
	background-color: #fefeff!important
}

.badge-soft-light[href]:focus,
.badge-soft-light[href]:hover {
	text-decoration: none;
	color: #f9fbfd!important;
	background-color: #e5e5ff!important
}

.badge-soft-dark {
	color: #12263f!important;
	background-color: #d0d4d9!important
}

.badge-soft-dark[href]:focus,
.badge-soft-dark[href]:hover {
	text-decoration: none;
	color: #12263f!important;
	background-color: #c2c7ce!important
}

.btn {
	box-shadow: 0 2px 8px 0 rgba(0, 0, 0, .1)
}

.btn-ghost {
	transition: all ease .2s;
	opacity: .7;
	box-shadow: none
}

.btn-ghost.active,
.btn-ghost:active,
.btn-ghost:focus,
.btn-ghost:hover {
	opacity: 1;
	background-color: rgba(230, 230, 230, .15);
	box-shadow: none
}

.btn-white {
	color: #2e384d;
	border: 1px solid #dce4ec;
	background-color: #fff;
	box-shadow: none
}

.btn-white:active,
.btn-white:focus,
.btn-white:hover {
	color: #000;
	outline: 0;
	background-color: #f9fbfd;
	box-shadow: none
}

.btn-white-translucent {
	color: #fff;
	background-color: rgba(255, 255, 255, .15)
}

.btn-white-translucent:active,
.btn-white-translucent:focus,
.btn-white-translucent:hover {
	color: #fff;
	background-color: rgba(128, 128, 128, .15)
}

.btn-black-translucent {
	color: #fff;
	background-color: rgba(0, 0, 0, .15)
}

.btn-black-translucent:active,
.btn-black-translucent:focus,
.btn-black-translucent:hover {
	color: #fff;
	background-color: rgba(0, 0, 0, .15)
}

.btn-rounded-circle {
	width: calc(1em * 1.5 + .75rem + 1px * 2);
	padding-right: 0;
	padding-left: 0;
	border-radius: 50%
}

.btn-group-lg>.btn-rounded-circle.btn,
.btn-rounded-circle.btn-lg {
	width: calc(1em * 1.5 + 1rem + 1px * 2)
}

.btn-group-sm>.btn-rounded-circle.btn,
.btn-rounded-circle.btn-sm {
	width: calc(1em * 1.5 + .5rem + 1px * 2)
}

.btn-rounded {
	border-radius: 100px!important
}

.btn-rounded-left {
	border-radius: 100px 0 0 100px!important
}

.btn-rounded-right {
	border-radius: 0 100px 100px 0!important
}

.no-border {
	border: 0!important
}

.border-white {
	border-color: rgba(255, 255, 255, .15)!important
}

.border-dashed {
	border-style: dashed!important
}

.border-top-dashed {
	border-top-style: dashed!important
}

.border-left-dashed {
	border-left-style: dashed!important
}

.border-right-dashed {
	border-right-style: dashed!important
}

.border-bottom-dashed {
	border-bottom-style: dashed!important
}

.border-strong {
	border-width: 6px!important
}

.card {
	transition: box-shadow ease .2s;
	box-shadow: 0 25px 50px rgba(8, 21, 66, .06)
}

.card .card-header {
	border-bottom: 0
}

.card .card-header .card-title {
	font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
	font-size: 16px;
	margin-bottom: 0
}

.card .card-body {
	padding: .75rem 1.25rem
}

.card .card-body.card-scroll {
	height: 350px
}

.card .card-body.card-scroll .scroll-bar {
	background-color: #1f263d
}

.card .card-footer {
	border-top: 1px solid #dce4ec
}

.card:hover {
	box-shadow: 0 5px 12px rgba(126, 142, 177, .2)
}

.card .card-media {
	position: relative;
	border-top-left-radius: calc(.25rem - 0);
	border-top-right-radius: calc(.25rem - 0)
}

.card .card-controls {
	position: absolute;
	z-index: 2;
	top: .75rem;
	right: 1.25rem;
	margin-left: auto;
	border-top-left-radius: calc(.25rem - 0);
	border-top-right-radius: calc(.25rem - 0)
}

.card .card-controls>.icon {
	font-family: 'Material Design Icons';
	font-size: 18px;
	line-height: inherit;
	margin: 0 2px;
	transition: opacity ease .2s;
	opacity: .4;
	text-rendering: auto;
	-webkit-font-smoothing: antialiased
}

.card .card-controls>.icon:hover {
	opacity: 1
}

.card .card-controls .js-card-fullscreen:before {
	content: ''
}

.card .card-controls .js-card-refresh:before {
	content: ''
}

.card .card-controls .js-card-close:before {
	content: ''
}

.card .card-controls.card-controls-bottom {
	position: absolute;
	z-index: 2;
	top: unset;
	right: 1.25rem;
	bottom: .75rem;
	border-bottom-right-radius: calc(.25rem - 0);
	border-bottom-left-radius: calc(.25rem - 0)
}

.card .card-controls>.dropdown {
	display: inline-block
}

.card .card-controls>.dropdown>a .icon {
	font-size: 18px;
	transition: opacity ease .2s;
	opacity: .4
}

.card .card-controls>.dropdown>a .icon:hover {
	opacity: 1
}

.card.is-fullscreen {
	position: fixed;
	z-index: 9999;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	margin: 0!important;
	border-radius: 0!important
}

.card.is-fullscreen .js-card-fullscreen:before {
	content: ''
}

.card-hover {
	transition: all ease .2s
}

.card-hover:hover {
	transform: translateY(-5px);
	box-shadow: 0 18px 35px rgba(50, 50, 93, .1), -1px 0 15px rgba(0, 0, 0, .07)
}

.close span {
	color: transparent;
	background-image: url('data:image/svg+xml;charset=utf8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'currentColor\' viewBox=\'0 0 16 16\'%3E%3Cpath d=\'M14.7,1.3c-0.4-0.4-1-0.4-1.4,0L8,6.6L2.7,1.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4L6.6,8l-5.3,5.3 c-0.4,0.4-0.4,1,0,1.4C1.5,14.9,1.7,15,2,15s0.5-0.1,0.7-0.3L8,9.4l5.3,5.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L9.4,8l5.3-5.3C15.1,2.3,15.1,1.7,14.7,1.3z\'/%3E%3C/svg%3E');
	background-repeat: no-repeat;
	background-position: center;
	background-size: contain;
	text-shadow: none
}

.close.light span {
	background-image: url('data:image/svg+xml;charset=utf8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'%23ffffff\' viewBox=\'0 0 16 16\'%3E%3Cpath d=\'M14.7,1.3c-0.4-0.4-1-0.4-1.4,0L8,6.6L2.7,1.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4L6.6,8l-5.3,5.3 c-0.4,0.4-0.4,1,0,1.4C1.5,14.9,1.7,15,2,15s0.5-0.1,0.7-0.3L8,9.4l5.3,5.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L9.4,8l5.3-5.3C15.1,2.3,15.1,1.7,14.7,1.3z\'/%3E%3C/svg%3E')
}

.modal .close {
	font-size: 1.8rem;
	z-index: 1;
	top: 1.5rem!important;
	width: 2.5rem;
	height: 2.5rem;
	padding: 0;
	border-radius: 50%;
	background: rgba(193, 193, 193, .3)!important
}

.dropdown-menu {
	border: 1px solid #dce4ec
}

.dropdown-menu .dropdown-item {
	font-size: .9rem;
	font-weight: 500
}

.dropdown-menu .dropdown-item .dropdown-icon {
	font-size: 1.125rem
}

.dropdown-menu.notification-container {
	width: 320px;
	padding: 0
}

.dropdown-menu.notification-container .notification-events {
	overflow: auto;
	height: 250px;
	padding: 10px 15px
}

.show>.dropdown-menu {
	box-shadow: 0 18px 35px rgba(50, 50, 93, .1), -1px 0 15px rgba(0, 0, 0, .07)
}

.custom-select,
.form-control {
	background-color: #fff
}

.custom-select:focus,
.form-control:focus {
	outline: 0;
	box-shadow: none!important
}

.custom-select.form-control-plaintext,
.form-control.form-control-plaintext {
	border: 0;
	outline: 0;
	box-shadow: none!important
}

.custom-select.form-control-plaintext:focus,
.form-control.form-control-plaintext:focus {
	border: 0;
	outline: 0;
	box-shadow: none!important
}

.input-group.input-group-flush>.form-control {
	border-radius: .25rem
}

.input-group.input-group-flush>.form-control:focus~[class*=input-group]>.input-group-text {
	border-color: #95aac9
}

.input-group.input-group-flush>.form-control.is-valid~[class*=input-group]>.input-group-text {
	border-color: #0c9
}

.input-group.input-group-flush>.form-control.is-invalid~[class*=input-group]>.input-group-text {
	border-color: #f2545b
}

.input-group.input-group-flush>.form-control-prepended {
	padding-left: .375rem;
	border-left-width: 0;
	border-top-left-radius: 0!important;
	border-bottom-left-radius: 0!important
}

.input-group.input-group-flush>.form-control-appended {
	padding-right: .375rem;
	border-right-width: 0;
	border-top-right-radius: 0!important;
	border-bottom-right-radius: 0!important
}

.input-group.input-group-flush>.input-group-prepend {
	margin-right: 0;
	order: -1
}

.input-group.input-group-flush>.input-group-prepend>.input-group-text {
	transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
	border-right-width: 0;
	border-top-left-radius: .25rem;
	border-bottom-left-radius: .25rem
}

.input-group.input-group-flush>.input-group-append>.input-group-text {
	transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
	border-left-width: 0;
	border-top-right-radius: .25rem;
	border-bottom-right-radius: .25rem
}

.form-dark label {
	color: #fff
}

.form-dark .custom-select,
.form-dark .form-control,
.form-dark .input-group-text {
	transition: background-color ease .2s;
	color: #fff;
	border: 0!important;
	background-color: rgba(255, 255, 255, .15)
}

.form-dark .custom-select::-ms-input-placeholder,
.form-dark .form-control::-ms-input-placeholder,
.form-dark .input-group-text::-ms-input-placeholder {
	opacity: 1;
	color: #999
}

.form-dark .custom-select::placeholder,
.form-dark .form-control::placeholder,
.form-dark .input-group-text::placeholder {
	opacity: 1;
	color: #999
}

.form-dark .custom-select:active,
.form-dark .custom-select:focus,
.form-dark .form-control:active,
.form-dark .form-control:focus {
	background-color: rgba(179, 179, 179, .15)
}

.form-dark select.custom-select {
	background-image: url('data:image/svg+xml;charset=utf8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 5\'%3E%3Cpath fill=\'%23E3EBF6\' d=\'M2 0L0 2h4zm0 5L0 3h4z\'/%3E%3C/svg%3E')
}

.form-dark select:focus option {
	color: #2e384d!important
}

.form-dark .form-control:disabled,
.form-dark .form-control[readonly] {
	background-color: rgba(176, 170, 170, .32)
}

.modal .close {
	position: absolute;
	top: 15px;
	right: 25px
}

.modal .close:focus {
	outline: 0
}

.modal .modal-dialog.modal-full-width {
	right: 0!important;
	left: 0!important;
	width: 100%!important;
	max-width: 100%!important;
	margin: 0!important
}

.modal .modal-content {
	border: 0;
	border-radius: .25rem
}

.modal.fade.modal-top-left .modal-dialog {
	position: absolute;
	top: 0;
	width: 100%
}

@media (min-width:576px) {
	.modal.fade.modal-top-left .modal-dialog {
		left: 1.75rem;
		margin: 1.75rem auto
	}
}

@media (max-width:767.98px) {
	.modal.fade.modal-top-left .modal-dialog {
		width: calc(100% - (.5rem*2))
	}
}

.modal.fade.modal-top-right .modal-dialog {
	position: absolute;
	top: 0;
	width: 100%
}

@media (min-width:576px) {
	.modal.fade.modal-top-right .modal-dialog {
		right: 1.75rem;
		margin: 1.75rem auto
	}
}

@media (max-width:767.98px) {
	.modal.fade.modal-top-right .modal-dialog {
		width: calc(100% - (.5rem*2))
	}
}

.modal.fade.modal-bottom-right .modal-dialog {
	position: absolute;
	bottom: 0;
	width: 100%
}

@media (min-width:576px) {
	.modal.fade.modal-bottom-right .modal-dialog {
		right: 1.75rem;
		margin: 1.75rem auto
	}
}

@media (max-width:767.98px) {
	.modal.fade.modal-bottom-right .modal-dialog {
		width: calc(100% - (.5rem*2))
	}
}

.modal.fade.modal-bottom-left .modal-dialog {
	position: absolute;
	bottom: 0;
	width: 100%
}

@media (min-width:576px) {
	.modal.fade.modal-bottom-left .modal-dialog {
		left: 1.75rem;
		margin: 1.75rem auto
	}
}

@media (max-width:767.98px) {
	.modal.fade.modal-bottom-left .modal-dialog {
		width: calc(100% - (.5rem*2))
	}
}

.modal.fade.modal-bottom-center .modal-dialog {
	position: absolute;
	right: 0;
	bottom: 0;
	left: 0
}

@media (min-width:576px) {
	.modal.fade.modal-bottom-center .modal-dialog {
		margin: 1.75rem auto
	}
}

@media (max-width:767.98px) {
	.modal.fade.modal-bottom-center .modal-dialog {
		width: calc(100% - (.5rem*2))
	}
}

.modal.fade.modal-slide-left.show .modal-dialog {
	-ms-transform: translate(0, 0);
	transform: translate3d(0, 0, 0)
}

.modal.fade.modal-slide-left .modal-dialog {
	position: absolute;
	left: 0;
	width: 100%;
	height: 100%;
	margin: 0;
	-ms-transform: translate(-100%, 0);
	transform: translate3d(-100%, 0, 0)
}

.modal.fade.modal-slide-left .modal-dialog .modal-content-wrapper {
	height: 100%
}

.modal.fade.modal-slide-left .modal-dialog .modal-content {
	height: 100%
}

.modal.fade.modal-slide-left .modal-content {
	border-radius: 0
}

@media (max-width:767.98px) {
	.modal.fade.modal-slide-left .modal-dialog {
		width: 100%
	}
}

.modal.fade.modal-slide-right.show .modal-dialog {
	-ms-transform: translate(0, 0);
	transform: translate3d(0, 0, 0)
}

.modal.fade.modal-slide-right .modal-dialog {
	position: absolute;
	right: 0;
	width: 100%;
	height: 100%;
	margin: 0;
	-ms-transform: translate(100%, 0);
	transform: translate3d(100%, 0, 0)
}

.modal.fade.modal-slide-right .modal-dialog .modal-content-wrapper {
	height: 100%
}

.modal.fade.modal-slide-right .modal-dialog .modal-content {
	height: 100%
}

.modal.fade.modal-slide-right .modal-content {
	border-radius: 0
}

@media (max-width:767.98px) {
	.modal.fade.modal-slide-right .modal-dialog {
		width: 100%
	}
}

.modal[data-popup=true] {
	position: relative;
	top: unset;
	right: unset;
	bottom: unset;
	left: unset;
	width: unset;
	height: unset
}

.modal[data-popup=true].fade.modal-bottom-center .modal-dialog,
.modal[data-popup=true].fade.modal-bottom-left .modal-dialog,
.modal[data-popup=true].fade.modal-bottom-right .modal-dialog,
.modal[data-popup=true].fade.modal-top-left .modal-dialog,
.modal[data-popup=true].fade.modal-top-right .modal-dialog {
	position: fixed
}

.modal[data-popup=true].fade .modal-content {
	box-shadow: 0 20px 60px -2px rgba(18, 21, 35, .19)
}

.body-scrollable {
	overflow: unset;
	padding-right: unset!important
}

.body-scrollable .modal-backdrop {
	display: none
}

.modal-backdrop {
	background: rgba(67, 90, 111, .5)
}

.btn-cta {
	font-size: .8rem;
	font-weight: 600;
	padding: 15px 20px;
	letter-spacing: 1px;
	text-transform: uppercase
}

.event-type {
	display: inline-flex;
	width: 80px;
	height: 80px;
	transition: all ease .2s;
	transition-delay: .3s;
	border: 3px solid #e0e6ed;
	border-radius: 50%;
	justify-content: center;
	align-items: center
}

.event-type .event-indicator {
	transition: all cubic-bezier(0, .89, .44, 1) .2s;
	transition-delay: .5s;
	transform: scale(0);
	opacity: 0
}

.show .event-type .event-indicator {
	transform: scale(1);
	opacity: 1
}

.show .event-type {
	border-color: #e0e6ed;
	background-color: #e0e6ed
}

.show .event-type.success {
	border-color: #0c9;
	background-color: #0c9
}

.show .event-type.error {
	border-color: #f2545b;
	background-color: #f2545b
}

.show .event-type.warning {
	border-color: #f7bc06;
	background-color: #f7bc06
}

.show .event-type.info {
	border-color: #19b5fe;
	background-color: #19b5fe
}

.table {
	vertical-align: middle
}

.table tfoot th,
.table thead th {
	font-size: .7875rem;
	font-weight: 700;
	letter-spacing: .08em;
	text-transform: uppercase;
	color: #95aac9;
	border-bottom-width: 1px;
	background-color: #f9fbfd
}

.table.table-layout-fixed {
	table-layout: fixed
}

.table.table-card {
	border-spacing: 0 .5em;
	border-collapse: separate
}

.table.table-card tfoot th,
.table.table-card thead th {
	border-color: transparent;
	background-color: transparent
}

.table.table-card tbody tr {
	transition: all ease .2s;
	border: 1px solid #dce4ec;
	background-color: #fff;
	box-shadow: 0 2px 4px rgba(126, 142, 177, .12)
}

.table.table-card tbody tr:hover {
	box-shadow: 0 5px 12px rgba(126, 142, 177, .2)
}

.table.align-td-middle td,
.table.align-td-middle th {
	vertical-align: middle
}

.table-sm {
	font-size: .7875rem
}

.table-sm thead th {
	font-size: .6rem
}

.tab-line {
	border-bottom: none
}

.tab-line .nav-item .nav-link {
	font-weight: 600;
	color: #8492a6;
	border-top: none;
	border-right: none;
	border-bottom: 2px solid #fff;
	border-left: none
}

.tab-line .nav-item .nav-link.active {
	color: #4c66fb;
	border-top: none;
	border-right: none;
	border-bottom: 2px solid #4c66fb;
	border-left: none
}

body {
	font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
	font-weight: 400;
	color: #2e384d;
	background-color: #edf2f9;
	-webkit-font-smoothing: antialiased;
	-webkit-text-size-adjust: 100%;
	-ms-text-size-adjust: 100%;
	-webkit-font-feature-settings: 'kern' 1;
	-moz-font-feature-settings: 'kern' 1
}

a {
	color: inherit
}

a:hover {
	text-decoration: none;
	color: inherit
}

.font-primary {
	font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'!important
}

.font-secondary {
	font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'!important
}

.text-underline {
	border-bottom: 1px dotted currentColor
}

.text-underline:hover {
	border-bottom-style: solid
}

.text-overline {
	font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
	font-size: 10px;
	font-weight: 600;
	letter-spacing: 1px;
	text-transform: uppercase
}

.text-uppercase {
	text-transform: uppercase
}

.text-lowercase {
	text-transform: lowercase
}

.text-capitalize {
	text-transform: capitalize
}

.fw-100 {
	font-weight: 100
}

.fw-200 {
	font-weight: 200
}

.fw-300 {
	font-weight: 300
}

.fw-400 {
	font-weight: 400
}

.fw-500 {
	font-weight: 500
}

.fw-600 {
	font-weight: 600
}

.fw-700 {
	font-weight: 700
}

.fw-800 {
	font-weight: 800
}

.fw-900 {
	font-weight: 900
}

.floating-label {
	position: relative
}

.floating-label label:first-child {
	font-size: .85714em;
	position: absolute;
	z-index: 1;
	top: 0;
	overflow: hidden;
	box-sizing: border-box;
	width: 100%;
	margin-top: .42857em;
	margin-left: 1px;
	padding: 0 .91667em;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	transition: all .2s ease-out;
	transform: translateY(3px);
	white-space: nowrap;
	text-overflow: ellipsis;
	pointer-events: none;
	opacity: 0
}

.floating-label .form-control {
	height: calc(2.8rem + 2px)
}

.floating-label.show-label label:first-child {
	transform: none;
	opacity: 1
}

.floating-label.show-label .form-control {
	padding-top: 1.2rem
}

.image-box {
	display: inline-block;
	background-color: #000
}

.image-box input[type=checkbox],
.image-box input[type=radio] {
	position: absolute;
	z-index: -1;
	opacity: 0
}

.image-box .image-box-content {
	position: relative;
	cursor: pointer
}

.image-box .image-box-content:after,
.image-box .image-box-content:before {
	font-family: 'Material Design Icons';
	font-size: 1.5rem;
	line-height: inherit;
	position: absolute;
	top: 50%;
	left: 50%;
	margin-top: -1rem;
	margin-left: -.5rem;
	color: #fff;
	text-rendering: auto;
	-webkit-font-smoothing: antialiased
}

.image-box .image-box-content:after {
	z-index: 1;
	content: '';
	opacity: .7
}

.image-box .image-box-content:before {
	z-index: 2;
	content: '';
	transition: all ease .2s;
	transform: scale(0);
	opacity: 0
}

.image-box .image-box-content img {
	max-width: 100%;
	opacity: .8
}

.image-box input[type=checkbox]:checked+.image-box-content img,
.image-box input[type=radio]:checked+.image-box-content img {
	opacity: .6
}

.image-box input[type=checkbox]:checked+.image-box-content:after,
.image-box input[type=radio]:checked+.image-box-content:after {
	opacity: 0
}

.image-box input[type=checkbox]:checked+.image-box-content:before,
.image-box input[type=radio]:checked+.image-box-content:before {
	transform: scale(1);
	opacity: 1;
	color: #fff
}

.minicheckbox {
	position: relative;
	margin: 0;
	vertical-align: middle
}

.minicheckbox input[type=checkbox],
.minicheckbox input[type=radio] {
	position: absolute;
	z-index: -1;
	margin: 0;
	opacity: 0
}

.minicheckbox .custom-options-box {
	display: inline-block;
	width: 1rem;
	height: 1rem;
	border-radius: .25rem;
	background-color: rgba(0, 0, 0, .15)
}

.minicheckbox .custom-options-box:before {
	font-family: 'Material Design Icons';
	font-size: 11px;
	position: absolute;
	top: 0;
	left: 0;
	width: 1rem;
	height: 1rem;
	content: '';
	transition: .3s opacity;
	text-align: center;
	opacity: 0;
	color: #fff;
	border-radius: .25rem
}

.minicheckbox input[type=checkbox]:checked~.custom-options-box {
	background-color: #4c66fb
}

.minicheckbox input[type=checkbox]:checked~.custom-options-box:before {
	opacity: 1
}

.cstm-switch {
	display: inline-flex;
	margin: 0;
	cursor: default;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	align-items: center
}

.cstm-switch .cstm-switch-input {
	position: absolute;
	z-index: -1;
	opacity: 0
}

.cstm-switch .cstm-switch-input.disabled~.cstm-switch-indicator,
.cstm-switch .cstm-switch-input[disabled]~.cstm-switch-indicator {
	cursor: not-allowed;
	opacity: .5
}

.cstm-switch .cstm-switch-input:not(:checked)~.cstm-switch-indicator {
	background: #e3ebf6!important
}

.cstm-switch .cstm-switch-input:checked~.cstm-switch-indicator {
	background: #4c66fb
}

.cstm-switch .cstm-switch-input:checked~.cstm-switch-indicator:before {
	left: calc(1rem + 1px)
}

.cstm-switch .cstm-switch-input:checked~.cstm-switch-indicator.size-lg:before {
	left: calc(1.7rem + 1px)
}

.cstm-switch .cstm-switch-indicator {
	position: relative;
	display: inline-block;
	width: 2.25rem;
	height: 1.25rem;
	transition: .3s border-color, .3s background-color;
	vertical-align: bottom;
	border: 1px solid #dce4ec;
	border-radius: 50px
}

.cstm-switch .cstm-switch-indicator:before {
	position: absolute;
	top: 1px;
	left: 1px;
	width: calc(1.25rem - 4px);
	height: calc(1.25rem - 4px);
	content: '';
	transition: .3s left;
	border-radius: 50%;
	background: #fff;
	box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .4)
}

.cstm-switch .cstm-switch-indicator.size-lg {
	position: relative;
	display: inline-block;
	width: 4rem;
	height: 2.25rem;
	transition: .3s border-color, .3s background-color;
	vertical-align: bottom;
	border: 1px solid #dce4ec;
	border-radius: 50px
}

.cstm-switch .cstm-switch-indicator.size-lg:before {
	position: absolute;
	top: 1px;
	left: 1px;
	width: calc(2.25rem - 4px);
	height: calc(2.25rem - 4px);
	content: '';
	transition: .3s left;
	border-radius: 50%;
	background: #fff;
	box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .4)
}

.cstm-switch .cstm-switch-description {
	margin-left: .5rem;
	transition: .3s color
}

.option-box {
	display: inline-block
}

.option-box input[type=checkbox],
.option-box input[type=radio] {
	position: absolute;
	z-index: -1;
	opacity: 0
}

.option-box label {
	position: relative;
	padding: 8px 10px;
	cursor: pointer;
	transition: all ease .2s;
	border: 1px solid #dce4ec;
	border-radius: .25rem;
	background-color: #fff;
	box-shadow: 0 2px 4px rgba(126, 142, 177, .12)
}

.option-box label:after,
.option-box label:before {
	font-family: 'Material Design Icons';
	font-size: 1.5rem;
	line-height: inherit;
	position: absolute;
	top: 10px;
	left: 6px;
	color: #e3ebf6;
	text-rendering: auto;
	-webkit-font-smoothing: antialiased
}

.option-box label:after {
	content: ''
}

.option-box label:before {
	content: '';
	transition: all ease .2s;
	transform: scale(0);
	opacity: 0
}

.option-box label .radio-content {
	display: block;
	margin-top: 8px;
	margin-left: 25px
}

.option-box input[type=checkbox]:checked+label:after,
.option-box input[type=radio]:checked+label:after {
	opacity: 0
}

.option-box input[type=checkbox]:checked+label:before,
.option-box input[type=radio]:checked+label:before {
	content: '';
	transform: scale(1);
	opacity: 1;
	color: #0c9
}

.option-box-column {
	display: inline-block
}

.option-box-column input[type=checkbox],
.option-box-column input[type=radio] {
	position: absolute;
	z-index: -1;
	opacity: 0
}

.option-box-column label {
	position: relative;
	cursor: pointer;
	transition: all ease .2s;
	border: 1px solid #dce4ec;
	border-radius: .25rem;
	background-color: #fff;
	box-shadow: 0 2px 4px rgba(126, 142, 177, .12)
}

.option-box-column label:after,
.option-box-column label:before {
	font-family: 'Material Design Icons';
	font-size: 1.5rem;
	line-height: inherit;
	position: absolute;
	top: 10px;
	left: 50%;
	margin-left: -.75rem;
	color: #e3ebf6;
	text-rendering: auto;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale
}

.option-box-column label:after {
	content: ''
}

.option-box-column label:before {
	content: '';
	transition: all ease .2s;
	transform: scale(0);
	opacity: 0
}

.option-box-column label .radio-content {
	display: block;
	margin-top: 2rem;
	text-align: center
}

.option-box-column label .radio-content .radio-highlight {
	display: block;
	padding: 15px;
	transition: all ease .2s;
	color: #12263f;
	border-bottom-right-radius: .25rem;
	border-bottom-left-radius: .25rem;
	background-color: #e3ebf6
}

.option-box-column input[type=checkbox]:checked+label:after,
.option-box-column input[type=radio]:checked+label:after {
	opacity: 0
}

.option-box-column input[type=checkbox]:checked+label:before,
.option-box-column input[type=radio]:checked+label:before {
	content: '\F5e0';
	transform: scale(1);
	opacity: 1;
	color: #0c9
}

.option-box-column input[type=checkbox]:checked+label .radio-content .radio-highlight,
.option-box-column input[type=radio]:checked+label .radio-content .radio-highlight {
	color: #fff;
	background-color: #4c66fb
}

.option-box-grid {
	display: inline-block
}

.option-box-grid input[type=checkbox],
.option-box-grid input[type=radio] {
	position: absolute;
	z-index: -1;
	opacity: 0
}

.option-box-grid label {
	position: relative;
	padding: 8px 10px;
	cursor: pointer;
	transition: all ease .2s;
	border: 1px solid #dce4ec;
	border-radius: .25rem;
	background-color: #fff;
	box-shadow: 0 2px 4px rgba(126, 142, 177, .12)
}

.option-box-grid label:after,
.option-box-grid label:before {
	font-family: 'Material Design Icons';
	font-size: 1.5rem;
	line-height: inherit;
	position: absolute;
	top: 5px;
	right: 5px;
	color: #e3ebf6;
	text-rendering: auto;
	-webkit-font-smoothing: antialiased
}

.option-box-grid label:after {
	content: ''
}

.option-box-grid label:before {
	content: '';
	transition: all ease .2s;
	transform: scale(0);
	opacity: 0
}

.option-box-grid label .radio-content {
	display: block;
	margin-top: 8px
}

.option-box-grid input[type=checkbox]:checked+label:after,
.option-box-grid input[type=radio]:checked+label:after {
	opacity: 0
}

.option-box-grid input[type=checkbox]:checked+label:before,
.option-box-grid input[type=radio]:checked+label:before {
	content: '';
	transform: scale(1);
	opacity: 1;
	color: #0c9
}

.tag-input {
	display: inline-block
}

.tag-input input[type=checkbox] {
	position: absolute;
	z-index: -1;
	opacity: 0
}

.tag-input label {
	position: relative;
	padding: 8px 10px;
	cursor: pointer;
	transition: all ease .2s;
	border: 1px solid #dce4ec;
	border-radius: .25rem;
	box-shadow: 0 2px 4px rgba(126, 142, 177, .12)
}

.tag-input input[type=checkbox]:checked+label {
	padding-left: 25px;
	color: #fff;
	background-color: #4c66fb
}

.tag-input input[type=checkbox]:checked+label:before {
	font-family: 'Material Design Icons';
	font-size: 1rem;
	line-height: inherit;
	position: absolute;
	left: 6px;
	content: '';
	text-rendering: auto;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale
}

.tag-input input[type=checkbox]:active+label {
	background-color: #e3ebf6
}

.accordion .collapse {
	border-top: 1px solid transparent
}

.accordion .collapse.show {
	border-top: 1px solid #dce4ec
}

.accordion .card {
	border: 1px solid #dce4ec;
	box-shadow: none
}

.accordion .card .card-header {
	position: relative;
	padding-right: 35px
}

.accordion .card .card-header a[data-toggle=collapse]:after {
	font-family: 'Material Design Icons';
	font-size: 1.2rem;
	position: absolute;
	top: 10px;
	right: 10px;
	content: ''
}

.accordion .card .card-header a[data-toggle=collapse][aria-expanded=true]:after {
	font-family: 'Material Design Icons';
	font-size: 1.2rem;
	position: absolute;
	top: 10px;
	right: 10px;
	content: ''
}

.accordion.alternate-icons .card .card-header {
	position: relative;
	padding-right: 35px
}

.accordion.alternate-icons .card .card-header a[data-toggle=collapse]:after {
	font-family: 'Material Design Icons';
	font-size: 1.2rem;
	position: absolute;
	top: 10px;
	right: 10px;
	content: '\f415'
}

.accordion.alternate-icons .card .card-header a[data-toggle=collapse][aria-expanded=true]:after {
	font-family: 'Material Design Icons';
	font-size: 1.2rem;
	position: absolute;
	top: 10px;
	right: 10px;
	content: '\f374'
}

.avatar {
	position: relative;
	display: inline-block
}

.avatar-img {
	width: 100%;
	height: 100%;
	-o-object-fit: cover;
	object-fit: cover
}

.avatar-title {
	display: flex;
	width: 100%;
	height: 100%;
	color: #fff;
	background-color: #b1c2d9;
	align-items: center;
	justify-content: center
}

.avatar-img:hover,
.avatar-title:hover {
	box-shadow: 0 0 0 2px #fff
}

.avatar-away::before,
.avatar-dnd::before,
.avatar-offline::before,
.avatar-online::before {
	position: absolute;
	right: 0;
	bottom: 0;
	display: flex;
	width: 30%;
	height: 30%;
	content: '';
	border: 3px solid #fff;
	border-radius: 50%;
	align-items: center;
	justify-content: center
}

.avatar-online::before {
	background-color: #0c9
}

.avatar-away::before {
	background-color: #f7bc06
}

.avatar-dnd::before {
	background-color: #f2545b
}

.avatar-offline::before {
	background-color: #b1c2d9
}

.avatar {
	width: 3rem;
	height: 3rem
}

.avatar .border {
	border-width: 4px!important
}

.avatar .rounded {
	border-radius: 6px!important
}

.avatar .avatar-title {
	font-size: 18px
}

.avatar .avatar-away::before,
.avatar .avatar-dnd::before,
.avatar .avatar-offline::before,
.avatar .avatar-online::before {
	border-width: 2px
}

.avatar-xs {
	width: 1.625rem;
	height: 1.625rem
}

.avatar-xs .border {
	border-width: 2px!important
}

.avatar-xs .rounded {
	border-radius: 4px!important
}

.avatar-xs .avatar-title {
	font-size: 10px
}

.avatar-xs .avatar-away::before,
.avatar-xs .avatar-dnd::before,
.avatar-xs .avatar-offline::before,
.avatar-xs .avatar-online::before {
	border-width: 1px
}

.avatar-sm {
	width: 2.5rem;
	height: 2.5rem
}

.avatar-sm .border {
	border-width: 3px!important
}

.avatar-sm .rounded {
	border-radius: 4px!important
}

.avatar-sm .avatar-title {
	font-size: 13px
}

.avatar-sm .avatar-away::before,
.avatar-sm .avatar-dnd::before,
.avatar-sm .avatar-offline::before,
.avatar-sm .avatar-online::before {
	border-width: 2px
}

.avatar-lg {
	width: 4rem;
	height: 4rem
}

.avatar-lg .border {
	border-width: 3px!important
}

.avatar-lg .rounded {
	border-radius: 8px!important
}

.avatar-lg .avatar-title {
	font-size: 24px
}

.avatar-lg .avatar-away::before,
.avatar-lg .avatar-dnd::before,
.avatar-lg .avatar-offline::before,
.avatar-lg .avatar-online::before {
	border-width: 3px
}

.avatar-xl {
	width: 5.125rem;
	height: 5.125rem
}

.avatar-xl .border {
	border-width: 4px!important
}

.avatar-xl .rounded {
	border-radius: 8px!important
}

.avatar-xl .avatar-title {
	font-size: 30px
}

.avatar-xl .avatar-away::before,
.avatar-xl .avatar-dnd::before,
.avatar-xl .avatar-offline::before,
.avatar-xl .avatar-online::before {
	border-width: 4px
}

.avatar-xxl {
	width: 5.125rem;
	height: 5.125rem
}

.avatar-xxl .border {
	border-width: 6px!important
}

.avatar-xxl .rounded {
	border-radius: 8px!important
}

.avatar-xxl .avatar-title {
	font-size: 30px
}

.avatar-xxl .avatar-away::before,
.avatar-xxl .avatar-dnd::before,
.avatar-xxl .avatar-offline::before,
.avatar-xxl .avatar-online::before {
	border-width: 4px
}

@media (min-width:768px) {
	.avatar-xxl {
		width: 8rem;
		height: 8rem
	}
	.avatar-xxl .border {
		border-width: 4px!important
	}
	.avatar-xxl .rounded {
		border-radius: 12px!important
	}
	.avatar-xxl .avatar-title {
		font-size: 42px
	}
	.avatar-xxl .avatar-away::before,
	.avatar-xxl .avatar-dnd::before,
	.avatar-xxl .avatar-offline::before,
	.avatar-xxl .avatar-online::before {
		border-width: 4px
	}
}

.avatar-group {
	display: inline-flex
}

.avatar-group .avatar+.avatar {
	margin-left: -.75rem
}

.avatar-group .avatar-xs+.avatar-xs {
	margin-left: -.40625rem
}

.avatar-group .avatar-sm+.avatar-sm {
	margin-left: -.625rem
}

.avatar-group .avatar-lg+.avatar-lg {
	margin-left: -1rem
}

.avatar-group .avatar-xl+.avatar-xl {
	margin-left: -1.28125rem
}

.avatar-group .avatar:hover {
	z-index: 1
}

.avatar-input {
	position: relative;
	overflow: hidden
}

.avatar-input .avatar-file-picker {
	position: absolute;
	z-index: 2;
	width: 1px;
	height: 1px;
	margin: 0;
	opacity: 0
}

.avatar-input .avatar-input-icon {
	position: absolute;
	top: 0;
	display: flex;
	width: 100%;
	height: 100%;
	transition: all ease .2s;
	opacity: 0;
	color: #fff;
	background: rgba(0, 0, 0, .37);
	justify-content: center;
	align-items: center
}

.avatar-input:hover .avatar-input-icon {
	opacity: 1
}

.loading-container {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	display: flex;
	border-radius: .25rem;
	background-color: rgba(67, 90, 111, .5);
	background-image: url(/7fc66bc60621b585d06091cbf27c0461afbd56d5/05836/light/assets/img/loading.svg);
	background-repeat: no-repeat;
	background-position: center
}

.timeline {
	position: relative;
	margin: 0;
	padding: 0;
	list-style-type: none
}

.timeline .timeline-item {
	line-height: 1.5;
	position: relative;
	margin-bottom: 25px;
	padding: 0 0;
	transition: all ease .2s;
	border-radius: .25rem
}

.timeline .timeline-item .timeline-wrapper {
	position: relative;
	z-index: 2;
	display: flex;
	align-items: center
}

.timeline .timeline-item:hover {
	cursor: default;
	background-color: #f9fbfd
}

.timeline .timeline-item:not(:last-child):after {
	position: absolute;
	z-index: 0;
	top: 0;
	left: 20px;
	width: 2px;
	height: calc(100% + 25px);
	content: '';
	background-color: #d2ddec
}

.timeline.timeline-xs .timeline-item {
	margin-bottom: 15px
}

.timeline.timeline-xs .timeline-item:not(:last-child):after {
	position: absolute;
	z-index: 0;
	top: 0;
	left: 12px;
	width: 2px;
	height: calc(100% + 25px);
	content: '';
	background-color: #d2ddec
}

.admin-sidebar {
	font-weight: 500;
	position: fixed;
	z-index: 999;
	top: 0;
	right: auto;
	bottom: 0;
	display: flex;
	overflow: hidden;
	flex-direction: column;
	width: 240px;
	transition: transform ease .2s;
	color: #8492a6;
	border-right: 1px solid #dce4ec;
	background-color: #fff
}

.admin-sidebar .admin-sidebar-brand {
	display: flex;
	width: 100%;
	height: 65px;
	padding-right: 15px;
	padding-left: 15px;
	background-color: #fff;
	flex: 0 0 auto;
	align-items: center
}

.admin-sidebar .admin-sidebar-brand .admin-brand-logo {
	max-width: 100%
}

.admin-sidebar .admin-close-sidebar {
	font-family: 'Material Design Icons';
	font-size: 24px;
	display: none;
	padding-left: 15px;
	align-items: center
}

.admin-sidebar .admin-close-sidebar:before {
	content: ''
}

.admin-sidebar .admin-pin-sidebar {
	font-family: 'Material Design Icons';
	font-size: 1rem;
	line-height: inherit;
	display: inline-block;
	width: 40px;
	text-align: center;
	opacity: 0;
	color: #8492a6;
	text-rendering: auto;
	-webkit-font-smoothing: antialiased
}

.admin-sidebar .admin-pin-sidebar:before {
	content: '擄'
}

.admin-sidebar .admin-sidebar-wrapper {
	position: relative;
	overflow: hidden;
	width: 100%;
	padding-bottom: 30px;
	flex: 1 1 auto
}

.admin-sidebar .menu {
	margin: 0;
	padding: 0;
	list-style: none
}

.admin-sidebar .menu .menu-item {
	position: relative;
	display: block;
	clear: both;
	width: 100%;
	list-style: none;
	transition: opacity ease .2s
}

.admin-sidebar .menu .menu-item .menu-link {
	display: table;
	width: 100%;
	padding: 10px 15px;
	transition: opacity .2s ease;
	justify-content: space-between
}

.admin-sidebar .menu .menu-item .menu-link .menu-label {
	display: table-cell;
	vertical-align: middle;
	color: #8492a6
}

.admin-sidebar .menu .menu-item .menu-link .menu-label .menu-name {
	display: block
}

.admin-sidebar .menu .menu-item .menu-link .menu-label .menu-arrow {
	font-family: 'Material Design Icons';
	font-size: inherit;
	line-height: inherit;
	display: inline-block;
	margin: auto 0;
	text-rendering: auto;
	-webkit-font-smoothing: antialiased;
}

.admin-sidebar .menu .menu-item .menu-link .menu-label .menu-arrow:before {
	content: ''
}

.admin-sidebar .menu .menu-item .menu-link .menu-label .menu-info {
	opacity: .6;
	color: #8492a6
}

.admin-sidebar .menu .menu-item .menu-link .menu-icon {
	position: relative;
	display: table-cell;
	width: 40px;
	height: 40px;
	margin-top: auto;
	margin-bottom: auto;
	margin-left: auto;
	text-align: center;
	vertical-align: middle;
	border-radius: .25rem;
	background: rgba(255, 255, 255, .22)
}

.admin-sidebar .menu .menu-item .menu-link .menu-icon .icon-placeholder {
	font-style: normal;
	margin: auto;
	color: #8492a6
}

.admin-sidebar .menu .menu-item .menu-link .menu-icon .icon-placeholder {
	font-size: 22px
}

.admin-sidebar .menu .menu-item .menu-link .menu-icon .icon-badge {
	font-size: 10px;
	position: absolute;
	top: -7px;
	right: -6px;
	padding: .3em .6em
}

.admin-sidebar .menu .menu-item .sub-menu {
	display: none;
	padding: 0;
	padding-left: 10px;
	list-style: none
}

.admin-sidebar .menu .menu-item.active {
	background: #f5f5f5
}

.admin-sidebar .menu .menu-item.active>.menu-link .icon-placeholder,
.admin-sidebar .menu .menu-item.active>.menu-link .menu-label {
	color: #4c66fb
}

.admin-sidebar .menu .menu-item>.menu-link:hover .icon-placeholder,
.admin-sidebar .menu .menu-item>.menu-link:hover .menu-label {
	color: #4c66fb
}

.admin-sidebar .menu .menu-item.opened>.menu-link .icon-placeholder,
.admin-sidebar .menu .menu-item.opened>.menu-link .menu-label {
	color: #4c66fb
}

.admin-sidebar .menu .menu-item.opened>.menu-link>.menu-label .menu-name>.menu-arrow:before {
	content: ''
}

.admin-sidebar .menu .menu-item.opened .sub-menu {
	border-top: 1px solid rgba(255, 255, 255, .07);
	border-bottom: 1px solid rgba(255, 255, 255, .07);
	background: #f5f5f5
}

.sidebar-backdrop {
	display: none;
	opacity: 0
}

.admin-brand-content {
	font-weight: 600;
	display: inline-block;
	padding: 0 5px;
	letter-spacing: 3px;
	text-transform: uppercase
}

@media (min-width:992px) {
	.admin-sidebar {
		transform: translateX(-170px)
	}
	body.sidebar-pinned .admin-sidebar {
		transform: translateX(0)
	}
	body.sidebar-pinned .admin-pin-sidebar {
		transform: scale(1);
		opacity: 1
	}
	body.sidebar-pinned .admin-pin-sidebar:before {
		content: '勞'
	}
	.admin-sidebar.sidebar-show {
		transform: translateX(0)!important
	}
	.admin-sidebar.sidebar-show .admin-pin-sidebar {
		transform: scale(1);
		opacity: 1
	}
}

@media (max-width:992px) {
	.admin-sidebar {
		transform: translateX(-100%)
	}
	.admin-sidebar .admin-pin-sidebar {
		display: none
	}
	.admin-sidebar .admin-close-sidebar {
		display: inline-block
	}
	.sidebar-open .admin-sidebar {
		transform: translateX(0)!important
	}
	.sidebar-open .sidebar-backdrop {
		position: fixed;
		z-index: 99;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		display: block;
		opacity: .5;
		background-color: #000
	}
}

.usable-height {
	height: calc(100vh - 65px)
}

.panel {
	display: flex;
	flex-direction: column
}

.panel .panel-footer,
.panel .panel-header {
	flex: 0 0 auto
}

.panel .panel-body {
	overflow-y: auto;
	flex: 1 1 auto
}

.p-t-0 {
	padding-top: 0
}

.p-r-0 {
	padding-right: 0
}

.p-l-0 {
	padding-left: 0
}

.p-b-0 {
	padding-bottom: 0
}

.p-t-5 {
	padding-top: 5px
}

.p-r-5 {
	padding-right: 5px
}

.p-l-5 {
	padding-left: 5px
}

.p-b-5 {
	padding-bottom: 5px
}

.p-t-10 {
	padding-top: 10px
}

.p-r-10 {
	padding-right: 10px
}

.p-l-10 {
	padding-left: 10px
}

.p-b-10 {
	padding-bottom: 10px
}

.p-t-15 {
	padding-top: 15px
}

.p-r-15 {
	padding-right: 15px
}

.p-l-15 {
	padding-left: 15px
}

.p-b-15 {
	padding-bottom: 15px
}

.p-t-20 {
	padding-top: 20px
}

.p-r-20 {
	padding-right: 20px
}

.p-l-20 {
	padding-left: 20px
}

.p-b-20 {
	padding-bottom: 20px
}

.p-t-25 {
	padding-top: 25px
}

.p-r-25 {
	padding-right: 25px
}

.p-l-25 {
	padding-left: 25px
}

.p-b-25 {
	padding-bottom: 25px
}

.p-t-30 {
	padding-top: 30px
}

.p-r-30 {
	padding-right: 30px
}

.p-l-30 {
	padding-left: 30px
}

.p-b-30 {
	padding-bottom: 30px
}

.p-t-35 {
	padding-top: 35px
}

.p-r-35 {
	padding-right: 35px
}

.p-l-35 {
	padding-left: 35px
}

.p-b-35 {
	padding-bottom: 35px
}

.p-t-40 {
	padding-top: 40px
}

.p-r-40 {
	padding-right: 40px
}

.p-l-40 {
	padding-left: 40px
}

.p-b-40 {
	padding-bottom: 40px
}

.p-t-45 {
	padding-top: 45px
}

.p-r-45 {
	padding-right: 45px
}

.p-l-45 {
	padding-left: 45px
}

.p-b-45 {
	padding-bottom: 45px
}

.p-t-50 {
	padding-top: 50px
}

.p-r-50 {
	padding-right: 50px
}

.p-l-50 {
	padding-left: 50px
}

.p-b-50 {
	padding-bottom: 50px
}

.p-t-55 {
	padding-top: 55px
}

.p-r-55 {
	padding-right: 55px
}

.p-l-55 {
	padding-left: 55px
}

.p-b-55 {
	padding-bottom: 55px
}

.p-t-60 {
	padding-top: 60px
}

.p-r-60 {
	padding-right: 60px
}

.p-l-60 {
	padding-left: 60px
}

.p-b-60 {
	padding-bottom: 60px
}

.p-t-65 {
	padding-top: 65px
}

.p-r-65 {
	padding-right: 65px
}

.p-l-65 {
	padding-left: 65px
}

.p-b-65 {
	padding-bottom: 65px
}

.p-t-70 {
	padding-top: 70px
}

.p-r-70 {
	padding-right: 70px
}

.p-l-70 {
	padding-left: 70px
}

.p-b-70 {
	padding-bottom: 70px
}

.p-t-75 {
	padding-top: 75px
}

.p-r-75 {
	padding-right: 75px
}

.p-l-75 {
	padding-left: 75px
}

.p-b-75 {
	padding-bottom: 75px
}

.p-t-80 {
	padding-top: 80px
}

.p-r-80 {
	padding-right: 80px
}

.p-l-80 {
	padding-left: 80px
}

.p-b-80 {
	padding-bottom: 80px
}

.p-t-85 {
	padding-top: 85px
}

.p-r-85 {
	padding-right: 85px
}

.p-l-85 {
	padding-left: 85px
}

.p-b-85 {
	padding-bottom: 85px
}

.p-t-90 {
	padding-top: 90px
}

.p-r-90 {
	padding-right: 90px
}

.p-l-90 {
	padding-left: 90px
}

.p-b-90 {
	padding-bottom: 90px
}

.p-t-95 {
	padding-top: 95px
}

.p-r-95 {
	padding-right: 95px
}

.p-l-95 {
	padding-left: 95px
}

.p-b-95 {
	padding-bottom: 95px
}

.p-t-100 {
	padding-top: 100px
}

.p-r-100 {
	padding-right: 100px
}

.p-l-100 {
	padding-left: 100px
}

.p-b-100 {
	padding-bottom: 100px
}

.m-t-0 {
	margin-top: 0
}

.m-r-0 {
	margin-right: 0
}

.m-l-0 {
	margin-left: 0
}

.m-b-0 {
	margin-bottom: 0
}

.m-t-5 {
	margin-top: 5px
}

.m-r-5 {
	margin-right: 5px
}

.m-l-5 {
	margin-left: 5px
}

.m-b-5 {
	margin-bottom: 5px
}

.m-t-10 {
	margin-top: 10px
}

.m-r-10 {
	margin-right: 10px
}

.m-l-10 {
	margin-left: 10px
}

.m-b-10 {
	margin-bottom: 10px
}

.m-t-15 {
	margin-top: 15px
}

.m-r-15 {
	margin-right: 15px
}

.m-l-15 {
	margin-left: 15px
}

.m-b-15 {
	margin-bottom: 15px
}

.m-t-20 {
	margin-top: 20px
}

.m-r-20 {
	margin-right: 20px
}

.m-l-20 {
	margin-left: 20px
}

.m-b-20 {
	margin-bottom: 20px
}

.m-t-25 {
	margin-top: 25px
}

.m-r-25 {
	margin-right: 25px
}

.m-l-25 {
	margin-left: 25px
}

.m-b-25 {
	margin-bottom: 25px
}

.m-t-30 {
	margin-top: 30px
}

.m-r-30 {
	margin-right: 30px
}

.m-l-30 {
	margin-left: 30px
}

.m-b-30 {
	margin-bottom: 30px
}

.m-t-35 {
	margin-top: 35px
}

.m-r-35 {
	margin-right: 35px
}

.m-l-35 {
	margin-left: 35px
}

.m-b-35 {
	margin-bottom: 35px
}

.m-t-40 {
	margin-top: 40px
}

.m-r-40 {
	margin-right: 40px
}

.m-l-40 {
	margin-left: 40px
}

.m-b-40 {
	margin-bottom: 40px
}

.m-t-45 {
	margin-top: 45px
}

.m-r-45 {
	margin-right: 45px
}

.m-l-45 {
	margin-left: 45px
}

.m-b-45 {
	margin-bottom: 45px
}

.m-t-50 {
	margin-top: 50px
}

.m-r-50 {
	margin-right: 50px
}

.m-l-50 {
	margin-left: 50px
}

.m-b-50 {
	margin-bottom: 50px
}

.m-t-55 {
	margin-top: 55px
}

.m-r-55 {
	margin-right: 55px
}

.m-l-55 {
	margin-left: 55px
}

.m-b-55 {
	margin-bottom: 55px
}

.m-t-60 {
	margin-top: 60px
}

.m-r-60 {
	margin-right: 60px
}

.m-l-60 {
	margin-left: 60px
}

.m-b-60 {
	margin-bottom: 60px
}

.m-t-65 {
	margin-top: 65px
}

.m-r-65 {
	margin-right: 65px
}

.m-l-65 {
	margin-left: 65px
}

.m-b-65 {
	margin-bottom: 65px
}

.m-t-70 {
	margin-top: 70px
}

.m-r-70 {
	margin-right: 70px
}

.m-l-70 {
	margin-left: 70px
}

.m-b-70 {
	margin-bottom: 70px
}

.m-t-75 {
	margin-top: 75px
}

.m-r-75 {
	margin-right: 75px
}

.m-l-75 {
	margin-left: 75px
}

.m-b-75 {
	margin-bottom: 75px
}

.m-t-80 {
	margin-top: 80px
}

.m-r-80 {
	margin-right: 80px
}

.m-l-80 {
	margin-left: 80px
}

.m-b-80 {
	margin-bottom: 80px
}

.m-t-85 {
	margin-top: 85px
}

.m-r-85 {
	margin-right: 85px
}

.m-l-85 {
	margin-left: 85px
}

.m-b-85 {
	margin-bottom: 85px
}

.m-t-90 {
	margin-top: 90px
}

.m-r-90 {
	margin-right: 90px
}

.m-l-90 {
	margin-left: 90px
}

.m-b-90 {
	margin-bottom: 90px
}

.m-t-95 {
	margin-top: 95px
}

.m-r-95 {
	margin-right: 95px
}

.m-l-95 {
	margin-left: 95px
}

.m-b-95 {
	margin-bottom: 95px
}

.m-t-100 {
	margin-top: 100px
}

.m-r-100 {
	margin-right: 100px
}

.m-l-100 {
	margin-left: 100px
}

.m-b-100 {
	margin-bottom: 100px
}

.p-all-0 {
	padding: 0
}

.p-all-5 {
	padding: 10px
}

.p-all-10 {
	padding: 10px
}

.p-all-15 {
	padding: 15px
}

.p-all-25 {
	padding: 25px
}

.m-all-0 {
	margin: 0
}

.m-all-5 {
	margin: 5px
}

.m-all-10 {
	margin: 10px
}

.m-all-15 {
	margin: 15px
}

.m-all-25 {
	margin: 25px
}

.pull-up-xs {
	margin-top: -25px
}

.pull-up-sm {
	margin-top: -50px
}

.pull-up {
	margin-top: -90px
}

.m-h-0 {
	min-height: 0
}

.m-h-10 {
	min-height: 10vh
}

.m-h-20 {
	min-height: 20vh
}

.m-h-30 {
	min-height: 30vh
}

.m-h-40 {
	min-height: 40vh
}

.m-h-50 {
	min-height: 50vh
}

.m-h-60 {
	min-height: 60vh
}

.m-h-70 {
	min-height: 70vh
}

.m-h-80 {
	min-height: 80vh
}

.m-h-90 {
	min-height: 90vh
}

.m-h-100 {
	min-height: 100vh
}

.full-height {
	height: 100%
}

body,
header,
html,
main,
section {
	position: relative
}

body,
html {
	height: 100%
}

.admin-main {
	padding-top: 65px
}

.admin-header {
	position: fixed;
	z-index: 99;
	top: 0;
	right: 0;
	left: 0;
	display: flex;
	height: 65px;
	border-bottom: 1px solid #dce4ec;
	background: #fff;
	box-shadow: none;
	align-items: center
}

.admin-header .sidebar-toggle {
	font-family: 'Material Design Icons';
	font-size: 24px;
	display: none;
	margin-right: 15px;
	padding-left: 15px;
	align-items: center
}

.admin-header .sidebar-toggle:before {
	content: ''
}

@media (min-width:992px) {
	.admin-header,
	.admin-main {
		padding-left: 70px
	}
	body.sidebar-pinned .admin-header,
	body.sidebar-pinned .admin-main {
		padding-left: 240px
	}
}

@media (max-width:992px) {
	.admin-header .sidebar-toggle {
		display: block
	}
}

.select2-container--default .select2-selection__rendered {
	font-size: .9rem;
	line-height: 1.5!important;
	padding: .375rem .75rem!important;
	color: #2e384d!important
}

.select2-selection {
	height: unset!important;
	border-color: #dce4ec!important
}

.select2-container--default .select2-selection--single .select2-selection__arrow {
	position: absolute;
	top: 50%;
	right: 1px;
	width: 20px;
	height: unset;
	transform: translateY(-100%)
}

.select2-container--default:focus {
	color: #95aac9;
	outline: 0;
	background-color: #fff
}

.select2-dropdown {
	border: 1px solid #dce4ec;
	box-shadow: 0 18px 35px rgba(50, 50, 93, .1), -1px 0 15px rgba(0, 0, 0, .07)
}

.select2-container--default .select2-results__option--highlighted[aria-selected] {
	color: #11243b;
	background-color: #d2ddec
}

.select2-container--default .select2-results__option[aria-selected=true] {
	color: #4c66fb;
	background-color: #edf2f9
}

.select2-container--default .select2-search--dropdown .select2-search__field {
	width: 100%;
	padding-left: 29px;
	border: 0;
	border: none;
	outline: 0;
	background-color: #edf2f9
}

.select2-container .select2-selection--multiple .select2-selection__rendered {
	font-size: 14px!important;
	padding: 2px .375rem!important
}

.select2-search--dropdown:before {
	font-family: 'Material Design Icons';
	font-size: 18px;
	position: absolute;
	top: 6px;
	left: 10px;
	content: '\F349';
	color: #95aac9
}

.select2-container--default .select2-selection--multiple .select2-selection__choice {
	border: 1px solid transparent;
	border-radius: 2px;
	background-color: #e3ebf6
}

.select2-container--default .select2-selection--multiple .select2-selection__choice__remove {
	font-weight: 500;
	color: #000
}

.select2.is-invalid+.select2-container .select2-selection {
	border-color: #f2545b!important
}

.select2.is-valid+.select2-container .select2-selection {
	border-color: #0c9!important
}

.datepicker {
	font-size: 12px;
	z-index: 99!important;
	padding: 16px 25px;
	border-radius: 2px
}

.datepicker:after {
	border-bottom-color: #e3ebf6
}

.datepicker thead tr .datepicker-switch {
	font-size: 13px;
	font-weight: 400;
	color: #95aac9
}

.datepicker thead tr .next,
.datepicker thead tr .prev {
	font-size: 0;
	content: '';
	color: #4c66fb
}

.datepicker thead tr .next:before,
.datepicker thead tr .prev:before {
	font-family: 'Material Design Icons';
	font-size: 1rem;
	line-height: inherit;
	color: #4c66fb;
	text-rendering: auto;
	-webkit-font-smoothing: antialiased
}

.datepicker thead tr .prev:before {
	content: ''
}

.datepicker thead tr .next:before {
	content: ''
}

.datepicker thead tr .dow {
	font-size: 11px;
	text-align: center;
	text-transform: uppercase;
	color: #4c66fb
}

.datepicker thead tr th {
	width: 31px;
	height: 29px;
	text-align: center
}

.datepicker tbody tr .odd {
	color: #d2ddec
}

.datepicker table tr td {
	width: 31px;
	height: 29px;
	cursor: default;
	text-align: center;
	border-radius: .25rem
}

.datepicker table tr td.new,
.datepicker table tr td.old {
	color: #b1c2d9
}

.datepicker table tr td.day:hover {
	background: #e3ebf6
}

.datepicker table tr td.active {
	color: #fff;
	background-color: #4c66fb!important
}

.datepicker table tr td.active,
.datepicker table tr td.active.disabled,
.datepicker table tr td.active.disabled:hover,
.datepicker table tr td.active:hover {
	font-weight: 600;
	background-image: none;
	text-shadow: none
}

.datepicker table tr td.today.disabled,
.datepicker table tr td.today.disabled:hover,
.datepicker table tr td.today:hover {
	color: #000;
	background-color: #e3ebf6;
	background-image: none
}

.datepicker table tr td.today {
	color: #000;
	background-color: fade(#f7bc06, 60)
}

.datepicker table tr td span {
	line-height: 42px;
	width: 42px;
	height: 42px;
	border-radius: 4px
}

.datepicker table tr td span.active {
	border-radius: .25rem;
	background-color: #4c66fb!important
}

.datepicker table tr td span.active,
.datepicker table tr td span.active.disabled,
.datepicker table tr td span.active.disabled:hover,
.datepicker table tr td span.active:hover {
	border: 0;
	background-image: none;
	text-shadow: none
}

td.active.selected.range-start.range-end.day {
	border-radius: .25rem
}

td.range-start.day {
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
	border-bottom-left-radius: 0;
	background-color: #4c66fb!important
}

.datepicker table tr td.range {
	color: #fff;
	background-color: #4c66fb
}

td.selected.range-end.day {
	border-top-left-radius: 0;
	border-top-right-radius: 0;
	border-bottom-left-radius: 0;
	background-color: #4c66fb
}

.datepicker.dropdown-menu {
	color: #95aac9;
	border-color: #dce4ec;
	border-radius: .25rem;
	box-shadow: 0 18px 35px rgba(50, 50, 93, .1), -1px 0 15px rgba(0, 0, 0, .07)
}

.datepicker-inline {
	width: auto
}

.daterangepicker {
	font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
	border: 1px solid #dce4ec;
	box-shadow: 0 18px 35px rgba(50, 50, 93, .1), -1px 0 15px rgba(0, 0, 0, .07)
}

.daterangepicker td.active,
.daterangepicker td.active:hover {
	background-color: #4c66fb
}

.daterangepicker .drp-buttons {
	border-top: 1px solid #dce4ec
}

.bootstrap-timepicker-widget .glyphicon {
	font-family: 'Material Design Icons';
	font-size: inherit;
	line-height: inherit;
	display: inline-block;
	text-rendering: auto;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale
}

.bootstrap-timepicker-widget .glyphicon-chevron-down:before {
	content: ''
}

.bootstrap-timepicker-widget .glyphicon-chevron-up:before {
	content: ''
}

.ui-widget.ui-widget-content {
	border: 1px solid #dce4ec
}

.ui-slider-range {
	background-color: #12263f
}

.ui-slider-horizontal .ui-slider-handle {
	top: -.6em;
	width: 2.5em;
	height: 1.8em;
	transition: color ease .2s;
	text-align: center;
	border: 1px solid #dce4ec;
	background: #fff;
	box-shadow: 0 2px 4px rgba(126, 142, 177, .12)
}

.ui-slider-horizontal .ui-slider-handle:after,
.ui-slider-horizontal .ui-slider-handle:before {
	font-family: 'Material Design Icons';
	font-size: 1rem;
	color: #2e384d
}

.ui-slider-horizontal .ui-slider-handle:before {
	content: ''
}

.ui-slider-horizontal .ui-slider-handle:after {
	content: ''
}

.ui-slider-horizontal .ui-slider-handle.ui-state-active {
	background-color: #0d1c2f
}

.ui-slider-horizontal .ui-slider-handle.ui-state-active:after,
.ui-slider-horizontal .ui-slider-handle.ui-state-active:before {
	color: #fff
}

.dropzone {
	transition: background-color ease .2s;
	border: 2px dashed #dce4ec!important;
	border-radius: .25rem
}

.dropzone:hover {
	background-color: #f9fbfd
}

.note-editor.note-frame {
	border-color: #dce4ec!important
}

.bootstrap-notify {
	max-width: 450px;
	padding: 10px;
	border-radius: .25rem;
	background-color: #fff;
	box-shadow: 0 18px 35px rgba(50, 50, 93, .1), -1px 0 15px rgba(0, 0, 0, .07)
}

.bootstrap-notify .avatar-title {
	font-size: 1.2rem
}

.bootstrap-notify .progress {
	position: absolute;
	z-index: 1;
	right: 0;
	bottom: -1px;
	left: 0;
	height: 2px;
	border-radius: 0;
	background-color: transparent
}

.toast {
	display: inline-block;
	min-width: 300px;
	padding: 20px 15px;
	color: #fff;
	background-color: #323232;
	box-shadow: 0 18px 35px rgba(50, 50, 93, .1), -1px 0 15px rgba(0, 0, 0, .07)
}

.toast .close {
	color: #fff!important
}

.apexcharts-canvas {
	height: 300px;
	margin: auto
}

.apexcharts-canvas .apexcharts-legend-series,
.apexcharts-canvas .apexcharts-legend-text,
.apexcharts-canvas .apexcharts-title-text,
.apexcharts-canvas .apexcharts-xaxis-label,
.apexcharts-canvas .apexcharts-xaxis-title,
.apexcharts-canvas .apexcharts-yaxis-label,
.apexcharts-canvas .apexcharts-yaxis-title,
.apexcharts-canvas text {
	font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
	font-weight: 600;
	fill: #2e384d!important
}

.invert-colors .apexcharts-legend-series,
.invert-colors .apexcharts-legend-text,
.invert-colors .apexcharts-title-text,
.invert-colors .apexcharts-xaxis-label,
.invert-colors .apexcharts-xaxis-title,
.invert-colors .apexcharts-yaxis-label,
.invert-colors .apexcharts-yaxis-title {
	fill: rgba(255, 255, 255, .57)!important
}

.invert-colors .apexcharts-download-icon svg,
.invert-colors .apexcharts-reset-zoom-icon svg,
.invert-colors .apexcharts-zoom-icon svg,
.invert-colors .apexcharts-zoom-in-icon svg,
.invert-colors .apexcharts-zoom-out-icon svg {
	fill: rgba(255, 255, 255, .57)!important
}

label.is-invalid {
	color: #f2545b!important
}

label.is-valid {
	color: #0c9!important
}

.chat-sidebar {
	max-width: 240px;
	background-color: #0d1c2f
}

.chat-sidebar .chat-sidebar-header {
	height: 60px
}

.chat-sidebar .chat-sidebar-item {
	display: block;
	padding: 10px 15px;
	opacity: .7
}

.chat-sidebar .chat-sidebar-item.active,
.chat-sidebar .chat-sidebar-item:active,
.chat-sidebar .chat-sidebar-item:focus,
.chat-sidebar .chat-sidebar-item:hover {
	opacity: 1
}

.chat-window {
	display: flex;
	flex-direction: column
}

.chat-window .chat-window-header {
	height: 65px;
	padding-right: 15px;
	padding-left: 15px;
	border-bottom: 1px solid #dce4ec;
	box-shadow: 0 2px 4px rgba(126, 142, 177, .12);
	flex: 0 0 auto;
	align-items: center
}

.chat-window .chat-window-footer {
	min-height: 65px;
	padding: 10px 15px
}

.chat-window .chat-window-body {
	overflow-y: auto;
	padding-right: 15px;
	padding-left: 15px;
	flex: 1 1 auto
}

.chat-window .chat-window-body .chat-item {
	padding: 15px 0;
	transition: all ease .2s
}

.chat-window .chat-window-body .chat-item:hover {
	background-color: #f9fbfd
}

@media (max-width:992px) {
	.chat-sidebar {
		position: fixed;
		z-index: 1
	}
}

.mail-sidebar {
	max-width: 240px;
	background-color: #0d1c2f
}

.mail-sidebar .mail-sidebar-header {
	height: 60px
}

.mail-sidebar .mail-sidebar-item {
	display: block;
	padding: 10px 15px;
	opacity: .7
}

.mail-sidebar .mail-sidebar-item.active,
.mail-sidebar .mail-sidebar-item:active,
.mail-sidebar .mail-sidebar-item:focus,
.mail-sidebar .mail-sidebar-item:hover {
	opacity: 1
}

.mail-window {
	display: flex;
	flex-direction: column
}

.mail-window .mail-window-header {
	height: 65px;
	padding-right: 15px;
	padding-left: 15px;
	border-bottom: 1px solid #dce4ec;
	box-shadow: 0 2px 4px rgba(126, 142, 177, .12);
	flex: 0 0 auto;
	align-items: center
}

.mail-window .mail-window-footer {
	min-height: 65px;
	padding: 10px 15px
}

.mail-window .mail-window-body {
	overflow-y: auto;
	padding-right: 15px;
	padding-left: 15px;
	flex: 1 1 auto
}

.mail-window .mail-window-body .mail-item {
	padding: 15px 0;
	cursor: pointer;
	transition: all ease .2s
}

.mail-window .mail-window-body .mail-item:hover {
	background-color: #f9fbfd
}

.mail-window .mail-window-body .mail-item.active {
	background-color: #edf2f9
}

.mail-window .mail-window-body .mailbox-options {
	width: 80px
}

.mail-window .mail-window-body .mailbox-name {
	width: 180px
}

.mail-window .mail-window-body .mailbox-sender {
	margin-left: .5rem
}

.compose-wrapper {
	position: fixed;
	z-index: 999;
	right: 40px;
	bottom: 0
}

.compose-wrapper .compose-header {
	padding: 0 15px
}

.compose-wrapper .compose-header .compose-toolbar {
	padding: 5px 0
}

.compose-wrapper .compose-dialog {
	width: 35vw;
	max-width: 400px;
	height: 450px;
	background-color: #fff;
	box-shadow: 0 18px 35px rgba(50, 50, 93, .1), -1px 0 15px rgba(0, 0, 0, .07)
}

.compose-wrapper .compose-body {
	overflow: hidden;
	flex: 1 1 auto
}

.compose-wrapper .compose-footer {
	padding: 8px 15px;
	border-top: 1px solid #dce4ec
}

.compose-container {
	display: none
}

.show-compose-window .compose-container {
	display: block
}

.kanban-workspace .kanban-list {
	width: 300px;
	min-width: 300px;
	padding: 10px
}

.kanban-workspace .kanban-list .kanban-list-container {
	padding: 10px;
	border-radius: .25rem;
	background-color: #d2ddec
}

.kanban-workspace .kanban-list .kanban-list-container .kanban-list-wrapper {
	padding: 10px 0
}

.kanban-board-title {
	margin: 0;
	padding: 5px;
	transition: all ease .2s;
	border-radius: .25rem
}

.kanban-board-title:focus,
.kanban-board-title:hover {
	outline: 0;
	background-color: rgba(0, 0, 0, .15)
}

.kanban-item {
	margin-bottom: 10px;
	transiton: all ease .2s
}

.kanban-ribbion {
	position: absolute;
	right: 0;
	left: 0;
	height: 4px;
	border-radius: .25rem
}

.tilt {
	transform: rotate(3deg);
	box-shadow: 0 18px 35px rgba(50, 50, 93, .1), -1px 0 15px rgba(0, 0, 0, .07)
}

.guide-item {
	min-height: 335px
}

.guide-item:after {
	content: '';
	transition: all ease .2s;
	opacity: 1
}

.guide-item:active:after,
.guide-item:focus:after,
.guide-item:hover:after {
	position: absolute;
	top: 0;
	right: 0;
	content: '';
	opacity: 1;
	border-width: 35px 0 0 35px;
	border-style: solid;
	border-color: #fff #dcdcdc
}

.bg-soft-primary {
	color: #4c66fb!important;
	background-color: #dbe0fe!important
}

.bg-soft-primary[href]:focus,
.bg-soft-primary[href]:hover {
	text-decoration: none;
	color: #4c66fb!important;
	background-color: #c2cbfd!important
}

.bg-soft-secondary {
	color: #95aac9!important;
	background-color: #eaeef4!important
}

.bg-soft-secondary[href]:focus,
.bg-soft-secondary[href]:hover {
	text-decoration: none;
	color: #95aac9!important;
	background-color: #d9e0eb!important
}

.bg-soft-success {
	color: #0c9!important;
	background-color: #ccf5eb!important
}

.bg-soft-success[href]:focus,
.bg-soft-success[href]:hover {
	text-decoration: none;
	color: #0c9!important;
	background-color: #b7f1e3!important
}

.bg-soft-info {
	color: #19b5fe!important;
	background-color: #d1f0ff!important
}

.bg-soft-info[href]:focus,
.bg-soft-info[href]:hover {
	text-decoration: none;
	color: #19b5fe!important;
	background-color: #b8e8ff!important
}

.bg-soft-warning {
	color: #f7bc06!important;
	background-color: #fdf2cd!important
}

.bg-soft-warning[href]:focus,
.bg-soft-warning[href]:hover {
	text-decoration: none;
	color: #f7bc06!important;
	background-color: #fcecb4!important
}

.bg-soft-danger {
	color: #f2545b!important;
	background-color: #fcddde!important
}

.bg-soft-danger[href]:focus,
.bg-soft-danger[href]:hover {
	text-decoration: none;
	color: #f2545b!important;
	background-color: #fac6c7!important
}

.bg-soft-light {
	color: #f9fbfd!important;
	background-color: #fefeff!important
}

.bg-soft-light[href]:focus,
.bg-soft-light[href]:hover {
	text-decoration: none;
	color: #f9fbfd!important;
	background-color: #e5e5ff!important
}

.bg-soft-dark {
	color: #12263f!important;
	background-color: #d0d4d9!important
}

.bg-soft-dark[href]:focus,
.bg-soft-dark[href]:hover {
	text-decoration: none;
	color: #12263f!important;
	background-color: #c2c7ce!important
}

.bg-gray-100 {
	background-color: #f9fbfd
}

.bg-gray-200 {
	background-color: #edf2f9
}

.bg-gray-300 {
	background-color: #e3ebf6
}

.bg-gray-400 {
	background-color: #d2ddec
}

.bg-gray-500 {
	background-color: #b1c2d9
}

.bg-gray-600 {
	background-color: #95aac9
}

.bg-gray-700 {
	background-color: #12263f
}

.bg-gray-800 {
	background-color: #11243b
}

.bg-gray-900 {
	background-color: #0d1c2f
}

.bg-white-translucent {
	background-color: rgba(255, 255, 255, .15)
}

.bg-black-translucent {
	background-color: rgba(0, 0, 0, .15)
}

.overlay-gradient-top {
	width: 100%;
	background: linear-gradient(to top, rgba(20, 16, 17, .4) 0, rgba(20, 16, 17, .28) 59%, rgba(20, 16, 17, .09) 84%, rgba(20, 16, 17, .01) 99%, rgba(255, 255, 255, 0) 100%)
}

.overlay-gradient-bottom {
	width: 100%;
	background: linear-gradient(to bottom, rgba(20, 16, 17, .4) 0, rgba(20, 16, 17, .28) 59%, rgba(20, 16, 17, .09) 84%, rgba(20, 16, 17, .01) 99%, rgba(255, 255, 255, 0) 100%)
}

.bg-white {
	background-color: #fff!important
}

.bg-transparent {
	background-color: transparent!important
}

.bg-cover {
	background-position: center;
	background-size: cover
}

.bg-overlay {
	background-color: rgba(0, 0, 0, .35)
}

.bg-overlay-light {
	background-color: rgba(255, 255, 255, .35)
}

.bg-dots {
	background-image: url(/12ea8ea715cbddede10c96a6604d1d2b50c85118/76e00/light/assets/img/patterns/dot.svg);
	background-size: 20px
}

.bg-pattern {
	background-image: url(/754d5b9bcabbae58126432b33633612196badab3/4acf8/light/assets/img/patterns/bg.svg);
	background-position: center;
	background-size: cover
}

.gradient-01 {
	background-image: linear-gradient(to top right, #5540bf, #a697f2)
}

.visible-xlg {
	display: none
}

@media (min-width:1800px) {
	.visible-xlg {
		display: block!important
	}
	.hidden-xlg {
		display: none!important
	}
	.col-xlg-1,
	.col-xlg-10,
	.col-xlg-11,
	.col-xlg-2,
	.col-xlg-3,
	.col-xlg-4,
	.col-xlg-5,
	.col-xlg-6,
	.col-xlg-7,
	.col-xlg-8,
	.col-xlg-9 {
		position: relative;
		min-height: 1px;
		padding-right: 15px;
		padding-left: 15px
	}
	.col-xlg-12 {
		position: relative;
		max-width: 100%;
		min-height: 1px;
		padding-right: 15px;
		padding-left: 15px;
		flex: 0 0 100%
	}
	.col-xlg-11 {
		max-width: 91.6667%;
		flex: 0 0 91.6667%
	}
	.col-xlg-10 {
		width: 83.3333%;
		max-width: 83.3333%;
		flex: 0 0 83.3333%
	}
	.col-xlg-9 {
		max-width: 75%;
		flex: 0 0 75%
	}
	.col-xlg-8 {
		max-width: 66.6667%;
		flex: 0 0 66.6667%
	}
	.col-xlg-7 {
		max-width: 58.3333%;
		flex: 0 0 58.3333%
	}
	.col-xlg-6 {
		max-width: 50%;
		flex: 0 0 50%
	}
	.col-xlg-5 {
		max-width: 41.6667%;
		flex: 0 0 41.6667%
	}
	.col-xlg-4 {
		max-width: 33.3333%;
		flex: 0 0 33.3333%
	}
	.col-xlg-3 {
		max-width: 25%;
		flex: 0 0 25%
	}
	.col-xlg-2 {
		max-width: 16.6667%;
		flex: 0 0 16.6667%
	}
	.col-xlg-1 {
		max-width: 8.33333%;
		flex: 0 0 8.33333%
	}
}

body.jumbo-page .admin-main {
	padding: 0
}

img {
	max-width: 100%
}

.opacity-1 {
	opacity: 1
}

.opacity-75 {
	opacity: .75
}

.opacity-50 {
	opacity: .5
}

.opacity-25 {
	opacity: .25
}

.opacity-0 {
	opacity: 0
}

.overflow-auto {
	overflow: auto
}

.overflow-hidden {
	overflow: hidden
}

.icon--name {
	width: 100px
}

.icon--item {
	transition: all linear .2s;
	opacity: .9;
	border-radius: .25rem
}

.icon--item.active,
.icon--item:hover {
	opacity: 1;
	background-color: #f6f9fc;
	box-shadow: 0 0 0 3px #3e4676
}

.icon--wrapper {
	display: inline-block;
	max-width: 135px;
	height: 100px;
	margin: 0 5px
}

.iconbar {
	position: fixed;
	z-index: 999;
	right: 0;
	bottom: 20px;
	left: 0;
	text-align: center
}

.iconbar--wrapper {
	display: inline-block;
	padding: 0 15px 15px 15px;
	transition: all ease .3s;
	color: #fff;
	border-radius: .25rem;
	box-shadow: 0 7px 14px rgba(50, 50, 93, .1), 0 3px 6px rgba(0, 0, 0, .08)
}

#iconbar-preview {
	font-size: 23px;
	vertical-align: sub
}