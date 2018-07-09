var jsonQ = require("jsonq");
const express = require('express');
const app = express();
const fs = require('fs');
let jsonObect = {};

fs.readFile('../assets/masterdata.json', 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }
    jsonObect = jsonQ(data);
});

app.get('/allapps', (req, res) => {
    let response = jsonObect.find('appName');
    res.send(response.value());
});

app.get('/:appname', (req, res) => {
    let appnameurl = req.params.appname;

    var subAppNamesArrayResult = subAppNamesArray(appnameurl);
    var subAppNames = subAppNamesArrayResult.find('subAppName');
    res.send(subAppNames.value());
});

app.get('/:appname/:subappname', (req, res) => {
    let appnameurl = req.params.appname;
    let subappnameurl = req.params.subappname;

    var jsonTableData = getTableRecords(appnameurl, subappnameurl);
    res.send(jsonTableData);
});

function subAppNamesArray(appnameurl) {
    var appNameFromJSON = jsonObect.find('appName', function () {
        return this == appnameurl
    });
    var subAppNamesArray = appNameFromJSON.sibling('subAppNames');
    return subAppNamesArray;
}

function getTableRecords(appnameurl, subappnameurl) {
    var responseJSON = {};

    var subAppNamesArrayResult = subAppNamesArray(appnameurl);
    var myAppData = subAppNamesArrayResult.find('subAppName', function () {
        return this == subappnameurl
    });

    var records = myAppData.sibling('Records');
    var resultArray = records.firstElm();
    sortData(resultArray);

    var counter = 0;
    var sortedResult = [];

    loop1:
    for (var key of resultArray) {
        loop2:
        for (var record of key['values']) {
            sortedResult.push(record);
            counter++;
            if (counter == 5)
                break loop1;
        }
    }
    return sortedResult;
}

function sortData(jsonArray) {
    jsonArray.sort(function (a, b) {
        var dateA = new Date(a.year), dateB = new Date(b.year)
        return dateB - dateA //sort by date ascending
    });
}
const port = process.env.PORT || 3000;
let server = app.listen(port, () => { console.log(`app running on port ${port}`) });