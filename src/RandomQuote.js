import  React  from  'react';

const  RandomQuote = ({ quote, image, character }) => {
    return (
        <div  className="DisplayEmployee">

            <img  src={image}  alt="character pic"  />
            <ul>
                <li>
                    Name : {character}
                </li>
                <li>
                    Location : {quote},
                </li>
            </ul>
        </div>
    );
};

export  default  RandomQuote;