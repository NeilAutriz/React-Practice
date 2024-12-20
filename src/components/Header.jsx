import '../styles/Header.css'

const Header = () => {
    const handleUserName = () => {
        const users = ['Mark', 'Neil', 'Autriz']
        let index = Math.floor(Math.random() * 3)
        return users[index] 
    }

    return(
        <header className='header-container'>
            <h1> 🥗Grocery List🥗 </h1>
            <p> Hello, {handleUserName()}!👤</p>
        </header>
    )
}

export default Header