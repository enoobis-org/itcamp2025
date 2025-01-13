import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import booksData from './components/bookData.js'
import BookNoHook from './components/BookNoHook.jsx'
import BookWithHook from './components/BookWithHook.jsx'


function App() {

  return (
    <>
    <h2> Your favorable Book List </h2>
    <div className="card-container card-body">
      {booksData.items.map((book, index) => (
        <BookNoHook
          key={index}
          title={book.volume.title}
          author={book.volume.authors}
          description={book.volume.description}
          subtitle={book.volume.subtitle}
          image={book.volume.image}
        />
      ))}
      {/* <BookWithHook /> */}
    </div>
  </>
  )
}

export default App
