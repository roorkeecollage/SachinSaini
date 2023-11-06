import phir from './image/phir.png'
import avtar from './image/avtar.+++++++png'






function VideoGrid(){
    return (


        
        <div class="thumbnail">
            <div class="video">
            <img src={phir} />
        </div>
        <div class="video-title">
            <div>
                <img src={avtar} height={30px} width={30px}></img> 
            </div>
            <div class="video-info">
                <h4 class="track-title margin-0">WRITE A TITLE</h4>
                <P class="margin-0 smaller-frontsize">T-series</P>
                <p class="margin-0 smaller-front-size">230M view . 1 month ago</p>
                </div>
            </div>
    )
}
function Home(){
    let video = [1,2,3,4,5,6,7,8,9,10,11,12]
    return (
     
             <div class="main-right">
                {video.map((video) => {
                      return <VideoGrid />
                })}
             </div>
            </div>


        </div>
    )
}

export default Home;