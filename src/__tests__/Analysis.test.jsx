import { render, screen } from '@testing-library/react'
import { Analysis } from "../components/Analysis";

test("Test 2 passed", () => {
  render(<Analysis/>);

  const element = screen.getByText(/анализ зарубежных и отечественных научных исследований/i);

  expect(element).toBeInTheDocument();
})