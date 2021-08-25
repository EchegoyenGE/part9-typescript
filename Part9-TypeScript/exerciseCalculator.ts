interface Result {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number
}

interface Rating {
    rating: number,
    ratingDescription: string
}

interface ExerciseData {
    target: number,
    training: Array<number>
}

const parsingArgs = (args: Array<number>, target: number): ExerciseData | boolean => {
    if (args.length < 1) return false;
    for (let i = 0; i < args.length; i++) {
        if (!isNaN(args[i])) return false;
    }
    if (!isNaN(target)) return false;

    const training = [];
    for (const ex of args) {
        training.push(ex);
    }

    return {
        target,
        training
    };

};


const getRating = (target: number, prom: number): Rating => {
    let rating: number;
    let ratingDescription: string;
    if (Math.abs(target - prom) < 0.05) {
        rating = 1;
        ratingDescription = 'That was perfect!';
    } else if (Math.abs(target - prom) < 1) {
        rating = 2;
        ratingDescription = 'not too bad but could be better';
    } else {
        rating = 3;
        ratingDescription = 'Definitely that was a disaster!';
    }
    return {
        rating,
        ratingDescription
    };
};

const calculateExercises = (ex: Array<number>, tgt: number): Result => {
    const prom: number = ex.reduce((ac, it) => ac + it / ex.length, 0);
    const periodLength: number = ex.length;
    const trainingDays: number = ex.filter(d => d !== 0).length;
    const success: boolean = (prom >= tgt);
    const { rating, ratingDescription } = getRating(tgt, prom);
    const average = prom;
    return {
        periodLength,
        trainingDays,
        success,
        rating,
        ratingDescription,
        target: tgt,
        average
    };
};

export { calculateExercises, parsingArgs, Result };
