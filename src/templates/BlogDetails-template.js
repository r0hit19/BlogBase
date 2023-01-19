import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../pages/component/Layout';
import './BlogDetails-template.css'

export default function BlogDetails({data}) {
  return (
    <div>
      <Layout>
        <div className='box'>
        <h1>{data.airtable.data.Title}</h1>
        <img src={data.airtable.data.image} alt={"image"+data.airtable.data.SID} width={"70%"} height={"50%"}/>
        <p>{data.airtable.data.Description}</p>
        </div>
      </Layout>
    </div>
  );
}

export const data=graphql`
query MyDataSid($Sid:Int) {
    airtable(data: {SID: {eq: $Sid}}) {
      data {
        Title
        Description
        SID
        image
      }
    }
  }
`