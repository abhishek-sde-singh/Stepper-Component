import "./App.css";
import Stepper from "./Stepper";

function App() {
  const steps = [
    {
      label: "Step 1",
      content: <div>This is the content for Step 1</div>,
    },
    {
      label: "Step 2",
      content: <div>This is the content for Step 2</div>,
    },
    {
      label: "Step 3",
      content: <div>This is the content for Step 3</div>,
    },
  ];

  return (
    <div>
      <h1>STEPPER</h1>
      <Stepper steps={steps} initialStep={0} />
    </div>
  );
}

export default App;
