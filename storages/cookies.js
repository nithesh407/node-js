document.cookie = `name=Kyle; expires=${new Date(9999, 0, 1).toUTCString()}`
document.cookie = `lastName=Smith; expires=${new Date(
  9999,
  0,
  1
).toUTCString()}`

console.log(document.cookie)


//instead of this use js cookies