import react, { useState } from 'react'

function Login(prop) {

    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [userErr, setUserErr] = useState('');
    const [passErr, setPassErr] = useState(false);

    function handleLoading(e) {
        if (user.length < 3 || pass.length < 3) {
            alert('Type correct values')
        }
        else {
            alert('form submitted');
        }
        e.preventDefault();
    }

    function userHandler(e) {
        let item = e.target.value
        if (item.length < 3) {
            setUserErr(true);
        }
        else {
            setUserErr(false);
        }
        setUser(e.target.value)
    }

    function passHandler(e) {
        let item = e.target.value.length < 3
        item ? setPassErr(true) : setPassErr(false);

        setPass(e.target.value)
    }
    return (
        <div className="App">
            <h1>Login Page</h1>
            <h1>{prop.description}</h1>
            <br />
            <form onSubmit={handleLoading}>
                <input type="text" placeholder='Username' onChange={userHandler} /> &nbsp; {userErr ? <span style={{color:"red" , background:"black"}}>Invalid User</span> : null}
                <br /><br />
                <input type="text" placeholder='Password' onChange={passHandler} /> &nbsp; {passErr ? <span style={{color:"red" , background:"black"}}>Invalid Password</span> : null}
                <br /><br />
                <button type='submit'>Login</button>
            </form>

        </div>
    )
}

export default Login;