# html-components-for-aem
HTML components compatible for Adobe Experience Manager(aem) based website development.  

## About
This project is about the definition and development of HTML components which are compatible for AEM based website development.

* The HTML components for AEM, should be some thing like defined once and can be used at multiple places.  
* This approach help for better maintainability of the components from an AEM percpective.  
* There should be a provision to pass data to the components.  
* The [gulp-file-include](https://www.npmjs.com/package/gulp-file-include) is used to implement this requirement.  

## Demo
[See Demo Here](https://georgeneil.github.io/html-components-for-aem/)

## Components
1. Single Select Drop Down  

### Definition
```
<div class="ss-dropdown pointer">
    <div class="dropdown-header">
        <h2 class="dropdown-measure text-style-1">
            <span class="title">@@title</span>
            <span class="turn-arrow"></span>
        </h2>
        <div class="dropdown-selected truncate text-style-2">
            <!-- @@for(var i = 0; i < 1; i++) { -->
            `+items[i].label+`
            <!-- } -->
        </div>
    </div>
    <div class="dropdown-content-wrapper">
        <ul class="dropdown-content">
            <!-- @@for(var i = 0, s="selected" ; i < items.length; i++, s='' ) { -->
            <li class="text-style-2 dropdown-item `+s+`" data-item="`+items[i].value+`">
                `+items[i].label+`
            </li>
            <!-- } -->
        </ul>
    </div>
</div>
```
### Usage
```
    @@include('ss-drop-down.html', {
        "title": "Countries",
        "items": [{"label" : "United States", "value" : "United States"},
            {"label" : "Cananda", "value" : "Cananda"},
            {"label" : "Australia", "value" : "Australia"}]
    })

```

## To install dependencies

```
npm install
```

## To build the pages

```
npm start
```

The pages will be compiled and available in the /dist folder

## Contributing
Contributions are always welcome. Just send a pull request. Feel free to contact me [GitHub](https://github.com/georgeneil).

## License
```
MIT License

Copyright (c) 2017 George Neil

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```