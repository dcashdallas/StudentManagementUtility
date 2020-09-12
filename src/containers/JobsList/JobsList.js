import React from "react";
import { Alert, CardColumns } from "react-bootstrap";
import JobItem from "./../../components/JobItem/JobItem";
import './JobsList.css'

export default function JobsList({ jobs }) {
  const hasJobs = jobs.length === 0 ? true : false
  console.log("hasjobs", hasJobs)
  return hasJobs ? (
    <Alert variant="dark">Loading..... </Alert>
  ) :
    (
      <>
        <CardColumns>
          {jobs.map(job => (
            <JobItem key={job.id} job={job} />
          ))}
        </CardColumns>
      </>
    );
}
