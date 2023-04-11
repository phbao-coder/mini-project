import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route, Routes } from 'react-router-dom';
import { routes } from './routes/routes';
import SearchInput from './components/SearchInput';
import './index.css';
import useStore from './hooks/useStore';

function App() {
    // eslint-disable-next-line no-unused-vars
    const [state, dispatch] = useStore();
    return (
        <div className="container">
            <header>
                <nav>
                    <Link to={'/'} className="logo">
                        <h1>Github Search, {state.user.login}</h1>
                    </Link>
                </nav>
                <SearchInput />
            </header>
            <main>
                <Routes>
                    {routes.map((route, index) => (
                        <Route key={index} path={route.path} element={route.component} />
                    ))}
                </Routes>
            </main>
            <footer>
                <h3>Contact</h3>
                <ul>
                    <li>Phone number: 0946310531</li>
                    <li>Gmail: phbao.coder@gmail.com</li>
                    <li>
                        Github:{' '}
                        <Link
                            to="https://github.com/phbao-coder"
                            target="https://github.com/phbao-coder"
                        >
                            https://github.com/phbao-coder
                        </Link>
                    </li>
                </ul>
            </footer>
        </div>
    );
}

export default App;
