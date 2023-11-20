import { FC } from "react";
import { useState } from "react";
import "./style.css";

export const App: FC<{ name: string }> = ({ name }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <div className="relative">
      <img
        src="lowRes.png"
        className={`${
          imageLoaded ? "opacity-0" : "opacity-100"
        } blur-md  transition-opacity duration-500 ease-in-out w-full h-auto absolute top-0 left-0`}
        alt="low-res"
      />
      <img
        src="https://img.freepik.com/free-photo/digital-painting-mountain-with-colorful-tree-foreground_1340-25699.jpg"
        className={`${
          imageLoaded ? "opacity-100" : "opacity-0"
        }  transition-opacity duration-500 ease-in-out w-full h-auto absolute top-0 left-0`}
        onLoad={() => setImageLoaded(true)}
        alt="high-res"
      />
    </div>
  );
};
