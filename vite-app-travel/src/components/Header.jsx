function Header() {
    return (
      <header  className="d-flex align-items-center bg-success text-light p-3 ">
        <img
          src="/src/assets/globe.png"
          alt="globe icon"
          style={{ width: '30px', marginRight: '10px' }}
        />
        <h1>My Favorite Travel Places in Kyrgyzstan</h1>
      </header>
    )
  }
  
  export default Header;