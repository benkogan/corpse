corpse
======

For Postcrypt's [Exquisite Corpse][ec-game] show.

Head by [Ben Kogan](http://github.com/benkogan).

Body by [Dylan Kario](http://github.com/dkario).

Legs by [Henry Van Dusen](http://github.com/hvandusen).

Feet by [Kevin Roark](http://github.com/kevin-roark).

[ec-game]: http://en.wikipedia.org/wiki/Exquisite_corpse

Developing
----------

Build using Browserify:

    browserify scripts/index.js -o corpse.js

While developing, you may run into an issue with Chrome where open the file locally causes the following error: "Canvas has been tainted by cross-origin data". To work around this, either serve "index.html" to (for example) `0.0.0.0:8080` or start Chrome with the following command (on a Mac):

    open -a Google\ Chrome --args --disable-web-security

