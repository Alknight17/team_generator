function generateHTML(employees) {
    let employeeData = ""
    for(let employee of employees) {
        // insert card styling
        //add new p tags for getemail/getid etc..
        let employeeString = ` <div>
        <p> ${employee.getName()}  </p>
        
    </div>
    `
    employeeData += employeeString;
    }
    return `<!DOCTYPE html>
    <html lang="eng">
    
    <head>
        <meta charset="UTF-8">
        <title>Team Generator</title>
    </head>
    
    <body>
    <h1>team generator</h1>
    
   ${employeeData};
    
    
    
    
    
    
    </body>
    </html>
    `
}


module.exports = generateHTML;