/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express from 'express';
import patientService from '../services/patientService';
import toNewPatientEntry from '../utils';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(patientService.getNonSsnPatients());
});

router.post('/', (req, res) => {

    try {
        const newPatientEntry = toNewPatientEntry(req.body);
        const addedPatient = patientService.addPatient(newPatientEntry);
        res.json(addedPatient);
        
    } catch (error) {
        res.status(400).send(error);
    }

    const { name, dateOfBirth, ssn, gender, occupation, entries } = req.body;
    const newPatient = patientService.addPatient({ name, dateOfBirth, ssn, gender, occupation, entries });
    
    res.json(newPatient);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json(patientService.getPatientById(id));
});

export default router;