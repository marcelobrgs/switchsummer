import { Logo } from "./Logo";
import avatar from "./Images/avatar.png";
import {Btn} from "./Btn.jsx";

export const App = () => {
  return (
    <>
      <div>App Hello World</div>
      <br />
      <Btn></Btn>
      <br />
      <br />
      <Logo src={avatar}></Logo>
    </>
  );
};
