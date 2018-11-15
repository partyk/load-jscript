/**
 * loadScript module
 * @type {{Object}}
 */
const loadScript = {
    /**
     * _getHead return element head
     * @returns {Element}
     * @private
     */
    _getHead: () => document.getElementsByTagName('head')[0] || document.documentElement,

    /**
     * _getScript create and return element script with properties
     * @param options {Object} config object with options for configuring
     * @returns {HTMLElement}
     * @private
     */
    _getScript: (options) => {
        let script = document.createElement('script');
        script.charset = options.charset;
        script.type = options.type;
        script.async = options.async;
        script.id = options.id;
        return script;
    },

    /**
     *
     * @param url
     * @param options
     * @returns {Promise<any>}
     * @private
     */
    _loadUrl: (url, options) => {
        if (loadScript._isScriptExist(url)) {
            console.warn(`Script ${url} is loaded. Duplicate script!`);
            return Promise.resolve();
        }
        return new Promise((resolve, reject) => {
            let script = loadScript._getScript(options);
            script.src = url;
            script.addEventListener('load', () => resolve(script), false);
            script.addEventListener('error', () => reject(script), false);
            document.body.appendChild(script);
        });
    },
    /**
     * isScriptExist
     * @param url {String}
     * @returns {null|Element}
     * @private
     */
    _isScriptExist: (url) => {
        console.log(url);
        return !!(url && document.querySelector('script[src="' + url + '"]'));
    },
    /**
     * load load javascript
     * @param urls {String|Array}
     * @param options
     * @returns {Promise}
     */
    load: (urls, options) => {
        options = {
            ...{
                charset: 'utf-8',
                type: 'text/javascript',
                async: true,
                id: ''
            },
            options
        };
        if (typeof urls === 'string') {
            return loadScript._loadUrl(urls, options);
        } else {
            return Promise.all(urls.map((url) => {
                loadScript._loadUrl(url, options);
            }));
        }
    }

};

export default loadScript;