import { Link } from "react-router-dom"
import { useThemeContext } from "../contexts/ThemeContext"

const Header = () => {
    const {toggleLangs} = useThemeContext()

     return(
        <div>
            <button onClick={toggleLangs}>change langs</button>
            <Link to={'/'}>main page</Link>
            <Link to={'/create'}>create page</Link>
        </div>
     )
}


export default Header