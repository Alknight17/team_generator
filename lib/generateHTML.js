function generateHTML(employees) {
    return `<!DOCTYPE html>
    <html lang="eng">
    
    <head>
        <meta charset="UTF-8">
        <title>Team Generator</title>
    </head>
    
    <body>
    <h1>team generator</h1>
    
    <div>
        <p> ${employees[0].getName()}  </p>
    </div>
    
    
    
    
    
    
    </body>
    </html>
    `
}


module.exports = generateHTML;