import { render, screen } from '@testing-library/react'
import { Header } from "../components/Header";

test("Test 1 passed", () => {
  render(<Header/>);

  const element = screen.getByText(/Исследование методов и технологий разработки CRM-систем/i);

  expect(element).toBeInTheDocument();
})