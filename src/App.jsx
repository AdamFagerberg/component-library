import ButtonComponent from "./components/Buttoncomponent";
import AlertComponent from "./components/AlertComponent";
import BadgeComponent from "./components/BadgeComponent";
import CardComponent from "./components/CardComponent";
import "./App.css";

function App() {
  return (
    <>
      <ButtonComponent size="small" color="blue">
        Button 1
      </ButtonComponent>
      <ButtonComponent size="medium">Button 3</ButtonComponent>
      <ButtonComponent size="large" color="red">
        Button 2
      </ButtonComponent>
      <AlertComponent icon="info">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        quasi, provident iste optio vero officia aliquid ad qui perspiciatis
        ipsam.
      </AlertComponent>
      <AlertComponent icon="warning" color="red">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, maxime.
      </AlertComponent>

      <BadgeComponent>abc123</BadgeComponent>
      <BadgeComponent size="small" icon="check" color="green">
        abc123
      </BadgeComponent>
      <BadgeComponent size="medium" icon="check" color="red">
        abc123
      </BadgeComponent>
      <BadgeComponent size="large" icon="timer" color="gray">
        abc123
      </BadgeComponent>

      <CardComponent
        href="Hello word"
        imgSrc="https://images.unsplash.com/photo-1705113165376-b14041df2059?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, totam?
      </CardComponent>
    </>
  );
}

export default App;
