# html-components-for-aem
HTML components compatible for Adobe Experience Manager(aem) based website development.  
The HTML components for AEM, should be some thing like defined once and can be used at multiple places.  
This approach help for better maintainability of the components from an AEM percpective.  
There should be a provision to pass data to the components.  
The [gulp-file-include](https://www.npmjs.com/package/gulp-file-include) is used to implement this requirement.  

## Components available
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