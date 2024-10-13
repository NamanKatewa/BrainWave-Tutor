import { useState } from "react";

const DiagnosticTest = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [responses, setResponses] = useState({});

  const handleAnswer = (questionId, answer) => {
    setResponses({ ...responses, [questionId]: answer });
  };

  const questions = {
    1: [
      {
        id: "q1",
        type: "multipleChoice",
        question: "Look at this diagram...",
        options: ["A", "B", "C"],
      },
    ],
    2: [
      {
        id: "q2",
        type: "audio",
        question: "Listen to this clip...",
        audioSrc: "/path-to-audio",
      },
    ],
    3: [
      {
        id: "q3",
        type: "text",
        question: "Read the following passage...",
        options: ["A", "B", "C"],
      },
    ],
    4: [
      {
        id: "q4",
        type: "dragDrop",
        question: "Drag and drop to complete...",
        items: ["A", "B", "C"],
      },
    ],
  };

  const renderQuestion = (question) => {
    switch (question.type) {
      default:
        return null;
      case "multipleChoice":
        return (
          <div>
            <p>{question.question}</p>
            {question.options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(question.id, option)}
              >
                {option}
              </button>
            ))}
          </div>
        );
      case "audio":
        return (
          <div>
            <audio controls>
              <source src={question.audioSrc} type="audio/mpeg" />
            </audio>
            <p>{question.question}</p>
          </div>
        );
      case "text":
        return (
          <div>
            <p>{question.question}</p>
          </div>
        );
      case "dragDrop":
        return (
          <div>
            <p>{question.question}</p>
          </div>
        );
    }
  };

  return (
    <div>
      {questions[currentStep]?.map((question) => (
        <div key={question.id}>{renderQuestion(question)}</div>
      ))}
      <button onClick={() => setCurrentStep(currentStep + 1)}>Next</button>
    </div>
  );
};

export default DiagnosticTest;
