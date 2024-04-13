import { render, screen } from '@testing-library/react'
import { Evaluation } from "../components/Evaluation";

test("Test 4 passed", () => {
  render(<Evaluation/>);

  const element = screen.getByText(/критерии эффективно функционирующей CRM-системы/i);

  expect(element).toBeInTheDocument();
})