import "./App.css";

const welcome = {
    greeting: "Hey",
    title: "React",
};

const list = [
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

function getTitle(title) {
    return title;
}

function App() {
    return (
        <div>
            <Header />

            <h2>{getTitle("Function Result")} as a title 2</h2>
            <p>Here is an array, but as a component</p>
            <List />
        </div>
    );
}
export default App;

function Header() {
    return (
        <header>
            <h1>
                {welcome.greeting} {welcome.title}
            </h1>
            <label htmlFor="search">Busca: </label>
            <input id="search" type="text" />
        </header>
    );
}

function List() {
    return list.map(function (item) {
        return (
            <div key={item.objectID}>
                x -
                <span>
                    <a href={item.url}>{item.title}</a>
                </span>
                <span>{item.author}</span>
                <span>{item.num_comments}</span>
                <span>{item.points}</span>
            </div>
        );
    });
}
