export default function (Alpine) {
  Alpine.magic('overlap', (el, {}) => (targetId) => {
    const targetEl = document.querySelector(targetId)

    return checkOverlap(
      targetEl.getBoundingClientRect(),
      el.getBoundingClientRect()
    )
  })

  function checkOverlap(targetBounding, elBounding) {
    return !(
      targetBounding.top > elBounding.bottom ||
      targetBounding.right < elBounding.left ||
      targetBounding.bottom < elBounding.top ||
      targetBounding.left > elBounding.right
    )
  }
}
