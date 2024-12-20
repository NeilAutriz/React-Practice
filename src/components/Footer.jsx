import '../styles/Footer.css'

const Footer = () => {
    const time = new Date();

    return(
        <footer className="footer-container">
            <p className='copyright-text'>Copyright &copy; {time.getFullYear()} </p>
        </footer>
    )
}


export default Footer