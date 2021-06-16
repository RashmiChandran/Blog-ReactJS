import './App.css';
import Header from './components/Header';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import DetailPageWithRouter from './components/DetailPage';
import {useState, useEffect} from 'react';
import { Button } from 'reactstrap';
import { BsPlus } from "react-icons/bs";
function App() {

  const [articles, setArticles] = useState({});
  useEffect(() => {
    const getArticles = async () => {
      const articlesList = await fetchArticles()
      setArticles(articlesList);
    }
    getArticles()

  }, []);

  const fetchArticles = async () =>{
    const res = await fetch('https://my-json-server.typicode.com/RashmiChandran/Blog-ReactJS/articles')
    const data = await res.json();
    return data;
  } 
   

  return (
    <div className="App">
      <Header />
      <BrowserRouter basename={process.env.PUBLIC_URL >
        <Switch>
        <Route
                exact
                path="/"
                render={() => {
                    return (
                      <Redirect to="/blog" />
                    )
                }}
              />
            <Route path="/blog">
              <Dashboard articlesItems = {articles}/>
             
              <Button className="add-icon" ><BsPlus/></Button>
            </Route>
            <Route path="/details" component={DetailPageWithRouter}>
              <DetailPageWithRouter/>
            </Route>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
