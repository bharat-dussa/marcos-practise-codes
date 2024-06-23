const htmlCode = document.getElementById('html-code');
const cssCode = document.getElementById('css-code');
const outputFrame = document.getElementById('output-frame');

function updateOutput() {
    const html = htmlCode.value;
    const css = `<style>${cssCode.value}</style>`;
    const output = outputFrame.contentDocument || outputFrame.contentWindow.document;
    output.open();
    output.write(html + css);
    output.close();
}

htmlCode.addEventListener('input', updateOutput);
cssCode.addEventListener('input', updateOutput);
