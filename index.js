import ow from 'ow'
import test from './test'

export default (input) => {
  ow(input, ow.string.nonEmpty.label('input'))

  return 'hello world'
}
