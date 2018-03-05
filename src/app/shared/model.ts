import { RulerDictionary } from './dictionary';
import { RulerObject} from './object';

export class RulerModel extends RulerObject {
    static _map: RulerModelMap;
    static _filter: RulerModelFilter;
    static _required: RulerModelRequired;
    static _types: RulerModelTypes;

    init() { }

    initWithObject(object: Object) {
        const thisClass: any = this.constructor;
        object = this.pipe(thisClass._map, 'run', object);
        object = this.pipe(thisClass._filter, 'run', object);
        if (thisClass._required) {
            thisClass._required.check(object);
        }
        for (const key in object) {
            if (null !== this[key]) {
                this[key] = object[key];
            }
        }
    }

    pipe(target: Object, selector: string, argument: any): any {
        if (typeof target === 'object' &&
            typeof selector === 'string' &&
            typeof target[selector] === 'function') {

            return target[selector](argument);
        }
        return argument;
    }

}

export class RulerModelMap extends RulerObject {
    dictionary: RulerDictionary;

    init() { }

    initWithObject(object: Object) {
        for (const key in object) {
            if (null !== object[key]) {
                const item = object[key];
                if (typeof item !== 'string') {
                    console.log('RModelMap argument must be {string: string} key value type');
                    return;
                }
            }
        }
        this.dictionary = new RulerDictionary(object);
    }

    run(origin: Object): Object {
        if (!this.dictionary) {
            return origin;
        }

        const mapped = {};
        for (const key in origin) {
            if (null !== origin[key]) {
                const value = origin[key];
                const mappedkeys = this.dictionary.containsOfValue(key) ? (
                    this.dictionary.keysForValue(key)
                ) : (
                    [key]
                );
                for (const mappedKey of mappedkeys) {
                    mapped[mappedKey] = value;
                }
            }
        }
        return mapped;
    }

}

export class RulerModelFilter extends RulerObject {
    dictionary: RulerDictionary;

    init() { }

    initWithObject(object: Object) {
        for (const key in object) {
            if (null !==  object[key]) {
                const item = object[key];
                if (typeof item !== 'function') {
                    console.log('ModelFilter argument must be {string: function} key value type');
                    return;
                }
            }
        }
        this.dictionary = new RulerDictionary(object);
    }

    run(origin: Object): Object {
        if (!this.dictionary) {
            return origin;
        }

        const filtered = {};
        for (const key in origin) {
            if (null !== origin[key]) {
                const value = origin[key];
                filtered[key] = this.dictionary.containsOfKey(key) ? (
                    filtered[key] = this.dictionary[key](value)
                ) : (
                    value
                );
            }
        }
        return filtered;
    }

}

export class RulerModelRequired extends RulerObject {
    requires: string[];

    init() { }

    initWithArray(array: string[]) {
        for (const item of array) {
            if (typeof item !== 'string') {
                console.log('ModelRequired argument must be string[] array type');
                return;
            }
        }
        this.requires = array;
    }

    check(origin: any): boolean {
        if (!this.requires) {
            return true;
        }

        for (const item of this.requires) {
            if (typeof origin[item] === 'undefined') {
                console.error('Attribute required error: This model must have ' + item + ' property!');
                return false;
            }
        }

        return true;
    }

}

export class RulerModelTypes extends RulerObject {
    dictionary: RulerDictionary;

    init() { }

    initWithObject(object: Object) {
        for (const key in object) {
            if (null !== object[key]) {
                const item = object[key];
                if (typeof item !== 'string') {
                    console.log('ModelTypes argument must be {string: string} key value type');
                    return;
                }
            }
        }
        this.dictionary = new RulerDictionary(object);
    }

    check(origin: Object): boolean {
        if (!this.dictionary) {
            return true;
        }

        let validated = true;
        for (const key in origin) {
            if (null !== origin[key]) {
                const value = origin[key];
                const typeOrigin = typeof value;
                const typeValid = this.dictionary[key];
                if (
                    this.dictionary.containsOfKey(key) &&
                    typeOrigin !== typeValid
                ) {
                    validated = false;
                    console.error('Type error: The type of ' + key + ' is ' + typeOrigin + ' must be ' + typeValid + '!');
                }
            }
        }

        return validated;
    }

}