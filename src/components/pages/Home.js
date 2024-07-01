export const Home = () => {

     return (
      <>
          <header class="header">
          <nav class="navbar">
              <a href="index.html" class="nav-logo" ><img src="images/logo.png" alt ="Maralex" id="logo"/> </a>
              <ul class="nav-menu">
                  <li class="nav-item">
                      <a href="index.html" class="nav-link">Home</a>
                  </li>
                  <li class="nav-item">
                      <a href="about.html" class="nav-link">About</a>
                  </li>
                  <li class="nav-item">
                      <a href="gallery.html" class="nav-link">Gallery</a>
                  </li>
                  <li class="nav-item">
                      <a href="blog.html" class="nav-link">Blog</a>
                  </li>
                  <li class="nav-item">
                      <a href="contact.html" class="nav-link">Contact</a>
                  </li>
              </ul>
              <div class="hamburger">
                  <span class="bar"></span>
                  <span class="bar"></span>
                  <span class="bar"></span>
              </div>
          </nav>
      </header>
      <main class="whole">
           
           <div class="leftpart">
          <p>Turn your home into a gallery using your own photos!</p>
              <span>
                  <br></br>
              </span>
          <h1>Your own photo on the wall.</h1>
          <span>
          <br></br>
          </span>
          <ul>
              <li>Floating gallery look</li>
              <li>Swap prints easily</li>
              <li>Large sizes, up to 120x180cm</li>
          </ul>
          <span>
          <br></br>
          </span>
          <div><button>Upload your photo</button>
              <button>Choose from our gallery</button></div>
          </div>
          <div>
              <img  src="/home.jpg" alt="background"/>
          </div>
    
     </main>
          <footer>
              <section class="flexfooter" style={{background:'black'}}>
                  <a href="https://www.instagram.com/alex_karamanov" ><img src="/instagram-white-icon copy.png" alt="instagram" style={{width:'100%'}}/></a>
                  <a href="https://www.500px.com/alex_karamanov" ><img src="/500px.png" alt="500px" style={{width:'100%'}}/></a>
                  <a href="https://www.stocksy.com/alexalina" ><img src="/logoStocksy.svg" alt="Stocksy" style={{width:'100%'}}/></a>
                  <a href="https://www.flickr.com/photos/alex_karamanov" ><img src="Flickr-PNG-Picture.png" alt="flickr" style={{width:'100%'}}/></a>
              </section>
              <p class="copyrght">2024 &copy; Maralex  </p> 
          </footer>
     
       </>
     )
     } 
