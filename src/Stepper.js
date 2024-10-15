import React, { useCallback, useState } from "react";

const Stepper = ({ steps, initialSteps = 0 }) => {
  const [currentStep, setCurrentStep] = useState(initialSteps);

  const goToNextStep = useCallback(() => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  }, [steps.length]);

  const goToPreviousStep = useCallback(() => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  }, []);

  const jumpToStep = useCallback(
    (step) => {
      setCurrentStep(Math.max(0, Math.min(step, steps.length - 1)));
    },
    [steps.length]
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "600px",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
        }}
      >
        {steps.map((step, index) => {
          return (
            <div
              key={index}
              onClick={() => jumpToStep(index)}
              style={{
                position: "relative",
                zIndex: 1,
              }}
            >
              <div
                style={{
                  backgroundColor: index === currentStep ? "skyblue" : "grey",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {index + 1}
              </div>
              <div style={{ textAlign: "center", marginTop: "5px" }}>
                {step.label}
              </div>
            </div>
          );
        })}

        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            right: "20px",
            height: "2px",
            backgroundColor: "grey",
            zIndex: 0,
          }}
        />
      </div>

      <div style={{ marginTop: "30px" }}>{steps[currentStep].content}</div>

      <div style={{ marginTop: "20px" }}>
        <button onClick={goToPreviousStep} disabled={currentStep === 0}>
          Previous
        </button>
        <button
          onClick={goToNextStep}
          disabled={currentStep === steps.length - 1}
        >
          {currentStep === steps.length - 1 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Stepper;
