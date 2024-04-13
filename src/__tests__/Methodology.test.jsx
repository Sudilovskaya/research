import { render, screen } from '@testing-library/react'
import { Methodology } from "../components/Methodology";

test("Test 5 passed", () => {
  render(<Methodology/>);

  const element = screen.getByText(/выбор методов и технологий/i);

  expect(element).toBeInTheDocument();
})