import LikeButton from "./like-button";

function Header( {title} ){
    return(<h1>{title}</h1>);
}

export default function HomePage(){
    const names = ['Arthur', 'Laura', 'Adalgisia', 'Lauro'];

    return(
        <div>
            <Header title="Familia:" />

            <ul>
                {names.map((name) => (<li key={name}>{name}</li>))}
            </ul>

            <LikeButton />
        </div>
    );
}