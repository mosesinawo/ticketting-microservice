import buildClient from "../api/build-client";

const Home = ({ currentUser }) => {
  console.log(currentUser);

  return (
    <div>
      {currentUser ? <h1>You are signed In</h1> : <h1>You are sign out</h1>}
    </div>
  );
};

Home.getInitialProps = async (context) => {
  const client = buildClient(context);
  const { data } = await client.get("/api/users/currentuser");
  return data;
};
export default Home;
