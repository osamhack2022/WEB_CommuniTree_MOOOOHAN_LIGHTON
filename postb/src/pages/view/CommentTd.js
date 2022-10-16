const CTd = ({Citem}) => {
    return(
        <>
        <tr>
            <td>{Citem.id}</td>
            <td>{Citem.content}</td>
            <td>{Citem.username}</td>
        </tr>
        </>
    )
};

export default CTd;