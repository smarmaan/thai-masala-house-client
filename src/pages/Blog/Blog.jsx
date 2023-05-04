import React, { useRef } from "react";
import ReactToPrint from "react-to-print";

const Blog = () => {
  const ref = useRef();

  return (
    <div>
      <div ref={ref}>
        <header className="m-2 sm:m-5 md:m-10 ">
          <div className=" bg-orange-100 rounded-3xl drop-shadow-2xl p-5">
            <h1 className="ml-6 text-center normal-case text-lg md:text-xl lg:text-3xl text-orange-600 ">
              <span className="font-bold text-1xl md:text-3xl">Question</span>
              <span className="text-1xl md:text-3xl"> Answer </span> section
            </h1>
          </div>
        </header>

        {/* 


 */}

        <main className="mt-5 w-[95%] md:w-[70%] bg-blue-100 gap-9 p-8 mx-auto rounded-2xl drop-shadow-2xl mb-10">
          {/* 


             */}

          <section className="mt-5 w-[100%] bg-orange-100 gap-9 p-8 mx-auto rounded-2xl drop-shadow-2xl mb-10">
            <h1 className="font-bold text-3xl text-center mb-5 p-5 pt-5 mt-4">
              Differences between uncontrolled and controlled components.?
            </h1>

            <p className="text-justify  md:text-center  text-cyan-800 font-medium mb-7 pb-10 p-5">
              Uncontrolled components are components that manage their own state
              internally. This means that the component's state is not
              controlled by React, and the parent component cannot directly
              access or modify its state. Instead, the parent component can only
              interact with the uncontrolled component through its props or
              events. <br></br> Controlled components, on the other hand, are
              components that rely on their parent components to manage their
              state. This means that the component's state is controlled by
              React, and the parent component can access and modify its state by
              passing down props or callbacks. Controlled components offer more
              control over the component's state, making it easier to manage
              form inputs and handle user interactions. However, they can also
              be more verbose and require more code to set up. Uncontrolled
              components, on the other hand, are simpler and require less code,
              but they can be harder to control and can lead to unexpected
              behavior. --------------------
              <br /> <br />
              <strong className="font-bold text-lg text-red-800"></strong>
            </p>
          </section>

          {/* 


 */}

          <section className="mt-5 w-[100%] bg-orange-100 gap-9 p-8 mx-auto rounded-2xl drop-shadow-2xl mb-10">
            <h1 className="font-bold text-3xl text-center mb-5 p-5 pt-5 mt-4">
              How to validate React props using PropTypes?
            </h1>

            <p className="text-justify  md:text-center  text-cyan-800 font-medium mb-7 pb-10 p-5">
              React provides a package called prop-types for validating the
              props passed to a component. You can use prop-types to define the
              expected types and shapes of the props and get warnings in the
              console if the actual props don't match the expected ones.
              <br />
              The PropTypes.string validator function is used to validate that
              the name prop is a string, and the PropTypes.isRequired validator
              function is used to ensure that the name prop is required and must
              be provided by the parent component. If the parent component
              doesn't provide a name prop or provides a prop with a different
              type than string, React will display a warning in the console.
              <br />
              Using propTypes to validate props can help catch errors early in
              the development process and make your code more reliable and
              maintainable.
            </p>
          </section>

          {/* 


 */}
          <section className="mt-5 w-[100%] bg-orange-100 gap-9 p-8 mx-auto rounded-2xl drop-shadow-2xl mb-10">
            <h1 className="font-bold text-3xl text-center mb-5 p-5 pt-5 mt-4">
              the difference between nodejs and express js.{" "}
            </h1>

            <p className="text-justify  md:text-center  text-cyan-800 font-medium mb-7 pb-10 p-5">
              Node.js and Express.js are two different technologies that are
              often used together to build web applications. Node.js is a
              JavaScript runtime built on the V8 JavaScript engine that allows
              developers to run JavaScript code on the server-side. Node.js
              provides a platform for building scalable and high-performance
              network applications, including web servers, RESTful APIs, and
              real-time communication applications. Node.js provides a set of
              built-in modules, such as http, fs, and path, that allow
              developers to perform common tasks like handling requests, reading
              and writing files, and managing directories. Express.js, on the
              other hand, is a web framework built on top of Node.js that
              provides a set of tools and features for building web applications
              and APIs. Express.js simplifies the process of handling HTTP
              requests, routing, middleware, and creating RESTful APIs. It
              provides a clean and organized structure for building web
              applications and can be easily extended with third-party
              middleware and plugins. In summary, Node.js is a JavaScript
              runtime that allows developers to run JavaScript on the
              server-side, while Express.js is a web framework built on top of
              Node.js that provides a set of tools and features for building web
              applications and APIs. Node.js provides the underlying platform
              and features that make it possible to build web applications,
              while Express.js provides a streamlined and organized approach to
              building web applications and APIs on top of Node.js.
            </p>
          </section>

          {/* 


 */}
          <section className="mt-5 w-[100%] bg-orange-100 gap-9 p-8 mx-auto rounded-2xl drop-shadow-2xl mb-10">
            <h1 className="font-bold text-3xl text-center mb-5 p-5 pt-5 mt-4">
              What is a custom hook, and why will you create a custom hook?{" "}
            </h1>

            <p className="text-justify  md:text-center  text-cyan-800 font-medium mb-7 pb-10 p-5">
              In React, a custom hook is a function that allows you to reuse
              logic across multiple components. It's a way to extract common
              logic into a reusable function, similar to how you might create a
              utility function to avoid repeating code. Custom hooks follow the
              naming convention of starting with the word "use" and can use
              other hooks, including built-in hooks like useState, useEffect,
              and useContext. Custom hooks can be used in functional components
              just like any other hook, and they can be shared across multiple
              components.
              <br />
              There are several reasons why you might create a custom hook:
              <br />
              Reusing logic: If you find yourself repeating the same logic
              across multiple components, a custom hook can help you extract
              that logic into a single place and reuse it in other components.
              <br />
              Abstraction: Custom hooks can help you abstract complex logic and
              make it easier to understand and manage. For example, you could
              create a custom hook that handles form validation logic, or one
              that handles API calls.
              <br />
              Code organization: Custom hooks can help you organize your code by
              grouping related functionality into a single place.
              <br />
              Testing: Custom hooks can be tested independently, which makes it
              easier to test the functionality of your application.
            </p>
          </section>

          {/* 


 */}
          <section className="mt-5 w-[100%] bg-orange-100 gap-9 p-8 mx-auto rounded-2xl drop-shadow-2xl mb-10">
            <h1 className="font-bold text-3xl text-center mb-5 p-5 pt-5 mt-4">
              ...Thanks for having patience... <br /> ...while reading my
              Answers of the particular Questions...
            </h1>

            <h1 className="font-bold text-2xl text-center text-red-800 mb-5 p-5 pt-5 mt-4">
              N.B. : ----- All the answers were written by me and modified by
              me... But few lines were inspired from Google...
            </h1>
          </section>

          {/* 


 */}
        </main>
      </div>

      <ReactToPrint
        trigger={() => (
          <div className="flex my-24">
            <div className="btn-lg mx-auto btn text-white font-bold  bg-[#f58d17bb] hover:bg-[#bd6507] border-0">
              Print
            </div>
          </div>
        )}
        content={() => ref.current}
      />
    </div>
  );
};

export default Blog;
