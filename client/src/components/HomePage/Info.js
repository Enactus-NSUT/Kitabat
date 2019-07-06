import React from "react";
export default function Info() {
  return (

  	<section className="py-5">
      <div className="container">
        <div className="row">
        	<div className="my-3">
        		<h3 className="text-lead my-3">
        			Project Kitabat by Enactus NSUT is an initiative to bring us closer to the beautiful world of Old Delhi’s 
              Urdu and Arabic Calligraphy. It is an effort in not just reviving Calligraphy as an artform, 
              but also making it relevant for today.
        		</h3>
        	</div>
        	<div className="my-3 mx-auto">
        		<iframe width="900" height="506" 
        		src="https://www.youtube.com/embed/lqZFedQXOjk" 
        		frameborder="0" 
        		allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        		allowfullscreen>
        		</iframe>
        	</div>
        	<div className="my-4 mx-auto">
        	<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fkitabat.enactusnsut&tabs=timeline&width=400&height=585&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=270130390373305" 
        	width="400" 
        	height="635" 
        	scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
        	</div>
        </div>
      </div>
    </section>
);
}