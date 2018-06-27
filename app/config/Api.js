import axios from 'axios';

// const BASE_URL = 'http://localhost:3000';
const BASE_URL = 'http://192.168.1.100:3000';

axios.defaults.baseURL = `${BASE_URL}/api`;
axios.defaults.timeout = 30000;

exports.API_AUTHENTICATE = '/patients/authenticate';
exports.API_PATIENT_PROFILE = id => `/patients/${id}`;
exports.API_GET_DOCTORS = '/doctors';
exports.API_ASSIGN_DOCTOR = id => `/patients/${id}/associate`;
exports.API_UNASSIGN_DOCTOR = id => `/patients/${id}/unAssociate`;
exports.API_GET_APPOINTMENTS = '/appointments';
exports.API_GET_DRUGS = '/drugs';
