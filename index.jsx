import React from 'react';

import MeasureReportsPage from './client/MeasureReportsPage';
import MeasureReportsTable from './client/MeasureReportsTable';
import MeasureReportDetail from './client/MeasureReportDetail';
<<<<<<< HEAD
=======
import { MeasureReport, MeasureReports, MeasureReportSchema } from './lib/MeasureReports';
>>>>>>> c8713e10ad86a9a6b2346f1e092e79f68f7b3d8b

import { FaHospitalAlt } from 'react-icons/fa';

var DynamicRoutes = [{
  'name': 'MeasureReportsPage',
  'path': '/measure-reports',
  'component': MeasureReportsPage,
  'requireAuth': true
}];

var SidebarElements = [{
  'primaryText': 'MeasureReports',
  'to': '/measure-reports',
  'href': '/measure-reports',
  'icon': <FaHospitalAlt />
}];

export { 
  SidebarElements, 
  DynamicRoutes, 

  MeasureReportsPage,
  MeasureReportsTable,
  MeasureReportDetail
};


