import { useHistory } from 'react-router';
import TopBar from '../displays/topbar';
import './blank.css'

const Blank = () => {

    const history = useHistory()

    return (
        <div>
            <TopBar text="Back to Home" handleBack={() => history.push("/")}/>
            <div className='blank'> 
                <div> This page is currently under construction🛠️ ... </div>
            </div>
        </div>
    )
}

export default Blank;