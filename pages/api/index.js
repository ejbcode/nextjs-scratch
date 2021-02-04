import {character} from './characters'

export default function handler(req, res) {
  res.status(200).json(character)
}