

const Merit = ({index, merit}) => {

    return(<div key={index}>
        <h3 className='title-and-position'><b>{merit.title} </b>{merit.position}</h3>
        <div className='when-and-where'>{merit.when}, {merit.where}</div>
        <p>{merit.body}</p>
    </div>)

}

export default Merit;