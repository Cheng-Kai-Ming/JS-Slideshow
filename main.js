document.addEventListener("DOMContentLoaded", () => {

  const items = document.querySelector('.items')
  const items_array = Array.from(items.children)
  const nav = document.querySelector('.nav')
  const nav_array = Array.from(nav.children)
  const items_width = items_array[0].getBoundingClientRect().width

  function item_position(item, index) {
    item.style.left = items_width * index + 'px'
  }

  function move(items, target_item) {
    items.style.transform = 'translateX(-' + target_item.style.left + ')'
  }

  items_array.forEach(item_position)

  nav.addEventListener('click', (e) => {
    const target_index = nav_array.findIndex(nav => nav === e.target.closest('button'))
    const target_item = items_array[target_index]

    move(items, target_item)
  })
}
)