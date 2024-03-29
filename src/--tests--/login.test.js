import { render, fireEvent, screen } from "@testing-library/react";
import login from "../Login";

//test block
test("login", () => {
// render the component on virtual dom
render(<login />);

//select the elements you want to interact with
const email = screen.getByTestId("");
const sumbit = screen.getByTestId("submit");

//interact with those elements
fireEvent.click(sumbit);

//assert the expected result
expect(login).toHaveTextContent("succfully");
});