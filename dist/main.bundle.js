webpackJsonp([1,4],{

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav>\n    <div class=\"nav-wrapper\">\n      <ul class=\"left \">\n        <li class=\"tab\"><a (click)=\"show = 'Resume'\">Resume</a></li>\n        <li class=\"tab\"><a (click)=\"show = 'Portfolio'\">Portfolio</a></li>\n      </ul>\n      <ul class=\"right\">\n        <li class=\"tab\">\n          <a class='dropdown-button' data-hover=\"true\" data-alignment=\"right\" data-beloworigin=\"true\" data-activates='dropdown1'>Język/Language</a>\n        </li>\n      </ul>\n      <ul id='dropdown1' class='dropdown-content'>\n        <li><a (click)=\"language = 'Polish'\">Polski</a></li>\n        <li><a (click)=\"language = 'English'\">English</a></li>\n      </ul>\n    </div>\n  </nav>\n  <div class=\"heading\">\n    <h1 class=\"name\">Wojciech Ryba</h1>\n    <h5 class=\"name\">Junior Front-End Developer</h5>\n  </div>\n</header>\n<main>\n    <app-resume *ngIf=\"show === 'Resume'\" [language]=\"language\"></app-resume>\n    <app-portfolio *ngIf=\"show === 'Portfolio'\" [language]=\"language\"></app-portfolio>\n</main>\n<footer class=\"page-footer blue darken-1\" id=\"footer\" *ngIf=\"language === 'English'\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col l6 s12\">\n        <h5 class=\"white-text\">Contact Info</h5>\n        <p class=\"grey-text text-lighten-4\">You can contact me at wojryba@gmail.com</p>\n      </div>\n      <div class=\"col l4 offset-l2 s12\">\n        <a href=\"https://github.com/wojryba/\"><i class=\"fa fa-github fa-4x\" aria-hidden=\"true\"></i></a>\n        <a href=\"https://www.facebook.com/wojryba\"><i class=\"fa fa-facebook-official fa-4x\" aria-hidden=\"true\"></i></a>\n      </div>\n    </div>\n  </div>\n  <div class=\"footer-copyright\">\n    <div class=\"container\">\n    © 2017 Wojciech Ryba\n    </div>\n  </div>\n</footer>\n\n<footer class=\"page-footer blue darken-1\" id=\"footer\" *ngIf=\"language === 'Polish'\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col l6 s12\">\n        <h5 class=\"white-text\">Informacje kontaktowe:</h5>\n        <p class=\"grey-text text-lighten-4\">Email: wojryba@gmail.com</p>\n      </div>\n      <div class=\"col l4 offset-l2 s12\">\n        <a href=\"https://github.com/wojryba/\"><i class=\"fa fa-github fa-4x\" aria-hidden=\"true\"></i></a>\n        <a href=\"https://www.facebook.com/wojryba\"><i class=\"fa fa-facebook-official fa-4x\" aria-hidden=\"true\"></i></a>\n      </div>\n    </div>\n  </div>\n  <div class=\"footer-copyright\">\n    <div class=\"container\">\n    © 2017 Wojciech Ryba\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

module.exports = "<div class=\"portfolio\" *ngIf=\"language === 'English'\">\n  <div class=\"projects\" [@enter]>\n    <h3 class=\"accent-color\">Projects</h3>\n    <div class=\"leftProject\">\n      <div class=\"projectImg right\">\n        <img src=\"../../../assets/spotify.png\" alt=\"Momentum Project\" />\n      </div>\n      <md-card>\n        <md-card-title class=\"accent-color\" class=\"accent-color\">Spotify Clone</md-card-title>\n        <md-card-content>This is a clone of Spotify website and it's Web Player. It uses mostly Angular together with Spotify WebApi. Node and Express are also in use.\n        </md-card-content>\n        <md-card-actions>\n          <div class=\"projectIcons\">\n            <a href=\"https://github.com/wojryba/spotify_clone\"><i class=\"fa fa-github fa-3x\" aria-hidden=\"true\"></i></a>\n            <a href=\"https://enigmatic-sea-40799.herokuapp.com/\"><img id=\"heroku\" src=\"../../../assets/heroku.png\" alt=\"Heroku Icon\"/></a>\n          </div>\n        </md-card-actions>\n      </md-card>\n    </div>\n    <div class=\"rightProject\">\n\n    </div>\n  </div>\n\n  <div class=\"projects\" [@enter]>\n    <h3 class=\"accent-color\">Remote Team Projects</h3>\n    <div class=\"leftProject\">\n      <div class=\"projectImg right\">\n        <img src=\"../../../assets/momentum.png\" alt=\"Momentum Project\" />\n      </div>\n      <md-card>\n        <md-card-title class=\"accent-color\" class=\"accent-color\">Momentum Clone</md-card-title>\n        <md-card-content>A remote team project made with <a href=\"https://github.com/NinoMaj/\">Nino_maj</a> and <a href=\"https://github.com/loolys\">Looly</a>. <br />\n          React, Redux, Node, Express, MongoDB.\n        </md-card-content>\n        <md-card-actions>\n          <div class=\"projectIcons\">\n            <a href=\"https://github.com/wojryba/momentum_clone-1\"><i class=\"fa fa-github fa-3x\" aria-hidden=\"true\"></i></a>\n            <a href=\"https://serene-stream-26049.herokuapp.com/\"><img id=\"heroku\" src=\"../../../assets/heroku.png\" alt=\"Heroku Icon\"/></a>\n          </div>\n        </md-card-actions>\n      </md-card>\n    </div>\n    <div class=\"rightProject\">\n      <div class=\"projectImg left\">\n        <img src=\"../../../assets/bot.png\" alt=\"Slack bot Project\" />\n      </div>\n      <md-card>\n        <md-card-title class=\"accent-color\" class=\"accent-color\">Number's Bot</md-card-title>\n        <md-card-content>Remote team project produced together with <a href=\"https://github.com/asanhix\">Asanhix</a>. <br />\n          Slack Bot made with Node.JS.\n        </md-card-content>\n        <md-card-actions>\n          <div class=\"projectIcons\">\n            <a href=\"https://github.com/wojryba/A-F-Numbers-bot\"><i class=\"fa fa-github fa-3x\" aria-hidden=\"true\"></i></a>\n            <a href=\"https://rhubarb-pie-22231.herokuapp.com/\"><img id=\"heroku\" src=\"../../../assets/heroku.png\" alt=\"Heroku Icon\"/></a>\n          </div>\n        </md-card-actions>\n      </md-card>\n    </div>\n  </div>\n\n  <div class=\"projects\" [@enter]>\n    <h3 class=\"accent-color\">Single Page Web Apps</h3>\n    <div class=\"leftProject\">\n      <div class=\"projectImg right\">\n        <img src=\"../../../assets/picterest.png\" alt=\"Pinterest Clone\" />\n      </div>\n      <md-card>\n        <md-card-title class=\"accent-color\">Pinterest Clone</md-card-title>\n        <md-card-content>Angular app, with node, express and mongodb in the backend.\n        </md-card-content>\n        <md-card-actions>\n          <div class=\"projectIcons\">\n            <a href=\"https://github.com/wojryba/pinterest_clone\"><i class=\"fa fa-github fa-3x\" aria-hidden=\"true\"></i></a>\n            <a href=\"https://rocky-taiga-53739.herokuapp.com/\"><img id=\"heroku\" src=\"../../../assets/heroku.png\" alt=\"Heroku Icon\"/></a>\n          </div>\n        </md-card-actions>\n      </md-card>\n    </div>\n\n    <div class=\"rightProject\">\n      <div class=\"projectImg left\">\n        <img src=\"../../../assets/stock.png\" alt=\"Chart the stock Market\" />\n      </div>\n      <md-card>\n        <md-card-title class=\"accent-color\">Chart the stock Market</md-card-title>\n        <md-card-content>Angular app, with express server in the backend.<br />\n          App uses Quandl API, and SocketIO.\n        </md-card-content>\n        <md-card-actions>\n          <div class=\"projectIcons\">\n            <a href=\"https://github.com/wojryba/chart_the_stock_market\"><i class=\"fa fa-github fa-3x\" aria-hidden=\"true\"></i></a>\n            <a href=\"https://enigmatic-dusk-97277.herokuapp.com/\"><img id=\"heroku\" src=\"../../../assets/heroku.png\" alt=\"Heroku Icon\"/></a>\n          </div>\n        </md-card-actions>\n      </md-card>\n    </div>\n\n    <div class=\"leftProject\">\n      <div class=\"projectImg right\">\n        <img src=\"../../../assets/pokemon.png\" alt=\"Pokemon Trading Center\" />\n      </div>\n      <md-card>\n        <md-card-title class=\"accent-color\">Pokemon Trading Center</md-card-title>\n        <md-card-content>Angular app, with node, express and mongodb in the backend.<br />\n          App uses PokeAPI and SocketIO.\n        </md-card-content>\n        <md-card-actions>\n          <div class=\"projectIcons\">\n            <a href=\"https://github.com/wojryba/pokemon_trading_club\"><i class=\"fa fa-github fa-3x\" aria-hidden=\"true\"></i></a>\n            <a href=\"https://cryptic-dusk-78570.herokuapp.com/\"><img id=\"heroku\" src=\"../../../assets/heroku.png\" alt=\"Heroku Icon\"/></a>\n          </div>\n        </md-card-actions>\n      </md-card>\n    </div>\n\n    <div class=\"rightProject\">\n      <div class=\"projectImg left\">\n        <img src=\"../../../assets/night.png\" alt=\"Nightlife Coordination App\" />\n      </div>\n      <md-card>\n        <md-card-title class=\"accent-color\">Nightlife Coordination App</md-card-title>\n        <md-card-content>Angular app, with node, express and mongodb in the backend. <br />\n          App uses YealpAPI.\n        </md-card-content>\n        <md-card-actions>\n          <div class=\"projectIcons\">\n            <a href=\"https://github.com/wojryba/voting_app\"><i class=\"fa fa-github fa-3x\" aria-hidden=\"true\"></i></a>\n            <a href=\"https://lychee-custard-64732.herokuapp.com/\"><img id=\"heroku\" src=\"../../../assets/heroku.png\" alt=\"Heroku Icon\"/></a>\n          </div>\n        </md-card-actions>\n      </md-card>\n    </div>\n\n    <div class=\"leftProject\">\n      <div class=\"projectImg right\">\n        <img src=\"../../../assets/vote.png\" alt=\"Voting App\" />\n      </div>\n      <md-card>\n        <md-card-title class=\"accent-color\">Voting App</md-card-title>\n        <md-card-content>Angular app, with node, express and mongodb in the backend. <br />\n          My first Angular app.\n        </md-card-content>\n        <md-card-actions>\n          <div class=\"projectIcons\">\n            <a href=\"https://github.com/wojryba/voting_app\"><i class=\"fa fa-github fa-3x\" aria-hidden=\"true\"></i></a>\n            <a href=\"https://damp-coast-64326.herokuapp.com/\"><img id=\"heroku\" src=\"../../../assets/heroku.png\" alt=\"Heroku Icon\"/></a>\n          </div>\n        </md-card-actions>\n      </md-card>\n    </div>\n  </div>\n\n</div>\n\n\n\n<div class=\"portfolio\" *ngIf=\"language === 'Polish'\">\n  <div class=\"projects\" [@enter]>\n    <h3 class=\"accent-color\">Projekty</h3>\n    <div class=\"leftProject\">\n      <div class=\"projectImg right\">\n        <img src=\"../../../assets/spotify.png\" alt=\"Momentum Project\" />\n      </div>\n      <md-card>\n        <md-card-title class=\"accent-color\" class=\"accent-color\">Klon Spotify</md-card-title>\n        <md-card-content>Klon Spotify Web Player. Aplikacja używa gówłnie Angular. BackEnd zrobiony w Node i Express.\n        </md-card-content>\n        <md-card-actions>\n          <div class=\"projectIcons\">\n            <a href=\"https://github.com/wojryba/spotify_clone\"><i class=\"fa fa-github fa-3x\" aria-hidden=\"true\"></i></a>\n            <a href=\"https://enigmatic-sea-40799.herokuapp.com/\"><img id=\"heroku\" src=\"../../../assets/heroku.png\" alt=\"Heroku Icon\"/></a>\n          </div>\n        </md-card-actions>\n      </md-card>\n    </div>\n    <div class=\"rightProject\">\n\n    </div>\n  </div>\n\n  <div class=\"projects\" [@enter]>\n    <h3 class=\"accent-color\">Zdalne Projekty Zespołowe</h3>\n    <div class=\"leftProject\">\n      <div class=\"projectImg right\">\n        <img src=\"../../../assets/momentum.png\" alt=\"Momentum Project\" />\n      </div>\n      <md-card>\n        <md-card-title class=\"accent-color\" class=\"accent-color\">Klon Momentum</md-card-title>\n        <md-card-content>Projekt zespołowy wykonany zdalnie, wspólnie z <a href=\"https://github.com/NinoMaj/\">Nino_maj</a> i <a href=\"https://github.com/loolys\">Looly</a>. <br />\n          React, Redux, Node, Express, MongoDB.\n        </md-card-content>\n        <md-card-actions>\n          <div class=\"projectIcons\">\n            <a href=\"https://github.com/wojryba/momentum_clone-1\"><i class=\"fa fa-github fa-3x\" aria-hidden=\"true\"></i></a>\n            <a href=\"https://serene-stream-26049.herokuapp.com/\"><img id=\"heroku\" src=\"../../../assets/heroku.png\" alt=\"Heroku Icon\"/></a>\n          </div>\n        </md-card-actions>\n      </md-card>\n    </div>\n    <div class=\"rightProject\">\n      <div class=\"projectImg left\">\n        <img src=\"../../../assets/bot.png\" alt=\"Slack bot Project\" />\n      </div>\n      <md-card>\n        <md-card-title class=\"accent-color\" class=\"accent-color\">Number's Bot</md-card-title>\n        <md-card-content>Projekt zespołowy wykonany zdalnie, wspólnie z <a href=\"https://github.com/asanhix\">Asanhix</a>. <br />\n          Slack Bot wykonany w Node.JS.\n        </md-card-content>\n        <md-card-actions>\n          <div class=\"projectIcons\">\n            <a href=\"https://github.com/wojryba/A-F-Numbers-bot\"><i class=\"fa fa-github fa-3x\" aria-hidden=\"true\"></i></a>\n            <a href=\"https://rhubarb-pie-22231.herokuapp.com/\"><img id=\"heroku\" src=\"../../../assets/heroku.png\" alt=\"Heroku Icon\"/></a>\n          </div>\n        </md-card-actions>\n      </md-card>\n    </div>\n  </div>\n\n  <div class=\"projects\" [@enter]>\n    <h3 class=\"accent-color\">Single Page Web Apps</h3>\n    <div class=\"leftProject\">\n      <div class=\"projectImg right\">\n        <img src=\"../../../assets/picterest.png\" alt=\"Pinterest Clone\" />\n      </div>\n      <md-card>\n        <md-card-title class=\"accent-color\">Klon Pinterest</md-card-title>\n        <md-card-content>Aplikacja wykonana w Angular. Backend w  node, express, oraz mongodb.\n        </md-card-content>\n        <md-card-actions>\n          <div class=\"projectIcons\">\n            <a href=\"https://github.com/wojryba/pinterest_clone\"><i class=\"fa fa-github fa-3x\" aria-hidden=\"true\"></i></a>\n            <a href=\"https://rocky-taiga-53739.herokuapp.com/\"><img id=\"heroku\" src=\"../../../assets/heroku.png\" alt=\"Heroku Icon\"/></a>\n          </div>\n        </md-card-actions>\n      </md-card>\n    </div>\n\n    <div class=\"rightProject\">\n      <div class=\"projectImg left\">\n        <img src=\"../../../assets/stock.png\" alt=\"Chart the stock Market\" />\n      </div>\n      <md-card>\n        <md-card-title class=\"accent-color\">Chart the stock Market</md-card-title>\n        <md-card-content>Angular, z serverem w express.<br />\n          Aplikacja używa Quandl API, oraz SocketIO.\n        </md-card-content>\n        <md-card-actions>\n          <div class=\"projectIcons\">\n            <a href=\"https://github.com/wojryba/chart_the_stock_market\"><i class=\"fa fa-github fa-3x\" aria-hidden=\"true\"></i></a>\n            <a href=\"https://enigmatic-dusk-97277.herokuapp.com/\"><img id=\"heroku\" src=\"../../../assets/heroku.png\" alt=\"Heroku Icon\"/></a>\n          </div>\n        </md-card-actions>\n      </md-card>\n    </div>\n\n    <div class=\"leftProject\">\n      <div class=\"projectImg right\">\n        <img src=\"../../../assets/pokemon.png\" alt=\"Pokemon Trading Center\" />\n      </div>\n      <md-card>\n        <md-card-title class=\"accent-color\">Pokemon Trading Center</md-card-title>\n        <md-card-content>Aplikacja wykonana w Angular. Backend w  node, express, oraz mongodb..<br />\n          Aplikacja używa PokeAPI and SocketIO.\n        </md-card-content>\n        <md-card-actions>\n          <div class=\"projectIcons\">\n            <a href=\"https://github.com/wojryba/pokemon_trading_club\"><i class=\"fa fa-github fa-3x\" aria-hidden=\"true\"></i></a>\n            <a href=\"https://cryptic-dusk-78570.herokuapp.com/\"><img id=\"heroku\" src=\"../../../assets/heroku.png\" alt=\"Heroku Icon\"/></a>\n          </div>\n        </md-card-actions>\n      </md-card>\n    </div>\n\n    <div class=\"rightProject\">\n      <div class=\"projectImg left\">\n        <img src=\"../../../assets/night.png\" alt=\"Nightlife Coordination App\" />\n      </div>\n      <md-card>\n        <md-card-title class=\"accent-color\">Nightlife Coordination App</md-card-title>\n        <md-card-content>Aplikacja wykonana w Angular. Backend w  node, express, oraz mongodb. <br />\n          Aplikacja używa YealpAPI.\n        </md-card-content>\n        <md-card-actions>\n          <div class=\"projectIcons\">\n            <a href=\"https://github.com/wojryba/voting_app\"><i class=\"fa fa-github fa-3x\" aria-hidden=\"true\"></i></a>\n            <a href=\"https://lychee-custard-64732.herokuapp.com/\"><img id=\"heroku\" src=\"../../../assets/heroku.png\" alt=\"Heroku Icon\"/></a>\n          </div>\n        </md-card-actions>\n      </md-card>\n    </div>\n\n    <div class=\"leftProject\">\n      <div class=\"projectImg right\">\n        <img src=\"../../../assets/vote.png\" alt=\"Voting App\" />\n      </div>\n      <md-card>\n        <md-card-title class=\"accent-color\">Voting App</md-card-title>\n        <md-card-content>Aplikacja wykonana w Angular. Backend w  node, express, oraz mongodb. <br />\n          Moja pierwsza strona wykonana w Angular.\n        </md-card-content>\n        <md-card-actions>\n          <div class=\"projectIcons\">\n            <a href=\"https://github.com/wojryba/voting_app\"><i class=\"fa fa-github fa-3x\" aria-hidden=\"true\"></i></a>\n            <a href=\"https://damp-coast-64326.herokuapp.com/\"><img id=\"heroku\" src=\"../../../assets/heroku.png\" alt=\"Heroku Icon\"/></a>\n          </div>\n        </md-card-actions>\n      </md-card>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

module.exports = "<div class=\"top\" [@enter] *ngIf=\"language === 'English'\">\n  <p>I'm 22 years old, living in Lublin. I love to learn. I've been learning FrontEnd development for the past 7 months. I've been mostly working with MEAN Stack. Besides that, I've build two remote team projects, and third one is in the making (with React&Redux). I'm also familiar with Node.js environment, as well as with mongoDB. I have got FreeCodeCamp Back End Certificate. And currently, I'm looking for my first job!</p>\n</div>\n\n<div class=\"top\" [@enter] *ngIf=\"language === 'Polish'\">\n  <p>Mam 22 lata, obecnie mieszkam w Lublinie. Uczę się FrontEnd Development od ponad 7 miesięcy. Głównie pracowałem z MEAN Stack. Poza tym, wykonałem dwa projekty zespołowe, pracując zdalnie, a trzeci właśnie się tworzy (w React&Redux). Jestem także zaznajomiony z środowiskiem Node.js, a także z MongoDB. Posiadam certyfikat FreeCodeCamp Back End. Obecnie, poszukuję swej pierwszej pracy w branży.</p>\n</div>\n\n<aside class=\"sidebar\" [@enter] *ngIf=\"language === 'English'\">\n  <md-card>\n    <h4 class=\"accent-color\">Personal</h4>\n    <ul>\n      <li><strong>Name</strong> <span>Wojciech Ryba</span></li>\n      <li><strong>Birthday</strong> <span>13.08.1994</span></li>\n      <li><strong>Languages</strong> <span>Polish (native) <br /> English (fluent)</span></li>\n      <br />\n      <li><strong>Email</strong> <span>wojryba@gmail.com</span></li>\n    </ul>\n    <br />\n    <h4 class=\"accent-color\">Software</h4>\n    <ul>\n      <li>More then 7 months of expirience.</li>\n      <li>Experience in remote work with a team.</li>\n      <li>FreeCodeCamp Back End Certificate.</li>\n      <li>Would love to work with Angular or React.</li>\n    </ul>\n    <br />\n    <ul>\n      <li><a href=\"https://github.com/wojryba/\">My Github Repository</a></li>\n    </ul>\n  </md-card>\n</aside>\n\n<aside class=\"sidebar\" [@enter] *ngIf=\"language === 'Polish'\">\n  <md-card>\n    <h4 class=\"accent-color\">Informacje osobiste</h4>\n    <ul>\n      <li><strong>Imię</strong> <span>Wojciech Ryba</span></li>\n      <li><strong>Data urodzenia</strong> <span>13.08.1994</span></li>\n      <li><strong>Języki</strong> <span>Polski (ojczysty) <br /> Angielski (biegły)</span></li>\n      <br />\n      <li><strong>Email</strong> <span>wojryba@gmail.com</span></li>\n    </ul>\n    <br />\n    <h4 class=\"accent-color\">Software</h4>\n    <ul>\n      <li>Ponad 7 miesięcy doświadczenia.</li>\n      <li>Doświadczenie w pracy zdalnej w zespole.</li>\n      <li>Certyfikat FreeCodeCamp Back End.</li>\n      <li>Chciabym pracować z Angular lub React.</li>\n    </ul>\n    <br />\n    <ul>\n      <li><a href=\"https://github.com/wojryba/\">Moje Github Repository</a></li>\n    </ul>\n  </md-card>\n</aside>\n\n<main class=\"mainResume\" [@enter] *ngIf=\"language === 'English'\">\n  <h4 class=\"accent-color\">My Skills:</h4>\n\n  <div class=\"list\">\n    <h5 class=\"accent-color\">I mostly Worked with:</h5>\n    <ul class=\"collection\">\n      <li class=\"collection-item avatar grey lighten-5\">\n        <img class=\"circle\" src=\"../../../assets/angular.png\" alt=\"angular\" />\n        <span class=\"title\"><strong>Angular</strong></span>\n        <p>My favorite framework.</p>\n      </li>\n      <li class=\"collection-item avatar grey lighten-5\">\n        <img class=\"circle\" src=\"../../../assets/webdevfront.jpg\" alt=\"node\" />\n        <span class=\"title\"><strong>HTML/CSS/JavaScript</strong></span>\n        <p>Practiced with every project.</p>\n      </li>\n      <li class=\"collection-item avatar grey lighten-5\">\n        <img class=\"circle\" src=\"../../../assets/nodejs.png\" alt=\"node\" />\n        <span class=\"title\"><strong>Node/Express</strong></span>\n        <p>Finished FreeCodeCamp Back End Certificate.</p>\n      </li>\n      <li class=\"collection-item avatar grey lighten-5\">\n        <i class=\"fa fa-github fa-5x circle\" aria-hidden=\"true\"></i>\n        <span class=\"title\"><strong>Git/GitHub</strong></span>\n      </li>\n    </ul>\n    <h5 class=\"accent-color\">I'm also familiar with:</h5>\n    <ul class=\"collection\">\n      <li class=\"collection-item grey lighten-5\">\n        React&Redux - Used in remote team project - 'Momentum Clone'.\n      </li>\n      <li class=\"collection-item grey lighten-5\">\n        MongoDB - With Moongoose.\n      </li>\n      <li class=\"collection-item grey lighten-5\">\n        ES6\n      </li>\n      <li class=\"collection-item grey lighten-5\">\n        Bootstrap\n      </li>\n    </ul>\n  </div>\n</main>\n\n<main class=\"mainResume\" [@enter] *ngIf=\"language === 'Polish'\">\n  <h4 class=\"accent-color\">Me umiejętności:</h4>\n\n  <div class=\"list\">\n    <h5 class=\"accent-color\">Głównie pracowałem z:</h5>\n    <ul class=\"collection\">\n      <li class=\"collection-item avatar grey lighten-5\">\n        <img class=\"circle\" src=\"../../../assets/angular.png\" alt=\"angular\" />\n        <span class=\"title\"><strong>Angular</strong></span>\n        <p>Mój ulubiony framework.</p>\n      </li>\n      <li class=\"collection-item avatar grey lighten-5\">\n        <img class=\"circle\" src=\"../../../assets/webdevfront.jpg\" alt=\"node\" />\n        <span class=\"title\"><strong>HTML/CSS/JavaScript</strong></span>\n        <p>Ćwiczone przy każdym projekcie.</p>\n      </li>\n      <li class=\"collection-item avatar grey lighten-5\">\n        <img class=\"circle\" src=\"../../../assets/nodejs.png\" alt=\"node\" />\n        <span class=\"title\"><strong>Node/Express</strong></span>\n        <p>Uzyskałem FreeCodeCamp Back End Certificate.</p>\n      </li>\n      <li class=\"collection-item avatar grey lighten-5\">\n        <i class=\"fa fa-github fa-5x circle\" aria-hidden=\"true\"></i>\n        <span class=\"title\"><strong>Git/GitHub</strong></span>\n      </li>\n    </ul>\n    <h5 class=\"accent-color\">Jestem także zaznajomiony z:</h5>\n    <ul class=\"collection\">\n      <li class=\"collection-item grey lighten-5\">\n        React&Redux - użyty w zespołowym projekcie wykonanym zdalnie - \"Klon Momentum\".\n      </li>\n      <li class=\"collection-item grey lighten-5\">\n        MongoDB - razem z Moongoose.\n      </li>\n      <li class=\"collection-item grey lighten-5\">\n        ES6\n      </li>\n      <li class=\"collection-item grey lighten-5\">\n        Bootstrap\n      </li>\n    </ul>\n  </div>\n</main>\n"

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(81);


/***/ }),

/***/ 80:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 80;


/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(93);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.show = 'Portfolio';
        this.language = 'English';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(153),
        styles: [__webpack_require__(148)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_resume_resume_component__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_portfolio_portfolio_component__ = __webpack_require__(91);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_resume_resume_component__["a" /* ResumeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_portfolio_portfolio_component__["a" /* PortfolioComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MdMenuModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PortfolioComponent = (function () {
    function PortfolioComponent() {
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    return PortfolioComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", Object)
], PortfolioComponent.prototype, "language", void 0);
PortfolioComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'app-portfolio',
        template: __webpack_require__(154),
        styles: [__webpack_require__(149)],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["a" /* trigger */])('enter', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* transition */])(':enter', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ opacity: 0 }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('300ms', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ opacity: 1 }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], PortfolioComponent);

//# sourceMappingURL=portfolio.component.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResumeComponent = (function () {
    function ResumeComponent() {
    }
    ResumeComponent.prototype.ngOnInit = function () {
    };
    return ResumeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", Object)
], ResumeComponent.prototype, "language", void 0);
ResumeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'app-resume',
        template: __webpack_require__(155),
        styles: [__webpack_require__(150)],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["a" /* trigger */])('enter', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* transition */])(':enter', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ opacity: 0 }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('300ms', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ opacity: 1 }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], ResumeComponent);

//# sourceMappingURL=resume.component.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.bundle.js.map