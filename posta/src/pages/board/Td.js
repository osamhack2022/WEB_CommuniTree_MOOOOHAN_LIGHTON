const Td = ({item}) => {
    return(
        <>
        <tr>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.content}</td>
            <td>{item.username}</td>
        </tr>
        </>
    )
};

export default Td;