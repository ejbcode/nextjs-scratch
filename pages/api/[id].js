
import {character} from './characters.js'


export default function handler({ query: { id } }, res) {
  const filtered = character.filter((item) => item.id === id)

  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res
      .status(404)
      .json({ message: `Character with the id of ${id} is not found` })
  }
}