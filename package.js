Package.describe({
  name: 'clinical:hl7-resource-measure-report',
  version: '2.1.3',
  summary: 'HL7 FHIR Resource - MeasureReport',
  git: 'https://github.com/clinical-meteor/hl7-resource-measure-report',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.3');

  api.use('aldeed:collection2@3.0.0');
  api.use('simple:json-routes@2.1.0');
  api.use('momentjs:moment@2.17.1');
  api.use('ecmascript@0.12.4');
  api.use('session');
  api.use('http'); 
  api.use('react-meteor-data@0.2.15');

  api.use('clinical:extended-api@2.5.0');
  api.use('matb33:collection-hooks@0.7.15');
  
  api.addFiles('lib/MeasureReports.js', ['client', 'server']);

  api.export('MeasureReport');
  api.export('MeasureReports');
  api.export('MeasureReportSchema');

  api.mainModule('index.jsx', 'client');
});

Npm.depends({
  "simpl-schema": "1.5.3",
  "moment": "2.22.2",
  "validator": "10.9.0",
  "lodash": "4.17.13",
  "material-fhir-ui": "0.9.19",
  "react-icons": "3.8.0",
  "winston": "3.2.1"
});
