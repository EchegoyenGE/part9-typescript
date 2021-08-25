/* interface Data {
    height: number,
    weight: number
} */

/* const parseArguments = (args: Array<string>): Data => {
    if (args.length < 4) throw new Error('Not enough arguments');
    if (args.length > 4) throw new Error('Too many arguments');

    if (!isNaN(Number(args[0])) && !isNaN(Number(args[1]))) {
        return {
            height: Number(args[0]),
            weight: Number(args[1])
        }
    } else {
        throw new Error('Provided values are not numbers')
    }
}
 */
const calculateBmi = (height: number, weight: number): string => {
    const BMI: number = weight / Math.pow((height / 100), 2);
    let range = '';

    if (BMI <= 18.4) {
        range = 'Underweight';
    } else if (BMI < 25) {
        range = 'Normal (healthy weight)';
    } else if (BMI < 30) {
        range = 'Overweight';
    } else {
        range = 'Obese';
    }

    return range;
};

/* try {
    const { height, weight } = parseArguments(process.argv);
    calculateBmi(height, weight);
} catch (e) {
    console.log('Error, something bad happened, message: ', e.message);
} */

export { calculateBmi };