export const formatJSON = (obj, attributes = ["isDraggable", "isEditable", "isDeletable", "moved", "static"]) => {
    let newObj = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
                newObj[key] = formatJSON(obj[key], attributes);
            } else if (Array.isArray(obj[key])) {
                newObj[key] = obj[key].map(item => formatJSON(item, attributes));
            } else if (!attributes.includes(key)) {
                newObj[key] = obj[key];
            }
        }
    }
    return newObj;
}