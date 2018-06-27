import axios from 'axios';
import {
  UPDATE_DOCTORS,
  UPDATE_APPOINTMENTS,
  UPDATE_DRUGS,
} from './../config/Constants';
import {
  API_GET_DOCTORS,
  API_GET_DRUGS,
  API_GET_APPOINTMENTS,
} from './../config/Api';
import { updateProfile } from './auth';

const updateDoctorList = (doctors) => ({
  type: UPDATE_DOCTORS,
  doctors,
});

const updateAppointments = (appointments) => ({
  type: UPDATE_APPOINTMENTS,
  appointments,
});

const updateDrugs = (drugs) => ({
  type: UPDATE_DRUGS,
  drugs,
});

const getAllDoctors = () => function(dispatch) {
  return new Promise((resolve, reject) => {
    axios.get(API_GET_DOCTORS).then((response) => {
      if (response && response.status === 200) {
        dispatch(updateDoctorList(response.data));
        resolve(response.data);
        return;
      }
      reject(response.data.message);
    }).catch(err => {
      reject(err);
    })
  });
};

const assignToDoctor = (patient, doctor) => function(dispatch) {
  return new Promise((resolve, reject) => {
    axios.post(API_ASSIGN_DOCTOR(patient), { doctor })
      .then((response) => {
        if (response && response.status === 200) {
          dispatch(updateProfile(response.data));
        } else {
          reject('error while updating');
        }
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

const getAppointments = (patient) => function(dispatch) {
  return new Promise((resolve, reject) => {
    axios.get(API_GET_APPOINTMENTS, { patient }).then((response) => {
      if (response && response.status === 200) {
        dispatch(updateAppointments(response.data));
        resolve(response.data);
      } else {
        reject('error when loading appointments');
      }
    }).catch((err) => {
      reject(err);
    });
  });
};

const getDrugs = (patient) => function(dispatch) {
  return new Promise((resolve, reject) => {
    axios.get(API_GET_DRUGS, { patient }).then((response) => {
      if (response && response.status === 200) {
        dispatch(updateDrugs(response.data));
        resolve(response.data);
      } else {
        reject('error when loading drugs');
      }
    }).catch((err) => {
      console.log(err);
      reject(err);
    });
  });
};

export {
  getAllDoctors,
  assignToDoctor,
  getAppointments,
  getDrugs,
};
