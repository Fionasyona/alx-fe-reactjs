import { render, screen } from "@testing-library/react";
import AddTodoForm from "../components/AddTodoForm";

describe("AddTodoForm", () => {
  test("renders input and button", () => {
    render(<AddTodoForm />);
    expect(screen.getByPlaceholderText(/add a new todo/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /add/i })).toBeInTheDocument();
  });
});
