document.getElementById('run').addEventListener('click', function() {
    const htmlCode = document.getElementById('html-editor').value;
    const cssCode = "<style>" + document.getElementById('css-editor').value + "</style>";
    const jsCode = "<script>" + document.getElementById('js-editor').value + "<\/script>";

    const outputFrame = document.getElementById('output');
    outputFrame.contentDocument.body.innerHTML = htmlCode + cssCode + jsCode;
});