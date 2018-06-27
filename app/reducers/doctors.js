import {
  UPDATE_DOCTORS,
  UPDATE_APPOINTMENTS,
  UPDATE_DRUGS,
  ASSIGN_DOCTOR,
} from '../config/Constants';

const defaultState = {
  doctors: [],
  appointments: [],
  drugs: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_DOCTORS:
      return {
        ...state,
        doctors: action.doctors,
      };
    case ASSIGN_DOCTOR:
      return state;
    case UPDATE_APPOINTMENTS:
      return {
        ...state,
        appointments: action.appointments,
      };
    case UPDATE_DRUGS:
      return {
        ...state,
        drugs: action.drugs,
      };
    default:
      return state;
  }
};
