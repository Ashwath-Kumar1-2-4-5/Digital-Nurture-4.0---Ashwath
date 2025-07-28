import React from 'react';
import './App.css';

const books = [
  {id: 101, bname: 'Master React', price: 670},
  {id: 102, bname: 'Deep Dive into Angular 11', price: 800},
  {id: 103, bname: 'Mongo Essentials', price: 450},
];

const blogs = [
  {id: 201, title: 'React Learning', author: 'Stephen Biz', content: 'Welcome to learning React!'},
  {id: 202, title: 'Installation', author: 'Schewzdenier', content: 'You can install React from npm.'},
];

const courses = [
  {id: 301, name: 'Angular', date: '4/5/2021'},
  {id: 302, name: 'React', date: '6/3/2020'},
];

function BookDetails(props) {
  const bookdet = (
    <ul>
      {props.books.map((book) => (
        <li key={book.id}>
          <h3>{book.bname}</h3>
          <h4>{book.price}</h4>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="detail-section">
      <h1>Book Details</h1>
      {bookdet}
    </div>
  );
}

function BlogDetails(props) {
  return (
    <div className="detail-section">
      <h1>Blog Details</h1>
      {props.blogs.map((blog) => (
        <div key={blog.id}>
          <h3>{blog.title}</h3>
          <h4>{blog.author}</h4>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
}

function CourseDetails(props) {
  return (
    <div className="detail-section">
      <h1>Course Details</h1>
      <ul>
        {props.courses.map((course) => (
          <li key={course.id}>
            <h3>{course.name}</h3>
            <h4>{course.date}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const showAllDetails = true;

  return (
    <div className="App-container">
      <h1>Blogger App Dashboard</h1>

      {showAllDetails ? (
        <div className="details-row">
          <CourseDetails courses={courses} />
          <BookDetails books={books} />
          <BlogDetails blogs={blogs} />
        </div>
      ) : (
        <div className="details-row">
          <h2>Select a category to view details.</h2>
        </div>
      )}
    </div>
  );
}

export default App;