import React from 'react';

const Rankings = () => {
  return (
    <div style={{textAlign:"center"}}>
      <h2 style={{color:"red", margin:"20px auto"}}> Rankings Components</h2>
    </div>
  );
}

export default Rankings;












// import React from 'react';

// const Rankings = ({ rankedDishes }) => {
//   return (
//     <div>
//       <h2>Rankings</h2>
//       {rankedDishes.map((dish, index) => (
//         <div key={dish.id}>
//           <h3>{index + 1}. {dish.dishName}</h3>
//           <p>Points: {dish.points}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Rankings;
