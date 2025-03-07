export default function (Alpine) {
  Alpine.magic('overlap', (el, {}) => (targetId) => {
    const targetEl = document.querySelector(targetId)

    if (!targetEl) {
      return false
    }

    const elBounding = el.getBoundingClientRect()
    const targetBounding = targetEl.getBoundingClientRect()

    return !(
      targetBounding.top > elBounding.bottom ||
      targetBounding.right < elBounding.left ||
      targetBounding.bottom < elBounding.top ||
      targetBounding.left > elBounding.right
    )
  })
}
