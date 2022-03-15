const repeat = (count, string) => {
    if (count < 0) throw('Out of bound value');
    if (count === 0) return '';
    if (count === 1) return string;

    return string + repeat(count - 1, string);
}

try {
    console.log(repeat(-1, 'abc'));
} catch (error) {
    console.error(error);
}
