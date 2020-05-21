import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from ".";

//Gosto de instanciar o componente sobre teste separado, caso precise adicionar outra propriedade ou provider
// altera em apenas 1 local =)
const MyComponent = () => <Button />;

describe("Button", () => {
  it("Should amount start with 0", () => {
    render(<MyComponent />);
    const amount = screen.getByTestId("amount-text");
    expect(amount).toHaveTextContent(0);
  });

  it('Should increment count when click in "Click!" button', () => {
    render(<MyComponent />);
    const amount = screen.getByTestId("amount-text");
    const clickButton = screen.getByTestId("click-button");
    fireEvent.click(clickButton);
    expect(amount).toHaveTextContent(1);
  });

  it('Should show "Certo" when click in "Eh Par" button and amount is pair', () => {
    render(<MyComponent />);
    const amount = screen.getByTestId("amount-text");
    const clickButton = screen.getByTestId("click-button");
    const ehParButton = screen.getByTestId("eh-par-button");
    fireEvent.click(clickButton);
    fireEvent.click(clickButton);
    fireEvent.click(ehParButton);
    const responseText = screen.getByTestId("response-text");
    expect(amount).toHaveTextContent(2);
    expect(responseText).toHaveTextContent("Certo");
  });

  it('Should show "Errado" when click in "Eh Par" button and amount is odd', () => {
    render(<MyComponent />);
    const amount = screen.getByTestId("amount-text");
    const clickButton = screen.getByTestId("click-button");
    const ehParButton = screen.getByTestId("eh-par-button");
    fireEvent.click(clickButton);
    fireEvent.click(ehParButton);
    const responseText = screen.getByTestId("response-text");
    expect(amount).toHaveTextContent(1);
    expect(responseText).toHaveTextContent("Errado");
  });

  it('Shoud not show response text when no click in "Eh par" button', () => {
    render(<MyComponent />);
    const clickButton = screen.getByTestId("click-button");
    fireEvent.click(clickButton);

    const responseText = screen.queryByTestId("response-text");
    expect(responseText).not.toBeInTheDocument();
  });
});
