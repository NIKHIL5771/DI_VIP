// script.js

const blogPosts = [
    {
      title: "Web Development Blog Post",
      content: "In today's digital era, web development has become the backbone of the online world. From simple static websites to complex web applications, web development empowers businesses and individuals to create immersive and interactive experiences. With ever-evolving technologies and frameworks like HTML, CSS, JavaScript, and beyond, web developers continuously push the boundaries of creativity and functionality. They craft responsive designs, optimize performance, and ensure cross-browser compatibility. Web development is not just about coding; it's about solving problems and delivering seamless user experiences. As the internet landscape evolves, web development remains at the forefront, shaping the future of our connected world."
    },
    {
      title: "Unleashing the Power of Java Development Blog Post",
      content: "Java development has revolutionized the software industry with its robustness and versatility. From building enterprise-level applications to powering Android apps, Java offers unmatched flexibility. With its extensive libraries and vast community support, Java empowers developers to create scalable, secure, and high-performance solutions, making it a go-to choice for modern development projects."
    },
    {
      title: "Python Development: Empowering the World of Coding Blog Post",
      content: "Python development has taken the programming world by storm, emerging as a versatile and powerful language for various applications. From web development to data analysis, machine learning to automation, Python offers a seamless coding experience. With its clean syntax, vast library ecosystem, and strong community support, Python enables developers to write elegant and efficient code. Its readability and simplicity make it an ideal language for beginners, while its scalability and performance attract seasoned professionals. Python's versatility and cross-platform compatibility have made it a driving force behind innovations in multiple industries, shaping the future of technology."
    }
  ];
  
  window.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('posts');

    
  
    blogPosts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.classList.add('post');
  
      const titleElement = document.createElement('h3');
      titleElement.textContent = post.title;
  
      const contentElement = document.createElement('p');
      contentElement.textContent = post.content;

      const contactLink = document.getElementById('contact-link');
      const aboutLink = document.getElementById('about-link');
  
      postElement.appendChild(titleElement);
      postElement.appendChild(contentElement);
  
      postsContainer.appendChild(postElement);

      

      
    });
  });
  