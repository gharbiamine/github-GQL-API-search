import React, { FC, useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

interface ISearchProps {
  handleSearch: (value: string) => Promise<void> | void;
  title: string;
  button: string;
}

export const Search: FC<ISearchProps> = ({ handleSearch, title, button }) => {
  const [value, setValue] = useState<string>("");
  return (
    <div>
      <div className="container">
        <div className="row my-4">
          <Form
            onSubmit={(event) => {
              event.preventDefault();
              handleSearch(value);
            }}
          >
            <Form.Group className="mb-3">
              <Form.Label>{title}</Form.Label>
              <input
                type="text"
                onChange={(event) => setValue(event.target.value)}
              />
            </Form.Group>
            <Button className="my-1" type="submit">
              {button}
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};
