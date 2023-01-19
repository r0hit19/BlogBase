import React from 'react';
import {graphql,useStaticQuery,Link} from 'gatsby';
import './BlogList.css'
export default function BlogList() {
    const data=useStaticQuery(graphql`
    query MyQuery {
        allAirtable(sort: {id: ASC}) {
          nodes {
            data {
              Description
              SID
              Title
              image
            }
          }
        }
      }
    `) 
  return (
    <div>
        {data.allAirtable.nodes.map((el)=>{
        return (
            <div className='card' key={el.data.SID}>
                <img src={el.data.image} alt={"image"+el.data.SID} width={"500px"} height={"300px"}/>
                <div className='card-content'>
                    <h2>{el.data.Title}</h2>
                    <p>{el.data.Description}</p>
                    <Link to={"/"+el.data.Title} >Read More</Link>
                </div>
            </div>
            );
    })}
     </div>
  );
}
