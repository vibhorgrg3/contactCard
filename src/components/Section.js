import './Section.css'


const Section = (props) => {

    const heading = props.heading;
    const data=props.data;
    return (
        <div className='main-body'>
            <div className='head'>{heading}</div>
            <p>{data}</p>
        </div>
    )
}
export default Section;