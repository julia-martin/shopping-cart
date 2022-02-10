import {render, screen} from "@testing-library/react";
import AddForm from "../components/AddForm";
import userEvent from "@testing-library/user-event";

const products = [
  {
    id: 1,
    title: 'Amazon Kindle E-reader',
    quantity: 5,
    price: 79.99
  },
  {
    id: 2,
    title: 'Apple 10.5-Inch iPad Pro',
    quantity: 3,
    price: 649.99
  },
  {
    id: 3,
    title: 'Yamaha Portable Keyboard',
    quantity: 2,
    price: 155.99
  },
  {
    id: 4,
    title: 'Tinker, Tailor, Soldier, Spy - A John le Carre Novel',
    quantity: 12,
    price: 13.74
  }
]

describe("Add Product Form", () => {
  let openProductFormButton, func;
  let form, div, productQtyInput, productNameInput, productPriceInput;
  beforeEach(() => {
    func = jest.fn();
    render(<AddForm setProducts={func} products={products}/>);
    form = screen.getByRole("form");
    div = form.parentElement;
    openProductFormButton = screen.getByTestId("openFormButton");
    productNameInput = screen.getByRole("textbox", {name: "Product Name"});
    productPriceInput = screen.getByRole("textbox", {name: "Price"});
    productQtyInput = screen.getByRole("textbox", {name: "Quantity"});
  });
  it("Add product button visible on first load", () => {
    expect(openProductFormButton).toBeInTheDocument();
  });

  it("Form is visible after add product button press", () => {
    userEvent.click(openProductFormButton);
    expect(div).toHaveClass('visible');
  });

  it("Product Name input changes when we type input", () => {
    userEvent.type(productNameInput, "iPhone");
    expect(productNameInput).toHaveValue("iPhone")
  });

  it("Product Name input changes when we type input", () => {
    userEvent.type(productPriceInput, "3.99");
    expect(productPriceInput).toHaveValue("3.99")
  });

  it("Product Name input changes when we type input", () => {
    userEvent.type(productQtyInput, "3");
    expect(productQtyInput).toHaveValue("3")
  });

  // it("Submit form calls setProducts when clicked", () => {
  //   userEvent.type(productNameInput, "iPhone");
  //   userEvent.type(productPriceInput, "3.99");
  //   userEvent.type(productQtyInput, "3");
  //   const submitProduct = screen.getByTestId("submitProduct");
  //   userEvent.click(submitProduct);
  //   expect(func.mock.calls.length).toEqual(1);
  // });
  //
  // it("Submit form has input data", () => {
  //   userEvent.type(productNameInput, "iPhone");
  //   userEvent.type(productPriceInput, "3.99");
  //   userEvent.type(productQtyInput, "3");
  //   const submitProduct = screen.getByTestId("submitProduct");
  //   const newProduct = {
  //     title: productNameInput.value,
  //     price: productPriceInput.value,
  //     quantity: productQtyInput.value
  //   }
  //   userEvent.click(submitProduct);
  //   expect(func.mock.calls[0][0]).toEqual(products.concat(newProduct));
  // });
});
