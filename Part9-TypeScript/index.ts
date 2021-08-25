import express from 'express';
const app = express();
import { calculateBmi } from './bmiCalculator';
import { calculateExercises, parsingArgs } from './exerciseCalculator';

app.use(express.json())

app.get('/', (_req, res) => {
    res.send('Hello Full Stack!');
})

app.get('/bmi', (req, res) => {
    const { height, weight } = req.query;

    if (isNaN(Number(height)) || isNaN(Number(weight)))
        return res.json({ error: 'malformatted parameters' });

    const bmi: string = calculateBmi(Number(height), Number(weight))

    return res.json({
        height,
        weight,
        bmi
    })
})

app.post('/exercises', (req, res) => {
    const { daily_exercises, tgt } = req.body

    if (!daily_exercises || !tgt) return res.json({ error: 'parameters missing' })

    if (!parsingArgs(daily_exercises, tgt)) return res.json({ error: 'malformatted parameters' })

    const obj = calculateExercises(daily_exercises, tgt);

    return res.json(obj)
})

const PORT = 3003;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})