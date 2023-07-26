// FirstComponent
const FirstComponent = () => {
    return <h1>My very first component</h1>;
  };
  
  // NamedComponent
  const NamedComponent = (props) => {
    return <p>My name is {props.name}</p>;
  };
  
  // App
  const App = () => {
    return (
      <div>
        <FirstComponent />
        <NamedComponent name="Yanis" />
      </div>
    );
  };
  
  // Render the App component into the root element
  ReactDOM.render(<App />, document.getElementById('root'));
  