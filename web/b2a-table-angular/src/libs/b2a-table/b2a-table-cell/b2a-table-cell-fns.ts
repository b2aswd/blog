
export const cssUnitPattern = /([A-Za-z%]+)$/;
export const defaultIndent = 27; // px   - TODO: should be set by JS

export function calculateWith(val: string | number, indent: number, level = 1) {
    let value = Number(val);
    let unit = 'px';
    const padding = level === 0 ? 0 : level * indent;

    if (typeof val === 'string') {
        const parts = val.split(cssUnitPattern);
        value = Number(parts[0]);
        unit = parts[1] || unit;
    }

    const resValue = unit === 'px' ? value - padding : value;

    return {
        full: resValue + '' + unit,
        value: resValue,
        unit,
    };
}
