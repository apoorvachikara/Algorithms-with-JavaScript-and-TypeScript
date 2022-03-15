const repeat = (count, string) => {
    if (count === 0) return '';
    if (count === 1) return string;

    return string + repeat(count - 1, string);
}

console.log(repeat(5, 'abc'));