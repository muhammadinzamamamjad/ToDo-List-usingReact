import React from 'react'

export default function About() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card" style={{ width: '100%', maxWidth: '600px' }}>
        <div className="card-body">
          <h2 className="card-title text-center">About This Project</h2>
          <p className="card-text">
            Welcome to the To-Do List application! This project is designed to help you manage your tasks efficiently. Here’s a quick overview of what you can do with this app:
          </p>
          <ul>
            <li><strong>Add New Tasks:</strong> Easily add new tasks to your to-do list with a title and description.</li>
            <li><strong>View Tasks:</strong> See all your tasks listed in a clear and organized manner.</li>
            <li><strong>Delete Tasks:</strong> Remove tasks from your list when they are completed.</li>
            <li><strong>Responsive Design:</strong> The app is built with responsive design in mind, ensuring it works well on both desktop and mobile devices.</li>
          </ul>
          <p className="card-text">
            This project is built using React for the frontend, providing a smooth and dynamic user experience. Bootstrap is used for styling to ensure a clean and modern look.
          </p>
          <p className="card-text">
            If you have any questions or feedback, feel free to contact us. We hope you find this application helpful and easy to use!
          </p>
        </div>
      </div>
    </div>
  )
}
