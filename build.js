const fs = require('fs');

function build() {
    const html = fs.readFileSync('index.template.html', 'utf8');
    const css = fs.readFileSync('style.css', 'utf8');
    const js = fs.readFileSync('script.js', 'utf8');

    const finalHtml = html.replace('/* INJECT_CSS */', css).replace('/* INJECT_JS */', js);
    fs.writeFileSync('index.html', finalHtml);
    console.log('Build complete -> index.html');
}

build();
