import { useNavigate } from "react-router-dom"

function Test() {

    const navigate = useNavigate()
    const blabla = () => {
        navigate('/user')
          
        }

    //const [count, setCount] = useState(0);
    return (
        <div>
            <p>You clicked times</p>
            <button onClick={blabla}>
            Click me
            </button>
        </div>
    )
}

export default Test