import fs from 'fs'
import path from 'path'

const x = {
  test: true,
}
export function test() {
  path.test('./')
  fs.readFileSync('./lint.test.js')
  console.info(x.test)
}
