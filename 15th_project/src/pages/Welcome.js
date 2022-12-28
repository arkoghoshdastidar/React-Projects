import { Route, Routes } from 'react-router-dom';
import NewUser from './NewUser';

const Welcome = () => {
    return (
        <>
            <h1>The welcome page!</h1>
            <Routes>
                <Route path="/newUser" element={<NewUser />} />
            </Routes>
        </>
    )
}

export default Welcome;