import React from 'react'
 const cardsData = [
    { 
        id: 1, 
        image: 'https://placehold.co/500x325', 
        title: 'Card title 1', 
        text: 'Nội dung 1...' 
    },
    { 
        id: 2, 
        image: 'https://placehold.co/500x325', 
        title: 'Card title 2', 
        text: 'Nội dung 2...' 
    },
    { 
        id: 3, 
        image: 'https://placehold.co/500x325', 
        title: 'Card title 3', 
        text: 'Nội dung 3...' 
    },
    { 
        id: 4, 
        image: 'https://placehold.co/500x325', 
        title: 'Card title 3', 
        text: 'Nội dung 3...' 
    },
];

function Card({ image, title, text }) {
    return (
        <div className="card" style={{ width: '500px', height: '325px' }}>
            <img src={image} className="card-img-top " alt={title}/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}

const BaiTapThucHanhLayout = () => {
    return (
        <>
            <header className='section_header' style={{ background: '#353a40' }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 d-flex justify-content-between align-items-center text-white'>
                            <a className="navbar-brand" href="#">Navbar</a>
                            <ul className="navbar-nav flex-row gap-3">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
            <main className='container'>
            <div className='row'>
                <div className='col-12'>
                    <section className='section_banner'>
                    <div className='content_banner p-5'>
                        <h1>A Warm Welcome!</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione iure, harum neque in cupiditate soluta rem nemo exercitationem quaerat! Dolores beatae officia quae adipisci iste eligendi. Maiores nemo deleniti blanditiis!</p>
                        <button type="button" class="btn btn-primary">Call to action!</button>
                    </div>
                </section>
                </div>
                <div className='col-12'>
                    <section className='section_item'>
                        <div className='content_item d-flex gap-3 mb-5'>
                            {cardsData.map((card) => (
                                    <Card 
                                        key={card.id} 
                                        image={card.image} 
                                        title={card.title} 
                                        text={card.text} 
                                    />
                                ))}
                        </div>
                    </section>
                </div>
            </div>
                
                
            </main>
            <footer className='section_footer bg-dark text-white text-center py-3'>
                <div className='row'>
                <div className='container'>
                    <div className='col-12'>
                        <div className='footer_content '>
                        <p className='mb-0'>Copyright &copy; Your Website 2024</p>
                        </div>
                    </div>
                </div>
                </div>
            </footer>
        </>
    )
}

export default BaiTapThucHanhLayout
