import './SectionTitle.css';

export default function SectionTitle({SectionTitle}){
    return(
        <div className='titleContainer'>
            <h2 >{SectionTitle}</h2>
            <div className="decoration_underline"></div>
        </div>
    )
}