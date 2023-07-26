// Person component
const Person = (props) => {
    const { name, age, hobbies } = props;
    const truncatedName = name.length > 8 ? name.substring(0, 6) : name;
  
    return (
      <div className="person">
        <p>Learn some information about this person</p>
        <h3>{age >= 18 ? "Please go vote!" : "You must be 18"}</h3>
        <h2>{truncatedName}</h2>
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  // App component
  const App = () => {
    return (
      <div>
        <h2>People</h2>
        <Person name="John Doe" age={20} hobbies={['Reading', 'Gardening']} />
        <Person name="Jane Smith" age={16} hobbies={['Painting', 'Cooking']} />
        <Person name="Robert Johnson" age={25} hobbies={['Playing guitar', 'Hiking']} />
      </div>
    );
  };
  
  // Render the App component into the root element
  ReactDOM.render(<App />, document.getElementById('root'));
  