import React, { useState, useEffect } from "react";

export default function Button() {
  const ResponseText = {
    Certo: "Certo",
    Errado: "Errado",
  };
  const [amount, setAmount] = useState(0);
  const [responseText, setResponseText] = useState("");

  useEffect(() => {
    const isPair = amount % 2 === 0;
    setResponseText(isPair ? ResponseText.Certo : ResponseText.Errado);
  }, [amount, ResponseText]);

  const amountIsZero = amount === 0;

  return (
    <div>
      <span data-testid="amount-text">{amount}</span>
      <button data-testid="click-button" onClick={() => setAmount(amount + 1)}>
        Click!
      </button>
      <button data-testid="eh-par-button">Eh Par!</button>
      {amountIsZero || <span data-testid="response-text">{responseText}</span>}
    </div>
  );
}
