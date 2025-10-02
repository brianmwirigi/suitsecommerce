import { Button } from "@/components/ui/button";
import React from "react";

//arrow function
const Home = () => {
  return (
    <div className="p-10 bg-shop-light-pink">
      <h1 className="text-xl font-semibold">Welcome to Home</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
        deleniti laudantium, labore nisi earum quibusdam quisquam beatae ullam
        consectetur incidunt modi cum dicta quaerat! Sint reprehenderit ad
        suscipit enim nam!
      </p>
      <br />
      <Button size="lg">Click Me</Button>
      
    </div>
    
  );
};

//passin name of the function
export default Home;
//function declaration
