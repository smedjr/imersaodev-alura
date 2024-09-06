function runCode() {
    const htmlCode = document.getElementById('html-code').value; // Obtém o código HTML inserido pelo usuário
    const cssCode = document.getElementById('css-code').value;  // Obtém o código CSS inserido pelo usuário
    const jsCode = document.getElementById('js-code').value;  // Obtém o código JavaScript inserido pelo usuário
    const outputFrame = document.getElementById('output-frame'); // Referencia o iframe onde o resultado será exibido

    const outputDoc = outputFrame.contentDocument || outputFrame.contentWindow.document; // Acessa o documento do iframe para manipulação
    outputDoc.open();  // Abre o documento para escrita
    outputDoc.write(`  // Insere o código HTML, CSS e JavaScript no documento do iframe
        <style>${cssCode}</style>
        ${htmlCode}
        <script>${jsCode}<\/script>
    `);
    outputDoc.close();  // Fecha o documento para aplicar as alterações
}
