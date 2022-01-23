import './App.css';

const welcome = {
  greeting: 'Hey',
  title: 'React',
};

function getTitle(title) {
  return title;
}

function App() {
  return (
  <div>
    <h1>
      {welcome.greeting} {welcome.title}
    </h1>
    <h2>{getTitle('Function Result')} as a title 2</h2>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" />
  </div>
  );
}
export default App;