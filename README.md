![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

## Viewfinder Webcomponent

![version](https://img.shields.io/npm/v/viewfinder-component.svg)
![downloads](https://img.shields.io/npm/dm/viewfinder-component.svg)
![jsdelivr](https://img.shields.io/jsdelivr/npm/hm/viewfinder-component.svg)

Viewfinder web component for barcode scanning.

![screenshot](https://github.com/xulihang/viewfinder-web-component/raw/main/screenshot.jpg)

[Online barcode scanner demo](https://starlit-duckanoo-55c6c9.netlify.app/)

### Usage

In your HTML, add the component:

```html
<view-finder></view-finder>
```


You can define the width, the height, the scan region and the styles like this:

```html
<view-finder 
  style="--scan-line-color:orange;
         --scan-rect-color:orange;"
  width="1280"
  height="720"
  left="320"
  right="960"
  top="180"
  bottom="540"
  preserve-aspect-ratio="xMidYMid slice">
</view-finder>
```

If you need to set multiple regions, then use the `regions` prop.

```js
document.querySelector("view-finder").regions = [
  {
    left:300,
    top:180,
    right: 500,
    bottom: 540,
  },
  {
    left:600,
    top:180,
    right: 800,
    bottom: 540,
  }
];
```

## Install this component

### Script tag

- Put a script tag similar to this 

   ```html
   <script type="module">
     import { defineCustomElements } from 'https://cdn.jsdelivr.net/npm/viewfinder-component/dist/esm/loader.js';
     defineCustomElements();
   </script>
   ```
   
   in the head of your index.html
   
- Then you can use the element anywhere in your template, JSX, html etc

### Node Modules
- Run `npm install viewfinder-component --save`
- Put a script tag similar to this 

   ```html
   <script type="module">
     import { defineCustomElements } from 'node_modules/viewfinder-component/dist/esm/loader.js';
     defineCustomElements();
   </script>
   ```
   
   in the head of your index.html
   
- Then you can use the element anywhere in your template, JSX, html etc
