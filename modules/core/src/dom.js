import { patch, elementOpen, elementClose, text, elementVoid } from 'incremental-dom';


function getTextNode(text) {
    if (!Array.isArray(text)) {
        return null;
    }
    return text
        .filter((item) => item !== undefined && item !== null && typeof item !== 'function' && !Array.isArray(item))
        .join("");
}
function createChilds(childs) {
    var result;
    if (childs && Array.isArray(childs)) {
        result = childs
            .filter(child => typeof child === 'function' || Array.isArray(child));
            
        if(Array.isArray(result)){
            result.forEach(c=>c());
        }else
        {
            if(typeof result==="function"){
                result();
            }
        }      
    }
}
function normalizeAttrs(attrs) {
    var _attrs = [];
    if (!attrs || typeof attrs !== "object") {
        return null;
    }
    Object.keys(attrs).forEach((attr) => {
        _attrs.push(attr);
        _attrs.push(attrs[attr]);
    });
    return _attrs;
}
function create() {
    var args = [...arguments],
        name = args[0],
        attrs = normalizeAttrs(args[1]),
        nextArgs = args.slice(2),
        text = getTextNode(nextArgs);

    return function() {
        DOM.open(name, null, attrs);
        if (text) {
            DOM.text(text);
        }
        createChilds(nextArgs);
        DOM.close(name);
    }


}
export const DOM = {
    patch: patch,
    open: elementOpen,
    close: elementClose,
    void: elementVoid,
    text: text,
    create: create,
    INCREMENTALDATA: '__incrementalDOMData'
}