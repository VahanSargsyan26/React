function Replace() {
    const text = "Hello, world!";
    const pattern = /world/;
    const replacement = "universe";
    const result = text.replace(pattern, replacement);
    return result;
}
export default Replace;