text = document.getElementById('text');

window.addEventListener('keydown', function(e) {
    text.innerHTML = `
    <h2> Key Discription </h2>
    
    <div class="key">

    <table>

    <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
    </tr>

    <tr>
    <th>${e.Key===' ' ? 'Space' : e.key}</th>
    <th>${e.keyCode}</th>
    <th>${e.code}</th>  
    </tr>

    </table>
    </div>
    `;
});
