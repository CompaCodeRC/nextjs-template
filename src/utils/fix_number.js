export default function fixNumber(number) {
    const fixed_number = parseFloat(Number(number).toFixed(8));

    const parts = fixed_number.toString().split('.');
    if (parts[0].length > 1) {
        return parseFloat(fixed_number.toFixed(2));
    }
    
    return fixed_number;
}