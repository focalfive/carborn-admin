export class Cookie {
    static _shared: Cookie = null;
    static get shared(): Cookie {
        if (null === Cookie._shared) {
            Cookie._shared = new Cookie();
        }

        return Cookie._shared;
    }
    // behaviors: { string: BehaviorSubject<string> }[];
    //
    // constructor() {
    //     this.behaviors = [];
    // }
    //
    // cookieForKey(key: string): Observable<string> {
    //     const index = Object.keys(this.behaviors).indexOf(key);
    //     let behavior: BehaviorSubject<string>;
    //     if (index < 0) {
    //         const value = this.getItem(key);
    //         behavior = new BehaviorSubject<string>(value);
    //         this.behaviors[key] = behavior;
    //     } else {
    //         behavior = this.behaviors[key];
    //     }
    //     return behavior.asObservable();
    // }

    getItem(key: string): string {
        return decodeURIComponent(
            document.cookie.replace(
                new RegExp('(?:(?:^|.*;)\\s*' + encodeURIComponent(key).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'),
                '$1'
            )
        ) || null;
    }

    setItem(
        key: string,
        value: string,
        end: any = null,
        domain: string = null,
        path: string = null,
        secure: boolean = null
    ): boolean {
        if (!key || /^(?:expires|max\-age|path|domain|secure)$/i.test(key)) {
            return false;
        }
        let expires = '';
        if (end) {
            switch (end.constructor) {
                case Number:
                expires = end === Infinity ? '; expires=Fri, 31 Dec 9999 23:59:59 GMT' : '; max-age=' + end;
                break;
                case String:
                expires = '; expires=' + end;
                break;
                case Date:
                expires = '; expires=' + end.toUTCString();
                break;
            }
        }
        document.cookie = encodeURIComponent(key) + '=' + encodeURIComponent(value) +
            expires +
            (domain ? '; domain=' + domain : '') +
            (path ? '; path=' + path : '') +
            (secure ? '; secure' : '');
        return true;
    }

    removeItem(key: string, domain: string = null, path: string = null): boolean {
        if (!key || !this.hasItem(key)) {
            return false;
        }
        document.cookie = encodeURIComponent(key) + '=; expires = Thu, 01 Jan 1970 00:00:00 GMT' +
            (domain ? '; domain=' + domain : '') +
            (path ? '; path=' + path : '');
        return true;
    }

    hasItem(key: string): boolean {
        return (new RegExp('(?:^|;\\s*)' + encodeURIComponent(key).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=')).test(document.cookie);
    }

    keys(): string[] {
        const keys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, '').split(/\s*(?:\=[^;]*)?;\s*/);
        let index;
        for (index = 0; index < keys.length; ++index) {
            keys[index] = decodeURIComponent(keys[index]);
        }
        return keys;
    }

}
