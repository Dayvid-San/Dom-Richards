import Image from "next/image";
import styles from "./page.module.css";
import Navbars from "./components/navbars";
import Carousel from "./components/carousel";

export default function Home() {
  return (
    <>
      <Navbars />
      <Carousel />
    </>
  );
}
