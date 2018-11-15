# @partyk/load-script

Promise based script loader for the browser using script tags.

# usage

## install

```
$ npm install @partyk/load-script
```

## options

- `type`: defaults to `text/javascript`.
- `async`: defaults to `true`.
- `charset`: defaults to `utf-8`.
- `id`: no default value.

## examples

```
// import module
import loadScript from 'node_modules/loadScript';
```

```
loadScript.load(url|[urls], options)
    .then(callback)
    .catch(error) 
```

```
// single script
loadScript.load('//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js').then(() => {
    console.log(_.VERSION);   
});

//multiple script
loadScript.load([
    '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js', 
    '//cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js']
    ).then(() => {
        console.log(_.VERSION);
        console.log(jQuery.fn.jquery);
    }
);
```