import { useState } from "react";
import ProgressBar from "./ProgressBar";

const Form = () => {
  const [file, setFile] = useState(null);
  const [header, setHeader] = useState("Upload an image");

  const changeHandler = (e) => {
    const types = ["image/png", "image/jpeg"];

    const selected = e?.target?.files[0];
    console.log(selected);
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setHeader("Upload an image");
    } else {
      setFile(null);
      setHeader("Upload a valid image type");
    }
  };

  return (
    <>
      <h1>{header}</h1>
      <form>
        <input type="file" onChange={changeHandler} />
        <input type="submit"  onSubmit={onSubmit}/>
      </form>
      
      {file && <ProgressBar file={file} setFile={setFile}/>}
    </>
  );
};

export default Form;
