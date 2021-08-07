export default {
    title: "Adverity",
    typescript: true,
    filterComponents: (files) => files.filter(filepath => /[w-]*.(js|jsx|ts|tsx)$/.test(filepath)),
}