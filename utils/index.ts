export const encode = (num: number) => {
    const encoding: string = num.toString(2);
    const padding: string = '0'.repeat(4 - encoding.length)
    const encoded: string =  padding + encoding
    return encoded
}