import axios from "axios";
import { imgEndpoint, root } from "../utilities/api";

export default async function getImgs(setImgs) {
  try {
    const imgs = await axios.get(`${root}${imgEndpoint}`);
    setImgs(imgs);
  } catch (e) {
    console.error(e);
  }
}
