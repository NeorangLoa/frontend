import Detail from 'src/components/board/index';
import './index.scss';

export default function Freepostdetail(){

    return(
        <div className="freeboarddetail">
            <div className="AD left-ad">Left AD</div>
            <div className="AD right-ad">Right AD</div>
            
            <Detail />
        </div>
    )
}