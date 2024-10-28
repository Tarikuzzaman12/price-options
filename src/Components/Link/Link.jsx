

const Link = ({route}) => {
    return (
        <li className='mr-10 hover:bg-yellow-400 px-3'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link