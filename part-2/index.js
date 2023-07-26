// Tweet component
const Tweet = (props) => {
    const { username, name, date, message } = props;
    
    return (
      <div className="tweet">
        <p className="username">@{username}</p>
        <p className="name">{name}</p>
        <p className="date">{date}</p>
        <p className="message">{message}</p>
      </div>
    );
  };
  
  // App component
  const App = () => {
    return (
      <div>
        <h2>Twitter Feed</h2>
        <Tweet
          username="user1"
          name="John Doe"
          date="July 25, 2023"
          message="Hello, this is my first tweet!"
        />
        <Tweet
          username="user2"
          name="Jane Smith"
          date="July 25, 2023"
          message="Excited to be on Twitter!"
        />
        <Tweet
          username="user3"
          name="Bob Johnson"
          date="July 24, 2023"
          message="React is awesome!"
        />
      </div>
    );
  };
  
  // Render the App component into the root element
  ReactDOM.render(<App />, document.getElementById('root'));
  