export const getRandomNumber = (size) => {
    return Math.floor(Math.random() * size);
}

export const shuffle = (array: Array<any>) => {
    let newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}