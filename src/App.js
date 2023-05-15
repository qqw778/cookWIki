import React from "react";
import Profile from './component/login/Profile';

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";


import MainPage from './component/page/MainPage';
import LoginPage from './component/page/LoginPage';
import PostViewPage from './component/page/PostViewPage';
import JoinPage from './component/page/JoinPage';

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>

function App(props) {
    return (
        <section>
            <BrowserRouter>
                <Routes>
                    <Route index element={<MainPage />} />
                    <Route path="Login" element={<LoginPage />} />
                    <Route path="Join" element={<JoinPage />} />
                    <Route path="post/:postId" element={<PostViewPage />} />
                </Routes>
            </BrowserRouter>
        </section>
    );
}

export default App;
