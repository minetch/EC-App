import { useDispatch } from "react-redux";
import { push } from 'connected-react-router'

const Login = () => {
    const dispatch = useDispatch();
    return(
        <>
            <button onClick={ () => dispatch(push('/'))}>トップへ</button>
            <div>hello this is from aiba</div>
            <div>hello this is from minetch</div>
        </>
    );
}

export default Login;