import React from "react";
//

const defaultStyle = {
  strokeWidth: 1,
  fill: "transparent",
  opacity: 1
};

export default class Line extends React.Component {
  render() {
    const { style, ...rest } = this.props;

    const resolvedStyle = {
      ...defaultStyle,
      ...style
    };

    return <line {...rest} style={resolvedStyle} />;
  }
}
