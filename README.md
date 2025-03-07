# Alpine JS Overlap

> [!IMPORTANT] 
> This plugin is no longer maintained or supported.

![](https://img.shields.io/bundlephobia/min/alpinejs-overlap)
![](https://img.shields.io/npm/v/alpinejs-overlap)
![](https://img.shields.io/npm/dt/alpinejs-overlap)
![](https://img.shields.io/github/license/markmead/alpinejs-overlap)

A lightweight Alpine JS plugin that adds an `$overlap()` utility to detect when
DOM elements overlap each other.

## What It Does

- 🔍 Provides a global `$overlap()` method that returns `true` or `false` when
  checking if elements intersect
- 🧩 Simple to use API by calling `$overlap('#targetElement')` to detect element
  intersections

## Why Use It

- Create UI components that react to element overlaps
- Build drag-and-drop interfaces
- Position tooltips/dropdowns to avoid collisions
- Implement simple collision detection for interactive elements

## Install

### CDN

```html
<script
  defer
  src="https://unpkg.com/alpinejs-overlap@latest/dist/cdn.min.js"
></script>

<script defer src="https://unpkg.com/alpinejs@latest/dist/cdn.min.js"></script>
```

### Package

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
  <div id="TargetEl" class="size-96 top-8 bg-gray-900"></div>

  <div
    x-data="{ elementsAreOverlapping: $overlap('#TargetEl') }"
    :class="{ 'bg-green-700': elementsAreOverlapping, 'bg-gray-900': !elementsAreOverlapping }"
    class="absolute inset-y-0 right-0 size-96 grid place-content-center text-white"
    @resize.window="elementsAreOverlapping = $overlap('#TargetEl')"
  >
    <p x-text="elementsAreOverlapping ? 'Overlapping' : 'Not Overlapping'"></p>
  </div>
</div>
```
