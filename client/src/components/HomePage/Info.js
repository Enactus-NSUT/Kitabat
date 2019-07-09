import React from "react";
import "./info.css";
import Title from "../Title";
export default function Info() {
  return (
  <div>
    <div className="home">
  	<section >
      <div className="container py-5">
        <div className="row">
        	<div className="my-3">
        		<h3 className="my-3 font-weight-bold text-center text">
        			The Delhi’s calligrapher brigade used to be a highly respected community with more than ample amount of work coming their way. 
        			A true form of art that has a long history of it's popular existence in literature ever since the medieval times. 
        			What used be the hub for India’s calligraphers is now a dwindling community on the brink of demise.
        		</h3>
        		<h3 className="my-3 font-weight-bold text-center text">
        			Project Kitabat by Enactus NSUT is an initiative to bring us closer to the beautiful world of Old Delhi’s 
              Urdu and Arabic Calligraphy. It is an effort in not just reviving Calligraphy as an artform, 
              but also making it relevant for today.
        		</h3>
        	</div>
        </div>
      </div>
    </section>
    </div>
    <div className="media">
    <section className="container">
      <div className=" py-5">
        <div className="row">
        <div className="my-3">
          <p className="para text-center">With the project having completed more than 10 months, here is an analysis of the project, and the model we’ve taken up. #RoadToSustainability</p>
        </div>
        </div>
        <div className="row">
        	<div className="my-3 mx-auto">
        		<iframe className="youtube" height="506" src="https://www.youtube.com/embed/lqZFedQXOjk" frameborder="0" 
        		allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        		allowfullscreen>
        		</iframe>
        	</div>
        </div>
      </div>
    </section>
    </div>
    <div className="fb">
    	<section>
      <div className="container py-5">
        <h2 className="text-center mx-auto heading">Social Media Activity</h2>
        <div className="row">
        	<div className="my-4 mx-auto">
        	<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fkitabat.enactusnsut&tabs=timeline&width=400&height=585&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=270130390373305" 
        	width="400" 
        	height="635" 
        	scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
        	</div>
        </div>
      </div>
    </section>
    </div>
</div>
);
}