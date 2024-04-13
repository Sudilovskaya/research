import { render, screen } from '@testing-library/react'
import { Glossary } from "../components/Glossary";

test("Test 3 passed", () => {
  render(<Glossary/>);

  const element = screen.getByText(/Архитектура программного обеспечения/i);

  expect(element).toBeInTheDocument();
})