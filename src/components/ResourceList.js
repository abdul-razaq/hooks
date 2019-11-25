import React, { useState, useEffect } from 'react';
import axios from 'axios';


const ResourceList = ({ resource }) => {

  const [resources, setResources] = useState([]);

  const fetchResource = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);

    this.setState({ resources: response.data });
  };

  // Every time our component get rendered to the screen or updated, this inner function taken as an argument to useEffect hook gets called.
  useEffect(() => {


  }, []);

  return (
    <div>{resources.length}</div>
  );
}

export default ResourceList;
