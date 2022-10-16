import CTd from './CommentTd.js';

const CTr = ({Cinfo}) => {
    return(
        <tbody>
            {
                Cinfo.map((Citem) => {
                    return(
                        <CTd key={Citem.id} item={Citem}/>
                    )
                })
            }
        </tbody>
    );
};

export default CTr;