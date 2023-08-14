import { it, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import { CardInfo } from "./CardInfo";

describe("CardInfo", () => {
  it("should render correctly", () => {
    const data = {
      image: "http://test.com/test.jpg",
      subtitle: "test subtitle",
      title: "test title",
      description: "test description",
      actions: [
        {
          title: "test action title.0",
          value: "test action value.0",
        },
      ],
    };
    render(<CardInfo {...data} />);
    screen.getByText(data.subtitle);
    screen.getByText(data.title);
    screen.getByText(data.description);
    screen.getByText(data.actions[0].title);
    screen.getByText(data.actions[0].value);
  });
});
