import Buttong from "../components/Buttong";
import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from "react-router-dom";
import Form from "../components/Form";

function SocialDetails() {
  const { id } = useParams();
  const [program, setProgram] = useState(null);
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://my-json-server.typicode.com/brasilcursinhos/fake-rest-api/programs');
      setPrograms(response.data);
    }
    fetchData();
  }, []);

  const getProgramById = useCallback((programId) => {
    return programs.find(program => program.id === parseInt(programId));
  }, [programs]);
  
  useEffect(() => {
    const selectedProgram = getProgramById(id);
    setProgram(selectedProgram);
  }, [id, getProgramById]);

  if (!program) return <p>Carregando...</p>;

  const { description, objectives, goals, impact } = program;

  return (
    <div class="md:h-full mt-6">
        <article class="p-3 text-center text-blue-800 shadow-lg m-4 bg-yellow-50 rounded-xl mb-6 xl:w-3/12 md:max-w-lg md:m-auto md:mb-6 xl:m-5 xl:mx-auto">
      <h1 class="mb-5">Descrição: {description}</h1>
      <h2 class="mb-5">Objetivos: {objectives}</h2>
      <h2 class="mb-5">Metas: {goals}</h2>
      <h2 class="mb-5">Impacto: {impact}</h2>
      <Link to="/doar"><Buttong text="Doar Agora"/></Link>
      </article>
      <Form />
    </div>
  );
}

export default SocialDetails;