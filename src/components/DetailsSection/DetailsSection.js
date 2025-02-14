import React, { useState, useEffect , useContext} from 'react';
import './DetailsSection.css';
import { useParams, useNavigate  } from 'react-router-dom';
import { BookData } from "../../pages/BookData";
import { UserContext, CartContext } from '../../App';

const DetailsSection = () => {
    const { id } = useParams();
    const [bookData, setBookData] = useState({});

    const user= useContext(UserContext);
    const {cartItemes ,setCartItemes} = useContext(CartContext);
    const navigate =useNavigate();

// Récupérer les détails par id
    useEffect(() => {
        let newData = BookData.filter((book) => book.id === parseInt(id));
        setBookData(newData[0])
    },[])

  // gérer ajouter des items  au cart
    const handelAddToCart=()=>{
        if(user){
            setCartItemes([...cartItemes, bookData]);
            alert(`the book ${bookData.book_name} is added to the Cart`);
        }else{
            alert("Please Login or Sign up first.... "); 
            navigate('/Login');
        }
    }

    return (
        <section className="detail-section-container">
            <div className='container'>
                <div className="flex-container">
                    <div className='book-img-container'>
                        <img src={bookData.book_img} alt="book" />
                    </div>

                    <div className='book-detail-container'>
                        <h2>{bookData.book_name}</h2>
                        <p className="author_name">{bookData.author_name}</p>
                        <p className="book-description">{bookData.book_description}</p>
                        <p><b>Language</b>: {bookData.language}</p>
                        <p><b>Book Length</b> : {bookData.print_length}</p>

                        <h3>&#8377;{bookData.price}</h3>

                        <a onClick={handelAddToCart} className="buttonCart">Add To Cart</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailsSection;
