const Td = ({item}) => {
    return(
        <>
        <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.Username}</td>
            <td>{item.content}</td>
        </tr>
        </>
    )
};

export default Td;