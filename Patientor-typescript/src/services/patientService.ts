/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import patientEntries from "../data/patients";
import { NewPatient, NonSsnPatient, Patient } from "../types";
import { v4 as uuidv4 } from 'uuid';

const getPatients = (): Array<Patient> => {
    return patientEntries;
};

const getPatientById = (id: string): Patient | undefined => {
    const patient = patientEntries.find(p => p.id === id);
    return patient;
};
    
const getNonSsnPatients = (): Array<NonSsnPatient> => {
    return patientEntries.map(({ id, name, dateOfBirth, gender, occupation, entries }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation,
        entries
    }));
};

const addPatient = (entry: NewPatient): Patient => {
    const newPatient = {
        id: uuidv4(),
        ...entry
    };
    
    patientEntries.push(newPatient);
    return newPatient;
};

export default {
    getPatients,
    getNonSsnPatients,
    addPatient,
    getPatientById
};