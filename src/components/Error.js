import { useRouteError } from "react-router";
const Error = () => {
  const err = useRouteError();
  // console.log(err);
  return (
    <div>
      <h1>Oops!!😐 Something went wrong!</h1>
      <h2>
        {err.status} : {err.error.message}
      </h2>
    </div>
  );
};

export default Error;
