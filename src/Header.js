import React from "react";

const SPEED = 0.01;

export default class Header extends React.PureComponent {
  state = { offset: 0 };
  t0 = Date.now();
  ref = React.createRef();

  componentDidMount() {
    this.frame = requestAnimationFrame(this.animate);
  }

  componentWillUnmount() {
    if (this.frame) {
      cancelAnimationFrame(this.frame);
    }
  }

  animate = () => {
    requestAnimationFrame(this.animate);

    const text = this.props.children;

    const td = Date.now() - this.t0;
    const offset = td * SPEED;

    const h1 = this.ref.current;

    if (!h1) {
      return;
    }

    h1.innerHTML = "";

    for (let i = 0; i < text.length; i++) {
      let charElem = document.createElement("span");
      charElem.style.color =
        "hsl(" + (360 * (i + offset)) / text.length + ",80%,60%)";
      charElem.innerHTML = text[i];
      h1.appendChild(charElem);
    }
  };

  render() {
    return <h1 ref={this.ref} />;
  }
}
