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
<div class="relative">
  <div id="TargetEl" class="w-32 h-32 bg-teal-700 rounded-lg"></div>

  <div
    x-data="{ isOverlap: $overlap('#TargetEl') }"
    x-on:resize.window="isOverlap = $overlap('#TargetEl')"
    :class="{ 'bg-red-700': isOverlap, 'bg-teal-700': !isOverlap }"
    class="absolute inset-y-0 right-0 grid w-32 h-32 rounded-lg place-content-center"
  >
    <p
      x-text="isOverlap ? 'Overlapping' : 'Will Overlap'"
      class="text-sm font-medium text-white"
    ></p>
  </div>
</div>
```

In this example we check for an initial overlap and then use Alpine JS
`resize.window` listener to check while resizing the window.

See the example in action on
[Check Elements are Overlapping - HyperJS](https://js.hyperui.dev/components/check-overlapping-element).

## Stats

![](https://img.shields.io/bundlephobia/min/alpinejs-overlap)
![](https://img.shields.io/npm/v/alpinejs-overlap)
![](https://img.shields.io/npm/dt/alpinejs-overlap)
![](https://img.shields.io/github/license/markmead/alpinejs-overlap)
