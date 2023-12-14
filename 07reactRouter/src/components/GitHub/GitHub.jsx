// import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const GitHub = () => {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch('https://api.github.com/users/Mohitbhandare')
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  return (
    <div className="text-center m-4 bg-gray-500 text-white p-4 text-3xl">
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="" width={100} />
    </div>
  );
};

export default GitHub;

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/Mohitbhandare');
  return response.json();
};
