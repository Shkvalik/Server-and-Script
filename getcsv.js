const fetch = require('node-fetch');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: 'etc/results/out.csv',
    header: [
        {id: 'id', title: 'ID'},
        {id: 'email', title: 'Email'},
        {id: 'first_name', title: 'First Name'},
        {id: 'last_name', title: 'Last Name'},
    ]
});

fetch('https://reqres.in/api/users').then((data) => data.json()).then(function(data) {
    csvWriter
        .writeRecords(data.data)
        .then(()=> console.log('The CSV file was written successfully'));

})
