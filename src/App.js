import React, { useEffect, useState } from 'react';
import './App.css';
import HomePage from "./pages/Home/HomePage";
import { Route } from 'react-router-dom'
import ShopPage from "./pages/Shop/ShopPage";
import Header from "./components/Header/Header";
import SignInAndSignUp from "./pages/SignIn-and-SignUp/SignIn-and-SignUp";
import { auth, createUserProfileDocument } from './firebase/firebase.utils'


function App() {
    const [ currentUser, setCurrentUser ] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged(async user => {
            if (user) {
                const userRef = await createUserProfileDocument(user);
                userRef.onSnapshot(snapshot => {
                    setCurrentUser({
                        id: snapshot.id,
                        ...snapshot.data()
                    })
                })
            }
            setCurrentUser(user)
        })

    }, []);

    return (
        <div className="App">
            <Header currentUser={currentUser}/>
            <Route exact path="/shop" component={ShopPage}/>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/signIn" component={SignInAndSignUp}/>
        </div>
    );
}

export default App;
