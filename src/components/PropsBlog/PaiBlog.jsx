import { FilhoBlog } from "./FilhoBlog";
import { useState } from "react";

export const PaiBlog = () => {
  const meusBlogs = [
    { title: "My new website", body: "lorem...", id: 1 },
    { title: "Welcome", body: "lorem...", id: 2 },
    { title: "Estudando React", body: "lorem...", id: 3 },
  ];

  const [blogs, setBlogs] = useState(meusBlogs);

  return (
    <>
      <div>Este é o componente pai: PaiBlog</div>
      <div>Faz chamada e passa as props para o componente filho</div>
      <br></br>
      <div> 
      <FilhoBlog blogs={blogs} endereco="Rua tal"></FilhoBlog>
      </div>
      <br></br>
      
    </>
  );
};
