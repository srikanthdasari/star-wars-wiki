import React, {useContext, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
// import ApolloClient from "apollo-boost";
// import gql from "graphql-tag";
// import { ApolloProvider, ApolloConsumer, Query } from "react-apollo";
import { lightTheme, darkTheme } from './configs/theme';
import { GlobalStyles } from './configs/global';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Menu from './components/menu';
import {ContextState} from './configs/context-state-config';
import Home from './components/home';
import Context from './configs/context';
// const client = new ApolloClient({
//   uri: "https://swapi.graph.cool/"
// });


const Characters = ()=> (<h1>characters</h1>);
const Planets = ()=> (<h1>Plants</h1>);
const Droids = ()=> (<h1>Droids</h1>);

function App() {
  
  return (
    <ThemeProvider theme={darkTheme}>
      <>
        <ContextState>
          <GlobalStyles />
          <div>
            <Router>
                <header>
                  <Menu />
                </header>
                <Switch>
                  <main>
                    <Route exact path="/" component={Home} />  
                    <Route exact path="/characters" component={Characters} />  
                    <Route exact path="/planets" component={Planets} />  
                    <Route exact path="/droids" component={Droids} />     
                  </main>                
                </Switch>
            </Router>
          </div>
        </ContextState>
      </>
    </ThemeProvider>
  );
}

export default App;



// {/*<div className="App">
//       <header>

//       </header>
//       <main>

//         <ApolloProvider client={client}>
//           <Query
//             query={gql`
//                       {
//                         allFilms {
//                           characters {
//                             name
//                           }
//                           episodeId
//                           title
//                           director
//                           openingCrawl
//                           planets {
//                             name
//                           }
//                         }
//                       }
//               `}
//           >
//             {({ data }) => {
//               console.log(data);
//               if (data === undefined) return null;
//               if (data.allFilms === undefined) return null;

//               return (
//                 <ul>
//                   {console.log(data.allFilms)}
//                   {
//                     data.allFilms.map(x => {
//                       return <li key={x.episodeId}>{x.episodeId} -  {x.title}</li>
//                     })
//                   }
//                 </ul>
//               )

//             }}
//           </Query>
//         </ApolloProvider> 
//       </main>

//     </div>*/}