import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const JobCard = ({job}) => {
    return (
      <Link to={`/job/${job._id}`} className='w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all'>
        <div className='flex items-center justify-between'>
          <span className='text-xs  text-gray-800 '>
          Deadline: {new Date(job.deadline).toLocaleDateString()}

          </span>
          <span className='px-3 py-1 text-[8px] text-black uppercase bg-blue-200 rounded-full '>
           {job.category}
          </span>
        </div>
  
        <div>
          <h1 className='mt-2 text-lg font-semibold text-gray-800 '>
            {job.job_title}
          </h1>
  
          <p className='mt-2 text-sm text-gray-600 '>
            {job.description}
          </p>
          <p className='mt-2 text-sm font-bold text-gray-600 '>
            Range: ${job.min_price} - ${job.max_price}
          </p>
        </div>
      </Link>
    )
  }
  
  JobCard.propTypes = {
    job: PropTypes.shape({
      job_title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      min_price: PropTypes.number.isRequired,
      max_price: PropTypes.number.isRequired,
      _id: PropTypes.string.isRequired,
      deadline: PropTypes.instanceOf(Date).isRequired,
    }).isRequired,
  }

  export default JobCard