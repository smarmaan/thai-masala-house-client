import React, { useRef } from "react";
import ReactToPrint from "react-to-print";

const Blog = () => {
  const ref = useRef();

  return (
    <div>
      <div ref={ref}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. A eos
          tenetur quis explicabo, quam non nisi! Amet aperiam velit nemo.
        </p>
      </div>

      <ReactToPrint
        trigger={() => <div className="btn">Print</div>}
        content={() => ref.current}
      />
    </div>
  );
};

export default Blog;
