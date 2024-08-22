import style from "./splashscreen.module.scss";
import { Component } from "react";
import { Background } from "../Background/Background";

export default function SplashMessage() {
  return (
    <div className={style.container}>
      <div className={style.text} data-glitch="Loading...">Loading...</div>
      <div className={style.loader}></div>
      <Background />
    </div>
  );
}

/* export default function withSplashScreen(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
      };
    }

    async componentDidMount() {
      try {
        setTimeout(() => {
          this.setState({
            loading: false,
          });
        }, 5000);
      } catch (err) {
        console.log(err);
        this.setState({
          loading: false,
        });
      }
    }

    render() {
      // while checking user session, show "loading" message
      if (this.state.loading) return SplashMessage();

      // otherwise, show the desired route
      return <WrappedComponent {...this.props} />;
    }
  };
} */