import Buttons from '../components/Button';
import './Recommended.css';

function Recommended({handleClick}) {
    return <>
    <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
            <Buttons onClickHandler={handleClick} value="" title="All"/>
            <Buttons onClickHandler={handleClick} value="nike" title="Nike"/>
            <Buttons onClickHandler={handleClick} value="adidas" title="Adidas"/>
            <Buttons onClickHandler={handleClick} value="puma" title="Puma"/>
            <Buttons onClickHandler={handleClick} value="vans" title="Vans"/>
        </div>
    </div>
    </>
}

export default Recommended;