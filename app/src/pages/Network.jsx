import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import data from "./data.json";
import { Link } from 'react-router-dom';

const Network = () => {
  return (
    <div className="top-24 mt-32  md:px-10 px-5 h-screen">
      <h1 className="text-2xl text-center text-gray-700">Network Connectivity Troubleshoot</h1>
      {data.map((section) => {
        if (section.title === "Network Connectivity") {
          return section.questions.map((question, questionIndex) => (
            <Accordion key={`question-${questionIndex}`}>
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                aria-controls={question['aria-controls']}
                id={question.id}
              >
                <Typography>{question.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{question.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ));
        }
        return null;
      })}
      
      <div className="flex justify-between mt-5">
        <Link to='/' className="text-sm text-blue-500"></Link>
        <Link to='/hardware' className="text-sm text-blue-500">Hardware issues --&gt;</Link>
      </div>

    </div>
  )
}

export default Network