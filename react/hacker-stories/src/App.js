import "./App.css";
import React from 'react';





const App = () => {

  const stories = [
    {
        title: "React",
        url: "https://reactjs.org/",
        author: "Jordan Walke",
        num_comments: 3,
        points: 4,
        objectID: 0,
    },
    {
        title: "Redux",
        url: "https://redux.js.org/",
        author: "Dan Abramov, Andrew Clark",
        num_comments: 2,
        points: 5,
        objectID: 1,
    },
  ];

  return (
      <div>
        <Header/>
        <Search/>
        <List list={stories}/>
      </div>
  );
};

const Header = () =>{
  const welcome = {
    greeting: "Hey",
    title: "React",
  };

  const getTitle = (title) => {
      return title;
  };

  return(
    <header>
      <h1>
          {welcome.greeting} {getTitle(welcome.title)}
      </h1>
    </header>
  )

}

const Search = () =>{
  const [searchTerm, setSearchTerm] = React.useState('');
  
  const handleChange = (event) => {
    // console.log(event)
    // console.log(event.target.value);
    setSearchTerm(event.target.value);

  };
  
  return(
    <div>
    <label htmlFor="search">Busca: </label>
    <input id="search" type="text" onChange={handleChange} />
    <span> Searching for <strong>{searchTerm}</strong>.</span>
  </div>
  )


}

const List = (props) => {
    return props.list.map((item) => {
        return (
            <div key={item.objectID}>
                x - {props.test} -
                <span>
                    <a href={item.url}>{item.title}</a>
                </span>
                <span>{item.author}</span>
                <span>{item.num_comments}</span>
                <span>{item.points}</span>
            </div>
        );
    });
};

export default App;
