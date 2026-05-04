export function parseInrToNumber(value) {
    if (!value) return 0;
    return Number(value.replace(/[^\d]/g, "")) || 0;
}
  
 export function formatInr(value) {
    return `₹${new Intl.NumberFormat("en-IN").format(value)}`;
}