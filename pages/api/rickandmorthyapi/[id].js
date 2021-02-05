import data from './data.json'

export default function handler({ query: { id } }, res) {
  const filtered = data.results.filter((char) => char.id === parseInt(id))

  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res
      .status(404)
      .json({ message: `Character with the id of ${id} is not found` })
  }
}
