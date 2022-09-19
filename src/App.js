import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';

function App() {
  const [question, setQuestion] = useState(data);
  
  return ( <main>
<div className="container">
<h3>question and answer about front end</h3>

<section className="info">
  {question.map((question) => {

return ( <SingleQuestion key = {question.id} {...question}> </SingleQuestion>
);}
  )}
</section>
</div>
  </main>
) } 

export default App;

// import React, { useState } from 'react';
// import data from './data';
// import SingleQuestion from './Question';
// function App() {
//   const [questions, setQuestions] = useState(data);
//   return (
//     <main>
//       <div className='container'>
//         <h3>questions and answers about front end</h3>
//         <section className='info'>
//           {questions.map((question) => {
//             return (
//               <SingleQuestion key={question.id} {...question}></SingleQuestion>
//             );
//           })}
//         </section>
//       </div>
//     </main>
//   );
// }

// export default App;