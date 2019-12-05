import React from 'react';

import MeasureReportsPage from './client/MeasureReportsPage';
import MeasureReportsTable from './client/MeasureReportsTable';
import MeasureReportDetail from './client/MeasureReportDetail';
import { MeasureReport, MeasureReports, MeasureReportSchema } from './lib/MeasureReports';

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


