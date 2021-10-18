all: out/main.js out/sw.js

out/main.js: main.js
	./node_modules/.bin/esbuild main.js --bundle --outfile=out/main.js

out/sw.js: sw.js
	./node_modules/.bin/esbuild sw.js --bundle --outfile=out/sw.js
