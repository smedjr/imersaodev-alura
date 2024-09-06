function runCode() {
    const htmlCode = document.getElementById('html-code').value; // Corrigido para .value
    const cssCode = document.getElementById('css-code').value; // Corrigido para .value
    const jsCode = document.getElementById('js-code').value; // Corrigido para .value
    const outputFrame = document.getElementById('output-frame');

    const outputDoc = outputFrame.contentDocument || outputFrame.contentWindow.document;
    outputDoc.open();
    outputDoc.write(`
        <style>${cssCode}</style>
        ${htmlCode}
        <script>${jsCode}<\/script>
    `);
    outputDoc.close();
}