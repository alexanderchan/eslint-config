import path from 'path'
import fs from 'fs'

function test() {
  path.test('./')
  fs.readFileSync('./lint.test.js')
}
