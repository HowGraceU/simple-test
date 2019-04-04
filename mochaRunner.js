const Mocha = require('mocha');

let mocha = new Mocha({
    reporter: 'mochawesome',
    reporterOptions: {
        reportDir: './docs/customReportFilename',
        // quiet: true
    }
});

mocha.addFile('./tests/server/app.spec.js');
mocha.run(() => {
    process.exit();
})