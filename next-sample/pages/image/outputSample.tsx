import { NextPage } from "next";
import Image from "next/image";
import CatImage from '../../public/cat.jpg'

const OutputSample: NextPage<void> = (props) => {
  return (
    <>
    <h1>Compare Image Display</h1>
    <img src="/cat.jpg" alt="cat image" />
    <p>Use image Component</p>
    <Image src={CatImage} alt="cat image using image component"/>
    <p>If use image Component, React prepare blank erea</p>
    </>
  )
}

export default OutputSample