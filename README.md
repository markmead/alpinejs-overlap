# Alpine JS Overlap

Check if an element is overlapping another 🥞

## Install

### With a CDN

```html
<script
  defer
  src="https://unpkg.com/alpinejs-overlap@latest/dist/overlap.min.js"
></script>

<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

### With a Package Manager

```shell
yarn add -D alpinejs-overlap

npm install -D alpinejs-overlap
```

```js
import Alpine from 'alpinejs'
import overlap from 'alpinejs-overlap'

Alpine.plugin(overlap)

Alpine.start()
```

## Example

```html
<div id="targetEl" class="bg-black w-64 h-64"></div>

<div
  x-data="{ isOverlap: $overlap('#targetEl') }"
  x-on:resize.window="isOverlap = $overlap('#targetEl')"
  :class="{ 'bg-blue-500': isOverlap, 'bg-red-500': !isOverlap }"
  class="absolute w-48 h-48 top-16 right-16"
></div>
```

In this example we check for an initial overlap and then use Alpine JS
`resize.window` listener to check on resize.

## Stats

![](https://img.shields.io/bundlephobia/min/alpinejs-overlap)
![](https://img.shields.io/npm/v/alpinejs-overlap)
![](https://img.shields.io/npm/dt/alpinejs-overlap)
![](https://img.shields.io/github/license/markmead/alpinejs-overlap)
