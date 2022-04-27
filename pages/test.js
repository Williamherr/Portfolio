
export default function test() {

    return (
        <div style={{maxWidth: "200px", maxHeight: "600px"}}>
        <div class="carousel w-full">
        <div id="slide1" class="carousel-item relative w-full">
          <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-14be7.appspot.com/o/images%2FHome.jpg?alt=media&token=c7b6ebd7-4380-47df-b7f3-81060e17f675" class="w-full"/> 
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" class="btn btn-circle" style={{backgroundColor:"grey"}}>❮</a> 
            <a href="#slide2" class="btn btn-circle" style={{backgroundColor:"grey"}} >❯</a>
          </div>
        </div> 
        <div id="slide2" class="carousel-item relative w-full">
          <img src="https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB" class="w-full"/> 
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" class="btn btn-circle">❮</a> 
            <a href="#slide3" class="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" class="carousel-item relative w-full">
          <img src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6" class="w-full"/>  
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" class="btn btn-circle">❮</a> 
            <a href="#slide4" class="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" class="carousel-item relative w-full">
          <img src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693" class="w-full"/>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" class="btn btn-circle">❮</a> 
            <a href="#slide1" class="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
      </div>
    )
}