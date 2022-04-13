import TestRenderer from "react-test-renderer";
import Header from "../header";

describe("Header", () => {
  it("Render", () => {
    const component = TestRenderer.create(<Header totalCount={4} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
