import Td from './Td.js';

const Tr = ({info}) => {
    return(
        <tbody>
            {
                info.map((item) => {
                    return(
                        <Td key={item.id} item={item}/>
                    )
                })
            }
        </tbody>
    );
};

export default Tr;